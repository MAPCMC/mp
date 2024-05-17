import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Development | Maarten Peene",
};

export default function Page() {
  return (
    <>
      <header className="mb-4 flex w-full flex-col items-center space-y-2 px-6 pt-24 *:w-full *:md:max-w-[70%]">
        <h1 className="self-end font-serif text-4xl font-bold sm:col-start-2">
          Development
        </h1>
      </header>
      <main className="flex w-full flex-col items-center space-y-2 px-6 *:w-full *:gap-x-2 *:md:max-w-[70%]">
        <section>
          <article>
            <h2 className="font-serif text-3xl font-bold">Stappen</h2>
            <ul>
              <li>Concept</li>
              <li>Ontwerp</li>
              <li>Ontwikkeling</li>
              <li>Testen</li>
              <li>Publicatie</li>
            </ul>
          </article>
        </section>
      </main>
    </>
  );
}
