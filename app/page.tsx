import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Maarten Peene",
  description: "Full-stack webdeveloper",
};

export default function Home() {
  return (
    <main className="min-h-screen w-full flex flex-col items-center">
      <div className="grid md:grid-cols-12 auto-rows-auto gap-x-4 p-24">
        <div className="md:row-span-4 md:col-span-4 md:row-start-1 bg-orange-500 w-full min-h-20 aspect-square"></div>
        <h1 className="md:col-span-8 md:row-start-2 items-end font-serif text-4xl font-bold">
          Maarten Peene
        </h1>
        <h2 className="md:col-span-8 md:row-start-3 font-serif text-2xl">
          <span>Creatieve</span> full-stack webdeveloper
        </h2>
        <p className="md:col-span-8 row-start-4">
          Welkom op mijn digitale speeltuin waar creativiteit en functionaliteit
          samenkomen. Als webontwikkelaar specialiseer ik me in het tot leven
          brengen van experimentele ideeën, waarbij ik je moeiteloos begeleid
          van concept naar boeiende website-ervaringen.
        </p>
      </div>
    </main>
  );
}
