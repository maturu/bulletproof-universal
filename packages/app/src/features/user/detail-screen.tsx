import { Button, Paragraph, YStack } from '@repo/ui'
import { ChevronLeft } from '@tamagui/lucide-icons'
import { useRouter } from 'solito/navigation'
import { client } from '../../lib/trpc'

export function UserDetailScreen({ id }: { id: string }) {
  const router = useRouter()
  if (!id) {
    return null
  }
  const { data } = client.userById.useQuery({ id: Number(id) })

  return (
    <YStack flex={1} justify="center" items="center" gap="$4" bg="$background">
      <Paragraph text="center" fontWeight="700" color="$blue10">{`User ID: ${id}`}</Paragraph>
      <Paragraph
        text="center"
        fontWeight="700"
        color="$blue10"
      >{`User Name: ${data?.name ?? 'Undefined'}`}</Paragraph>
      <Paragraph
        text="center"
        fontWeight="700"
        color="$blue10"
      >{`User Email: ${data?.email ?? 'Undefined'}`}</Paragraph>
      <Button icon={ChevronLeft} onPress={() => router.back()}>
        Go Home
      </Button>
    </YStack>
  )
}
