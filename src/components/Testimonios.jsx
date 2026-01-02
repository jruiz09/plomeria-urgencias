const Testimonios = () => {
  const data = [
    {
      text: "Me salvaron a las 3 AM de una pérdida enorme. Llegaron en 20 minutos.",
      author: "Martín G.",
    },
    {
      text: "Muy profesionales y claros con los precios.",
      author: "Carla S.",
    },
    {
      text: "Los llamo siempre, nunca fallan. Servicio 10 puntos.",
      author: "Diego R.",
    },
  ];

  return (
    <section className="py-16 bg-gray-100 px-6">
      <h2 className="text-3xl font-bold text-center text-blue-900 mb-10">
        Opiniones de Clientes
      </h2>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {data.map((t, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
          >
            <p className="italic mb-4 text-gray-800">"{t.text}"</p>
            <p className="font-semibold text-blue-700">– {t.author}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonios;
