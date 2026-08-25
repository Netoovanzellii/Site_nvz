import { Bot, User } from "lucide-react";

export interface ChatExchange {
  question: string;
  answer: string;
}

const defaultExchanges: ChatExchange[] = [
  {
    question: "Quais pedidos estão aguardando faturamento?",
    answer: "Existem 37 pedidos aguardando faturamento, totalizando R$ 428.750,00.",
  },
  {
    question: "Qual fornecedor teve o maior aumento de preço nos últimos 3 meses?",
    answer:
      "O fornecedor X apresentou aumento médio de 18,4% no período, principalmente nos materiais Y e Z.",
  },
];

interface ChatDemoProps {
  exchanges?: ChatExchange[];
  source?: string;
}

/**
 * Interface simulando uma conversa com IA conectada aos dados da empresa.
 * Os exemplos são ilustrativos — não representam dados reais de clientes.
 */
export const ChatDemo = ({ exchanges = defaultExchanges, source = "dados do ERP" }: ChatDemoProps) => (
  <div className="card-glass rounded-3xl overflow-hidden">
    <div className="flex items-center gap-2 border-b border-border px-5 py-4">
      <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center shadow-glow shrink-0">
        <Bot className="w-4 h-4 text-primary-foreground" />
      </div>
      <div>
        <div className="text-sm font-semibold">Assistente NVZ</div>
        <div className="text-[11px] text-muted-foreground font-mono">
          conectado a {source} · exemplo ilustrativo
        </div>
      </div>
      <span className="ml-auto w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
    </div>

    <div className="p-5 space-y-6">
      {exchanges.map((ex, i) => (
        <div key={i} className="space-y-3">
          <div className="flex items-start gap-3 justify-end">
            <div className="max-w-[85%] rounded-2xl rounded-tr-sm bg-primary/10 border border-primary/20 px-4 py-3 text-sm">
              {ex.question}
            </div>
            <div className="w-7 h-7 rounded-full bg-secondary flex items-center justify-center shrink-0 mt-0.5">
              <User className="w-3.5 h-3.5 text-muted-foreground" />
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-7 h-7 rounded-full bg-gradient-primary flex items-center justify-center shrink-0 mt-0.5">
              <Bot className="w-3.5 h-3.5 text-primary-foreground" />
            </div>
            <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-card border border-border px-4 py-3 text-sm text-foreground/90">
              {ex.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);
