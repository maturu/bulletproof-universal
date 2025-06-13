'use client'

import { UserDetailScreen } from '@repo/app/src/features/user/detail-screen'
import { client } from '@repo/app/src/lib/trpc'
import { useParams } from 'solito/navigation'

export default function Page() {
  const { id } = useParams()
  const { data } = client.userById.useQuery({ id: Number(id) })
  console.log(data)

  return <UserDetailScreen id={id as string} />
}
