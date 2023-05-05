import { Inter } from "next/font/google";
import styles from "./page.module.css";
import Notifications from "@/components/notifications";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      <Notifications />
    </main>
  );
}
