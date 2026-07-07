import Link from "next/link";
import { navItems, contactEmail } from "@/lib/nav";
import Logo from "@/components/Logo";
import { Mail } from "@/components/icons";

const socials = [
  { label: "Instagram", href: "#" },
  { label: "LinkedIn", href: "#" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 bg-ink text-cream">
      <div className="container-content grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4 lg:py-20">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2.5">
            <Logo className="h-8 w-8 text-sage-400" />
            <span className="font-display text-lg font-semibold tracking-tight">
              Rise <span className="text-sage-300">&amp;</span> Connect
            </span>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-sand-300">
            Trainingen over generaties op de werkvloer en Generatie Alpha in de
            praktijk. Voor teams in kinderopvang, onderwijs en zorg.
          </p>
        </div>

        <nav aria-label="Footer navigatie">
          <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-sand-400">
            Navigatie
          </h2>
          <ul className="mt-5 space-y-3">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-sand-200 transition-colors hover:text-cream"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-sand-400">
            Contact
          </h2>
          <ul className="mt-5 space-y-3 text-sm text-sand-200">
            <li>
              <a
                href={`mailto:${contactEmail}`}
                className="inline-flex items-center gap-2 transition-colors hover:text-cream"
              >
                <Mail className="h-4 w-4" />
                {contactEmail}
              </a>
            </li>
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  className="transition-colors hover:text-cream"
                  aria-label={`${s.label} (placeholder)`}
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-content flex flex-col items-center justify-between gap-2 py-6 text-xs text-sand-400 sm:flex-row">
          <p>© {year} Rise &amp; Connect. Alle rechten voorbehouden.</p>
          <p>Met aandacht gemaakt · Saskia Bodde</p>
        </div>
      </div>
    </footer>
  );
}
