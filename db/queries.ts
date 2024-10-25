import { db } from "./index";
import { InsertScore, scores } from "./schema";

export async function getScores() {
  return await db.select().from(scores);
}

export async function createScore(data: InsertScore) {
  await db.insert(scores).values(data);
}
