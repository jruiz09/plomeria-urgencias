import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import hero from "../assets/hero-plomeria1.png";
import mobileHero from "../assets/Plomeria.jpg";

const Hero = () => {
  const wsp = "54911XXXXXXXX";
  const mensaje = "Hola! Necesito un plomero urgente.";

  const [bgPosition, setBgPosition] = useState("center center");

  // Detecta tamaño de pantalla
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        // MOBILE → enfocamos más arriba
        setBgPosition("center top");
      } else {
        // DESKTOP → centrado perfecto
        setBgPosition("center center");
      }
    };

    handleResize(); // ejecutar al cargar
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      className="relative h-screen flex items-center justify-center text-white bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(${window.innerWidth < 768 ? mobileHero : hero})`,
        backgroundPosition: "center",
      }}
    >
      <Helmet>
        <title>Plomería Urgencias 24hs</title>
      </Helmet>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Contenido */}
      <div className="relative text-center px-6 max-w-md">
        <h1 className="text-4xl font-bold mb-4 leading-tight">
          Plomería Urgencias <br /> 24hs
        </h1>

        <p className="text-lg mb-6">
          Llegamos en minutos – atención inmediata y profesional.
        </p>

        <a
          href={`https://api.whatsapp.com/send?phone=${wsp}&text=${encodeURIComponent(
            mensaje
          )}`}
          target="_blank"
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
