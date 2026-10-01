import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Rola a página para o topo a cada troca de rota (não afeta navegação
 * por âncora dentro da mesma página, ex: #contato).
 */
export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};
