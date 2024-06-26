import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center whitespace-nowrap rounded-full transition-colors",
    "light:border-light-dots light:bg-light basic:bg-basic basic:border-slate-950 dark:border-dark-dots dark:bg-dark",
    "basic:rounded-none basic:text-slate-950",
    "basic:hover:bg-slate-950 basic:hover:text-slate-50",
    "basic:focus-visible:bg-slate-950 basic:focus-visible:text-slate-50",
    "light:hover:bg-amber-500 dark:hover:bg-amber-500 hover:dark:text-slate-950",
    "focus-visible:outline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-300",
  ],
  {
    variants: {
      variant: {
        default: "bg-slate-950 text-slate-50",
        // destructive:
        //   "bg-red-500 text-neutral-50 hover:bg-red-500/90 dark:bg-red-900 dark:text-neutral-50 dark:hover:bg-red-900/90",
        outline: "border hover:border-none",
        secondary:
          "bg-neutral-100 text-neutral-900 hover:bg-neutral-100/80 dark:bg-neutral-800 dark:text-neutral-50 dark:hover:bg-neutral-800/80",
        // ghost:
        //   "hover:bg-neutral-100 hover:text-neutral-900 dark:hover:bg-neutral-800 dark:hover:text-neutral-50",
        link: "text-neutral-900 underline-offset-4 hover:underline dark:text-neutral-50",
        memory: "bg-orange-600 dark:bg-orange-800 basic:text-slate-50",
      },
      size: {
        default: "h-10 px-5 py-2",
        xs: "h-auto px-3 py-0.5 text-xs",
        sm: "h-9 rounded-full px-4",
        lg: "h-11 rounded-full px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size }), className)}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
