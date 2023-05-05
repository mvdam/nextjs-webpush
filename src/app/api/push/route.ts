import {
  getSubscriptionFromDb,
  saveSubscriptionToDb,
} from "@/utils/db/in-memory-db";
import { NextApiRequest } from "next";
import webpush, { PushSubscription } from "web-push";

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
export async function POST(request: NextApiRequest) {
  console.log("POST", JSON.stringify(request));

  request.body;

  const subscription = request.body as PushSubscription | null;
  if (!subscription) {
    console.error("No subscription was provided!");
    return;
  }

  console.log("subscription", subscription.endpoint);

  const updatedDb = await saveSubscriptionToDb(subscription);
  const storedEndpoint = updatedDb.subscription?.endpoint;

  return new Response(JSON.stringify({ message: "success", storedEndpoint }));
}

// Send Notification
export async function GET(_: Request) {
  const subscription = getSubscriptionFromDb();
  if (!subscription) {
    console.error("No subscription was stored!");
    return new Response(JSON.stringify({ message: "no subscription yet!" }));
  }

  const message = "Hello World";
  sendNotification(subscription, message);

  return new Response(JSON.stringify({ message: "message sent" }));
}
