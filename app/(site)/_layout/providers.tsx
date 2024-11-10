import React from "react";
import { ReactLenis } from "@/lib/lenis";
import { ThemeProvider } from "@/app/(site)/_layout/theme-provider";

export async function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis root>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
        themes={["basic", "light", "dark", "fun"]}
      >
        {children}
      </ThemeProvider>
    </ReactLenis>
  );
}
