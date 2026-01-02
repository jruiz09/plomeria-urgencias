const Servicios = () => {
  const servicios = [
    { titulo: "Caños rotos y pérdidas" },
    { titulo: "Inundaciones" },
    { titulo: "Destapaciones" },
    { titulo: "Calefones y termotanques" },
    { titulo: "Filtraciones" },
    { titulo: "Reparaciones de urgencia" },
    { titulo: "Gas y cañerías" },
    { titulo: "Instalaciones completas" },
  ];

  return (
    <section className="py-16 bg-gray-100 px-6">
      <h2 className="text-3xl font-bold text-center text-blue-900 mb-10">
        Servicios de Plomería 24hs
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {servicios.map((s, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-lg shadow hover:-translate-y-1 hover:shadow-xl transition"
          >
            <h3 className="text-xl font-semibold">{s.titulo}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Servicios;
