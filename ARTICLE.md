# Native Apps Are Dead - WebPush is finally here!

## Progressive Web Apps 101

A Progressive Web App is a type of application software delivered through the web, built using common web technologies including HTML, CSS, JavaScript, and WebAssembly. It is intended to work on any platform with a standards-compliant browser, including desktop and mobile devices. It can also use some hardware features of the devices it's installed on including:

- Location Services, GPS
- Bluetooth
- Camera & microphone
- And more...

## When PWA's were born

From the early 2010s several initiatives were started to bring the web technology onto our mobile devices. Already in 2007, Apple announced support for web apps on iPhones. Followed by Mozilla announcing FireFox OS; an open-source operating system to run web apps as native apps on mobile devices.

In 2015 it really picked up speed when Google embraced it. The name Progressive Web App (PWA from now on) was born and Service Workers and Web App Manifests were introduced. Around 2020 PWA's were finally widely supported by desktop browsers such as Microsoft Edge, Google Chrome and FireFox.

## What was still missing

This all sounds really nice for web developers. We don't need native apps anymore and we can relatively easlity create multiplatform apps by using PWA's! BUT... there was still one major thing missing; Push Notifications!
While it was already supported on Android and MacOS devices, Apple was still lacking support for native WebPush on iOS devices.

## Whats changed in 2023

With the release of iOS 16.4, WebPush has FINALLY arrived on all the major mobile device platforms! This changes everything; we no longer need native apps for sending Push Notifications to our Android & Apple users! But out-of-the-box support of Apple would be too easy. We still need to enable WebPush manually on iOS...

To enable it: go to Settings -> Safari -> Advanced -> Experimental Features -> Find Notifications and turn it on.

## Lets give it a shot!

- Setup Next.js App

```
yarn create next-app
```

- Add web-push package
- Difference between Local & Push Notification
- Architecture

  - Frontend
  - Service Worker
  - Backend

- Implement frontend
- Implement service worker
- Implement backend

- Test on desktop
- Enable Safari WebPush on iOS
- Install PWA
- Test on mobile
- Verdict

---

Image inspiration: https://unsplash.com/s/photos/notification

Replace ###IMG### with correct image

Used resources:

- https://en.wikipedia.org/wiki/Progressive_web_app
-
