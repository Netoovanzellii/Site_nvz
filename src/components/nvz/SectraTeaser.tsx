import { Link } from "react-router-dom";
import { BarChart3, BrainCircuit, Cog, Plug, Database, MonitorSmartphone, ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

const cards = [
  {
    icon: BarChart3,
    title: "BI e indicadores",
    desc: "Transforme os dados do SECTRA em dashboards gerenciais.",
  },
  {
    icon: BrainCircuit,
    title: "Inteligência Artificial",
    desc: "Consulte informações do ERP utilizando linguagem natural.",
  },
  {
    icon: Cog,
    title: "Automação",
    desc: "Automatize processos que ainda dependem de tarefas manuais.",
  },
  {
    icon: Plug,
    title: "Integrações",
    desc: "Conecte o SECTRA a outros sistemas, APIs e ferramentas.",
  },
  {
    icon: Database,
    title: "Dados e SQL",
    desc: "Crie consultas, relatórios e estruturas para extrair melhor os dados.",
  },
  {
    icon: MonitorSmartphone,
    title: "Sistemas personalizados",
    desc: "Desenvolva aplicações específicas conectadas ao ambiente da empresa.",
  },
];

export const SectraTeaser = () => (
  <section id="sectra" className="relative py-24 lg:py-32 border-y border-border/60">
    <div className="container">
      <Reveal className="max-w-2xl mb-14">
        <span className="font-mono text-xs text-primary uppercase tracking-widest">
          // Nicho estratégico
        </span>
        <h2 className="mt-4 font-display text-4xl lg:text-5xl font-bold tracking-tight">
          Sua empresa utiliza <span className="text-gradient">SECTRA</span>?
        </h2>
        <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
          Seu ERP já concentra uma grande quantidade de informações sobre
          vendas, estoque, compras, produção e financeiro. A NVZ desenvolve
          soluções complementares para transformar esses dados em informação
          útil, automação e inteligência para o negócio.
        </p>
      </Reveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((c, i) => (
          <Reveal key={c.title} delay={i * 70}>
            <div className="card-glass rounded-2xl p-6 h-full">
              <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-4">
                <c.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">{c.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-12 flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-8" delay={200}>
        <Link
          to="/sectra"
          className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 font-semibold text-primary-foreground shadow-glow transition-smooth hover:shadow-glow-strong w-fit"
        >
          Quero explorar meu SECTRA
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
        <p className="text-xs text-muted-foreground max-w-md">
          A NVZ não substitui o SECTRA nem possui parceria oficial com a
          SECTRA. Desenvolvemos soluções complementares que aproveitam melhor
          o ERP que sua empresa já utiliza.
        </p>
      </Reveal>
    </div>
  </section>
);
