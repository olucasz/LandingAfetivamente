import aboutGalleryOne from "../../assets/about-jpg/sobre1.jpg";
import aboutGalleryTwo from "../../assets/about-jpg/sobre2.jpg";
import aboutGalleryThree from "../../assets/about-jpg/sobre3.jpg";
import aboutTeamImage from "../../assets/about-jpg/teamSobre.jpg";
import { RevealGroup, RevealItem } from "../Motion/Reveal";
import "./About.css";

export default function About() {
  return (
    <section className="about" id="sobre">
      <div className="about__container">
        <RevealGroup
          className="about__block about__block--top"
          stagger={0.14}
          delayChildren={0.04}
        >
          <RevealItem as="h2" className="about__title">
            Sobre a <span>AfetivaMente</span>
          </RevealItem>

          <RevealGroup className="about__top-grid" stagger={0.14}>
            <RevealItem
              className="about__image-box"
              whileHover={{ y: -4 }}
            >
              <img
                src={aboutTeamImage}
                alt="Equipe da clínica AfetivaMente"
                width="545"
                height="363"
                loading="lazy"
                decoding="async"
                fetchPriority="low"
              />
            </RevealItem>

            <RevealItem className="about__text-box">
              <p>
                A <strong>AfetivaMente</strong> é uma clínica multidisciplinar
                que une ciência e acolhimento para oferecer um cuidado completo
                em saúde mental. Surgimos em 2021 do desejo de criar um espaço
                de atendimento integral.
              </p>
            </RevealItem>
          </RevealGroup>
        </RevealGroup>
      </div>

      <div className="about__highlight">
        <div className="about__container">
          <RevealGroup
            className="about__block about__block--bottom"
            stagger={0.12}
            delayChildren={0.04}
          >
            <RevealItem as="h3" className="about__subtitle">
              Um olhar <span>completo </span>
              para a sua saúde mental
            </RevealItem>

            <RevealItem as="p" className="about__description">
              Nosso atendimento é baseado em evidências científicas e realizado
              por uma <strong>equipe qualificada</strong>, que acolhe cada
              pessoa de forma única, respeitando sua história, suas necessidades
              e seu tempo, com foco no desenvolvimento da autonomia emocional e
              da qualidade de vida.
            </RevealItem>

            <RevealGroup className="about__gallery" stagger={0.1}>
              <RevealItem
                className="about__gallery-item"
                whileHover={{ y: -4 }}
              >
                <img
                  src={aboutGalleryOne}
                  alt="Atendimento acolhedor para crianças e famílias"
                  width="326"
                  height="305"
                  loading="lazy"
                  decoding="async"
                  fetchPriority="low"
                />
              </RevealItem>

              <RevealItem
                className="about__gallery-item"
                whileHover={{ y: -4 }}
              >
                <img
                  src={aboutGalleryTwo}
                  alt="Atendimento terapêutico com acompanhamento profissional"
                  width="326"
                  height="305"
                  loading="lazy"
                  decoding="async"
                  fetchPriority="low"
                />
              </RevealItem>

              <RevealItem
                className="about__gallery-item"
                whileHover={{ y: -4 }}
              >
                <img
                  src={aboutGalleryThree}
                  alt="Atividades terapêuticas e desenvolvimento emocional"
                  width="326"
                  height="305"
                  loading="lazy"
                  decoding="async"
                  fetchPriority="low"
                />
              </RevealItem>
            </RevealGroup>
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
