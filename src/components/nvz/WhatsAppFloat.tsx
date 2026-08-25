import { MessageCircle } from "lucide-react";

export const WHATSAPP_URL = "https://wa.me/5516997871568?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento.";

export const WhatsAppFloat = () => (
  <a
    href={WHATSAPP_URL}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Falar no WhatsApp"
    className="fixed bottom-6 right-6 z-50 group"
  >
    <span className="absolute inset-0 rounded-full bg-primary/40 animate-ping" />
    <span className="relative flex items-center gap-2 rounded-full bg-primary px-5 py-4 text-primary-foreground font-semibold shadow-glow-strong transition-smooth hover:scale-105">
      <MessageCircle className="h-5 w-5" strokeWidth={2.5} />
      <span className="hidden sm:inline">WhatsApp</span>
    </span>
  </a>
);
