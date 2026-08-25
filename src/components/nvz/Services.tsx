import { BarChart3, BrainCircuit, Cog, Plug, Code2, Database, Check, ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

const services = [
  {
    icon: BarChart3,
    title: "Business Intelligence",
    desc: "Dashboards e indicadores para transformar dados operacionais em visão gerencial.",
    points: [
      "Dashboards gerenciais",
      "Indicadores de vendas, estoque e produção",
      "Relatórios automatizados",
    ],
  },
  {
    icon: BrainCircuit,
    title: "Inteligência Artificial",
    desc: "Assistentes inteligentes conectados aos dados e processos da empresa.",
    points: [
      "Consultas em linguagem natural",
      "IA conectada ao ERP e a outras bases",
      "Respostas baseadas em dados reais",
    ],
    highlight: true,
  },
  {
    icon: Cog,
    title: "Automação",
    desc: "Automatização de tarefas e processos repetitivos.",
    points: [
      "Eliminação de tarefas manuais",
      "Rotinas entre sistemas e planilhas",
      "Processos mais rápidos e confiáveis",
    ],
  },
  {
    icon: Plug,
    title: "Integração de Sistemas",
    desc: "Conexão entre ERP, APIs, sistemas internos e ferramentas externas.",
    points: [
      "Integração com ERPs (incluindo SECTRA)",
      "Conexão via APIs",
      "Sistemas que passam a conversar entre si",
    ],
  },
  {
    icon: Code2,
    title: "Desenvolvimento de Sistemas",
    desc: "Aplicações web personalizadas para necessidades específicas.",
    points: [
      "Sistemas sob medida",
      "Portais e ferramentas internas",
      "Soluções conectadas ao ambiente atual",
    ],
  },
  {
    icon: Database,
    title: "Dados & SQL",
    desc: "Consultas, relatórios, estruturas e soluções para exploração dos dados empresariais.",
    points: [
      "Consultas e relatórios em SQL Server",
      "Modelagem de dados",
      "Estruturas para BI e IA",
    ],
  },
];

export const Services = () => (
  <section id="solucoes" className="relative py-24 lg:py-32">
    <div className="container">
      <Reveal className="max-w-2xl mb-16">
        <h2 className="font-display text-4xl lg:text-5xl font-bold tracking-tight">
          Soluções para transformar{" "}
          <span className="text-gradient">sua operação</span>.
        </h2>
        <p className="mt-4 text-muted-foreground text-lg">
          Seis frentes que se complementam para transformar dados e processos
          em automação, informação e resultado — aproveitando os sistemas que
          sua empresa já utiliza.
        </p>
      </Reveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={i * 80}>
            <article
              className={`card-glass rounded-2xl p-7 flex flex-col h-full ${
                s.highlight ? "border-primary/40 shadow-card" : ""
              }`}
            >
              <div className="flex items-center justify-between mb-5">
                <div className="w-11 h-11 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow">
                  <s.icon className="w-5 h-5 text-primary-foreground" strokeWidth={2} />
                </div>
                {s.highlight && (
                  <span className="text-[10px] font-mono uppercase tracking-widest text-primary border border-primary/40 rounded-full px-2 py-1">
                    Em destaque
                  </span>
                )}
              </div>

              <h3 className="font-display text-xl font-bold">{s.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                {s.desc}
              </p>

              <ul className="mt-5 space-y-2 flex-1">
                {s.points.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-sm">
                    <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contato"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary group"
              >
                Quero conhecer a solução
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
