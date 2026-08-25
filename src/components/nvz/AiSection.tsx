import { ChatDemo } from "./ChatDemo";
import { Reveal } from "./Reveal";
import { Database, Sparkles } from "lucide-react";

export const AiSection = () => (
  <section id="ia" className="relative py-24 lg:py-32 overflow-hidden">
    <div className="absolute inset-0 bg-grid opacity-40" aria-hidden />

    <div className="container relative grid lg:grid-cols-2 gap-12 items-center">
      <Reveal direction="right">
        <span className="inline-flex items-center gap-2 font-mono text-xs text-primary uppercase tracking-widest">
          <Sparkles className="w-3.5 h-3.5" />
          Inteligência Artificial
        </span>
        <h2 className="mt-4 font-display text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
          Sua empresa já tem os dados.
          <br />
          Agora <span className="text-gradient">converse com eles</span>.
        </h2>
        <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-lg">
          Imagine perguntar sobre vendas, estoque, compras ou produção usando
          linguagem natural e receber respostas baseadas nos dados reais da
          sua empresa.
        </p>

        <div className="mt-8 flex items-start gap-3 rounded-xl border border-border bg-card/50 p-4 max-w-lg">
          <Database className="w-5 h-5 text-primary shrink-0 mt-0.5" />
          <p className="text-sm text-muted-foreground leading-relaxed">
            As respostas vêm dos sistemas que sua empresa já utiliza — ERP,
            planilhas e bancos de dados internos. A IA não substitui seus
            dados: ela os torna acessíveis por meio de perguntas simples.
          </p>
        </div>

        <a
          href="#contato"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 font-semibold text-primary-foreground shadow-glow transition-smooth hover:shadow-glow-strong"
        >
          Quero conhecer a solução
        </a>
      </Reveal>

      <Reveal direction="left" delay={150}>
        <ChatDemo />
      </Reveal>
    </div>
  </section>
);
