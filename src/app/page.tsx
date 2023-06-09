import React from 'react'
import Signature from './components/Signature'
import Hero from './components/Hero'
import Signin from './components/Signin'
import EmptyMemories from './components/EmptyMemories'
import { cookies } from 'next/dist/client/components/headers'

export default function Home() {
  const isAuthenticaded = cookies().has('token')
  return (
    <main className="grid min-h-screen grid-cols-2">
      {/* section left */}
      <div className="border-white/10 bg-cover relative flex flex-col items-start justify-between overflow-hidden border-r bg-[url(../assets/bg-stars.svg)] px-28 py-16">
        <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-700 opacity-50 blur-full" />
        <div className="absolute bottom-0 right-2 top-0 w-2 bg-stripes" />
        {isAuthenticaded ? <p>oiiiii</p> : <Signin />}

        <Hero />
        <Signature />
      </div>

      {/* section right */}
      <div className="bg-cover flex flex-col bg-[url(../assets/bg-stars.svg)] p-16">
        <EmptyMemories />
      </div>
    </main>
  )
}
