import { useEffect, useRef, useState } from "react";
import logo from "../../assets/header-logo.png";
import { navigationItems } from "../../constants/navigation";
import { resolveNavigationHref } from "../../constants/routes";
import { WHATSAPP_URL } from "../../constants/whatsapp";
import { scrollToHashTarget } from "../../utils/hashNavigation";
import "./Header.css";

export default function Header({
  homeHref = "#home",
  navigationBasePath = "",
  ctaHref = WHATSAPP_URL,
}) {
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
    const didScroll = scrollToHashTarget(event, href, {
      onBeforeScroll: () => setIsMobileMenuOpen(false),
    });

    if (!didScroll) {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`header ${isMobileMenuOpen ? "header--menu-open" : ""} ${
        isScrolled ? "header--scrolled" : ""
      }`}
    >
      <div className="header__container">
        <a
          href={homeHref}
          className="header__logo"
          onClick={(event) => handleNavigationClick(event, homeHref)}
        >
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
                href={resolveNavigationHref(navigationBasePath, href)}
                className="header__link"
                onClick={(event) => handleNavigationClick(event, href)}
              >
                {label}
              </a>
            ))}
          </nav>

          <a
            href={ctaHref}
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
              href={resolveNavigationHref(navigationBasePath, href)}
              className="header__mobile-link"
              onClick={(event) => handleNavigationClick(event, href)}
            >
              {label}
            </a>
          ))}
        </nav>

        <a
          href={ctaHref}
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
