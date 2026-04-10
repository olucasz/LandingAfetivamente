import { useEffect, useMemo, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { professionals } from "../../data/professionals";
import { Reveal, RevealGroup, RevealItem } from "../Motion/Reveal";
import "./Professionals.css";

const DEFAULT_IMAGE_POSITION = "center 20%";
const DEFAULT_IMAGE_ZOOM = 1.06;

function parseImageCrop(imagePosition) {
  if (!imagePosition || typeof imagePosition !== "string") {
    return {
      position: DEFAULT_IMAGE_POSITION,
      zoom: DEFAULT_IMAGE_ZOOM,
    };
  }

  const [positionPart, zoomPart] = imagePosition.split("/");
  const position = positionPart?.trim() || DEFAULT_IMAGE_POSITION;
  const parsedZoom = Number.parseFloat(zoomPart?.trim() ?? "");

  return {
    position,
    zoom: Number.isFinite(parsedZoom) ? parsedZoom : DEFAULT_IMAGE_ZOOM,
  };
}

export default function Professionals() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    loop: false,
  });
  const activeProfessionals = useMemo(
    () => professionals.filter((professional) => professional.active),
    [],
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
        <RevealGroup className="professionals__header" stagger={0.12}>
          <RevealItem
            as="h2"
            className="professionals__title"
            id="professionals-title"
          >
            Conheça nossos <span>Profissionais</span>
          </RevealItem>

          <RevealItem
            className="professionals__controls"
            aria-label="Navegação do carrossel"
          >
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
          </RevealItem>
        </RevealGroup>

        <Reveal className="professionals__carousel" distance={28}>
          <div className="professionals__viewport" ref={emblaRef}>
            <RevealGroup className="professionals__track" stagger={0.08}>
              {activeProfessionals.map((professional) => {
                const { id, name, role, image, imagePosition } = professional;
                const { position, zoom } = parseImageCrop(imagePosition);
                const imageStyle = {
                  objectPosition: position,
                  "--professional-image-zoom": zoom,
                };

                return (
                  <RevealItem
                    className="professionals__slide"
                    key={id}
                    distance={22}
                  >
                    <article className="professionals__card">
                      <div className="professionals__media">
                        <picture>
                          <source
                            type="image/avif"
                            srcSet={`${image.avif420} 420w, ${image.avif840} 840w`}
                            sizes="(max-width: 767px) 86vw, (max-width: 899px) 46vw, (max-width: 1199px) 32vw, 24vw"
                          />
                          <source
                            type="image/webp"
                            srcSet={`${image.webp420} 420w, ${image.webp840} 840w`}
                            sizes="(max-width: 767px) 86vw, (max-width: 899px) 46vw, (max-width: 1199px) 32vw, 24vw"
                          />
                          <img
                            src={image.webp420}
                            alt={`Profissional ${name}`}
                            width="840"
                            height="1260"
                            loading="lazy"
                            decoding="async"
                            fetchPriority="low"
                            style={imageStyle}
                          />
                        </picture>
                      </div>

                      <div className="professionals__content">
                        <h3 className="professionals__name">{name}</h3>
                        <p className="professionals__role">{role}</p>
                      </div>
                    </article>
                  </RevealItem>
                );
              })}
            </RevealGroup>
          </div>

          {scrollSnaps.length > 1 ? (
            <div
              className="professionals__dots"
              aria-label="Paginação do carrossel"
            >
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
        </Reveal>
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
