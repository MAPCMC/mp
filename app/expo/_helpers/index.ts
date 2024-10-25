"use server";

import { createScore } from "@/db/queries";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const chooseAnonymous = () => {
  const names = [
    "a-no-no-no-niem",
    "_anoniempje_89",
    "anoniem",
    "xx-anoniem-xx",
    "deelnemer_onbekend",
    "anoniemhierhoor",
    "mijnietbellen",
  ];

  return names[Math.floor(Math.random() * names.length)];
};

export const addHighScore = (score: number, name?: string) => {
  createScore({ value: score.toString(), name: name ?? chooseAnonymous() });
  revalidatePath("/expo");
  redirect("/expo");
};
