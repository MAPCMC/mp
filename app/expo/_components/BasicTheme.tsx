"use client";

import React from "react";
import { useTheme } from "next-themes";

export function BasicTheme() {
  const { theme, setTheme } = useTheme();

  React.useEffect(() => {
    if (theme !== "basic") {
      setTheme("basic");
    }
  }, [theme, setTheme]);
  return null;
}
