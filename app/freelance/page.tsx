import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Freelance | Maarten Peene",
};

export default function Page() {
  return (
    <>
      <header className="mb-4 flex w-full flex-col items-center space-y-2 px-6 pt-24 *:w-full *:md:max-w-[70%]">
        <h1 className="self-end font-serif text-4xl font-bold sm:col-start-2">
          Freelance
        </h1>
      </header>
      <main className="flex w-full flex-col items-center space-y-2 px-6 *:w-full *:gap-x-2 *:md:max-w-[70%]">
        <section>
          <article>
            Dikke klus en niemand paraat? Als freelance developer help ik graag
            een handje mee. Voor meer over mijn werkervaring, bekijk mijn{" "}
            <a href="/cv">CV</a>.
          </article>
        </section>
      </main>
    </>
  );
}
