"use client";

import React from "react";

export function Copyright() {
  const [year, setYear] = React.useState<string | null>(null);
  React.useLayoutEffect(() => {
    setYear(
      new Date().getFullYear() > 2024 ? ` - ${new Date().getFullYear()}` : null,
    );
  }, []);
  return <p className="leading-8">© 2024 {year} Itoko door Maarten Peene</p>;
}
