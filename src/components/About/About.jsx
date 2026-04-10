import aboutGalleryOneAvif326 from "../../assets/optimized/about/sobre1-326.avif";
import aboutGalleryOneAvif652 from "../../assets/optimized/about/sobre1-652.avif";
import aboutGalleryOneWebp326 from "../../assets/optimized/about/sobre1-326.webp";
import aboutGalleryOneWebp652 from "../../assets/optimized/about/sobre1-652.webp";
import aboutGalleryTwoAvif326 from "../../assets/optimized/about/sobre2-326.avif";
import aboutGalleryTwoAvif652 from "../../assets/optimized/about/sobre2-652.avif";
import aboutGalleryTwoWebp326 from "../../assets/optimized/about/sobre2-326.webp";
import aboutGalleryTwoWebp652 from "../../assets/optimized/about/sobre2-652.webp";
import aboutGalleryThreeAvif326 from "../../assets/optimized/about/sobre3-326.avif";
import aboutGalleryThreeAvif652 from "../../assets/optimized/about/sobre3-652.avif";
import aboutGalleryThreeWebp326 from "../../assets/optimized/about/sobre3-326.webp";
import aboutGalleryThreeWebp652 from "../../assets/optimized/about/sobre3-652.webp";
import aboutTeamImageAvif420 from "../../assets/optimized/about/teamSobre-420.avif";
import aboutTeamImageAvif545 from "../../assets/optimized/about/teamSobre-545.avif";
import aboutTeamImageAvif840 from "../../assets/optimized/about/teamSobre-840.avif";
import aboutTeamImageAvif1200 from "../../assets/optimized/about/teamSobre-1200.avif";
import aboutTeamImageWebp420 from "../../assets/optimized/about/teamSobre-420.webp";
import aboutTeamImageWebp545 from "../../assets/optimized/about/teamSobre-545.webp";
import aboutTeamImageWebp840 from "../../assets/optimized/about/teamSobre-840.webp";
import aboutTeamImageWebp1200 from "../../assets/optimized/about/teamSobre-1200.webp";
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
              <picture>
                <source
                  type="image/avif"
                  srcSet={`${aboutTeamImageAvif420} 420w, ${aboutTeamImageAvif545} 545w, ${aboutTeamImageAvif840} 840w, ${aboutTeamImageAvif1200} 1200w`}
                  sizes="(max-width: 767px) calc(100vw - 64px), (max-width: 1199px) 46vw, 600px"
                />
                <source
                  type="image/webp"
                  srcSet={`${aboutTeamImageWebp420} 420w, ${aboutTeamImageWebp545} 545w, ${aboutTeamImageWebp840} 840w, ${aboutTeamImageWebp1200} 1200w`}
                  sizes="(max-width: 767px) calc(100vw - 64px), (max-width: 1199px) 46vw, 600px"
                />
                <img
                  src={aboutTeamImageWebp1200}
                  alt="Equipe da clínica AfetivaMente"
                  width="545"
                  height="363"
                  loading="lazy"
                  decoding="async"
                  fetchPriority="low"
                />
              </picture>
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
                <picture>
                  <source
                    type="image/avif"
                    srcSet={`${aboutGalleryOneAvif326} 326w, ${aboutGalleryOneAvif652} 652w`}
                    sizes="(max-width: 767px) 90vw, (max-width: 1199px) 33vw, 360px"
                  />
                  <source
                    type="image/webp"
                    srcSet={`${aboutGalleryOneWebp326} 326w, ${aboutGalleryOneWebp652} 652w`}
                    sizes="(max-width: 767px) 90vw, (max-width: 1199px) 33vw, 360px"
                  />
                  <img
                    src={aboutGalleryOneWebp652}
                    alt="Atendimento acolhedor para crianças e famílias"
                    width="326"
                    height="305"
                    loading="lazy"
                    decoding="async"
                    fetchPriority="low"
                  />
                </picture>
              </RevealItem>

              <RevealItem
                className="about__gallery-item"
                whileHover={{ y: -4 }}
              >
                <picture>
                  <source
                    type="image/avif"
                    srcSet={`${aboutGalleryTwoAvif326} 326w, ${aboutGalleryTwoAvif652} 652w`}
                    sizes="(max-width: 767px) 90vw, (max-width: 1199px) 33vw, 360px"
                  />
                  <source
                    type="image/webp"
                    srcSet={`${aboutGalleryTwoWebp326} 326w, ${aboutGalleryTwoWebp652} 652w`}
                    sizes="(max-width: 767px) 90vw, (max-width: 1199px) 33vw, 360px"
                  />
                  <img
                    src={aboutGalleryTwoWebp652}
                    alt="Atendimento terapêutico com acompanhamento profissional"
                    width="326"
                    height="305"
                    loading="lazy"
                    decoding="async"
                    fetchPriority="low"
                  />
                </picture>
              </RevealItem>

              <RevealItem
                className="about__gallery-item"
                whileHover={{ y: -4 }}
              >
                <picture>
                  <source
                    type="image/avif"
                    srcSet={`${aboutGalleryThreeAvif326} 326w, ${aboutGalleryThreeAvif652} 652w`}
                    sizes="(max-width: 767px) 90vw, (max-width: 1199px) 33vw, 360px"
                  />
                  <source
                    type="image/webp"
                    srcSet={`${aboutGalleryThreeWebp326} 326w, ${aboutGalleryThreeWebp652} 652w`}
                    sizes="(max-width: 767px) 90vw, (max-width: 1199px) 33vw, 360px"
                  />
                  <img
                    src={aboutGalleryThreeWebp652}
                    alt="Atividades terapêuticas e desenvolvimento emocional"
                    width="326"
                    height="305"
                    loading="lazy"
                    decoding="async"
                    fetchPriority="low"
                  />
                </picture>
              </RevealItem>
            </RevealGroup>
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
