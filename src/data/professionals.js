import professional1Avif420 from "../assets/optimized/professionals/professional-1-420.avif";
import professional1Avif840 from "../assets/optimized/professionals/professional-1-840.avif";
import professional1Webp420 from "../assets/optimized/professionals/professional-1-420.webp";
import professional1Webp840 from "../assets/optimized/professionals/professional-1-840.webp";
import professional2Avif420 from "../assets/optimized/professionals/professional-2-420.avif";
import professional2Avif840 from "../assets/optimized/professionals/professional-2-840.avif";
import professional2Webp420 from "../assets/optimized/professionals/professional-2-420.webp";
import professional2Webp840 from "../assets/optimized/professionals/professional-2-840.webp";
import professional3Avif420 from "../assets/optimized/professionals/professional-3-420.avif";
import professional3Avif840 from "../assets/optimized/professionals/professional-3-840.avif";
import professional3Webp420 from "../assets/optimized/professionals/professional-3-420.webp";
import professional3Webp840 from "../assets/optimized/professionals/professional-3-840.webp";
import professional4Avif420 from "../assets/optimized/professionals/professional-4-420.avif";
import professional4Avif840 from "../assets/optimized/professionals/professional-4-840.avif";
import professional4Webp420 from "../assets/optimized/professionals/professional-4-420.webp";
import professional4Webp840 from "../assets/optimized/professionals/professional-4-840.webp";
import professional5Avif420 from "../assets/optimized/professionals/professional-5-420.avif";
import professional5Avif840 from "../assets/optimized/professionals/professional-5-840.avif";
import professional5Webp420 from "../assets/optimized/professionals/professional-5-420.webp";
import professional5Webp840 from "../assets/optimized/professionals/professional-5-840.webp";
import professional6Avif420 from "../assets/optimized/professionals/professional-6-420.avif";
import professional6Avif840 from "../assets/optimized/professionals/professional-6-840.avif";
import professional6Webp420 from "../assets/optimized/professionals/professional-6-420.webp";
import professional6Webp840 from "../assets/optimized/professionals/professional-6-840.webp";
import professional7Avif420 from "../assets/optimized/professionals/professional-7-420.avif";
import professional7Avif840 from "../assets/optimized/professionals/professional-7-840.avif";
import professional7Webp420 from "../assets/optimized/professionals/professional-7-420.webp";
import professional7Webp840 from "../assets/optimized/professionals/professional-7-840.webp";
import professional8Avif420 from "../assets/optimized/professionals/professional-8-420.avif";
import professional8Avif840 from "../assets/optimized/professionals/professional-8-840.avif";
import professional8Webp420 from "../assets/optimized/professionals/professional-8-420.webp";
import professional8Webp840 from "../assets/optimized/professionals/professional-8-840.webp";
import professional9Avif420 from "../assets/optimized/professionals/professional-9-420.avif";
import professional9Avif840 from "../assets/optimized/professionals/professional-9-840.avif";
import professional9Webp420 from "../assets/optimized/professionals/professional-9-420.webp";
import professional9Webp840 from "../assets/optimized/professionals/professional-9-840.webp";
import professional10Avif420 from "../assets/optimized/professionals/professional-10-420.avif";
import professional10Avif840 from "../assets/optimized/professionals/professional-10-840.avif";
import professional10Webp420 from "../assets/optimized/professionals/professional-10-420.webp";
import professional10Webp840 from "../assets/optimized/professionals/professional-10-840.webp";
import professional11Avif420 from "../assets/optimized/professionals/professional-11-420.avif";
import professional11Avif840 from "../assets/optimized/professionals/professional-11-840.avif";
import professional11Webp420 from "../assets/optimized/professionals/professional-11-420.webp";
import professional11Webp840 from "../assets/optimized/professionals/professional-11-840.webp";
import professional12Avif420 from "../assets/optimized/professionals/professional-12-420.avif";
import professional12Avif840 from "../assets/optimized/professionals/professional-12-840.avif";
import professional12Webp420 from "../assets/optimized/professionals/professional-12-420.webp";
import professional12Webp840 from "../assets/optimized/professionals/professional-12-840.webp";
import professional13Avif420 from "../assets/optimized/professionals/professional-13-420.avif";
import professional13Avif840 from "../assets/optimized/professionals/professional-13-840.avif";
import professional13Webp420 from "../assets/optimized/professionals/professional-13-420.webp";
import professional13Webp840 from "../assets/optimized/professionals/professional-13-840.webp";
import professional14Avif420 from "../assets/optimized/professionals/professional-14-420.avif";
import professional14Avif840 from "../assets/optimized/professionals/professional-14-840.avif";
import professional14Webp420 from "../assets/optimized/professionals/professional-14-420.webp";
import professional14Webp840 from "../assets/optimized/professionals/professional-14-840.webp";

