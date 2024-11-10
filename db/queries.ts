import { db } from "./index";
import { InsertScore, scores } from "./schema";
import { revalidateTag, unstable_cacheTag as cacheTag } from "next/cache";

export async function getScores() {
  "use cache";
  cacheTag("scores");

  const scores = await db.query.scores.findMany();

  // extra ordering (somehow db production does not sort results)
  const scoresOrdered = scores
    .sort((a, b) => {
      if (a.value === b.value)
        return (
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      return Number(b.value) - Number(a.value);
    })
    .slice(0, 7);

  return scoresOrdered;
}

export async function createScore(data: InsertScore) {
  await db.insert(scores).values(data);
  revalidateTag("scores");
}
