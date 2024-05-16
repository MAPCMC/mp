import type { Metadata } from "next";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MemoryGame } from "@/components/memory-game";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home | Maarten Peene",
  description: "Full-stack webdeveloper",
};

export default function Home() {
  return (
    <>
      <header className="w-full flex flex-col items-center *:w-full *:md:max-w-[70%] space-y-2 pt-24 px-6 mb-4">
        <div className="grid sm:grid-cols-[auto_1fr] grid-rows-[1fr_auto_auto] gap-y-1 !gap-x-4">
          {/* logo puzzle */}
          <div className="flex flex-wrap sm:inline-grid sm:grid-cols-[auto_auto_1fr] sm:grid-rows-[auto_auto_1fr] gap-1 sm:row-span-2 md:row-span-3 relative">
            <MemoryGame />
          </div>
          {/* page header & intro */}
          <h1 className="font-serif text-4xl font-bold sm:col-start-2 self-end">
            Maarten Peene
          </h1>
          <p role="doc-subtitle" className="font-serif text-2xl sm:col-start-2">
            <span>Creatieve</span> full-stack webdeveloper
          </p>
          <p className="sm:col-span-2 md:col-start-2 md:col-span-1">
            Ik geloof in een internet waar creativiteit en functionaliteit
            samenkomen. Als webontwikkelaar specialiseer ik me in het tot leven
            brengen van experimentele ideeën, waarbij ik je begeleid van concept
            naar boeiende online ervaringen.
          </p>
        </div>
      </header>
      <main className="w-full flex flex-col items-center px-6 *:w-full *:md:max-w-[70%] *:gap-x-2 space-y-2">
        <section className="grid sm:grid-cols-2 lg:grid-cols-5 gap-y-2">
          <article className="sm:col-span-2 lg:col-span-1 p-6">
            <h2 className="font-serif text-3xl font-bold">Aanbod</h2>
            <p>Wat kan ik voor je betekenen?</p>
          </article>
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Websites & applicaties</CardTitle>
            </CardHeader>
            <CardContent>
              Ik wil samen aan de slag om van mijn idee een werkende website of
              applicatie te maken.
            </CardContent>
            <CardFooter>
              <Link href="/development">Meer over development</Link>
            </CardFooter>
          </Card>
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Advies</CardTitle>
            </CardHeader>
            <CardContent>
              Ik weet niet waar ik moet beginnen. Wil je meedenken?
            </CardContent>
            <CardFooter>
              <Link href="/advies">Naar advies</Link>
            </CardFooter>
          </Card>
          <Card className="sm:col-span-2 lg:col-span-5 bg-orange-500">
            <CardHeader>
              <CardTitle>Freelance</CardTitle>
            </CardHeader>
            <CardContent>
              We hebben een interessant project en/of zoeken een tijdelijke
              vaste kracht. Kom jij ons team versterken?
            </CardContent>
            <CardFooter>
              <Link href="/freelance">Bekijk de mogelijkheden</Link>
            </CardFooter>
          </Card>
        </section>
      </main>
    </>
  );
}
