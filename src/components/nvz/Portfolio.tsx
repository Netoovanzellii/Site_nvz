import { Lock } from "lucide-react";
import { Reveal } from "./Reveal";

const projects = [
  {
    tag: "Inteligência Artificial · Integração com ERP",
    title: "Assistente de IA conectado ao ERP",
    problem: "Dificuldade para consultar informações do ERP de forma rápida.",
    solution: "API + banco de dados + Inteligência Artificial.",
    result: "Consultas em linguagem natural sobre dados empresariais.",
  },
  {
    tag: "Business Intelligence · Compras",
    title: "Dashboard de Compras",
    problem: "Dificuldade para acompanhar preços e fornecedores.",
    solution: "Power BI conectado aos dados empresariais.",
    result: "Visão de preços, fornecedores, economia e evolução das compras.",
  },
  {
    tag: "Automação de processos",
    title: "Projeto confidencial",
    problem: "Etapas manuais em um processo operacional recorrente.",
    solution: "Automação desenvolvida sob medida, integrada aos sistemas já utilizados pela empresa.",
    result: "Detalhes do projeto sob confidencialidade — tecnologia e problema resolvido podem ser apresentados em conversa.",
    confidential: true,
  },
];

export const Portfolio = () => (
  <section id="cases" className="relative py-24 lg:py-32">
    <div className="container">
      <Reveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
        <div className="max-w-2xl">
          <h2 className="font-display text-4xl lg:text-5xl font-bold tracking-tight">
            Tecnologia aplicada a{" "}
            <span className="text-gradient">problemas reais.</span>
          </h2>
        </div>
        <p className="text-muted-foreground max-w-sm">
          Exemplos de como a NVZ traduz desafios de negócio em soluções
          técnicas concretas.
        </p>
      </Reveal>

      <div className="grid lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 100}>
            <article className="card-glass rounded-3xl p-8 relative overflow-hidden h-full flex flex-col">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl rounded-full" aria-hidden />
              <div className="relative flex flex-col h-full">
                <div className="flex items-center justify-between mb-5">
                  <span className="text-xs font-mono text-primary uppercase tracking-wider">
                    {p.tag}
                  </span>
                  {p.confidential && <Lock className="w-4 h-4 text-muted-foreground" />}
                </div>
                <h3 className="font-display text-xl font-bold leading-tight">
                  {p.title}
                </h3>

                <div className="mt-5 space-y-3 text-sm leading-relaxed flex-1">
                  <div>
                    <span className="font-mono text-[11px] uppercase text-muted-foreground tracking-wider">
                      Problema
                    </span>
                    <p className="mt-1 text-foreground/90">{p.problem}</p>
                  </div>
                  <div>
                    <span className="font-mono text-[11px] uppercase text-primary tracking-wider">
                      Solução
                    </span>
                    <p className="mt-1 text-foreground/90">{p.solution}</p>
                  </div>
                  <div>
                    <span className="font-mono text-[11px] uppercase text-muted-foreground tracking-wider">
                      Resultado
                    </span>
                    <p className="mt-1 text-foreground/90">{p.result}</p>
                  </div>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
