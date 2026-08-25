import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/components/nvz/WhatsAppFloat";

export const SectraHero = () => (
  <section className="relative min-h-[80vh] flex items-center overflow-hidden pt-28 pb-16">
    <div className="absolute inset-0 bg-gradient-hero" aria-hidden />
    <div className="absolute inset-0 bg-grid" aria-hidden />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/10 blur-[140px]" aria-hidden />

    <div className="container relative max-w-3xl">
      <nav aria-label="breadcrumb" className="mb-6 text-xs font-mono text-muted-foreground">
        <Link to="/" className="hover:text-primary transition-smooth">
          NVZ
        </Link>
        <span className="mx-2">/</span>
        <span className="text-primary">SECTRA</span>
      </nav>

      <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-xs font-mono text-primary mb-6">
        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-glow" />
        Empresas que utilizam SECTRA ERP
      </div>

      <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.08] tracking-tight">
        Soluções para empresas que utilizam{" "}
        <span className="text-gradient glow-text">SECTRA ERP</span>
      </h1>

      <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
        A NVZ tem experiência prática no ambiente SECTRA e desenvolve
        soluções complementares ao ERP: BI, automação, integrações e
        Inteligência Artificial conectadas aos dados que sua empresa já
        possui — sem substituir o sistema que já funciona.
      </p>

      <div className="mt-10 flex flex-col sm:flex-row gap-4">
        <a
          href="#contato-sectra"
          className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 font-semibold text-primary-foreground shadow-glow transition-smooth hover:shadow-glow-strong hover:scale-[1.02]"
        >
          Quero explorar meu SECTRA
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card/50 px-7 py-4 font-semibold text-foreground hover:border-primary/50 hover:text-primary transition-smooth"
        >
          <MessageCircle className="h-4 w-4" />
          Falar no WhatsApp
        </a>
      </div>

      <p className="mt-6 text-xs text-muted-foreground max-w-xl">
        A NVZ não substitui o SECTRA e não possui parceria oficial com a
        SECTRA. Atuamos com soluções complementares, desenvolvidas de forma
        independente.
      </p>
    </div>
  </section>
);
