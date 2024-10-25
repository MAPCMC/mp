"use client";

import React from "react";
import { SelectScore } from "../../../db/schema";

export default function HighScores({ scores }: { scores: SelectScore[] }) {
  const highscores = scores
    .sort((a, b) => Number(b.value) - Number(a.value))
    .slice(0, 5);

  return (
    <article className="mx-auto w-full max-w-lg space-y-2">
      <h3 className="border-b text-2xl">Scores</h3>
      {highscores.map((score) => (
        <div key={score.id} className="flex items-center justify-between">
          <p>{score.name}</p>
          <p>{score.value}</p>
        </div>
      ))}
    </article>
  );
}
