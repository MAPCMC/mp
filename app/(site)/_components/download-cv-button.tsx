"use client";

import React from "react";
import { SimpleLink } from "@/components/links";

export function DownloadCVButton() {
  const [date, setDate] = React.useState("");
  React.useLayoutEffect(() => {
    setDate(
      new Date(Date.now()).toLocaleDateString("nl-NL", {
        year: "numeric",
        month: "numeric",
        day: "numeric",
      }),
    );
  }, []);
  return (
    <SimpleLink
      variant="download"
      className="mt-4 sm:col-start-2"
      href="/cv.pdf"
      download={`cv_maarten_peene_${date}`}
    >
      download mijn complete CV
    </SimpleLink>
  );
}
