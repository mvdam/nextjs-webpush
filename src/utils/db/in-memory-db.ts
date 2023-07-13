import { PushSubscription } from 'web-push'

type DummyDb = {
  subscriptions: PushSubscription[]
}

export const dummyDb: DummyDb = { subscriptions: [] }

// fake Promise to simulate async call
export const saveSubscriptionToDb = async (
  subscription: PushSubscription
): Promise<DummyDb> => {
  dummyDb.subscriptions.push(subscription)
  return Promise.resolve(dummyDb)
}

export const getSubscriptionsFromDb = () => {
  return Promise.resolve(dummyDb.subscriptions)
}
