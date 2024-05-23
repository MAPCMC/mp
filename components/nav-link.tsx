import Link from "next/link";
import { cn } from "@/lib/utils";

export function NavLink({
  className,
  children,
  ...props
}: React.ComponentProps<typeof Link>) {
  return (
    <Link {...props} className={cn("text-orange-700 underline", className)}>
      {children}
    </Link>
  );
}
