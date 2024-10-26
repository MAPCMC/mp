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
    "onzichtbaregast",
    "niemandweetdit",
    "supergeheim123",
    "anoniempje_007",
    "verborgen_bezoeker",
    "onbekende_gebruiker",
    "naamloos",
    "eenofanderpersoon",
    "niet_te_vinden",
    "hiero_anoniem",
    "verstoppertje2024",
    "zomaar_ik",
  ];

  return names[Math.floor(Math.random() * names.length)];
};

export const addHighScore = (score: number, name?: string) => {
  if (!name || name.length === 0 || name.length > 160) {
    name = chooseAnonymous();
  }
  createScore({ value: score.toString(), name: name });
  revalidatePath("/expo");
  redirect("/expo");
};
