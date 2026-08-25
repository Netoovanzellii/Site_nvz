import { LucideIcon, Check } from "lucide-react";
import { Reveal } from "@/components/nvz/Reveal";

interface SectraTopicProps {
  id: string;
  icon: LucideIcon;
  kicker: string;
  title: React.ReactNode;
  description: string;
  bullets: string[];
  reverse?: boolean;
}

export const SectraTopic = ({
  id,
  icon: Icon,
  kicker,
  title,
  description,
  bullets,
  reverse = false,
}: SectraTopicProps) => (
  <section id={id} className="relative py-20 lg:py-24 border-b border-border/60">
    <div className="container">
      <div className={`grid lg:grid-cols-2 gap-10 items-center ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
        <Reveal direction={reverse ? "left" : "right"}>
          <span className="font-mono text-xs text-primary uppercase tracking-widest">
            {kicker}
          </span>
          <h2 className="mt-4 font-display text-3xl lg:text-4xl font-bold tracking-tight leading-tight">
            {title}
          </h2>
          <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
            {description}
          </p>
          <ul className="mt-6 space-y-3">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-2.5 text-sm">
                <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal direction={reverse ? "right" : "left"} delay={120}>
          <div className="card-glass rounded-3xl p-10 flex items-center justify-center aspect-[4/3]">
            <Icon className="w-24 h-24 text-primary" strokeWidth={1} />
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);
