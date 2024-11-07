import type { Metadata } from "next";
import "@/styles/globals.css";
import { cn } from "@/lib/utils";

import { Providers } from "./_layout/providers";
import { Footer } from "@/app/(site)/_layout/footer";
import { NavBar } from "@/app/(site)/_layout/nav-bar";
import { Toaster } from "@/components/ui/toaster";

import { Roboto_Slab, Roboto_Flex } from "next/font/google";
import { Suspense } from "react";

const sans = Roboto_Flex({
  subsets: ["latin"],
  variable: "--font-roboto-flex",
  preload: false,
});

const serif = Roboto_Slab({
  subsets: ["latin"],
  variable: "--font-roboto-slab",
  preload: false,
});

export const metadata: Metadata = {
  title: "Maarten Peene",
  description: "Full-stack webdeveloper",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" suppressHydrationWarning>
      <body
        className={cn(
          "flex h-full min-h-screen w-full min-w-full max-w-full flex-col items-center",
          "bg-white text-slate-950",
          "basic:grid-basic basic:text-slate-950",
          "light:grid-light light:text-slate-950",
          "dark:grid-dark dark:text-slate-50",
          serif.variable,
          sans.variable,
          "font-sans font-light",
        )}
      >
        <Suspense fallback={null}>
          <Providers>
            <NavBar />
            {children}
            <Footer />
            <Toaster />
          </Providers>
        </Suspense>
      </body>
    </html>
  );
}
