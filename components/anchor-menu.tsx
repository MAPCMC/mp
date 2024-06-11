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
        "basic:text-sm basic:italic",
        className,
      )}
    >
      {children}
    </Link>
  );
}

export function AnchorMenu({ links }: AnchorMenuProps) {
  return (
    <aside className="fixed bottom-12 left-0 z-10 w-screen md:left-0 md:right-auto md:top-36 md:w-[15%]">
      <nav aria-labelledby="a1">
        <h2 id="a10" className="sr-only">
          paginamenu
        </h2>
        <ul
          className={cn(
            "flex w-full max-w-full md:flex-col",
            "duration-500 animate-in slide-in-from-bottom-full md:slide-in-from-bottom-0 md:slide-in-from-left-full",
            "basic:md:border-basic-grid basic:md:bg-basic-grid gap-px bg-slate-900 basic:border-y basic:border-slate-900 basic:md:border-r",
          )}
        >
          {links.map((link) => (
            <li key={link.href} className="shrink grow">
              <AnchorLink
                href={link.href}
                className={cn(
                  "block truncate bg-slate-50 px-4 pb-3 pt-2 text-center md:pb-2 md:text-right",
                  " basic:text-inherit basic:no-underline",
                  "basic:bg-basic basic:hover:bg-slate-700 basic:hover:text-white",
                  "basic:focus:bg-slate-700 basic:focus:text-white",
                )}
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
