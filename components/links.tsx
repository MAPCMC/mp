import Link, { LinkProps as NextLinkProps } from "next/link";
import * as React from "react";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import {
  ArrowDownToLine,
  ArrowRight,
  DownloadIcon,
  ExternalLink,
} from "lucide-react";

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
          "first-letter:capitalize text-xs md:text-base",
          "data-active:underline hover:underline underline-offset-4 focus-visible:underline",
          "outline-offset-4 outline-2 outline-sky-400 focus-visible:outline",
          "basic:italic basic:bg-basic basic:data-active:bg-slate-100 basic:md:bg-transparent basic:md:data-active:bg-transparent basic:md:border-none",
          "light:bg-light light:data-active:bg-orange-100 light:md:bg-transparent light:data-active:md:bg-transparent",
          "dark:bg-dark dark:border-dark-dots dark:border",
          "dark:py-2 dark:hover:bg-slate-50 dark:hover:text-slate-950 dark:rounded-md dark:outline-offset-8",
        ],
        button: [
          "font-normal whitespace-nowrap w-max first-letter:capitalize px-5 py-2",
          "outline-2 outline-offset-4 outline-sky-300 focus-visible:outline",
          "bg-amber-500 text-slate-950 hover:bg-slate-950 hover:text-slate-50",
          "basic:bg-white basic:hover:bg-slate-950 basic:border-slate-950 basic:border basic:text-sm basic:shadow-slate-100 basic:shadow-[.2rem_.2rem_solid]",
          "light:rounded-full light:hover:bg-sky-800 light:hover:shadow-sky-300 light:transition-all light:!border-none light:shadow-orange-200 light:shadow-[.3rem_.3rem_solid] light:hover:shadow-[.2rem_.2rem_solid]",
          "dark:border dark:text-slate-950 dark:border-dark-dots/50 dark:rounded-md dark:shadow-md dark:shadow-slate-700 dark:hover:shadow-lg dark:hover:bg-sky-300 dark:hover:shadow-slate-700",
        ],
        secondary: [
          "font-normal first-letter:capitalize",
          "whitespace-nowrap w-max first-letter:capitalize px-5 py-2",
          "outline-2 outline-offset-4 outline-sky-300 focus-visible:outline",
          "basic:bg-transparent basic:hover:bg-slate-300 basic:border-slate-300 basic:hover:border-slate-950 basic:border basic:text-sm basic:shadow-slate-100 basic:shadow-[.2rem_.2rem_solid] basic:hover:text-slate-950 basic:text-slate-700",
          "light:rounded-full light:border-light-dots light:bg-light light:hover:bg-white light:hover:text-slate-950 light:hover:shadow-orange-300 light:transition-all light:border light:shadow-orange-200 light:shadow-[.3rem_.3rem_solid] light:hover:shadow-[.2rem_.2rem_solid]",
          "dark:border dark:text-slate-50 dark:border-dark-dots/50 dark:rounded-md dark:shadow-md dark:shadow-slate-700 dark:hover:shadow-lg dark:hover:bg-slate-300 dark:hover:shadow-slate-700 dark:bg-slate-700 hover:dark:text-slate-950",
        ],
        download: [
          "font-normal whitespace-nowrap w-max first-letter:capitalize px-5 py-2 no-underline",
          "outline-2 outline-offset-4 outline-sky-300 focus-visible:outline",
          "bg-amber-500 text-slate-950 hover:bg-slate-950 hover:text-slate-50",
          "basic:bg-white basic:hover:bg-slate-950 basic:border-slate-950 basic:border basic:text-sm basic:shadow-slate-100 basic:shadow-[.2rem_.2rem_solid]",
          "light:rounded-full light:hover:bg-slate-700 light:hover:shadow-slate-300 light:transition-all light:!border-none light:shadow-orange-200 light:shadow-[.3rem_.3rem_solid] light:hover:shadow-[.2rem_.2rem_solid]",
          "dark:border dark:text-slate-950 dark:border-dark-dots/50 dark:rounded-md dark:shadow-md dark:shadow-slate-700 dark:hover:shadow-lg dark:hover:bg-orange-200 dark:hover:shadow-slate-700",
        ],
        external: [
          "hover:underline focus-visible:underline underline-offset-4",
          "outline-2 outline-offset-4 outline-sky-300 focus-visible:outline",
        ],
        icon: [
          "outline-2 outline-offset-4 outline-sky-300 focus-visible:outline",
          "basic:hover:text-sky-800 light:hover:text-sky-800 dark:hover:text-sky-300",
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
    // React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof linkVariants> {
  className?: string;
  children?: React.ReactNode;
  ref?: React.ForwardedRef<HTMLAnchorElement>;
  target?: string;
}

const NavLink: React.FC<LinkProps> = ({
  className,
  children,
  variant,
  size,
  ref,
  ...props
}) => {
  return (
    <Link
      className={cn("group", linkVariants({ variant, size }), className)}
      ref={ref}
      {...props}
    >
      {children}
      {(variant === "button" || variant === "secondary") && (
        <ArrowRight className="-mr-1 ml-2 inline-block h-4 w-4 basic:!animate-none basic:transition-transform basic:group-hover:translate-x-2 basic:group-focus:translate-x-2 group-hover:motion-safe:animate-bounce-x-2 group-focus-visible:motion-safe:animate-bounce-x-2" />
      )}
    </Link>
  );
};

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
          <>
            <ArrowDownToLine className="ml-2 inline-block h-4 w-4 group-hover:hidden group-focus-visible:hidden" />
            <DownloadIcon className="ml-2 hidden h-4 w-4 group-hover:inline-block group-focus-visible:inline-block basic:!animate-none group-hover:motion-safe:animate-bounce" />
          </>
        )}
        {variant === "external" && (
          <ExternalLink className="ml-2 inline-block h-4 w-4 transition-all -translate-y-1 group-hover:-translate-y-[.4rem] group-hover:translate-x-[.25rem] group-focus:-translate-y-[.4rem] group-focus:translate-x-[.25rem] light:opacity-50 light:group-hover:opacity-100" />
        )}
      </a>
    );
  },
);
SimpleLink.displayName = "SimpleLink";

export { NavLink, SimpleLink, linkVariants };
