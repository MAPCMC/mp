"use client";

import React from "react";
import { SelectScore } from "@/db/schema";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { revalidateScores } from "../_helpers";

export default function HighScores({
  scores,
  resetShow,
}: {
  scores: SelectScore[];
  resetShow?: boolean;
}) {
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    if (resetShow === true || resetShow === false) setShow(resetShow);
  }, [resetShow]);

  React.useEffect(() => {
    if (show) revalidateScores();
  }, [show]);

  return (
    <article className="mx-auto w-full max-w-lg px-5 py-2">
      <div
        className={cn("flex items-center justify-between", {
          "mb-1 border-b pb-1": show,
        })}
      >
        <h3 className=" font-serif text-2xl">Highscores</h3>
        <Button size="xs" onClick={() => setShow(!show)}>
          {show ? "verbergen" : "tonen"}
        </Button>
      </div>
      {show && (
        <ul className="space-y-2">
          {scores.map((score) => (
            <li key={score.id} className="flex items-center justify-between">
              <span>{score.name}</span>
              <span>{score.value}</span>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}
