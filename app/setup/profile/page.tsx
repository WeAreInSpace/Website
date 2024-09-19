import { SetupProfileForm } from "@/components/@setup/@profile/form/form";

export default async function SetupProfilePage({ params, searchParams }: { params: { slug: string }, searchParams: { [key: string]: string | string[] | undefined } }) {
    if (searchParams.email && searchParams.username && searchParams.setup === "true") {
        return (
            <>
                <SetupProfileForm></SetupProfileForm>
            </>
        )
    }
}