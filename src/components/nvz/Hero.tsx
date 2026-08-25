import { ArrowRight, MessageCircle, Database, Cog, BrainCircuit, TrendingUp, Layers } from "lucide-react";
import { WHATSAPP_URL } from "./WhatsAppFloat";

export const Hero = () => {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16"
    >
      {/* Backgrounds */}
      <div className="absolute inset-0 bg-gradient-hero" aria-hidden />
      <div className="absolute inset-0 bg-grid" aria-hidden />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/10 blur-[140px]" aria-hidden />

      <div className="container relative grid lg:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-xs font-mono text-primary mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-glow" />
            Dados, automação e IA aplicados à sua operação
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-tight">
            Transforme os dados da sua empresa em{" "}
            <span className="text-gradient glow-text">decisões inteligentes</span>.
          </h1>

          <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
            Integrações, automações, Business Intelligence e Inteligência
            Artificial conectados aos sistemas que sua empresa já utiliza —
            sem precisar substituir o ERP.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="#contato"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 font-semibold text-primary-foreground shadow-glow transition-smooth hover:shadow-glow-strong hover:scale-[1.02]"
            >
              Quero transformar minha operação
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#solucoes"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card/50 px-7 py-4 font-semibold text-foreground hover:border-primary/50 hover:text-primary transition-smooth"
            >
              Conheça nossas soluções
            </a>
          </div>

          <div className="mt-10">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-smooth"
            >
              <MessageCircle className="h-4 w-4" />
              Prefere falar direto no WhatsApp?
            </a>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
            {[
              { k: "B2B", v: "foco em empresas industriais" },
              { k: "100%", v: "conectado ao que já existe" },
              { k: "SQL", v: "dados prontos para decisão" },
            ].map((s) => (
              <div key={s.v}>
                <div className="font-display text-2xl font-bold text-primary">
                  {s.k}
                </div>
                <div className="text-xs text-muted-foreground mt-1">{s.v}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Visual */}
        <div className="relative hidden lg:block animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <HeroVisual />
        </div>
      </div>
    </section>
  );
};

const flowSteps = [
  { icon: Layers, label: "ERP" },
  { icon: Database, label: "Dados" },
  { icon: Cog, label: "Automação" },
  { icon: BrainCircuit, label: "Inteligência" },
  { icon: TrendingUp, label: "Resultado" },
];

/**
 * Representação visual do fluxo ERP → Dados → Automação → Inteligência → Resultado.
 */
const HeroVisual = () => (
  <div className="relative max-w-lg mx-auto">
    <div className="absolute inset-0 rounded-full bg-primary/10 blur-[100px]" aria-hidden />

    <div className="relative card-glass rounded-3xl p-6 lg:p-8">
      <div className="flex items-center gap-1.5 mb-6">
        <span className="w-2 h-2 rounded-full bg-destructive/70" />
        <span className="w-2 h-2 rounded-full bg-primary/50" />
        <span className="w-2 h-2 rounded-full bg-primary" />
        <span className="ml-auto text-[10px] font-mono text-muted-foreground">
          fluxo_de_dados.nvz
        </span>
      </div>

      <div className="flex flex-col gap-0">
        {flowSteps.map((step, i) => (
          <div key={step.label}>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 shrink-0 rounded-xl bg-gradient-card border border-primary/30 flex items-center justify-center">
                <step.icon className="w-6 h-6 text-primary" strokeWidth={1.6} />
              </div>
              <div className="flex-1">
                <div className="font-display font-semibold">{step.label}</div>
              </div>
              <span className="font-mono text-[10px] text-muted-foreground">
                0{i + 1}
              </span>
            </div>
            {i < flowSteps.length - 1 && (
              <div className="ml-7 h-6 w-px bg-gradient-to-b from-primary/50 to-primary/10" aria-hidden />
            )}
          </div>
        ))}
      </div>
    </div>

    {/* Floating query card */}
    <div
      className="absolute -bottom-6 -right-6 w-60 rounded-xl border border-border bg-card/90 backdrop-blur p-4 shadow-card animate-float hidden xl:block"
      style={{ animationDelay: "1s" }}
    >
      <div className="text-[10px] font-mono text-muted-foreground mb-2">
        pergunta em linguagem natural
      </div>
      <p className="text-xs leading-relaxed">
        "Quais pedidos estão aguardando faturamento?"
      </p>
    </div>
  </div>
);
