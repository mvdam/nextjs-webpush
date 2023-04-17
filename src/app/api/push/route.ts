import webpush, { PushSubscription } from "web-push";

const dummyDb = { subscription: null as PushSubscription | null };

const saveToDatabase = async (subscription: PushSubscription) => {
  dummyDb.subscription = subscription;
};

const vapidKeys = {
  publicKey:
    "BJ5IxJBWdeqFDJTvrZ4wNRu7UY2XigDXjgiUBYEYVXDudxhEs0ReOJRBcBHsPYgZ5dyV8VjyqzbQKS8V7bUAglk",
  privateKey: "ERIZmc5T5uWGeRxedxu92k3HnpVwy_RCnQfgek1x2Y4",
};

webpush.setVapidDetails(
  "mailto:test@example.com",
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

const sendNotification = (subscription: PushSubscription, dataToSend: any) => {
  webpush.sendNotification(subscription, dataToSend);
};

// Save Subscription
export async function POST(request: Request) {
  const subscription = request.body as PushSubscription | null;
  if (!subscription) {
    return;
  }

  await saveToDatabase(subscription);

  return new Response(JSON.stringify({ message: "success" }));
}

// Send Notification
export async function GET(request: Request) {
  const subscription = dummyDb.subscription;
  if (!subscription) {
    return;
  }

  const message = "Hello World";
  sendNotification(subscription, message);

  return new Response(JSON.stringify({ message: "message sent" }));
}
