import styles from '../page.module.css'

type NoticeProps = {
  message: string
}

export const Notice = ({ message }: NoticeProps) => {
  return (
    <>
      <h3 className={styles.heading}>WebPush PWA</h3>
      <p className={styles.notice}>{message}</p>
    </>
  )
}
