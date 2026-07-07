"use client";

import { useSearchParams } from "next/navigation";
import { useMemo, useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowRight } from "@/components/icons";
import { contactEmail } from "@/lib/nav";

const subjects = [
  { value: "", label: "Kies een onderwerp" },
  { value: "werkvloer", label: "Training: Generatie op de werkvloer" },
  { value: "alpha", label: "Generatie Alpha in de praktijk" },
  { value: "kennismaking", label: "Kennismaking" },
  { value: "anders", label: "Iets anders" },
];

const inputBase =
  "w-full rounded-2xl border border-sand-200 bg-white px-4 py-3 text-ink placeholder:text-ink-muted/70 shadow-sm transition-colors focus:border-sage-400 focus:outline-none focus:ring-2 focus:ring-sage-200";

export default function ContactForm() {
  const params = useSearchParams();
  const initialSubject = useMemo(() => {
    const q = params.get("onderwerp") ?? "";
    return subjects.some((s) => s.value === q) ? q : "";
  }, [params]);

  const [subject, setSubject] = useState(initialSubject);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Demo-verzending: open de standaard mailclient met een nette samenvatting.
    const form = new FormData(e.currentTarget);
    const body = [
      `Naam: ${form.get("naam")}`,
      `Organisatie: ${form.get("organisatie")}`,
      `E-mail: ${form.get("email")}`,
      `Telefoon: ${form.get("telefoon")}`,
      `Onderwerp: ${form.get("onderwerp")}`,
      "",
      `${form.get("bericht")}`,
    ].join("\n");
    const mailto = `mailto:${contactEmail}?subject=${encodeURIComponent(
      "Aanvraag via website: " + (form.get("onderwerp") || "algemeen"),
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setSent(true);
  };

  return (
    <div className="rounded-5xl border border-sand-200 bg-white/70 p-6 shadow-soft backdrop-blur-sm sm:p-10">
      <AnimatePresence mode="wait">
        {sent ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center py-10 text-center"
          >
            <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-sage-100 text-sage-600">
              <Check className="h-8 w-8" />
            </span>
            <h3 className="mt-6 text-2xl">Dank je wel</h3>
            <p className="mt-3 max-w-sm text-ink-soft">
              Je mailprogramma opent met je bericht. Verzend de mail en ik neem
              zo snel mogelijk contact met je op.
            </p>
            <button
              type="button"
              onClick={() => setSent(false)}
              className="btn-outline mt-6"
            >
              Nieuw bericht opstellen
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onSubmit={handleSubmit}
            className="space-y-5"
            noValidate
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="naam" className="mb-1.5 block text-sm font-medium text-ink">
                  Naam
                </label>
                <input
                  id="naam"
                  name="naam"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Je naam"
                  className={inputBase}
                />
              </div>
              <div>
                <label
                  htmlFor="organisatie"
                  className="mb-1.5 block text-sm font-medium text-ink"
                >
                  Organisatie
                </label>
                <input
                  id="organisatie"
                  name="organisatie"
                  type="text"
                  autoComplete="organization"
                  placeholder="Optioneel"
                  className={inputBase}
                />
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ink">
                  E-mailadres
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="jij@voorbeeld.nl"
                  className={inputBase}
                />
              </div>
              <div>
                <label
                  htmlFor="telefoon"
                  className="mb-1.5 block text-sm font-medium text-ink"
                >
                  Telefoon
                </label>
                <input
                  id="telefoon"
                  name="telefoon"
                  type="tel"
                  autoComplete="tel"
                  placeholder="Optioneel"
                  className={inputBase}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="onderwerp"
                className="mb-1.5 block text-sm font-medium text-ink"
              >
                Onderwerp
              </label>
              <select
                id="onderwerp"
                name="onderwerp"
                required
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className={`${inputBase} appearance-none bg-[length:1.1rem] bg-[right_1rem_center] bg-no-repeat pr-10`}
                style={{
                  backgroundImage:
                    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%237C7C70' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E\")",
                }}
              >
                {subjects.map((s) => (
                  <option key={s.value} value={s.value} disabled={s.value === ""}>
                    {s.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="bericht" className="mb-1.5 block text-sm font-medium text-ink">
                Bericht
              </label>
              <textarea
                id="bericht"
                name="bericht"
                required
                rows={5}
                placeholder="Waar kan ik je mee helpen?"
                className={`${inputBase} resize-y`}
              />
            </div>

            <div className="flex items-center justify-between gap-4 pt-2">
              <p className="text-xs text-ink-muted">
                Ik ga zorgvuldig met je gegevens om.
              </p>
              <button type="submit" className="btn-primary">
                Verstuur bericht
                <ArrowRight />
              </button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
