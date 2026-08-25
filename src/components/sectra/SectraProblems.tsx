import { FileSpreadsheet, Clock, SearchX, Split } from "lucide-react";
import { Reveal } from "@/components/nvz/Reveal";

const problems = [
  {
    icon: FileSpreadsheet,
    title: "Dados espalhados em planilhas",
    desc: "Informações que já existem no SECTRA acabam sendo exportadas e retrabalhadas manualmente em planilhas paralelas.",
  },
  {
    icon: Clock,
    title: "Relatórios demorados",
    desc: "Gerar uma visão gerencial de vendas, estoque ou compras exige tempo e depende de poucas pessoas.",
  },
  {
    icon: SearchX,
    title: "Dificuldade para encontrar informação",
    desc: "Consultar um dado específico do ERP muitas vezes exige conhecimento técnico ou depender da TI.",
  },
  {
    icon: Split,
    title: "Sistemas que não conversam",
    desc: "O SECTRA não troca dados automaticamente com outras ferramentas usadas pela empresa.",
  },
];

export const SectraProblems = () => (
  <section className="relative py-24 lg:py-32 border-b border-border/60">
    <div className="container">
      <Reveal className="max-w-2xl mb-14">
        <span className="font-mono text-xs text-primary uppercase tracking-widest">
          // Cenário comum
        </span>
        <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
          Problemas comuns em empresas que usam SECTRA
        </h2>
        <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
          O ERP concentra dados valiosos, mas nem sempre é fácil transformar
          essas informações em decisões rápidas. Alguns padrões se repetem em
          empresas industriais que já utilizam o SECTRA.
        </p>
      </Reveal>

      <div className="grid sm:grid-cols-2 gap-6">
        {problems.map((p, i) => (
          <Reveal key={p.title} delay={i * 80}>
            <div className="card-glass rounded-2xl p-6 h-full flex gap-4">
              <div className="w-11 h-11 shrink-0 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center">
                <p.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-lg mb-1.5">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
