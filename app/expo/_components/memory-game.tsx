"use client";
import { useState, useEffect, useRef } from "react";
import { MemoryCardExpo } from "./memory-card";
import {
  SiGithub,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiFigma,
  IconType,
  SiPostgresql,
  SiDocker,
  SiPayloadcms,
} from "@icons-pack/react-simple-icons";
import { X, PartyPopper, IconNode } from "lucide-react";
import { Button } from "@/components/ui/button";
import { shuffle } from "@/lib/utils";
import { cn } from "@/lib/utils";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { addHighScore } from "../_helpers";
import { Input } from "@/components/ui/input";
import { SelectScore } from "@/db/schema";

gsap.registerPlugin(useGSAP);

type Card = {
  text: string;
  icon: IconType | IconNode;
  id: number;
};

const Cards = [
  { text: "Typescript", icon: SiTypescript },
  { text: "React", icon: SiReact },
  { text: "Next.js", icon: SiNextdotjs },
  { text: "Nodejs", icon: SiNodedotjs },
  { text: "Github", icon: SiGithub },
  { text: "Figma", icon: SiFigma },
  { text: "PostgreSQL", icon: SiPostgresql },
  { text: "Docker", icon: SiDocker },
  { text: "Payload CMS", icon: SiPayloadcms },
];

