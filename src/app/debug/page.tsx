'use client'

import Link from 'next/link'
import styles from '../page.module.css'
import {
  resetServiceWorker,
  unregisterServiceWorkers,
} from '@/utils/sw/service-worker'

export default function DebugActions() {
  return (
    <>
      <h3 className={styles.heading}>Debug actions</h3>
      <button onClick={resetServiceWorker} className={styles.button}>
        Reset SW
      </button>
      <button onClick={unregisterServiceWorkers} className={styles.button}>
        Remove SW
      </button>
      <Link href="/">Back to home</Link>
    </>
  )
}
