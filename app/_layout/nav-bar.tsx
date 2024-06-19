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
          "fixed z-50 flex w-full items-stretch justify-between lg:px-[calc(15vw-40px-2rem)]",
          "md:basic:border-b md:basic:border-slate-900 md:basic:bg-basic",
        )}
      >
        <div className="flex items-stretch">
          <Link
            href="/"
            className={cn(
              "group block shrink-0 p-2 focus:outline-none md:px-4",
              "basic:md:border-r basic:md:border-slate-900",
              " basic:hover:bg-slate-900 basic:hover:text-white",
              "basic:focus:bg-slate-900 basic:focus:text-white",
            )}
          >
            <Image
              width={40}
              height={40}
              src="/logo.svg"
              alt="home"
              priority
              className={cn(
                "outline-2 outline-offset-2 outline-sky-700 group-hover:outline group-focus:outline",
                "light:rounded-md light:border-2 light:border-orange-500 light:bg-orange-500",
                "dark:rounded-md dark:border-2 dark:border-orange-500 dark:bg-orange-500",
                "basic:outline-slate-900",
              )}
            />
          </Link>
          <NavMenu />
        </div>
        <ThemeToggle />
      </div>
      <Breadcrumb />
    </>
  );
}
