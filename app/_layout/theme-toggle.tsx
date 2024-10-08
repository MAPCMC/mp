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

function CarouselItemLocal({
  children,
  ...props
}: {
  children: React.ReactNode;
}) {
  return (
    <CarouselItem className="flex h-full w-full cursor-grab items-center active:cursor-grabbing">
      <div
        className={cn(
          "flex h-10 w-full items-center justify-center gap-2 capitalize",
          "basic:border-y basic:border-slate-950 basic:bg-basic basic:md:h-full basic:md:border-x basic:md:border-y-0",
          "dark:border-y dark:border-dark-dots dark:bg-dark",
          "light:border-y light:border-light-dots light:bg-light",
        )}
        {...props}
      >
        {children}
      </div>
    </CarouselItem>
  );
}

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
    <div className="relative flex items-stretch px-10 md:px-12">
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
          <CarouselContent className="h-full w-40 text-sm">
            <CarouselItemLocal>
              <Box className="h-4 w-4 text-slate-950" />
              basic
            </CarouselItemLocal>
            <CarouselItemLocal>
              <Sun className="h-4 w-4 text-amber-600" />
              licht
            </CarouselItemLocal>
            <CarouselItemLocal>
              <Moon className="h-4 w-4 text-orange-200" />
              donker
            </CarouselItemLocal>
          </CarouselContent>
          <CarouselPrevious className="-left-8 h-10 light:rounded-r-none dark:rounded-r-none basic:md:h-full basic:md:border-none basic:md:border-inherit " />
          <CarouselNext className="-right-8 h-10 light:rounded-l-none dark:rounded-l-none basic:md:h-full basic:md:border-none basic:md:border-inherit" />
        </Carousel>
      )}
    </div>
  );
}
