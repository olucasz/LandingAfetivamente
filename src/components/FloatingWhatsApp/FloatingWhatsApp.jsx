import { WHATSAPP_URL } from "../../constants/whatsapp";
import "./FloatingWhatsApp.css";

export default function FloatingWhatsApp() {
  return (
    <a
      className="floating-whatsapp"
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Abrir conversa no WhatsApp"
    >
      <span className="floating-whatsapp__halo" aria-hidden="true" />
      <svg
        className="floating-whatsapp__icon"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          fill="currentColor"
          d="M27.1 4.8A15.6 15.6 0 0 0 16 0C7.2 0 .1 7.1.1 15.8c0 2.8.7 5.6 2.2 8L0 32l8.4-2.2a15.7 15.7 0 0 0 7.6 1.9h.1c8.7 0 15.8-7.1 15.8-15.8 0-4.2-1.6-8.2-4.8-11.1ZM16 29c-2.4 0-4.7-.7-6.7-2l-.5-.3-5 .9 1-4.9-.3-.5a13.2 13.2 0 0 1-2-6.4C2.5 8.5 8.5 2.5 16 2.5c3.5 0 6.8 1.4 9.3 3.9a13 13 0 0 1 3.8 9.3c0 7.4-6 13.4-13.4 13.4Zm7.4-10.1c-.4-.2-2.6-1.3-3-1.4-.4-.2-.7-.2-1 .2s-1.1 1.4-1.3 1.7c-.2.2-.5.3-.9.1-.4-.2-1.8-.7-3.4-2.2-1.3-1.1-2.1-2.4-2.4-2.8-.2-.4 0-.6.2-.8l.7-.8.5-.8c.2-.3.1-.6 0-.8s-1-2.5-1.4-3.4c-.3-.8-.7-.7-1-.7h-.8c-.3 0-.8.1-1.2.6-.4.5-1.6 1.6-1.6 4s1.7 4.7 2 5.1c.2.3 3.3 5 8.1 7 1.1.5 2 .8 2.7 1 .1 0 .3.1.4.1.9.3 1.8.2 2.5.1.8-.1 2.6-1.1 2.9-2.1.4-1 .4-1.9.3-2.1-.1-.2-.4-.3-.8-.5Z"
        />
      </svg>
    </a>
  );
}
