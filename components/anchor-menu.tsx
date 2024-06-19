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
        "first-letter:capitalize",
        "underline underline-offset-4 outline-offset-4 transition-all hover:underline-offset-8 focus:underline-offset-8",
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
    <aside className="fixed bottom-12 left-0 z-10 w-screen md:-right-6 md:bottom-1/2 md:left-6 md:top-36 md:w-[20%] md:pr-6 lg:w-[15%]">
      <nav aria-labelledby="a1">
        <h2 id="a10" className="sr-only">
          Kopjes op deze pagina
        </h2>
        <ul
          className={cn(
            "flex w-full max-w-full md:flex-col",
            "duration-500 animate-in slide-in-from-bottom-full md:fade-in md:slide-in-from-bottom-8 md:slide-in-from-right-16",
            "gap-px bg-slate-900 basic:border-y basic:border-slate-900 basic:md:border-r basic:md:border-basic-grid basic:md:bg-basic-grid",
            "light:bg-light dark:bg-dark",
          )}
        >
          {links.map((link) => (
            <li key={link.href} className="shrink grow">
              <AnchorLink
                href={link.href}
                className={cn(
                  "block truncate bg-slate-50 px-4 pb-3 pt-2 text-center md:pb-2 md:text-right",
                  " basic:text-inherit basic:no-underline",
                  "basic:bg-basic basic:hover:bg-slate-700 basic:hover:text-slate-50",
                  "basic:focus:bg-slate-700 basic:focus:text-slate-50",
                  "light:bg-light light:hover:bg-slate-700 light:hover:text-slate-50",
                  "light:focus:bg-slate-700 light:focus:text-slate-50",
                  "dark:bg-dark dark:hover:bg-slate-700 dark:hover:text-slate-50",
                  "dark:focus:bg-slate-700 dark:focus:text-slate-50",
                  "text-sm",
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
