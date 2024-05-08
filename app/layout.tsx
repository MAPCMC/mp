import type { Metadata } from "next";
import "@/styles/globals.css";

import { Roboto_Slab, Roboto_Flex } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";
import { HeaderNav } from "@/components/header-nav";

const serif = Roboto_Slab({
  subsets: ["latin"],
  variable: "--font-roboto-slab",
});
const sans = Roboto_Flex({
  subsets: ["latin"],
  variable: "--font-roboto-flex",
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
          "h-full min-w-full min-h-full ",
          "bg-white text-neutral-950 grid-light",
          "dark:text-white dark:grid-dark dark:bg-neutral-950",
          sans.variable,
          serif.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <header className="fixed w-full flex p-2 justify-between items-center md:px-24">
            <HeaderNav />
            <ThemeToggle />
          </header>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
