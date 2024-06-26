import type { Metadata } from "next";
import { ProcessCards } from "@/app/development/_components/process-cards";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ContactForm } from "@/components/contact-form";
import { NavLink } from "@/components/links";
import { Toaster } from "@/components/ui/toaster";
import { AnchorMenu } from "@/components/anchor-menu";
import { PageHeader } from "@/components/page-header";
import { PageMain } from "@/components/page-main";

export const metadata: Metadata = {
  title: "Development | Maarten Peene",
};

export default function Page() {
  return (
    <>
      <PageHeader>
        <h1 className="font-serif text-4xl first-letter:capitalize">
          development
        </h1>
      </PageHeader>
      <AnchorMenu
        links={[
          { href: "#s1", text: "product" },
          { href: "#s2", text: "werkwijze" },
          { href: "#s3", text: "Kom in actie" },
        ]}
      />
      <PageMain>
        <section aria-labelledby="s1 s1b">
          <hgroup className="mb-1 w-full">
            <h2 id="s1" className="-mb-1 font-serif text-lg font-light">
              <span className=" box-decoration-clone light:bg-light basic:bg-basic dark:bg-dark">
                product
              </span>
            </h2>
            <p
              id="s1b"
              role="subtitle"
              className="font-serif text-xl sm:text-3xl"
            >
              Wat mag je verwachten?
            </p>
          </hgroup>
          <div>
            <h3>Maatwerk</h3>
            {/* jouw belangen, jouw inbreng, jij als gebruiker */}
            <h3>Gebruiksvriendelijk</h3>
            {/* mooi om naar te kijken, aandacht voor ux */}
            <h3>Toegankelijk</h3>
            {/* alle gebruikers, alle apparaten (responsive) */}
            <h3>Doelgericht</h3>
            {/* vanuit concept, SEO op orde */}
            <h3>Verzorgd</h3>
            {/* communicatie, mogelijkheid content creatie */}
          </div>
        </section>
        <section
          className="grid gap-y-2 sm:grid-cols-2 xl:grid-cols-4"
          aria-labelledby="s2 s2b"
        >
          <div className="sm:col-span-2 xl:col-span-4">
            <hgroup className="mb-1 w-full">
              <h2 id="s2" className="-mb-1 font-serif text-lg font-light">
                <span className=" box-decoration-clone light:bg-light basic:bg-basic dark:bg-dark">
                  werkwijze
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
              <span className=" box-decoration-clone light:bg-light basic:bg-basic dark:bg-dark">
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
        <section aria-labelledby="s3" className="gap-12 sm:grid sm:grid-cols-2">
          <hgroup className="col-span-2">
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
          <Card as="article" aria-labelledby="s3c1">
            <CardHeader>
              <CardTitle id="s3c1">Offerte aanvragen</CardTitle>
            </CardHeader>
            <CardContent>
              {/* TODO details opdracht */}
              <ContactForm />
            </CardContent>
          </Card>
          <Card as="article" aria-labelledby="s3c2">
            <CardHeader>
              <CardTitle id="s3c2">Begin zelf</CardTitle>
            </CardHeader>
            <CardContent className="grow">
              Bereid je voor op het ontwikkelproces in je eigen tempo, zodat je
              daarna vliegend van start kan!
            </CardContent>
            <CardFooter>
              <NavLink href="/development/start-nu" variant="button">
                Start nu
              </NavLink>
            </CardFooter>
          </Card>
        </section>
      </PageMain>
      <Toaster />
    </>
  );
}
