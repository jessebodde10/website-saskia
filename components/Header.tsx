"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { navItems } from "@/lib/nav";
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
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-sand-200/80 bg-cream/85 backdrop-blur-md"
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

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-sand-200 bg-cream/95 backdrop-blur-md md:hidden"
          >
            <nav
              className="container-content flex flex-col gap-1 py-6"
              aria-label="Mobiel menu"
            >
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-2xl px-4 py-3.5 text-base transition-colors ${
                    isActive(item.href)
                      ? "bg-sage-50 text-ink"
                      : "text-ink-soft hover:bg-sand-100 hover:text-ink"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link href="/contact" className="btn-primary mt-3">
                Neem contact op
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
