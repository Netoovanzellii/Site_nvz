import { MessageCircle, Mail } from "lucide-react";
import { WHATSAPP_URL } from "./WhatsAppFloat";
import { ContactForm } from "./ContactForm";
import { Reveal } from "./Reveal";

export const FinalCta = () => {
  return (
    <section id="contato" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-50" aria-hidden />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-primary/10 blur-[140px]" aria-hidden />

      <div className="container relative grid lg:grid-cols-2 gap-12 items-center">
        <Reveal direction="right">
          <h2 className="font-display text-4xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
            Descubra o que sua empresa pode{" "}
            <span className="text-gradient glow-text">automatizar</span>.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-lg leading-relaxed">
            Conte-nos como funciona hoje o seu processo. Vamos identificar
            oportunidades de automação, integração, análise de dados e
            Inteligência Artificial.
          </p>

          <div className="mt-8 space-y-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 rounded-xl border border-border bg-card/60 p-4 hover:border-primary/50 transition-smooth"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">WhatsApp</div>
                <div className="font-semibold">(16) 99787-1568</div>
              </div>
            </a>
            <a
              href="mailto:nvztinfo@gmail.com"
              className="group flex items-center gap-3 rounded-xl border border-border bg-card/60 p-4 hover:border-primary/50 transition-smooth"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">E-mail</div>
                <div className="font-semibold">nvztinfo@gmail.com</div>
              </div>
            </a>
          </div>
        </Reveal>

        <Reveal direction="left" delay={150}>
          <div className="card-glass rounded-3xl p-8 lg:p-10">
            <ContactForm />
          </div>
        </Reveal>
      </div>
    </section>
  );
};
