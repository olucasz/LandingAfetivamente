import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import servicesSlideOneAvif420 from "../../assets/optimized/services/services-slide-1-420.avif";
import servicesSlideOneAvif840 from "../../assets/optimized/services/services-slide-1-840.avif";
import servicesSlideOneWebp420 from "../../assets/optimized/services/services-slide-1-420.webp";
import servicesSlideOneWebp840 from "../../assets/optimized/services/services-slide-1-840.webp";
import servicesSlideTwoAvif420 from "../../assets/optimized/services/services-slide-2-420.avif";
import servicesSlideTwoAvif840 from "../../assets/optimized/services/services-slide-2-840.avif";
import servicesSlideTwoWebp420 from "../../assets/optimized/services/services-slide-2-420.webp";
import servicesSlideTwoWebp840 from "../../assets/optimized/services/services-slide-2-840.webp";
import servicesSlideThreeAvif420 from "../../assets/optimized/services/services-slide-3-420.avif";
import servicesSlideThreeAvif840 from "../../assets/optimized/services/services-slide-3-840.avif";
import servicesSlideThreeWebp420 from "../../assets/optimized/services/services-slide-3-420.webp";
import servicesSlideThreeWebp840 from "../../assets/optimized/services/services-slide-3-840.webp";
import { WHATSAPP_URL } from "../../constants/whatsapp";
import { RevealGroup, RevealItem } from "../Motion/Reveal";
import "./Services.css";

const benefits = [
  "Atendimento individualizado",
  "Base científica",
  "Foco em autonomia",
  "Acolhimento real",
  "Equipe multidisciplinar",
];

const serviceCards = [
  {
    title: "Psicologia",
    description:
      "Atendimento psicológico, de abordagem cognitivo comportamental ou psicanalítica, para todas as idades",
    icon: <PsychologyIcon />,
  },
  {
    title: "Neuropsicologia",
    description:
      "Avaliação voltada para TEA, TDAH, transtornos específicos de aprendizagem, TAG, TOD, dentre outros. Reabilitação cognitiva e comportamental",
    icon: <NeuropsychologyIcon />,
  },
  {
    title: "Nutrição",
    description:
      "Acompanhamento nutricional personalizado e avaliação para cirurgia bariátrica",
    icon: <NutritionIcon />,
  },
  {
    title: "Psiquiatria",
    description: "Consultas médicas especializadas com enfoque em saúde mental",
    icon: <PsychiatryIcon />,
  },
  {
    title: "Fonoaudiologia",
    description: "Tratamento e avaliação de fala, linguagem e comunicação",
    icon: <SpeechTherapyIcon />,
  },
  {
    title: "Terapias Diversas",
    description:
      "Psicopedagogia, psicomotricidade, terapia ocupacional e tricologia",
    icon: <DiverseTherapiesIcon />,
  },
];

const serviceSlides = [
  {
    id: "services-slide-3",
    alt: "Profissional da clínica em atividade de avaliação nutricional",
    avif420: servicesSlideThreeAvif420,
    avif840: servicesSlideThreeAvif840,
    webp420: servicesSlideThreeWebp420,
    webp840: servicesSlideThreeWebp840,
  },
  {
    id: "services-slide-1",
    alt: "Profissionais da AfetivaMente em alinhamento de atendimento",
    avif420: servicesSlideOneAvif420,
    avif840: servicesSlideOneAvif840,
    webp420: servicesSlideOneWebp420,
    webp840: servicesSlideOneWebp840,
  },
  {
    id: "services-slide-2",
    alt: "Atendimento infantil com atividades de desenho",
    avif420: servicesSlideTwoAvif420,
    avif840: servicesSlideTwoAvif840,
    webp420: servicesSlideTwoWebp420,
    webp840: servicesSlideTwoWebp840,
  },
];

