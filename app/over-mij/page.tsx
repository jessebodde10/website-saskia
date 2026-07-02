import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/motion/FadeIn";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
import ImageFrame from "@/components/ui/ImageFrame";
import { images } from "@/lib/images";
import { ArrowRight } from "@/components/icons";

export const metadata: Metadata = {
  title: "Over Saskia",
  description:
    "Saskia Bodde werkt vanuit verbinding, aandacht en rust. Met jarenlange ervaring in de kinderopvang helpt zij mensen en teams steviger te staan en beter samen te werken.",
};

const paragraphs = [
  "Ik ben Saskia Bodde. Ik werk vanuit verbinding, aandacht en rust. In alles wat ik doe kijk ik naar wat mensen nodig hebben om steviger te staan, beter samen te werken en meer vertrouwen te voelen in zichzelf en elkaar.",
  "Door mijn jarenlange ervaring in de kinderopvang, als leidinggevende, opleider, docent en examinator, weet ik hoe belangrijk het is dat mensen zich gezien en gehoord voelen. Niet alleen kinderen hebben dit nodig, ook volwassenen.",
];

const beliefs = [
  "Ik geloof in de kracht en de kennis van je eigen lichaam.",
  "Ik zie snel wat er speelt in een groep.",
  "Ik breng helderheid, stel eerlijke vragen en help mensen om weer dichter bij zichzelf en elkaar te komen.",
];

export default function OverMijPage() {
  return (
    <section className="relative overflow-hidden pt-16 sm:pt-24">
      <div
        aria-hidden
        className="blob absolute -left-24 -top-16 h-72 w-72 bg-sage-100/70 blur-2xl"
      />

      <div className="container-content relative">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-16">
          {/* Portret */}
          <FadeIn>
            <div className="relative lg:sticky lg:top-28">
              <div
                aria-hidden
                className="blob absolute -inset-4 -z-10 bg-sand-200/70"
              />
              <ImageFrame
                src={images.portrait}
                alt="Professioneel portret van Saskia Bodde"
                priority
                aspect="aspect-[4/5]"
              />
              <div className="mt-5 rounded-3xl bg-white/80 px-6 py-4 shadow-soft backdrop-blur">
                <p className="font-serif text-lg text-ink">Saskia Bodde</p>
                <p className="text-sm text-ink-muted">
                  Trainer &amp; ademcoach · Rise &amp; Connect
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Tekst */}
          <div>
            <FadeIn>
              <p className="eyebrow">Over mij</p>
              <h1 className="mt-4 text-4xl leading-[1.1] sm:text-5xl">
                Over Saskia
              </h1>
            </FadeIn>

            <div className="mt-8 space-y-6 text-lg leading-relaxed text-ink-soft">
              {paragraphs.map((p, i) => (
                <FadeIn key={i} delay={0.05 * i}>
                  <p>{p}</p>
                </FadeIn>
              ))}
            </div>

            <FadeIn>
              <blockquote className="my-10 rounded-4xl border-l-4 border-terracotta-300 bg-sand-50 py-6 pl-8 pr-6">
                <StaggerGroup className="space-y-4">
                  {beliefs.map((b) => (
                    <StaggerItem key={b}>
                      <p className="font-serif text-xl leading-snug text-ink">
                        {b}
                      </p>
                    </StaggerItem>
                  ))}
                </StaggerGroup>
              </blockquote>
            </FadeIn>

            <FadeIn>
              <p className="text-lg leading-relaxed text-ink-soft">
                Mijn kracht ligt in het verbinden van mensen, het zichtbaar maken
                van patronen en het creëren van een veilige basis waarin
                ontwikkeling mogelijk wordt.
              </p>
            </FadeIn>

            <FadeIn>
              <div className="mt-10 flex flex-wrap gap-3">
                <Link href="/contact" className="btn-primary">
                  Maak kennis met Saskia
                  <ArrowRight />
                </Link>
                <Link href="/trainingen" className="btn-outline">
                  Bekijk het aanbod
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
