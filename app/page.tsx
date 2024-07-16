import type { Metadata } from "next";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MemoryGame } from "@/app/_components/memory-game";
import { AboutSpans } from "@/app/_components/about-spans";
import { NavLink, SimpleLink } from "@/components/links";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { AnchorMenu } from "@/components/anchor-menu";
import { PageHeader } from "@/components/page-header";
import { PageMain } from "@/components/page-main";

export const metadata: Metadata = {
  title: "Home | Maarten Peene",
  description: "Full-stack webdeveloper",
};

export default function Home() {
  return (
    <>
      <PageHeader>
        <div className="grid gap-x-4 gap-y-2 sm:grid-cols-[auto_auto] md:grid-rows-[1fr_auto]">
          {/* logo puzzle */}
          <MemoryGame className="flex flex-wrap-reverse gap-1.5 sm:col-start-1 sm:row-span-2 sm:inline-grid sm:grid-cols-[1fr_auto_auto] sm:grid-rows-[1fr_auto_auto] lg:gap-2" />
          <hgroup className="self-end font-serif font-light">
            <h1 className="text-xl">
              <span className="box-decoration-clone light:bg-light basic:bg-basic dark:bg-dark">
                Maarten Peene
              </span>
            </h1>
            <p role="doc-subtitle" className="-mt-1 text-amber-600">
              <span className="box-decoration-clone light:bg-light basic:bg-basic dark:bg-dark">
                <AboutSpans /> full-stack webdeveloper
              </span>
            </p>
          </hgroup>

          <p className="w-full break-words font-serif text-3xl sm:text-4xl lg:text-5xl">
            Samen bouwen we uitzonderlijke websites
          </p>
          <div className="mt-4 inline-flex flex-wrap items-center gap-3 sm:col-start-2">
            <NavLink href="/development#quotation" variant="button">
              stuur mij je idee!
            </NavLink>
            <NavLink href="/freelance#availability" variant="secondary">
              of huur mij in
            </NavLink>
          </div>
        </div>
      </PageHeader>
      <AnchorMenu
        links={[
          { text: "Over mij", href: "#about" },
          { text: "Aanbod", href: "#offers" },
          { text: "Ervaring", href: "#cv" },
        ]}
      />
      <PageMain className="mt-12">
        {/* over mij */}
        <section className="space-y-2 sm:w-3/4" aria-labelledby="about">
          <hgroup className="mb-3">
            <h2
              id="about"
              className="-mb-1 font-serif text-lg font-light dark:text-slate-300"
            >
              Over mij
            </h2>
            <p role="subtitle" className="font-serif text-xl sm:text-3xl">
              Hallo, leuk je te ontmoeten!
            </p>
          </hgroup>
          <p>
            Ik ben developer omdat ik iets concreets wil maken waarmee ik
            anderen kan helpen. De afgelopen zeven jaar heb ik mogen werken aan
            grote informatieve platformen voor de overheid en de zorg.
          </p>
          <p>
            Gewapend met creativiteit en technische kennis werk ik nu aan
            kleinere, dynamische opdrachten. Achter de schermen bouw ik aan
            ondersteunende software voor vakmensen op het web.
          </p>
          <p>
            Eindgebruikers, opdrachtgevers en ontwikkelaars komen op het
            internet met een doel: we zoeken toegevoegde waarde. Met een passie
            voor maatwerk, samenwerking, taal en ontwerp draag ik mijn steentje
            bij.
          </p>
          <p>
            Naast development houd ik van koken, klussen en kamperen. Je vindt
            mij in Utrecht, waar ik woon met mijn vriendin en onze kat Toos.
          </p>
        </section>
        {/* aanbod */}
        <section
          className={cn(
            "grid gap-x-4 gap-y-3",
            "light:sm:grid-cols-2",
            "dark:sm:grid-cols-2",
            "basic:-mx-6 basic:border-y basic:border-basic-grid basic:bg-white basic:px-6 basic:py-16",
            "basic:sm:grid-cols-[1fr_auto_1fr] basic:md:border-none basic:md:bg-inherit basic:md:py-0 basic:md:pr-8 basic:lg:pr-6",
          )}
          aria-labelledby="offers"
        >
          <hgroup className="col-span-full mb-3">
            <h2 id="offers" className="-mb-1 font-serif text-lg font-light">
              <span className="box-decoration-clone light:bg-light dark:bg-dark dark:text-slate-300 md:basic:bg-basic">
                Aanbod
              </span>
            </h2>
            <p role="subtitle" className="font-serif text-xl sm:text-3xl">
              Wat kan ik voor je betekenen?
            </p>
          </hgroup>
          <Card
            as="article"
            className="row-span-3 grid grid-rows-subgrid"
            aria-labelledby="offersdev"
          >
            <CardHeader>
              <CardTitle id="offersdev">Websites & applicaties</CardTitle>
            </CardHeader>
            <CardContent>
              We werken van een vernieuwend idee naar een succesvolle website of
              applicatie.
            </CardContent>
            <CardFooter>
              <NavLink href="/development" variant="button">
                Meer over development
              </NavLink>
            </CardFooter>
          </Card>
          <Separator
            orientation="horizontal"
            className="hidden basic:my-4 basic:block basic:sm:hidden "
            decorative
          />
          <Separator
            orientation="vertical"
            className="hidden basic:mx-2 basic:sm:row-span-3 basic:sm:block"
            decorative
          />
          <Card
            as="article"
            className="row-span-3 grid grid-rows-subgrid"
            aria-labelledby="offersfreelance"
          >
            <CardHeader>
              <CardTitle id="offersfreelance">Freelance</CardTitle>
            </CardHeader>
            <CardContent className="grow lg:row-start-2">
              Jouw bedrijf heeft een interessant project dat vraagt om
              tijdelijke versterking. Met 6+ jaar ervaring lever ik een
              waardevolle bijdrage aan het team.
            </CardContent>
            <CardFooter className="lg:row-span-2 lg:pb-0">
              <NavLink href="/freelance" variant="button">
                Bekijk de mogelijkheden
              </NavLink>
            </CardFooter>
          </Card>
        </section>
        {/* ervaring */}
        <section
          aria-labelledby="cv"
          className="grid gap-x-4 gap-y-3 self-end sm:grid-cols-[1fr_auto] lg:w-5/6"
        >
          <hgroup className="mb-3 sm:col-span-2">
            <h2 id="cv" className="-mb-1 font-serif text-lg font-light">
              Ervaring
            </h2>
            <p role="subtitle" className="font-serif text-xl sm:text-3xl">
              Informatieplatformen, had ik die al genoemd?
            </p>
          </hgroup>
          <p className="font-serif text-sm basic:-mb-2 basic:font-light sm:font-normal sm:leading-[1.75rem]  light:sm:pt-5 basic:sm:mb-0 dark:sm:pt-5">
            <span className="box-decoration-clone light:bg-light basic:bg-basic dark:bg-dark dark:text-slate-300">
              2022-2024
            </span>
          </p>
          <Card className="mb-6 basic:mb-10 sm:mb-1">
            <CardHeader>
              <CardTitle>
                Front-end developer |{" "}
                <SimpleLink
                  variant="external"
                  href="https://notfound.nl/"
                  className="text-lg"
                >
                  NotFound Digital Creativity
                </SimpleLink>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p>
                Ik bouwde de front-end voor websites in de publieke sector en
                onderhield bestaande applicaties, zoals de vernieuwde versie van
                ons CMS.
              </p>
              <p>
                Door de focus op front-end had ik ruimte om mij te verdiepen in
                toegankelijkheid en responsive grid layouts en kon ik los met
                TailwindCSS.
              </p>
              <p>
                Daarnaast verzorgde ik de tech support voor bestaande klanten.
              </p>
            </CardContent>
            <CardFooter>
              <ul className="flex flex-wrap gap-1">
                <li>
                  <Badge variant="outline" className="font-normal">
                    React
                  </Badge>
                </li>
                <li>
                  <Badge variant="outline" className="font-normal">
                    Vue
                  </Badge>
                </li>
                <li>
                  <Badge variant="outline" className="font-normal">
                    Laravel Blade
                  </Badge>
                </li>
                <li>
                  <Badge variant="outline" className="font-normal">
                    AlpineJS
                  </Badge>
                </li>
                <li>
                  <Badge variant="outline" className="font-normal">
                    Cypress
                  </Badge>
                </li>
                <li>
                  <Badge variant="outline" className="font-normal">
                    TailwindCSS
                  </Badge>
                </li>
              </ul>
            </CardFooter>
          </Card>
          <p className="font-serif text-sm basic:-mb-2 basic:font-light sm:font-normal sm:leading-[1.75rem] light:sm:pt-5 basic:sm:mb-0 dark:sm:pt-5">
            <span className="box-decoration-clone light:bg-light basic:bg-basic dark:bg-dark dark:text-slate-300">
              2017-2022
            </span>
          </p>
          <Card className="basic:mb-8">
            <CardHeader>
              <CardTitle>
                Full-stack webdeveloper |{" "}
                <SimpleLink
                  variant="external"
                  href="https://www.eljakim.nl/"
                  className="text-lg"
                >
                  Eljakim Information Technology bv
                </SimpleLink>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p>
                Ik heb hier als uiteindelijke tech-lead klantportalen voor de
                zorg uitgedacht en ontwikkelt, o.a. een gebruiksvriendelijk
                ouderportaal voor het inzien van jeugdzorgdossiers.
              </p>
              <p>
                Ik heb hier veel geleerd over gegevensbescherming, RESTful
                API&apos;s en het rijmen van de belangen van klanten en
                eindgebruikers.
              </p>
              <p>
                Ik droeg verantwoordelijkheid voor design, projectarchitectuur,
                planning en klantcontact, nieuwe releases, de documentatie en de
                begeleiding van nieuwe developers.
              </p>
            </CardContent>
            <CardFooter>
              <ul className="flex flex-wrap gap-1">
                <li>
                  <Badge variant="outline" className="font-normal">
                    React
                  </Badge>
                </li>
                <li>
                  <Badge variant="outline" className="font-normal">
                    Redux
                  </Badge>
                </li>
                <li>
                  <Badge variant="outline" className="font-normal">
                    Sass
                  </Badge>
                </li>
                <li>
                  <Badge variant="outline" className="font-normal">
                    Express.js
                  </Badge>
                </li>
                <li>
                  <Badge variant="outline" className="font-normal">
                    SAML Auth
                  </Badge>
                </li>
                <li>
                  <Badge variant="outline" className="font-normal">
                    REST API design
                  </Badge>
                </li>
                <li>
                  <Badge variant="outline" className="font-normal">
                    Gitlab CI/CD
                  </Badge>
                </li>
              </ul>
            </CardFooter>
          </Card>
          <SimpleLink
            variant="download"
            className="mt-4 sm:col-start-2"
            href="/cv.pdf"
            download={`cv_maarten_peene_${new Date(Date.now()).toLocaleDateString("nl-NL", { year: "numeric", month: "numeric", day: "numeric" })}`}
          >
            download mijn complete CV
          </SimpleLink>
        </section>
      </PageMain>
    </>
  );
}
