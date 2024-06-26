import * as React from "react";
import { cn } from "@/lib/utils";

interface Card extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
}

const Card = React.forwardRef<HTMLDivElement, Card>(
  ({ className, as, ...props }, ref) => {
    const Element = as ?? "div";

    return (
      <Element
        ref={ref}
        className={cn(
          "flex flex-col gap-3",
          "light:rounded-lg light:border-2 light:border-orange-400 light:bg-white light:p-4 light:text-slate-950 light:shadow-[.3rem_.3rem_solid] light:shadow-orange-400",
          "dark:rounded-lg dark:border-2  dark:border-slate-800  dark:bg-slate-950 dark:p-4 dark:text-neutral-50 dark:shadow-[.3rem_.3rem_solid]",
          className,
        )}
        {...props}
      />
    );
  },
);
Card.displayName = "Card";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("flex flex-col space-y-1.5", className)}
      {...props}
    />
  );
});
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("font-serif text-2xl leading-none tracking-tight", className)}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-neutral-500 dark:text-neutral-400", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("", className)} {...props} />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex items-center", className)} {...props} />
));
CardFooter.displayName = "CardFooter";

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};
