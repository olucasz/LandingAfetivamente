import { useEffect, useRef, useState } from "react";
import { m } from "motion/react";
import avatar1 from "../../assets/avatar-jpg/avatar1.jpg";
import avatar2 from "../../assets/avatar-jpg/avatar2.jpg";
import avatar3 from "../../assets/avatar-jpg/avatar3.jpg";
import calendarIcon from "../../assets/Calendar.png";
import heartIcon from "../../assets/Heart.png";
import heroBottomOvalAvif142 from "../../assets/optimized/hero/hero-bottom-oval-142.avif";
import heroBottomOvalAvif211 from "../../assets/optimized/hero/hero-bottom-oval-211.avif";
import heroBottomOvalWebp142 from "../../assets/optimized/hero/hero-bottom-oval-142.webp";
import heroBottomOvalWebp211 from "../../assets/optimized/hero/hero-bottom-oval-211.webp";
import heroMainOvalAvif220 from "../../assets/optimized/hero/hero-main-oval-220.avif";
import heroMainOvalAvif321 from "../../assets/optimized/hero/hero-main-oval-321.avif";
import heroMainOvalWebp220 from "../../assets/optimized/hero/hero-main-oval-220.webp";
import heroMainOvalWebp321 from "../../assets/optimized/hero/hero-main-oval-321.webp";
import heroTopOvalAvif142 from "../../assets/optimized/hero/hero-top-oval-142.avif";
import heroTopOvalAvif211 from "../../assets/optimized/hero/hero-top-oval-211.avif";
import heroTopOvalWebp142 from "../../assets/optimized/hero/hero-top-oval-142.webp";
import heroTopOvalWebp211 from "../../assets/optimized/hero/hero-top-oval-211.webp";
import { WHATSAPP_URL } from "../../constants/whatsapp";
import { fadeUp, staggerContainer } from "../Motion/motionTokens";
import { useMotionBudget } from "../Motion/useMotionBudget";
import "./Hero.css";

