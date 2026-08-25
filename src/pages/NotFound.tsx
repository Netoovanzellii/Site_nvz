import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404: rota não encontrada:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background text-foreground px-6">
      <div className="text-center">
        <h1 className="mb-4 font-display text-5xl font-bold text-primary">404</h1>
        <p className="mb-6 text-lg text-muted-foreground">
          Página não encontrada.
        </p>
        <Link
          to="/"
          className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-glow transition-smooth hover:shadow-glow-strong"
        >
          Voltar para a home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
