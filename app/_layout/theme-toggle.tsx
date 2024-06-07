"use client";

import * as React from "react";
import { Moon, Sun, Box } from "lucide-react";
import { useTheme } from "next-themes";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [api, setApi] = React.useState<CarouselApi>();
  const [mounted, setMounted] = React.useState(false);
  // The active theme is not available on the server;
  // await the mounted state before rendering the active theme.
  React.useEffect(() => setMounted(true), []);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    api.on("select", () => {
      setTheme(["basic", "light", "dark"][api.selectedScrollSnap()]);
    });
  }, [api, setTheme]);

  return (
    <div
      className={cn({
        "relative mx-14 flex items-center": true,
        "basic:bg-basic basic:border-x basic:border-slate-900":
          theme === "basic",
        "dark:bg-dark": theme === "dark",
        "light:bg-light": theme === "light",
      })}
    >
      {mounted && (
        <Carousel
          setApi={setApi}
          opts={{
            startIndex: theme
              ? ["basic", "light", "dark"].indexOf(theme)
              : undefined,
            loop: true,
          }}
        >
          <CarouselContent className="w-32 lg:w-40">
            <CarouselItem className="flex items-center justify-center gap-2 capitalize">
              <Box className="h-4 w-4" />
              basic
            </CarouselItem>
            <CarouselItem className="flex items-center justify-center gap-2 capitalize">
              <Sun className="h-4 w-4" />
              licht
            </CarouselItem>
            <CarouselItem className="flex items-center justify-center gap-2 capitalize">
              <Moon className="h-4 w-4" />
              donker
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      )}
    </div>
  );
}
