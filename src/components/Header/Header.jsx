import { useEffect, useRef, useState } from "react";
import logo from "../../assets/header-logo.png";
import { navigationItems } from "../../constants/navigation";
import { WHATSAPP_URL } from "../../constants/whatsapp";
import "./Header.css";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isScrolledRef = useRef(false);

  useEffect(() => {
    let frameId = null;

    function syncScrolledState() {
      const nextScrolled = window.scrollY > 18;

      if (isScrolledRef.current === nextScrolled) return;

      isScrolledRef.current = nextScrolled;
      setIsScrolled(nextScrolled);
    }

    function onScroll() {
      if (frameId !== null) return;

      frameId = window.requestAnimationFrame(() => {
        frameId = null;
        syncScrolledState();
      });
    }

    syncScrolledState();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);

      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, []);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen((isOpen) => !isOpen);
  };

  const handleNavigationClick = (event, href) => {
    if (!href.startsWith("#")) return;

    const target = document.getElementById(href.slice(1));
    if (!target) return;

    event.preventDefault();
    setIsMobileMenuOpen(false);

    const header = document.querySelector(".header");
    const headerHeight = header?.getBoundingClientRect().height ?? 0;
    const targetTop = target.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: Math.max(targetTop - headerHeight - 16, 0),
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
    });

    window.history.pushState(null, "", href);
  };

  return (
    <header
      className={`header ${isMobileMenuOpen ? "header--menu-open" : ""} ${
        isScrolled ? "header--scrolled" : ""
      }`}
    >
      <div className="header__container">
        <a href="/" className="header__logo">
          <img
            src={logo}
            alt="Afetivamente"
            width="580"
            height="120"
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
              <a
                key={href}
                href={href}
                className="header__link"
                onClick={(event) => handleNavigationClick(event, href)}
              >
                {label}
              </a>
            ))}
          </nav>

          <a
            href={WHATSAPP_URL}
            className="header__cta"
            target="_blank"
            rel="noopener noreferrer"
          >
            Agendar Consulta
          </a>
        </div>
      </div>

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
              onClick={(event) => handleNavigationClick(event, href)}
            >
              {label}
            </a>
          ))}
        </nav>

        <a
          href={WHATSAPP_URL}
          className="header__mobile-cta"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Agendar Consulta
        </a>
      </div>
    </header>
  );
}
