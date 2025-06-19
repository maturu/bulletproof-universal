import { HomeScreen } from '@repo/app/src/features/home/screen'
import { Stack } from 'expo-router'
import { useAuth } from '../hooks/auth'

export default function Screen() {
  const { signIn, signOut } = useAuth()

  return (
    <>
      <Stack.Screen
        options={{
          title: 'Home',
        }}
      />
      <HomeScreen handleSignIn={signIn} handleSignOut={signOut} />
    </>
  )
}
