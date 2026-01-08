import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import hero from "../assets/hero-plomeria1.png";
import mobileHero from "../assets/plomeria.jpg";

const Hero = () => {
  const wsp = "54911XXXXXXXX";
  const mensaje = "Hola! Necesito un servicio de plomería 24hs.";

  const [bgPosition, setBgPosition] = useState("center center");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setBgPosition("center top");
      } else {
        setBgPosition("center center");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      className="relative h-screen flex items-center justify-center text-white bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(${window.innerWidth < 768 ? mobileHero : hero})`,
        backgroundPosition: bgPosition,
      }}
    >
      <Helmet>
        <title>Servicios de Plomería 24hs en Buenos Aires</title>
        <meta
          name="description"
          content="Servicios de plomería 24 horas en Buenos Aires. Reparaciones, destapaciones, caños rotos y urgencias. Atención inmediata."
        />
      </Helmet>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Contenido */}
      <div className="relative text-center px-6 max-w-md">
        <h1 className="text-4xl font-bold mb-4 leading-tight">
          Servicios de Plomería <br /> 24hs
        </h1>

        <p className="text-lg mb-6">
          Reparaciones, destapaciones y urgencias. Atención inmediata y profesional.
        </p>

        <a
          href={`https://api.whatsapp.com/send?phone=${wsp}&text=${encodeURIComponent(
            mensaje
          )}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-green-500 px-6 py-3 rounded-xl text-lg font-semibold shadow-lg hover:bg-green-600 transition">
            Solicitar Plomero Ahora
          </button>
        </a>
      </div>
    </section>
  );
};

export default Hero;
