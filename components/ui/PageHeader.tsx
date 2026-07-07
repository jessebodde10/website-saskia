import FadeIn from "@/components/motion/FadeIn";

type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  intro?: React.ReactNode;
};

export default function PageHeader({ eyebrow, title, intro }: PageHeaderProps) {
  return (
    <section className="border-b border-sand-200">
      <div className="container-content py-16 sm:py-24">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            {eyebrow && (
              <FadeIn>
                <p className="eyebrow">{eyebrow}</p>
              </FadeIn>
            )}
            <FadeIn delay={0.05}>
              <h1 className="mt-5 text-4xl leading-[1.05] tracking-tightest sm:text-5xl lg:text-6xl">
                {title}
              </h1>
            </FadeIn>
          </div>
          {intro && (
            <FadeIn delay={0.12}>
              <div className="max-w-prose space-y-5 text-lg leading-relaxed text-ink-soft lg:pt-3">
                {intro}
              </div>
            </FadeIn>
          )}
        </div>
      </div>
    </section>
  );
}
