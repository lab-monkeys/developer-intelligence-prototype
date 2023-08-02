'use client'

import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'
import { Button } from '@/components/ui/button'
import LogoGithub from '@/public/logos/logo--github.svg'

// Temporarily disable authentication using useRouter. Restore using click function:
// onClick={() => signIn('github', { callbackUrl: '/dashboard' })}
// onClick={() => router.push('/dashboard')}

export default function ButtonSignInGithub() {

  // temporary
  const router = useRouter()

  return (
    <Button type="button" size="lg" onClick={() => signIn('github', { callbackUrl: '/dashboard' })}>
      <span className="mr-2 w-4 h-4">
        <LogoGithub />
      </span>
      <span>Sign in with Github</span>
    </Button>
  )
}