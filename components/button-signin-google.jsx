'use client'

import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'
import { Button } from '@/components/ui/button'
import LogoGoogle from '@/public/logos/logo--google.svg'

// Temporarily disable authentication using useRouter. Restore using click function:
// onClick={() => signIn('google', { callbackUrl: '/dashboard' })}
// onClick={() => router.push('/dashboard')}

export default function ButtonSignInGoogle() {

  // temporary
  const router = useRouter()

  return (
    <Button variant="outline" size="lg" type="button" onClick={() => signIn('google', { callbackUrl: '/dashboard' })}>
      <span className="mr-2 w-4 h-4">
        <LogoGoogle />
      </span>
      <span>Sign in with Google</span>
    </Button>
  )
}