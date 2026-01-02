const WhatsAppButton = () => {
  const wsp = "54911XXXXXXXX"; // ← TU NÚMERO
  const mensaje = "Hola! Necesito un plomero urgente.";

  return (
    <a
      href={`https://api.whatsapp.com/send?phone=${wsp}&text=${encodeURIComponent(
        mensaje
      )}`}
      target="_blank"
      className="fixed bottom-6 right-6 bg-green-500 p-4 rounded-full shadow-xl hover:bg-green-600 transition"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        className="w-10 h-10"
      />
    </a>
  );
};

export default WhatsAppButton;
