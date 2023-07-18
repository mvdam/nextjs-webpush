import dynamic from 'next/dynamic'

const Notifications = dynamic(() => import('@/app/components/notifications'), {
  ssr: false, // Make sure to render component client side to access window and Notification API's
})

export default function Home() {
  const notificationsSupported = () =>
    'Notification' in window &&
    'serviceWorker' in navigator &&
    'PushManager' in window

  if (!notificationsSupported()) {
    return <div>Please install this app to your home screen first!</div>
  }

  return <Notifications />
}
