"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export function AboutSpans() {
  const [index, setIndex] = React.useState(0);

  const spans = ["Creatieve", "Behulpzame", "Enthousiaste", "Gedreven"];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % spans.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [spans.length]);

  return (
    <span>
      {spans.map((text, i) => (
        <span
          key={text + i}
          className={cn(
            "inline-block duration-700 ease-out animate-in slide-in-from-bottom-4",
            index !== i ? "hidden" : "",
          )}
        >
          {text}
        </span>
      ))}
    </span>
  );
}
