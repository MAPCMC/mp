"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlusCircleIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export const ProcessCards = () => {
  const [reveal, setReveal] = useState(0);

  return (
    <ol
      className={cn(
        "process-cards grid *:min-h-32 light:gap-4 basic:gap-6 dark:gap-3 sm:grid-cols-2 xl:grid-cols-4",
      )}
    >
      <Card as="li" className="row-span-2 grid h-full grid-rows-subgrid">
        <CardHeader>
          <p className="-mb-1 font-serif text-5xl leading-none light:text-orange-200 basic:text-slate-300 dark:text-slate-600">
            1.
          </p>
          <CardTitle id="s2c1" className="first-letter:capitalize">
            ontwerp
          </CardTitle>
        </CardHeader>
        <CardContent>
          We gaan in gesprek: wat is het doel van het platform en hoe gaan we
          dit realiseren? Zo starten we goed met een strategische opzet en een
          visueel ontwerp.
        </CardContent>
      </Card>

      {reveal >= 1 && (
        <Card
          as="li"
          className="row-span-2 grid h-full grid-rows-subgrid duration-1000 animate-in  fade-in"
        >
          <CardHeader>
            <p className="-mb-1 font-serif text-5xl leading-none light:text-orange-200 basic:text-slate-300 dark:text-slate-600">
              2.
            </p>
            <CardTitle id="s2c2">Ontwikkeling</CardTitle>
          </CardHeader>
          <CardContent>
            Het coderen begint. Stapsgewijs toetsen we de voortgang, zodat ik
            kan bijsturen waar nodig. Samen houden we het grote plaatje in het
            oog.
          </CardContent>
        </Card>
      )}

      {reveal >= 2 && (
        <Card
          as="li"
          className="row-span-2 grid h-full grid-rows-subgrid duration-1000 animate-in  fade-in"
        >
          <CardHeader>
            <p className="-mb-1 font-serif text-5xl leading-none light:text-orange-200 basic:text-slate-300 dark:text-slate-600">
              3.
            </p>
            <CardTitle id="s2c3">Oplevering</CardTitle>
          </CardHeader>
          <CardContent>
            Jullie kunnen live! De content is gevuld en alle afbeeldingen staan
            recht. Ik zet ons werk online en zorg dat jullie onbezorgd aan de
            slag kunnen.
          </CardContent>
        </Card>
      )}

      {reveal >= 3 && (
        <Card
          as="li"
          className="row-span-2 grid h-full grid-rows-subgrid duration-1000 animate-in fade-in"
        >
          <CardHeader>
            <p className="-mb-1 font-serif text-5xl leading-none light:text-orange-200 basic:text-slate-300 dark:text-slate-600">
              4.
            </p>
            <CardTitle id="s2c4">Ondersteuning</CardTitle>
          </CardHeader>
          <CardContent>
            Ik houd de site gezond en blijf betrokken. Nieuwe ideeën na de
            lancering? Logisch! Ik blijf beschikbaar voor support en
            doorontwikkeling.
          </CardContent>
        </Card>
      )}

      {reveal < 3 && (
        <li className="row-span-2 h-full w-full">
          <Button
            className="group mx-auto flex h-full w-full flex-col items-center justify-center light:rounded-md dark:rounded-md"
            onClick={() => setReveal(reveal + 1)}
            variant="outline"
          >
            <PlusCircleIcon
              size={52}
              strokeWidth={1.5}
              className="text-amber-500 scale-90 group-hover:text-white group-hover:scale-100"
            />
            <span className="text-sm text-inherit first-letter:capitalize group-hover:translate-y-1">
              volgende stap
            </span>
          </Button>
        </li>
      )}
    </ol>
  );
};
