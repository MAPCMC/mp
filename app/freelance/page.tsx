import type { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AnchorMenu } from "@/components/anchor-menu";
import { PageHeader } from "@/components/page-header";
import { PageMain } from "@/components/page-main";
import { SimpleLink, NavLink } from "@/components/links";
import { JobOfferForm } from "@/app/freelance/_components/job-offer-form";
import { Heart, Library, Lightbulb, Terminal, Users } from "lucide-react";
import { CardGroup } from "@/components/card-group";

export const metadata: Metadata = {
  title: "Freelance | Maarten Peene",
};

export default function Page() {
  return (
    <>
      <PageHeader>
        <h1 className="font-serif text-4xl first-letter:capitalize">
          freelance
        </h1>
        <div className="prose prose-sm prose-slate mt-10 max-w-[90ch] text-inherit dark:prose-invert md:prose-base prose-headings:font-serif prose-headings:font-normal prose-h2:text-3xl prose-h3:text-2xl prose-lead:text-base prose-lead:text-inherit prose-lead:md:text-lg">
          <p className="lead">
            Heb je een dikke klus en niemand paraat? Ik help graag een handje
            mee. Iemand nodig die vaart bij complexe probleemstellingen,
            aanwezig is op de vloer en oog heeft voor de mensen met wie hij
            werkt? Laten we kennismaken!
          </p>
          <p>
            Ik heb ruime ervaring met het ontwikkelen van gepersonaliseerde
            informatieplatformen voor overheidsinstanties en de zorg. Voor meer
            over mijn werkervaring, bekijk mijn cv.
          </p>
          <p>
            <SimpleLink
              variant="download"
              className="block no-underline"
              href="/cv.pdf"
              download={`cv_maarten_peene_${new Date(Date.now()).toLocaleDateString("nl-NL", { year: "numeric", month: "numeric", day: "numeric" })}`}
            >
              Download mijn complete CV
            </SimpleLink>
          </p>
        </div>
      </PageHeader>
      <AnchorMenu
        links={[
          { href: "#kwaliteiten", text: "kwaliteiten" },
          { href: "#profiel", text: "functieprofiel" },
          { href: "#contact", text: "contact" },
        ]}
      />
      <PageMain className="mt-10">
        <section aria-labelledby="kwaliteiten kwaliteitenb">
          <hgroup className="mb-5 w-full">
            <h2
              id="kwaliteiten"
              className="-mb-1 font-serif text-lg font-light"
            >
              <span className="box-decoration-clone light:bg-light basic:bg-basic dark:bg-dark">
                Kwaliteiten
              </span>
            </h2>
            <p
              id="kwaliteitenb"
              role="subtitle"
              className="font-serif text-xl sm:text-3xl"
            >
              Wat breng ik mee naar de werkvloer?
            </p>
          </hgroup>
          <CardGroup
            as="ul"
            className="grid light:gap-4 basic:gap-6 dark:gap-3 lg:grid-cols-3 light:xl:gap-y-6"
          >
            <Card as="li">
              <CardHeader>
                <Library
                  width={52}
                  height={52}
                  strokeWidth={1.25}
                  className="origin-bottom-left scale-75 light:text-orange-400 dark:text-orange-200 md:scale-100"
                />
                <CardTitle>Vakkennis</CardTitle>
              </CardHeader>
              <CardContent>
                Ik lees alles, van documentatie tot veiligheidsprotocol, en ik
                probeer uit wat ik niet ken. Coderen is mijn passie. Ik leer
                constant van dit werk, en zoek altijd naar manieren om mijn
                vaardigheden uit te breiden. De opgedane kennis en ervaring neem
                ik mee.
              </CardContent>
            </Card>
            <Card as="li">
              <CardHeader>
                <Heart
                  width={52}
                  height={52}
                  strokeWidth={1.25}
                  className="origin-bottom-left scale-75 light:text-orange-400 dark:text-orange-200 md:scale-100"
                />
                <CardTitle>Collegialiteit</CardTitle>
              </CardHeader>
              <CardContent>
                Een geslaagde werkdag valt of staat voor mij met een goede
                sfeer. Ik geloof heilig in de kracht van respectvolle
                communicatie en werk vanuit begrip en vertrouwen; of we het nu
                hebbben over collega&apos;s, klanten of stakeholders.
              </CardContent>
            </Card>
            <Card as="li">
              <CardHeader>
                <Lightbulb
                  width={52}
                  height={52}
                  strokeWidth={1.25}
                  className="origin-bottom-left scale-75 light:text-orange-400 dark:text-orange-200 md:scale-100"
                />
                <CardTitle>Een frisse blik</CardTitle>
              </CardHeader>
              <CardContent>
                Ik ben een talige zij-instromer die houdt van puzzelen, mensen
                en mooie dingen; ik benader ontwikkelvraagstukken vaak anders
                dan de mensen om mij heen. Op zoek naar een nieuwe impuls?
                Vanuit mijn brede achtergrond vorm ik een aanvulling op het
                team.
              </CardContent>
            </Card>
          </CardGroup>
        </section>
        <section>
          <hgroup className="light:mb-4 basic:mb-6 dark:mb-3 light:xl:mb-6">
            <h2 id="profiel" className="-mb-1 font-serif text-lg font-light">
              <span className="box-decoration-clone light:bg-light basic:bg-basic dark:bg-dark">
                Functieprofiel
              </span>
            </h2>
            <p
              id="profielsub"
              role="subtitle"
              className="font-serif text-xl sm:text-3xl"
            >
              Hoe kan je mij inzetten?
            </p>
          </hgroup>
          <CardGroup className="grid light:gap-4 basic:gap-6 dark:gap-3 lg:grid-cols-2 light:xl:gap-y-6">
            <Card as="article">
              <CardHeader>
                <Terminal
                  width={52}
                  height={52}
                  strokeWidth={1.25}
                  className="origin-bottom-left scale-75 light:text-orange-400 dark:text-orange-200 md:scale-100"
                />
                <CardTitle>Code</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Ik werk graag mee aan jullie software. Of we nou beginnen met
                  legacy code of rond een lege tafel. Wat ik zoek is de
                  aansluiting bij een groter team waarmee ik de uitdaging van
                  grote projecten aan kan gaan.
                </p>
                <p>Functieomschrijvingen in mijn straatje zijn:</p>
                <ul>
                  <li>
                    Front-end of full-stack Javascript/Typescript developer
                  </li>
                  <li>Frameworks o.a. React, Vue, Next.JS of Node.JS</li>
                  <li>voor 24-32 uur per week</li>
                  <li>Mid of senior level</li>
                  <li>Rondom Utrecht (of goed bereikbaar)</li>
                  <li>Voertaal Nederlands of Engels</li>
                </ul>
              </CardContent>
            </Card>
            <Card as="article">
              <CardHeader>
                <Users
                  width={52}
                  height={52}
                  strokeWidth={1.25}
                  className="origin-bottom-left scale-75 light:text-orange-400 dark:text-orange-200 md:scale-100"
                />
                <CardTitle>No code</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Op zoek naar iemand die vanuit technische onderlegging de kar
                  kan trekken? Je maakt mij bijna niet blijer dan met een
                  chaotisch kanbanbord waaraan ik structuur en inhoud mag geven.
                  Ik bewaar het overzicht, spreek de stakeholders en ondersteun
                  het team.
                </p>
                <p>Neem contact op wanneer je zoekt naar:</p>
                <ul>
                  <li>een team lead, projectbeheerder of product owner</li>
                  <li>voor maximaal 28 uur per week</li>
                  <li>Hybride of op kantoor</li>
                  <li>Rondom Utrecht (of goed bereikbaar)</li>
                  <li>Voertaal Nederlands of Engels</li>
                </ul>
              </CardContent>
            </Card>
          </CardGroup>
        </section>
        <section
          aria-labelledby="contact"
          className="grid light:gap-4 basic:gap-6 dark:gap-3 lg:grid-cols-3"
        >
          <hgroup className="lg:col-span-3">
            <h2 className="-mb-1 font-serif text-lg font-light" id="contact">
              Contact
            </h2>
            <p
              id="actionsub"
              role="subtitle"
              className="font-serif text-xl sm:text-3xl"
            >
              Tijd voor koffie!
            </p>
          </hgroup>
          <div className="prose prose-sm prose-slate max-w-[90ch] text-inherit dark:prose-invert md:prose-base prose-headings:font-serif prose-headings:font-normal prose-h2:text-3xl prose-h3:text-2xl prose-lead:text-base prose-lead:text-inherit prose-lead:md:text-lg lg:col-span-3">
            <p className="lead ">
              Ben je geïnteresseerd in een samenwerking maar heb je geen positie
              op dit moment,{" "}
              <NavLink
                href="https://www.linkedin.com/in/maarten-peene-432635146/"
                target="_blank"
              >
                stuur mij een uitnodiging via LinkedIn.
              </NavLink>{" "}
              Benieuwd wat ik op dit moment voor je kan betekenen? Gebruik het
              formulier en ik kom bij je terug.
            </p>
          </div>
          <CardGroup className="lg:col-span-2">
            <Card as="article" aria-labelledby="availability">
              <CardHeader>
                <CardTitle id="availability">
                  Vraag naar mijn beschikbaarheid
                </CardTitle>
              </CardHeader>
              <CardContent>
                <JobOfferForm />
              </CardContent>
            </Card>
          </CardGroup>
        </section>
      </PageMain>
    </>
  );
}
