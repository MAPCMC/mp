import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Start nu | Maarten Peene",
};

export default function Page() {
  return (
    <>
      <header className="mb-4 flex w-full flex-col items-center space-y-2 px-6 pt-24 *:w-full *:md:max-w-[70%]">
        <h1 className="font-serif text-4xl font-bold">Start nu</h1>
      </header>
      <main className="flex w-full flex-col items-center space-y-2 px-6 *:w-full *:gap-x-2 *:md:max-w-[70%]">
        <article>
          <h2 className="font-serif text-3xl font-bold">Wat kan ik doen?</h2>
          <p>
            Bij de eerste stappen van een nieuw ontwikkelproces komt veel denk-
            en documentatiewerk kijken. Voordat je aan de bouw van een website
            begint, zijn er verschillende stappen die je zelf al kunt zetten.
            Voor het maken van een plan is het belangrijk om bepaalde informatie
            paraat te hebben. Stel jezelf de volgende vragen:
          </p>
          <ul>
            <li>Wat is het doel van de website?</li>
            <li>Wie is de doelgroep?</li>
            <li>Welke functionaliteiten zijn er nodig?</li>
            <li>Welke content moet er op de website komen?</li>
            <li>Wat is het budget?</li>
          </ul>
        </article>
      </main>
    </>
  );
}
