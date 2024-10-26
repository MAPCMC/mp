import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import { Roboto_Slab, Roboto_Flex } from "next/font/google";
import "@/styles/globals.css";
import { ThemeProvider } from "@/app/(site)/_layout/theme-provider";
import { BasicTheme } from "./_components/BasicTheme";

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
    <html lang="nl" suppressHydrationWarning>
      <body
        className={cn(
          "grid-basic flex h-full min-h-screen w-full min-w-full max-w-full flex-col font-sans font-light",
          serif.variable,
          sans.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="basic"
          disableTransitionOnChange
          themes={["basic"]}
        >
          <BasicTheme />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
