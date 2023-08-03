'use client'

import { useTheme } from "next-themes"
import Logo from '@/public/logos/logo--developer-intelligence.svg'
import LogoDark from '@/public/logos/logo--developer-intelligence--dark.svg'

export function AppLogo() {
  
  const { resolvedTheme } = useTheme()

  return (
    <>
      {resolvedTheme === 'light' && <Logo />}
      {resolvedTheme === 'dark' && <LogoDark />}
    </>
  )
}