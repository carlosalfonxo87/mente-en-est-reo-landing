const Footer = () => (
  <footer className="py-12 px-4 border-t border-border">
    <div className="max-w-6xl mx-auto text-center">
      <p className="font-display text-lg neon-gradient-text font-bold mb-2">
        Mente en Estéreo
      </p>
      <p className="text-muted-foreground text-sm font-body">
        © {new Date().getFullYear()} Mente en Estéreo. Todos los derechos reservados.
      </p>
    </div>
  </footer>
);

export default Footer;
