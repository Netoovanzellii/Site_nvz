import { useState } from "react";
import { ArrowRight, Loader2, CheckCircle2 } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const erpOptions = [
  "SECTRA",
  "TOTVS",
  "SAP",
  "Senior",
  "Linx",
  "Outro",
  "Não possui / Não sei",
];

interface ContactFormProps {
  defaultErp?: string;
  title?: string;
}

const initialForm = {
  name: "",
  company: "",
  role: "",
  email: "",
  whatsapp: "",
  erp: "",
  message: "",
};

export const ContactForm = ({ defaultErp, title = "Solicitar contato" }: ContactFormProps) => {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [form, setForm] = useState({ ...initialForm, erp: defaultErp ?? "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // Envio simulado — conectar a um backend/CRM real antes da publicação.
    setTimeout(() => setStatus("sent"), 900);
  };

  if (status === "sent") {
    return (
      <div className="text-center py-10">
        <CheckCircle2 className="w-14 h-14 text-primary mx-auto mb-4" />
        <h3 className="font-display text-2xl font-bold">Mensagem enviada!</h3>
        <p className="mt-2 text-muted-foreground">
          Obrigado pelo contato. Retornamos em até 1 dia útil.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="space-y-5" aria-label={title}>
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
            Nome
          </label>
          <input
            id="name"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="mt-2 w-full rounded-xl border border-border bg-background/50 px-4 py-3 text-foreground outline-none focus:border-primary transition-smooth"
            placeholder="Seu nome"
            autoComplete="name"
          />
        </div>
        <div>
          <label htmlFor="company" className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
            Empresa
          </label>
          <input
            id="company"
            required
            value={form.company}
            onChange={(e) => setForm({ ...form, company: e.target.value })}
            className="mt-2 w-full rounded-xl border border-border bg-background/50 px-4 py-3 text-foreground outline-none focus:border-primary transition-smooth"
            placeholder="Nome da empresa"
            autoComplete="organization"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="role" className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
            Cargo
          </label>
          <input
            id="role"
            value={form.role}
            onChange={(e) => setForm({ ...form, role: e.target.value })}
            className="mt-2 w-full rounded-xl border border-border bg-background/50 px-4 py-3 text-foreground outline-none focus:border-primary transition-smooth"
            placeholder="Ex: Gerente de TI"
            autoComplete="organization-title"
          />
        </div>
        <div>
          <label htmlFor="whatsapp" className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
            WhatsApp
          </label>
          <input
            id="whatsapp"
            required
            type="tel"
            value={form.whatsapp}
            onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
            className="mt-2 w-full rounded-xl border border-border bg-background/50 px-4 py-3 text-foreground outline-none focus:border-primary transition-smooth"
            placeholder="(00) 00000-0000"
            autoComplete="tel"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
          E-mail
        </label>
        <input
          id="email"
          required
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="mt-2 w-full rounded-xl border border-border bg-background/50 px-4 py-3 text-foreground outline-none focus:border-primary transition-smooth"
          placeholder="voce@empresa.com"
          autoComplete="email"
        />
      </div>

      <div>
        <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
          Qual sistema/ERP sua empresa utiliza?
        </span>
        <Select value={form.erp} onValueChange={(v) => setForm({ ...form, erp: v })}>
          <SelectTrigger className="mt-2 h-auto rounded-xl border-border bg-background/50 px-4 py-3 text-foreground">
            <SelectValue placeholder="Selecione um sistema" />
          </SelectTrigger>
          <SelectContent>
            {erpOptions.map((opt) => (
              <SelectItem key={opt} value={opt}>
                {opt}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div>
        <label htmlFor="message" className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
          Conte brevemente o que você gostaria de melhorar
        </label>
        <textarea
          id="message"
          required
          rows={4}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="mt-2 w-full rounded-xl border border-border bg-background/50 px-4 py-3 text-foreground outline-none focus:border-primary transition-smooth resize-none"
          placeholder="Ex: automatizar relatórios de estoque, consultar dados do ERP por IA, integrar sistemas..."
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-4 font-semibold text-primary-foreground shadow-glow transition-smooth hover:shadow-glow-strong disabled:opacity-60"
      >
        {status === "sending" ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Enviando...
          </>
        ) : (
          <>
            Quero conversar sobre meu projeto
            <ArrowRight className="w-4 h-4" />
          </>
        )}
      </button>
      <p className="text-xs text-center text-muted-foreground">
        Retorno em até 1 dia útil.
      </p>
    </form>
  );
};
