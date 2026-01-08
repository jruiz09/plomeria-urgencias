const Testimonios = () => {
  const data = [
    {
      text: "Me solucionaron una pérdida de agua a las 3 AM en CABA. Llegaron en menos de 20 minutos.",
      author: "Martín G. – CABA",
    },
    {
      text: "Muy profesionales. Excelente servicio de plomería 24hs en Buenos Aires.",
      author: "Carla S. – GBA Norte",
    },
    {
      text: "Los llamo siempre que tengo un problema de plomería. Nunca fallan y atienden a cualquier hora.",
      author: "Diego R. – GBA Oeste",
    },
  ];

  return (
    <section className="py-16 bg-gray-100 px-6">
      <h2 className="text-3xl font-bold text-center text-blue-900 mb-6">
        Opiniones de Clientes – Plomería 24hs
      </h2>

      <p className="text-center max-w-3xl mx-auto text-lg mb-10 text-gray-700">
        La satisfacción de nuestros clientes respalda la calidad de nuestros
        <strong> servicios de plomería 24hs</strong> en Buenos Aires. Atendemos
        urgencias y reparaciones con rapidez, profesionalismo y precios claros.
      </p>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {data.map((t, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
          >
            <p className="italic mb-4 text-gray-800">"{t.text}"</p>
            <p className="font-semibold text-blue-700">{t.author}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonios;
