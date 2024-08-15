'use client'

import { React, useState } from 'react'
import { signIn } from 'next-auth/react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Logo from './icons/openshift.svg';
import { Loader2 } from "lucide-react"

export default function ButtonSignInOpenShift() {

  const [loading, setLoading] = useState(false)

  function handleClick() {
    setLoading(loading => !loading)
    signIn('openshift', { callbackUrl: '/dashboard' })
  }

  return (
    <Button className="w-full" variant="outline" size="lg" type="button" onClick={handleClick}>
      {loading && <Loader2 className="mr-2 h-6 w-6 animate-spin" />}
      {!loading && (
        <>
          <span className="mr-2 w-4 h-4">
            <Image src="/logos/openshift.svg" width={1000} height={500} alt="OpenShift Logo" />
          </span>
          <span>Sign in with OpenShift</span>
        </>
      )}
    </Button>
  );
}
