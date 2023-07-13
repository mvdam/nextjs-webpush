import { NextApiRequest } from 'next'
import { NextResponse } from 'next/server'
import { dummyDb } from '@/utils/db/in-memory-db'

export async function GET(req: NextApiRequest) {
  return NextResponse.json(dummyDb)
}
