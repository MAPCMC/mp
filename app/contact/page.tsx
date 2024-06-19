import type { Metadata } from "next";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact | Maarten Peene",
  description: "Full-stack webdeveloper",
};

export default function Contact() {
  return (
    <>
      <header className="mb-4 w-full px-6 pt-24 md:ml-[20%] md:w-[80%] lg:ml-0 lg:w-[70%]">
        <h1 className="font-serif text-4xl first-letter:capitalize">contact</h1>
      </header>
      <main className="flex w-full flex-col items-stretch px-6 pt-8 md:ml-[20%] md:w-[80%] lg:ml-0 lg:w-[70%]">
        <dl className="mb-8 grid gap-x-6 sm:grid-cols-[auto_1fr] sm:gap-y-2">
          <dt className="-mb-1 text-sm leading-6 opacity-70 sm:mb-auto">
            naam
          </dt>
          <dd className="mb-2 sm:mb-auto">M.A. Peene</dd>
          <dt className="-mb-1 text-sm leading-6 opacity-70 sm:mb-auto">
            bedrijfsnaam
          </dt>
          <dd className="mb-2 sm:mb-auto">Itoko</dd>
          <dt className="-mb-1 text-sm leading-6 opacity-70 sm:mb-auto">
            adres
          </dt>
          <dd className="mb-2 sm:mb-auto">
            <address className="not-italic">
              Linnaeusstraat 16
              <br /> 3553 CD Utrecht
            </address>
          </dd>
          <dt className="-mb-1 text-sm leading-6 opacity-70 sm:mb-auto">KVK</dt>
          <dd className="mb-2 sm:mb-auto">93973225</dd>
          <dt className="-mb-1 text-sm leading-6 opacity-70 first-letter:capitalize sm:mb-auto">
            btw-id
          </dt>
          <dd className="mb-2 sm:mb-auto">NL005059450B24</dd>
        </dl>

        <Card as="article" aria-labelledby="s3c1">
          <CardHeader>
            <CardTitle id="s3c1">Neem contact op</CardTitle>
            <p>
              Wil je vrijblijvend in gesprek? Gebruik dit formulier. Ik hoor
              graag van je!
            </p>
          </CardHeader>
          <CardContent>
            <ContactForm />
          </CardContent>
        </Card>
      </main>
    </>
  );
}
