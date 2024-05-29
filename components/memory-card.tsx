"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useImperativeHandle } from "react";

gsap.registerPlugin(useGSAP);

export function MemoryCard({
  children,
  onClick,
  index,
  isOpen,
  isResetCard,
  isCleared,
  ref,
}: {
  children?: React.ReactNode;
  onClick: (index: number) => void;
  index: number;
  isOpen?: boolean;
  isCleared?: boolean;
  isResetCard?: boolean;
  ref?: React.Ref<HTMLButtonElement>;
}) {
  const localRef = useRef<HTMLButtonElement>(null);
  useImperativeHandle(ref, () => localRef.current!, []);

  const tl = useRef<gsap.core.Timeline | null>(null);
  const handleClick = () => {
    !isOpen && !isCleared && onClick(index);
  };

  useGSAP(
    () => {
      gsap.set(".card-back", { rotationY: -180 });

      if (isOpen) {
        tl.current = gsap
          .timeline({ paused: true })
          .to(".card-front", { duration: 0.4, rotationY: 180 })
          .to(".card-back", { duration: 0.4, rotationY: 0 }, 0)
          .to(localRef.current, { z: 50 }, 0)
          .to(localRef.current, { z: 0 }, 0.3);
        tl.current?.play();
      } else {
        tl.current = gsap
          .timeline({ paused: true })
          .to(".card-front", { duration: 0.3, rotationY: 0 })
          .to(".card-back", { duration: 0.3, rotationY: -180 }, 0);
        tl.current?.play();
      }
    },
    { scope: localRef, dependencies: [isOpen] },
  );

  return (
    <button
      ref={localRef}
      className={cn(
        "card relative size-12 rounded-md text-white dark:text-black lg:size-16",
        "perspective-1000 transform-style-3d",
      )}
      onClick={handleClick}
      disabled={isCleared || isOpen}
    >
      {/* front */}
      <div
        className={cn(
          "card-front absolute inset-0 flex h-full w-full items-center justify-center rounded-md backface-hidden",
          isCleared
            ? "bg-orange-500 dark:bg-orange-900"
            : "bg-orange-400 dark:bg-orange-800",
        )}
      >
        {isCleared && <Check className="h-full w-full p-2" />}
        {!isCleared && (
          <span className="pl-4 pt-4 font-serif lg:text-3xl">M</span>
        )}
      </div>

      {/* open card back */}
      <div
        className={cn(
          "card-back absolute inset-0 flex h-full w-full items-center justify-center rounded-md backface-hidden",
          isResetCard ? "bg-red-500" : "bg-yellow-500 dark:bg-yellow-300",
        )}
      >
        {children}
      </div>
    </button>
  );
}
