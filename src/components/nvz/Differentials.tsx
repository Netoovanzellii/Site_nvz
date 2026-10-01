import { Layers, Database, Plug, Cog, BrainCircuit } from "lucide-react";
import { Reveal } from "./Reveal";

const stack = [
  { icon: Layers, label: "ERP" },
  { icon: Database, label: "Dados" },
  { icon: Plug, label: "Integrações" },
  { icon: Cog, label: "Automação" },
  { icon: BrainCircuit, label: "IA" },
];

export const Differentials = () => (
  <section className="relative py-24 lg:py-32 border-y border-border/60 overflow-hidden">
    <div className="absolute inset-0 bg-grid opacity-30" aria-hidden />
    <Reveal className="container relative text-center max-w-3xl mx-auto">
      <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.15] tracking-tight">
        Você não precisa trocar tudo{" "}
        <span className="text-gradient">para evoluir</span>
      </h2>
      <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
        Boa parte das empresas já tem ERP, sistemas internos e muitos dados
        guardados. Na maioria das vezes, o problema não é falta de tecnologia.
        É que ela está sendo pouco aproveitada. A NVZ constrói soluções que se
        conectam ao que a empresa já tem, para melhorar os processos sem
        derrubar o que funciona.
      </p>

      <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
        {stack.map((s, i) => (
          <div key={s.label} className="flex items-center gap-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-2 text-sm font-mono text-primary">
              <s.icon className="w-4 h-4" />
              {s.label}
            </div>
            {i < stack.length - 1 && (
              <span className="text-muted-foreground/50">+</span>
            )}
          </div>
        ))}
      </div>
    </Reveal>
  </section>
);
