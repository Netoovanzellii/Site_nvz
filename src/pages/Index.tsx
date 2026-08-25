import { Nav } from "@/components/nvz/Nav";
import { Hero } from "@/components/nvz/Hero";
import { SectraTeaser } from "@/components/nvz/SectraTeaser";
import { AiSection } from "@/components/nvz/AiSection";
import { BeforeAfter } from "@/components/nvz/BeforeAfter";
import { Services } from "@/components/nvz/Services";
import { Portfolio } from "@/components/nvz/Portfolio";
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
      "A NVZ transforma dados e processos empresariais em automação, BI, Inteligência Artificial e sistemas integrados.",
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
      <Process />
      <Differentials />
      <FinalCta />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
};

export default Index;
