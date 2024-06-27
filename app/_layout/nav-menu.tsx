"use client";

import react from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

import { usePathname } from "next/navigation";
import {
  Building2,
  HomeIcon,
  MonitorDotIcon,
  Send,
  LucideProps,
} from "lucide-react";
import { NavLink } from "@/components/links";

type MenuItemProps = {
  text: string;
  icon: react.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>
  >;
  href: string;
  className?: string;
  isActive?: boolean;
};

const MenuItem = ({ href, icon, text, className, isActive }: MenuItemProps) => {
  const MenuItemIcon = icon as unknown as React.ElementType;

  return (
    <NavigationMenuItem
      className={cn(
        "relative flex flex-col items-center justify-stretch",
        className,
      )}
    >
      <NavigationMenuLink active={isActive} asChild>
        <NavLink
          href={href}
          variant="menu"
          className={cn(
            navigationMenuTriggerStyle(),
            "group h-14 w-full flex-col gap-px p-2 pt-3 text-xs basic:md:px-5",
            "md:h-full md:px-4 md:py-2 md:text-sm",

            // colors active page
            "data-active:basic:bg-slate-300  data-active:basic:text-slate-950",
            "data-active:basic:focus-visible:bg-slate-950  data-active:basic:focus-visible:text-slate-50",
            "data-active:basic:hover:bg-slate-950  data-active:basic:hover:text-slate-50",
            // indicator active page
            'after:absolute after:right-1 after:top-1 after:h-1.5 after:w-1.5 after:rounded-full after:bg-amber-500 after:content-[""]',
            "after:hidden data-active:after:block",
            "light:md:after:top-0.5",

            // light
            // colors interaction
            "light:bg-light light:hover:bg-slate-950 light:md:rounded-full light:md:border light:md:border-light-dots",
            "light:hover:border-transparent light:hover:bg-sky-800 light:hover:text-slate-50 light:focus-visible:border-transparent light:focus-visible:bg-sky-800 light:focus-visible:text-slate-50",
            "data-active:light:bg-light-dots data-active:light:text-slate-950 ",
            "data-active:light:hover:bg-sky-800 data-active:light:hover:text-slate-50",

            // dark
            "dark:bg-dark dark:hover:bg-slate-950 dark:md:rounded-md dark:md:border dark:md:border-dark-dots",
            "dark:hover:border-sky-300 dark:hover:bg-sky-300 dark:hover:text-slate-950 dark:focus-visible:border-sky-300 dark:focus-visible:bg-sky-300 dark:focus-visible:text-slate-950",
            "data-active:dark:bg-dark-dots data-active:dark:hover:bg-sky-300",
          )}
        >
          <MenuItemIcon
            className="h-4 w-4 shrink-0 md:hidden"
            strokeWidth={1}
          />
          <span className="w-full max-w-full truncate text-center first-letter:capitalize">
            {text}
          </span>
        </NavLink>
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};

export function NavMenu() {
  const pathname = usePathname();

  return (
    <NavigationMenu
      aria-labelledby="mainnav"
      className={cn(
        "fixed inset-x-0 bottom-0 md:relative",
        "basic:border-t basic:border-slate-950 basic:bg-basic md:basic:border-t-0",
        "md:flex md:items-stretch",
      )}
    >
      <h2 id="mainnav" className="sr-only">
        hoofdmenu
      </h2>
      <NavigationMenuList
        className={cn(
          "grid grid-cols-4 gap-x-px space-x-0",
          "md:h-full md:w-auto md:grid-cols-3 md:items-stretch",
          "border-slate-950 bg-slate-950 basic:md:border-r",
          "light:mx-2 light:mb-2 light:overflow-hidden light:rounded-b-md light:border light:md:m-0 light:md:items-center light:md:gap-2 light:md:border-0 light:md:bg-transparent",
          "dark:border dark:border-dark-dots dark:bg-dark-dots dark:drop-shadow dark:md:m-0 dark:md:items-center dark:md:gap-2 dark:md:border-0 dark:md:bg-transparent",
        )}
      >
        <MenuItem
          isActive={pathname === "/"}
          icon={HomeIcon}
          href="/"
          text="home"
          className="md:hidden"
        />
        <MenuItem
          isActive={pathname.includes("/development")}
          icon={MonitorDotIcon}
          href="/development"
          text="development"
        />
        <MenuItem
          isActive={pathname === "/freelance"}
          icon={Building2}
          href="/freelance"
          text="freelance"
        />
        <MenuItem
          isActive={pathname === "/contact"}
          icon={Send}
          href="/contact"
          text="contact"
        />
      </NavigationMenuList>
    </NavigationMenu>
  );
}
