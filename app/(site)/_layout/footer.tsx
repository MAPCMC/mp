import { SiGithub, SiLinkedin } from "@icons-pack/react-simple-icons";
import { cn } from "@/lib/utils";
import { FooterMenu } from "./footer-menu";
import { Copyright } from "./copyright";
import { SimpleLink } from "@/components/links";

export function Footer() {
  return (
    <footer
      className={cn(
        "mt-24 w-full px-6 pb-32 pt-12 md:pb-12 md:pl-[20%] lg:px-[15%]",
        "grid gap-6 sm:grid-cols-2",
        "text-sm",
        "border-t light:border-transparent basic:border-slate-950 dark:border-dark-dots dark:bg-dark",
      )}
    >
      <FooterMenu />
      <div className="space-y-2 self-end text-right">
        <ul className="flex justify-end gap-4">
          <li>
            <SimpleLink
              href="https://github.com/MAPCMC"
              target="_blank"
              className="group"
              variant="icon"
            >
              <SiGithub className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </SimpleLink>
          </li>
          <li>
            <SimpleLink
              href="https://www.linkedin.com/in/maarten-peene-432635146/"
              target="_blank"
              className="group"
              variant="icon"
            >
              <SiLinkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </SimpleLink>
          </li>
        </ul>
        <Copyright />
      </div>
    </footer>
  );
}
