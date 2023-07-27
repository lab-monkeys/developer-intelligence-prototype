import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Red Hat Developer Intelligence'
}

export default function Page() {
  return (
    <>
    <Image src="/logos/logo--developer-intelligence.svg" alt="Red Hat Developer Intelligence logo" width={330} height={32} />
    <h1>Red Hat Developer Intelligence</h1>
    <Link href="/dashboard">Go to dashboard</Link>
    </>
  )
}