import type { Metadata } from "next";
import "@/styles/globals.css";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "EXPO | Maarten Peene",
  description: "Exposeer mijn werk bij de Nijverheid",
};

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
        )}
      >
        {children}
      </body>
    </html>
  );
}
