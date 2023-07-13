'use client'

import Link from 'next/link'
import styles from '../page.module.css'

export default function DebugActions() {
  return (
    <>
      <h3 className={styles.heading}>Debug actions</h3>
      <button onClick={resetServiceWorker} className={styles.button}>
        Reset SW
      </button>
      <button onClick={unregisterServiceWorker} className={styles.button}>
        Remove SW
      </button>
      <Link href="/">Back to home</Link>
    </>
  )
}

const registerServiceWorker = async () => {
  return navigator.serviceWorker.register('/service.js')
}

const unregisterServiceWorker = async () => {
  const registrations = await navigator.serviceWorker.getRegistrations()
  await Promise.all(registrations.map((r) => r.unregister()))
}

const resetServiceWorker = async () => {
  await unregisterServiceWorker()
  registerServiceWorker()
}
