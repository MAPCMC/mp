"use client";

import Link from "next/link";
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
      <Link href={href} legacyBehavior passHref>
        <NavigationMenuLink
          active={isActive}
          className={cn(
            navigationMenuTriggerStyle(),
            "group w-full flex-col gap-px p-2 pt-3 text-xs basic:px-5",
            "md:h-full md:px-4 md:py-2 md:text-sm",
            // basic
            // colors interaction
            "basic:bg-basic basic:hover:bg-slate-900 basic:hover:text-slate-50",
            "basic:focus:bg-slate-900 basic:focus:text-slate-50",
            // colors active page
            "data-active:basic:bg-slate-200  data-active:basic:text-slate-900",
            "data-active:basic:focus:bg-slate-900  data-active:basic:focus:text-slate-50",
            "data-active:basic:hover:bg-slate-900  data-active:basic:hover:text-slate-50",
            // indicator active page
            'after:absolute after:right-1 after:top-1 after:h-1.5 after:w-1.5 after:rounded-full after:bg-amber-600 after:content-[""]',
            "after:hidden data-active:after:block",
            "light:md:after:top-0.5 dark:md:after:top-0.5",

            // light
            // colors interaction
            "light:h-auto light:bg-light light:hover:bg-slate-900 light:md:rounded-full light:md:border light:md:border-light-dots",
            "light:hover:border-transparent light:hover:bg-sky-800 light:hover:text-slate-50 light:focus:border-transparent light:focus:bg-sky-800 light:focus:text-slate-50",
            "data-active:light:bg-light-dots data-active:light:text-slate-900",

            // dark
            "dark:h-auto dark:bg-dark dark:hover:bg-slate-900 dark:md:rounded-full dark:md:border dark:md:border-dark-dots",
            "dark:hover:bg-sky-800 dark:hover:text-slate-50 dark:focus:bg-sky-800 dark:focus:text-slate-50",
            "data-active:dark:bg-dark-dots",
          )}
        >
          <MenuItemIcon
            className="h-4 w-4 shrink-0 md:hidden"
            strokeWidth={1}
          />
          <span className="block max-w-full first-letter:capitalize">
            {text}
          </span>
        </NavigationMenuLink>
      </Link>
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
        "basic:border-t basic:border-slate-900 basic:bg-basic md:basic:border-t-0",
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
          "border-slate-900 bg-slate-900 basic:md:border-r",
          "light:m-2 light:border light:md:m-0 light:md:items-center light:md:gap-2 light:md:border-0 light:md:bg-transparent",
          "dark:m-2 dark:border dark:md:m-0 dark:md:items-center dark:md:gap-2 dark:md:border-0 dark:md:bg-transparent",
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
