'use client'

import { signIn } from 'next-auth/react'
import { Button } from '@/components/ui/button'
import LogoGithub from '@/public/logos/logo--github.svg'

export default function ButtonSignInGithub() {
  return (
    <Button type="button" size="lg" onClick={() => signIn('github', { callbackUrl: '/dashboard' })}>
      <span className="mr-2 w-4 h-4">
        <LogoGithub />
      </span>
      <span>Sign in with Github</span>
    </Button>
  )
}