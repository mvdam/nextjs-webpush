import dynamic from 'next/dynamic'

const Notifications = dynamic(() => import('@/app/components/notifications'), {
  ssr: false,
})

export default function Home() {
  return <Notifications />
}
