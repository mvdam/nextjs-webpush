import { Inter } from "next/font/google";
import styles from "./page.module.css";
import Notifications from "@/components/notifications";
import dynamic from "next/dynamic";

const inter = Inter({ subsets: ["latin"] });

const DynamicNotifications = dynamic(
  () => import("@/components/notifications"),
  {
    ssr: false,
  }
);

export default function Home() {
  return (
    <main className={styles.main}>
      <DynamicNotifications />
    </main>
  );
}
