import React from "react";

import { ThemeProvider } from "@/app/(site)/_layout/theme-provider";

export async function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      themes={["basic", "light", "dark", "fun"]}
    >
      {children}
    </ThemeProvider>
  );
}
