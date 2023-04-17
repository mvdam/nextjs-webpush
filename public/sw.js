self.addEventListener("activate", async () => {
  // This will be called only once when the service worker is activated.
  try {
    const options = {};
    const subscription = await self.registration.pushManager.subscribe(options);

    console.log(JSON.stringify(subscription));
  } catch (err) {
    console.log("Error", err);
  }
});

self.addEventListener("push", function (event) {
  if (event.data) {
    console.log("Push event!! ", event.data.text());
  } else {
    console.log("Push event but no data");
  }
});
