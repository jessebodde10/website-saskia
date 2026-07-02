import FadeIn from "@/components/motion/FadeIn";

type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  intro?: React.ReactNode;
};

export default function PageHeader({ eyebrow, title, intro }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden pt-16 sm:pt-24">
      {/* Zachte organische achtergrondvorm */}
      <div
        aria-hidden
        className="blob absolute -right-24 -top-20 h-72 w-72 bg-sage-100/70 blur-2xl"
      />
      <div
        aria-hidden
        className="blob absolute -left-16 top-24 h-56 w-56 bg-terracotta-100/50 blur-2xl"
      />
      <div className="container-content relative">
        <div className="max-w-prose">
          {eyebrow && (
            <FadeIn>
              <p className="eyebrow">{eyebrow}</p>
            </FadeIn>
          )}
          <FadeIn delay={0.05}>
            <h1 className="mt-4 text-4xl leading-[1.1] sm:text-5xl">{title}</h1>
          </FadeIn>
          {intro && (
            <FadeIn delay={0.12}>
              <div className="mt-6 space-y-5 text-lg leading-relaxed text-ink-soft">
                {intro}
              </div>
            </FadeIn>
          )}
        </div>
      </div>
    </section>
  );
}
