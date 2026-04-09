import footerLogo from "../../assets/svg/footer-logo.svg";
import { Reveal, RevealGroup, RevealItem } from "../Motion/Reveal";
import "./Footer.css";

const navigationItems = [
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#profissionais", label: "Profissionais" },
  { href: "#online", label: "Online" },
  { href: "#contato", label: "Contato" },
];

const socialLinks = [
  {
    href: "https://www.instagram.com/",
    label: "Instagram",
    icon: <InstagramIcon />,
  },
  {
    href: "https://www.facebook.com/",
    label: "Facebook",
    icon: <FacebookIcon />,
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" aria-labelledby="footer-brand">
      <div className="footer__container">
        <RevealGroup className="footer__top" stagger={0.12}>
          <RevealItem className="footer__brand">
            <div className="footer__brand-header">
              <a
                href="/"
                className="footer__logo"
                id="footer-brand"
                aria-label="AfetivaMente"
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

              <p className="footer__brand-text">
                Clínica multidisciplinar unindo ciência e acolhimento para
                oferecer cuidado completo em saúde mental e física.
              </p>
            </div>

            <nav className="footer__socials" aria-label="Redes sociais">
              {socialLinks.map(({ href, label, icon }, index) => (
                <div className="footer__social-item" key={label}>
                  {index > 0 ? (
                    <span className="footer__social-divider" aria-hidden="true" />
                  ) : null}

                  <a
                    href={href}
                    className="footer__social-link"
                    aria-label={label}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {icon}
                  </a>
                </div>
              ))}
            </nav>
          </RevealItem>

          <RevealItem className="footer__links">
            <p className="footer__heading">Links Rápidos</p>

            <nav className="footer__nav" aria-label="Navegação do rodapé">
              {navigationItems.map(({ href, label }) => (
                <a key={href} href={href} className="footer__nav-link">
                {label}
              </a>
            ))}
            </nav>
          </RevealItem>

          <RevealItem className="footer__legal">
            <p className="footer__heading">Informações Legais</p>

            <p className="footer__legal-copy">
              Registro Profissional
              <br />
              CRP - 08/PJ-02254
            </p>
          </RevealItem>
        </RevealGroup>

        <Reveal className="footer__bottom" distance={18}>
          <p className="footer__copyright">
            © {currentYear} AfetivaMente Clínica. Todos os direitos reservados.
          </p>
        </Reveal>
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
