import { Star, Quote } from "lucide-react";

const items = [
  {
    quote:
      "A NvZ entendeu o nosso processo antes de propor qualquer tecnologia. O resultado foi um sistema enxuto que realmente reduziu retrabalho no dia a dia.",
    name: "Rafael M.",
    role: "Diretor de Operações",
  },
  {
    quote:
      "Atendimento próximo, sem enrolação. Em poucas semanas tínhamos uma plataforma funcional e um plano claro para os próximos passos.",
    name: "Camila S.",
    role: "Sócia · E-commerce",
  },
  {
    quote:
      "O que mais nos surpreendeu foi a postura estratégica. Não entregaram só código entregaram um parceiro.",
    name: "Eduardo L.",
    role: "Gerente de TI",
  },
];

export const Testimonials = () => (
  <section id="depoimentos" className="relative py-24 lg:py-32">
    <div className="container">
      <div className="max-w-2xl mb-14">
        <span className="font-mono text-xs text-primary uppercase tracking-widest">
          // Depoimentos
        </span>
        <h2 className="mt-4 font-display text-4xl lg:text-5xl font-bold tracking-tight">
          Quem já trabalhou com a gente{" "}
          <span className="text-gradient">conta.</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {items.map((t, i) => (
          <figure
            key={t.name}
            className="card-glass rounded-2xl p-8 relative animate-fade-up"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/20" />
            <div className="flex gap-0.5 mb-4">
              {[...Array(5)].map((_, idx) => (
                <Star key={idx} className="w-4 h-4 fill-primary text-primary" />
              ))}
            </div>
            <blockquote className="text-foreground/90 leading-relaxed">
              "{t.quote}"
            </blockquote>
            <figcaption className="mt-6 pt-6 border-t border-border">
              <div className="font-semibold">{t.name}</div>
              <div className="text-xs text-muted-foreground mt-0.5">
                {t.role}
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  </section>
);
