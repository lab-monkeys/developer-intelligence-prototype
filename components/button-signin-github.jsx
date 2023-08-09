'use client'

import { useState } from 'react'
import { useTheme } from 'next-themes'
import { signIn } from 'next-auth/react'
import { Button } from '@/components/ui/button'
import LogoGithub from '@/public/logos/logo--github.svg'
import LogoGitHubDark from '@/public/logos/logo--github--dark.svg'
import { Loader2 } from "lucide-react"

export default function ButtonSignInGithub() {

  const { resolvedTheme } = useTheme()
  const [loading, setLoading] = useState(false)

  function handleClick() {
    setLoading(loading => !loading)
    signIn('github', { callbackUrl: '/dashboard' })
  }

  return (
    <Button type="button" size="lg" onClick={handleClick}>
      {loading && <Loader2 className="mr-2 h-6 w-6 animate-spin" />}
      {!loading && (
        <>
          <span className="mr-2 w-4 h-4">
            {resolvedTheme === 'dark' && <LogoGitHubDark />}
            {resolvedTheme === 'light' && <LogoGithub />}
          </span>
          <span>Sign in with Github</span>
        </>
      )}
    </Button>
  )
}