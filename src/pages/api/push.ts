import { NextApiRequest, NextApiResponse } from "next";
import {
  getSubscriptionsFromDb,
  saveSubscriptionToDb,
} from "@/utils/db/in-memory-db";
import webpush, { PushSubscription } from "web-push";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const response = await POST(req);
    return res.status(200).json(response);
  }

  const response = await GET(req);
  return res.status(200).json(response);
}

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
  const subscription = request.body as PushSubscription | null;
  if (!subscription) {
    console.error("No subscription was provided!");
    return;
  }

  const updatedDb = await saveSubscriptionToDb(subscription);

  return { message: "success", updatedDb };
}

// Send Notification
export async function GET(_: NextApiRequest) {
  const subscriptions = getSubscriptionsFromDb();

  subscriptions.forEach((s) => {
    const payload = JSON.stringify({
      title: "WebPush Notification!",
      body: "Hello World",
    });
    sendNotification(s, payload);
  });

  return { message: `${subscriptions.length} messages sent!` };
}
