const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-10 text-center px-6">
      <h3 className="text-xl font-bold mb-2">
        Servicios de Plomería 24hs
      </h3>

      <p className="text-sm mb-2">
        Atención inmediata todos los días del año
      </p>

      <p className="text-sm mb-2">
        Plomería 24hs en Buenos Aires – CABA y Gran Buenos Aires
      </p>

      <p className="mt-4 text-xs text-blue-200">
        © {new Date().getFullYear()} Servicios de Plomería 24hs – Todos los derechos reservados.
      </p>
    </footer>
  );
};

export default Footer;
