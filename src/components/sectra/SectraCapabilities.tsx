import { BarChart3, BrainCircuit, Cog, Plug, Database, MonitorSmartphone } from "lucide-react";
import { Reveal } from "@/components/nvz/Reveal";

const items = [
  {
    icon: BarChart3,
    title: "BI e indicadores",
    desc: "Dashboards gerenciais com dados de vendas, estoque, compras, produção e financeiro do SECTRA.",
  },
  {
    icon: BrainCircuit,
    title: "Inteligência Artificial",
    desc: "Consultas em linguagem natural sobre os dados do ERP, sem precisar montar relatórios manualmente.",
  },
  {
    icon: Cog,
    title: "Automação",
    desc: "Rotinas que hoje dependem de tarefas manuais passam a rodar automaticamente.",
  },
  {
    icon: Plug,
    title: "Integrações",
    desc: "Conexão do SECTRA com e-commerce, apps internos, planilhas e outras ferramentas via API.",
  },
  {
    icon: Database,
    title: "Dados e SQL",
    desc: "Consultas, relatórios e estruturas de dados otimizadas em SQL Server para uso analítico.",
  },
  {
    icon: MonitorSmartphone,
    title: "Sistemas personalizados",
    desc: "Aplicações web específicas, conectadas ao ambiente SECTRA da sua empresa.",
  },
];

export const SectraCapabilities = () => (
  <section id="solucoes-sectra" className="relative py-24 lg:py-32 border-b border-border/60">
    <div className="container">
      <Reveal className="max-w-2xl mb-14">
        <span className="font-mono text-xs text-primary uppercase tracking-widest">
          // O que a NVZ pode fazer
        </span>
        <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
          Soluções complementares ao seu SECTRA
        </h2>
        <p className="mt-4 text-muted-foreground text-lg leading-relaxed max-w-2xl">
          Trabalhamos em cima da estrutura de dados que o SECTRA já organiza,
          desenvolvendo camadas adicionais de automação, inteligência e
          integração — sem alterar o funcionamento do ERP.
        </p>
      </Reveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((it, i) => (
          <Reveal key={it.title} delay={i * 70}>
            <div className="card-glass rounded-2xl p-6 h-full">
              <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-4">
                <it.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">{it.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
