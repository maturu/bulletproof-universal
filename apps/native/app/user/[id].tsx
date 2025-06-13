import { UserDetailScreen } from '@repo/app/src/features/user/detail-screen'
import { client } from '@repo/app/src/lib/trpc'
import { Stack } from 'expo-router'
import { useParams } from 'solito/navigation'

export default function Screen() {
  const { id } = useParams()
  const { data } = client.userById.useQuery({ id: Number(id) })
  console.log(data)

  return (
    <>
      <Stack.Screen
        options={{
          title: 'User',
          presentation: 'modal',
          animation: 'slide_from_right',
          gestureEnabled: true,
          gestureDirection: 'horizontal',
        }}
      />
      <UserDetailScreen id={id as string} />
    </>
  )
}