export default function Hero() {
  const heroSectionRef = useRef(null);
  const [isVisualAnimated, setIsVisualAnimated] = useState(false);
  const [isHeroInView, setIsHeroInView] = useState(true);
  const MotionDiv = m.div;
  const MotionTitle = m.h1;
  const MotionParagraph = m.p;
  const shouldReduceMotion = useMotionBudget();
  const heroInitial = shouldReduceMotion ? false : "hidden";
  const heroAnimate = shouldReduceMotion ? undefined : "visible";

  useEffect(() => {
    if (shouldReduceMotion || typeof window === "undefined") {
      return undefined;
    }

    if (!("IntersectionObserver" in window)) {
      return undefined;
    }

    const heroNode = heroSectionRef.current;
    if (!heroNode) {
      return undefined;
    }

    const observer = new window.IntersectionObserver(
      ([entry]) => {
        setIsHeroInView(entry.isIntersecting);
      },
      {
        threshold: 0.06,
        rootMargin: "140px 0px 140px 0px",
      },
    );

    observer.observe(heroNode);

    return () => {
      observer.disconnect();
    };
  }, [shouldReduceMotion]);

  useEffect(() => {
    if (shouldReduceMotion || !isHeroInView || isVisualAnimated) {
      return undefined;
    }

    let hasStarted = false;
    let idleId;
    let timeoutId;

    const startVisualMotion = () => {
      if (hasStarted) return;
      hasStarted = true;
      setIsVisualAnimated(true);
    };

    if ("requestIdleCallback" in window) {
      idleId = window.requestIdleCallback(startVisualMotion, { timeout: 1400 });
    }

    timeoutId = window.setTimeout(startVisualMotion, 1100);

    return () => {
      window.clearTimeout(timeoutId);

      if (idleId && "cancelIdleCallback" in window) {
        window.cancelIdleCallback(idleId);
      }
    };
  }, [isHeroInView, isVisualAnimated, shouldReduceMotion]);

  return (
    <section className="hero" ref={heroSectionRef}>
      <div className="hero__container">
        {/* LEFT */}
        <MotionDiv
          className="hero__content"
          initial={heroInitial}
          animate={heroAnimate}
          variants={staggerContainer(0.14, 0.08)}
        >
          <MotionDiv className="hero__eyebrow" variants={fadeUp(16)}>
            AfetivaMente • Clínica de Psicologia e Saúde
          </MotionDiv>

          <MotionTitle className="hero__title" variants={fadeUp(20)}>
            Transformando vidas
            <br />
            com <span>ciência e afeto</span>
          </MotionTitle>

          <MotionParagraph className="hero__description" variants={fadeUp(20)}>
            Tratamentos com acolhimento real e cuidado individualizado. Aqui,
            seu processo emocional ganha espaço seguro e acompanhamento
            profissional
          </MotionParagraph>

          <MotionDiv className="hero__actions" variants={fadeUp(24)}>
            <a
              href={WHATSAPP_URL}
              className="hero__cta"
              target="_blank"
              rel="noopener noreferrer"
            >
              Fale com a nossa equipe
              <span className="hero__cta-icon" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8 16 16 8" />
                  <path d="M9 8h7v7" />
                </svg>
              </span>
            </a>

            <MotionDiv className="hero__support" variants={fadeUp(20)}>
              <div className="hero__avatars">
                <img
                  src={avatar3}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  fetchPriority="low"
                />
                <img
                  src={avatar2}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  fetchPriority="low"
                />
                <img
                  src={avatar1}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  fetchPriority="low"
                />
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
        <div className="hero__media">
          <div
            className={`hero__media-stage${
              isVisualAnimated && !shouldReduceMotion ? " is-animated" : ""
            }${isHeroInView ? " is-in-view" : ""}`}
          >
            <picture className="hero__oval-picture hero__oval-picture--main">
              <source
                type="image/avif"
                srcSet={`${heroMainOvalAvif220} 220w, ${heroMainOvalAvif321} 321w`}
                sizes="(max-width: 767px) 204px, (max-width: 1199px) 225px, 260px"
              />
              <source
                type="image/webp"
                srcSet={`${heroMainOvalWebp220} 220w, ${heroMainOvalWebp321} 321w`}
                sizes="(max-width: 767px) 204px, (max-width: 1199px) 225px, 260px"
              />
              <img
                className="hero__oval-image"
                src={heroMainOvalWebp321}
                alt=""
                width="321"
                height="666"
                loading="eager"
                decoding="async"
                fetchPriority="high"
              />
            </picture>

            <div className="hero__side">
              <picture className="hero__oval-picture hero__oval-picture--top">
                <source
                  type="image/avif"
                  srcSet={`${heroTopOvalAvif142} 142w, ${heroTopOvalAvif211} 211w`}
                  sizes="(max-width: 767px) 104px, (max-width: 1199px) 118px, 142px"
                />
                <source
                  type="image/webp"
                  srcSet={`${heroTopOvalWebp142} 142w, ${heroTopOvalWebp211} 211w`}
                  sizes="(max-width: 767px) 104px, (max-width: 1199px) 118px, 142px"
                />
                <img
                  className="hero__oval-image"
                  src={heroTopOvalWebp211}
                  alt=""
                  width="211"
                  height="480"
                  loading="lazy"
                  decoding="async"
                  fetchPriority="low"
                />
              </picture>

              <picture className="hero__oval-picture hero__oval-picture--bottom">
                <source
                  type="image/avif"
                  srcSet={`${heroBottomOvalAvif142} 142w, ${heroBottomOvalAvif211} 211w`}
                  sizes="(max-width: 767px) 104px, (max-width: 1199px) 118px, 142px"
                />
                <source
                  type="image/webp"
                  srcSet={`${heroBottomOvalWebp142} 142w, ${heroBottomOvalWebp211} 211w`}
                  sizes="(max-width: 767px) 104px, (max-width: 1199px) 118px, 142px"
                />
                <img
                  className="hero__oval-image"
                  src={heroBottomOvalWebp211}
                  alt=""
                  width="211"
                  height="365"
                  loading="lazy"
                  decoding="async"
                  fetchPriority="low"
                />
              </picture>
            </div>

            <div className="hero__card hero__card--left">
              <div className="hero__card-inner">
                <div className="hero__card-icon">
                  <img
                    src={calendarIcon}
                    alt=" "
                    width="26"
                    height="26"
                    loading="lazy"
                    decoding="async"
                    fetchPriority="low"
                  />
                </div>
                <div className="hero__card-copy">
                  <strong>Presencial e Online</strong>
                  <span>Horários Flexíveis</span>
                </div>
              </div>
            </div>

            <div className="hero__card hero__card--right">
              <div className="hero__card-inner">
                <div className="hero__card-icon">
                  <img
                    src={heartIcon}
                    alt=" "
                    width="31"
                    height="30"
                    loading="lazy"
                    decoding="async"
                    fetchPriority="low"
                  />
                </div>
                <div className="hero__card-copy">
                  <strong>+1200</strong>
                  <span>Pacientes Atendidos</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