export const MemoryGame = ({
  className,
  scores,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  scores: SelectScore[];
}) => {
  const [score, setScore] = useState<number>(0);
  const [name, setName] = useState<string>("");
  const [cards, setCards] = useState<Card[]>([]);
  const [openCards, setOpenCards] = useState<number[]>([]);
  const [clearedCards, setClearedCards] = useState<string[]>([]);
  const TORestart = useRef<NodeJS.Timeout | null>(null);
  const TOEvaluate = useRef<NodeJS.Timeout | null>(null);
  const game = useRef<HTMLDivElement>(null);

  const handleCardClick = (index: number): void => {
    if (cards[index].text === "Reset") {
      setOpenCards([index]);
      onClickReset();

      TORestart.current = setTimeout(() => {
        handleRestart();
      }, 1000);
    } else if (openCards.length === 1) {
      let newOpenCards = [...openCards, index];
      setOpenCards(newOpenCards);

      TOEvaluate.current = setTimeout(() => {
        handleEvaluate(newOpenCards);
      }, 800);
    } else {
      setOpenCards([index]);
    }
  };

  const cardAmount = 7;

  const newCards = (): Card[] => {
    const fourCards = shuffle(Cards).slice(0, cardAmount);
    const resetCard = { text: "Reset", icon: X };
    return shuffle(
      [...fourCards, ...fourCards, resetCard].map((card, i) => ({
        ...card,
        id: new Date().getTime() + i,
      })),
    );
  };

  const handleQuit = () => {
    addHighScore(score, name);

    setCards([]);
    setName("");
    setClearedCards([]);
    setOpenCards([]);
    setScore(0);
  };

  const handleRestart = () => {
    setClearedCards([]);
    setOpenCards([]);
    setCards(newCards());
  };

  const handleEvaluate = ([first, second]: any) => {
    if (cards[first].text === cards[second].text) {
      setClearedCards((prev) => [...prev, cards[first].text]);

      if (clearedCards.length + 1 === cardAmount) {
        setScore(score + 100);
        TORestart.current = setTimeout(() => {
          handleRestart();
        }, 500);
      } else {
        setScore(score + 10);
      }
    }
    setOpenCards([]);
  };

  useEffect(() => {
    // cleanup timeouts on unmount
    return () => {
      if (TORestart.current) {
        clearTimeout(TORestart.current);
      }
      if (TOEvaluate.current) {
        clearTimeout(TOEvaluate.current);
      }
    };
  }, []);

  const { contextSafe } = useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(
        {
          motion: "(prefers-reduced-motion: no-preference)",
          reduceMotion: "(prefers-reduced-motion: reduce)",
        },
        (ctx) => {
          const { reduceMotion } = ctx.conditions as gsap.Conditions;
          gsap.fromTo(
            ".card",
            {
              y: reduceMotion ? 20 : 40,
              x: reduceMotion ? 15 : 30,
              opacity: 0,
            },
            {
              x: 0,
              opacity: 1,
              y: 0,
              duration: 0.5,
              stagger: reduceMotion ? 0 : 0.1,
            },
          );
        },
      );
    },
    { scope: game },
  );

  const onClickReset = contextSafe(() => {
    gsap.to(".card", {
      boxShadow: "0 0",
      rotation: 360,
      duration: 0.5,
      delay: 0.5,
    });
  });

  return (
    <div id="memory-game" ref={game} className="relative flex w-full flex-col">
      {cards.length > 0 && (
        <div
          className={cn(
            "relative",
            "duration-700 animate-in fade-in slide-in-from-top-6",
            "flex flex-wrap items-center justify-between gap-x-6 border-b bg-orange-600 px-5 py-2",
          )}
        >
          <div className="flex w-full items-center gap-2 sm:w-auto">
            <Input
              placeholder="naam"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="h-auto rounded-none disabled:hidden"
              disabled={
                scores.length >= 5 &&
                Number(scores[scores.length - 1]?.value) > score
              }
            />
            <Button
              disabled={
                scores.length >= 5 &&
                Number(scores[scores.length - 1]?.value) > score
              }
              variant="outline"
              className="disabled:hidden"
              onClick={handleQuit}
              onKeyDown={(e) => {
                if (
                  e.key === "Escape" ||
                  e.key === "Esc" ||
                  e.key === "Delete" ||
                  e.key === "Backspace"
                ) {
                  e.preventDefault();
                  handleQuit();
                }
              }}
            >
              <span className="first-letter:capitalize">
                <span className="hidden sm:inline">score</span> opslaan
              </span>
            </Button>
          </div>
          <p className="font-serif text-xl text-white">score: {score}</p>
        </div>
      )}
      {cards.length === 0 ? (
        <div className="flex grow flex-col items-center justify-center gap-4 sm:flex-row">
          <MemoryCardExpo
            index={0}
            onClick={() => {
              setCards(newCards());
            }}
          />
          <div className="text-center">
            <p className="text-slate-950 sm:hidden">{"^"}</p>
            <p className="text-slate-950">
              <span className="hidden sm:inline">{"<--"}</span> Jaaa klikkie
              klik
            </p>
            <p className="text-xs text-slate-950">Durf dan. Ahh toe</p>
          </div>
        </div>
      ) : (
        <div className="flex grow flex-col items-center justify-center px-5 py-12">
          <div className="relative grid grid-cols-3 gap-2 sm:grid-cols-5">
            {/* celebrate */}
            {clearedCards.length === cardAmount && (
              <PartyPopper className="absolute -top-8 left-0 h-6 w-6 text-slate-950 animate-in fade-in slide-in-from-bottom" />
            )}
            {cards.map((card, index) => {
              const CardIcon = card.icon as React.ElementType;
              return (
                <MemoryCardExpo
                  onClick={handleCardClick}
                  key={card.id}
                  index={index}
                  isOpen={openCards.includes(index)}
                  isResetCard={card.text === "Reset"}
                  isCleared={clearedCards.includes(card.text)}
                  onKeyDown={(e) => {
                    if (
                      e.key === "Escape" ||
                      e.key === "Esc" ||
                      e.key === "Delete" ||
                      e.key === "Backspace"
                    ) {
                      e.preventDefault();
                      handleQuit();
                    }
                  }}
                >
                  <CardIcon className="h-full w-full p-2" />
                  <span className="sr-only">{card.text}</span>
                </MemoryCardExpo>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
MemoryGame.displayName = "MemoryGame";
