'use client'

import { useState } from 'react'
import styles from '../page.module.css'
import { CONFIG } from '@/config'
import Link from 'next/link'
import { Notice } from './notice'

const notificationsSupported = () =>
  'Notification' in window &&
  'serviceWorker' in navigator &&
  'PushManager' in window

export default function Notifications() {
  const [permission, setPermission] = useState(
    window?.Notification?.permission || 'default'
  )

  if (!notificationsSupported()) {
    return (
      <Notice message="Please install this app on your home screen first!" />
    )
  }

  const registerServiceWorker = async () => {
    return navigator.serviceWorker.register('/service.js')
  }

  const subscribe = async () => {
    const swRegistration = await registerServiceWorker()

    try {
      const applicationServerKey = urlB64ToUint8Array(CONFIG.PUBLIC_KEY)
      const options = { applicationServerKey, userVisibleOnly: true }
      const subscription = await swRegistration.pushManager.subscribe(options)

      await saveSubscription(subscription)

      console.log({ subscription })
    } catch (err) {
      console.error('Error', err)
    }
  }

  // encode the base64 public key to Array buffer
  const urlB64ToUint8Array = (base64String: string) => {
    const padding = '='.repeat((4 - (base64String.length % 4)) % 4)
    const base64 = (base64String + padding)
      .replace(/\-/g, '+')
      .replace(/_/g, '/')
    const rawData = atob(base64)
    const outputArray = new Uint8Array(rawData.length)
    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i)
    }
    return outputArray
  }

  const saveSubscription = async (subscription: PushSubscription) => {
    const ORIGIN = window.location.origin
    const BACKEND_URL = `${ORIGIN}/api/push`

    const response = await fetch(BACKEND_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(subscription),
    })
    return response.json()
  }

  const requestPermission = async () => {
    if (!notificationsSupported()) {
      return
    }

    const receivedPermission = await window?.Notification.requestPermission()
    setPermission(receivedPermission)

    if (receivedPermission === 'granted') {
      subscribe()
    }
  }

  return (
    <>
      <Notice message={`Notifications permission status: ${permission}`} />
      <button onClick={requestPermission} className={styles.button}>
        Request permission and subscribe
      </button>
      <Link href="/debug">Debug options</Link>
    </>
  )
}
