import type { Metadata } from "next";
import "@/styles/globals.css";
import { cn } from "@/lib/utils";

import { ThemeProvider } from "@/app/(site)/_layout/theme-provider";
import { Footer } from "@/app/(site)/_layout/footer";
import { NavBar } from "@/app/(site)/_layout/nav-bar";
import { Toaster } from "@/components/ui/toaster";
import { ReactLenis } from "@/lib/lenis";
import { Roboto_Slab, Roboto_Flex } from "next/font/google";

import { headers } from "next/headers";

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

export const dynamic = "force-dynamic";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const nonce = headers().get("x-nonce") ?? undefined;

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
        <ReactLenis root>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            themes={["basic", "light", "dark", "fun"]}
            nonce={nonce}
          >
            <NavBar />
            {children}
            <Footer />
            <Toaster />
          </ThemeProvider>
        </ReactLenis>
      </body>
    </html>
  );
}
