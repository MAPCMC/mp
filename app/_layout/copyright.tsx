"use client";

export function Copyright() {
  return (
    <p className="leading-8">
      © 2024{" "}
      {new Date().getFullYear() > 2024 ? `- ${new Date().getFullYear()}` : null}{" "}
      Itoko door Maarten Peene
    </p>
  );
}
