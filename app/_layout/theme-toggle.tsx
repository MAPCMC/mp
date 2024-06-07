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
  theme,
  ...props
}: {
  children: React.ReactNode;
  theme?: string;
}) {
  return (
    <CarouselItem className="flex h-full w-full items-center">
      <div
        className={cn({
          "flex h-8 w-full items-center justify-center gap-2 capitalize": true,
          "basic:bg-basic basic:border-y basic:border-slate-900 basic:md:h-full basic:md:border-x basic:md:border-y-0":
            theme === "basic",
          " dark:border-y dark:border-neutral-800 dark:bg-neutral-950":
            theme === "dark",
          "light:border-y light:border-neutral-200 light:bg-white":
            theme === "light",
        })}
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
    <div className="relative flex items-stretch">
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
          <CarouselContent className="h-full w-32 lg:w-40">
            <CarouselItemLocal theme={theme}>
              <Box className="h-4 w-4" />
              basic
            </CarouselItemLocal>
            <CarouselItemLocal theme={theme}>
              <Sun className="h-4 w-4" />
              licht
            </CarouselItemLocal>
            <CarouselItemLocal theme={theme}>
              <Moon className="h-4 w-4" />
              donker
            </CarouselItemLocal>
          </CarouselContent>
          <CarouselPrevious
            variant="outline"
            className="-left-8 rounded-r-none basic:rounded-none basic:border-slate-900 basic:md:border-none basic:md:border-inherit"
          />
          <CarouselNext
            variant="outline"
            className="-right-8 rounded-l-none basic:rounded-none basic:border-slate-900 basic:md:border-none basic:md:border-inherit"
          />
        </Carousel>
      )}
    </div>
  );
}
