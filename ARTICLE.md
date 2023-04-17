# Native Apps Are Dead - WebPush on iOS with Next.js!

This article walks you through the process of how to implement Push Notifications by using the WebPush API's. We start of with a short introduction about PWA's and WebPush followed by a tutorial on how to implement it yourself. We'll be using React & Next.js during this tutorial.

## Progressive Web Apps 101

A Progressive Web App is a type of application software delivered through the web, built using common web technologies including HTML, CSS, JavaScript, and WebAssembly. It is intended to work on any platform with a standards-compliant browser, including desktop and mobile devices. It can also use some hardware features of the devices it's installed on including:

- Location Services, GPS
- Bluetooth
- Camera & microphone
- And more...

If you want to learn more about PWA's, check one of the other articles on ToTheRoot: https://www.totheroot.nl/search?tag=pwa.

## When PWA's were born

From the early 2010s several initiatives were started to bring the web technology onto our mobile devices. Already in 2007, Apple announced support for web apps on iPhones. Followed by Mozilla announcing FireFox OS; an open-source operating system to run web apps as native apps on mobile devices.

In 2015 it really picked up speed when Google embraced it. The name Progressive Web App (PWA from now on) was born and Service Workers and Web App Manifests were introduced. Around 2020 PWA's were finally widely supported by desktop browsers such as Microsoft Edge, Google Chrome and FireFox.

## What was still missing

This all sounds really nice for web developers. We don't need native apps anymore and we can relatively easliy create multiplatform apps by using PWA's! BUT... there was still one major thing missing; Push Notifications!
While it was already supported on Android and desktop devices, Apple was still lacking support for native WebPush on iOS devices.

## What has changed in 2023

With the release of iOS 16.4, WebPush has FINALLY arrived on all the major mobile platforms! This changes everything; we no longer need native apps for sending Push Notifications to our Android & Apple users! But out-of-the-box support from Apple would be too easy. We still need to enable Notifications and WebPush manually on iOS...

To enable it: go to Settings -> Safari -> Advanced -> Experimental Features -> Find "Notifications" and "Push API" it turn both of them on.

<img src="./assets/ios.PNG" alt="Enable Notifications">

## Lets code!

For Push notifications to work we need thee important parts:

1. Service Worker

   We need a Service Worker to listen for Push Notifications. A Server Worker will always be active on the background of our device, while our Frontend Application only works when it is opened and active on screen. The Service Worker is in charge of listening for and showing notifications on the device.

2. Frontend Application

   The Frontend Application will be installed as a PWA on our device. When a notification pops up we can tap on it to open our application. The Frontend Application will activate the Service Worker and requests permission for receiving Notifications.

3. Backend Application

   The Backend Application receives notification subscriptions from the Frontend Application and is able to send Push Notifications to all subscribers.

To make our live easy we're going to use Next.js for this tutorial. Next.js is a great framework for having both a frontend and a backend together. It offers features such as Server Side Rendering, Static Site Generation and easy API creation.

## Setup Next.js App

Lets start by creating a new Next.js app:

```sh
yarn create next-app
```

To abstract away some of the WebPush APIs we are going to use the `web-push` library. Install it as follows:

```sh
yarn add web-push
```

## Implement Service Worker

We need to start implementing the Service Worker first as th rest of our application relies on it. The Service Worker will inform our Backend Application about our new Notification Subscription. It also listens for new Notifications and shows them on our device when they come in.

Start by creating a new `service.js` file in the `public` folder.

### Save Subscription

...

### On Activate

...

### On Push

...

## Implement Frontend

...

## Implement Backend

...

- Test on desktop
- Enable Safari WebPush on iOS
- Install PWA
- Test on mobile
- Verdict

---

Image inspiration: https://unsplash.com/s/photos/notification

Example project Github: ...

Used resources:

- https://en.wikipedia.org/wiki/Progressive_web_app
-
