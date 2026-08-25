import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#solucoes", label: "Soluções" },
  { href: "#ia", label: "Inteligência Artificial" },
  { href: "#cases", label: "Cases" },
];

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  const resolveHref = (href: string) => (isHome ? href : `/${href}`);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-smooth ${
        scrolled || open
          ? "bg-background/85 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="container flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-2 font-display font-bold text-xl shrink-0">
          <span className="text-primary glow-text">NV</span>
          <span>Z</span>
          <span className="hidden sm:inline text-xs font-mono text-muted-foreground ml-1">
            dados &amp; automação
          </span>
        </Link>

        <ul className="hidden lg:flex items-center gap-8 text-sm text-muted-foreground">
          {links.map((l) => (
            <li key={l.href}>
              <a href={resolveHref(l.href)} className="hover:text-primary transition-smooth">
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <Link
              to="/sectra"
              className="inline-flex items-center gap-1.5 hover:text-primary transition-smooth"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Sua empresa usa SECTRA?
            </Link>
          </li>
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={resolveHref("#contato")}
            className="rounded-full border border-primary/40 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
          >
            Quero conversar
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-border text-foreground"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <ul className="container flex flex-col py-4 gap-1 text-sm">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={resolveHref(l.href)}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-foreground/90 hover:text-primary transition-smooth"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <Link
                to="/sectra"
                onClick={() => setOpen(false)}
                className="block py-3 text-primary font-semibold"
              >
                Sua empresa usa SECTRA?
              </Link>
            </li>
            <li className="pt-2">
              <a
                href={resolveHref("#contato")}
                onClick={() => setOpen(false)}
                className="inline-flex w-full items-center justify-center rounded-full bg-primary px-5 py-3 font-semibold text-primary-foreground"
              >
                Quero conversar
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};
