import { db } from "./index";
import { InsertScore, scores } from "./schema";
import { revalidateTag, unstable_cacheTag as cacheTag } from "next/cache";

export async function getScores() {
  "use cache";
  cacheTag("scores");

  const scores = await db.query.scores.findMany({
    orderBy: (scores, { desc }) => [desc(scores.value), desc(scores.createdAt)],
    limit: 7,
  });

  // extra ordering (somehow db production does not sort results)
  const scoresOrdered = scores.sort(
    (a, b) => Number(b.value) - Number(a.value),
  );

  return scoresOrdered;
}

export async function createScore(data: InsertScore) {
  await db.insert(scores).values(data);
  revalidateTag("scores");
}
