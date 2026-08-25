import { useEffect } from "react";

interface SeoOptions {
  title: string;
  description: string;
  canonical?: string;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

const SITE_URL = "https://nvzti.com.br";

function upsertMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertLink(rel: string, href: string) {
  let el = document.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

/**
 * Atualiza title, description, canonical, Open Graph/Twitter e JSON-LD
 * por rota. O projeto é uma SPA (Vite + React Router) sem SSR, então o
 * ajuste é feito no client — motores de busca modernos executam JS, mas
 * o ideal a médio prazo é migrar para SSR/prerender para garantir o
 * conteúdo no HTML inicial.
 */
export function useSeo({ title, description, canonical, jsonLd }: SeoOptions) {
  useEffect(() => {
    const fullTitle = title.includes("NVZ") ? title : `${title} | NVZ`;
    document.title = fullTitle;

    upsertMeta("name", "description", description);
    upsertMeta("property", "og:title", fullTitle);
    upsertMeta("property", "og:description", description);
    upsertMeta("name", "twitter:title", fullTitle);
    upsertMeta("name", "twitter:description", description);

    const url = canonical ? `${SITE_URL}${canonical}` : SITE_URL;
    upsertMeta("property", "og:url", url);
    upsertLink("canonical", url);

    const scriptId = "nvz-jsonld";
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (jsonLd) {
      if (!script) {
        script = document.createElement("script");
        script.id = scriptId;
        script.type = "application/ld+json";
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(jsonLd);
    } else if (script) {
      script.remove();
    }
  }, [title, description, canonical, jsonLd]);
}

export const ORG_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "NVZ — Consultoria e Desenvolvimento",
  url: SITE_URL,
  logo: "https://storage.googleapis.com/gpt-engineer-file-uploads/5CCJRpQ9cDd68MzelsJWiPc8lRu2/social-images/social-1777330706975-logo_sem_fundo_e_sem_slogan_Nvz_Preto_e_ciano.webp",
  email: "nvztinfo@gmail.com",
  telephone: "+5516997871568",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Araraquara",
    addressRegion: "SP",
    addressCountry: "BR",
  },
  areaServed: "BR",
  description:
    "A NVZ transforma dados e processos empresariais em automação, BI, Inteligência Artificial e sistemas integrados.",
};
