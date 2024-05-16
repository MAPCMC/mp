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
        "size-12 lg:size-16 rounded-md relative animate-in spin-in-90",
        "transform-style-3d transition-transform duration-300",
        isOpen ? "rotate-y-180" : "",
        isCleared ? "disabled:opacity-100" : ""
      )}
      onClick={handleClick}
      variant="default"
      disabled={isCleared}
    >
      {/* front */}
      <span
        className={cn(
          "w-full h-full absolute backface-hidden rounded-md flex items-center justify-center",
          isCleared ? "bg-orange-500" : "bg-orange-400"
        )}
      >
        {isCleared && <Check className="h-full w-full p-2" />}
      </span>

      {/* open card back */}
      {isOpen ? (
        <div
          className={cn(
            "w-full h-full absolute backface-hidden rounded-md rotate-y-180 flex items-center justify-center",
            isResetCard ? "bg-red-500" : "bg-yellow-500"
          )}
        >
          {children}
        </div>
      ) : (
        <div className="w-full h-full absolute backface-hidden rounded-md bg-orange-400 rotate-y-180"></div>
      )}
    </Button>
  );
}
