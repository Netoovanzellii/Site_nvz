import { Nav } from "@/components/nvz/Nav";
import { Footer } from "@/components/nvz/Footer";
import { WhatsAppFloat } from "@/components/nvz/WhatsAppFloat";
import { AiSection } from "@/components/nvz/AiSection";
import { Portfolio } from "@/components/nvz/Portfolio";
import { Faq, FaqItem } from "@/components/nvz/Faq";
import { SectraHero } from "@/components/sectra/SectraHero";
import { SectraProblems } from "@/components/sectra/SectraProblems";
import { SectraCapabilities } from "@/components/sectra/SectraCapabilities";
import { SectraTopic } from "@/components/sectra/SectraTopic";
import { SectraCta } from "@/components/sectra/SectraCta";
import { BarChart3, Cog, Plug } from "lucide-react";
import { useSeo } from "@/lib/seo";

const faqItems: FaqItem[] = [
  {
    question: "A NVZ substitui o SECTRA?",
    answer:
      "Não. A NVZ desenvolve soluções complementares que se conectam ao SECTRA, sem substituir suas funcionalidades ou o papel do ERP na sua empresa.",
  },
  {
    question: "É possível conectar uma aplicação aos dados do SECTRA?",
    answer:
      "Sim, dependendo da infraestrutura disponível (banco de dados, API ou arquivos de integração), é possível conectar aplicações personalizadas aos dados do SECTRA.",
  },
  {
    question: "É possível criar dashboards com dados do SECTRA?",
    answer:
      "Sim. Os dados podem ser extraídos e organizados para alimentar dashboards em ferramentas como Power BI, com indicadores de vendas, estoque, compras e produção.",
  },
  {
    question: "É possível utilizar IA com os dados do SECTRA?",
    answer:
      "Sim. É possível desenvolver assistentes de IA que consultam os dados do SECTRA em linguagem natural, sempre respeitando as regras de acesso e segurança da empresa.",
  },
  {
    question: "A NVZ trabalha com SQL Server?",
    answer:
      "Sim. Trabalhamos com consultas, modelagem e estruturação de dados em SQL Server, base comumente utilizada em ambientes SECTRA.",
  },
  {
    question: "É necessário alterar o ERP?",
    answer:
      "Não. As soluções são desenvolvidas para se conectar ao ambiente já existente, sem necessidade de alterar ou substituir o SECTRA.",
  },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "NVZ", item: "https://nvzti.com.br/" },
      { "@type": "ListItem", position: 2, name: "SECTRA", item: "https://nvzti.com.br/sectra" },
    ],
  },
];

const Sectra = () => {
  useSeo({
    title: "Soluções para empresas que utilizam SECTRA ERP",
    description:
      "A NVZ tem experiência prática com SECTRA e desenvolve BI, automação, integrações e IA complementares ao ERP — sem substituir o SECTRA.",
    canonical: "/sectra",
    jsonLd,
  });

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <SectraHero />
      <SectraProblems />
      <SectraCapabilities />
      <AiSection />
      <SectraTopic
        id="bi-sectra"
        icon={BarChart3}
        kicker="// Business Intelligence"
        title={
          <>
            BI com os dados que o <span className="text-gradient">SECTRA já organiza</span>.
          </>
        }
        description="Os dados operacionais do SECTRA podem ser transformados em dashboards gerenciais, com indicadores atualizados para acompanhar a operação sem depender de planilhas manuais."
        bullets={[
          "Dashboards de vendas, estoque, compras e produção",
          "Indicadores gerenciais atualizados",
          "Conexão com Power BI e ferramentas de análise",
        ]}
      />
      <SectraTopic
        id="automacao-sectra"
        icon={Cog}
        kicker="// Automação"
        title={
          <>
            Automatize o que ainda depende de{" "}
            <span className="text-gradient">tarefas manuais</span>.
          </>
        }
        description="Processos que hoje envolvem exportar dados do SECTRA, tratar em planilhas e reimportar informações podem ser automatizados, reduzindo retrabalho e risco de erro."
        bullets={[
          "Rotinas de atualização de preços, estoque e cadastros",
          "Geração automática de relatórios",
          "Menos dependência de tarefas repetitivas",
        ]}
        reverse
      />
      <SectraTopic
        id="integracoes-sectra"
        icon={Plug}
        kicker="// Integrações"
        title={
          <>
            Conecte o SECTRA a <span className="text-gradient">outros sistemas</span>.
          </>
        }
        description="Além do ERP, sua empresa provavelmente usa e-commerce, apps internos, planilhas ou outras ferramentas. É possível construir integrações que fazem esses sistemas conversarem com o SECTRA."
        bullets={[
          "Integração via API e banco de dados",
          "Conexão com e-commerce e sistemas internos",
          "Fluxo de dados sem retrabalho manual",
        ]}
      />
      <Portfolio />
      <Faq items={faqItems} title="Perguntas frequentes sobre SECTRA" />
      <SectraCta />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
};

export default Sectra;
