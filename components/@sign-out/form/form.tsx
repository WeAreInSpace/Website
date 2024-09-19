"use client"

import Link from "next/link";
import { useState, useEffect } from "react";
import { useFormStatus, useFormState } from "react-dom";
import "./form.scss"
import { signIn, signOut } from "next-auth/react";

export function SignOutForm() {
    return (
        <>
            <div className="sign_out-pack">
                <div className="sign_out">
                    <div className="sign_out-logo">
                        <Link href={"/"}>
                            <div className="sign_out-wais-logo"></div>
                        </Link>
                    </div>

                    <h1 className="sign_out-title fP-2">Sign out</h1>

                    <div className="sign_out-form-pack">
                        <div className="sign_out-form">
                            <p className="sign_out-question fP-4">Do you want to sign out</p>
                            <button className="sign_out-submit-button fP-4" onClick={() => signOut({callbackUrl: "/"})}>Sign out</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}