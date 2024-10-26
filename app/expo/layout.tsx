import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import { Roboto_Slab, Roboto_Flex } from "next/font/google";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "EXPO | Maarten Peene",
  description: "Exposeer mijn werk bij de Nijverheid",
};

const sans = Roboto_Flex({
  weight: ["300", "400", "600", "700"],
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
    <html lang="nl" suppressHydrationWarning>
      <body
        className={cn(
          "flex h-full min-h-screen w-full min-w-full max-w-full flex-col items-center justify-center",
          "bg-orange-500 text-white",
          serif.variable,
          sans.variable,
          "font-sans font-light",
        )}
      >
        {children}
      </body>
    </html>
  );
}
