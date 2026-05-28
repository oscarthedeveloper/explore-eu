// formats, covered, steps for all programs in ES, IT, DE
// These merge into existing entries via getLocalizedProgram()

const sections = {

  // ─── ESPAÑOL ────────────────────────────────────────────────────────────────
  es: {
    'humanitart-volontararbete': {
      formats: [
        { icon: '🧑', title: 'Voluntariado humanitario individual', duration: '2–12 meses', description: 'A jornada completa (30–38 horas/semana). Siempre transfronterizo — en un tercer país donde se desarrollan operaciones humanitarias.', bullets: ['Apoya la labor humanitaria de la organización de acogida', 'Alojamiento, viajes y manutención cubiertos', 'Seguro complementario', 'Pequeña asignación personal'] },
        { icon: '👥', title: 'Voluntariado humanitario en grupo', duration: '2 semanas – 2 meses', description: 'Grupos de 5–40 voluntarios de al menos 2 países. A jornada completa.', bullets: ['Seleccionado por las organizaciones de apoyo y acogida', 'Al menos 2 países representados', 'Alojamiento y viajes cubiertos', 'Seguro complementario'] },
      ],
      covered: [
        { icon: '✈️', title: 'Viajes', desc: 'Los billetes de ida y vuelta al proyecto están cubiertos.' },
        { icon: '🏠', title: 'Alojamiento', desc: 'La organización de acogida organiza el alojamiento.' },
        { icon: '🍽️', title: 'Manutención', desc: 'Las comidas diarias o un subsidio de alimentación están incluidos.' },
        { icon: '💶', title: 'Asignación', desc: 'Pequeña asignación personal durante la estancia.' },
        { icon: '🛡️', title: 'Seguro', desc: 'El seguro complementario cubre salud y accidentes.' },
        { icon: '🌐', title: 'Apoyo lingüístico', desc: 'Acceso a apoyo lingüístico en el idioma de trabajo.' },
      ],
      steps: [
        { n: '01', title: 'Regístrate en el portal CES', desc: 'Crea una cuenta y completa tu perfil. Indica tu interés en el voluntariado humanitario.' },
        { n: '02', title: 'Inicia la formación en línea', desc: 'Ve a la pestaña "Formación en línea" de tu cuenta y selecciona "Formación en ayuda humanitaria". Empieza con la autoevaluación en la plataforma EU Academy.' },
        { n: '03', title: 'Supera el test en línea', desc: 'Completa la formación en línea obligatoria y supera el test para recibir una invitación a la formación presencial.' },
        { n: '04', title: 'Participa en la formación presencial', desc: '5 días en grupos de ~25 candidatos. Centros de formación en Francia, Alemania, Italia o España. Tres convocatorias al año: feb–mar, may–jun, sep–oct.' },
        { n: '05', title: 'Sé seleccionado por un proyecto', desc: 'Tras completar la formación podrás ser seleccionado por un proyecto de voluntariado humanitario. Atención: las plazas son limitadas.' },
      ],
    },

    'erasmus-plus': {
      formats: [
        { icon: '🏫', title: 'Movilidad individual (KA1)', duration: 'Variable', description: 'Estudios y prácticas en el extranjero para estudiantes, aprendices y personal en educación y deporte.', bullets: ['Intercambio estudiantil a través de instituciones', 'Prácticas en el extranjero', 'Actividades de participación juvenil', 'Movilidad para profesionales del deporte'] },
        { icon: '🤝', title: 'Cooperación entre organizaciones (KA2)', duration: 'Variable', description: 'Asociaciones y proyectos a los que pueden optar las organizaciones — financian los proyectos en los que participan las personas.', bullets: ['Asociaciones de cooperación', 'Asociaciones a pequeña escala', 'Universidades Europeas', 'Másteres conjuntos Erasmus Mundus'] },
        { icon: '🏛️', title: 'Acciones Jean Monnet', duration: 'Variable', description: 'Apoyo a la docencia e investigación sobre la integración europea en instituciones de educación superior.', bullets: ['Módulos Jean Monnet', 'Cátedras Jean Monnet', 'Centros de Excelencia'] },
      ],
      covered: [
        { icon: '✈️', title: 'Viajes', desc: 'Subvención para los gastos de viaje según la distancia y el tipo de actividad.' },
        { icon: '🏠', title: 'Alojamiento', desc: 'Subvención para el alojamiento durante el período de intercambio.' },
        { icon: '💶', title: 'Beca', desc: 'Beca mensual ajustada al coste de vida en el país de destino.' },
        { icon: '🌐', title: 'Apoyo lingüístico', desc: 'Acceso gratuito al Apoyo Lingüístico en Línea de Erasmus+ (OLS).' },
        { icon: '📜', title: 'Reconocimiento', desc: 'Los créditos académicos y las competencias se reconocen mediante Europass y herramientas similares.' },
        { icon: '♿', title: 'Apoyo a la inclusión', desc: 'Apoyo adicional para participantes con discapacidad o con menos oportunidades.' },
      ],
      steps: [
        { n: '01', title: 'Contacta con tu organización', desc: 'Erasmus+ se solicita a través de tu universidad, escuela u organización juvenil — no directamente como individuo.' },
        { n: '02', title: 'Solicita a través de tu institución', desc: 'Tu institución solicita la financiación Erasmus+. Pregunta a tu coordinador internacional sobre las oportunidades disponibles.' },
        { n: '03', title: 'Sé nominado', desc: 'Tu institución te nomina para un intercambio o prácticas en una institución asociada.' },
        { n: '04', title: 'Prepárate', desc: 'Solicita el visado si es necesario, empieza la preparación lingüística a través de OLS y gestiona el alojamiento.' },
        { n: '05', title: 'Ve y vuelve con créditos reconocidos', desc: 'Tus resultados académicos se reconocen en casa. Las competencias quedan documentadas en Europass.' },
      ],
    },

    'discovereu': {
      formats: [
        { icon: '🧑', title: 'Viaje individual', duration: '7 días de viaje en 1 mes', description: 'Viajar solo como participante de DiscoverEU. Tú eliges países, ruta y ritmo.', bullets: ['Bono de tren en 2ª clase', 'Hasta 4 reservas de plaza gratuitas', 'Tarjeta de descuentos con ventajas', 'Los días de viaje pueden distribuirse'] },
        { icon: '👥', title: 'Viaje en grupo', duration: '7 días de viaje en 1 mes', description: 'Viajar junto a hasta 4 amigos. Todos deben cumplir los requisitos de elegibilidad.', bullets: ['Máximo 5 personas en el grupo', 'Todos deben tener 18 años y ser elegibles', 'Las mismas ventajas que en el viaje individual'] },
      ],
      covered: [
        { icon: '🚆', title: 'Billetes de tren', desc: 'Bono de tren en 2ª clase. Los vuelos están permitidos en casos excepcionales (islas, regiones remotas).' },
        { icon: '🎟️', title: 'Tarjeta de descuentos', desc: 'Descuentos en alojamiento, cultura, transporte local y gastronomía en toda Europa.' },
        { icon: '📌', title: 'Reservas de plaza', desc: 'Hasta 4 reservas de plaza gratuitas incluidas en el bono.' },
      ],
      steps: [
        { n: '01', title: 'Comprueba tu elegibilidad', desc: 'Debes cumplir 18 años entre el 1 de julio de 2025 y el 30 de junio de 2026 (para la convocatoria de primavera 2026). Ciudadanía en la UE o en un país asociado.' },
        { n: '02', title: 'Solicita a través del Portal Europeo de la Juventud', desc: 'La solicitud se realiza directamente en youth.europa.eu. Periodo de solicitud primavera 2026: del 8 al 22 de abril de 2026.' },
        { n: '03', title: 'Responde al cuestionario', desc: '5 preguntas de opción múltiple sobre la UE + una pregunta de desempate. Los que contesten todas correctamente se ordenan según la respuesta de desempate.' },
        { n: '04', title: 'Espera los resultados', desc: 'Los resultados se comunicarán en junio de 2026. Los bonos se asignan por país según una clave de distribución.' },
        { n: '05', title: 'Activa y viaja', desc: 'Activa tu bono antes del 31 de agosto de 2026. Puedes viajar del 1 de julio de 2026 al 30 de septiembre de 2027.' },
      ],
    },

    'blue-book-traineeship': {
      formats: [
        { icon: '🏢', title: 'Prácticas administrativas (ADMIN)', duration: '5 meses', description: 'Experiencia práctica del trabajo político y administrativo de la UE. Destinos en toda la Comisión y sus agencias.', bullets: ['1.538,16 €/mes', 'Se requiere título universitario (EQF 6)', 'C1/C2 en EN, FR o DE + B2 en otro idioma de la UE', 'Máx. 6 semanas de experiencia previa en la UE'] },
        { icon: '🌐', title: 'Prácticas de traducción (DGT)', duration: '5 meses', description: 'Experiencia práctica en la traducción de documentos a tu lengua materna. Exclusivamente para ciudadanos de la UE.', bullets: ['1.538,16 €/mes', 'La lengua materna debe ser una lengua oficial de la UE', 'Lengua fuente 1: EN, FR o DE (C1+)', 'Lengua fuente 2: cualquier idioma de la UE (B2+)'] },
      ],
      covered: [
        { icon: '💶', title: 'Asignación mensual', desc: '1.538,16 € al mes durante toda la duración de las prácticas.' },
        { icon: '🌍', title: 'Entorno internacional', desc: 'Trabaja junto a compañeros de toda Europa y del mundo.' },
        { icon: '📜', title: 'Certificado', desc: 'Certificado oficial de prácticas de la Comisión Europea.' },
      ],
      steps: [
        { n: '01', title: 'Comprueba los requisitos', desc: 'Debes tener una licenciatura de 3 años (EQF 6), las competencias lingüísticas requeridas y no más de 6 semanas de experiencia previa en la UE.' },
        { n: '02', title: 'Solicita en línea', desc: 'Las solicitudes se abren dos veces al año: en febrero (para la sesión de octubre) y en julio–agosto (para la sesión de marzo). Sube todos los documentos en un solo PDF.' },
        { n: '03', title: 'Proceso de preselección', desc: 'Una comisión verifica los documentos. Los candidatos preseleccionados entran en el "Virtual Blue Book" y pueden optar a un máximo de 3 puestos.' },
        { n: '04', title: 'Entrevista y oferta', desc: 'Los departamentos interesados pueden contactar con los candidatos y realizar entrevistas. La selección es definitiva cuando la oferta aparece en tu cuenta.' },
        { n: '05', title: 'Incorporarte a tu puesto', desc: 'Las sesiones comienzan en octubre y en marzo. Si rechazas una oferta, no recibirás ninguna más.' },
      ],
    },

    'robert-schuman-praktiken': {
      formats: [
        { icon: '🏢', title: 'Prácticas en la Secretaría', duration: '5 meses (oct–feb o mar–jul)', description: 'Prácticas en política de la UE, finanzas, derecho, multilingüismo, comunicación o TI. Solicitud en mayo (para octubre) u octubre (para marzo).', bullets: ['~1.719 €/mes en España, 1.889 €/mes en Bélgica', '300 € de compensación de viaje', 'Se requiere título universitario (EQF 6)', 'Máx. 2 meses de experiencia previa en la UE'] },
        { icon: '🧑‍⚖️', title: 'Prácticas MEP', duration: '6 semanas – 5 meses', description: 'Trabajar directamente con un eurodiputado. Se solicita directamente a los eurodiputados, no a través del portal.', bullets: ['1.133–1.856 €/mes (jornada completa)', 'Bachillerato suficiente', 'Puede empezar en cualquier época del año', 'El eurodiputado define las tareas'] },
      ],
      covered: [
        { icon: '💶', title: 'Asignación mensual', desc: 'Varía por país. España: ~1.719 €/mes. Importe base: 1.889 €/mes.' },
        { icon: '✈️', title: 'Compensación de viaje', desc: '300 € de tarifa plana por becario.' },
        { icon: '♿', title: 'Complemento por discapacidad', desc: 'Hasta el 50 % adicional de la asignación mensual para discapacidades de larga duración del 20 % o más.' },
      ],
      steps: [
        { n: '01', title: 'Elige el tipo de prácticas', desc: 'Prácticas en la Secretaría o prácticas MEP — son programas separados con reglas y procesos de solicitud diferentes.' },
        { n: '02', title: 'Comprueba los requisitos', desc: 'Al menos 18 años, título universitario (EQF 6), ciudadanía de la UE o país candidato, máx. 2 meses de experiencia previa en la UE, certificado de antecedentes penales limpio.' },
        { n: '03', title: 'Solicita hasta 3 puestos', desc: 'Las solicitudes se envían a través del portal de solicitudes del Parlamento Europeo. Máximo 3 puestos por solicitud. No se aceptan solicitudes espontáneas.' },
        { n: '04', title: 'Proceso de preselección', desc: 'Tu solicitud se evalúa según tu perfil académico, competencias lingüísticas y otros méritos. Se aplican cuotas nacionales.' },
        { n: '05', title: 'Incorporarte a tu puesto', desc: 'Recibirás una carta oficial de admisión por correo electrónico. Los periodos de prácticas empiezan el 1 de octubre o el 1 de marzo.' },
      ],
    },

    'eures': {
      formats: [
        { icon: '🔍', title: 'Portal EURES', duration: 'Siempre disponible', description: 'Plataforma en línea con 3 millones de ofertas y 1 millón de currículos. Emparejamiento de empleos y candidatos.', bullets: ['Busca empleo en 31 países', 'Sube tu currículum', 'Filtra por país, sector y educación', 'Gratuito para todos'] },
        { icon: '👤', title: 'Asesores EURES', duration: 'Cita previa', description: 'Asesoramiento personalizado de más de 850 asesores especializados en 270 organizaciones EURES.', bullets: ['Revisión y mejora del currículum', 'Asesoramiento jurídico sobre seguridad social', 'Información sobre condiciones de vida y trabajo', 'Contacto a través del portal, teléfono o chat'] },
      ],
      covered: [
        { icon: '🔍', title: 'Base de datos de empleo', desc: '3 millones de ofertas y 1 millón de currículos en el portal EURES.' },
        { icon: '📄', title: 'Apoyo para el currículum', desc: 'Revisión, mejora y adaptación de tu currículum para empleadores europeos.' },
        { icon: '⚖️', title: 'Asesoramiento jurídico', desc: 'Información sobre seguridad social, impuestos, pensiones y seguro médico en el país de destino.' },
        { icon: '🎪', title: 'Ferias de empleo', desc: 'Acceso a los Días Europeos de Empleo — ferias de empleo digitales y presenciales.' },
        { icon: '🌍', title: 'Información por país', desc: 'Guías por país sobre vivir y trabajar en los 31 países EURES.' },
        { icon: '🚦', title: 'Trabajadores transfronterizos', desc: 'Apoyo especializado para los casi 2 millones de ciudadanos de la UE que cruzan fronteras diariamente.' },
      ],
      steps: [
        { n: '01', title: 'Crea un perfil', desc: 'Ve a eures.europa.eu y sube tu currículum. Elige el país y el sector que te interesan.' },
        { n: '02', title: 'Busca empleo', desc: 'Navega entre 3 millones de ofertas. Filtra por ubicación, tipo y requisitos educativos.' },
        { n: '03', title: 'Contacta con un asesor EURES', desc: 'Para asesoramiento personalizado, contacta con un asesor local a través del portal, teléfono o chat. Gratuito.' },
        { n: '04', title: 'Solicita y prepara la mudanza', desc: 'Solicita directamente a los empleadores a través del portal. Los asesores ayudan con visados, reconocimiento de cualificaciones e información práctica.' },
      ],
    },

    'eures-targeted-mobility': {
      formats: [
        { icon: '🧑', title: 'Apoyo para personas en búsqueda de empleo', duration: 'Variable según proyecto', description: 'Apoyo dedicado de los servicios nacionales de empleo para eliminar barreras económicas a la movilidad.', bullets: ['Financiación de cursos de idiomas', 'Apoyo para el reconocimiento de cualificaciones', 'Subvenciones para viajes y gastos de estancia', 'Emparejamiento con empleadores en otros países de la UE'] },
        { icon: '🏢', title: 'Apoyo para empresas', duration: 'Variable', description: 'Ayuda para contratar trabajadores europeos motivados. Apoyo económico para gastos de formación e integración para pymes.', bullets: ['Asistencia de los servicios nacionales de empleo', 'Apoyo económico para pymes', 'Contrato escrito obligatorio: 6 meses (empleo) o 3 meses (prácticas)', 'Abierto a todos los sectores y tamaños'] },
      ],
      covered: [
        { icon: '🌐', title: 'Cursos de idiomas', desc: 'Financiación de cursos en el idioma del país de destino.' },
        { icon: '📜', title: 'Reconocimiento de cualificaciones', desc: 'Apoyo para el proceso de reconocimiento de tus cualificaciones en el nuevo país.' },
        { icon: '✈️', title: 'Viajes y estancia', desc: 'Subvenciones para viajes y costes iniciales de vida en el país de destino.' },
      ],
      steps: [
        { n: '01', title: 'Encuentra el proyecto actual', desc: 'Los tres proyectos líderes activos son gestionados por Arbetsförmedlingen (SE), Bundesagentur für Arbeit (DE) y Ministero del Lavoro (IT).' },
        { n: '02', title: 'Toma contacto', desc: 'Contacta directamente con la organización líder o sus socios a través del portal EURES y solicita información sobre el proceso de solicitud.' },
        { n: '03', title: 'Emparejamiento y búsqueda de empleo', desc: 'Los asesores de las organizaciones líderes te ayudan con el emparejamiento, la búsqueda de empleo y la asistencia en el proceso de selección.' },
        { n: '04', title: 'Recibe el apoyo y trasládate', desc: 'Una vez que tengas empleo, el apoyo para cursos de idiomas, reconocimiento de cualificaciones y gastos de viaje se abonará según las condiciones del proyecto.' },
      ],
    },

    'eurodesk': {
      formats: [
        { icon: '🌐', title: 'Opportunity Finder', duration: 'Siempre disponible', description: 'Base de datos de más de 200 programas financiados por la UE: voluntariado, aprendizaje, trabajo, cambio social y competiciones.', bullets: ['Seleccionados por Eurodesk', 'Todos abiertos a jóvenes en Europa', 'Filtra por tipo y país', 'Gratuito y directo'] },
        { icon: '📚', title: 'Euroclasses', duration: 'En escuelas y entornos juveniles', description: 'Talleres gratuitos de educación no formal impartidos por multiplicadores de Eurodesk.', bullets: ['Trabajar en el extranjero', 'Voluntariado internacional', 'Participación juvenil', 'Activismo en Europa'] },
      ],
      covered: [
        { icon: '🌐', title: 'Opportunity Finder', desc: 'Base de datos de más de 200 programas seleccionados para jóvenes en Europa.' },
        { icon: '❓', title: 'Helpdesk', desc: 'Respuestas a tus preguntas sobre Erasmus+, CES, voluntariado y prácticas.' },
        { icon: '📰', title: 'Portal Europeo de la Juventud', desc: 'Eurodesk produce y mantiene el contenido del Portal Europeo de la Juventud.' },
        { icon: '📣', title: 'Campaña Time to Move', desc: 'Campaña de información paneuropea cada octubre sobre oportunidades para viajar al extranjero.' },
        { icon: '✍️', title: 'Jóvenes periodistas', desc: 'Pool of Young Journalists in Europe — 16 jóvenes de toda Europa crean contenido en el Portal Europeo de la Juventud.' },
      ],
      steps: [
        { n: '01', title: 'Visita eurodesk.eu', desc: 'Ve al Opportunity Finder y navega entre más de 200 programas abiertos a jóvenes en Europa.' },
        { n: '02', title: 'Encuentra tu Eurodesk nacional', desc: 'Cada país tiene su propio Eurodesk. Pueden darte asesoramiento personalizado sobre oportunidades en tu propio idioma.' },
        { n: '03', title: 'Haz una pregunta', desc: 'A través del Portal Europeo de la Juventud puedes enviar preguntas directamente a la red Eurodesk en tu propio idioma europeo.' },
      ],
    },

    'europa-direkt': {
      formats: [
        { icon: '📞', title: 'Teléfono y chat', duration: 'Lun–vie 9:00–18:00 CET', description: 'Llama gratis desde cualquier lugar de la UE. Respuestas a todas las preguntas sobre la UE en cualquier idioma oficial de la UE.', bullets: ['+800 6 7 8 9 10 11 (gratuito en la UE)', '+32 22 99 96 96 (desde fuera de la UE)', 'También se acepta ucraniano y ruso', 'SMS "call me" para una devolución de llamada'] },
        { icon: '📍', title: 'Centros de información locales', duration: 'Ver horarios de cada centro', description: 'Unos 400 centros en los 27 estados miembros de la UE. Organizan eventos, debates y son un puente local con la UE.', bullets: ['Encuentra el centro más cercano en european-union.europa.eu', 'Responden preguntas sobre los programas de la UE', 'Trabajan con escuelas y socios locales', 'Escuchan y transmiten tu voz'] },
      ],
      covered: [
        { icon: '☎️', title: 'Teléfono gratuito', desc: '+800 6 7 8 9 10 11. Gratuito desde todos los países de la UE, lun–vie 9:00–18:00 CET.' },
        { icon: '✉️', title: 'Consulta escrita', desc: 'A través del formulario de contacto en cualquier idioma de la UE. Respuesta en 3 días laborables.' },
        { icon: '🗺️', title: 'Centro local', desc: '~400 centros en toda la UE. Encuentra el tuyo en european-union.europa.eu.' },
      ],
      steps: [
        { n: '01', title: 'Elige cómo contactar', desc: 'Llama al +800 6 7 8 9 10 11, chatea en la web, rellena el formulario de contacto o visita un centro local.' },
        { n: '02', title: 'Haz tu pregunta', desc: 'Puedes preguntar sobre cualquier cosa relacionada con la UE — programas, derechos, legislación o financiación local.' },
        { n: '03', title: 'Obtén respuesta', desc: 'Teléfono: respuesta inmediata en tu propio idioma de la UE. Consulta escrita: respuesta en 3 días laborables.' },
      ],
    },

    'eu-youth-portal': {
      formats: [
        { icon: '✋', title: 'Participa', duration: 'Siempre disponible', description: 'Ciudadanía activa, Diálogo de la Juventud de la UE, participación democrática, tus derechos e inclusión.', bullets: ['Diálogo de la Juventud de la UE', 'Participación democrática', 'Derechos civiles', 'Inclusión y sostenibilidad'] },
        { icon: '✈️', title: 'Ve al extranjero', duration: 'Siempre disponible', description: 'Oportunidades de estudio, voluntariado, prácticas, trabajo, intercambios y viajes.', bullets: ['Todas las oportunidades del CES', 'Solicitud a DiscoverEU', 'Información sobre Erasmus+', 'Prácticas internacionales'] },
      ],
      covered: [
        { icon: '🌐', title: 'Todos los programas oficiales de la UE', desc: 'Información completa sobre CES, Erasmus+, DiscoverEU y más.' },
        { icon: '❓', title: 'Helpdesk', desc: 'Envía preguntas a través del portal — respondidas por la red Eurodesk.' },
        { icon: '🗳️', title: 'Diálogo de la Juventud de la UE', desc: 'Tu voz ante los decisores de la UE a través del diálogo juvenil estructurado.' },
        { icon: '📖', title: 'Historias de jóvenes', desc: 'Artículos, noticias y experiencias de jóvenes de toda Europa.' },
      ],
      steps: [
        { n: '01', title: 'Visita youth.europa.eu', desc: 'El portal está abierto para todos sin necesidad de registrarse. Navega en tu propio idioma europeo.' },
        { n: '02', title: 'Explora tus oportunidades', desc: 'Navega por "Ve al extranjero" para actividades en el extranjero o "Participa" para la ciudadanía activa.' },
        { n: '03', title: 'Solicita o haz una pregunta', desc: 'Solicita directamente a DiscoverEU, o envía una pregunta a través del botón "Preguntas" — respondida por Eurodesk.' },
      ],
    },
  },

  // ─── ITALIANO ────────────────────────────────────────────────────────────────
  it: {
    'humanitart-volontararbete': {
      formats: [
        { icon: '🧑', title: 'Volontariato umanitario individuale', duration: '2–12 mesi', description: "A tempo pieno (30–38 ore/settimana). Sempre transfrontaliero — in un paese terzo dove sono in corso operazioni umanitarie.", bullets: ["Supporta l'attività umanitaria dell'organizzazione ospitante", 'Alloggio, viaggi e vitto coperti', 'Assicurazione complementare', 'Piccola indennità personale'] },
        { icon: '👥', title: 'Volontariato umanitario di gruppo', duration: '2 settimane – 2 mesi', description: 'Gruppi di 5–40 volontari di almeno 2 paesi. A tempo pieno.', bullets: ['Selezionato dalle organizzazioni di invio e ospitanti', 'Almeno 2 paesi rappresentati', 'Alloggio e viaggi coperti', 'Assicurazione complementare'] },
      ],
      covered: [
        { icon: '✈️', title: 'Viaggi', desc: 'I biglietti di andata e ritorno al progetto sono coperti.' },
        { icon: '🏠', title: 'Alloggio', desc: "L'organizzazione ospitante organizza l'alloggio." },
        { icon: '🍽️', title: 'Vitto', desc: "I pasti quotidiani o un'indennità per il cibo sono inclusi." },
        { icon: '💶', title: 'Indennità', desc: 'Piccola indennità personale durante la permanenza.' },
        { icon: '🛡️', title: 'Assicurazione', desc: "L'assicurazione complementare copre salute e infortuni." },
        { icon: '🌐', title: 'Supporto linguistico', desc: 'Accesso al supporto linguistico nella lingua di lavoro.' },
      ],
      steps: [
        { n: '01', title: 'Registrati sul portale CES', desc: 'Crea un account e completa il tuo profilo. Indica il tuo interesse per il volontariato umanitario.' },
        { n: '02', title: 'Avvia la formazione online', desc: 'Vai alla scheda "Formazione online" nel tuo account e seleziona "Formazione per aiuti umanitari". Inizia con la valutazione personale su EU Academy.' },
        { n: '03', title: 'Supera il test online', desc: 'Completa la formazione online obbligatoria e supera il test per essere invitato alla formazione in presenza.' },
        { n: '04', title: 'Partecipa alla formazione in presenza', desc: '5 giorni in gruppi di ~25 candidati. Centri di formazione in Francia, Germania, Italia o Spagna. Tre sessioni annuali: feb–mar, mag–giu, set–ott.' },
        { n: '05', title: 'Sii selezionato da un progetto', desc: 'Dopo aver completato la formazione potrai essere selezionato da un progetto di volontariato umanitario. Attenzione: i posti sono limitati.' },
      ],
    },

    'erasmus-plus': {
      formats: [
        { icon: '🏫', title: 'Mobilità individuale (KA1)', duration: 'Variabile', description: 'Studi e tirocini allestero per studenti, apprendisti e personale in istruzione e sport.', bullets: ["Scambio studentesco tramite istituzioni", 'Tirocini allestero', 'Attività di partecipazione giovanile', 'Mobilità per professionisti dello sport'] },
        { icon: '🤝', title: 'Cooperazione tra organizzazioni (KA2)', duration: 'Variabile', description: "Partnership e progetti a cui le organizzazioni possono candidarsi — finanziano i progetti a cui le persone poi partecipano.", bullets: ['Partnership di cooperazione', 'Partnership su piccola scala', 'Università Europee', 'Master congiunti Erasmus Mundus'] },
        { icon: '🏛️', title: 'Azioni Jean Monnet', duration: 'Variabile', description: "Supporto all'insegnamento e alla ricerca sull'integrazione europea nelle istituzioni di istruzione superiore.", bullets: ['Moduli Jean Monnet', 'Cattedre Jean Monnet', 'Centri di Eccellenza'] },
      ],
      covered: [
        { icon: '✈️', title: 'Viaggi', desc: 'Contributo alle spese di viaggio in base alla distanza e al tipo di attività.' },
        { icon: '🏠', title: 'Alloggio', desc: "Contributo all'alloggio durante il periodo di scambio." },
        { icon: '💶', title: 'Borsa di studio', desc: 'Borsa mensile adeguata al costo della vita nel paese di destinazione.' },
        { icon: '🌐', title: 'Supporto linguistico', desc: "Accesso gratuito al Supporto Linguistico Online di Erasmus+ (OLS)." },
        { icon: '📜', title: 'Riconoscimento', desc: 'I crediti accademici e le competenze vengono riconosciuti tramite Europass e strumenti simili.' },
        { icon: '♿', title: 'Supporto all\'inclusione', desc: 'Supporto aggiuntivo per partecipanti con disabilità o con meno opportunità.' },
      ],
      steps: [
        { n: '01', title: 'Contatta la tua organizzazione', desc: "Erasmus+ si richiede tramite la tua università, scuola o organizzazione giovanile — non direttamente come individuo." },
        { n: '02', title: 'Candidati tramite la tua istituzione', desc: "La tua istituzione richiede il finanziamento Erasmus+. Chiedi al tuo coordinatore internazionale le opportunità disponibili." },
        { n: '03', title: 'Sii nominato', desc: 'La tua istituzione ti nomina per uno scambio o tirocinio presso un istituto partner.' },
        { n: '04', title: 'Preparati', desc: "Richiedi il visto se necessario, inizia la preparazione linguistica tramite OLS e organizza l'alloggio." },
        { n: '05', title: 'Vai e torna con crediti riconosciuti', desc: 'I tuoi risultati accademici vengono riconosciuti nel tuo paese. Le competenze vengono documentate in Europass.' },
      ],
    },

    'discovereu': {
      formats: [
        { icon: '🧑', title: 'Viaggio individuale', duration: '7 giorni di viaggio in 1 mese', description: 'Viaggiare da soli come partecipante DiscoverEU. Scegli tu paesi, percorso e ritmo.', bullets: ['Pass ferroviario in 2ª classe', 'Fino a 4 prenotazioni di posto gratuite', 'Carta sconto con vantaggi', 'I giorni di viaggio possono essere distribuiti'] },
        { icon: '👥', title: 'Viaggio di gruppo', duration: '7 giorni di viaggio in 1 mese', description: 'Viaggiare insieme a un massimo di 4 amici. Tutti devono soddisfare i criteri di ammissibilità.', bullets: ['Massimo 5 persone nel gruppo', 'Tutti devono avere 18 anni ed essere idonei', 'Stessi vantaggi del viaggio individuale'] },
      ],
      covered: [
        { icon: '🚆', title: 'Biglietti ferroviari', desc: 'Pass ferroviario in 2ª classe. I voli sono ammessi in casi eccezionali (isole, regioni remote).' },
        { icon: '🎟️', title: 'Carta sconto', desc: 'Sconti su alloggio, cultura, trasporto locale e cibo in tutta Europa.' },
        { icon: '📌', title: 'Prenotazioni di posto', desc: 'Fino a 4 prenotazioni di posto gratuite incluse nel pass.' },
      ],
      steps: [
        { n: '01', title: 'Verifica la tua idoneità', desc: 'Devi compiere 18 anni tra il 1° luglio 2025 e il 30 giugno 2026 (per il ciclo di primavera 2026). Cittadinanza UE o paese associato.' },
        { n: '02', title: 'Candidati tramite il Portale Europeo della Gioventù', desc: 'La candidatura avviene direttamente su youth.europa.eu. Periodo di candidatura primavera 2026: 8–22 aprile 2026.' },
        { n: '03', title: 'Rispondi al quiz', desc: '5 domande a scelta multipla sulla UE + una domanda di spareggio. Chi risponde correttamente a tutte e 5 viene classificato in base alla risposta di spareggio.' },
        { n: '04', title: 'Attendi i risultati', desc: 'I risultati saranno comunicati a giugno 2026. I pass vengono assegnati per paese secondo una chiave di distribuzione.' },
        { n: '05', title: 'Attiva e viaggia', desc: 'Attiva il tuo pass entro il 31 agosto 2026. Puoi viaggiare dal 1° luglio 2026 al 30 settembre 2027.' },
      ],
    },

    'blue-book-traineeship': {
      covered: [
        { icon: '💶', title: 'Indennità mensile', desc: '1.538,16 € al mese per tutta la durata del tirocinio.' },
        { icon: '🌍', title: 'Ambiente internazionale', desc: 'Lavora con colleghi provenienti da tutta Europa e dal mondo.' },
        { icon: '📜', title: 'Certificato', desc: "Attestato ufficiale di tirocinio dalla Commissione europea." },
      ],
      steps: [
        { n: '01', title: 'Verifica i requisiti', desc: "Devi avere una laurea triennale (EQF 6), le competenze linguistiche richieste e non più di 6 settimane di precedente esperienza UE." },
        { n: '02', title: 'Candidati online', desc: "Le candidature aprono due volte l'anno: febbraio (per la sessione di ottobre) e luglio–agosto (per la sessione di marzo). Carica tutti i documenti in un unico PDF." },
        { n: '03', title: 'Preselezione', desc: 'Una commissione verifica i documenti. I candidati prescelti entrano nel "Virtual Blue Book" e possono candidarsi a un massimo di 3 posti.' },
        { n: '04', title: 'Colloquio e offerta', desc: "I dipartimenti interessati possono contattare i candidati e organizzare colloqui. La selezione è definitiva quando l'offerta appare nel tuo account." },
        { n: '05', title: 'Inizia il tirocinio', desc: "Le sessioni iniziano a ottobre e a marzo. Se rifiuti un'offerta, non ne riceverai altre." },
      ],
    },

    'robert-schuman-praktiken': {
      formats: [
        { icon: '🏢', title: 'Tirocinio presso la Segreteria', duration: '5 mesi (ott–feb o mar–lug)', description: 'Tirocinio in politica UE, finanze, diritto, multilinguismo, comunicazione o informatica. Candidatura a maggio (per ottobre) o ottobre (per marzo).', bullets: ['~1.899 €/mese in Italia, 1.889 €/mese in Belgio', '300 € indennità di viaggio', 'Richiede laurea (EQF 6)', 'Max 2 mesi di precedente esperienza UE'] },
        { icon: '🧑‍⚖️', title: 'Tirocinio MEP', duration: '6 settimane – 5 mesi', description: 'Lavorare direttamente con un eurodeputato. Si richiede direttamente ai deputati, non tramite il portale.', bullets: ['1.133–1.856 €/mese (tempo pieno)', 'Diploma di scuola superiore sufficiente', 'Può iniziare in qualsiasi periodo dell\'anno', 'Il deputato definisce i compiti'] },
      ],
      covered: [
        { icon: '💶', title: 'Indennità mensile', desc: 'Varia per paese. Italia: ~1.899 €/mese. Importo base: 1.889 €/mese.' },
        { icon: '✈️', title: 'Indennità di viaggio', desc: '300 € forfettari per tirocinante.' },
        { icon: '♿', title: 'Supplemento per disabilità', desc: "Fino al 50% aggiuntivo dell'indennità mensile per disabilità di lunga durata del 20% o più." },
      ],
      steps: [
        { n: '01', title: 'Scegli il tipo di tirocinio', desc: 'Tirocinio presso la Segreteria o tirocinio MEP — sono programmi separati con regole e processi di candidatura diversi.' },
        { n: '02', title: 'Verifica i requisiti', desc: 'Almeno 18 anni, laurea (EQF 6), cittadinanza UE o paese candidato, max 2 mesi di precedente esperienza UE, fedina penale pulita.' },
        { n: '03', title: 'Candidati a un massimo di 3 posti', desc: 'Le candidature vengono presentate tramite il portale del Parlamento europeo. Max 3 posti per candidatura. Non sono accettate candidature spontanee.' },
        { n: '04', title: 'Processo di preselezione', desc: 'La tua candidatura viene valutata in base al profilo accademico, alle competenze linguistiche e ad altri meriti. Si applicano quote nazionali.' },
        { n: '05', title: 'Inizia il tirocinio', desc: 'Riceverai una lettera ufficiale di accettazione via email. I periodi di tirocinio iniziano il 1° ottobre o il 1° marzo.' },
      ],
    },

    'eures': {
      formats: [
        { icon: '🔍', title: 'Portale EURES', duration: 'Sempre disponibile', description: 'Piattaforma online con 3 milioni di offerte e 1 milione di CV. Abbinamento di lavori e candidati.', bullets: ['Cerca lavoro in 31 paesi', 'Carica il tuo CV', 'Filtra per paese, settore e istruzione', 'Gratuito per tutti'] },
        { icon: '👤', title: 'Consulenti EURES', duration: 'Su appuntamento', description: 'Consulenza personale da oltre 850 consulenti specializzati in 270 organizzazioni EURES.', bullets: ['Revisione e miglioramento del CV', 'Consulenza legale sulla previdenza sociale', 'Informazioni sulle condizioni di vita e lavoro', 'Contatto tramite portale, telefono o chat'] },
      ],
      covered: [
        { icon: '🔍', title: 'Database offerte di lavoro', desc: '3 milioni di offerte e 1 milione di CV sul portale EURES.' },
        { icon: '📄', title: 'Supporto CV', desc: 'Revisione, miglioramento e adattamento del tuo CV per i datori di lavoro europei.' },
        { icon: '⚖️', title: 'Consulenza legale', desc: 'Informazioni su previdenza sociale, tasse, pensioni e assicurazione sanitaria nel paese di destinazione.' },
        { icon: '🎪', title: 'Fiere del lavoro', desc: 'Accesso alle Giornate Europee del Lavoro — fiere del lavoro digitali e in presenza.' },
        { icon: '🌍', title: 'Informazioni per paese', desc: 'Guide paese per vivere e lavorare in tutti i 31 paesi EURES.' },
        { icon: '🚦', title: 'Lavoratori transfrontalieri', desc: 'Supporto specializzato per i quasi 2 milioni di cittadini UE che attraversano i confini quotidianamente.' },
      ],
      steps: [
        { n: '01', title: 'Crea un profilo', desc: 'Vai su eures.europa.eu e carica il tuo CV. Scegli il paese e il settore che ti interessano.' },
        { n: '02', title: 'Cerca lavoro', desc: 'Sfoglia 3 milioni di offerte. Filtra per posizione, tipo e requisiti educativi.' },
        { n: '03', title: 'Contatta un consulente EURES', desc: 'Per una consulenza personale, contatta un consulente locale tramite il portale, telefono o chat. Gratuito.' },
        { n: '04', title: 'Candidati e preparati al trasferimento', desc: 'Candidati direttamente ai datori di lavoro tramite il portale. I consulenti aiutano con visti, riconoscimento qualifiche e informazioni pratiche.' },
      ],
    },

    'eures-targeted-mobility': {
      formats: [
        { icon: '🧑', title: 'Supporto per chi cerca lavoro', duration: 'Variabile per progetto', description: 'Supporto dedicato dei servizi nazionali per l\'impiego per rimuovere le barriere economiche alla mobilità.', bullets: ['Finanziamento di corsi di lingua', 'Supporto per il riconoscimento delle qualifiche', 'Contributi per viaggi e spese di soggiorno', 'Abbinamento con datori di lavoro in altri paesi UE'] },
        { icon: '🏢', title: 'Supporto per le aziende', duration: 'Variabile', description: 'Aiuto per assumere lavoratori europei motivati. Supporto finanziario per costi di formazione e integrazione per le PMI.', bullets: ['Assistenza dai servizi nazionali per l\'impiego', 'Supporto finanziario per le PMI', 'Contratto scritto obbligatorio: 6 mesi (lavoro) o 3 mesi (tirocinio)', 'Aperto a tutti i settori e dimensioni'] },
      ],
      covered: [
        { icon: '🌐', title: 'Corsi di lingua', desc: 'Finanziamento di corsi nella lingua del paese di destinazione.' },
        { icon: '📜', title: 'Riconoscimento qualifiche', desc: 'Supporto per il processo di riconoscimento delle tue qualifiche nel nuovo paese.' },
        { icon: '✈️', title: 'Viaggi e soggiorno', desc: 'Contributi per viaggi e costi iniziali di vita nel paese di destinazione.' },
      ],
      steps: [
        { n: '01', title: 'Trova il progetto attuale', desc: 'I tre progetti guida attivi sono gestiti da Arbetsförmedlingen (SE), Bundesagentur für Arbeit (DE) e Ministero del Lavoro (IT).' },
        { n: '02', title: 'Prendi contatto', desc: "Contatta direttamente l'organizzazione guida o i suoi partner tramite il portale EURES e chiedi informazioni sul processo di candidatura." },
        { n: '03', title: 'Abbinamento e ricerca lavoro', desc: "I consulenti delle organizzazioni guida ti aiutano con l'abbinamento, la ricerca di lavoro e l'assistenza nel processo di selezione." },
        { n: '04', title: 'Ricevi il supporto e trasferisciti', desc: "Una volta ottenuto il lavoro, il supporto per corsi di lingua, riconoscimento delle qualifiche e spese di viaggio verrà erogato secondo le condizioni del progetto." },
      ],
    },

    'eurodesk': {
      formats: [
        { icon: '🌐', title: 'Opportunity Finder', duration: 'Sempre disponibile', description: "Database di oltre 200 programmi finanziati dall'UE: volontariato, apprendimento, lavoro, cambiamento sociale e competizioni.", bullets: ['Curato da Eurodesk', 'Tutti aperti ai giovani in Europa', 'Filtra per tipo e paese', 'Gratuito e diretto'] },
        { icon: '📚', title: 'Euroclasses', duration: 'Nelle scuole e negli ambienti giovanili', description: 'Workshop gratuiti di educazione non formale tenuti dai moltiplicatori Eurodesk.', bullets: ['Lavorare allestero', 'Volontariato internazionale', 'Partecipazione giovanile', 'Attivismo in Europa'] },
      ],
      covered: [
        { icon: '🌐', title: 'Opportunity Finder', desc: "Database di oltre 200 programmi selezionati per i giovani in Europa." },
        { icon: '❓', title: 'Helpdesk', desc: "Risposte alle tue domande su Erasmus+, CES, volontariato e tirocini." },
        { icon: '📰', title: 'Portale Europeo della Gioventù', desc: "Eurodesk produce e mantiene i contenuti del Portale Europeo della Gioventù." },
        { icon: '📣', title: 'Campagna Time to Move', desc: "Campagna informativa paneuropea ogni ottobre sulle opportunità di andare all'estero." },
        { icon: '✍️', title: 'Giovani giornalisti', desc: "Pool of Young Journalists in Europe — 16 giovani da tutta Europa creano contenuti sul Portale Europeo della Gioventù." },
      ],
      steps: [
        { n: '01', title: 'Visita eurodesk.eu', desc: "Vai all'Opportunity Finder e sfoglia oltre 200 programmi aperti ai giovani in Europa." },
        { n: '02', title: 'Trova il tuo Eurodesk nazionale', desc: "Ogni paese ha il suo Eurodesk. Possono darti consigli personalizzati sulle opportunità nella tua lingua." },
        { n: '03', title: 'Fai una domanda', desc: "Tramite il Portale Europeo della Gioventù puoi inviare domande direttamente alla rete Eurodesk nella tua lingua europea." },
      ],
    },

    'europa-direkt': {
      formats: [
        { icon: '📞', title: 'Telefono e chat', duration: 'Lun–ven 9:00–18:00 CET', description: "Chiama gratuitamente da qualsiasi luogo nell'UE. Risposte a tutte le domande sull'UE in qualsiasi lingua ufficiale dell'UE.", bullets: ['+800 6 7 8 9 10 11 (gratuito nell\'UE)', '+32 22 99 96 96 (dall\'estero UE)', 'Accettati anche ucraino e russo', 'SMS "call me" per una richiamata'] },
        { icon: '📍', title: 'Centri di informazione locali', duration: 'Vedi orari del singolo centro', description: "Circa 400 centri in tutti i 27 stati membri dell'UE. Organizzano eventi, dibattiti e sono un ponte locale con l'UE.", bullets: ['Trova il centro più vicino su european-union.europa.eu', "Rispondono a domande sui programmi dell'UE", 'Collaborano con scuole e partner locali', 'Ascoltano e trasmettono la tua voce'] },
      ],
      covered: [
        { icon: '☎️', title: 'Telefono gratuito', desc: "+800 6 7 8 9 10 11. Gratuito da tutti i paesi dell'UE, lun–ven 9:00–18:00 CET." },
        { icon: '✉️', title: 'Richiesta scritta', desc: "Tramite modulo di contatto in qualsiasi lingua UE. Risposta entro 3 giorni lavorativi." },
        { icon: '🗺️', title: 'Centro locale', desc: "~400 centri in tutta l'UE. Trova il tuo su european-union.europa.eu." },
      ],
      steps: [
        { n: '01', title: 'Scegli come contattarci', desc: "Chiama il +800 6 7 8 9 10 11, chatta sul sito, compila il modulo di contatto o visita un centro locale." },
        { n: '02', title: 'Fai la tua domanda', desc: "Puoi chiedere qualsiasi cosa riguardi l'UE — programmi, diritti, legislazione o finanziamenti locali." },
        { n: '03', title: 'Ottieni una risposta', desc: "Telefono: risposta immediata nella tua lingua UE. Richiesta scritta: risposta entro 3 giorni lavorativi." },
      ],
    },

    'eu-youth-portal': {
      formats: [
        { icon: '✋', title: 'Partecipa', duration: 'Sempre disponibile', description: "Cittadinanza attiva, Dialogo europeo della gioventù, partecipazione democratica, i tuoi diritti e inclusione.", bullets: ['Dialogo europeo della gioventù', 'Partecipazione democratica', 'Diritti civili', 'Inclusione e sostenibilità'] },
        { icon: '✈️', title: 'Vai allestero', duration: 'Sempre disponibile', description: "Opportunità di studio, volontariato, tirocini, lavoro, scambi e viaggi.", bullets: ['Tutte le opportunità CES', 'Candidatura DiscoverEU', 'Informazioni Erasmus+', 'Tirocini internazionali'] },
      ],
      covered: [
        { icon: '🌐', title: "Tutti i programmi ufficiali dell'UE", desc: "Informazioni complete su CES, Erasmus+, DiscoverEU e altro." },
        { icon: '❓', title: 'Helpdesk', desc: "Invia domande tramite il portale — risposte dalla rete Eurodesk." },
        { icon: '🗳️', title: 'Dialogo europeo della gioventù', desc: "La tua voce ai decisori dell'UE tramite il dialogo giovanile strutturato." },
        { icon: '📖', title: 'Storie di giovani', desc: "Articoli, notizie ed esperienze di giovani da tutta Europa." },
      ],
      steps: [
        { n: '01', title: 'Visita youth.europa.eu', desc: "Il portale è aperto a tutti senza registrazione. Naviga nella tua lingua europea." },
        { n: '02', title: 'Esplora le tue opportunità', desc: 'Naviga tramite "Vai all\'estero" per attività all\'estero o "Partecipa" per la cittadinanza attiva.' },
        { n: '03', title: 'Candidati o fai una domanda', desc: 'Candidati direttamente a DiscoverEU, o invia una domanda tramite il pulsante "Domande" — risposta da Eurodesk.' },
      ],
    },
  },

  // ─── DEUTSCH ─────────────────────────────────────────────────────────────────
  de: {
    'humanitart-volontararbete': {
      formats: [
        { icon: '🧑', title: 'Individueller humanitärer Freiwilligendienst', duration: '2–12 Monate', description: 'Vollzeit (30–38 Stunden/Woche). Immer grenzüberschreitend — in einem Drittland, in dem humanitäre Einsätze laufen.', bullets: ['Unterstützt die humanitäre Arbeit der Aufnahmeorganisation', 'Unterkunft, Reisen und Verpflegung inklusive', 'Ergänzende Versicherung', 'Kleines persönliches Taschengeld'] },
        { icon: '👥', title: 'Humanitärer Gruppen-Freiwilligendienst', duration: '2 Wochen – 2 Monate', description: 'Gruppen von 5–40 Freiwilligen aus mindestens 2 Ländern. Vollzeit.', bullets: ['Von Entsendeorganisationen und Aufnahmeorganisation ausgewählt', 'Mindestens 2 Länder vertreten', 'Unterkunft und Reisekosten inklusive', 'Ergänzende Versicherung'] },
      ],
      covered: [
        { icon: '✈️', title: 'Reisen', desc: 'Die Hin- und Rückreise zum Projekt wird übernommen.' },
        { icon: '🏠', title: 'Unterkunft', desc: 'Die Aufnahmeorganisation organisiert die Unterkunft.' },
        { icon: '🍽️', title: 'Verpflegung', desc: 'Tägliche Mahlzeiten oder ein Verpflegungszuschuss sind inbegriffen.' },
        { icon: '💶', title: 'Taschengeld', desc: 'Kleines persönliches Taschengeld während des Aufenthalts.' },
        { icon: '🛡️', title: 'Versicherung', desc: 'Die ergänzende Versicherung deckt Gesundheit und Unfälle.' },
        { icon: '🌐', title: 'Sprachunterstützung', desc: 'Zugang zu Sprachunterstützung in der Arbeitssprache.' },
      ],
      steps: [
        { n: '01', title: 'Im ESK-Portal registrieren', desc: 'Erstelle ein Konto und vervollständige dein Profil. Gib an, dass du an humanitärem Freiwilligendienst interessiert bist.' },
        { n: '02', title: 'Online-Ausbildung starten', desc: 'Gehe auf den Reiter "Online-Ausbildung" in deinem Konto und wähle "Ausbildung humanitäre Hilfe". Beginne mit der Selbsteinschätzung auf EU Academy.' },
        { n: '03', title: 'Online-Test bestehen', desc: 'Absolviere die obligatorische Online-Ausbildung und bestehe den Test, um zur Präsenzausbildung eingeladen zu werden.' },
        { n: '04', title: 'An der Präsenzausbildung teilnehmen', desc: '5 Tage in Gruppen von ~25 Kandidaten. Ausbildungszentren in Frankreich, Deutschland, Italien oder Spanien. Drei Runden pro Jahr: Feb–März, Mai–Juni, Sept–Okt.' },
        { n: '05', title: 'Von einem Projekt ausgewählt werden', desc: 'Nach der Ausbildung kannst du von einem humanitären Freiwilligenprojekt ausgewählt werden. Achtung: Plätze sind begrenzt.' },
      ],
    },

    'erasmus-plus': {
      formats: [
        { icon: '🏫', title: 'Individuelle Mobilität (KA1)', duration: 'Variiert', description: 'Studium und Praktika im Ausland für Studierende, Auszubildende und Personal in Bildung und Sport.', bullets: ['Studentenaustausch über Institutionen', 'Praktika im Ausland', 'Jugendpartizipationsaktivitäten', 'Mobilität für Sportfachleute'] },
        { icon: '🤝', title: 'Zusammenarbeit zwischen Organisationen (KA2)', duration: 'Variiert', description: 'Partnerschaften und Projekte, für die Organisationen Förderung beantragen können — sie finanzieren die Projekte, an denen Einzelpersonen teilnehmen.', bullets: ['Kooperationspartnerschaften', 'Kleinere Partnerschaften', 'Europäische Hochschulen', 'Erasmus Mundus gemeinsame Masterstudiengänge'] },
        { icon: '🏛️', title: 'Jean-Monnet-Maßnahmen', duration: 'Variiert', description: 'Förderung von Lehre und Forschung zur europäischen Integration an Hochschulen.', bullets: ['Jean-Monnet-Module', 'Jean-Monnet-Lehrstühle', 'Kompetenzzentren'] },
      ],
      covered: [
        { icon: '✈️', title: 'Reisen', desc: 'Zuschuss zu den Reisekosten je nach Entfernung und Aktivitätsart.' },
        { icon: '🏠', title: 'Unterkunft', desc: 'Zuschuss zur Unterkunft während des Austauschs.' },
        { icon: '💶', title: 'Stipendium', desc: 'Monatlicher Zuschuss angepasst an die Lebenshaltungskosten im Zielland.' },
        { icon: '🌐', title: 'Sprachunterstützung', desc: 'Kostenloser Zugang zum Erasmus+ Online Language Support (OLS).' },
        { icon: '📜', title: 'Anerkennung', desc: 'Studienleistungen und Kompetenzen werden über Europass und ähnliche Instrumente anerkannt.' },
        { icon: '♿', title: 'Inklusionsunterstützung', desc: 'Zusätzliche Unterstützung für Teilnehmende mit Behinderungen oder mit weniger Möglichkeiten.' },
      ],
      steps: [
        { n: '01', title: 'Kontaktiere deine Organisation', desc: 'Erasmus+ wird über deine Universität, Schule oder Jugendorganisation beantragt — nicht direkt als Einzelperson.' },
        { n: '02', title: 'Bewirb dich über deine Einrichtung', desc: 'Deine Einrichtung beantragt die Erasmus+-Förderung. Frage deinen internationalen Koordinator nach den verfügbaren Möglichkeiten.' },
        { n: '03', title: 'Nominiert werden', desc: 'Deine Einrichtung nominiert dich für einen Austausch oder ein Praktikum an einer Partnereinrichtung.' },
        { n: '04', title: 'Vorbereiten', desc: 'Beantrage ein Visum, wenn nötig, beginne die Sprachvorbereitung über OLS und organisiere die Unterkunft.' },
        { n: '05', title: 'Fahre hin und komme mit anerkannten Credits zurück', desc: 'Deine Studienleistungen werden zu Hause anerkannt. Kompetenzen werden in Europass dokumentiert.' },
      ],
    },

    'discovereu': {
      formats: [
        { icon: '🧑', title: 'Einzelreise', duration: '7 Reisetage innerhalb 1 Monat', description: 'Alleine als DiscoverEU-Teilnehmer reisen. Du wählst Länder, Route und Tempo selbst.', bullets: ['Zugpass in der 2. Klasse', 'Bis zu 4 kostenlose Sitzplatzreservierungen', 'Rabattkarte mit Vorteilen', 'Reisetage können verteilt werden'] },
        { icon: '👥', title: 'Gruppenreise', duration: '7 Reisetage innerhalb 1 Monat', description: 'Gemeinsam mit bis zu 4 Freunden reisen. Alle müssen die Teilnahmevoraussetzungen erfüllen.', bullets: ['Maximal 5 Personen in der Gruppe', 'Alle müssen 18 Jahre alt und berechtigt sein', 'Gleiche Vorteile wie bei der Einzelreise'] },
      ],
      covered: [
        { icon: '🚆', title: 'Zugtickets', desc: 'Zugpass in der 2. Klasse. Flüge sind in Ausnahmefällen gestattet (Inseln, abgelegene Regionen).' },
        { icon: '🎟️', title: 'Rabattkarte', desc: 'Rabatte auf Unterkunft, Kultur, Nahverkehr und Essen in ganz Europa.' },
        { icon: '📌', title: 'Sitzplatzreservierungen', desc: 'Bis zu 4 kostenlose Sitzplatzreservierungen im Zugpass enthalten.' },
      ],
      steps: [
        { n: '01', title: 'Berechtigung prüfen', desc: 'Du musst zwischen dem 1. Juli 2025 und dem 30. Juni 2026 18 Jahre alt werden (für die Frühjahrsrunde 2026). Staatsbürgerschaft in der EU oder einem assoziierten Land.' },
        { n: '02', title: 'Über das Europäische Jugendportal bewerben', desc: 'Die Bewerbung erfolgt direkt auf youth.europa.eu. Bewerbungszeitraum Frühjahr 2026: 8.–22. April 2026.' },
        { n: '03', title: 'Quiz beantworten', desc: '5 Multiple-Choice-Fragen zur EU + eine Stichfrage. Wer alle 5 richtig beantwortet, wird anhand der Stichfrage eingestuft.' },
        { n: '04', title: 'Auf Ergebnisse warten', desc: 'Ergebnisse werden im Juni 2026 mitgeteilt. Pässe werden pro Land nach einem Verteilungsschlüssel zugeteilt.' },
        { n: '05', title: 'Aktivieren und reisen', desc: 'Aktiviere deinen Pass bis zum 31. August 2026. Reisen möglich vom 1. Juli 2026 bis 30. September 2027.' },
      ],
    },

    'blue-book-traineeship': {
      formats: [
        { icon: '🏢', title: 'Verwaltungspraktikum (ADMIN)', duration: '5 Monate', description: 'Praktische Erfahrung mit EU-Politikarbeit und Verwaltung. Einsätze in der gesamten Kommission und ihren Agenturen.', bullets: ['1.538,16 €/Monat', 'Erfordert Hochschulabschluss (EQF 6)', 'C1/C2 in EN, FR oder DE + B2 in einer weiteren EU-Sprache', 'Max. 6 Wochen frühere EU-Erfahrung'] },
        { icon: '🌐', title: 'Übersetzungspraktikum (DGT)', duration: '5 Monate', description: 'Praktische Erfahrung beim Übersetzen von Dokumenten in deine Muttersprache. Nur für EU-Bürger.', bullets: ['1.538,16 €/Monat', 'Muttersprache muss eine offizielle EU-Sprache sein', 'Quellsprache 1: EN, FR oder DE (C1+)', 'Quellsprache 2: beliebige EU-Sprache (B2+)'] },
      ],
      covered: [
        { icon: '💶', title: 'Monatliche Vergütung', desc: '1.538,16 € pro Monat während des gesamten Praktikums.' },
        { icon: '🌍', title: 'Internationales Umfeld', desc: 'Arbeite mit Kolleginnen und Kollegen aus ganz Europa und der Welt.' },
        { icon: '📜', title: 'Praktikumsbescheinigung', desc: 'Offizielle Praktikumsbescheinigung der Europäischen Kommission.' },
      ],
      steps: [
        { n: '01', title: 'Berechtigung prüfen', desc: 'Du musst einen abgeschlossenen 3-jährigen Hochschulabschluss (EQF 6), die richtigen Sprachkenntnisse und höchstens 6 Wochen frühere EU-Erfahrung haben.' },
        { n: '02', title: 'Online bewerben', desc: 'Bewerbungen öffnen zweimal jährlich: im Februar (für die Oktober-Session) und im Juli–August (für die März-Session). Alle Unterlagen in einer PDF-Datei hochladen.' },
        { n: '03', title: 'Vorauswahlverfahren', desc: 'Ein Ausschuss prüft die Unterlagen. Vorausgewählte Kandidaten kommen in das "Virtual Blue Book" und können sich auf bis zu 3 Stellen bewerben.' },
        { n: '04', title: 'Vorstellungsgespräch und Angebot', desc: 'Rekrutierende Abteilungen können Kandidaten kontaktieren und Gespräche führen. Die Auswahl ist endgültig, wenn das Angebot in deinem Konto erscheint.' },
        { n: '05', title: 'Praktikum antreten', desc: 'Sessionen beginnen im Oktober bzw. März. Wenn du ein Angebot ablehnst, erhältst du keine weiteren.' },
      ],
    },

    'robert-schuman-praktiken': {
      formats: [
        { icon: '🏢', title: 'Praktikum beim Sekretariat', duration: '5 Monate (Okt–Feb oder März–Jul)', description: 'Praktikum in EU-Politik, Finanzen, Recht, Mehrsprachigkeit, Kommunikation oder IT. Bewerbung im Mai (für Oktober) oder Oktober (für März).', bullets: ['~1.948 €/Monat in Deutschland, 1.889 €/Monat in Belgien', '300 € Reisepauschale', 'Hochschulabschluss (EQF 6) erforderlich', 'Max. 2 Monate frühere EU-Erfahrung'] },
        { icon: '🧑‍⚖️', title: 'MdEP-Praktikum', duration: '6 Wochen – 5 Monate', description: 'Direkt mit einem Abgeordneten des Europäischen Parlaments arbeiten. Direkt bei den Abgeordneten beantragen, nicht über das Portal.', bullets: ['1.133–1.856 €/Monat (Vollzeit)', 'Abitur ausreichend', 'Kann zu jeder Jahreszeit beginnen', 'Der Abgeordnete definiert die Aufgaben'] },
      ],
      covered: [
        { icon: '💶', title: 'Monatliche Vergütung', desc: 'Variiert je nach Land. Deutschland: ~1.948 €/Monat. Grundbetrag: 1.889 €/Monat.' },
        { icon: '✈️', title: 'Reisepauschale', desc: '300 € Pauschale pro Praktikantin/Praktikant.' },
        { icon: '♿', title: 'Behinderungszuschlag', desc: 'Bis zu 50 % zusätzlich zur Monatsvergütung bei dauerhafter Behinderung von 20 % oder mehr.' },
      ],
      steps: [
        { n: '01', title: 'Praktikumsart wählen', desc: 'Sekretariatspraktikum oder MdEP-Praktikum — getrennte Programme mit unterschiedlichen Regeln und Bewerbungsverfahren.' },
        { n: '02', title: 'Berechtigung prüfen', desc: 'Mindestens 18 Jahre, Hochschulabschluss (EQF 6), EU-Staatsbürgerschaft oder Kandidatenland, max. 2 Monate frühere EU-Erfahrung, einwandfreies Führungszeugnis.' },
        { n: '03', title: 'Auf bis zu 3 Stellen bewerben', desc: 'Bewerbungen werden über das Bewerbungsportal des Europäischen Parlaments eingereicht. Max. 3 Stellen pro Bewerbung. Keine Initiativbewerbungen.' },
        { n: '04', title: 'Vorauswahlverfahren', desc: 'Deine Bewerbung wird anhand von akademischem Profil, Sprachkenntnissen und Kompetenzen bewertet. Nationale Quoten werden angewandt.' },
        { n: '05', title: 'Praktikum antreten', desc: 'Du erhältst ein offizielles Zulassungsschreiben per E-Mail. Praktikumszeiträume beginnen am 1. Oktober oder 1. März.' },
      ],
    },

    'eures': {
      formats: [
        { icon: '🔍', title: 'EURES-Portal', duration: 'Immer verfügbar', description: 'Online-Plattform mit 3 Millionen Stellenangeboten und 1 Million Lebensläufen. Abgleich von Stellen und Kandidaten.', bullets: ['Jobs in 31 Ländern suchen', 'Deinen Lebenslauf hochladen', 'Nach Land, Branche und Bildungsstand filtern', 'Kostenlos für alle'] },
        { icon: '👤', title: 'EURES-Berater', duration: 'Termin buchen', description: 'Persönliche Beratung von über 850 Fachberatern in 270 EURES-Organisationen.', bullets: ['Lebenslauf-Prüfung und -Verbesserung', 'Rechtsberatung zur sozialen Sicherheit', 'Informationen zu Lebens- und Arbeitsbedingungen', 'Kontakt über Portal, Telefon oder Chat'] },
      ],
      covered: [
        { icon: '🔍', title: 'Stellendatenbank', desc: '3 Millionen Stellenangebote und 1 Million Lebensläufe im EURES-Portal.' },
        { icon: '📄', title: 'Lebenslauf-Unterstützung', desc: 'Prüfung, Verbesserung und Anpassung deines Lebenslaufs für europäische Arbeitgeber.' },
        { icon: '⚖️', title: 'Rechtsberatung', desc: 'Informationen zu sozialer Sicherheit, Steuern, Rente und Krankenversicherung im Zielland.' },
        { icon: '🎪', title: 'Jobmessen', desc: 'Zugang zu European Job Days — digitale und Präsenz-Jobmessen.' },
        { icon: '🌍', title: 'Länderspezifische Informationen', desc: 'Länderführer zum Leben und Arbeiten in allen 31 EURES-Ländern.' },
        { icon: '🚦', title: 'Grenzpendler', desc: 'Spezialisierte Unterstützung für die fast 2 Millionen EU-Bürger, die täglich Grenzen überqueren.' },
      ],
      steps: [
        { n: '01', title: 'Profil erstellen', desc: 'Gehe auf eures.europa.eu und lade deinen Lebenslauf hoch. Wähle das Land und die Branche, die dich interessieren.' },
        { n: '02', title: 'Jobs suchen', desc: 'Durchsuche 3 Millionen Stellenangebote. Filtere nach Ort, Art und Bildungsanforderungen.' },
        { n: '03', title: 'EURES-Berater kontaktieren', desc: 'Für persönliche Beratung wende dich an einen lokalen Berater über das Portal, Telefon oder Chat. Kostenlos.' },
        { n: '04', title: 'Bewerben und Umzug vorbereiten', desc: 'Bewirb dich direkt bei Arbeitgebern über das Portal. Berater helfen bei Visum, Qualifikationsanerkennung und praktischen Informationen.' },
      ],
    },

    'eures-targeted-mobility': {
      formats: [
        { icon: '🧑', title: 'Unterstützung für Arbeitssuchende', duration: 'Variiert je Projekt', description: 'Dedizierte Unterstützung der nationalen Arbeitsvermittlungen, um finanzielle Mobilitätshindernisse zu beseitigen.', bullets: ['Förderung von Sprachkursen', 'Unterstützung bei der Anerkennung von Qualifikationen', 'Reise- und Aufenthaltsbeihilfen', 'Vermittlung mit Arbeitgebern in anderen EU-Ländern'] },
        { icon: '🏢', title: 'Unterstützung für Unternehmen', duration: 'Variiert', description: 'Hilfe bei der Rekrutierung motivierter europäischer Arbeitnehmer. Finanzielle Unterstützung für Ausbildungs- und Integrationskosten für KMU.', bullets: ['Rekrutierungsassistenz durch nationale Arbeitsvermittlungen', 'Finanzielle Unterstützung für KMU', 'Schriftlicher Vertrag erforderlich: 6 Monate (Jobs) oder 3 Monate (Praktika)', 'Offen für alle Branchen und Unternehmensgrößen'] },
      ],
      covered: [
        { icon: '🌐', title: 'Sprachkurse', desc: 'Förderung von Kursen in der Sprache des Ziellandes.' },
        { icon: '📜', title: 'Qualifikationsanerkennung', desc: 'Unterstützung beim Anerkennungsverfahren deiner Qualifikationen im neuen Land.' },
        { icon: '✈️', title: 'Reise und Aufenthalt', desc: 'Beihilfen für Reise und erste Lebenshaltungskosten im Zielland.' },
      ],
      steps: [
        { n: '01', title: 'Aktuelles Projekt finden', desc: 'Die drei aktiven Leitprojekte werden von Arbetsförmedlingen (SE), Bundesagentur für Arbeit (DE) und Ministero del Lavoro (IT) durchgeführt.' },
        { n: '02', title: 'Kontakt aufnehmen', desc: 'Wende dich direkt an die Leitorganisation oder ihre Partner über das EURES-Portal und bitte um Informationen zum Bewerbungsverfahren.' },
        { n: '03', title: 'Vermittlung und Jobsuche', desc: 'Die Berater der Leitorganisationen helfen dir bei Vermittlung, Jobsuche und Rekrutierungsassistenz.' },
        { n: '04', title: 'Unterstützung erhalten und umziehen', desc: 'Sobald du einen Job hast, wird die Unterstützung für Sprachkurse, Qualifikationsanerkennung und Reisekosten gemäß den Projektbedingungen ausgezahlt.' },
      ],
    },

    'eurodesk': {
      formats: [
        { icon: '🌐', title: 'Opportunity Finder', duration: 'Immer verfügbar', description: 'Datenbank mit 200+ EU-geförderten Programmen: Freiwilligendienst, Lernen, Arbeit, Gesellschaftsveränderung und Wettbewerbe.', bullets: ['Von Eurodesk kuratiert', 'Alle offen für junge Menschen in Europa', 'Nach Typ und Land filtern', 'Kostenlos und direkt'] },
        { icon: '📚', title: 'Euroclasses', duration: 'In Schulen und Jugendeinrichtungen', description: 'Kostenlose non-formale Bildungsworkshops, die von Eurodesk-Multiplikatoren durchgeführt werden.', bullets: ['Arbeiten im Ausland', 'Internationaler Freiwilligendienst', 'Jugendbeteiligung', 'Aktivismus in Europa'] },
      ],
      covered: [
        { icon: '🌐', title: 'Opportunity Finder', desc: 'Datenbank mit 200+ Programmen, kuratiert für junge Menschen in Europa.' },
        { icon: '❓', title: 'Helpdesk', desc: 'Antworten auf deine Fragen zu Erasmus+, ESK, Freiwilligendienst und Praktika.' },
        { icon: '📰', title: 'Europäisches Jugendportal', desc: 'Eurodesk erstellt und pflegt die Inhalte auf dem Europäischen Jugendportal.' },
        { icon: '📣', title: 'Time to Move-Kampagne', desc: 'Europaweite Informationskampagne jeden Oktober über Möglichkeiten, ins Ausland zu gehen.' },
        { icon: '✍️', title: 'Junge Journalisten', desc: 'Pool of Young Journalists in Europe — 16 junge Menschen aus ganz Europa erstellen Inhalte auf dem Europäischen Jugendportal.' },
      ],
      steps: [
        { n: '01', title: 'eurodesk.eu besuchen', desc: 'Gehe zum Opportunity Finder und stöbere in 200+ Programmen für junge Menschen in Europa.' },
        { n: '02', title: 'Dein nationales Eurodesk finden', desc: 'Jedes Land hat sein eigenes Eurodesk. Sie können dir persönliche Beratung über Möglichkeiten in deiner Sprache geben.' },
        { n: '03', title: 'Eine Frage stellen', desc: 'Über das Europäische Jugendportal kannst du Fragen direkt an das Eurodesk-Netzwerk in deiner EU-Sprache schicken.' },
      ],
    },

    'europa-direkt': {
      formats: [
        { icon: '📞', title: 'Telefon und Chat', duration: 'Mo–Fr 9:00–18:00 MEZ', description: 'Kostenlos aus jedem EU-Land anrufen. Antworten auf alle EU-Fragen in jeder offiziellen EU-Sprache.', bullets: ['+800 6 7 8 9 10 11 (kostenlos in der EU)', '+32 22 99 96 96 (aus außerhalb der EU)', 'Ukrainisch und Russisch ebenfalls akzeptiert', 'SMS "call me" für Rückruf'] },
        { icon: '📍', title: 'Lokale Informationszentren', duration: 'Öffnungszeiten des jeweiligen Zentrums', description: 'Rund 400 Zentren in allen 27 EU-Mitgliedstaaten. Organisieren Veranstaltungen, Debatten und sind eine lokale Brücke zur EU.', bullets: ['Nächstes Zentrum auf european-union.europa.eu finden', 'Antworten auf Fragen zu EU-Programmen', 'Arbeiten mit Schulen und lokalen Partnern', 'Hören zu und geben deine Stimme weiter'] },
      ],
      covered: [
        { icon: '☎️', title: 'Kostenloser Anruf', desc: '+800 6 7 8 9 10 11. Kostenlos aus allen EU-Ländern, Mo–Fr 9:00–18:00 MEZ.' },
        { icon: '✉️', title: 'Schriftliche Anfrage', desc: 'Über Kontaktformular in jeder EU-Sprache. Antwort innerhalb von 3 Werktagen.' },
        { icon: '🗺️', title: 'Lokales Zentrum', desc: '~400 Zentren in der gesamten EU. Dein nächstes auf european-union.europa.eu finden.' },
      ],
      steps: [
        { n: '01', title: 'Kontaktweg wählen', desc: 'Ruf +800 6 7 8 9 10 11 an, chatte auf der Website, fülle das Kontaktformular aus oder besuche ein lokales Zentrum.' },
        { n: '02', title: 'Frage stellen', desc: 'Du kannst alles rund um die EU fragen — Programme, Rechte, Gesetzgebung oder lokale Förderung.' },
        { n: '03', title: 'Antwort erhalten', desc: 'Telefon: sofortige Antwort in deiner EU-Sprache. Schriftliche Anfrage: Antwort innerhalb von 3 Werktagen.' },
      ],
    },

    'eu-youth-portal': {
      formats: [
        { icon: '✋', title: 'Mitmachen', duration: 'Immer verfügbar', description: 'Aktive Bürgerschaft, EU-Jugenddialog, demokratische Teilhabe, deine Rechte und Inklusion.', bullets: ['EU-Jugenddialog', 'Demokratische Teilhabe', 'Bürgerrechte', 'Inklusion und Nachhaltigkeit'] },
        { icon: '✈️', title: 'Ins Ausland gehen', duration: 'Immer verfügbar', description: 'Möglichkeiten für Studium, Freiwilligendienst, Praktika, Arbeit, Austausch und Reisen.', bullets: ['Alle ESK-Möglichkeiten', 'DiscoverEU-Bewerbung', 'Erasmus+-Informationen', 'Internationale Praktika'] },
      ],
      covered: [
        { icon: '🌐', title: 'Alle offiziellen EU-Programme', desc: 'Umfassende Informationen zu ESK, Erasmus+, DiscoverEU und mehr.' },
        { icon: '❓', title: 'Helpdesk', desc: 'Fragen über das Portal einreichen — beantwortet vom Eurodesk-Netzwerk.' },
        { icon: '🗳️', title: 'EU-Jugenddialog', desc: 'Deine Stimme an EU-Entscheidungsträger über den strukturierten Jugenddialog.' },
        { icon: '📖', title: 'Geschichten junger Menschen', desc: 'Artikel, Neuigkeiten und Erfahrungen von jungen Menschen aus ganz Europa.' },
      ],
      steps: [
        { n: '01', title: 'youth.europa.eu besuchen', desc: 'Das Portal ist für alle ohne Anmeldung zugänglich. In deiner EU-Sprache navigieren.' },
        { n: '02', title: 'Deine Möglichkeiten erkunden', desc: 'Navigiere über "Ins Ausland gehen" für Auslandsaktivitäten oder "Mitmachen" für aktive Bürgerschaft.' },
        { n: '03', title: 'Bewerben oder eine Frage stellen', desc: 'Direkt für DiscoverEU bewerben, oder eine Frage über die Schaltfläche "Fragen" stellen — beantwortet von Eurodesk.' },
      ],
    },
  },
}

export default sections
