import { m, useReducedMotion } from "motion/react";
import avatar1 from "../../assets/avatar-jpg/avatar1.jpg";
import avatar2 from "../../assets/avatar-jpg/avatar2.jpg";
import avatar3 from "../../assets/avatar-jpg/avatar3.jpg";
import calendarIcon from "../../assets/Calendar.png";
import heartIcon from "../../assets/Heart.png";
import heroMainImage from "../../assets/jpg/imagemcapa1.jpg";
import heroTopImage from "../../assets/jpg/imagemcapa2.jpg";
import heroBottomImage from "../../assets/jpg/imagemcapa3.jpg";
import { fadeUp, motionEase, staggerContainer } from "../Motion/motionTokens";
import "./Hero.css";

export default function Hero() {
  const MotionDiv = m.div;
  const MotionTitle = m.h1;
  const MotionParagraph = m.p;
  const MotionLink = m.a;
  const shouldReduceMotion = useReducedMotion();
  const heroInitial = shouldReduceMotion ? false : "hidden";
  const heroAnimate = shouldReduceMotion ? undefined : "visible";

  return (
    <section className="hero">
      <div className="hero__container">
        {/* LEFT */}
        <MotionDiv
          className="hero__content"
          initial={heroInitial}
          animate={heroAnimate}
          variants={staggerContainer(0.14, 0.08)}
        >
          <MotionTitle className="hero__title" variants={fadeUp(20)}>
            Transformando vidas
            <br />
            com <span>ciência e afeto</span>
          </MotionTitle>

          <MotionParagraph className="hero__description" variants={fadeUp(20)}>
            Psicoterapia baseada em evidências, com acolhimento real e cuidado
            individualizado. Aqui, seu processo emocional ganha espaço seguro e
            acompanhamento profissional
          </MotionParagraph>

          <MotionDiv className="hero__actions" variants={fadeUp(24)}>
            <MotionLink
              href="#contato"
              className="hero__cta"
              whileHover={shouldReduceMotion ? undefined : { y: -2 }}
              whileTap={shouldReduceMotion ? undefined : { scale: 0.985 }}
              transition={{ duration: 0.2, ease: motionEase }}
            >
              Fale com a nossa equipe
              <span className="hero__cta-icon">↗</span>
            </MotionLink>

            <MotionDiv className="hero__support" variants={fadeUp(20)}>
              <div className="hero__avatars">
                <img src={avatar3} alt="" decoding="async" />
                <img src={avatar2} alt="" decoding="async" />
                <img src={avatar1} alt="" decoding="async" />
              </div>

              <p className="hero__support-text">
                Atendimento humanizado
                <br />
                para crianças, jovens e adultos
              </p>
            </MotionDiv>
          </MotionDiv>
        </MotionDiv>

        {/* RIGHT */}
        <MotionDiv
          className="hero__media"
          initial={heroInitial}
          animate={heroAnimate}
          variants={staggerContainer(0.12, 0.18)}
        >
          <div className="hero__media-stage">
            <MotionDiv className="hero__media-main" variants={fadeUp(28)}>
              <div className="hero__oval hero__oval--main">
                <img
                  src={heroMainImage}
                  alt=""
                  width="320"
                  height="631"
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                />
              </div>
            </MotionDiv>

            <MotionDiv className="hero__side" variants={fadeUp(30)}>
              <div className="hero__oval hero__oval--top">
                <img
                  src={heroTopImage}
                  alt=""
                  width="211"
                  height="480"
                  loading="eager"
                  decoding="async"
                  fetchPriority="low"
                />
              </div>

              <div className="hero__oval hero__oval--bottom">
                <img
                  src={heroBottomImage}
                  alt=""
                  width="211"
                  height="300"
                  loading="eager"
                  decoding="async"
                  fetchPriority="low"
                />
              </div>
            </MotionDiv>

            <MotionDiv className="hero__card hero__card--left" variants={fadeUp(20)}>
              <div className="hero__card-icon">
                <img
                  src={calendarIcon}
                  alt=" "
                  width="26"
                  height="26"
                  decoding="async"
                />
              </div>
              <div className="hero__card-copy">
                <strong>Presencial e Online</strong>
                <span>Horários Flexíveis</span>
              </div>
            </MotionDiv>

            <MotionDiv className="hero__card hero__card--right" variants={fadeUp(20)}>
              <div className="hero__card-icon">
                <img
                  src={heartIcon}
                  alt=" "
                  width="31"
                  height="30"
                  decoding="async"
                />
              </div>
              <div className="hero__card-copy">
                <strong>+1200</strong>
                <span>Pacientes Atendidos</span>
              </div>
            </MotionDiv>
          </div>
        </MotionDiv>
      </div>
    </section>
  );
}
