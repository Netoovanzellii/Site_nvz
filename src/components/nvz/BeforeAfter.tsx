import { ArrowRight, Check, X } from "lucide-react";
import { Reveal } from "./Reveal";

const before = [
  "Planilhas espalhadas",
  "Processos manuais",
  "Informações difíceis de encontrar",
  "Relatórios demorados",
  "Sistemas que não conversam entre si",
  "Dados subutilizados",
];

const after = [
  "Processos automatizados",
  "Dashboards atualizados",
  "Sistemas integrados",
  "Informações centralizadas",
  "IA para consultas",
  "Decisões baseadas em dados",
];

export const BeforeAfter = () => (
  <section className="relative py-24 lg:py-32">
    <div className="container">
      <Reveal className="max-w-2xl mb-16">
        <h2 className="font-display text-4xl lg:text-5xl font-bold tracking-tight">
          O que podemos <span className="text-gradient">transformar</span>.
        </h2>
        <p className="mt-4 text-muted-foreground text-lg">
          A maioria das empresas industriais convive com os mesmos gargalos.
          Veja o que muda quando os dados e processos passam a trabalhar a
          favor da operação.
        </p>
      </Reveal>

      <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-6 lg:gap-4 items-center">
        <Reveal direction="right" className="card-glass rounded-3xl p-8 h-full">
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Antes
          </span>
          <ul className="mt-5 space-y-4">
            {before.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-foreground/80">
                <X className="w-4 h-4 text-muted-foreground mt-0.5 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>

        <div className="flex lg:flex-col items-center justify-center gap-2 py-2">
          <div className="w-11 h-11 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0">
            <ArrowRight className="w-5 h-5 text-primary rotate-90 lg:rotate-0" />
          </div>
        </div>

        <Reveal direction="left" className="card-glass rounded-3xl p-8 h-full border-primary/30">
          <span className="font-mono text-xs uppercase tracking-widest text-primary">
            Depois
          </span>
          <ul className="mt-5 space-y-4">
            {after.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm">
                <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </div>
  </section>
);
