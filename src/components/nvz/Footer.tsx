import { Mail, MessageCircle } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { WHATSAPP_URL } from "./WhatsAppFloat";

const navItems = [
  { href: "#solucoes", label: "Soluções" },
  { href: "#ia", label: "Inteligência Artificial" },
  { href: "#cases", label: "Cases" },
  { href: "#metodo", label: "Método" },
  { href: "#contato", label: "Contato" },
];

export const Footer = () => {
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const resolveHref = (href: string) => (isHome ? href : `/${href}`);

  return (
    <footer className="border-t border-border bg-card/30">
      <div className="container py-14 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <Link to="/" className="flex items-center gap-2 font-display font-bold text-2xl">
            <span className="text-primary glow-text">NV</span>
            <span>Z</span>
          </Link>
          <p className="mt-4 text-sm text-muted-foreground max-w-sm leading-relaxed">
            NVZ — Consultoria e Desenvolvimento. Ajudamos empresas a
            transformar seus dados e processos em automação, informação e
            resultados, aproveitando os sistemas que já possuem.
          </p>
        </div>

        <div>
          <h4 className="font-display font-semibold text-sm mb-4">Navegação</h4>
          <ul className="space-y-2.5 text-sm text-muted-foreground">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={resolveHref(item.href)} className="hover:text-primary transition-smooth">
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <Link to="/sectra" className="hover:text-primary transition-smooth">
                Soluções para SECTRA
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold text-sm mb-4">Contato</h4>
          <ul className="space-y-2.5 text-sm text-muted-foreground">
            <li>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-primary transition-smooth"
              >
                <MessageCircle className="w-4 h-4" /> (16) 99787-1568
              </a>
            </li>
            <li>
              <a
                href="mailto:nvztinfo@gmail.com"
                className="inline-flex items-center gap-2 hover:text-primary transition-smooth"
              >
                <Mail className="w-4 h-4" /> nvztinfo@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="container py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} NVZ — Consultoria e Desenvolvimento. Todos os direitos reservados.</p>
          <p className="font-mono">CNPJ - 62.257.096/0001-25 · Araraquara/SP</p>
        </div>
      </div>
    </footer>
  );
};
