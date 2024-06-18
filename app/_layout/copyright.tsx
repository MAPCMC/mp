"use client";

export function Copyright() {
  return (
    <p>
      © 2024{" "}
      {new Date().getFullYear() > 2024 ? `- ${new Date().getFullYear()}` : null}{" "}
      Itoko door Maarten Peene
    </p>
  );
}
