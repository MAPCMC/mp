import { Button } from "@/components/ui/button";
import { MemoryGame } from "./_components/memory-game";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <div className="grid-basic mt-auto p-8">
        <MemoryGame className="grid grid-cols-3 gap-3 sm:grid-cols-5" />
      </div>
      <div className="mt-auto flex w-full flex-wrap items-center justify-between border-t">
        <header className="items-end gap-4 px-5 py-2 sm:flex">
          <h1 className="text-2xl">Maarten Peene</h1>
          <p className="subtitle text-xs">webdeveloper</p>
        </header>
        <Button variant="link" asChild className="text-white hover:underline">
          <Link href="/" className="text-xs">
            Naar m&apos;n site
          </Link>
        </Button>
      </div>
    </>
  );
}
