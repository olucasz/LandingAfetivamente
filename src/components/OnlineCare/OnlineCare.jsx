import { useEffect, useRef, useState } from "react";
import onlineProfessionalOneAvif420 from "../../assets/optimized/online/online-professional-1-420.avif";
import onlineProfessionalOneAvif840 from "../../assets/optimized/online/online-professional-1-840.avif";
import onlineProfessionalOneWebp420 from "../../assets/optimized/online/online-professional-1-420.webp";
import onlineProfessionalOneWebp840 from "../../assets/optimized/online/online-professional-1-840.webp";
import onlineProfessionalTwoAvif420 from "../../assets/optimized/online/online-professional-2-420.avif";
import onlineProfessionalTwoAvif840 from "../../assets/optimized/online/online-professional-2-840.avif";
import onlineProfessionalTwoWebp420 from "../../assets/optimized/online/online-professional-2-420.webp";
import onlineProfessionalTwoWebp840 from "../../assets/optimized/online/online-professional-2-840.webp";
import partnerCassi from "../../assets/optimized/partners/partner-cassi.webp";
import partnerCisnop from "../../assets/optimized/partners/partner-cisnop.webp";
import partnerSaneSaude from "../../assets/optimized/partners/partner-sane-saude.webp";
import partnerUnimed from "../../assets/partners/unimed.svg";
import { WHATSAPP_URL } from "../../constants/whatsapp";
import { Reveal, RevealGroup, RevealItem } from "../Motion/Reveal";
import { useMotionBudget } from "../Motion/useMotionBudget";
import "./OnlineCare.css";

const onlineBenefits = [
  {
    title: "Duração",
    description: "50 minutos particular e 30-40 minutos para convênios",
    icon: <DurationIcon />,
  },
  {
    title: "Sigilo e Conforto",
    description:
      "Atendimento totalmente seguro e confidencial do conforto da sua casa",
    icon: <PrivacyIcon />,
  },
];

const onlineParticipants = [
  {
    id: "natalia-terra",
    alt: "Natália Terra em atendimento online da AfetivaMente",
    imagePosition: "center 20%",
    image: {
      avif420: onlineProfessionalTwoAvif420,
      avif840: onlineProfessionalTwoAvif840,
      webp420: onlineProfessionalTwoWebp420,
      webp840: onlineProfessionalTwoWebp840,
    },
  },
  {
    id: "gabi-cuani",
    alt: "Gabi Cuani em atendimento online da AfetivaMente",
    imagePosition: "center 34%",
    image: {
      avif420: onlineProfessionalOneAvif420,
      avif840: onlineProfessionalOneAvif840,
      webp420: onlineProfessionalOneWebp420,
      webp840: onlineProfessionalOneWebp840,
    },
  },
];

const partners = [
  { name: "Unimed", logo: partnerUnimed, width: 307, height: 58 },
  { name: "Cassi", logo: partnerCassi, width: 165, height: 81 },
  { name: "Sane Saúde", logo: partnerSaneSaude, width: 394, height: 77 },
  { name: "Cisnop", logo: partnerCisnop, width: 223, height: 72 },
];

