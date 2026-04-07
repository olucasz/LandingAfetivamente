import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <a href="/" className="header__logo">
          <img src="src/assets/logo.png" alt="Afetivamente" />
        </a>

        <div className="header__right">
          <nav className="header__nav">
            <a href="#sobre" className="header__link">
              Sobre
            </a>
            <a href="#servicos" className="header__link">
              Serviços
            </a>
            <a href="#profissionais" className="header__link">
              Profissionais
            </a>
            <a href="#online" className="header__link">
              Online
            </a>
            <a href="#contato" className="header__link">
              Contato
            </a>
          </nav>

          <a href="#contato" className="header__cta">
            Agendar Consulta
          </a>
        </div>
      </div>
    </header>
  );
}