export default function Services() {
  const [featureEmblaRef, featureEmblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
  });
  const [selectedSlideIndex, setSelectedSlideIndex] = useState(0);

  useEffect(() => {
    if (!featureEmblaApi) return;

    function syncSelectedSlide() {
      setSelectedSlideIndex(featureEmblaApi.selectedScrollSnap());
    }

    syncSelectedSlide();
    featureEmblaApi.on("select", syncSelectedSlide);
    featureEmblaApi.on("reInit", syncSelectedSlide);

    return () => {
      featureEmblaApi.off("select", syncSelectedSlide);
      featureEmblaApi.off("reInit", syncSelectedSlide);
    };
  }, [featureEmblaApi]);

  function scrollFeaturePrev() {
    featureEmblaApi?.scrollPrev();
  }

  function scrollFeatureNext() {
    featureEmblaApi?.scrollNext();
  }

  function scrollFeatureTo(index) {
    featureEmblaApi?.scrollTo(index);
  }

  return (
    <section
      className="services"
      id="servicos"
      aria-labelledby="services-title"
    >
      <div className="services__container">
        <RevealGroup as="header" className="services__header" stagger={0.1}>
          <RevealItem as="h2" className="services__title" id="services-title">
            Soluções Especializadas
          </RevealItem>

          <RevealItem as="p" className="services__subtitle">
            A AfetivaMente é humana, feita de gente, que sente, que cuida, que
            transforma, que se vincula.
          </RevealItem>
        </RevealGroup>

        <RevealGroup
          className="services__layout"
          stagger={0.12}
          delayChildren={0.04}
        >
          <RevealItem as="article" className="services__feature-card">
            <div className="services__feature-media">
              <div
                className="services__window-dots"
                aria-label="Fotos de serviços"
              >
                {serviceSlides.map((slide, index) => (
                  <button
                    type="button"
                    key={`dot-${slide.id}`}
                    className={`services__window-dot${
                      index === selectedSlideIndex ? " is-active" : ""
                    }`}
                    onClick={() => scrollFeatureTo(index)}
                    aria-label={`Ir para foto ${index + 1}`}
                    aria-pressed={index === selectedSlideIndex}
                  />
                ))}
              </div>

              <button
                type="button"
                className="services__feature-arrow services__feature-arrow--left"
                onClick={scrollFeaturePrev}
                aria-label="Ver foto anterior"
                disabled={!featureEmblaApi}
              >
                &#8249;
              </button>

              <button
                type="button"
                className="services__feature-arrow services__feature-arrow--right"
                onClick={scrollFeatureNext}
                aria-label="Ver próxima foto"
                disabled={!featureEmblaApi}
              >
                &#8250;
              </button>

              <div className="services__feature-viewport" ref={featureEmblaRef}>
                <div className="services__feature-track">
                  {serviceSlides.map((slide, index) => (
                    <div className="services__feature-slide" key={slide.id}>
                      <picture className="services__feature-picture">
                        <source
                          type="image/avif"
                          srcSet={`${slide.avif420} 420w, ${slide.avif840} 840w`}
                          sizes="(max-width: 767px) calc(100vw - 64px), 380px"
                        />
                        <source
                          type="image/webp"
                          srcSet={`${slide.webp420} 420w, ${slide.webp840} 840w`}
                          sizes="(max-width: 767px) calc(100vw - 64px), 380px"
                        />
                        <img
                          src={slide.webp840}
                          alt={slide.alt}
                          width="840"
                          height="560"
                          loading={index === 0 ? "eager" : "lazy"}
                          decoding="async"
                          fetchPriority={index === 0 ? "high" : "low"}
                        />
                      </picture>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="services__feature-body">
              {benefits.map((benefit) => (
                <div key={benefit} className="services__benefit">
                  <BenefitCheckIcon />
                  <span>{benefit}</span>
                </div>
              ))}

              <a
                href={WHATSAPP_URL}
                className="services__feature-cta"
                target="_blank"
                rel="noopener noreferrer"
              >
                Saber Mais
                <ArrowOutIcon />
              </a>
            </div>
          </RevealItem>

          <RevealGroup
            className="services__grid"
            stagger={0.08}
            delayChildren={0.06}
          >
            {serviceCards.map(({ title, description, icon }) => (
              <RevealItem as="article" key={title} className="services__card">
                <div className="services__card-heading">
                  <span className="services__card-icon" aria-hidden="true">
                    {icon}
                  </span>

                  <h3 className="services__card-title">{title}</h3>
                </div>

                <p className="services__card-description">{description}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </RevealGroup>
      </div>
    </section>
  );
}

function BenefitCheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="8.5" />
      <path d="M8.5 12.2l2.2 2.2 4.8-5.1" />
    </svg>
  );
}

function ArrowOutIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M8 16 16 8" />
      <path d="M9 8h7v7" />
    </svg>
  );
}

function PsychologyIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M12 4v16" />
      <path d="M10.4 6.2a3.5 3.5 0 0 0-4.9 3.2v1.2a2.8 2.8 0 0 0 2 2.7v.9a3.3 3.3 0 0 0 3.3 3.3H12" />
      <path d="M13.6 6.2a3.5 3.5 0 0 1 4.9 3.2v1.2a2.8 2.8 0 0 1-2 2.7v.9a3.3 3.3 0 0 1-3.3 3.3H12" />
    </svg>
  );
}

function NeuropsychologyIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M9.2 4h3.3a1 1 0 0 1 1 1v1.7a2 2 0 1 0 3.7 1.1H19a1 1 0 0 1 1 1v3.2a1 1 0 0 1-1 1h-1.8a2 2 0 1 0-1.1 3.7V19a1 1 0 0 1-1 1h-3.3a1 1 0 0 1-1-1v-1.8a2 2 0 1 0-3.7-1.1H5a1 1 0 0 1-1-1v-3.2a1 1 0 0 1 1-1h1.8a2 2 0 1 0 1.1-3.7V5a1 1 0 0 1 1-1Z" />
    </svg>
  );
}

function NutritionIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M12 7c1.8-2.2 4.2-2.6 5.7-2.4-.3 2.1-1.5 3.7-3.4 4.3" />
      <path d="M12 8.3c-1.5-1.9-3.6-2.6-5.8-2.2-.4 1.1-.4 2.4 0 3.5.7 1.9 2.3 3.1 4.2 3.4" />
      <path d="M12 8.3c3.9 0 7 2.8 7 6.6 0 3.1-2.7 5.1-7 5.1s-7-2-7-5.1c0-3.8 3.1-6.6 7-6.6Z" />
      <path d="M12 8.3V5" />
    </svg>
  );
}

function PsychiatryIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M8 5v5.5a4 4 0 0 0 8 0V5" />
      <path d="M8 5H6.5a1.5 1.5 0 0 0 0 3H8" />
      <path d="M16 5h1.5a1.5 1.5 0 0 1 0 3H16" />
      <path d="M12 14.5v2.2a3.3 3.3 0 0 0 3.3 3.3H17" />
      <circle cx="18.5" cy="20" r="1.5" />
    </svg>
  );
}

function SpeechTherapyIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M6 7.5A3.5 3.5 0 0 1 9.5 4H13a5 5 0 0 1 0 10H9.5L6 17.5V7.5Z" />
      <path d="M16.2 8.3a3.6 3.6 0 0 1 0 5.4" />
      <path d="M18.8 6.5a6 6 0 0 1 0 9" />
    </svg>
  );
}

function DiverseTherapiesIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M12 4 18.5 6.4v4.8c0 4.3-2.7 7.8-6.5 8.8-3.8-1-6.5-4.5-6.5-8.8V6.4L12 4Z" />
      <path d="m9.5 12.1 1.7 1.8 3.3-3.6" />
    </svg>
  );
}
