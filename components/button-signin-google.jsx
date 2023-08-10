'use client'

import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { Button } from '@/components/ui/button'
import LogoGoogle from '@/public/logos/logo--google.svg'
import { Loader2 } from "lucide-react"

export default function ButtonSignInGoogle() {

  const [loading, setLoading] = useState(false)

  function handleClick() {
    setLoading(loading => !loading)
    signIn('google', { callbackUrl: '/dashboard' })
  }

  return (
    <Button className="w-full" variant="outline" size="lg" type="button" onClick={handleClick}>
      {loading && <Loader2 className="mr-2 h-6 w-6 animate-spin" />}
      {!loading && (
        <>
          <span className="mr-2 w-4 h-4">
            <LogoGoogle />
          </span>
          <span>Sign in with Google</span>
        </>
      )}
    </Button>
  )
}