import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Maarten Peene",
  description: "Full-stack webdeveloper",
};

export default function Home() {
  return (
    <main className="w-full flex flex-col items-center">
      <div className="grid md:grid-cols-12 auto-rows-auto gap-x-4 py-24 px-8 md:max-w-[70%]">
        {/* logo puzzle */}
        <div className="md:row-span-4 md:col-span-4 md:row-start-1 bg-orange-500 w-full min-h-20 aspect-square max-w-[300px]"></div>

        {/* page header & intro */}
        <h1 className="md:col-span-8 md:row-start-2 items-end font-serif text-4xl font-bold">
          Maarten Peene
        </h1>
        <p
          role="doc-subtitle"
          className="md:col-span-8 md:row-start-3 font-serif text-2xl"
        >
          <span>Creatieve</span> full-stack webdeveloper
        </p>
        <p className="md:col-span-8 md:row-start-4">
          Ik geloof in een internet waar creativiteit en functionaliteit
          samenkomen. Als webontwikkelaar specialiseer ik me in het tot leven
          brengen van experimentele ideeën, waarbij ik je begeleid van concept
          naar boeiende online ervaringen.
        </p>
      </div>
    </main>
  );
}
