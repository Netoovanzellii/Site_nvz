import { Search, Microscope, PenTool, Code2, LineChart } from "lucide-react";
import { Reveal } from "./Reveal";

const steps = [
  {
    icon: Search,
    num: "01",
    title: "Entendemos",
    desc: "Conhecemos o processo e identificamos gargalos.",
  },
  {
    icon: Microscope,
    num: "02",
    title: "Analisamos",
    desc: "Olhamos os sistemas e os dados que você já tem.",
  },
  {
    icon: PenTool,
    num: "03",
    title: "Projetamos",
    desc: "Desenhamos a solução que faz mais sentido para o seu caso.",
  },
  {
    icon: Code2,
    num: "04",
    title: "Desenvolvemos",
    desc: "Construímos, integramos e testamos.",
  },
  {
    icon: LineChart,
    num: "05",
    title: "Evoluímos",
    desc: "Acompanhamos os resultados e ajustamos o que for preciso.",
  },
];

export const Process = () => (
  <section id="metodo" className="relative py-24 lg:py-32 border-y border-border/60">
    <div className="container">
      <Reveal className="max-w-2xl mb-16">
        <h2 className="font-display text-4xl lg:text-5xl font-bold tracking-tight">
          Do problema à{" "}
          <span className="text-gradient">solução</span>
        </h2>
        <p className="mt-4 text-muted-foreground text-lg">
          Cinco etapas, para você saber sempre em que pé estamos.
        </p>
      </Reveal>

      <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        <div className="hidden lg:block absolute top-10 left-[8%] right-[8%] h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        {steps.map((s, i) => (
          <Reveal key={s.num} delay={i * 90}>
            <div className="relative card-glass rounded-2xl p-6 h-full">
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl border border-primary/40 bg-card flex items-center justify-center">
                  <s.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="font-mono text-sm text-primary/60">{s.num}</span>
              </div>
              <h3 className="font-display text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {s.desc}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
