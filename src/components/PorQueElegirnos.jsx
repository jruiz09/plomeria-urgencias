const PorQueElegirnos = () => {
  const items = [
    {
      title: "Más de 15 años de experiencia",
      desc: "Plomeros profesionales con amplia trayectoria en servicios de plomería 24hs, reparaciones y mantenimiento.",
    },
    {
      title: "Atención inmediata 24 horas",
      desc: "Respondemos rápidamente ante urgencias de plomería, los 365 días del año, en CABA y Gran Buenos Aires.",
    },
    {
      title: "Servicio profesional y confiable",
      desc: "Trabajamos con responsabilidad, compromiso y atención al detalle en cada servicio de plomería 24hs que realizamos.",
    },
  ];

  return (
    <section className="py-16 px-6 bg-gray-50">
      <h2 className="text-3xl font-bold text-center text-blue-900 mb-6">
        ¿Por qué elegir nuestros servicios de plomería 24hs?
      </h2>

      <p className="text-center max-w-3xl mx-auto text-lg mb-10 text-gray-700">
        Somos una empresa especializada en{" "}
        <strong>servicios de plomería 24hs</strong>, brindando soluciones rápidas y
        efectivas para hogares, comercios y consorcios en Buenos Aires. Nuestro
        compromiso es ofrecer atención profesional, segura y confiable.
      </p>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {items.map((item, i) => (
          <div
            key={i}
            className="p-6 bg-blue-50 border-l-4 border-blue-600 rounded-md shadow"
          >
            <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
            <p className="text-gray-700">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PorQueElegirnos;
