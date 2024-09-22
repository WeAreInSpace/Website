"use server"

export async function setupProfile(prevState: any, formData: FormData) {
    const a = formData.get("a")
    return { message: "A", link: "A" }
}