import { NextResponse, NextRequest } from 'next/server'
import {
  getSubscriptionsFromDb,
  saveSubscriptionToDb,
} from '@/utils/db/in-memory-db'
import webpush, { PushSubscription } from 'web-push'
import { CONFIG } from '@/config'

const vapidKeys = {
  publicKey: CONFIG.PUBLIC_KEY,
  privateKey: CONFIG.PRIVATE_KEY,
}

webpush.setVapidDetails(
  'mailto:test@example.com',
  vapidKeys.publicKey,
  vapidKeys.privateKey
)

const sendNotification = (subscription: PushSubscription, dataToSend: any) => {
  webpush.sendNotification(subscription, dataToSend)
}

export async function POST(request: NextRequest) {
  const subscription = (await request.json()) as PushSubscription | null

  if (!subscription) {
    console.error('No subscription was provided!')
    return
  }

  const updatedDb = await saveSubscriptionToDb(subscription)

  return NextResponse.json({ message: 'success', updatedDb })
}

export async function GET(_: NextRequest) {
  const subscriptions = await getSubscriptionsFromDb()

  subscriptions.forEach((s) => {
    const payload = JSON.stringify({
      title: 'WebPush Notification!',
      body: 'Hello World',
    })
    sendNotification(s, payload)
  })

  return NextResponse.json({
    message: `${subscriptions.length} messages sent!`,
  })
}
