"use client"

import Link from "next/link";
import { useState, useEffect } from "react";
import { useFormStatus, useFormState } from "react-dom";
import { createUser } from "./form.action";
import "./form.scss"
import { signIn } from "next-auth/react";

const Submit = ({ isntRunning, isRunning }: { isntRunning: string, isRunning: string }) => {
    const { pending, data, method, action } = useFormStatus();
    return (
        <button disabled={pending} type="submit" className="create_account-submit-button fP-5">
            {pending ? isRunning : isntRunning}
        </button>
    )
}

export function CreateAccountForm() {
    const [formCreateAccountActionState, formCreateAccountAction] = useFormState(createUser, { message: "" });
    const [error, setError] = useState<string | undefined>("")
    const [link, setLink] = useState<string | undefined>("")

    useEffect(() => {
        setError(formCreateAccountActionState.message)
        if (formCreateAccountActionState.link) {
            setLink(formCreateAccountActionState.link)
        } else {
            setLink(undefined)
        }
    }, [formCreateAccountActionState.link, formCreateAccountActionState.message])

    return (
        <>
            <div className="create_account-pack">
                <div className="create_account">
                    <div className="create_account-logo">
                        <Link href={"/"}>
                            <div className="create_account-wais-logo"></div>
                        </Link>
                    </div>

                    <h1 className="create_account-title fP-2">Create account</h1>

                    <div className="create_account-form-pack">
                        {error &&
                            <div className="create_account-form-message fP-4">
                                <p>{error}{link && <span> <Link href={link}>More info</Link></span>}</p>
                            </div>
                        }
                        <div>
                            <button className="create_account-with-google fP-4" onClick={() => signIn("google")}>
                                <img src="/Login/G.png" style={{ width: "19px", height: "19px" }}></img>
                                Create account with Google
                            </button>
                        </div>
                        <form action={formCreateAccountAction} className="create_account-form">
                            <input name="username" type="text" placeholder="Username" className="create_account-input fPr-4" />
                            <input name="email" type="email" placeholder="Email" className="create_account-input fPr-4" />
                            <Submit isRunning="Createing" isntRunning="Create" />
                        </form>
                    </div>

                    <div>
                        <p className="create_account-question fP-4">Already have an account? <Link href="/sign-in">Sign in</Link></p>
                    </div>
                </div>
            </div>
        </>
    )
}