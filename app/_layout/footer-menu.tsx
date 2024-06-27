"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
  // navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { cn } from "@/lib/utils";

import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

type MenuItemProps = {
  text: string;
  href: string;
  className?: string;
  longLine?: boolean;
  isActive?: boolean;
  children?: React.ReactNode;
};

const MenuItem = ({
  href,
  text,
  className,
  children,
  longLine,
  isActive,
}: MenuItemProps) => {
  return (
    <NavigationMenuItem className={className}>
      <Link href={href} legacyBehavior passHref>
        <NavigationMenuLink
          active={isActive}
          className={cn(
            // navigationMenuTriggerStyle(),
            "group flex h-8 items-center pr-4 text-inherit",
            "underline-offset-4 hover:underline focus-visible:underline",
            // "light:bg-light basic:bg-basic dark:bg-dark",
            "outline-2 outline-offset-4 outline-sky-300 focus-visible:outline",
          )}
        >
          <span
            className={cn("-ml-2 h-0 w-4 border-b-2 border-orange-500", {
              "-ml-3 w-5": longLine,
            })}
          ></span>
          <span
            className={cn(
              "mr-3 block h-2.5 w-2.5 shrink-0 rounded-full border-2 shadow-[0_0_0_2px] shadow-orange-500",
              "dark:border-dark dark:bg-dark dark:group-hover:bg-sky-300 dark:group-focus-visible:bg-sky-300",
              "light:border-light light:bg-light light:group-hover:bg-sky-800 light:group-focus-visible:bg-sky-800",
              "basic:border-basic basic:bg-basic basic:group-hover:bg-sky-800 basic:group-focus-visible:bg-sky-800",
              { " !bg-orange-500": isActive },
            )}
          ></span>
          <span className="grow first-letter:capitalize">{text}</span>
        </NavigationMenuLink>
      </Link>
      {children}
    </NavigationMenuItem>
  );
};

export function FooterMenu() {
  const pathname = usePathname();

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger, useGSAP);
    gsap.fromTo(
      ".footer-menu",
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: ".footer-menu",
          toggleActions: "restart pause resume reset",
        },
      },
    );
  });

  return (
    <NavigationMenu
      aria-labelledby="footernav"
      orientation="vertical"
      className="footer-menu pl-6"
    >
      <h2 id="footernav" className="pb-2 font-serif first-letter:capitalize">
        menu
      </h2>
      <NavigationMenuList className="relative before:absolute before:-left-3 before:bottom-1/2 before:top-[calc(1rem-1px)] before:w-4 before:rounded-tl-md before:border-l-2 before:border-t-2 before:border-orange-500 before:content-[''] after:absolute after:right-[calc(100%+.75rem-2px)] after:top-1/2 after:h-4 after:w-10 after:rounded-br-md after:border-b-2 after:border-r-2 after:border-orange-500 after:content-[''] md:after:w-[22vw] lg:after:w-[18vw]">
        <MenuItem isActive={pathname === "/"} href="/" text="home" />
        <NavigationMenuPrimitive.Sub>
          <NavigationMenuList className="relative ml-6 before:absolute before:-left-3 before:-top-[calc(.5rem+1px)] before:bottom-[calc(1rem-1px)] before:w-4 before:rounded-bl-md before:border-b-2 before:border-l-2 before:border-orange-500 before:content-['']">
            <MenuItem
              isActive={pathname === "/development"}
              href="/development"
              text="development"
              longLine
            >
              <NavigationMenuPrimitive.Sub>
                <NavigationMenuList className="relative ml-6 before:absolute before:-left-3 before:-top-[calc(.5rem+1px)] before:bottom-[calc(1rem-1px)] before:w-4 before:rounded-bl-md before:border-b-2 before:border-l-2 before:border-orange-500 before:content-['']">
                  <MenuItem
                    isActive={pathname === "/development/start-nu"}
                    href="/development/start-nu"
                    text="start nu"
                  />
                </NavigationMenuList>
              </NavigationMenuPrimitive.Sub>
            </MenuItem>
            <MenuItem
              isActive={pathname === "/freelance"}
              href="/freelance"
              text="freelance"
              longLine
            />
            <MenuItem
              isActive={pathname === "/contact"}
              href="/contact"
              text="contact"
            />
          </NavigationMenuList>
        </NavigationMenuPrimitive.Sub>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
