import { db } from "./index";
import { InsertScore, scores } from "./schema";
import { sql } from "drizzle-orm";

export async function getScores() {
  return await db
    .select()
    .from(scores)
    .orderBy(sql`${scores.value} DESC, ${scores.createdAt} DESC`)
    .limit(5);
}

export async function createScore(data: InsertScore) {
  await db.insert(scores).values(data);
}
