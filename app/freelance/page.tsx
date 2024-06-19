import type { Metadata } from "next";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ContactForm } from "@/components/contact-form";
import { Toaster } from "@/components/ui/toaster";
import { DownloadIcon } from "lucide-react";
import { AnchorMenu } from "@/components/anchor-menu";

export const metadata: Metadata = {
  title: "Freelance | Maarten Peene",
};

export default function Page() {
  return (
    <>
      <header className="mb-4 w-full px-6 pt-24 md:ml-[20%] md:w-[80%] lg:ml-0 lg:w-[70%]">
        <h1 className="font-serif text-4xl first-letter:capitalize">
          freelance
        </h1>
      </header>
      <AnchorMenu
        links={[
          { href: "#s1", text: "kwaliteiten" },
          { href: "#s2", text: "functieprofiel" },
          { href: "#s3", text: "contact" },
        ]}
      />
      <main className="flex w-full flex-col items-center space-y-6 px-6 *:w-full *:gap-x-2 md:ml-[20%] md:w-[80%] lg:ml-0 lg:w-[70%]">
        <section>
          <article className="space-y-2">
            <p>
              Heb je een dikke klus en niemand paraat? Als freelance developer
              help ik graag een handje mee.
            </p>
            <p>
              Ik heb ruime ervaring met het ontwikkelen van gepersonaliseerde
              informatieplatformen voor overheidsinstanties en de zorg. Voor
              meer over mijn werkervaring, bekijk mijn cv.
            </p>
            <p>
              <a
                className="mt-4 w-max text-sky-600 underline underline-offset-4 outline-offset-4 transition-all hover:underline-offset-8 focus:underline-offset-8 light:rounded-full light:bg-amber-500 light:px-6 light:py-2 light:text-slate-50 light:no-underline sm:col-start-2"
                href="/cv.pdf"
                download={`cv_maarten_peene_${new Date(Date.now()).toLocaleDateString("nl-NL", { year: "numeric", month: "numeric", day: "numeric" })}`}
              >
                Download mijn complete CV
                <DownloadIcon className="ml-2 inline-block h-4 w-4" />
              </a>
            </p>
          </article>
        </section>
        <section aria-labelledby="s1 s1b">
          <hgroup className="mb-1 w-full">
            <h2 id="s1" className="-mb-1 font-serif text-lg font-light">
              <span className="box-decoration-clone light:bg-light basic:bg-basic dark:bg-dark">
                Kwaliteiten
              </span>
            </h2>
            <p
              id="s1b"
              role="subtitle"
              className="font-serif text-xl sm:text-3xl"
            >
              Wat breng ik mee naar de werkvloer?
            </p>
          </hgroup>
          <div>
            <h3>Vakkennis</h3>
            {/* ervaring in-en-outs langlopende projecten. Belang bij documentatie en protocollen. */}
            <h3>Collegialiteit</h3>
            {/* actieve communicator, aardig & enthousiast */}
            <h3>Een frisse blik</h3>
            {/* oog voor mooie dingen, puzzelaar die denkt in oplossignen, nieuwe ideeen, */}
            <h3>Flexibiliteit</h3>
            {/* breed inzetbaar, geinteresseerd in alle aspecten van web development */}
          </div>
        </section>
        <section>
          <hgroup className="mb-1 w-full">
            <h2 id="s2" className="-mb-1 font-serif text-lg font-light">
              <span className="box-decoration-clone light:bg-light basic:bg-basic dark:bg-dark">
                Functieprofiel
              </span>
            </h2>
            <p
              id="s2b"
              role="subtitle"
              className="font-serif text-xl sm:text-3xl"
            >
              Hoe kan je mij inzetten?
            </p>
          </hgroup>
          front-end dev, full-stack JS, projectbeheerder, product owner, meer
          (binnen ontwikkelproces)
        </section>
        <section aria-labelledby="s3">
          <hgroup className="">
            <h2 className="-mb-1 font-serif text-lg font-light" id="s3">
              Contact
            </h2>
          </hgroup>
          <Card as="article" aria-labelledby="s3c1">
            <CardHeader>
              <CardTitle id="s3c1">Neem contact op</CardTitle>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>
        </section>
      </main>
      <Toaster />
    </>
  );
}
