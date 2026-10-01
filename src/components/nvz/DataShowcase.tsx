import { useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Sparkles,
  Check,
  X,
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  Clock,
  CheckCircle2,
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { ChatDemo } from "./ChatDemo";
import { Reveal } from "./Reveal";

const MockFrame = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <div className="h-full w-full rounded-2xl border border-border bg-background/60 p-5 flex flex-col">
    <div className="flex items-center gap-1.5 mb-5 shrink-0">
      <span className="w-2 h-2 rounded-full bg-destructive/70" />
      <span className="w-2 h-2 rounded-full bg-primary/50" />
      <span className="w-2 h-2 rounded-full bg-primary" />
      <span className="ml-auto text-[10px] font-mono text-muted-foreground">{label}</span>
    </div>
    <div className="flex-1 flex flex-col justify-center">{children}</div>
  </div>
);

const Sparkline = ({ points }: { points: string }) => (
  <svg viewBox="0 0 60 20" className="w-12 h-5 text-primary/50 shrink-0" preserveAspectRatio="none">
    <polyline points={points} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const SpreadsheetToChart = () => (
  <MockFrame label="planilha_para_painel">
    <div className="flex items-center gap-3">
      <div className="flex-1 rounded-md border border-border overflow-hidden">
        <div className="grid grid-cols-[14px_1fr_1fr_1fr] bg-secondary/70">
          <div className="border-r border-b border-border" />
          {["A", "B", "C"].map((h) => (
            <span
              key={h}
              className="text-[8px] font-mono text-muted-foreground text-center py-1 border-r border-b border-border last:border-r-0"
            >
              {h}
            </span>
          ))}
        </div>
        {[
          ["128", "94", "212"],
          ["76", "150", "88"],
          ["203", "61", "145"],
          ["99", "180", "72"],
        ].map((row, r) => (
          <div key={r} className={`grid grid-cols-[14px_1fr_1fr_1fr] ${r % 2 ? "bg-card/40" : ""}`}>
            <span className="text-[8px] font-mono text-muted-foreground/60 text-center py-1 border-r border-b border-border">
              {r + 1}
            </span>
            {row.map((val, c) => (
              <span
                key={c}
                className="text-[9px] font-mono text-muted-foreground text-right pr-1.5 py-1 border-r border-b border-border last:border-r-0"
              >
                {val}
              </span>
            ))}
          </div>
        ))}
      </div>
      <ArrowRight className="w-5 h-5 text-primary shrink-0" />
      <div className="flex-1">
        <div className="relative h-20 border-b border-border">
          <div className="absolute inset-x-0 top-1/4 border-t border-border/50" />
          <div className="absolute inset-x-0 top-2/4 border-t border-border/50" />
          <div className="absolute inset-x-0 top-3/4 border-t border-border/50" />
          <div className="relative h-full flex items-end gap-1.5">
            {[40, 70, 55, 90, 65].map((h, i) => (
              <div key={i} className="flex-1 rounded-t bg-gradient-primary" style={{ height: `${h}%` }} />
            ))}
          </div>
        </div>
        <div className="flex gap-1.5 mt-1">
          {["J", "F", "M", "A", "M"].map((m) => (
            <span key={m} className="flex-1 text-center text-[9px] font-mono text-muted-foreground/70">
              {m}
            </span>
          ))}
        </div>
      </div>
    </div>
  </MockFrame>
);

const DashboardMock = () => (
  <MockFrame label="dashboard.nvz">
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <span className="text-[10px] text-muted-foreground">Vendas · últimos 6 meses</span>
        <span className="flex items-center gap-1 text-[9px] text-muted-foreground/70">
          <span className="w-1.5 h-1.5 rounded-full bg-primary" /> realizado
        </span>
      </div>
      <div className="grid grid-cols-2 gap-2.5">
        {[
          { label: "Vendas", value: "R$ 128k", delta: "+12%" },
          { label: "Estoque", value: "1.240", delta: "-4%" },
          { label: "Pedidos", value: "87", delta: "+8%" },
          { label: "Margem", value: "24%", delta: "+2pp" },
        ].map((t) => (
          <div key={t.label} className="rounded-xl border border-border bg-card/60 p-2.5">
            <div className="text-[10px] text-muted-foreground">{t.label}</div>
            <div className="flex items-baseline gap-1.5">
              <div className="font-display font-bold text-base">{t.value}</div>
              <span className="text-[10px] text-primary">{t.delta}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="relative h-12 border-b border-border">
        <div className="absolute inset-x-0 top-1/3 border-t border-dashed border-muted-foreground/40" />
        <div className="relative h-full flex items-end gap-1.5">
          {[30, 55, 40, 80, 60, 95, 70].map((h, i) => (
            <div key={i} className="flex-1 rounded-t bg-primary/70" style={{ height: `${h}%` }} />
          ))}
        </div>
      </div>
    </div>
  </MockFrame>
);

const KpiMock = () => (
  <MockFrame label="indicadores">
    <div className="grid grid-cols-1 gap-3">
      {[
        { label: "Faturamento", value: "+18%", Icon: TrendingUp, points: "0,16 10,14 20,15 30,9 40,10 50,4 60,6" },
        { label: "Custo operacional", value: "-9%", Icon: TrendingDown, points: "0,4 10,6 20,5 30,10 40,9 50,14 60,16" },
        { label: "Tempo de resposta", value: "-32%", Icon: TrendingDown, points: "0,2 10,5 20,4 30,9 40,11 50,15 60,17" },
      ].map((k) => (
        <div key={k.label} className="rounded-xl border border-border bg-card/60 px-3.5 py-2.5">
          <div className="flex items-center justify-between gap-2.5">
            <span className="text-xs text-muted-foreground">{k.label}</span>
            <Sparkline points={k.points} />
            <span className="flex items-center gap-1.5 font-display font-bold text-primary shrink-0">
              <k.Icon className="w-4 h-4" />
              {k.value}
            </span>
          </div>
          <div className="text-[9px] text-muted-foreground/60 mt-0.5">vs. mês anterior</div>
        </div>
      ))}
    </div>
  </MockFrame>
);

const AutomationMock = () => {
  const manualSteps = ["Exportar", "Ajustar", "Reimportar"];
  return (
    <MockFrame label="automacao">
      <div className="flex items-center justify-center gap-1.5">
        {manualSteps.map((step, i) => (
          <div key={step} className="flex items-center gap-1.5">
            <div className="flex flex-col items-center gap-1.5">
              <div className="w-8 h-8 rounded-full border border-border bg-card flex items-center justify-center">
                <X className="w-3.5 h-3.5 text-muted-foreground" />
              </div>
              <span className="text-[9px] text-muted-foreground">{step}</span>
            </div>
            <div className="w-3 border-t border-dashed border-border mb-4" />
          </div>
        ))}
        <ArrowRight className="w-3.5 h-3.5 text-muted-foreground mb-4 shrink-0" />
        <div className="flex flex-col items-center gap-1.5">
          <div className="w-8 h-8 rounded-full border border-primary bg-primary/10 flex items-center justify-center">
            <Check className="w-3.5 h-3.5 text-primary" />
          </div>
          <span className="text-[9px] text-primary font-semibold">Automático</span>
        </div>
      </div>
      <div className="mt-6 flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
        <Clock className="w-3.5 h-3.5" />
        Toda sexta-feira, às 6h
      </div>
    </MockFrame>
  );
};

const alertItems = [
  {
    Icon: AlertTriangle,
    title: "Estoque baixo",
    desc: "Produto A abaixo do mínimo",
    time: "há 2 min",
    border: "border-l-amber-500/70",
    color: "text-amber-500",
  },
  {
    Icon: Clock,
    title: "Pedido atrasado",
    desc: "Cliente X aguardando há 5 dias",
    time: "hoje 09:14",
    border: "border-l-destructive/70",
    color: "text-destructive",
  },
  {
    Icon: CheckCircle2,
    title: "Meta batida",
    desc: "Vendas de outubro superaram a meta",
    time: "ontem",
    border: "border-l-primary/70",
    color: "text-primary",
  },
];

const AlertsMock = () => (
  <MockFrame label="alertas">
    <div className="space-y-2.5">
      {alertItems.map((a) => (
        <div
          key={a.title}
          className={`flex items-start gap-3 rounded-r-xl border border-l-2 border-border bg-card/60 p-3 ${a.border}`}
        >
          <a.Icon className={`w-4 h-4 mt-0.5 shrink-0 ${a.color}`} />
          <div className="flex-1 min-w-0">
            <div className="text-sm font-semibold truncate">{a.title}</div>
            <div className="text-xs text-muted-foreground truncate">{a.desc}</div>
          </div>
          <span className="text-[10px] text-muted-foreground shrink-0 font-mono">{a.time}</span>
        </div>
      ))}
    </div>
  </MockFrame>
);

const slides = [
  {
    title: "Da planilha para o painel",
    desc: "Dados que hoje vivem espalhados em planilhas passam a alimentar um painel único, sempre atualizado.",
    visual: <SpreadsheetToChart />,
  },
  {
    title: "Dashboard personalizado",
    desc: "Indicadores de vendas, estoque, compras e produção reunidos do jeito que faz sentido para a sua operação.",
    visual: <DashboardMock />,
  },
  {
    title: "Indicadores em tempo real",
    desc: "Acompanhe o que mais importa sem esperar o fechamento do mês.",
    visual: <KpiMock />,
  },
  {
    title: "Um assistente para os seus dados",
    desc: "Pergunte do jeito que você fala e receba a resposta com base nos números reais da empresa.",
    visual: (
      <div className="h-full w-full flex flex-col justify-center">
        <ChatDemo
          exchanges={[
            {
              question: "Qual produto mais vendeu essa semana?",
              answer: "O produto X vendeu 312 unidades, 22% a mais que a semana anterior.",
            },
          ]}
          source="dados do ERP"
        />
      </div>
    ),
  },
  {
    title: "Menos trabalho manual",
    desc: "Tarefas repetitivas de exportar, ajustar e reimportar dados podem virar uma rotina automática.",
    visual: <AutomationMock />,
  },
  {
    title: "Alertas automáticos",
    desc: "A empresa é avisada na hora quando algo sai do previsto, sem precisar ficar checando planilha.",
    visual: <AlertsMock />,
  },
];

export const DataShowcase = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (!api) return;
    setSelected(api.selectedScrollSnap());
    api.on("select", () => setSelected(api.selectedScrollSnap()));
  }, [api]);

  return (
    <section className="relative py-24 lg:py-32 border-t border-border/60 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30" aria-hidden />
      <div className="container relative">
        <Reveal className="max-w-2xl mb-14">
          <span className="inline-flex items-center gap-2 font-mono text-xs text-primary uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            O que dá para fazer com seus dados
          </span>
          <h2 className="mt-4 font-display text-4xl lg:text-5xl font-bold tracking-tight">
            Alguns exemplos do que sai <span className="text-gradient">do papel</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Ilustrações de possibilidades reais para transformar os dados que sua empresa já tem.
          </p>
        </Reveal>

        <Carousel setApi={setApi} opts={{ loop: true }} className="w-full">
          <CarouselContent>
            {slides.map((slide) => (
              <CarouselItem key={slide.title} className="md:basis-4/5 lg:basis-3/5">
                <div className="p-1">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center card-glass rounded-3xl p-6 lg:p-8 h-full">
                    <div className="aspect-square w-full max-w-xs mx-auto md:max-w-none overflow-hidden rounded-2xl">
                      {slide.visual}
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold">{slide.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{slide.desc}</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            type="button"
            aria-label="Slide anterior"
            onClick={() => api?.scrollPrev()}
            className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-border text-foreground hover:border-primary/50 hover:text-primary transition-smooth"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <div className="flex items-center gap-2">
            {slides.map((s, i) => (
              <button
                key={s.title}
                type="button"
                aria-label={`Ir para o slide ${i + 1}`}
                onClick={() => api?.scrollTo(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === selected ? "w-6 bg-primary" : "w-1.5 bg-border"
                }`}
              />
            ))}
          </div>
          <button
            type="button"
            aria-label="Próximo slide"
            onClick={() => api?.scrollNext()}
            className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-border text-foreground hover:border-primary/50 hover:text-primary transition-smooth"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
