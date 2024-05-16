import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Advies | Maarten Peene",
};

export default function Page() {
  return (
    <>
      <header className="w-full flex flex-col items-center *:w-full *:md:max-w-[70%] space-y-2 pt-24 px-6 mb-4">
        <h1 className="font-serif text-4xl font-bold sm:col-start-2 self-end">
          Advies
        </h1>
      </header>
      <main className="w-full flex flex-col items-center px-6 *:w-full *:md:max-w-[70%] *:gap-x-2 space-y-2">
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
