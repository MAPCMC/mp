"use client";

import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useImperativeHandle } from "react";

gsap.registerPlugin(useGSAP);

export function MemoryCard({
  children,
  onClick,
  onKeyDown,
  index,
  isOpen,
  isResetCard,
  isCleared,
  ref,
}: {
  children?: React.ReactNode;
  onClick: (index: number) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLButtonElement>) => void;
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

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    !isOpen && !isCleared && !!onKeyDown && onKeyDown(e);
  };

  useGSAP(
    () => {
      gsap.set(".card-back", { rotationY: -180 });

      if (isOpen) {
        tl.current = gsap
          .timeline({
            paused: true,
          })
          .to(".card-front", { duration: 0.4, rotationY: 180 })
          .to(".card-back", { duration: 0.4, rotationY: 0 }, 0)
          .to(localRef.current, { z: 10, duration: 0.4, boxShadow: "0 0" }, 0)
          .to(localRef.current, { z: 0 }, 0.3);
      } else {
        tl.current = gsap
          .timeline({
            paused: true,
            onComplete: function () {
              gsap.set(localRef.current, { clearProps: "boxShadow" });
            },
          })
          .to(".card-front", { duration: 0.3, rotationY: 0 })
          .to(".card-back", { duration: 0.3, rotationY: -180 }, 0);
      }
      tl.current?.play();
    },
    { scope: localRef, dependencies: [isOpen] },
  );

  return (
    <button
      ref={localRef}
      className={cn(
        "card relative size-12 text-slate-50 outline-offset-2 dark:text-slate-950 lg:size-16 lg:justify-self-end",
        "perspective-1000 transform-style-3d",
        "light:rounded-md *:light:rounded-md dark:rounded-md *:dark:rounded-md",
        "hover:z-20 hover:outline hover:outline-2 hover:outline-offset-2 hover:outline-sky-400",
        "focus-visible:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-400",
        "shadow-[.2rem_.2rem_solid] shadow-orange-200 lg:shadow-[.3rem_.3rem_solid] lg:shadow-orange-200",
      )}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      disabled={isCleared || isOpen}
    >
      {/* front */}
      <div
        className={cn(
          "card-front absolute inset-0 flex h-full w-full items-center justify-center backface-hidden",
          { "bg-orange-600": isCleared },
        )}
      >
        {isCleared && <Check className="h-full w-full p-2" />}
        {!isCleared && (
          <Image
            src="/logo.svg"
            width={60}
            height={60}
            alt="M"
            className="h-full w-full light:rounded-md dark:rounded-md"
            priority
          />
        )}
      </div>

      {/* open card back */}
      <div
        className={cn(
          "card-back absolute inset-0 flex h-full w-full items-center justify-center backface-hidden",
          isResetCard ? "bg-red-500 shadow-red-300" : "bg-amber-500",
        )}
      >
        {children}
      </div>
    </button>
  );
}
