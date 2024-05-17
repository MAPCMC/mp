"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

export function MemoryCard({
  children,
  onClick,
  index,
  isOpen,
  isResetCard,
  isCleared,
}: {
  children: React.ReactNode;
  onClick: (index: number) => void;
  index: number;
  isOpen: boolean;
  isCleared: boolean;
  isResetCard: boolean;
}) {
  const handleClick = () => {
    !isOpen && !isCleared && onClick(index);
  };

  return (
    <Button
      className={cn(
        "relative size-12 rounded-md animate-in spin-in-90 lg:size-16",
        "transition-transform duration-300 transform-style-3d",
        isOpen ? "rotate-y-180 disabled:opacity-100" : "",
        isCleared ? "disabled:opacity-100" : "",
      )}
      onClick={handleClick}
      variant="default"
      disabled={isCleared || isOpen}
    >
      {/* front */}
      <span
        className={cn(
          "absolute flex h-full w-full items-center justify-center rounded-md backface-hidden",
          isCleared
            ? "bg-orange-500 dark:bg-orange-900"
            : "bg-orange-400 dark:bg-orange-800",
        )}
      >
        {isCleared && <Check className="h-full w-full p-2" />}
        {!isCleared && (
          <span className="font-serif opacity-30 lg:text-3xl">M</span>
        )}
      </span>

      {/* open card back */}
      {isOpen ? (
        <div
          className={cn(
            "absolute flex h-full w-full items-center justify-center rounded-md rotate-y-180 backface-hidden",
            isResetCard ? "bg-red-500" : "bg-yellow-500 dark:bg-yellow-300",
          )}
        >
          {children}
        </div>
      ) : (
        <div className="absolute h-full w-full rounded-md bg-orange-400 rotate-y-180 backface-hidden"></div>
      )}
    </Button>
  );
}
