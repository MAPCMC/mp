import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Advies | Maarten Peene",
};

export default function Page() {
  return (
    <>
      <header className="mb-4 flex w-full flex-col items-center space-y-2 px-6 pt-24 *:w-full *:md:max-w-[70%]">
        <h1 className="self-end font-serif text-4xl font-bold sm:col-start-2">
          Advies
        </h1>
      </header>
      <main className="flex w-full flex-col items-center space-y-2 px-6 *:w-full *:gap-x-2 *:md:max-w-[70%]">
        <section>
          <article>
            Wat is er nodig voor het bouwen van een site? Wat moet er gebeuren,
            wie moet ik inschakelen en hoeveel gaat dat geintje kosten? Ik help
            je graag met het beantwoorden van deze vragen.
          </article>
        </section>
      </main>
    </>
  );
}
