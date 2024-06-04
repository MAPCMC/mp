"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlusCircleIcon } from "lucide-react";

import { wrapGrid } from "animate-css-grid";

import { cn } from "@/lib/utils";

export const ProcessCards = () => {
  const [reveal, setReveal] = useState(0);

  useEffect(() => {
    const grid: HTMLElement | null = document.querySelector(".process-cards");
    if (grid) wrapGrid(grid);
  }, []);
  return (
    <ul
      className={cn(
        "process-cards grid gap-2 sm:grid-cols-[2fr_1fr]",
        reveal === 1 && "sm:grid-cols-[1fr_1fr]",
        reveal === 2 && "sm:grid-cols-[2fr_1fr_1fr]",
        reveal === 3 && "sm:grid-cols-[2fr_1fr_3fr]",
      )}
    >
      <li
        aria-labelledby="s2c1"
        className={cn(
          reveal === 0 ? "min-h-32" : "",
          reveal === 3 ? "sm:col-span-2" : "",
        )}
      >
        <Card className="h-full">
          <CardHeader>
            <CardTitle id="s2c1">1. Ontwerp</CardTitle>
          </CardHeader>
          <CardContent>
            Samen gaan we de diepte in: wat is het doel van het platform en hoe
            gaan we dit realiseren? Ik denk graag mee over de mogelijkheden,
            valkuilen en kansen van jouw concept. Uit de bevindingen rolt een
            strategische opzet en een visueel ontwerp.
          </CardContent>
        </Card>
      </li>

      <li
        aria-labelledby="s2c2"
        className={cn(
          reveal === 0 ? "hidden" : "",
          reveal === 1 ? "min-h-32 sm:row-span-2" : "",
          reveal === 2 ? "sm:col-span-2" : "",
        )}
      >
        {reveal >= 1 && (
          <Card className="h-full">
            <CardHeader>
              <CardTitle id="s2c2">2. Ontwikkeling</CardTitle>
            </CardHeader>
            <CardContent>
              Het coderen begint. Stapsgewijs toets ik de voortgang aan jullie
              wensen, zodat we kunnen bijsturen waar nodig. Samen houden we het
              grote plaatje in het oog.
            </CardContent>
          </Card>
        )}
      </li>

      <li
        aria-labelledby="s2c3"
        className={cn(
          reveal < 2 ? "hidden" : "",
          reveal === 2 ? "min-h-32 sm:col-span-2" : "",
        )}
      >
        {reveal >= 2 && (
          <Card className="h-full">
            <CardHeader>
              <CardTitle id="s2c3">3. Oplevering</CardTitle>
            </CardHeader>
            <CardContent>
              Jullie kunnen live! De content is gevuld en alle afbeeldingen
              staan recht. Ik zet jullie online en zorg dat jullie onbezorgd aan
              de slag kunnen.
            </CardContent>
          </Card>
        )}
      </li>

      <li
        aria-labelledby="s2c4"
        className={cn(
          reveal < 3 ? "hidden" : "",
          reveal === 3 ? "min-h-32 sm:col-span-2" : "",
        )}
      >
        {reveal >= 3 && (
          <Card className="h-full">
            <CardHeader>
              <CardTitle id="s2c4">4. Ondersteuning</CardTitle>
            </CardHeader>
            <CardContent>
              Ik houd de site gezond en blijf betrokken. Vragen van nieuwe
              werknemers? Nieuwe ideeën na de lancering? Logisch! Ik blijf
              beschikbaar voor support en doorontwikkeling.
            </CardContent>
          </Card>
        )}
      </li>
      <li className={cn("h-full w-full", reveal === 3 ? "hidden" : "")}>
        {reveal < 3 && (
          <button
            className="group mx-auto flex h-full w-full flex-col items-center justify-center rounded-lg p-6 hover:bg-slate-50 focus-visible:bg-slate-50 dark:hover:bg-slate-700 dark:focus-visible:bg-slate-50"
            onClick={() => setReveal(reveal + 1)}
          >
            <PlusCircleIcon
              size={52}
              className="text-orange-500 scale-75 group-hover:scale-100"
            />
            <span className="opacity-70 group-hover:opacity-100 group-hover:translate-y-2">
              Meer
            </span>
          </button>
        )}
      </li>
    </ul>
  );
};
