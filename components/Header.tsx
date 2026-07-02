"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { navItems, contactEmail } from "@/lib/nav";
import { Menu, Close } from "@/components/icons";
import Logo from "@/components/Logo";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Sluit mobiel menu bij navigatie
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Voorkom scrollen achter open menu
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-sand-200/80 bg-cream/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container-content flex h-20 items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2.5 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-400 focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
          aria-label="Rise & Connect, naar home"
        >
          <Logo className="h-9 w-9 text-sage-500" />
          <span className="font-serif text-lg font-medium tracking-tight text-ink">
            Rise <span className="text-terracotta-400">&amp;</span> Connect
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Hoofdmenu">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative rounded-full px-4 py-2 text-sm transition-colors duration-200 ${
                isActive(item.href)
                  ? "text-ink"
                  : "text-ink-soft hover:text-ink"
              }`}
            >
              {item.label}
              {isActive(item.href) && (
                <motion.span
                  layoutId="nav-active"
                  className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-terracotta-400"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link href="/contact" className="btn-primary">
            Neem contact op
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full text-ink transition-colors hover:bg-sand-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-400 md:hidden"
          aria-label={open ? "Menu sluiten" : "Menu openen"}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? <Close /> : <Menu />}
        </button>
      </div>
    </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-0 bottom-0 top-20 z-40 flex flex-col bg-cream md:hidden"
          >
            <nav
              className="container-content flex flex-1 flex-col pt-4"
              aria-label="Mobiel menu"
            >
              <ul className="flex flex-col divide-y divide-sand-200">
                {navItems.map((item, i) => {
                  const active = isActive(item.href);
                  return (
                    <motion.li
                      key={item.href}
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: 0.06 + i * 0.05,
                        duration: 0.4,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      <Link
                        href={item.href}
                        className="group flex items-baseline py-5"
                        aria-current={active ? "page" : undefined}
                      >
                        <span
                          className={`font-serif text-3xl tracking-tight transition-colors ${
                            active
                              ? "text-terracotta-600"
                              : "text-ink group-hover:text-sage-600"
                          }`}
                        >
                          {item.label}
                        </span>
                        {active && (
                          <span
                            aria-hidden
                            className="ml-auto h-2 w-2 self-center rounded-full bg-terracotta-500"
                          />
                        )}
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="mt-auto space-y-5 border-t border-sand-200 py-8"
              >
                <Link href="/contact" className="btn-primary w-full">
                  Neem contact op
                </Link>
                <div className="flex items-center justify-between text-sm text-ink-muted">
                  <a
                    href={`mailto:${contactEmail}`}
                    className="transition-colors hover:text-ink"
                  >
                    {contactEmail}
                  </a>
                  <span className="tracking-wide">Instagram · LinkedIn</span>
                </div>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
