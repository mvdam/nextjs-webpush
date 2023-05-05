import { PushSubscription } from "web-push";

type DummyDb = {
  subscription: PushSubscription | null;
};

const dummyDb: DummyDb = { subscription: null };

// fake Promise to simulate async call
export const saveSubscriptionToDb = async (
  subscription: PushSubscription
): Promise<DummyDb> => {
  dummyDb.subscription = subscription;
  return dummyDb;
};

export const getSubscriptionFromDb = () => {
  return dummyDb.subscription;
};
