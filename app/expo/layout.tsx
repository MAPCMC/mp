import { Suspense } from "react";
import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import { Roboto_Slab, Roboto_Flex } from "next/font/google";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "EXPO | Maarten Peene",
  description: "Exposeer een memory spelletje bij de Nijverheid",
};

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl" suppressHydrationWarning className="basic">
      <body
        className={cn(
          "grid-basic flex h-full min-h-screen w-full min-w-full max-w-full flex-col font-sans font-light",
          serif.variable,
          sans.variable,
        )}
      >
        <Suspense fallback={null}>{children}</Suspense>
      </body>
    </html>
  );
}
