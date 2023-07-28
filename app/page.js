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

        <div className="relative h-full flex flex-col justify-center lg:p-8 lg:col-span-2">
          <div className="absolute top-16 left-16 h-10 flex z-20 flex items-center text-lg font-medium">
            <Image src="/logos/logo--developer-intelligence.svg" alt="Red Hat Developer Intelligence logo" width={330} height={32} />
            <h1 className="visually-hidden">Red Hat Developer Intelligence</h1>
          </div>

          <div className="mx-auto flex w-full flex-col  space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-4xl	font-semibold tracking-tight">Sign in</h1>
              <p className="text-sm text-muted-foreground">Enter your email below to create your account</p>
            </div>

            <Link href="/dashboard" className={buttonVariants()}>Go to dashboard</Link>
            <p className="px-8 text-center text-sm text-muted-foreground">By clicking continue, you agree to our Terms of Service and Privacy Policy.</p>
          </div>
        </div>

        <div className="relative hidden h-full flex-col bg-muted p-32 text-white dark:border-r lg:flex lg:col-span-3">

          <div className="relative z-30 mt-auto text-white border-l-4 border-red-600 pl-8">
            <div className="font-bold text-base">Developer Intelligence</div>
            <div className="font-semibold text-3xl tracking-tight mt-1">Run and manage applications anywhere</div>
            <p className="mt-4">The flexibility to run your applications across environments—from bare metal to virtual machines (VMs), edge computing, private cloud, and public clouds—without having to rebuild applications, retrain people, or maintain disparate environments is the outcome of implementing an open hybrid cloud strategy.</p>
          </div>
          <div className="absolute z-20 inset-0 bg-gradient-to-t from-zinc-900 to-transparent" />
          <Image className="relative object-cover z-10" src={SignInPhoto} alt="Authentication" placeholder="blur" fill priority />
        </div>


      </div>
    </>
  )
}