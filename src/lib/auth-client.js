import { createAuthClient } from "better-auth/react"
export const authClient = createAuthClient({
   
    baseURL: "https://assignment-8-six-pink.vercel.app"
})

export const { signIn, signUp, useSession } = createAuthClient()