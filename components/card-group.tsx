"use client";

import { useRef } from "react";
import { cn } from "@/lib/utils";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function CardGroup({
  children,
  as,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}) {
  const ref = useRef(null);
  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger, useGSAP);
      const mm = gsap.matchMedia();

      mm.add(
        {
          isMobile: "(max-width: 1023px)",
          isDesktop: "(min-width: 1024px)",
          reduceMotion: "(prefers-reduced-motion: reduce)",
        },
        (ctx) => {
          let { isMobile, isDesktop, reduceMotion } =
            ctx.conditions as gsap.Conditions;

          let blocks: Element[] = gsap.utils.toArray(".card");

          if (isDesktop) blocks = gsap.utils.toArray(ref.current);

          blocks.forEach((block) => {
            const tl = gsap.timeline({
              scrollTrigger: {
                trigger: block,
                start: "top 80%",
                end: "bottom center",
                toggleActions: "restart pause resume reset",
              },
            });

            if (isDesktop) {
              tl.from(".card", {
                x: reduceMotion ? 0 : 50,
                y: 20,
                opacity: 0.2,
                stagger: 0.2,
              });
            }

            if (isMobile) {
              tl.from(block, {
                opacity: 0.2,
                y: reduceMotion ? 0 : 80,
              });
            }
          });
        },
      );
    },
    { scope: ref },
  );

  const Element = as ?? "div";

  return (
    <Element ref={ref} className={cn("card-group", className)} {...props}>
      {children}
    </Element>
  );
}
