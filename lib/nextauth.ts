import type { NextAuthOptions } from "next-auth"

import GoogleProvider from "next-auth/providers/google"
import EmailProvider from "next-auth/providers/email"
import { prisma } from "@/lib/prisma"
import type { Adapter } from "next-auth/adapters"
import { createTransport } from "nodemailer"
import { PrismaAdapter } from "@auth/prisma-adapter"

export const config: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
        }),
        EmailProvider({
            server: {
                service: "Gmail",
                host: process.env.EMAIL_SERVER_HOST,
                port: process.env.EMAIL_SERVER_PORT as unknown as number,
                auth: {
                    user: process.env.EMAIL_SERVER_USER,
                    pass: process.env.EMAIL_SERVER_PASSWORD
                }
            },
            from: process.env.EMAIL_FROM,
            async sendVerificationRequest({ identifier: email, url, provider: { server, from } }) {
                const transport = createTransport(server)
                const { host } = new URL(url)
                const result = await transport.sendMail({
                    to: email,
                    from: from,
                    subject: `Sign in to ${host}`,
                    text: text({ url, host }),
                    html: html({ url, host }),
                })
                const failed = result.rejected.concat(result.pending).filter(Boolean)
                if (failed.length) {
                    throw new Error(`Email(s) (${failed.join(", ")}) could not be sent`)
                }
            },
            generateVerificationToken() {
                if (process.env.EMAIL_TOKEN_KEY) {
                    return process.env.EMAIL_TOKEN_KEY
                } else {
                    return ""
                }
            },
            normalizeIdentifier(identifier: string): string {
                let [local, domain] = identifier.toLowerCase().trim().split("@")
                domain = domain.split(",")[0]
                return `${local}@${domain}`
            },
        })
    ],
    adapter: PrismaAdapter(prisma) as Adapter,
    callbacks: {
        async signIn({ user, account, email }) {
            if (account?.provider === "email") {
                if (!user.email) {
                    const redirectTo = new URLSearchParams()
                    redirectTo.append("message", "Email cannot be null or undefined. Email is require in our database if email is null or undefind, server will cannot query user_data in database (Are you hacking.)")
                    return "/error?" + redirectTo.toString()
                }
                const emailCount = await prisma.user.count({
                    where: {
                        email: user.email
                    },
                    select: {
                        email: true
                    }
                })
                if (emailCount.email > 0) {
                    return true;
                } else {
                    return "/create-account";
                }
            } else {
                return true
            }
        }
    },
    secret: process.env.NEXTAUTH_SECRET,
    logger: {
        error(code, ...message) {
            console.error(code, message)
        },
        warn(code, ...message) {
            console.warn(code, message)
        },
        debug(code, ...message) {
            console.debug(code, message)
        }
    },
    pages: {
        signIn: '/sign-in',
        signOut: '/sign-out',
        error: '/auth/error',
        verifyRequest: '/auth/verify-request',
        newUser: '/create-account'
    }
}

function html(params: { url: string, host: string }) {
    const { url, host } = params
    return `
          <html>
  
          <head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link
              href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
              rel="stylesheet" />
          </head>
  
          <body>
            <style>
              * {
                image-rendering: optimizeSpeed;
                padding: 0;
                margin: 0;
              }
  
              .poppins-regular {
                font-family: "Poppins", sans-serif;
                font-weight: 400;
                font-style: normal;
              }
  
              .poppins-medium {
                font-family: "Poppins", sans-serif;
                font-weight: 500;
                font-style: normal;
              }
  
              .poppins-bold {
                font-family: "Poppins", sans-serif;
                font-weight: 700;
                font-style: normal;
              }
  
              .cont {
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
              }
  
              .confirm-button {
                background-color: rgb(0, 142, 250);
                color: rgb(255, 255, 255);
                padding: 3px 18px;
                font-size: 16px;
                border-radius: 5px;
                cursor: pointer;
                text-decoration: none;
              }
  
              .logo {
                width: 110px;
              }
            </style>
            <div class="cont">
              <img src="https://www.weareinspace.net/Logo/WAIS-Dark.svg" class="logo" />
              <br />
              <h1 class="poppins-bold">Verify your email address</h1>
              <br />
              <p class="poppins-regular">
                We just need to verify your email address before you can access <span class="poppins-medium">We Are In Space
                  Website.</span>
              </p>
              <br />
              <p class="poppins-regular">Click the light blue button below to verify your email address.</p>
              <br />
              <a href="${url}" class="confirm-button poppins-medium">Verify</a>
            </div>
  
          </body>
  
          </html>
      `
}

function text({ url, host }: { url: string, host: string }) {
    return `Sign in to ${host}\n${url}\n\n`
}