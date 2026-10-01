import { BarChart3, BrainCircuit, Cog, Plug, Code2, Database, Check, ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

const services = [
  {
    icon: BarChart3,
    title: "Business Intelligence",
    desc: "Painéis e indicadores para você acompanhar a operação sem montar relatório na mão.",
    points: [
      "Painéis para a gestão",
      "Indicadores de vendas, estoque e produção",
      "Relatórios que se atualizam sozinhos",
    ],
  },
  {
    icon: BrainCircuit,
    title: "Inteligência Artificial",
    desc: "Um assistente que responde perguntas usando os dados da sua empresa.",
    points: [
      "Perguntas em português comum",
      "IA conectada ao ERP e a outras bases",
      "Respostas com base em números reais",
    ],
    highlight: true,
  },
  {
    icon: Cog,
    title: "Automação",
    desc: "Tire do seu time as tarefas repetitivas do dia a dia.",
    points: [
      "Menos trabalho manual",
      "Rotinas entre sistemas e planilhas",
      "Menos erro e mais agilidade",
    ],
  },
  {
    icon: Plug,
    title: "Integração de Sistemas",
    desc: "Faz o ERP, os sistemas internos e as ferramentas externas trocarem dados entre si.",
    points: [
      "Integração com ERPs (incluindo SECTRA)",
      "Conexão via APIs",
      "Fim da digitação repetida em vários sistemas",
    ],
  },
  {
    icon: Code2,
    title: "Desenvolvimento de Sistemas",
    desc: "Sistemas web feitos para o que a sua empresa realmente precisa.",
    points: [
      "Sistemas sob medida",
      "Portais e ferramentas internas",
      "Tudo ligado ao que você já usa",
    ],
  },
  {
    icon: Database,
    title: "Dados & SQL",
    desc: "Consultas, relatórios e organização dos dados para você enxergar melhor o negócio.",
    points: [
      "Consultas e relatórios em SQL Server",
      "Modelagem de dados",
      "Base pronta para BI e IA",
    ],
  },
];

export const Services = () => (
  <section id="solucoes" className="relative py-24 lg:py-32">
    <div className="container">
      <Reveal className="max-w-2xl mb-16">
        <h2 className="font-display text-4xl lg:text-5xl font-bold tracking-tight">
          O que a NVZ pode fazer{" "}
          <span className="text-gradient">pela sua empresa</span>
        </h2>
        <p className="mt-4 text-muted-foreground text-lg">
          Seis frentes que funcionam bem juntas ou separadas, sempre em cima
          dos sistemas que sua empresa já usa.
        </p>
      </Reveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
                Falar sobre isso
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
