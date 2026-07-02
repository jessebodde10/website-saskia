import Link from "next/link";
import { navItems, contactEmail } from "@/lib/nav";
import Logo from "@/components/Logo";
import { Mail } from "@/components/icons";

const socials = [
  { label: "Instagram", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Facebook", href: "#" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-sand-200 bg-sand-50">
      <div className="container-content grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <div className="flex items-center gap-2.5">
            <Logo className="h-9 w-9" />
            <span className="font-serif text-lg font-medium tracking-tight text-ink">
              Rise <span className="text-terracotta-400">&amp;</span> Connect
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-soft">
            Training, ademcoaching en bewustwording voor mensen en teams.
          </p>
        </div>

        <nav aria-label="Footer navigatie">
          <h2 className="text-sm font-semibold text-ink">Navigatie</h2>
          <ul className="mt-4 space-y-2.5">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-ink-soft transition-colors hover:text-terracotta-500"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-semibold text-ink">Contact</h2>
          <ul className="mt-4 space-y-2.5 text-sm text-ink-soft">
            <li>
              <a
                href={`mailto:${contactEmail}`}
                className="inline-flex items-center gap-2 transition-colors hover:text-terracotta-500"
              >
                <Mail className="h-4 w-4" />
                {contactEmail}
              </a>
            </li>
            <li>
              <Link
                href="/contact"
                className="transition-colors hover:text-terracotta-500"
              >
                Plan een kennismaking
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-ink">Socials</h2>
          <ul className="mt-4 space-y-2.5 text-sm text-ink-soft">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  className="transition-colors hover:text-terracotta-500"
                  aria-label={`${s.label} (placeholder)`}
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-sand-200">
        <div className="container-content flex flex-col items-center justify-between gap-2 py-6 text-xs text-ink-muted sm:flex-row">
          <p>© {year} Rise &amp; Connect. Alle rechten voorbehouden.</p>
          <p>Met aandacht gemaakt · Saskia Bodde</p>
        </div>
      </div>
    </footer>
  );
}
