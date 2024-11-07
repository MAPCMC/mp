import React from "react";

import { headers } from "next/headers";
import { ReactLenis } from "@/lib/lenis";
import { ThemeProvider } from "@/app/(site)/_layout/theme-provider";

export async function Providers({ children }: { children: React.ReactNode }) {
  const nonce = (await headers()).get("x-nonce") ?? undefined;

  return (
    <ReactLenis root>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
        themes={["basic", "light", "dark", "fun"]}
        nonce={nonce}
      >
        {children}
      </ThemeProvider>
    </ReactLenis>
  );
}
