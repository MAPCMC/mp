"use client";

import React from "react";
import {
  Breadcrumb as BreadcrumbPrimitive,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { NavLink } from "@/components/nav-link";
import { usePathname } from "next/navigation";

export function Breadcrumb() {
  const paths = usePathname();
  const pathNames = paths.split("/").filter((path) => path);

  return (
    <div className="relative top-16 md:px-[15%]">
      <div className="h-4 w-2.5 border-r-2 border-orange-500 basic:hidden md:hidden"></div>
      <div className="hidden h-8 w-4 rounded-bl-md border-b-2 border-l-2 border-orange-500 -translate-y-[calc(50%-1px)] md:block md:basic:hidden"></div>
      <BreadcrumbPrimitive>
        <BreadcrumbList>
          <BreadcrumbItem>
            {pathNames.length ? (
              <>
                <BreadcrumbLink asChild>
                  <NavLink
                    href="/"
                    className="group flex items-center gap-3 pl-0 text-inherit no-underline hover:underline focus:underline"
                  >
                    <span className="block h-4 w-4 rounded-full border-4 border-white shadow-[0_0_0_2px] shadow-orange-500 group-hover:bg-sky-400 group-focus:bg-sky-400 dark:border-neutral-950"></span>
                    Home
                  </NavLink>
                </BreadcrumbLink>
              </>
            ) : null}
          </BreadcrumbItem>
          {pathNames.length > 0 && <BreadcrumbSeparator />}
          {pathNames.map((link, index) => {
            let href = `/${pathNames.slice(0, index + 1).join("/")}`;
            let text = String(
              link[0].toUpperCase() + link.slice(1, link.length),
            ).replace("-", " ");
            if (pathNames.length === index + 1) {
              return (
                <BreadcrumbItem key={`${text}${href}${index}`}>
                  <BreadcrumbPage className="group flex items-center gap-3 pl-0 text-inherit">
                    <span className="block h-4 w-4 rounded-full border-2 border-white bg-orange-500 shadow-[0_0_0_2px] shadow-orange-500 dark:border-neutral-950"></span>
                    {text}
                  </BreadcrumbPage>
                </BreadcrumbItem>
              );
            }
            return (
              <React.Fragment key={`${text}${href}${index}`}>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <NavLink
                      href={href}
                      className="group flex items-center gap-3 pl-0 text-inherit no-underline hover:underline focus:underline"
                    >
                      <span className="block h-4 w-4 rounded-full border-4 border-white shadow-[0_0_0_2px] shadow-orange-500 group-hover:bg-sky-400 group-focus:bg-sky-400 dark:border-neutral-950"></span>
                      {text}
                    </NavLink>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
              </React.Fragment>
            );
          })}
        </BreadcrumbList>
      </BreadcrumbPrimitive>
    </div>
  );
}
