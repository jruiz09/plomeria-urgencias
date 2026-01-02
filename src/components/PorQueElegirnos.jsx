const PorQueElegirnos = () => {
  const items = [
    {
      title: "15 años de experiencia",
      desc: "Profesionales reales que saben resolver cualquier urgencia.",
    },
    {
      title: "Llegamos en minutos",
      desc: "Servicio disponible las 24 horas, los 365 días del año.",
    },
    {
      title: "Presupuesto claro",
      desc: "Antes de comenzar te decimos el costo final.",
    },
  ];

  return (
    <section className="py-16 px-6">
      <h2 className="text-3xl font-bold text-center text-blue-900 mb-10">
        ¿Por qué elegirnos?
      </h2>

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
