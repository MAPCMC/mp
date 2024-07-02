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
import {
  Sparkles,
  Goal,
  MonitorSmartphone,
  PencilRuler,
  PenLine,
  Smile,
} from "lucide-react";

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
          { href: "#product", text: "product" },
          { href: "#how", text: "werkwijze" },
          { href: "#action", text: "Kom in actie" },
        ]}
      />
      <PageMain className="mt-10">
        <section aria-labelledby="product productsub">
          <hgroup className="mb-1">
            <h2
              id="product"
              className="-mb-1 font-serif text-lg font-light dark:text-slate-300"
            >
              <span className=" box-decoration-clone light:bg-light basic:bg-basic dark:bg-dark">
                product
              </span>
            </h2>
            <p
              id="productsub"
              role="subtitle"
              className="font-serif text-xl sm:text-3xl"
            >
              Wat mag je verwachten?
            </p>
          </hgroup>
          <p className="mb-5 text-lg">
            <span className="box-decoration-clone light:bg-light basic:bg-basic dark:bg-dark">
              Iedere developer heeft een eigen stijl; dit zie je terug in de
              producten die ze leveren. Mijn aandacht gaat uit naar het maken
              van websites en applicaties die je écht gebruiken wilt. Voor zowel
              bezoekers als beheerders zet ik in op een plezierige ervaring.
            </span>
          </p>
          <ul className="grid light:gap-4 basic:gap-6 dark:gap-3 sm:grid-cols-2 xl:grid-cols-3 light:xl:gap-y-6">
            <Card as="li">
              <CardHeader>
                <PencilRuler
                  width={52}
                  height={52}
                  strokeWidth={1.25}
                  className="origin-bottom-left scale-75 light:text-orange-400 dark:text-orange-200 md:scale-100"
                />
                <CardTitle>Maatwerk</CardTitle>
              </CardHeader>
              <CardContent>
                Opvallen online doe je met een eigen verhaal; ik wil jouw
                perspectief uitdragen. Samen onderzoeken we wat jouw website of
                webapplicatie uniek maakt, en dat vertaal ik in code.
              </CardContent>
            </Card>
            <Card as="li">
              <CardHeader className="items-start">
                <Smile
                  width={52}
                  height={52}
                  strokeWidth={1.25}
                  className="origin-bottom-left scale-75 light:text-orange-400 dark:text-orange-200 md:scale-100"
                />
                <CardTitle>Gebruiksvriendelijk</CardTitle>
              </CardHeader>
              <CardContent>
                Ik ben de meest kritische eindgebruiker van iedere site die ik
                maak. Ben ik niet onder de indruk, dan valt er werk te
                verzetten. Zo zorg ik dat jij en je bezoekers nergens tegenaan
                lopen.
              </CardContent>
            </Card>
            <Card as="li">
              <CardHeader>
                <MonitorSmartphone
                  width={52}
                  height={52}
                  strokeWidth={1.25}
                  className="origin-bottom-left scale-75 light:text-orange-400 dark:text-orange-200 md:scale-100"
                />
                <CardTitle>Toegankelijk</CardTitle>
              </CardHeader>
              <CardContent>
                Ben je hier via je telefoon of je computer? Het maakt mij niet
                uit, de vormgeving staat. En of je nou gebruik maakt van een
                muis, een toetsenbord of een screenreader - ik zorg dat je je
                weg kunt vinden.
              </CardContent>
            </Card>
            <Card as="li">
              <CardHeader>
                <Goal
                  width={52}
                  height={52}
                  strokeWidth={1.25}
                  className="origin-bottom-left scale-75 light:text-orange-400 dark:text-orange-200 md:scale-100"
                />
                <CardTitle>Doelgericht</CardTitle>
              </CardHeader>
              <CardContent>
                Zelf kan ik eindeloos genieten van een mooie site, maar jij en
                je bezoekers zien een middel tot een doel. Of het nu gaat om
                vindbaarheid, veiligheid of snelheid - als gereedschap doet je
                site wat het moet doen.
              </CardContent>
            </Card>
            <Card as="li">
              <CardHeader>
                <PenLine
                  width={52}
                  height={52}
                  strokeWidth={1.25}
                  className="origin-bottom-left scale-75 light:text-orange-400 dark:text-orange-200 md:scale-100"
                />
                <CardTitle>Beheerbaar</CardTitle>
              </CardHeader>
              <CardContent>
                Je site is af, en nu? Ik zorg dat je aan de slag kunt met de
                content. Samen maken we de balans op tussen flexibiliteit en
                gebruiksgemak: jij bepaalt wat je zelf wilt doen en waar je hulp
                bij nodig hebt.
              </CardContent>
            </Card>
            <Card as="li">
              <CardHeader>
                <Sparkles
                  width={52}
                  height={52}
                  strokeWidth={1.25}
                  className="origin-bottom-left scale-75 light:text-orange-400 dark:text-orange-200 md:scale-100"
                />
                <CardTitle>Verzorgd</CardTitle>
              </CardHeader>
              <CardContent>
                Of het nu gaat om de code, de vormgeving of de content - ik vind
                het belangrijk dat je met vertrouwen je site de wereld in
                stuurt. Wat is er voor nodig om hier te komen? Weet dat ik graag
                meedenk en met je de details in wil duiken.
              </CardContent>
            </Card>
          </ul>
        </section>
        <section aria-labelledby="how howsub">
          <hgroup className="mb-1">
            <h2
              id="how"
              className="-mb-1 font-serif text-lg font-light dark:text-slate-300"
            >
              <span className=" box-decoration-clone light:bg-light basic:bg-basic dark:bg-dark">
                werkwijze
              </span>
            </h2>
            <p
              id="howsub"
              role="subtitle"
              className="font-serif text-xl sm:text-3xl"
            >
              Persoonlijke aandacht
            </p>
          </hgroup>
          <p className="mb-5 text-lg">
            <span className="box-decoration-clone light:bg-light basic:bg-basic dark:bg-dark">
              Het doel is een aantrekkelijke nieuwe site of app die boven het
              maaiveld uitsteekt. Hoe we daar komen? Ik neem je mee in het
              ontwikkeltraject.
            </span>
          </p>
          <ProcessCards />
        </section>
        <section
          aria-labelledby="action"
          className="light:gap-4 basic:gap-6 dark:gap-3 sm:grid sm:grid-cols-2"
        >
          <hgroup className="col-span-2">
            <h2
              className="-mb-1 font-serif text-lg font-light dark:text-slate-300"
              id="action"
            >
              Kom in actie
            </h2>
            <p
              id="actionsub"
              role="subtitle"
              className="font-serif text-xl sm:text-3xl"
            >
              Wat gaan we doen?
            </p>
          </hgroup>
          <Card as="article" aria-labelledby="quotation">
            <CardHeader>
              <CardTitle id="quotation">Offerte aanvragen</CardTitle>
            </CardHeader>
            <CardContent>
              {/* TODO details opdracht */}
              <ContactForm />
            </CardContent>
          </Card>
          <Card as="article" aria-labelledby="plan">
            <CardHeader>
              <CardTitle id="plan">Begin zelf</CardTitle>
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
