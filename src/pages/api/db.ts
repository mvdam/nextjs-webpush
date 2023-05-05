import { NextApiRequest, NextApiResponse } from "next";
import { dummyDb } from "@/utils/db/in-memory-db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  return res.status(200).json(dummyDb);
}
