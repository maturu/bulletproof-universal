'use client'

import { HomeScreen } from '@repo/app/src/features/home/screen'
import { signIn, signOut, useSession } from 'next-auth/react'

export default function Page() {
  const session = useSession()

  console.log(session.data)

  const handleSignIn = async () => {
    await signIn('auth0')
  }

  const handleSignOut = async () => {
    await signOut()
  }

  return <HomeScreen handleSignIn={handleSignIn} handleSignOut={handleSignOut} />
}
