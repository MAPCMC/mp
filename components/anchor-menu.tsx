"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { NavLink } from "@/components/links";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

type AnchorMenuProps = {
  links: {
    text: string;
    href: string;
  }[];
};

type MenuItemProps = {
  text: string;
  href: string;
  className?: string;
  isActive?: boolean;
};

const AnchorMenuItem = ({ href, text, isActive }: MenuItemProps) => {
  return (
    <NavigationMenuItem key={href} className="shrink grow truncate">
      <NavigationMenuLink active={isActive} asChild>
        <NavLink variant="anchor" href={href}>
          {text}
        </NavLink>
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};

export function AnchorMenu({ links }: AnchorMenuProps) {
  const params = useParams();
  const [hash, setHash] = useState<string | null>(null);

  useEffect(() => {
    const currentHash = window?.location?.hash ?? null;
    setHash(currentHash);
  }, [params]);

  return (
    <aside
      className={cn(
        "fixed bottom-14 left-0 z-20",
        "md:bottom-1/2 md:top-36 md:w-[20%] lg:w-[15%]",
        "basic:left-0 basic:right-0",
        "basic:md:left-6 basic:md:w-[calc(20vw-1.5rem)] basic:lg:w-[calc(15vw-1.5rem)]",
        "light:bottom-16 light:left-2 light:right-2",
        "light:md:left-6 light:md:w-[calc(20vw-1.5rem)] light:lg:w-[calc(15vw-1.5rem)]",
        "dark:bottom-16 dark:left-2 dark:right-2",
        "dark:md:left-6 dark:md:w-[calc(20vw-1.5rem)] dark:lg:w-[calc(15vw-1.5rem)]",
      )}
    >
      <NavigationMenu aria-labelledby="a1">
        <h2 id="a10" className="sr-only">
          kopjes op deze pagina
        </h2>
        <NavigationMenuList
          className={cn(
            "flex w-full max-w-full md:flex-col",
            "duration-500 animate-in motion-safe:slide-in-from-bottom-full md:fade-in motion-safe:md:slide-in-from-bottom-8 motion-safe:md:slide-in-from-right-6",
            "gap-px border-slate-950 bg-slate-950 md:bg-transparent",
            "basic:border-y basic:md:border-none",
            "light:border light:md:border-none",
            "dark:gap-1 dark:border-none dark:bg-transparent",
          )}
        >
          {links.map((link) => (
            <AnchorMenuItem
              key={link.href}
              {...link}
              isActive={hash === link.href}
            />
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </aside>
  );
}
