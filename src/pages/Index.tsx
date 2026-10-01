import { Nav } from "@/components/nvz/Nav";
import { Hero } from "@/components/nvz/Hero";
import { SectraTeaser } from "@/components/nvz/SectraTeaser";
import { AiSection } from "@/components/nvz/AiSection";
import { BeforeAfter } from "@/components/nvz/BeforeAfter";
import { Services } from "@/components/nvz/Services";
import { Portfolio } from "@/components/nvz/Portfolio";
import { DataShowcase } from "@/components/nvz/DataShowcase";
import { Process } from "@/components/nvz/Process";
import { Differentials } from "@/components/nvz/Differentials";
import { FinalCta } from "@/components/nvz/FinalCta";
import { Footer } from "@/components/nvz/Footer";
import { WhatsAppFloat } from "@/components/nvz/WhatsAppFloat";
import { useSeo, ORG_JSON_LD } from "@/lib/seo";

const Index = () => {
  useSeo({
    title: "NVZ | Automação, Dados, IA e Integrações para Empresas",
    description:
      "A NVZ ajuda empresas a usar melhor os dados e sistemas que já têm, com automação, BI, inteligência artificial e integrações.",
    canonical: "/",
    jsonLd: ORG_JSON_LD,
  });

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <SectraTeaser />
      <AiSection />
      <BeforeAfter />
      <Services />
      <Portfolio />
      <DataShowcase />
      <Process />
      <Differentials />
      <FinalCta />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
};

export default Index;