function createImageSet(avif420, avif840, webp420, webp840) {
  return {
    avif420,
    avif840,
    webp420,
    webp840,
  };
}

export const professionals = [
  {
    id: 1,
    name: "Gabriela Cuani",
    role: "Psicóloga",
    credential: "CRP: 08/17807",
    imagePosition: "50% 20% / 1.06",
    image: createImageSet(
      professional1Avif420,
      professional1Avif840,
      professional1Webp420,
      professional1Webp840,
    ),
    active: true,
  },
  {
    id: 2,
    name: "Rodrigo da Silva Colleti",
    role: "Médico",
    credential: "CRM/PR: 38928",
    imagePosition: "50% 20% / 1.06",
    image: createImageSet(
      professional2Avif420,
      professional2Avif840,
      professional2Webp420,
      professional2Webp840,
    ),
    active: true,
  },
  {
    id: 3,
    name: "Natália Terra",
    role: "Psicóloga",
    credential: "CRP: 08/23945",
    imagePosition: "50% 18% / 1.12",
    image: createImageSet(
      professional3Avif420,
      professional3Avif840,
      professional3Webp420,
      professional3Webp840,
    ),
    active: true,
  },
  {
    id: 4,
    name: "Cassiana Corinth",
    role: "Psicopedagoga",
    imagePosition: "50% 20% / 1.06",
    image: createImageSet(
      professional4Avif420,
      professional4Avif840,
      professional4Webp420,
      professional4Webp840,
    ),
    active: false,
  },
  {
    id: 5,
    name: "Leonardo Pereira",
    role: "Psicólogo",
    credential: "CRP: 08/23945",
    imagePosition: "50% 20% / 1.06",
    image: createImageSet(
      professional5Avif420,
      professional5Avif840,
      professional5Webp420,
      professional5Webp840,
    ),
    active: true,
  },
  {
    id: 6,
    name: "Nathiele Louzano",
    role: "Nutricionista",
    credential: "CRN8: 14350",
    imagePosition: "50% 20% / 1.06",
    image: createImageSet(
      professional6Avif420,
      professional6Avif840,
      professional6Webp420,
      professional6Webp840,
    ),
    active: true,
  },
  {
    id: 7,
    name: "Jessica Generoso",
    role: "Psicóloga",
    credential: "CRP: 08/23511",
    imagePosition: "50% 20% / 1.06",
    image: createImageSet(
      professional7Avif420,
      professional7Avif840,
      professional7Webp420,
      professional7Webp840,
    ),
    active: true,
  },
  {
    id: 8,
    name: "Vera Lúcia Melchiori Martins",
    role: "Fonoaudióloga",
    credential: "CRFa 4262",
    imagePosition: "50% 20% / 1.06",
    image: createImageSet(
      professional8Avif420,
      professional8Avif840,
      professional8Webp420,
      professional8Webp840,
    ),
    active: true,
  },
  {
    id: 9,
    name: "Bárbara Nagano",
    role: "Psicóloga",
    credential: "CRP: 08/28717",
    imagePosition: "50% 20% / 1.06",
    image: createImageSet(
      professional9Avif420,
      professional9Avif840,
      professional9Webp420,
      professional9Webp840,
    ),
    active: false,
  },
  {
    id: 10,
    name: "Thabata Dias",
    role: "Psicóloga",
    credential: "CRP: 08/26452",
    imagePosition: "50% 20% / 1.06",
    image: createImageSet(
      professional10Avif420,
      professional10Avif840,
      professional10Webp420,
      professional10Webp840,
    ),
    active: true,
  },
  {
    id: 11,
    name: "Leonardo Silva Ribeiro",
    role: "Psicólogo",
    credential: "CRP: 08/37459",
    imagePosition: "52% 18% / 1.14",
    image: createImageSet(
      professional11Avif420,
      professional11Avif840,
      professional11Webp420,
      professional11Webp840,
    ),
    active: true,
  },
  {
    id: 12,
    name: "Simone Marcolino",
    role: "Psicopedagoga",
    imagePosition: "50% 18% / 1.12",
    image: createImageSet(
      professional12Avif420,
      professional12Avif840,
      professional12Webp420,
      professional12Webp840,
    ),
    active: true,
  },
  {
    id: 13,
    name: "João Marcos Ferrari",
    role: "Tricologista",
    imagePosition: "53% 18% / 1.15",
    image: createImageSet(
      professional13Avif420,
      professional13Avif840,
      professional13Webp420,
      professional13Webp840,
    ),
    active: true,
  },
  {
    id: 14,
    name: "Rosangela de Castro Mello",
    role: "Psicomotricista",
    imagePosition: "51% 18% / 1.12",
    image: createImageSet(
      professional14Avif420,
      professional14Avif840,
      professional14Webp420,
      professional14Webp840,
    ),
    active: true,
  },
];
