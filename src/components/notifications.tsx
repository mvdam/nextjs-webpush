"use client";

import { useEffect, useState } from "react";
// import * as uuid from "uuid";

export default function Notifications() {
  // useServiceWorker();
  const [permission, setPermission] = useState(Notification.permission);

  const onSubscribe = (subscription: PushSubscription) => {
    console.log(subscription);
  };

  useEffect(() => setup(onSubscribe), []);

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
      <div>Notifications {permission}</div>
      <button onClick={requestPermission}>Request permission</button>
      <button onClick={sendNewLocalNotification}>Local Notification</button>
    </>
  );
}

// const useServiceWorker = () => {
//   useEffect(() => {
//     if ("serviceWorker" in navigator) {
//       window.addEventListener("load", function () {
//         navigator.serviceWorker.register("/sw.js").then(
//           function (registration) {
//             console.log(
//               "Service Worker registration successful with scope: ",
//               registration.scope
//             );
//           },
//           function (err) {
//             console.log("Service Worker registration failed: ", err);
//           }
//         );
//       });
//     }
//   }, []);
// };

const setup = (onSubscribe: (subscription: PushSubscription) => void) => {
  // this.onpush = (event) => {
  //   console.log(event.data);
  //   // From here we can write the data to IndexedDB, send it to any open
  //   // windows, display a notification, etc.
  // };

  window.addEventListener("push", (e) => {
    console.log("got push msg!", e);
  });

  navigator.serviceWorker.register("/sw.js");

  // Use serviceWorker.ready to ensure that you can subscribe for push
  navigator.serviceWorker.ready.then((serviceWorkerRegistration) => {
    serviceWorkerRegistration.addEventListener("push", console.log);
    // const applicationServerKey = uuid.v4();

    // const options = {
    //   userVisibleOnly: true,
    //   // applicationServerKey,
    // };

    // console.log("ready to receive messages", serviceWorkerRegistration);

    // serviceWorkerRegistration.pushManager
    //   .subscribe(options)
    //   .then(onSubscribe, (error) => {
    //     // During development it often helps to log errors to the
    //     // console. In a production environment it might make sense to
    //     // also report information about errors back to the
    //     // application server.
    //     console.error(error);
  });
  // });
};
