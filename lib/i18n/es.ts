import { media } from "@/lib/media"
import type { Dictionary } from "./types"

/**
 * Spanish copy. Everything marked "ejemplo" (clients, numbers, quotes) is a
 * placeholder until COMCO supplies the real content.
 */
export const es: Dictionary = {
  lang: "es",
  meta: {
    title: "COMCO · Redes sociales para negocios locales",
    description:
      "Estrategia, creación de contenido y gestión completa de redes sociales para negocios locales. Reserva una llamada gratis de 30 minutos.",
    ogAlt: "COMCO, social media manager para negocios locales",
  },
  nav: {
    skip: "Saltar al contenido",
    home: "COMCO, inicio",
    services: "Servicios",
    work: "Trabajo",
    process: "Proceso",
    contact: "Contacto",
    book: "Reservar",
    language: "Idioma",
    switchTo: "Ver en inglés",
  },
  hero: {
    tab: "COMCO",
    tabMeta: "Social media · negocios locales",
    title: "Tu negocio, imposible de ignorar.",
    lead: "Estrategia, contenido y gestión de redes sociales para negocios locales. Yo me encargo de todo; tú, de tus clientes.",
    primary: "Reserva una llamada gratis",
    secondary: "Ver servicios",
    note: "30 min · Gratis · Sin compromiso",
    files: ["Reel", "Carrusel", "Historia"],
  },
  proof: {
    // No real figures yet: the line in the Work section stays hidden while empty.
    stats: [],
    note: "",
  },
  services: {
    title: "Todo lo que tus redes necesitan, en manos de una sola persona.",
    intro:
      "Estrategia, contenido y cobertura de eventos, sin coordinar a una agencia, un fotógrafo y un community manager por separado.",
    hint: "Abre una carpeta para ver qué incluye",
    cta: "Reservar llamada",
    back: "Volver",
    services: [
      {
        id: "gestion",
        label: "Gestión de redes",
        meta: "Estrategia · Comunidad",
        art: "cobalt",
        outcome: "Tus redes con un plan claro, publicadas a tiempo y con alguien atendiendo a tus clientes.",
        files: [
          {
            name: "Estrategia de contenido",
            meta: "Plan",
            art: "cobalt",
            detail:
              "Decido contigo qué contar, a quién y en qué formato, a partir de lo que tu negocio necesita vender.",
          },
          {
            name: "Planificación y programación",
            meta: "Calendario",
            detail: "Un calendario mensual con cada publicación preparada y programada en el mejor momento.",
          },
          {
            name: "Gestión de comunidad",
            meta: "Diario",
            detail: "Respondo comentarios y mensajes con tu tono, para que ninguna consulta se quede sin respuesta.",
          },
        ],
      },
      {
        id: "contenido",
        label: "Creación de contenido",
        meta: "Foto · Vídeo · Copy",
        art: "coral",
        outcome: "Contenido que se ve tan bien como tu negocio, grabado, editado y escrito por mí.",
        files: [
          {
            name: "Fotografía y vídeo",
            meta: "Sesión",
            image: media.clinic.closeup,
            detail: "Sesiones de foto y vídeo en tu negocio: tus servicios, tu espacio y tu equipo.",
          },
          {
            name: "Edición de vídeo",
            meta: "Reels",
            image: media.bar.reel,
            detail: "Edito reels cortos con ritmo, textos y subtítulos, para que se entiendan incluso sin sonido.",
          },
          {
            name: "Copy y captions",
            meta: "Textos",
            detail: "Los textos de cada publicación, con tu tono y una llamada a la acción clara.",
          },
        ],
      },
      {
        id: "eventos",
        label: "Cobertura de eventos",
        meta: "Foto y vídeo",
        art: "plum",
        outcome: "Tu evento contado en redes mientras pasa y después, para que se siga hablando de él.",
        files: [
          {
            name: "Foto y vídeo del evento",
            meta: "En directo",
            image: media.fitness.duo,
            detail: "Cubro tu evento en foto y vídeo: el ambiente, la gente y los momentos que importan.",
          },
          {
            name: "Resumen del evento",
            meta: "Recap",
            image: media.fitness.dance,
            detail: "Un reel resumen y un carrusel de fotos para publicar después del evento.",
          },
        ],
      },
    ],
  },
  work: {
    title: "Negocios que ya no pasan desapercibidos.",
    intro: "Cada carpeta es un proyecto. Ábrela para ver el contenido.",
    note: "",
    before: "Antes",
    after: "Después",
    cta: "Quiero contenido así",
    back: "Volver",
    cases: [
      {
        id: "madres",
        client: "Día de las Madres",
        sector: "Campaña creativa",
        art: "coral",
        image: media.mama.cover,
        summary: "Un concepto creativo para el Día de las Madres, de la dirección de arte al diseño final.",
        files: [
          {
            name: "El regalo",
            meta: "Foto",
            image: media.mama.gift,
            detail: "Flores y una carta escrita a mano: toda la idea de la campaña cabe en un solo gesto.",
          },
          {
            name: "Generaciones",
            meta: "Foto",
            image: media.mama.generations,
            detail: "Manos pequeñas y manos que cuidan: la campaña contada desde los detalles.",
          },
          {
            name: "Los detalles",
            meta: "Foto",
            image: media.mama.detail,
            detail: "Primeros planos para carruseles e historias, con la misma paleta en toda la campaña.",
          },
        ],
        metrics: [],
      },
      {
        id: "estetica",
        client: "Centro de estética",
        sector: "Estética",
        art: "cobalt",
        image: media.clinic.cover,
        summary:
          "Fotos y reels para un centro de estética: los tratamientos, los equipos y las personas que los hacen.",
        files: [
          {
            name: "Tratamientos",
            meta: "Foto",
            image: media.clinic.treatment,
            detail: "Cada tratamiento fotografiado en cabina, para que el cliente vea exactamente qué le van a hacer.",
          },
          {
            name: "Aparatología",
            meta: "Foto",
            image: media.clinic.equipment,
            detail: "Los equipos del centro, fotografiados para transmitir confianza y tecnología.",
          },
          {
            name: "El equipo",
            meta: "Foto",
            image: media.clinic.team,
            detail: "Las profesionales del centro trabajando: la confianza empieza por saber quién te atiende.",
          },
          {
            name: "Rutina de skincare",
            meta: "Reel",
            image: media.clinic.reel,
            detail: "Un reel educativo con la esteticista: consejos útiles que la gente guarda y comparte.",
          },
        ],
        metrics: [],
      },
      {
        id: "psiquiatria",
        client: "Consulta de psiquiatría",
        sector: "Salud mental",
        art: "plum",
        image: media.psychiatry.cover,
        summary:
          "Vídeos para el lanzamiento de un servicio de psiquiatría: cercanos, claros y sin miedo a hablar del tema.",
        files: [
          {
            name: "Bienvenida",
            meta: "Reel",
            image: media.psychiatry.welcome,
            detail: "El psiquiatra presenta la consulta y el nuevo servicio en primera persona.",
          },
          {
            name: "Tu primera cita",
            meta: "Reel",
            image: media.psychiatry.firstVisit,
            detail:
              "Qué esperar de la primera cita con un psiquiatra, explicado por la propia doctora para quitar miedos.",
          },
        ],
        metrics: [],
      },
      {
        id: "fitness",
        client: "Estudio de fitness",
        sector: "Clase en grupo",
        art: "cobalt",
        image: media.fitness.cover,
        summary: "Fotografía de clase: la energía del grupo, la entrenadora y el momento de calma final.",
        files: [
          {
            name: "La comunidad",
            meta: "Foto",
            image: media.fitness.duo,
            detail:
              "Retratos de las alumnas en clase: lo que más convence a alguien de probar un estudio es ver a gente como ella pasándolo bien.",
          },
          {
            name: "La entrenadora",
            meta: "Foto",
            image: media.fitness.trainer,
            detail:
              "La entrenadora en plena clase, con la luz del estudio, para que sepas a quién te vas a encontrar antes de llegar.",
          },
          {
            name: "El cierre",
            meta: "Foto",
            image: media.fitness.rest,
            detail:
              "El momento de calma al final de la sesión: el estudio no es solo esfuerzo, y eso también hay que contarlo.",
          },
        ],
        metrics: [],
      },
      {
        id: "barra",
        client: "Barra de cócteles",
        sector: "Hostelería",
        art: "coral",
        image: media.bar.cover,
        summary: "Un reel de temporada para presentar la nueva carta de cócteles de otoño.",
        files: [
          {
            name: "Fall Cocktails",
            meta: "Reel",
            image: media.bar.reel,
            detail: "Un reel corto y cálido para lanzar los cócteles de otoño, pensado para entenderse sin sonido.",
          },
        ],
        metrics: [],
      },
    ],
  },
  process: {
    title: "Empezar es una llamada.",
    intro: "Sin contratos largos ni formularios eternos. Así trabajo desde el primer día.",
    steps: [
      {
        title: "Llamada gratis",
        text: "30 minutos para conocer tu negocio, tus objetivos y ver si encajamos.",
      },
      {
        title: "Estrategia",
        text: "Te presento un plan claro: qué voy a publicar, dónde y qué resultados quiero conseguir para ti.",
      },
      {
        title: "Contenido",
        text: "Grabo, fotografío y diseño todo el contenido del mes, con tu aprobación.",
      },
      {
        title: "Publicación y resultados",
        text: "Publico, gestiono la comunidad y te envío un informe cada mes.",
      },
    ],
    cta: "Reservar la primera llamada",
  },
  testimonials: {
    title: "Lo que dicen los negocios con los que trabajo.",
    note: "",
    // Hidden until real reviews are supplied.
    items: [],
  },
  booking: {
    title: "Hablemos de tu negocio.",
    lead: "Elige un hueco en mi calendario. En 30 minutos sabrás qué haría con tus redes, aunque no trabajemos juntos.",
    badges: ["Gratis", "30 minutos", "Sin compromiso"],
    open: "Abrir el calendario",
    loading: "Cargando el calendario…",
    fallback: "¿Prefieres escribir?",
    emailMe: "Envíame un email",
    thanksTitle: "¡Reserva confirmada!",
    thanksText: "Te llegará un email con los detalles. Nos vemos pronto.",
  },
  faq: {
    title: "Preguntas frecuentes",
    items: [
      {
        q: "¿Cuánto cuesta?",
        a: "Depende de lo que necesites: solo estrategia, contenido o la gestión completa. En la llamada gratis estudio tu caso y te paso un presupuesto cerrado, sin sorpresas.",
      },
      {
        q: "¿Hay permanencia?",
        a: "No. Trabajo mes a mes. Si no ves valor, lo dejas cuando quieras.",
      },
      {
        q: "¿Trabajas solo en mi ciudad?",
        a: "Trabajo con negocios de mi ciudad en persona y con negocios de cualquier lugar en remoto. Las sesiones de contenido presenciales se organizan según la ubicación.",
      },
      {
        q: "¿En qué redes trabajas?",
        a: "Sobre todo Instagram, TikTok y Facebook, que es donde están los clientes de un negocio local. Si tu negocio necesita otra, cuéntamelo y lo valoro.",
      },
      {
        q: "¿Cuándo veré resultados?",
        a: "Las primeras mejoras (contenido, constancia, imagen) se ven desde el primer mes. El crecimiento de alcance y clientes suele notarse entre el segundo y el tercer mes.",
      },
      {
        q: "¿Cómo se paga?",
        a: "Te envío una factura cada mes y puedes pagarla con PayPal o por transferencia.",
      },
    ],
  },
  footer: {
    title: "¿Listo para que tu negocio se vea?",
    cta: "Reserva una llamada gratis",
    contact: "Contacto",
    follow: "Sígueme",
    pay: "Pagar factura",
    payNote: "Pago seguro con PayPal",
    rights: "© 2026 COMCO. Todos los derechos reservados.",
    placeholderNote: "Sitio en preparación: los enlaces de contacto son provisionales.",
  },
  folder: {
    open: "Abrir {label}, {count}",
    close: "Cerrar {label}, {count}",
    countOne: "{n} archivo",
    countOther: "{n} archivos",
    contents: "Contenido de {label}",
    add: "Añadir un archivo a {label}",
    more: "Más opciones de {label}",
    options: "Opciones de {label}",
    openFolder: "Abrir carpeta",
    closeFolder: "Cerrar carpeta",
    untitled: "Sin título {n}",
    justNow: "Ahora",
  },
}
