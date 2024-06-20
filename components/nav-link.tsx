import Link, { LinkProps as NextLinkProps } from "next/link";
import * as React from "react";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

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
          "basic:bg-basic basic:text-slate-950 basic:hover:bg-slate-900 basic:hover:text-slate-50",
          // "basic:focus-visible:bg-slate-900 basic:focus-visible:text-slate-50",
          "focus-visible:outline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-400 focus-visible:z-10",
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
        className={cn(linkVariants({ variant, size, className }), className)}
        ref={ref}
        {...props}
      >
        {children}
      </Link>
    );
  },
);

NavLink.displayName = "NavLink";

export { NavLink, linkVariants };
