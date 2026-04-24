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
      <path
        d="M7.1 5.6c.4-.4 1-.5 1.5-.2l1.8 1.1c.5.3.7.9.5 1.4l-.7 1.4c-.2.4-.1.9.2 1.2a13.1 13.1 0 0 0 3.1 3.1c.3.2.8.3 1.2.2l1.4-.7c.5-.2 1.1 0 1.4.5l1.1 1.8c.3.5.2 1.1-.2 1.5l-1 1c-.7.7-1.8.9-2.7.5a16.8 16.8 0 0 1-5-3.6A16.8 16.8 0 0 1 5.6 9.3c-.4-.9-.2-2 .5-2.7l1-1Z"
        strokeWidth="1.6"
      />
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