export default function OnlineCare() {
  const sectionRef = useRef(null);
  const [isSectionInView, setIsSectionInView] = useState(false);
  const shouldReduceMotion = useMotionBudget();

  useEffect(() => {
    if (shouldReduceMotion || typeof window === "undefined") {
      return undefined;
    }

    if (!("IntersectionObserver" in window)) {
      return undefined;
    }

    const sectionNode = sectionRef.current;
    if (!sectionNode) {
      return undefined;
    }

    const observer = new window.IntersectionObserver(
      ([entry]) => {
        setIsSectionInView(entry.isIntersecting);
      },
      {
        threshold: 0.16,
        rootMargin: "120px 0px 120px 0px",
      },
    );

    observer.observe(sectionNode);

    return () => {
      observer.disconnect();
    };
  }, [shouldReduceMotion]);

  return (
    <section
      className="online-care"
      id="online"
      ref={sectionRef}
      aria-labelledby="online-care-title"
    >
      <div className="online-care__hero">
        <div className="online-care__container">
          <RevealGroup className="online-care__layout" stagger={0.14}>
            <RevealGroup className="online-care__content" stagger={0.1}>
              <RevealGroup
                as="header"
                className="online-care__header"
                stagger={0.1}
              >
                <RevealItem
                  as="h2"
                  className="online-care__title"
                  id="online-care-title"
                >
                  Atendimento <span>Online</span>
                  <br />
                  com a mesma excelência
                </RevealItem>

                <RevealItem as="p" className="online-care__description">
                  Oferecemos atendimentos online com a mesma qualidade, ética e
                  cuidado do nosso espaço físico.
                </RevealItem>
              </RevealGroup>

              <RevealGroup className="online-care__benefits" stagger={0.08}>
                {onlineBenefits.map(({ title, description, icon }) => (
                  <RevealItem
                    as="article"
                    key={title}
                    className="online-care__benefit-card"
                  >
                    <div className="online-care__benefit-heading">
                      <span
                        className="online-care__benefit-icon"
                        aria-hidden="true"
                      >
                        {icon}
                      </span>
                      <h3 className="online-care__benefit-title">{title}</h3>
                    </div>

                    <p className="online-care__benefit-description">
                      {description}
                    </p>
                  </RevealItem>
                ))}
              </RevealGroup>
            </RevealGroup>

            <Reveal
              className="online-care__mock-wrap"
              distance={30}
            >
              <div
                className={`online-care__mock-stage${
                  shouldReduceMotion ? "" : " is-animated"
                }${isSectionInView ? " is-in-view" : ""}`}
              >
                <div className="online-care__mock-badge" aria-hidden="true">
                  <VideoChatIcon />
                </div>

                <article className="online-care__mock">
                  <div className="online-care__mock-topbar" aria-hidden="true">
                    <span />
                    <span />
                    <span />
                  </div>

                  <div className="online-care__mock-screen">
                    {onlineParticipants.map(
                      ({ id, alt, imagePosition, image }) => (
                        <div className="online-care__participant" key={id}>
                          <picture>
                            <source
                              type="image/avif"
                              srcSet={`${image.avif420} 420w, ${image.avif840} 840w`}
                              sizes="(max-width: 767px) 40vw, 280px"
                            />
                            <source
                              type="image/webp"
                              srcSet={`${image.webp420} 420w, ${image.webp840} 840w`}
                              sizes="(max-width: 767px) 40vw, 280px"
                            />
                            <img
                              src={image.webp420}
                              alt={alt}
                              width="840"
                              height="1260"
                              loading="lazy"
                              decoding="async"
                              fetchPriority="low"
                              style={{ objectPosition: imagePosition }}
                            />
                          </picture>
                          <span
                            className="online-care__participant-icon"
                            aria-hidden="true"
                          >
                            <ConnectionIcon />
                          </span>
                        </div>
                      ),
                    )}
                  </div>

                  <div className="online-care__mock-footer">
                    <div className="online-care__mock-copy">
                      <strong>Via Google Meet</strong>
                      <span>Agende Agora!</span>
                    </div>

                    <a
                      href={WHATSAPP_URL}
                      className="online-care__cta"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Agendar consulta Online
                    </a>
                  </div>
                </article>
              </div>
            </Reveal>
          </RevealGroup>
        </div>
      </div>

      <div className="online-care__partners" id="convenios">
        <div className="online-care__container">
          <Reveal as="h3" className="online-care__partners-title">
            Convênios atendidos
          </Reveal>

          <RevealGroup className="online-care__partners-grid" stagger={0.08}>
            {partners.map(({ name, logo, width, height }) => (
              <RevealItem
                className="online-care__partner"
                key={name}
                distance={18}
              >
                <img
                  src={logo}
                  alt={`Logo do convênio ${name}`}
                  width={width}
                  height={height}
                  loading="lazy"
                  decoding="async"
                  fetchPriority="low"
                />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}

function DurationIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.6v4.8l3 1.8" />
    </svg>
  );
}

function PrivacyIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M12 4.5 5.8 7v4.8c0 3.8 2.3 6.9 6.2 7.7 3.9-.8 6.2-3.9 6.2-7.7V7L12 4.5Z" />
      <path d="M9.6 12.1 11.2 13.7 14.8 10.1" />
    </svg>
  );
}

function VideoChatIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="9" cy="9.2" r="2.5" />
      <path d="M4.8 16.6c.8-2 2.4-3.1 4.2-3.1 1.9 0 3.4 1.1 4.2 3.1" />
      <circle cx="16.6" cy="8.3" r="2.1" />
      <path d="M13.9 15.1c.6-1.4 1.7-2.2 3.1-2.2 1.4 0 2.5.8 3.1 2.2" />
    </svg>
  );
}

function ConnectionIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M2.8 9.8a13.5 13.5 0 0 1 18.4 0" />
      <path d="M5.9 13.2a8.9 8.9 0 0 1 12.2 0" />
      <path d="M9.1 16.6a4.3 4.3 0 0 1 5.8 0" />
      <circle cx="12" cy="19.5" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  );
}
