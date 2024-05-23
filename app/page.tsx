import type { Metadata } from "next";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MemoryGame } from "@/components/memory-game";
import { ProcessCards } from "@/components/process-cards";
import { ContactForm } from "@/components/contact-form";
import { AboutSpans } from "@/components/about-spans";
import { Toaster } from "@/components/ui/toaster";
import { NavLink } from "@/components/nav-link";

export const metadata: Metadata = {
  title: "Home | Maarten Peene",
  description: "Full-stack webdeveloper",
};

export default function Home() {
  return (
    <>
      <header className="flex w-full flex-col items-center space-y-2 px-6 pt-24 *:w-full *:md:max-w-[70%]">
        <div className="grid gap-3 sm:grid-cols-[auto_1fr] sm:gap-y-2 md:grid-rows-[1fr_auto]">
          {/* logo puzzle */}
          <MemoryGame className="flex flex-wrap-reverse gap-1 sm:inline-grid sm:grid-cols-[auto_auto_1fr] sm:grid-rows-[auto_auto_1fr] md:row-span-2" />
          {/* page header & intro */}
          <hgroup className="self-end font-serif text-2xl sm:col-start-2">
            <h1 className=" font-serif text-4xl font-bold">Maarten Peene</h1>
            <p role="doc-subtitle">
              <AboutSpans />
              <span>full-stack webdeveloper</span>
            </p>
          </hgroup>
          <p className="text-lg sm:col-span-2 md:col-span-1 md:col-start-2">
            <span className=" bg-white box-decoration-clone dark:bg-neutral-950">
              Ik geloof in een internet waar creativiteit en functionaliteit
              samenkomen. Als webontwikkelaar breng ik experimentele ideeën tot
              leven; van concept tot unieke online ervaring.
            </span>
          </p>
        </div>
      </header>
      <main className="flex w-full flex-col items-center space-y-2 px-6 pb-24 *:w-full *:gap-x-2 *:md:max-w-[70%]">
        <section
          className="grid gap-y-2 pt-6 sm:grid-cols-2 lg:grid-cols-5"
          aria-labelledby="s1"
        >
          <hgroup className="row-span-3 px-4 sm:col-span-2 lg:col-span-1 lg:px-0">
            <h2 id="s1" className="font-serif text-3xl font-bold">
              Aanbod
            </h2>
            <p role="subtitle" className="font-serif text-lg">
              Wat kan ik voor je betekenen?
            </p>
          </hgroup>
          <Card
            as="article"
            className="row-span-3 grid grid-rows-subgrid lg:col-span-2"
            aria-labelledby="s1c1"
          >
            <CardHeader>
              <CardTitle id="s1c1">Websites & applicaties</CardTitle>
            </CardHeader>
            <CardContent>
              Ik wil samen aan de slag om van mijn idee een werkende website of
              applicatie te maken.
            </CardContent>
            <CardFooter>
              <NavLink href="/development">Meer over development</NavLink>
            </CardFooter>
          </Card>
          <Card
            as="article"
            className="row-span-3 grid grid-rows-subgrid lg:col-span-2"
            aria-labelledby="s1c2"
          >
            <CardHeader>
              <CardTitle id="s1c2">Advies</CardTitle>
            </CardHeader>
            <CardContent>
              Ik weet niet waar ik moet beginnen. Wil je meedenken?
            </CardContent>
            <CardFooter>
              <NavLink href="/advies">Naar advies</NavLink>
            </CardFooter>
          </Card>
          <Card
            as="article"
            className="grid bg-orange-500 dark:bg-orange-900 sm:col-span-2 lg:col-span-5 lg:grid-cols-[1fr_auto]"
            aria-labelledby="s1c3"
          >
            <CardHeader>
              <CardTitle id="s1c3">Freelance</CardTitle>
            </CardHeader>
            <CardContent className="lg:row-start-2">
              We hebben een interessant project en/of zoeken een tijdelijke
              vaste kracht. Kom jij ons team versterken?
            </CardContent>
            <CardFooter className="lg:row-span-2 lg:pb-0">
              <NavLink href="/freelance">Bekijk de mogelijkheden</NavLink>
            </CardFooter>
          </Card>
        </section>
        <section
          className="grid gap-y-2 sm:grid-cols-2 xl:grid-cols-4"
          aria-labelledby="s2 s2b"
        >
          <div className="px-4 pb-3 pt-4 sm:col-span-2 lg:flex lg:gap-x-6 lg:px-0 xl:col-span-4">
            <hgroup className="w-full">
              <h2 id="s2" className="font-serif text-lg">
                Werkwijze
              </h2>
              <p
                id="s2b"
                role="subtitle"
                className="font-serif text-3xl font-bold"
              >
                Persoonlijke aandacht
              </p>
            </hgroup>
            <p className="text-lg">
              <span className=" bg-white box-decoration-clone dark:bg-neutral-950">
                We gaan iets moois en innovatiefs maken, zodat jullie boven het
                maaiveld uitsteken. Staat er al een visie op papier of bestaat
                ie nog uit flarden? Geen zorgen, ik neem jullie mee in het
                ontwikkeltraject.
              </span>
            </p>
          </div>
          <div className="sm:col-span-2 xl:col-span-4">
            <ProcessCards />
          </div>
        </section>
        <section
          className="grid gap-y-2 sm:grid-cols-3 xl:grid-cols-5"
          aria-labelledby="s3"
        >
          <h2
            className="p-3 font-serif text-4xl font-bold sm:col-start-3 xl:col-span-2 xl:col-start-4"
            id="s3"
          >
            Wat gaan we doen?
          </h2>
          <Card
            as="article"
            aria-labelledby="s3c1"
            className="focus-within:bg-yellow-200  dark:focus-within:bg-yellow-700  sm:col-span-2 sm:col-start-1 sm:row-span-2 sm:row-start-1 xl:col-span-3"
          >
            <CardHeader>
              <CardTitle id="s3c1">Ik wil praten</CardTitle>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>
          <Card
            as="article"
            aria-labelledby="s3c2"
            className="sm:col-start-3 xl:col-span-2 xl:col-start-4"
          >
            <CardHeader>
              <CardTitle id="s3c2">Ik wil beginnen</CardTitle>
            </CardHeader>
            <CardContent>Zet de eerste stappen</CardContent>
            <CardFooter>
              <NavLink href="/development/start-nu">go go go</NavLink>
            </CardFooter>
          </Card>
          <Card
            as="article"
            aria-labelledby="s3c3"
            className="sm:col-span-3 xl:col-span-5"
          >
            <CardHeader>
              <CardTitle id="s3c3">Ik wil meer feiten</CardTitle>
            </CardHeader>
            <CardContent>
              Met wie heb je te maken? Bekijk mijn ervaring en portfolio.
            </CardContent>
          </Card>
        </section>
      </main>
      <Toaster />
    </>
  );
}
