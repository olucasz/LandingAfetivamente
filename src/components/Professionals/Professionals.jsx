import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { professionals } from "../../data/professionals";
import "./Professionals.css";

const professionalImagePositions = {
  1: "4% 38%",
  2: "22% 36%",
  3: "41% 35%",
  4: "61% 34%",
  5: "79% 35%",
  6: "96% 35%",
};

export default function Professionals() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    loop: false,
  });
  const activeProfessionals = professionals.filter(
    (professional) => professional.active,
  );
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  useEffect(() => {
    if (!emblaApi) return;

    function syncCarouselState() {
      setSelectedIndex(emblaApi.selectedScrollSnap());
      setScrollSnaps(emblaApi.scrollSnapList());
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
    }

    syncCarouselState();
    emblaApi.on("select", syncCarouselState);
    emblaApi.on("reInit", syncCarouselState);

    return () => {
      emblaApi.off("select", syncCarouselState);
      emblaApi.off("reInit", syncCarouselState);
    };
  }, [emblaApi]);

  function scrollPrev() {
    emblaApi?.scrollPrev();
  }

  function scrollNext() {
    emblaApi?.scrollNext();
  }

  function scrollTo(index) {
    emblaApi?.scrollTo(index);
  }

  return (
    <section
      className="professionals"
      id="profissionais"
      aria-labelledby="professionals-title"
    >
      <div className="professionals__container">
        <div className="professionals__header">
          <h2 className="professionals__title" id="professionals-title">
            Conheça nossos <span>Profissionais</span>
          </h2>

          <div className="professionals__controls" aria-label="Navegação do carrossel">
            <button
              type="button"
              className="professionals__arrow"
              onClick={scrollPrev}
              disabled={!canScrollPrev}
              aria-label="Ver profissionais anteriores"
            >
              <ArrowLeftIcon />
            </button>

            <button
              type="button"
              className="professionals__arrow"
              onClick={scrollNext}
              disabled={!canScrollNext}
              aria-label="Ver próximos profissionais"
            >
              <ArrowRightIcon />
            </button>
          </div>
        </div>

        <div className="professionals__carousel">
          <div className="professionals__viewport" ref={emblaRef}>
            <div className="professionals__track">
              {activeProfessionals.map(({ id, name, role, image }) => (
                <div className="professionals__slide" key={id}>
                  <article className="professionals__card">
                    <div className="professionals__media">
                      <img
                        src={image}
                        alt={`Profissional ${name}`}
                        width="545"
                        height="363"
                        loading="lazy"
                        decoding="async"
                        fetchPriority="low"
                        style={{
                          objectPosition:
                            professionalImagePositions[id] ?? "center center",
                        }}
                      />
                    </div>

                    <div className="professionals__content">
                      <h3 className="professionals__name">{name}</h3>
                      <p className="professionals__role">{role}</p>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>

          {scrollSnaps.length > 1 ? (
            <div className="professionals__dots" aria-label="Paginação do carrossel">
              {scrollSnaps.map((_, index) => (
                <button
                  type="button"
                  key={index}
                  className={
                    index === selectedIndex
                      ? "professionals__dot professionals__dot--active"
                      : "professionals__dot"
                  }
                  onClick={() => scrollTo(index)}
                  aria-label={`Ir para o grupo ${index + 1} de profissionais`}
                  aria-pressed={index === selectedIndex}
                />
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}

function ArrowLeftIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="m14.5 6.5-5 5 5 5" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="m9.5 6.5 5 5-5 5" />
    </svg>
  );
}
