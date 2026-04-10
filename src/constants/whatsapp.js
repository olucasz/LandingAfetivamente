const WHATSAPP_NUMBER = "5543998693537";
const WHATSAPP_MESSAGE =
  "Olá! Vim pelo site e gostaria de agendar uma consulta.";

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE,
)}`;
