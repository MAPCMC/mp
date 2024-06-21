import Image from "next/image";

import { ThemeToggle } from "@/app/_layout/theme-toggle";
import { Breadcrumb } from "@/app/_layout/breadcrumb";
import { NavMenu } from "@/app/_layout/nav-menu";
import { cn } from "@/lib/utils";
import { NavLink, SimpleLink } from "@/components/nav-link";

export function NavBar() {
  return (
    <>
      <div
        className={cn(
          "fixed z-50 flex w-full items-stretch justify-between lg:px-[calc(15vw-40px-2rem)]",
          "md:basic:border-b md:basic:border-slate-900 md:basic:bg-basic",
        )}
      >
        {/* No use of next/link because does not refocus to anchor */}
        <SimpleLink
          href="#main"
          variant="button"
          className={cn(
            "absolute left-2 top-2 z-50 whitespace-nowrap",
            "transition-all -translate-y-16  focus:translate-y-0",
          )}
        >
          Naar paginainhoud
        </SimpleLink>
        <div className="flex items-stretch">
          <NavLink
            href="/"
            variant="menu"
            className="group shrink-0 p-2 basic:bg-transparent md:px-4 basic:md:border-r basic:md:border-slate-900"
          >
            <Image
              width={40}
              height={40}
              src="/logo.svg"
              alt="home"
              priority
              className={cn(
                "light:rounded-md light:border-2 light:border-orange-500 light:bg-orange-500",
                "dark:rounded-md dark:border-2 dark:border-orange-500 dark:bg-orange-500",
              )}
            />
          </NavLink>
          <NavMenu />
        </div>
        <ThemeToggle />
      </div>
      <Breadcrumb />
    </>
  );
}
