'use client'

import { signIn } from 'next-auth/react'
import { Button } from '@/components/ui/button'
import LogoGoogle from '@/public/logos/logo--google.svg'

export default function ButtonSignInGoogle() {  
  return (
    <Button variant="outline" size="lg" type="button" onClick={() => signIn('google', { callbackUrl: '/dashboard' })}>
      <span className="mr-2 w-4 h-4">
        <LogoGoogle />
      </span>
      <span>Sign in with Google</span>
    </Button>
  )
}