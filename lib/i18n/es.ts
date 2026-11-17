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
    title: "Resultados que se notan en el local, no solo en la pantalla.",
    stats: [
      { value: 3, suffix: "×", label: "más alcance de media en 90 días" },
      { value: 40, suffix: "+", label: "negocios locales acompañados" },
      { value: 120, suffix: "", label: "piezas de contenido al mes" },
      { value: 5, suffix: " años", label: "gestionando redes" },
    ],
    note: "Cifras de ejemplo: se sustituirán por los resultados reales.",
  },
  services: {
    title: "Todo lo que tus redes necesitan, en manos de una sola persona.",
    intro:
      "Estrategia, contenido y gestión diaria, sin coordinar a una agencia, un fotógrafo y un community manager por separado.",
    hint: "Abre una carpeta para ver qué incluye",
    cta: "Reservar llamada",
    back: "Volver",
    services: [
      {
        id: "estrategia",
        label: "Estrategia",
        meta: "Plan y métricas",
        art: "cobalt",
        outcome: "Sabes qué publicar, cuándo y por qué, con objetivos que se pueden medir.",
        files: [
          {
            name: "Auditoría de perfil",
            meta: "Inicio",
            detail: "Reviso tus perfiles, tu competencia y tu audiencia para ver qué funciona, qué no y dónde está la oportunidad.",
          },
          {
            name: "Plan de contenidos",
            meta: "Mensual",
            art: "cobalt",
            detail: "Un calendario con temas, formatos y fechas, pensado alrededor de lo que tu negocio necesita vender.",
          },
          {
            name: "Informe de resultados",
            meta: "Mensual",
            detail: "Alcance, seguidores, mensajes y clientes nuevos: lo que importa, explicado sin jerga y con próximos pasos.",
          },
        ],
      },
      {
        id: "contenido",
        label: "Contenido",
        meta: "Reels · Foto · Diseño",
        art: "coral",
        outcome: "Contenido que se ve tan bien como tu negocio, grabado y editado por mí.",
        files: [
          {
            name: "Fotografía",
            meta: "Sesión",
            art: "plum",
            detail: "Sesiones de foto de producto, de tu espacio y de tu equipo, con luz y estilo propios de tu marca.",
          },
          {
            name: "Diseño y carruseles",
            meta: "Plantillas",
            art: "cobalt",
            detail: "Carruseles, portadas y gráficos con tu identidad visual, para que cada publicación se reconozca al instante.",
          },
          {
            name: "Reels",
            meta: "Vídeo",
            art: "coral",
            detail: "Grabo y edito reels cortos pensados para llegar a gente de tu zona y convertirla en clientes.",
          },
        ],
      },
      {
        id: "gestion",
        label: "Gestión completa",
        meta: "Yo me encargo",
        art: "plum",
        outcome: "Tus redes funcionan cada semana sin que tengas que tocarlas.",
        files: [
          {
            name: "Comunidad",
            meta: "Diario",
            detail: "Respondo comentarios y mensajes con tu tono, para que ninguna consulta de un cliente se quede sin respuesta.",
          },
          {
            name: "Publicación",
            meta: "Semanal",
            detail: "Programo y publico todo en el mejor momento, en Instagram, TikTok y Facebook.",
          },
          {
            name: "Seguimiento",
            meta: "Mensual",
            art: "plum",
            detail: "Una reunión al mes para revisar resultados y ajustar el plan. Tú decides, yo ejecuto.",
          },
        ],
      },
    ],
  },
  work: {
    title: "Negocios que ya no pasan desapercibidos.",
    intro: "Cada carpeta es un cliente. Ábrela para ver el contenido y lo que cambió.",
    note: "Casos de ejemplo: se sustituirán por clientes reales.",
    before: "Antes",
    after: "Después",
    cta: "Quiero resultados así",
    back: "Volver",
    cases: [
      {
        id: "cafe",
        client: "Café del Barrio",
        sector: "Cafetería",
        art: "coral",
        summary: "De un perfil sin publicar a la cafetería de referencia de su zona en Instagram.",
        files: [
          { name: "Reel de apertura", meta: "Reel", art: "coral", detail: "Reel de la primera hora del día: café, horno y equipo. El vídeo más visto del perfil." },
          { name: "Menú de temporada", meta: "Carrusel", art: "cobalt", detail: "Carrusel con la carta de otoño, diseñado para guardarse y compartirse." },
          { name: "Resultados", meta: "90 días", detail: "Alcance, visitas al perfil y reservas por mensaje directo, comparados con los tres meses anteriores." },
        ],
        metrics: [
          { label: "Alcance mensual", before: "3,1K", after: "12,4K" },
          { label: "Mensajes al mes", before: "6", after: "41" },
          { label: "Seguidores", before: "820", after: "2,9K" },
        ],
      },
      {
        id: "gym",
        client: "Estudio Fuerza",
        sector: "Gimnasio",
        art: "cobalt",
        summary: "Una estrategia de contenido que llenó las clases de la mañana.",
        files: [
          { name: "Serie de técnica", meta: "Reels", art: "cobalt", detail: "Una serie semanal de técnica con los entrenadores del estudio." },
          { name: "Historias del equipo", meta: "Historias", art: "plum", detail: "Historias diarias del día a día del estudio para generar confianza." },
          { name: "Resultados", meta: "60 días", detail: "Clases de prueba reservadas desde Instagram y asistencia a las clases de la mañana." },
        ],
        metrics: [
          { label: "Clases de prueba", before: "4", after: "27" },
          { label: "Alcance mensual", before: "5,6K", after: "19K" },
          { label: "Ocupación mañana", before: "38%", after: "81%" },
        ],
      },
      {
        id: "salon",
        client: "Salón Lumen",
        sector: "Peluquería",
        art: "plum",
        summary: "Contenido de antes y después que convirtió la agenda en lista de espera.",
        files: [
          { name: "Antes y después", meta: "Reels", art: "plum", detail: "Transformaciones grabadas en el salón, editadas para verse en segundos." },
          { name: "Guía de cuidados", meta: "Carrusel", art: "coral", detail: "Consejos de cuidado del color que las clientas guardan y comparten." },
          { name: "Resultados", meta: "90 días", detail: "Citas reservadas desde redes y crecimiento de la cuenta en la ciudad." },
        ],
        metrics: [
          { label: "Citas desde redes", before: "9", after: "58" },
          { label: "Guardados al mes", before: "40", after: "610" },
          { label: "Seguidores locales", before: "1,2K", after: "4,7K" },
        ],
      },
    ],
  },
  process: {
    title: "Empezar es una llamada.",
    intro: "Sin contratos largos ni formularios eternos. Así trabajamos desde el primer día.",
    steps: [
      { title: "Llamada gratis", text: "30 minutos para conocer tu negocio, tus objetivos y ver si encajamos." },
      { title: "Estrategia", text: "Te presento un plan claro: qué vamos a publicar, dónde y qué resultados buscamos." },
      { title: "Contenido", text: "Grabo, fotografío y diseño todo el contenido del mes, con tu aprobación." },
      { title: "Publicación y resultados", text: "Publico, gestiono la comunidad y te envío un informe cada mes." },
    ],
    cta: "Reservar la primera llamada",
  },
  testimonials: {
    title: "Lo que dicen los negocios con los que trabajo.",
    note: "Testimonios de ejemplo: se sustituirán por reseñas reales.",
    items: [
      {
        quote: "Por fin tengo redes que se parecen a mi cafetería. Y lo mejor: ya no tengo que pensar en ellas.",
        name: "Laura M.",
        role: "Café del Barrio",
      },
      {
        quote: "En dos meses llenamos las clases de la mañana. Cada semana entra gente nueva diciendo que nos vio en Instagram.",
        name: "Javier R.",
        role: "Estudio Fuerza",
      },
      {
        quote: "Entiende el negocio antes de grabar nada. Se nota en cada publicación.",
        name: "Carmen T.",
        role: "Salón Lumen",
      },
    ],
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
        a: "Depende de lo que necesites: solo estrategia, contenido o la gestión completa. En la llamada gratis vemos tu caso y te paso un presupuesto cerrado, sin sorpresas.",
      },
      {
        q: "¿Hay permanencia?",
        a: "No. Trabajamos mes a mes. Si no ves valor, lo dejas cuando quieras.",
      },
      {
        q: "¿Trabajas solo en mi ciudad?",
        a: "Trabajo con negocios de mi ciudad en persona y con negocios de cualquier lugar en remoto. Las sesiones de contenido presenciales se organizan según la ubicación.",
      },
      {
        q: "¿En qué redes trabajas?",
        a: "Sobre todo Instagram, TikTok y Facebook, que es donde están los clientes de un negocio local. Si tu negocio necesita otra, lo vemos.",
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
    placeholderNote: "Sitio en preparación: clientes, cifras y testimonios son de ejemplo.",
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
