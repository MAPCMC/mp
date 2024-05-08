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
          "h-full min-w-full min-h-full",
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
          <nav className="fixed w-full flex p-2 justify-between items-center md:px-24">
            <HeaderNav />
            <ThemeToggle />
          </nav>
          <header className="w-full flex flex-col items-center *:w-full *:md:max-w-[70%] space-y-2 pt-24 px-6 mb-2">
            {/* logo puzzle */}
            <div className="grid sm:grid-cols-[auto_1fr] grid-rows-[1fr_auto_auto] gap-y-1 !gap-x-4">
              <div className="flex flex-wrap sm:inline-grid sm:grid-cols-[auto_auto_1fr] sm:grid-rows-[auto_auto_1fr] gap-1 sm:row-span-2 md:row-span-3">
                <div className="size-12 lg:size-16 bg-red-400"></div>
                <div className="size-12 lg:size-16 bg-red-400"></div>
                <div className="size-12 lg:size-16 bg-red-400"></div>
                <div className="size-12 lg:size-16 bg-red-400"></div>
                <div className="size-12 lg:size-16 bg-red-400"></div>
                <div className="size-12 lg:size-16 bg-red-400"></div>
                <div className="size-12 lg:size-16 bg-red-400"></div>
                <div className="size-12 lg:size-16 bg-red-400"></div>
                <div className="size-12 lg:size-16 bg-red-400"></div>
              </div>
              {/* page header & intro */}

              <h1 className="font-serif text-4xl font-bold sm:col-start-2 self-end">
                Maarten Peene
              </h1>
              <p
                role="doc-subtitle"
                className="font-serif text-2xl sm:col-start-2"
              >
                <span>Creatieve</span> full-stack webdeveloper
              </p>
              <p className="sm:col-span-2 md:col-start-2 md:col-span-1">
                Ik geloof in een internet waar creativiteit en functionaliteit
                samenkomen. Als webontwikkelaar specialiseer ik me in het tot
                leven brengen van experimentele ideeën, waarbij ik je begeleid
                van concept naar boeiende online ervaringen.
              </p>
            </div>
          </header>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
