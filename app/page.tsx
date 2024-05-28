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
      <header className="space-y-2 px-6 pt-24 *:w-full *:md:px-[15%]">
        <div className="grid gap-x-4 gap-y-2 sm:grid-cols-[auto_auto] md:grid-rows-[1fr_auto]">
          {/* logo puzzle */}
          <MemoryGame className=" flex flex-wrap-reverse gap-1 sm:col-start-1 sm:row-span-2 sm:inline-grid sm:grid-cols-[auto_auto_1fr] sm:grid-rows-[auto_auto_1fr]" />
          <hgroup className="self-end font-serif font-light">
            <h1 className="text-xl">
              <span className=" bg-white box-decoration-clone dark:bg-neutral-950">
                Maarten Peene
              </span>
            </h1>
            <p role="doc-subtitle" className="-mt-1 text-orange-700">
              <span className=" bg-white box-decoration-clone dark:bg-neutral-950">
                <AboutSpans /> full-stack webdeveloper
              </span>
            </p>
          </hgroup>

          <p className="w-full break-words font-serif text-3xl sm:text-5xl">
            Samen creëeren wij jouw unieke webplatform
          </p>
        </div>
      </header>
      <main className="space-y-2 px-6 pb-24 *:w-full *:gap-x-2 *:md:px-[15%]">
        <section
          className="grid gap-y-2 pt-6 sm:grid-cols-2 lg:grid-cols-6"
          aria-labelledby="s1"
        >
          <hgroup className="p-4 sm:col-span-2 lg:col-span-4 lg:px-0">
            <h2 id="s1" className="-mb-1 font-serif text-lg font-light">
              <span className=" bg-white box-decoration-clone dark:bg-neutral-950">
                Aanbod
              </span>
            </h2>
            <p role="subtitle" className="font-serif text-xl sm:text-3xl">
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
              We werken van een vernieuwend idee naar een succesvolle website of
              applicatie.
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
              Ik denk graag mee over de mogelijkheden, valkuilen en kansen van
              jouw concept.
            </CardContent>
            <CardFooter>
              <NavLink href="/advies">Naar advies</NavLink>
            </CardFooter>
          </Card>
          <Card
            as="article"
            className="bg-orange-500 dark:bg-orange-900 sm:col-span-2 lg:col-start-5 lg:row-span-4 lg:row-start-1"
            aria-labelledby="s1c3"
          >
            <CardHeader>
              <CardTitle id="s1c3">Freelance</CardTitle>
            </CardHeader>
            <CardContent className="grow lg:row-start-2">
              Jouw bedrijf heeft een interessant project dat vraagt om
              tijdelijke versterking. Met 6+ jaar ervaring in development lever
              ik een waardevolle bijdrage aan het team.
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
          <div className="p-4 sm:col-span-2 lg:flex lg:gap-x-6 lg:px-0 xl:col-span-4">
            <hgroup className="mb-1 w-full">
              <h2 id="s2" className="-mb-1 font-serif text-lg font-light">
                <span className=" bg-white box-decoration-clone dark:bg-neutral-950">
                  Werkwijze
                </span>
              </h2>
              <p
                id="s2b"
                role="subtitle"
                className="font-serif text-xl sm:text-3xl"
              >
                Persoonlijke aandacht
              </p>
            </hgroup>
            <p className="text-lg">
              <span className=" bg-white box-decoration-clone dark:bg-neutral-950">
                Jouw bedrijf levert maatwerk, dus je website doet dat ook. We
                maken een aantrekkelijk en innovatief platform dat boven het
                maaiveld uitsteekt. Hoe we daar komen? Stap voor stap neem ik je
                mee in het ontwikkeltraject.
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
          <hgroup className="p-3 sm:col-start-3 xl:col-span-2 xl:col-start-4">
            <h2 className="-mb-1 font-serif text-lg" id="s3">
              Kom in actie
            </h2>
            <p
              id="s3b"
              role="subtitle"
              className="font-serif text-xl sm:text-3xl"
            >
              Wat gaan we doen?
            </p>
          </hgroup>
          <Card
            as="article"
            aria-labelledby="s3c1"
            className="focus-within:bg-yellow-200  dark:focus-within:bg-yellow-700  sm:col-span-2 sm:col-start-1 sm:row-span-2 sm:row-start-1 xl:col-span-3"
          >
            <CardHeader>
              <CardTitle id="s3c1">Neem contact op</CardTitle>
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
              <CardTitle id="s3c2">Begin zelf</CardTitle>
            </CardHeader>
            <CardContent className="grow">
              Bij de eerste stappen van een nieuw ontwikkelproces komt veel
              denk- en documentatiewerk kijken. Bereid je voor op dit proces in
              je eigen tempo, zodat je daarna vliegend van start kan!
            </CardContent>
            <CardFooter>
              <NavLink href="/development/start-nu">Start nu</NavLink>
            </CardFooter>
          </Card>
          {/* <Card
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
          </Card> */}
        </section>
      </main>
      <Toaster />
    </>
  );
}
