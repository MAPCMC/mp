import type { Metadata } from "next";
import { ProcessCards } from "@/components/process-cards";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ContactForm } from "@/components/contact-form";
import { NavLink } from "@/components/nav-link";
import { Toaster } from "@/components/ui/toaster";

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
            <h2 className="-mb-1 font-serif text-lg font-light" id="s3">
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
              Bereid je voor op het ontwikkelproces in je eigen tempo, zodat je
              daarna vliegend van start kan!
            </CardContent>
            <CardFooter>
              <NavLink href="/development/start-nu">Start nu</NavLink>
            </CardFooter>
          </Card>
        </section>
      </main>
      <Toaster />
    </>
  );
}
