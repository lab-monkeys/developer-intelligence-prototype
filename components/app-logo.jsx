'use client'

import { useTheme } from "next-themes"
import Logo from '@/public/logos/logo--developer-intelligence.svg'
import LogoDark from '@/public/logos/logo--developer-intelligence--dark.svg'

export function AppLogo() {
  
  const { resolvedTheme } = useTheme()

  return (
    <div>
      {resolvedTheme === 'light' && <Logo className="w-full h-full" />}
      {resolvedTheme === 'dark' && <LogoDark className="w-full h-full" />}
    </div>
  )
}