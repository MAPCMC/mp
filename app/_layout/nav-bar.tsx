import Link from "next/link";
import Image from "next/image";

import { ThemeToggle } from "@/app/_layout/theme-toggle";
import { Breadcrumb } from "@/app/_layout/breadcrumb";
import { NavMenu } from "@/app/_layout/nav-menu";
import { cn } from "@/lib/utils";

export function NavBar() {
  return (
    <>
      <div
        className={cn(
          "fixed z-50 flex w-full items-stretch justify-between md:px-[15%]",
          "md:basic:bg-basic md:basic:border-b md:basic:border-slate-900",
        )}
      >
        <div className="flex items-stretch md:-translate-x-[calc(41px+1rem)]">
          <Link
            href="/"
            className={cn(
              "block shrink-0 p-2 md:px-4",
              "basic:md:border-r basic:md:border-slate-900",
              " basic:hover:bg-slate-900 basic:hover:text-white",
              "basic:focus:bg-slate-900 basic:focus:text-white",
            )}
          >
            <Image width={40} height={40} src="/logo.svg" alt="home" priority />
          </Link>
          <NavMenu />
        </div>
        <ThemeToggle />
      </div>
      <Breadcrumb />
    </>
  );
}
