const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-10 text-center">
      <h3 className="text-xl font-bold mb-2">Plomería Urgencias 24hs</h3>
      <p>Atención inmediata – todos los días del año</p>
      <p className="mt-3 text-sm">
        © {new Date().getFullYear()} Plomería Urgencias 24hs – Todos los derechos reservados.
      </p>
    </footer>
  );
};
export default Footer;
