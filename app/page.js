import Image from 'next/image'
import Link from 'next/link'
import ButtonSignInGithub from '@/components/button-signin-github'
import ButtonSignInGoogle from '@/components/button-signin-google'
import SignInPhoto from '@/public/images/image--sign-in.jpg'
import BlurImage from '@/components/blur-image'
import { AppLogo } from '@/components/app-logo'

export const metadata = {
  title: 'Dashboard - Red Hat Developer Intelligence'
}

export default function AuthenticationPage() {
  return (
    <>
      <div className="container relative hidden h-full flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-5 lg:px-0">

        <div className="relative h-full flex flex-col justify-center lg:p-8 lg:col-span-2 bg-background pattern-background">
          <div className="absolute top-16 left-16 h-10 flex z-20 flex items-center text-lg font-medium">
            <AppLogo />
            <h1 className="visually-hidden">Red Hat Developer Intelligence</h1>
          </div>
          <div className="mx-auto flex w-full flex-col space-y-6 w-3/4 2xl:w-2/4 px-8 xl:px-0">
            <div className="flex flex-col mb-4 space-y-2 text-center">
              <h2 className="text-3xl	font-bold tracking-tight">Sign in</h2>
            </div>
            <ButtonSignInGithub />
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Or
                </span>
              </div>
            </div>
            <ButtonSignInGoogle />
            <p className="px-8 text-center text-sm text-muted-foreground">By signing in, you agree to our <Link href="https://www.redhat.com/en/about/terms-use">terms of service</Link> and <Link href="https://www.redhat.com/en/about/privacy-policy">privacy policy</Link>.</p>          
          </div>
        </div>

        <div className="relative hidden h-full flex-col bg-zinc-900 p-32 text-white dark:border-r lg:flex lg:col-span-3">
          <div className="relative z-30 mt-auto text-white border-l-4 border-red-600 pl-8">
            <div className="font-bold text-base">Red Hat Developer Intelligence&trade;</div>
            <div className="font-semibold text-3xl tracking-tight mt-1">Redefine development and unlock your potential</div>
            <p className="mt-4">Elevate your development game with Red Hat Developer Intelligence and witness how this game-changing product unlocks new levels of efficiency, collaboration, and excellence in software development. Embrace the future of coding with confidence, precision, and intelligence at your fingertips.</p>
          </div>
          <div className="absolute z-20 inset-0 bg-gradient-to-t from-zinc-900 to-transparent" />
          <BlurImage className="absolute top-0 left-0" image={SignInPhoto} alt={'Developer looking at their laptop while they work'} />
        </div>

      </div>
    </>
  )
}