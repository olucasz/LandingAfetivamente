import { Reveal, RevealGroup, RevealItem } from "../Motion/Reveal";
import { WHATSAPP_URL } from "../../constants/whatsapp";
import "./Location.css";

const contactItems = [
  {
    title: "Endereço Presencial",
    lines: ["Rua Júlio Farah, nº 383", "Centro, Ribeirão do Pinhal - PR"],
    icon: <LocationPinIcon />,
  },
  {
    title: "WhatsApp / Telefone",
    lines: ["(43) 99869-3537"],
    icon: <PhoneIcon />,
  },
  {
    title: "E-mail",
    lines: ["afetivamenteclinica@gmail.com"],
    icon: <MailIcon />,
  },
];

const mapEmbedUrl =
  "https://www.google.com/maps?q=Rua%20J%C3%BAlio%20Farah%2C%20383%2C%20Centro%2C%20Ribeir%C3%A3o%20do%20Pinhal%20-%20PR&z=16&output=embed";

export default function Location() {
  return (
    <section className="location" id="contato" aria-labelledby="location-title">
      <div className="location__container">
        <RevealGroup className="location__layout" stagger={0.14}>
          <RevealGroup className="location__content" stagger={0.1}>
            <RevealGroup as="header" className="location__header" stagger={0.1}>
              <RevealItem as="h2" className="location__title" id="location-title">
                Dê o primeiro passo
                <br />
                para o seu <span>bem-estar</span>
              </RevealItem>

              <RevealItem as="p" className="location__subtitle">
                Nossa equipe está pronta para tirar suas dúvidas e ajudar você a
                encontrar o melhor caminho.
              </RevealItem>
            </RevealGroup>

            <RevealItem as="article" className="location__card">
              <RevealGroup className="location__info-list" stagger={0.08}>
                {contactItems.map(({ title, lines, icon }) => (
                  <RevealItem className="location__info-item" key={title} distance={18}>
                    <span className="location__info-icon" aria-hidden="true">
                      {icon}
                    </span>

                    <div className="location__info-copy">
                      <h3 className="location__info-title">{title}</h3>

                      {lines.map((line) => (
                        <p className="location__info-text" key={line}>
                          {line}
                        </p>
                      ))}
                    </div>
                  </RevealItem>
                ))}
              </RevealGroup>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="location__cta"
              >
                Agendar consulta via WhatsApp
              </a>
            </RevealItem>
          </RevealGroup>

          <Reveal className="location__map-wrap" distance={30}>
            <div className="location__map">
              <iframe
                title="Mapa da clínica AfetivaMente"
                src={mapEmbedUrl}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </RevealGroup>
      </div>
    </section>
  );
}

function LocationPinIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M12 20.5s6-5.4 6-9.7A6 6 0 1 0 6 10.8c0 4.3 6 9.7 6 9.7Z" />
      <circle cx="12" cy="10.9" r="2.2" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M6.9 5.8c.5-.5 1.2-.6 1.8-.3l1.9 1.2c.6.3.8 1.1.5 1.7l-.7 1.5c-.2.3-.1.8.2 1.1l1.4 1.4c.3.3.8.4 1.1.2l1.5-.7c.6-.3 1.3-.1 1.7.5l1.2 1.9c.3.6.2 1.3-.3 1.8l-.9.9c-.8.8-2 .9-2.9.5-1.9-.8-3.8-2.2-5.7-4.1s-3.3-3.8-4.1-5.7c-.4-.9-.3-2.1.5-2.9l.9-.9Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect x="3.8" y="6.3" width="16.4" height="11.4" rx="2.3" />
      <path d="M4.7 7.7 12 13l7.3-5.3" />
    </svg>
  );
}
