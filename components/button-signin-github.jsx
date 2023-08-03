'use client'

import { useTheme } from 'next-themes'
import { signIn } from 'next-auth/react'
import { Button } from '@/components/ui/button'
import LogoGithub from '@/public/logos/logo--github.svg'
import LogoGitHubDark from '@/public/logos/logo--github--dark.svg'

export default function ButtonSignInGithub() {

  const { resolvedTheme } = useTheme()

  return (
    <Button type="button" size="lg" onClick={() => signIn('github', { callbackUrl: '/dashboard' })}>
      <span className="mr-2 w-4 h-4">
        {resolvedTheme === 'dark' && <LogoGitHubDark />}
        {resolvedTheme === 'light' && <LogoGithub />}
      </span>
      <span>Sign in with Github</span>
    </Button>
  )
}