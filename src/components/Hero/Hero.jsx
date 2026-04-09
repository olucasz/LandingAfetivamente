import avatar1 from "../../assets/avatar-jpg/avatar1.jpg";
import avatar2 from "../../assets/avatar-jpg/avatar2.jpg";
import avatar3 from "../../assets/avatar-jpg/avatar3.jpg";
import calendarIcon from "../../assets/Calendar.png";
import heartIcon from "../../assets/Heart.png";
import heroMainImage from "../../assets/jpg/imagemcapa1.jpg";
import heroTopImage from "../../assets/jpg/imagemcapa2.jpg";
import heroBottomImage from "../../assets/jpg/imagemcapa3.jpg";
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
                <img src={avatar3} alt="" decoding="async" />
                <img src={avatar2} alt="" decoding="async" />
                <img src={avatar1} alt="" decoding="async" />
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

          {/* COLUNA DIREITA */}
          <div className="hero__side">
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
          </div>

          {/* CARD ESQUERDA */}
          <div className="hero__card hero__card--left">
            <div className="hero__card-icon">
              <img
                src={calendarIcon}
                alt=" "
                width="26"
                height="26"
                decoding="async"
              />
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
              <img
                src={heartIcon}
                alt=" "
                width="31"
                height="30"
                decoding="async"
              />
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
