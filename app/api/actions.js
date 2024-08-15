'use server'
import { signIn } from 'next-auth/react'

export async function signInUser (formData) {
    signIn("credentials", formData)
}