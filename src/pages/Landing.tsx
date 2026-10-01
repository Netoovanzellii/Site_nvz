import { useState } from "react";
import { useSeo } from "@/lib/seo";
import { sendContact } from "@/lib/contact";
import "./Landing.css";

const Landing = () => {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;
    setStatus("sending");
    const ok = await sendContact(data, "Novo contato pela landing NVZ TI");
    if (ok) {
      form.reset();
      setStatus("sent");
    } else {
      setStatus("error");
    }
  };

  useSeo({
    title: "NVZ TI | Seu ERP registra tudo. A NVZ transforma isso em decisão.",
    description:
      "Consultoria e desenvolvimento para empresas que usam ERP, com foco em SECTRA. BI, automação e IA aplicada, feitos por quem programa dentro do sistema. Agende um diagnóstico gratuito.",
    canonical: "/landing",
  });

  return (
    <div className="landing-page">
      <header>
        <div className="header-inner">
          <div className="logo">
            NVZ<span>TI</span>
          </div>
          <a href="#contato" className="header-cta">
            Agendar diagnóstico
          </a>
        </div>
      </header>

      {/* 1. HERO */}
      <section className="hero" id="hero">
        <div className="container hero-inner">
          <span className="eyebrow">Consultoria &amp; automação de ERP · foco em SECTRA</span>
          <h1>
            Seu ERP registra tudo. <span className="hl">A NVZ transforma isso em decisão</span>
          </h1>
          <p className="hero-sub">
            Consultoria e desenvolvimento para empresas que usam ERP, com foco em quem usa <b>SECTRA</b>.
            BI, automação e IA aplicada, feitos por quem programa dentro do sistema.
          </p>
          <div className="hero-ctas">
            <a href="#contato" className="btn btn-primary">
              Agendar diagnóstico gratuito
            </a>
            <a href="#painel-ia" className="btn btn-secondary">
              Ver o Painel de IA
            </a>
          </div>
          <p className="hero-note">Sem compromisso · conversa direta com quem executa</p>
        </div>
      </section>

      {/* 2. DORES */}
      <section className="dores" id="dores">
        <div className="container">
          <span className="section-tag">Isso soa familiar?</span>
          <h2 className="section-title">Três sinais de que seu ERP está sendo subutilizado</h2>
          <div className="dores-grid">
            <div className="dor-card">
              <span className="quote-mark">&ldquo;</span>
              <p>O relatório que importa ainda é planilha montada na mão.</p>
            </div>
            <div className="dor-card">
              <span className="quote-mark">&ldquo;</span>
              <p>A gente descobre o problema depois que ele já custou caro.</p>
            </div>
            <div className="dor-card">
              <span className="quote-mark">&ldquo;</span>
              <p>Tenho ideias de automação, mas ninguém pra executar.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. O QUE A NVZ FAZ */}
      <section id="solucoes">
        <div className="container">
          <span className="section-tag">O que a NVZ faz</span>
          <h2 className="section-title">Quatro jeitos de fazer seu ERP render mais</h2>
          <div className="servicos-grid">
            <div className="servico-card">
              <div className="servico-icon">01</div>
              <div>
                <h3>Consultoria e automação no ERP</h3>
                <p>Relatórios, macros, integrações e correção de processos.</p>
                <span className="badge">Especialidade: SECTRA</span>
              </div>
            </div>
            <div className="servico-card">
              <div className="servico-icon">02</div>
              <div>
                <h3>Painel de IA para Clientes</h3>
                <p>BI + chat de IA sobre os dados do seu ERP.</p>
                <a href="#painel-ia" className="badge" style={{ textDecoration: "none" }}>
                  Ver seção →
                </a>
              </div>
            </div>
            <div className="servico-card">
              <div className="servico-icon">03</div>
              <div>
                <h3>Desenvolvimento sob medida</h3>
                <p>Tirar processo do Excel e virar aplicação web.</p>
              </div>
            </div>
            <div className="servico-card">
              <div className="servico-icon">04</div>
              <div>
                <h3>Suporte e integração de sistemas</h3>
                <p>Seus sistemas conversando entre si, sem retrabalho manual.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PAINEL DE IA */}
      <section className="painel" id="painel-ia">
        <div className="container">
          <span className="section-tag">Destaque do produto</span>
          <h2 className="section-title">Painel de IA para Clientes</h2>
          <p className="section-desc">
            BI com os dados do seu ERP e um chat para você perguntar aos seus números do jeito que falaria com uma pessoa.
          </p>

          <div className="painel-mock">
            <div className="painel-mock-inner">
              <div className="painel-mock-bar">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="painel-mock-chart">
                <div style={{ height: "35%" }}></div>
                <div style={{ height: "60%" }}></div>
                <div style={{ height: "42%" }}></div>
                <div style={{ height: "80%" }}></div>
                <div style={{ height: "55%" }}></div>
                <div style={{ height: "70%" }}></div>
                <div style={{ height: "48%" }}></div>
              </div>
              <div className="painel-mock-chat">
                <span className="you">Você perguntou:</span>
                &ldquo;Qual produto teve a menor margem esse mês?&rdquo;
              </div>
            </div>
          </div>

          <div className="painel-bullets">
            <div className="painel-bullet">
              <span className="dot"></span>
              <p>Painéis prontos</p>
            </div>
            <div className="painel-bullet">
              <span className="dot"></span>
              <p>Chat em linguagem natural</p>
            </div>
            <div className="painel-bullet">
              <span className="dot"></span>
              <p>Margem real por produto</p>
            </div>
          </div>

          <div className="plans">
            <div className="plan-card featured">
              <div className="plan-name">Com IA</div>
              <div className="plan-price">R$ 4.000</div>
              <div className="plan-monthly">
                implantação + <b>R$ 450/mês</b>
              </div>
            </div>
            <div className="plan-card">
              <div className="plan-name">Sem IA</div>
              <div className="plan-price">R$ 3.000</div>
              <div className="plan-monthly">
                implantação + <b>R$ 300/mês</b>
              </div>
            </div>
          </div>

          <a href="#contato" className="btn btn-primary btn-block">
            Quero uma demonstração
          </a>
        </div>
      </section>

      {/* 5. POR QUE A NVZ */}
      <section id="por-que">
        <div className="container">
          <span className="section-tag">Por que a NVZ</span>
          <h2 className="section-title">Quem desenvolve dentro do ERP, não quem aprendeu pra vender projeto</h2>
          <div className="porque-list">
            <div className="porque-item">
              <span className="porque-num">01</span>
              <div>
                <h3>Feito por quem executa, não por quem terceiriza</h3>
                <p>Desenvolvimento dentro do próprio ERP. Não é uma consultoria genérica que aprendeu o sistema só pra fechar contrato.</p>
              </div>
            </div>
            <div className="porque-item">
              <span className="porque-num">02</span>
              <div>
                <h3>Caso real rodando em indústria de manufatura</h3>
                <p>Sob NDA. A demonstração ao vivo acontece na conversa de diagnóstico.</p>
              </div>
            </div>
            <div className="porque-item">
              <span className="porque-num">03</span>
              <div>
                <h3>Atendimento direto com quem executa</h3>
                <p>Sem camada de atravessador entre você e quem escreve o código.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. COMO COMECAR */}
      <section className="como" id="como-comecar">
        <div className="container">
          <span className="section-tag">Como começar</span>
          <h2 className="section-title">Três passos, sem enrolação</h2>
          <div className="steps">
            <div className="step">
              <div className="step-num">1</div>
              <div className="step-body">
                <h3>Diagnóstico gratuito</h3>
                <p>Conversa direta pra entender seu ERP, seus processos e onde estão os gargalos.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">2</div>
              <div className="step-body">
                <h3>Proposta objetiva</h3>
                <p>Escopo claro, sem letra miúda. Você sabe exatamente o que vai receber.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">3</div>
              <div className="step-body">
                <h3>Implantação</h3>
                <p>Execução direta, com quem desenhou a solução acompanhando de perto.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. MODELO DE CONTRATACAO */}
      <section id="modelo">
        <div className="container">
          <span className="section-tag">Modelo de contratação</span>
          <h2 className="section-title">Flexível pro tamanho do seu problema</h2>
          <div className="modelo-grid">
            <div className="modelo-card">
              <h3>Pacotes de horas mensais</h3>
              <p>Consultoria e desenvolvimento contínuos, sob demanda.</p>
              <div className="horas-chips">
                <span>5h</span>
                <span>10h</span>
                <span>20h</span>
              </div>
            </div>
            <div className="modelo-card">
              <h3>Projeto fechado</h3>
              <p>Quando o escopo é grande e bem definido, com entrega combinada do início ao fim.</p>
            </div>
            <div className="modelo-card">
              <h3>Painel de IA</h3>
              <p>Implantação única mais mensalidade. Os planos estão na seção acima.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. CTA FINAL + CONTATO */}
      <section className="cta-final" id="contato">
        <div className="container">
          <span className="section-tag">Vamos conversar</span>
          <h2 className="section-title">Vamos ver, de graça, o que dá pra automatizar no seu ERP</h2>
          <p className="section-desc">Preencha o formulário curto ou chame direto no WhatsApp.</p>

          <div className="contact-wrap">
            <div className="form-card">
              <h3>Fale com a NVZ</h3>
              <form onSubmit={onSubmit}>
                <div className="field">
                  <label htmlFor="nome">Nome</label>
                  <input type="text" id="nome" name="Nome" placeholder="Seu nome" required />
                </div>
                <div className="field">
                  <label htmlFor="empresa">Empresa</label>
                  <input type="text" id="empresa" name="Empresa" placeholder="Nome da empresa" required />
                </div>
                <div className="field">
                  <label htmlFor="erp">ERP usado</label>
                  <input type="text" id="erp" name="ERP" placeholder="Ex: SECTRA" required />
                </div>
                <div className="field">
                  <label htmlFor="whatsapp">WhatsApp</label>
                  <input type="tel" id="whatsapp" name="WhatsApp" placeholder="(00) 00000-0000" required />
                </div>
                <button type="submit" className="btn btn-primary btn-block" disabled={status === "sending"}>
                  {status === "sending" ? "Enviando..." : "Agendar diagnóstico gratuito"}
                </button>
                {status === "sent" && (
                  <p className="form-msg">Recebemos sua mensagem. Respondemos em até 1 dia útil.</p>
                )}
                {status === "error" && (
                  <p className="form-msg form-msg-error" role="alert">
                    Não deu para enviar agora. Tente de novo ou chame no WhatsApp.
                  </p>
                )}
              </form>

              <div className="or-divider" style={{ margin: "18px 0" }}>
                ou
              </div>

              <a
                href="https://wa.me/5516996568997?text=Ol%C3%A1%2C%20quero%20agendar%20um%20diagn%C3%B3stico%20gratuito%20com%20a%20NVZ"
                className="btn whats-btn btn-block"
                target="_blank"
                rel="noopener"
              >
                Falar no WhatsApp agora
              </a>
            </div>

            <div className="contact-info">
              <a href="mailto:nvztinfo@gmail.com">
                <span className="ic">@</span> nvztinfo@gmail.com
              </a>
              <a href="tel:+5516996568997">
                <span className="ic">☎</span> (16) 99656-8997
              </a>
              <a href="https://instagram.com/nvzti_" target="_blank" rel="noopener">
                <span className="ic">IG</span> @nvzti_
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <p>
            <span className="foot-logo">NVZ TI</span> · Consultoria e automação de ERP
          </p>
          <p style={{ marginTop: "6px" }}>CNPJ 62.257.096/0001-25 · Araraquara/SP</p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
