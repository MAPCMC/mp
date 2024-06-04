import type { Metadata } from "next";
import "@/styles/globals.css";
import { cn } from "@/lib/utils";
import { Roboto_Slab, Roboto_Flex } from "next/font/google";
import { ThemeProvider } from "@/app/_layout/theme-provider";
import { ThemeToggle } from "@/app/_layout/theme-toggle";
import { Navigation } from "@/app/_layout/navigation";

// TODO - delete when https://github.com/radix-ui/primitives/pull/2811 gets merged
import "./_suppressRefWarning";
import { NavLink } from "@/components/nav-link";

const serif = Roboto_Slab({
  subsets: ["latin"],
  variable: "--font-roboto-slab",
  preload: false,
});
const sans = Roboto_Flex({
  subsets: ["latin"],
  variable: "--font-roboto-flex",
  preload: false,
});

export const metadata: Metadata = {
  title: "Maarten Peene",
  description: "Full-stack webdeveloper",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" suppressHydrationWarning>
      <body
        className={cn(
          "flex h-full min-h-screen w-full min-w-full max-w-full flex-col",
          "bg-white text-neutral-950",
          "basic:grid-basic basic:text-neutral-950",
          "light:grid-light light:text-neutral-950",
          "dark:grid-dark dark:text-white",
          sans.variable,
          serif.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          themes={["basic", "light", "dark", "fun"]}
        >
          <nav className="fixed z-50 flex w-full justify-between p-2 basic:border-b basic:bg-white md:px-24">
            <Navigation />
            <ThemeToggle />
          </nav>
          {children}
          <footer className="w-full p-2 basic:border-t basic:bg-white md:px-24">
            <p className="text-sm">© 2024 Itoko door Maarten Peene</p>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
