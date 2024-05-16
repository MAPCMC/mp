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

export function MemoryGame() {
  const [cards, setCards] = useState<Card[]>([]);
  const [openCards, setOpenCards] = useState<number[]>([]);
  const [clearedCards, setClearedCards] = useState<string[]>([]);
  const TORestart = useRef<NodeJS.Timeout | null>(null);
  const TOEvaluate = useRef<NodeJS.Timeout | null>(null);

  const handleCardClick = (index: number): void => {
    if (cards[index].text === "Reset") {
      setOpenCards([index]);

      TORestart.current = setTimeout(() => {
        handleRestart();
      }, 800);
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
      }))
    );
  };

  const handleRestart = () => {
    setClearedCards([]);
    setOpenCards([]);
    setCards(newCards());
  };

  const handleEvaluate = ([first, second]: any) => {
    if (cards[first].text === cards[second].text) {
      setClearedCards((prev) => [...prev, cards[first].text]);
    }
    setOpenCards([]);
  };

  useEffect(() => {
    // start new game on mount
    setCards(newCards());

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

  return (
    <>
      {cards.length === 0 && (
        <>
          {[...Array(9)].map((n, i) => (
            <div
              key={i}
              className="size-12 lg:size-16 bg-orange-300 rounded-md animate-in slide-in-from-bottom-4 md:slide-in-from-right-4"
            ></div>
          ))}
        </>
      )}
      {clearedCards.length === 4 && (
        <PartyPopper className="w-6 h-6 absolute -top-8 md:right-0 animate-in fade-in slide-in-from-bottom" />
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
            <CardIcon className="w-full h-full p-2" />
            <span className="sr-only">{card.text}</span>
          </MemoryCard>
        );
      })}
    </>
  );
}
