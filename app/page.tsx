import type { Metadata } from "next";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MemoryGame } from "@/components/memory-game";
import { AboutSpans } from "@/components/about-spans";
import { NavLink } from "@/components/nav-link";
import { DownloadIcon, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

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
          <MemoryGame className="flex flex-wrap-reverse gap-1.5 sm:col-start-1 sm:row-span-2 sm:inline-grid sm:grid-cols-[auto_auto_1fr] sm:grid-rows-[auto_auto_1fr]" />
          <hgroup className="self-end font-serif font-light">
            <h1 className="text-xl">
              <span className=" bg-white box-decoration-clone dark:bg-neutral-950">
                Maarten Peene
              </span>
            </h1>
            <p role="doc-subtitle" className="-mt-1 text-amber-600">
              <span className=" bg-white box-decoration-clone dark:bg-neutral-950">
                <AboutSpans /> full-stack webdeveloper
              </span>
            </p>
          </hgroup>

          <p className="w-full break-words font-serif text-3xl sm:text-5xl">
            Samen creëeren we een unieke online ervaring
          </p>
        </div>
      </header>
      <main className="flex flex-col items-stretch gap-y-12 px-6 pb-24 pt-8 *:md:px-[15%]">
        {/* over mij */}
        <section className="space-y-2 sm:w-3/4">
          <hgroup className="mb-3">
            <h2 className="font-serif text-lg font-light">Over mij</h2>
            <p role="subtitle" className="font-serif text-xl sm:text-3xl">
              Hallo, leuk je te ontmoeten!
            </p>
          </hgroup>
          <p>
            In 2017 ben ik developer geworden omdat ik iets concreets wilde
            maken waarmee ik anderen kon helpen. In de afgelopen jaren heb ik
            mogen werken aan grote informatieve platformen voor de overheid en
            de zorg.
          </p>
          <p>
            In dit nieuwe hoofdstuk van mijn carrière zoek ik creatieve en
            technische ontplooiing via kleinere, vrijmoedige opdrachten en bouw
            ik aan ondersteunende software voor de vakmensen achter het web.
          </p>
          <p>
            Eindgebruikers, opdrachtgevers en ontwikkelaars komen op het
            internet met een doel: we zijn allemaal op zoek naar toegevoegde
            waarde. Met een passie voor maatwerk, samenwerking, ontwerp en
            werkgeluk draag ik mijn steentje bij.
          </p>
          <p>
            Naast development houd ik van koken, klussen en kamperen. Je vindt
            mij in Utrecht, waar ik woon met mijn vriendin en onze kat Toos.
          </p>
        </section>
        {/* aanbod */}
        <section
          className={cn(
            "grid gap-4",
            "light:sm:grid-cols-2",
            "dark:sm:grid-cols-2",
            "basic:-m-6 basic:border-y basic:bg-white basic:p-6 basic:sm:grid-cols-[1fr_auto_1fr] basic:md:m-auto basic:md:border-none basic:md:bg-inherit basic:md:px-[15%] basic:md:py-0",
          )}
          aria-labelledby="s1"
        >
          <hgroup className="mb-3 basic:sm:col-span-3">
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
            className="row-span-3 grid grid-rows-subgrid"
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
              <NavLink
                href="/development"
                className={
                  "light:rounded-full light:bg-amber-500 light:px-6 light:py-2 light:text-white light:no-underline"
                }
              >
                Meer over development
              </NavLink>
            </CardFooter>
          </Card>
          <Separator
            orientation="horizontal"
            className="hidden basic:my-4 basic:block basic:sm:hidden"
            decorative
          />
          <Separator
            orientation="vertical"
            className="hidden basic:mx-6 basic:sm:row-span-3 basic:sm:block"
            decorative
          />
          <Card
            as="article"
            className="row-span-3 grid grid-rows-subgrid light:bg-amber-200 dark:bg-orange-900"
            aria-labelledby="s1c3"
          >
            <CardHeader>
              <CardTitle id="s1c3">Freelance</CardTitle>
            </CardHeader>
            <CardContent className="grow lg:row-start-2">
              Jouw bedrijf heeft een interessant project dat vraagt om
              tijdelijke versterking. Met 6+ jaar ervaring lever ik een
              waardevolle bijdrage aan het team.
            </CardContent>
            <CardFooter className="lg:row-span-2 lg:pb-0">
              <NavLink
                href="/freelance"
                className={
                  "light:rounded-full light:bg-amber-500 light:px-6 light:py-2 light:text-white light:no-underline"
                }
              >
                Bekijk de mogelijkheden
              </NavLink>
            </CardFooter>
          </Card>
        </section>
        {/* ervaring */}
        <section className="grid gap-x-6 gap-y-2 self-end sm:grid-cols-[1fr_auto] lg:w-5/6">
          <hgroup className="mb-3 sm:col-span-2">
            <h2 className="-mb-1 font-serif text-lg font-light">Ervaring</h2>
            <p role="subtitle" className="font-serif text-xl sm:text-3xl">
              Informatieplatformen, had ik die al genoemd?
            </p>
          </hgroup>
          <p className="font-serif leading-[1.75rem]">2022-2024</p>
          <Card className="mb-4">
            <CardHeader>
              <CardTitle>
                Front-end developer |{" "}
                <a
                  href="https://notfound.nl/"
                  className="text-lg hover:underline focus:underline"
                >
                  NotFound Digital Creativity
                  <ExternalLink className="ml-2 inline-block h-4 w-4 -translate-y-1" />
                </a>
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
                responsive grid layouts en kon ik los met TailwindCSS.
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
          <p className="font-serif leading-[1.75rem]">2017-2022</p>
          <Card>
            <CardHeader>
              <CardTitle>
                Full-stack webdeveloper |{" "}
                <a
                  href="https://www.eljakim.nl/"
                  className="text-lg hover:underline focus:underline"
                >
                  Eljakim Information Technology bv
                  <ExternalLink className="ml-2 inline-block h-4 w-4 -translate-y-1" />
                </a>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p>
                Ik heb hier als uiteindelijke tech-lead klantportalen voor de
                zorg uitgedacht en ontwikkelt, o.a. een toegankelijk
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
          <a
            className="mt-4 w-max text-sky-600 underline underline-offset-4 outline-offset-4 transition-all hover:underline-offset-8 focus:underline-offset-8 light:rounded-full light:bg-amber-500 light:px-6 light:py-2 light:text-white light:no-underline sm:col-start-2"
            href="/cv.pdf"
            download={`cv_maarten_peene_${new Date(Date.now()).toLocaleDateString("nl-NL", { year: "numeric", month: "numeric", day: "numeric" })}`}
          >
            Download mijn complete CV
            <DownloadIcon className="ml-2 inline-block h-4 w-4" />
          </a>
        </section>
      </main>
    </>
  );
}
