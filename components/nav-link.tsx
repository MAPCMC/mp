import Link from "next/link";
import { cn } from "@/lib/utils";

export function NavLink({
  className,
  children,
  ...props
}: React.ComponentProps<typeof Link>) {
  return (
    <Link
      {...props}
      className={cn(
        "text-sky-600 underline underline-offset-4 outline-offset-4 transition-all hover:underline-offset-8 focus:underline-offset-8",
        className,
      )}
    >
      {children}
    </Link>
  );
}
