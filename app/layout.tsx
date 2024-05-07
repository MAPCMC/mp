import type { Metadata } from "next";
import { Roboto_Slab, Roboto_Flex } from "next/font/google";
import "@/styles/globals.css";

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
    <html lang="nl" className={`${sans.variable} ${serif.variable}`}>
      <body>{children}</body>
    </html>
  );
}
