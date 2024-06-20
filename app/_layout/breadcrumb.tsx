"use client";

import React from "react";
import {
  Breadcrumb as BreadcrumbPrimitive,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

export function Breadcrumb() {
  const paths = usePathname();
  const pathNames = paths.split("/").filter((path) => path);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger, useGSAP);
    gsap.fromTo(
      ".breadcrumb-nav",
      { opacity: 0, x: 0 },
      {
        opacity: 1,
        x: -100,
        scrollTrigger: {
          trigger: ".breadcrumb-nav",
          toggleActions: "restart pause resume reset",
        },
      },
    );
  });

  return (
    <BreadcrumbPrimitive className="breadcrumb-nav z-10 -mb-16 w-full px-6 pt-16 md:ml-[20%] md:w-[80%] md:pt-20 lg:ml-0 lg:w-[70%]">
      <BreadcrumbList className="flex-nowrap">
        {/* home */}
        <BreadcrumbItem>
          {pathNames.length ? (
            <>
              <BreadcrumbLink asChild>
                <Link
                  href="/"
                  className="group flex items-center no-underline underline-offset-4 hover:underline focus-visible:underline basic:italic"
                >
                  <span className="-ml-[calc(20vw+1.5rem)] h-0 w-[calc(20vw+1.8rem+100px)] border-b-2 border-orange-500"></span>
                  <span
                    className={cn(
                      "mr-2 block h-2.5 w-2.5 rounded-full border-2 shadow-[0_0_0_2px] shadow-orange-500 md:mr-3",
                      "dark:border-dark dark:bg-dark dark:group-hover:bg-sky-300 dark:group-focus-visible:bg-sky-300",
                      "light:border-light light:bg-light light:group-hover:bg-sky-800 light:group-focus-visible:bg-sky-800",
                      "basic:border-basic basic:bg-basic basic:group-hover:bg-sky-800 basic:group-focus-visible:bg-sky-800",
                    )}
                  ></span>
                  <span className="truncate first-letter:capitalize light:bg-light basic:bg-basic dark:bg-dark">
                    home
                  </span>
                </Link>
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
                <BreadcrumbPage className="group flex items-center">
                  <span className="h-0 w-4 border-b-2 border-orange-500"></span>
                  <span className="mr-2 block h-2.5 w-2.5 rounded-full border-2 bg-orange-500  shadow-[0_0_0_2px] shadow-orange-500 light:border-light basic:border-basic dark:border-dark md:mr-3"></span>
                  <span className="truncate font-semibold first-letter:capitalize light:bg-light basic:bg-basic dark:bg-dark">
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
                  <Link
                    href={href}
                    className="group flex w-auto items-center text-inherit no-underline underline-offset-4 hover:underline focus-visible:underline"
                  >
                    <span className="h-0 w-4 border-b-2 border-orange-500"></span>
                    <span
                      className={cn(
                        "mr-2 block h-2.5 w-2.5 rounded-full border-2 shadow-[0_0_0_2px] shadow-orange-500 md:mr-3",
                        "dark:border-dark dark:bg-dark dark:group-hover:bg-sky-300 dark:group-focus-visible:bg-sky-300",
                        "light:border-light light:bg-light light:group-hover:bg-sky-800 light:group-focus-visible:bg-sky-800",
                        "basic:border-basic basic:bg-basic basic:group-hover:bg-sky-800 basic:group-focus-visible:bg-sky-800",
                      )}
                    ></span>
                    <span className="truncate first-letter:capitalize light:bg-light basic:bg-basic dark:bg-dark">
                      {text}
                    </span>
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
            </React.Fragment>
          );
        })}
      </BreadcrumbList>
    </BreadcrumbPrimitive>
  );
}
