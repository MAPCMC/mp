import { cn } from "@/lib/utils";
import Link from "next/link";

type AnchorMenuProps = {
  links: {
    text: string;
    href: string;
  }[];
};

export function AnchorLink({
  className,
  children,
  ...props
}: React.ComponentProps<typeof Link>) {
  return (
    <Link
      {...props}
      className={cn(
        "text-orange-500 underline underline-offset-4 outline-offset-4 transition-all first-letter:capitalize hover:underline-offset-8 focus:underline-offset-8",
        "basic:text-sm basic:italic basic:text-inherit basic:no-underline",
        className,
      )}
    >
      {children}
    </Link>
  );
}

export function AnchorMenu({ links }: AnchorMenuProps) {
  return (
    <aside className="fixed bottom-12 left-0 right-0 z-10 md:left-6 md:right-auto md:top-24">
      <nav aria-labelledby="a1">
        <h2 id="a10" className="sr-only">
          paginamenu
        </h2>
        <ul
          className={cn(
            "grid grid-cols-3 md:flex md:w-[10vw] md:flex-col",
            "duration-500 animate-in slide-in-from-bottom-full md:slide-in-from-bottom-0 md:slide-in-from-left-full",
            "gap-x-px bg-slate-900 basic:border-y basic:border-slate-900",
          )}
        >
          {links.map((link) => (
            <li key={link.href}>
              <AnchorLink
                href={link.href}
                className="block truncate bg-slate-50 px-4 pb-3 pt-2"
              >
                {link.text}
              </AnchorLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
