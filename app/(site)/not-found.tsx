import { PageHeader } from "@/components/page-header";
import { PageMain } from "@/components/page-main";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <PageHeader>
        <h1 className="font-serif text-4xl first-letter:capitalize">
          Not Found
        </h1>
      </PageHeader>
      <PageMain>
        <section className="flex flex-col items-start gap-4">
          <p>Kan deze pagina niet vinden.</p>
          <Button asChild>
            <Link href="/">Naar home</Link>
          </Button>
        </section>
      </PageMain>
    </>
  );
}
