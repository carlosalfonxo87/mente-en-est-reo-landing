import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);

    const previousTitle = document.title;
    document.title = "Página no encontrada — Mente en Estéreo";

    const metas: Array<{ selector: string; attr: string; name: string; content: string }> = [
      { selector: 'meta[name="description"]', attr: "name", name: "description", content: "La página que buscas no existe en Mente en Estéreo. Vuelve al inicio para descubrir nuestros servicios de audio profesional." },
      { selector: 'meta[property="og:title"]', attr: "property", name: "og:title", content: "Página no encontrada — Mente en Estéreo" },
      { selector: 'meta[property="og:description"]', attr: "property", name: "og:description", content: "La página solicitada no existe. Regresa al inicio de Mente en Estéreo." },
      { selector: 'meta[property="og:url"]', attr: "property", name: "og:url", content: `https://menteenestereo.lovable.app${location.pathname}` },
      { selector: 'meta[name="twitter:title"]', attr: "name", name: "twitter:title", content: "Página no encontrada — Mente en Estéreo" },
      { selector: 'meta[name="twitter:description"]', attr: "name", name: "twitter:description", content: "La página solicitada no existe. Regresa al inicio de Mente en Estéreo." },
    ];

    const originals = metas.map(({ selector, attr, name, content }) => {
      let el = document.head.querySelector<HTMLMetaElement>(selector);
      const created = !el;
      const original = el?.getAttribute("content") ?? null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
      return { el, created, original };
    });

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    const canonicalCreated = !canonical;
    const canonicalOriginal = canonical?.getAttribute("href") ?? null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", `https://menteenestereo.lovable.app${location.pathname}`);

    return () => {
      document.title = previousTitle;
      originals.forEach(({ el, created, original }) => {
        if (created) el.remove();
        else if (original !== null) el.setAttribute("content", original);
      });
      if (canonicalCreated) canonical?.remove();
      else if (canonicalOriginal !== null) canonical?.setAttribute("href", canonicalOriginal);
    };
  }, [location.pathname]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">Oops! Page not found</p>
        <a href="/" className="text-primary underline hover:text-primary/90">
          Return to Home
        </a>
      </div>
    </main>
  );
};

export default NotFound;
