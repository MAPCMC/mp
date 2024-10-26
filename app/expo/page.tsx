import { MemoryGame } from "./_components/memory-game";
import HighScores from "./_components/HighScores";
import { getScores } from "@/db/queries";
import { NavLink } from "@/components/links";

export const dynamic = "force-dynamic";

export default async function Page() {
  const scores = await getScores();
  return (
    <>
      <div className="flex grow">
        <MemoryGame scores={scores} />
      </div>
      <HighScores scores={scores} />
      <div className="flex flex-wrap items-center justify-between gap-3 border-t px-5 py-2">
        <header>
          <h1 className="font-serif text-2xl">Maarten Peene</h1>
          <p className="subtitle font-serif text-xs">webdeveloper</p>
        </header>
        <NavLink href="/" variant="button">
          <span className="hidden sm:inline">Naar m&apos;n</span> site
        </NavLink>
      </div>
    </>
  );
}
