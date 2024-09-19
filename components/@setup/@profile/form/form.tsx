"use client"

import { setupProfile } from "./form.action";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useFormStatus, useFormState } from "react-dom";
import "./form.scss"

const Submit = ({ isntRunning, isRunning }: { isntRunning: string, isRunning: string }) => {
    const { pending, data, method, action } = useFormStatus();
    return (
        <button disabled={pending} type="submit" className="setup-profile-submit-button fP-5">
            {pending ? isRunning : isntRunning}
        </button>
    )
}

export function SetupProfileForm() {
    const [setupProfileFormActionState, setupProfileFormAction] = useFormState(setupProfile, { message: "", link: "" });
    const [error, setError] = useState<string | undefined>("")
    const [link, setLink] = useState<string | undefined>("")

    useEffect(() => {
        setError(setupProfileFormActionState.message)
        if (setupProfileFormActionState.link) {
            setLink(setupProfileFormActionState.link)
        } else {
            setLink(undefined)
        }
    }, [setupProfileFormActionState.link, setupProfileFormActionState.message])
    return (
        <div className="setup-profile-pack">
            <div className="setup-profile">
                <div className="setup-profile-logo">
                    <Link href={"/"}>
                        <div className="setup-profile-wais-logo"></div>
                    </Link>
                </div>

                <h1 className="setup-profile-title fP-2">Create your profile</h1>

                <div className="setup-profile-form-pack">
                    {error &&
                        <div className="setup-profile-form-message fP-4">
                            <p>{error}{link && <span> <Link href={link}>More info</Link></span>}</p>
                        </div>
                    }
                    <form action={setupProfileFormAction} className="setup-profile-form">
                        <input name="profile_image" type="file" className="setup-profile-input-file fPr-4" />
                        <Submit isRunning="Createing" isntRunning="Create" />
                    </form>
                </div>
            </div>
        </div>
    )
}