import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Start nu | Maarten Peene",
};

export default function Page() {
  return (
    <>
      <header className="w-full flex flex-col items-center *:w-full *:md:max-w-[70%] space-y-2 pt-24 px-6 mb-4">
        <h1 className="font-serif text-4xl font-bold">Start nu</h1>
      </header>
      <main className="w-full flex flex-col items-center px-6 *:w-full *:md:max-w-[70%] *:gap-x-2 space-y-2">
        <article>
          <h2 className="font-serif text-3xl font-bold">Wat kan ik doen?</h2>
          Voordat je aan de bouw van een website begint, zijn er verschillende
          stappen die je zelf al kunt zetten. Voor het maken van een plan is het
          belangrijk om bepaalde informatie paraat te hebben. Stel jezelf de
          volgende vragen:
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
