"use client"

import Link from "next/link";
import { useState, useEffect } from "react";
import { useFormStatus, useFormState } from "react-dom";
import { signInAction } from "./form.action";
import { signIn, useSession } from "next-auth/react";
import "./form.scss"
import { redirect } from "next/navigation";

const Submit = ({ isntRunning, isRunning }: { isntRunning: string, isRunning: string }) => {
    const { pending, data, method, action } = useFormStatus();
    return (
        <button disabled={pending} type="submit" className="signin-submit-button fP-5">
            {pending ? isRunning : isntRunning}
        </button>
    )
}

export default function SigninForm() {
    const [formSignInActionState, formSignInAction] = useFormState(signInAction, { message: "" });
    const [error, setError] = useState<string | undefined>("")
    const sesssion = useSession()

    useEffect(() => {
        if (sesssion == null) {
            redirect("/dashboard")
        }
    }, [sesssion])

    useEffect(() => {

        setError(formSignInActionState.message)
    }, [formSignInActionState.message])

    return (
        <>
            <div className="signin-pack">
                <div className="signin">
                    <div className="signin-logo">
                        <Link href={"/"}>
                            <div className="signin-wais-logo"></div>
                        </Link>
                    </div>

                    <h1 className="signin-title fP-2">Sign in</h1>

                    <div className="signin-form-pack">
                        {error &&
                            <div className="signin-form-message fP-4">
                                <p>{error}</p>
                            </div>
                        }
                        <div>
                            <button className="signin-with-google fP-4" onClick={() => { signIn("google") }}>
                                <img src="/Login/G.png" style={{ width: "19px", height: "19px" }}></img>
                                Sign in with Google
                            </button>
                        </div>
                        <form action={formSignInAction} className="signin-form">
                            <input name="email" type="email" placeholder="Email" className="signin-input fPr-4" />
                            <Submit isRunning="Sign in" isntRunning="Sign in" />
                        </form>

                    </div>

                    <div>
                        <p className="signin-question fP-4">No account? <Link href="/create-account">Create</Link></p>
                    </div>
                </div>
            </div>
        </>
    )
}