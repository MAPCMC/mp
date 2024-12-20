"use client";

import { cn } from "@/lib/utils";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function PageMain({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger, useGSAP);
    let mm = gsap.matchMedia();
    mm.add(
      {
        reduceMotion: "(prefers-reduced-motion: reduce)",
        motion: "(prefers-reduced-motion: no-preference)",
      },
      (ctx) => {
        const { reduceMotion } = ctx.conditions as gsap.Conditions;

        const blocks: Element[] = gsap.utils.toArray(
          "#main > *:not(.card):not(article)",
        );

        blocks.forEach((block, i) => {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: block,
            },
          });
          tl.from(block, {
            opacity: 0.7,
            y: reduceMotion ? 20 : 80,
          });
        });
      },
    );
  });

  return (
    <main
      id="main"
      className={cn(
        "mb-24 flex flex-col items-stretch gap-y-16 px-6 md:ml-[20%] md:w-[80%] lg:ml-0 lg:w-[70%]",
        className,
      )}
    >
      {children}
    </main>
  );
}
