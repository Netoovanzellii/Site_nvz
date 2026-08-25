import { Reveal } from "./Reveal";

export const ImpactBanner = () => (
  <section className="relative py-24 overflow-hidden">
    <div className="absolute inset-0 bg-grid opacity-60" aria-hidden />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px]" aria-hidden />
    <Reveal className="container relative text-center max-w-4xl">
      <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
        Transformamos problemas em{" "}
        <span className="text-gradient glow-text">soluções digitais</span>{" "}
        eficientes.
      </h2>
      <p className="mt-6 text-lg text-muted-foreground">
        Tecnologia, para nós, não é apenas código. É o meio para reduzir custos,
        tomar decisões melhores e criar vantagem competitiva real.
      </p>
    </Reveal>
  </section>
);
