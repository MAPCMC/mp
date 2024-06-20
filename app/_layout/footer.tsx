import { SiGithub, SiLinkedin } from "@icons-pack/react-simple-icons";
import { cn } from "@/lib/utils";
import { FooterMenu } from "./footer-menu";
import { Copyright } from "./copyright";

export function Footer() {
  return (
    <footer
      className={cn(
        "mt-24 w-full px-6 pb-32 pt-12 md:pb-12 md:pl-[20%] lg:px-[15%]",
        "grid gap-6 sm:grid-cols-2",
        "text-sm",
        "border-t basic:border-slate-900",
      )}
    >
      <FooterMenu />
      <div className="space-y-2 self-end text-right">
        <ul className="flex justify-end gap-4">
          <li>
            <a
              href="https://github.com/MAPCMC"
              target="_blank"
              className="group"
            >
              <SiGithub className="h-6 w-6 group-hover:text-sky-700 group-focus-visible:text-sky-700" />
              <span className="sr-only">GitHub</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/maarten-peene-432635146/"
              target="_blank"
              className="group"
            >
              <SiLinkedin className="h-6 w-6 group-hover:text-sky-700 group-focus-visible:text-sky-700" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </li>
        </ul>
        <Copyright />
      </div>
    </footer>
  );
}
