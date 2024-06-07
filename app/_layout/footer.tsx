import { NavLink } from "@/components/nav-link";
import { SiGithub, SiLinkedin } from "@icons-pack/react-simple-icons";

export function Footer() {
  return (
    <footer className="w-full gap-4 p-2 pb-16 pt-24 text-sm *:self-end sm:grid sm:grid-cols-3 md:px-[15%] md:pb-8 lg:grid-cols-4">
      <nav className="sm:col-span-3">
        <ul className="gap-4 *:self-end sm:grid sm:grid-cols-3">
          <li>
            <NavLink href="/">Home</NavLink>
          </li>
          <ul className="pl-4 sm:col-span-2 sm:pl-0">
            <li className="gap-4 sm:grid sm:grid-cols-2">
              <NavLink href="/development">Development</NavLink>
              <ul className="pl-4 sm:pl-0">
                <li>
                  <NavLink href="/development/start-nu">Start nu</NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink href="/freelance">Freelance</NavLink>
            </li>
            <li>
              <NavLink href="/contact">Contact</NavLink>
            </li>
          </ul>
        </ul>
      </nav>
      <ul className="sm:col-span-full lg:col-span-1">
        <li>
          <ul className="flex gap-2">
            <li>
              <a href="https://github.com/MAPCMC">
                <SiGithub className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/maarten-peene-432635146/">
                <SiLinkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </li>
          </ul>
        </li>
        <li>© 2024 Itoko door Maarten Peene</li>
      </ul>
    </footer>
  );
}
