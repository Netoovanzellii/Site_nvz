import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "./Reveal";

export interface FaqItem {
  question: string;
  answer: string;
}

interface FaqProps {
  items: FaqItem[];
  title?: string;
}

export const Faq = ({ items, title = "Perguntas frequentes" }: FaqProps) => (
  <section id="faq" className="relative py-24 lg:py-32 border-t border-border/60">
    <div className="container max-w-3xl">
      <Reveal className="mb-10">
        <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">
          {title}
        </h2>
      </Reveal>
      <Reveal delay={100}>
        <Accordion type="single" collapsible className="card-glass rounded-2xl px-6">
          {items.map((item, i) => (
            <AccordionItem key={item.question} value={`item-${i}`} className="border-border/60">
              <AccordionTrigger className="text-left font-display text-base sm:text-lg hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Reveal>
    </div>
  </section>
);
