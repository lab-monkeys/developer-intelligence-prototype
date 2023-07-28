import Image from "next/image"
import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"

import SignInPhoto from '@/public/images/image--sign-in.jpg'

export const metadata = {
  title: 'Dashboard - Red Hat Developer Intelligence'
}

export default function AuthenticationPage() {
  return (
    <>
      <div className="container relative hidden h-full flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-5 lg:px-0">

        <div className="relative h-full flex flex-col justify-center lg:p-8 lg:col-span-2 pattern-background">
          <div className="absolute top-16 left-16 h-10 flex z-20 flex items-center text-lg font-medium">
            <Image src="/logos/logo--developer-intelligence.svg" alt="Red Hat Developer Intelligence logo" width={330} height={32} />
            <h1 className="visually-hidden">Red Hat Developer Intelligence</h1>
          </div>

          <div className="mx-auto flex w-full flex-col  space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h2 className="text-4xl	font-semibold tracking-tight">Sign in</h2>
              <p className="text-sm text-muted-foreground">Enter your email below to create your account</p>
            </div>

            <Link href="/dashboard" className={buttonVariants()}>Go to dashboard</Link>
            <p className="px-8 text-center text-sm text-muted-foreground">By clicking continue, you agree to our Terms of Service and Privacy Policy.</p>
          </div>
        </div>

        <div className="relative hidden h-full flex-col bg-muted p-32 text-white dark:border-r lg:flex lg:col-span-3">

          <div className="relative z-30 mt-auto text-white border-l-4 border-red-600 pl-8">
            <div className="font-bold text-base">Red Hat Developer Intelligence&trade;</div>
            <div className="font-semibold text-3xl tracking-tight mt-1">Redefine development and unlock your potential</div>
            <p className="mt-4">Elevate your development game with Red Hat Developer Intelligence and witness how this game-changing product unlocks new levels of efficiency, collaboration, and excellence in software development. Embrace the future of coding with confidence, precision, and intelligence at your fingertips.</p>
          </div>
          <div className="absolute z-20 inset-0 bg-gradient-to-t from-zinc-900 to-transparent" />
          <Image className="relative object-cover z-10" src={SignInPhoto} alt="Authentication" placeholder="blur" fill priority />
        </div>


      </div>
    </>
  )
}