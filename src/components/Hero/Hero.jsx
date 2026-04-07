import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__container">
        {/* LEFT */}
        <div className="hero__content">
          <h1 className="hero__title">
            Transformando vidas
            <br />
            com <span>ciência e afeto</span>
          </h1>

          <p className="hero__description">
            Psicoterapia baseada em evidências, com acolhimento real e cuidado
            individualizado. Aqui, seu processo emocional ganha espaço seguro e
            acompanhamento profissional
          </p>

          <div className="hero__actions">
            <a href="#contato" className="hero__cta">
              Fale com a nossa equipe
              <span className="hero__cta-icon">↗</span>
            </a>

            <div className="hero__support">
              <div className="hero__avatars">
                <img src="src/assets/avatar/avatar3.png" alt="" />
                <img src="src/assets/avatar/avatar2.png" alt="" />
                <img src="src/assets/avatar/avatar1.png" alt="" />
              </div>

              <p className="hero__support-text">
                Atendimento humanizado
                <br />
                para crianças, jovens e adultos
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="hero__media">
          {/* OVAL PRINCIPAL */}
          <div className="hero__oval hero__oval--main">
            <img src="src/assets/imagemcapa1.png" alt="" />
          </div>

          {/* COLUNA DIREITA */}
          <div className="hero__side">
            <div className="hero__oval hero__oval--top">
              <img src="src/assets/imagemcapa2.png" alt="" />
            </div>

            <div className="hero__oval hero__oval--bottom">
              <img src="src/assets/imagemcapa3.png" alt="" />
            </div>
          </div>

          {/* CARD ESQUERDA */}
          <div className="hero__card hero__card--left">
            <div className="hero__card-icon">
              <img src="src/assets/Calendar.png" alt=" " />
            </div>
            <div>
              <strong>Presencial e Online</strong>
              <br />
              <span>Horários Flexíveis</span>
            </div>
          </div>

          {/* CARD DIREITA */}
          <div className="hero__card hero__card--right">
            <div className="hero__card-icon">
              <img src="src/assets/Heart.png" alt=" " />
            </div>
            <div>
              <strong>+1200</strong>
              <br />
              <span>Pacientes Atendidos</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
