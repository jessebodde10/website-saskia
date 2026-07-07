import type { Metadata } from "next";
import { Suspense } from "react";
import FadeIn from "@/components/motion/FadeIn";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
import ContactForm from "@/components/ContactForm";
import { Mail, Calendar, ArrowRight } from "@/components/icons";
import { contactEmail } from "@/lib/nav";

export const metadata: Metadata = {
  title: "Neem contact op",
  description:
    "Wil je meer weten over een training over generaties op de werkvloer of het thema Generatie Alpha voor jouw team? Neem contact op met Saskia Bodde.",
};

const ctas = [
  {
    title: "Mail Saskia",
    text: "Stuur direct een bericht en ik reageer zo snel mogelijk.",
    href: `mailto:${contactEmail}`,
    icon: Mail,
    accent: "sage" as const,
  },
  {
    title: "Plan een kennismaking",
    text: "Een vrijblijvend gesprek om te voelen of het klikt.",
    href: "/contact?onderwerp=kennismaking#formulier",
    icon: Calendar,
    accent: "terracotta" as const,
  },
  {
    title: "Vraag informatie aan",
    text: "Ontvang meer informatie over de training of het thema Generatie Alpha.",
    href: "/contact?onderwerp=werkvloer#formulier",
    icon: ArrowRight,
    accent: "sage" as const,
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-16 sm:pt-24">
        <div
          aria-hidden
          className="blob absolute -right-24 -top-16 h-72 w-72 bg-terracotta-100/50 blur-2xl"
        />
        <div className="container-content relative">
          <div className="max-w-prose">
            <FadeIn>
              <p className="eyebrow">Contact</p>
              <h1 className="mt-4 text-4xl leading-[1.1] sm:text-5xl">
                Neem contact op
              </h1>
            </FadeIn>
            <FadeIn delay={0.08}>
              <div className="mt-6 space-y-5 text-lg leading-relaxed text-ink-soft">
                <p>
                  Wil je meer weten over een training over generaties op de
                  werkvloer of het thema Generatie Alpha voor jouw team?
                </p>
                <p>
                  Neem gerust contact met mij op. Dan kijken we samen wat passend
                  is bij jouw vraag of organisatie.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Drie CTA's */}
      <section className="container-content py-14">
        <StaggerGroup className="grid gap-6 md:grid-cols-3">
          {ctas.map((cta) => (
            <StaggerItem key={cta.title}>
              <a
                href={cta.href}
                className="card group flex h-full flex-col bg-white/70"
              >
                <span
                  className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${
                    cta.accent === "sage"
                      ? "bg-sage-100 text-sage-600"
                      : "bg-terracotta-100 text-terracotta-500"
                  }`}
                >
                  <cta.icon className="h-5 w-5" />
                </span>
                <h2 className="mt-5 text-xl font-medium">{cta.title}</h2>
                <p className="mt-2 flex-1 leading-relaxed text-ink-soft">
                  {cta.text}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-sage-600">
                  Verder
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </a>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      {/* Formulier */}
      <section id="formulier" className="bg-sand-50 py-16 sm:py-20">
        <div className="container-content">
          <div className="mx-auto max-w-3xl">
            <FadeIn>
              <div className="mb-8 text-center">
                <h2 className="text-3xl sm:text-4xl">Stuur een bericht</h2>
                <p className="mt-3 text-ink-soft">
                  Vul het formulier in en ik neem zo snel mogelijk contact met je
                  op.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <Suspense fallback={null}>
                <ContactForm />
              </Suspense>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
