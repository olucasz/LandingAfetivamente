import { useState } from "react";
import { m, useMotionValueEvent, useReducedMotion, useScroll } from "motion/react";
import logo from "../../assets/jpg/logo.jpg";
import { motionEase } from "../Motion/motionTokens";
import "./Header.css";

const navigationItems = [
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#profissionais", label: "Profissionais" },
  { href: "#online", label: "Online" },
  { href: "#contato", label: "Contato" },
];

export default function Header() {
  const MotionHeader = m.header;
  const MotionDiv = m.div;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 18);
  });

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen((isOpen) => !isOpen);
  };

  const handleMobileMenuClose = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <MotionHeader
      className={`header ${isMobileMenuOpen ? "header--menu-open" : ""} ${
        isScrolled ? "header--scrolled" : ""
      }`}
      initial={shouldReduceMotion ? false : { opacity: 0, y: -20 }}
      animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: motionEase }}
    >
      <MotionDiv
        className="header__container"
        animate={
          shouldReduceMotion
            ? undefined
            : {
                y: isScrolled ? 1 : 0,
                scale: isScrolled ? 0.992 : 1,
              }
        }
        transition={{ duration: 0.28, ease: motionEase }}
      >
        <a href="/" className="header__logo">
          <img
            src={logo}
            alt="Afetivamente"
            width="560"
            height="116"
            decoding="async"
            fetchPriority="high"
          />
        </a>

        <button
          type="button"
          className="header__menu-button"
          aria-expanded={isMobileMenuOpen}
          aria-controls="header-mobile-menu"
          aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          onClick={handleMobileMenuToggle}
        >
          <span className="header__menu-line" aria-hidden="true" />
          <span className="header__menu-line" aria-hidden="true" />
          <span className="header__menu-line" aria-hidden="true" />
        </button>

        <div className="header__right">
          <nav className="header__nav">
            {navigationItems.map(({ href, label }) => (
              <a key={href} href={href} className="header__link">
                {label}
              </a>
            ))}
          </nav>

          <a href="#contato" className="header__cta">
            Agendar Consulta
          </a>
        </div>
      </MotionDiv>

      <div
        id="header-mobile-menu"
        className={`header__mobile-menu ${isMobileMenuOpen ? "is-open" : ""}`}
        aria-hidden={!isMobileMenuOpen}
      >
        <nav className="header__mobile-nav">
          {navigationItems.map(({ href, label }) => (
            <a
              key={`mobile-${href}`}
              href={href}
              className="header__mobile-link"
              onClick={handleMobileMenuClose}
            >
              {label}
            </a>
          ))}
        </nav>

        <a
          href="#contato"
          className="header__mobile-cta"
          onClick={handleMobileMenuClose}
        >
          Agendar Consulta
        </a>
      </div>
    </MotionHeader>
  );
}
