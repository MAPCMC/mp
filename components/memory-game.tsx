"use client";
import { useState, useEffect, useRef } from "react";
import { MemoryCard } from "@/components/memory-card";
import {
  SiGithub,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiFigma,
  IconType,
} from "@icons-pack/react-simple-icons";
import { X, PartyPopper, IconNode } from "lucide-react";

import { shuffle } from "@/lib/utils";
import { cn } from "@/lib/utils";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

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
];

export const MemoryGame = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  const [cards, setCards] = useState<Card[]>([]);
  const [openCards, setOpenCards] = useState<number[]>([]);
  const [clearedCards, setClearedCards] = useState<string[]>([]);
  const TORestart = useRef<NodeJS.Timeout | null>(null);
  const TOEvaluate = useRef<NodeJS.Timeout | null>(null);
  const game = useRef<HTMLDivElement>(null);
  const reset = useRef<HTMLButtonElement>(null);

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

  const newCards = (): Card[] => {
    const fourCards = shuffle(Cards).slice(0, 4);
    const resetCard = { text: "Reset", icon: X };
    return shuffle(
      [...fourCards, ...fourCards, resetCard].map((card, i) => ({
        ...card,
        id: new Date().getTime() + i,
      })),
    );
  };

  const handleRestart = () => {
    setClearedCards([]);
    setOpenCards([]);

    // end game after win
    if (clearedCards.length === 4) {
      setCards([]);
    } else {
      setCards(newCards());
    }
  };

  const handleEvaluate = ([first, second]: any) => {
    if (cards[first].text === cards[second].text) {
      setClearedCards((prev) => [...prev, cards[first].text]);
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
      gsap.fromTo(
        ".card",
        { y: 40, x: 30, opacity: 0 },
        { x: 0, opacity: 1, y: 0, duration: 0.5, stagger: 0.1 },
      );
    },
    { scope: game },
  );

  const onClickReset = contextSafe(() => {
    gsap.to(".card", {
      rotation: 360,
      duration: 0.5,
      delay: 0.5,
    });
  });

  return (
    <div
      id="memory-game"
      ref={game}
      className={cn("relative", className)}
      {...props}
    >
      {cards.length === 0 && (
        <>
          {[...Array(7)].map((n, i) => (
            <div
              key={i}
              className="card size-12 rounded-md bg-orange-400 lg:size-16"
            ></div>
          ))}
          <MemoryCard index={0} onClick={() => setCards(newCards())} />
        </>
      )}
      {clearedCards.length === 4 && (
        <PartyPopper className="absolute -top-8 h-6 w-6 animate-in fade-in slide-in-from-bottom md:right-0" />
      )}
      {cards.map((card, index) => {
        const CardIcon = card.icon as React.ElementType;

        return (
          <MemoryCard
            onClick={handleCardClick}
            key={card.id}
            index={index}
            isOpen={openCards.includes(index)}
            isResetCard={card.text === "Reset"}
            isCleared={clearedCards.includes(card.text)}
          >
            <CardIcon className="h-full w-full p-2" />
            <span className="sr-only">{card.text}</span>
          </MemoryCard>
        );
      })}
    </div>
  );
};
MemoryGame.displayName = "MemoryGame";
