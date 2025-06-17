import { auth as middleware, NextAuthResult } from '@/lib/auth'
import { NextResponse } from 'next/server'

export default middleware((req) => {
  return NextResponse.next()
}) as unknown as NextAuthResult['auth']
