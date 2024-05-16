"use client";
import { useState, useEffect, useRef } from "react";
import { MemoryCard } from "@/components/memory-card";
import { shuffle } from "@/lib/utils";

type Card = {
  text: string;
  id: number;
};

const Cards = ["TS", "React", "NextJS", "NodeJS"];

export function MemoryGame() {
  const [cards, setCards] = useState<Card[]>([]);
  const [openCards, setOpenCards] = useState<number[]>([]);
  const [clearedCards, setClearedCards] = useState<string[]>([]);
  const TORestart = useRef<NodeJS.Timeout | null>(null);
  const TOEvaluate = useRef<NodeJS.Timeout | null>(null);

  const handleCardClick = (index: number): void => {
    if (cards[index].text === "M") {
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

  const handleRestart = () => {
    setClearedCards([]);
    setOpenCards([]);
    setCards(
      shuffle(
        [...Cards, ...Cards, "M"].map((card, i) => ({
          text: card,
          id: new Date().getTime() + i,
        }))
      )
    );
  };

  const handleEvaluate = ([first, second]: any) => {
    if (cards[first].text === cards[second].text) {
      setClearedCards((prev) => [...prev, cards[first].text]);
    }
    setOpenCards([]);
  };

  useEffect(() => {
    // start new game on mount
    setCards(
      shuffle(
        [...Cards, ...Cards, "M"].map((card, i) => ({
          text: card,
          id: new Date().getTime() + i,
        }))
      )
    );

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
              className="size-12 lg:size-16 bg-orange-300 rounded-md animate-in slide-in-from-bottom slide-in-from-right"
            ></div>
          ))}
        </>
      )}
      {cards.map((card, index) => {
        return (
          <MemoryCard
            onClick={handleCardClick}
            key={card.id}
            index={index}
            isOpen={openCards.includes(index)}
            isResetCard={card.text === "M"}
            isCleared={clearedCards.includes(card.text)}
          >
            <span>{card.text}</span>
          </MemoryCard>
        );
      })}
    </>
  );
}
