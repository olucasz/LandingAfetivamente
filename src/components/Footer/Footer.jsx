import footerLogo from "../../assets/optimized/footer/footer-logo-180.webp";
import { navigationItems } from "../../constants/navigation";
import {
  PRIVACY_POLICY_PATH,
  resolveNavigationHref,
} from "../../constants/routes";
import { scrollToHashTarget } from "../../utils/hashNavigation";
import "./Footer.css";

const socialLinks = [
  {
    href: "https://www.instagram.com/afetivamenteclinica/",
    label: "Instagram",
    icon: <InstagramIcon />,
  },
  {
    href: "https://www.facebook.com/afetivamenteclinica/?locale=pt_BR",
    label: "Facebook",
    icon: <FacebookIcon />,
  },
];

export default function Footer({
  homeHref = "#home",
  navigationBasePath = "",
}) {
  const currentYear = new Date().getFullYear();
  const isPrivacyPolicyPage =
    typeof window !== "undefined" &&
    window.location.pathname === PRIVACY_POLICY_PATH;

  const handleNavigationClick = (event, href) => {
    scrollToHashTarget(event, href);
  };

  return (
    <footer className="footer" aria-labelledby="footer-brand">
      <div className="footer__container">
        <div className="footer__top">
          <div className="footer__brand">
            <div className="footer__brand-header">
              <a
                href={homeHref}
                className="footer__logo"
                id="footer-brand"
                aria-label="AfetivaMente"
                onClick={(event) => handleNavigationClick(event, homeHref)}
              >
                <img
                  src={footerLogo}
                  alt="AfetivaMente"
                  width="100"
                  height="104"
                  loading="lazy"
                  decoding="async"
                  fetchPriority="low"
                />
              </a>
            </div>

            <nav className="footer__socials" aria-label="Redes sociais">
              {socialLinks.map(({ href, label, icon }) => (
                <a
                  href={href}
                  className={`footer__social-link${
                    label === "Facebook" ? " footer__social-link--facebook" : ""
                  }`}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={label}
                >
                  {icon}
                </a>
              ))}
            </nav>
          </div>

          <div className="footer__links">
            <p className="footer__heading">Links Rápidos</p>

            <nav className="footer__nav" aria-label="Navegação do rodapé">
              {navigationItems.map(({ href, label }) => (
                <a
                  key={href}
                  href={resolveNavigationHref(navigationBasePath, href)}
                  className="footer__nav-link"
                  onClick={(event) => handleNavigationClick(event, href)}
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>

          <div className="footer__legal">
            <p className="footer__heading">Informações Legais</p>

            <p className="footer__legal-copy">
              Registro Profissional
              <br />
              CRP - 08/PJ-02254
            </p>

            <a
              href={PRIVACY_POLICY_PATH}
              className="footer__legal-link"
              aria-current={isPrivacyPolicyPage ? "page" : undefined}
            >
              Política de Privacidade
            </a>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            © {currentYear} AfetivaMente Clínica. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect x="3.75" y="3.75" width="16.5" height="16.5" rx="4.5" />
      <circle cx="12" cy="12" r="3.75" />
      <circle cx="17.2" cy="6.8" r="0.95" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M14.1 20v-6.3h2.3l.4-2.7h-2.7V9.3c0-.8.3-1.6 1.6-1.6H17V5.4c-.3 0-.9-.1-1.8-.1-2.7 0-4.3 1.6-4.3 4.4v1.3H8.6v2.7h2.3V20" />
    </svg>
  );
}
