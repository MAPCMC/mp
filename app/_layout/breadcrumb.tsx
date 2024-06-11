"use client";

import React from "react";
import {
  Breadcrumb as BreadcrumbPrimitive,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { NavLink } from "@/components/nav-link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function Breadcrumb() {
  const paths = usePathname();
  const pathNames = paths.split("/").filter((path) => path);

  return (
    <BreadcrumbPrimitive className="z-10 -mb-16 w-full px-6 pt-16 md:-mb-16 md:w-[70%] md:pt-20">
      <BreadcrumbList className="flex-nowrap">
        {/* home */}
        <BreadcrumbItem>
          {pathNames.length ? (
            <>
              <BreadcrumbLink asChild>
                <NavLink
                  href="/"
                  className="group flex items-center text-inherit no-underline hover:underline focus:underline"
                >
                  <span className="-ml-[calc(15vw+1.5rem)] h-0 w-[calc(15vw+1.8rem)] border-b-2 border-orange-500"></span>
                  <span
                    className={cn(
                      "mr-1.5 block h-2.5 w-2.5 rounded-full border-2 shadow-[0_0_0_2px] shadow-orange-500 md:mr-3",
                      "dark:border-dark dark:bg-dark dark:group-hover:bg-sky-300 dark:group-focus:bg-sky-300",
                      "light:bg-light light:border-light light:group-hover:bg-sky-800 light:group-focus:bg-sky-800",
                      "basic:bg-basic basic:border-basic basic:group-hover:bg-sky-800 basic:group-focus:bg-sky-800",
                    )}
                  ></span>
                  <span className="basic:bg-basic light:bg-light dark:bg-dark truncate first-letter:capitalize">
                    home
                  </span>
                </NavLink>
              </BreadcrumbLink>
            </>
          ) : null}
        </BreadcrumbItem>

        {/* pages */}
        {pathNames.map((link, index) => {
          let href = `/${pathNames.slice(0, index + 1).join("/")}`;
          let text = String(link).replace("-", " ");

          // current page
          if (pathNames.length === index + 1) {
            return (
              <BreadcrumbItem key={`${text}${href}${index}`}>
                <BreadcrumbPage className="group flex items-center text-inherit">
                  <span className="h-0 w-4 border-b-2 border-orange-500"></span>
                  <span className="dark:border-dark light:border-light basic:border-basic mr-1.5 block h-2.5 w-2.5  rounded-full border-2 bg-orange-500 shadow-[0_0_0_2px] shadow-orange-500 md:mr-3"></span>
                  <span className="basic:bg-basic light:bg-light dark:bg-dark truncate first-letter:capitalize">
                    {text}
                  </span>
                </BreadcrumbPage>
              </BreadcrumbItem>
            );
          }
          // nested inbetween page links
          return (
            <React.Fragment key={`${text}${href}${index}`}>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <NavLink
                    href={href}
                    className="group flex w-auto items-center text-inherit no-underline hover:underline focus:underline"
                  >
                    <span className="h-0 w-4 border-b-2 border-orange-500"></span>
                    <span
                      className={cn(
                        "mr-1.5 block h-2.5 w-2.5 rounded-full border-2 shadow-[0_0_0_2px] shadow-orange-500 md:mr-3",
                        "dark:border-dark dark:bg-dark dark:group-hover:bg-sky-300 dark:group-focus:bg-sky-300",
                        "light:bg-light light:border-light light:group-hover:bg-sky-800 light:group-focus:bg-sky-800",
                        "basic:bg-basic basic:border-basic basic:group-hover:bg-sky-800 basic:group-focus:bg-sky-800",
                      )}
                    ></span>
                    <span className="basic:bg-basic light:bg-light dark:bg-dark truncate first-letter:capitalize">
                      {text}
                    </span>
                  </NavLink>
                </BreadcrumbLink>
              </BreadcrumbItem>
            </React.Fragment>
          );
        })}
      </BreadcrumbList>
    </BreadcrumbPrimitive>
  );
}
