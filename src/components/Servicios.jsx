const Servicios = () => {
  const servicios = [
    {
      titulo: "Caños rotos y pérdidas de agua",
      desc: "Reparamos caños rotos, pérdidas y filtraciones con atención inmediata las 24 horas.",
    },
    {
      titulo: "Inundaciones",
      desc: "Solucionamos inundaciones por roturas, obstrucciones o fallas en cañerías.",
    },
    {
      titulo: "Destapaciones",
      desc: "Destapaciones sin maquinaría en hogares y comercios.",
    },
    {
      titulo: "Calefones y termotanques",
      desc: "Instalación, reparación y mantenimiento de calefones y termotanques.",
    },
    {
      titulo: "Filtraciones",
      desc: "Detección y reparación de filtraciones ocultas en paredes y pisos.",
    },
    {
      titulo: "Reparaciones de plomería 24hs",
      desc: "Atención urgente para todo tipo de reparaciones de plomería, día y noche.",
    },
    {
      titulo: "Cañerías",
      desc: "Trabajos en cañerías agua realizados por plomeros especializados.",
    },
    {
      titulo: "Instalaciones completas",
      desc: "Instalaciones de plomería en baños, cocinas, obras y remodelaciones.",
    },
  ];

  return (
    <section className="py-16 bg-gray-100 px-6">
      <h2 className="text-3xl font-bold text-center text-blue-900 mb-6">
        Servicios de Plomería 24hs en Buenos Aires
      </h2>

      <p className="text-center max-w-3xl mx-auto text-lg mb-10 text-gray-700">
        Ofrecemos <strong>servicios de plomería 24hs</strong> para resolver inconvenientes, reparaciones e instalaciones en hogares, comercios y
        consorcios, con atención inmediata en CABA y Gran Buenos Aires.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {servicios.map((s, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-lg shadow hover:-translate-y-1 hover:shadow-xl transition"
          >
            <h3 className="text-xl font-semibold mb-2">{s.titulo}</h3>
            <p className="text-gray-600 text-sm">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Servicios;
