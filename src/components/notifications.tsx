"use client";

import { useEffect, useState } from "react";
import styles from "../app/page.module.css";

export default function Notifications() {
  const [permission, setPermission] = useState(Notification.permission);

  const onSubscribe = (subscription: PushSubscription) => {
    console.log(subscription);
  };

  useEffect(() => {
    setup();
  }, []);

  const requestPermission = () => {
    Notification.requestPermission().then(setPermission);
  };

  const sendNewLocalNotification = () => {
    if (permission !== "granted") {
      return;
    }

    new Notification("Local notification!");
  };

  return (
    <>
      <h3 className={styles.heading}>
        Notifications permission status: {permission}
      </h3>
      <button onClick={requestPermission} className={styles.button}>
        Request permission
      </button>
      <button onClick={sendNewLocalNotification} className={styles.button}>
        Local Notification
      </button>
    </>
  );
}

// -------- NEW BELOW ------------ //

const registerServiceWorker = async () => {
  return navigator.serviceWorker.register("/service.js");
};

const requestNotificationPermission = async () => {
  const permission = await window.Notification.requestPermission();

  if (permission !== "granted") {
    throw new Error("Permission not granted for Notification");
  }
};

const setup = async () => {
  const swRegistration = await registerServiceWorker();
  const permission = await requestNotificationPermission();
};
