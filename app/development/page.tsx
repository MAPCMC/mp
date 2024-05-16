import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Development | Maarten Peene",
};

export default function Page() {
  return (
    <>
      <header className="w-full flex flex-col items-center *:w-full *:md:max-w-[70%] space-y-2 pt-24 px-6 mb-4">
        <h1 className="font-serif text-4xl font-bold sm:col-start-2 self-end">
          Development
        </h1>
      </header>
      <main className="w-full flex flex-col items-center px-6 *:w-full *:md:max-w-[70%] *:gap-x-2 space-y-2">
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
