import type { Metadata } from "next";
import "@/styles/globals.css";
import { cn } from "@/lib/utils";
import { Roboto_Slab, Roboto_Flex } from "next/font/google";
import { ThemeProvider } from "@/app/_layout/theme-provider";
import { Footer } from "@/app/_layout/footer";
import { NavBar } from "@/app/_layout/nav-bar";

// TODO - delete when https://github.com/radix-ui/primitives/pull/2811 gets merged
import "./_suppressRefWarning";

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
          <NavBar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
