import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Freelance | Maarten Peene",
};

export default function Page() {
  return (
    <>
      <header className="w-full flex flex-col items-center *:w-full *:md:max-w-[70%] space-y-2 pt-24 px-6 mb-4">
        <h1 className="font-serif text-4xl font-bold sm:col-start-2 self-end">
          Freelance
        </h1>
      </header>
      <main className="w-full flex flex-col items-center px-6 *:w-full *:md:max-w-[70%] *:gap-x-2 space-y-2">
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
