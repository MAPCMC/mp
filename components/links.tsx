import Link, { LinkProps as NextLinkProps } from "next/link";
import * as React from "react";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { DownloadIcon } from "lucide-react";

const linkVariants = cva(
  ["text-sky-800", "disabled:pointer-events-none disabled:opacity-70"],
  {
    variants: {
      variant: {
        default: [
          "underline underline-offset-4 outline-offset-4 transition-all hover:underline-offset-8 focus-visible:underline-offset-8",
          "basic:italic basic:text-sky-800",
        ],
        menu: [
          "first-letter:capitalize bg-sky-800",
          "basic:bg-basic basic:text-slate-950 basic:hover:bg-slate-950 basic:hover:text-slate-50",
          "light:bg-transparent dark:bg-transparent",
          "focus-visible:outline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-400 focus-visible:z-10",
        ],
        breadcrumb: [
          "outline-2 outline-offset-4 outline-sky-300 focus-visible:outline",
        ],
        anchor: [
          "relative block px-4 py-1.5 text-center md:text-right",
          "first-letter:capitalize text-xs md:text-sm",
          "data-active:underline hover:underline underline-offset-4 focus-visible:underline",
          "outline-offset-4 outline-2 outline-sky-400 focus-visible:outline",
          "basic:italic basic:bg-basic basic:data-active:bg-slate-100 basic:md:bg-transparent basic:md:data-active:bg-transparent basic:md:border-none",
          "light:bg-light light:data-active:bg-orange-100 light:md:bg-transparent light:data-active:md:bg-transparent",
          "dark:bg-dark dark:border-dark-dots dark:border",
          "dark:py-2 dark:hover:bg-slate-50 dark:hover:text-slate-950 dark:rounded-full dark:outline-offset-8",
        ],
        button: [
          "whitespace-nowrap first-letter:capitalize",
          "bg-amber-500 text-slate-950 px-5 py-2 light:rounded-full dark:rounded-full",
          "hover:bg-slate-950 hover:text-slate-50 dark:hover:bg-slate-700",
          "outline-2 outline-offset-4 outline-sky-300 focus-visible:outline",
          "shadow-[.2rem_.2rem_solid] basic:shadow-slate-100 light:shadow-orange-200 dark:shadow-slate-700",
        ],
        download: [
          "whitespace-nowrap first-letter:capitalize w-max",
          "px-5 py-2 light:rounded-full dark:rounded-full",
          "outline-2 outline-offset-4 outline-sky-300 focus-visible:outline",
          "basic:bg-slate-950 basic:text-slate-50 hover:bg-amber-500 hover:text-slate-950",
          "light:bg-slate-950 light:text-slate-50 light:hover:bg-amber-500 light:hover:text-slate-950",
          "dark:bg-slate-700 dark:text-slate-50 dark:hover:bg-amber-500 dark:hover:text-slate-950",
          "shadow-[.2rem_.2rem_solid] basic:shadow-slate-100 light:shadow-orange-200 dark:shadow-slate-700",
        ],
      },
      size: {
        default: "text-inherit",
        sm: "text-sm",
        block: "block px-5 py-2",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface LinkProps
  extends NextLinkProps,
    VariantProps<typeof linkVariants> {
  className?: string;
  children?: React.ReactNode;
}

const NavLink = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ className, children, variant, size, ...props }, ref) => {
    return (
      <Link
        className={cn(linkVariants({ variant, size }), className)}
        ref={ref}
        {...props}
      >
        {children}
      </Link>
    );
  },
);

NavLink.displayName = "NavLink";

export interface SimpleLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof linkVariants> {
  className?: string;
  children?: React.ReactNode;
}

const SimpleLink = React.forwardRef<HTMLAnchorElement, SimpleLinkProps>(
  ({ className, children, variant, size, ...props }, ref) => {
    return (
      <a
        className={cn("group", linkVariants({ variant, size }), className)}
        ref={ref}
        {...props}
      >
        {children}
        {variant === "download" && (
          <DownloadIcon className="ml-2 inline-block h-4 w-4 group-hover:motion-safe:animate-bounce" />
        )}
      </a>
    );
  },
);
SimpleLink.displayName = "SimpleLink";

export { NavLink, SimpleLink, linkVariants };
