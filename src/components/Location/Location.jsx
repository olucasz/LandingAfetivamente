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
      <path d="M12 20c3.8-4.6 5.7-7.8 5.7-10.2A5.7 5.7 0 0 0 12 4a5.7 5.7 0 0 0-5.7 5.8C6.3 12.2 8.2 15.4 12 20Z" />
      <circle cx="12" cy="9.8" r="1.9" />
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
      <path d="M7.2 5.8c.5-.5 1.3-.6 1.9-.2l2.1 1.5c.6.4.8 1.2.5 1.8l-.8 1.7c-.2.4-.1.9.2 1.3l1.2 1.2c.4.4.9.5 1.3.2l1.7-.8c.7-.3 1.4-.1 1.8.5l1.5 2.1c.4.6.3 1.4-.2 1.9l-1 1c-.8.8-2 .9-3 .4-1.8-.8-3.6-2.2-5.4-4-1.8-1.8-3.2-3.6-4-5.4-.5-1-.4-2.2.4-3l1-1Z" />
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
      <path d="M4.5 7.5h15a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-15a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1Z" />
      <path d="m5 8 7 5 7-5" />
    </svg>
  );
}
