// Short metadata translations: ageRange, duration, funding, stats, source
// Keyed by locale → slug → fields
// sv baseline lives in programs.js — only non-sv needed here

const meta = {
  en: {
    'europeiska-solidaritetskaren': {
      ageRange: '18–30 years', duration: '2 weeks – 12 months', funding: 'Fully funded by the EU',
      stats: [{ value: '€1.01bn', label: 'Budget 2021–2027' }, { value: '18–30', label: 'Age requirement' }, { value: '€0', label: 'Cost to you' }],
      source: 'Source: youth.europa.eu, commission.europa.eu and eacea.ec.europa.eu',
    },
    'humanitart-volontararbete': {
      ageRange: '18–35 years', duration: '2 weeks – 12 months', funding: 'Fully funded by the EU',
      stats: [{ value: '18–35', label: 'Age requirement' }, { value: '5 days', label: 'Mandatory in-person training' }, { value: '3', label: 'Organisations required' }],
      source: 'Source: youth.europa.eu, commission.europa.eu and eacea.ec.europa.eu',
    },
    'erasmus-plus': {
      ageRange: '13–30 years (youth) and older (education)', duration: 'Varies by activity', funding: 'Funded via organisation or institution',
      stats: [{ value: '€26.2bn', label: 'Budget 2021–2027' }, { value: '16m+', label: 'Participants since 1987' }, { value: '3', label: 'Key Actions' }],
      source: 'Source: erasmus-plus.ec.europa.eu',
    },
    'discovereu': {
      ageRange: 'Exactly 18 years old', duration: '7 travel days within 1 month', funding: 'EU rail pass + discount card',
      stats: [{ value: '40,000', label: 'Rail passes per round (Spring 2026)' }, { value: '7', label: 'Travel days included' }, { value: '€0', label: 'Cost of the pass' }],
      source: 'Source: youth.europa.eu and erasmus-plus.ec.europa.eu',
    },
    'blue-book-traineeship': {
      ageRange: 'Graduates (EQF 6+)', duration: '5 months', funding: '€1,538/month',
      stats: [{ value: '€1,538', label: 'Per month' }, { value: '~1,000', label: 'Places per session' }, { value: '2×', label: 'Sessions per year' }],
      source: 'Source: traineeships.ec.europa.eu (official Blue Book portal)',
    },
    'robert-schuman-praktiken': {
      ageRange: '18+ years (with university degree)', duration: '5 months', funding: '€1,889/month (BE/LU base)',
      stats: [{ value: '€1,889', label: 'Per month (Belgium/Luxembourg)' }, { value: '€1,948', label: 'Per month (Germany, approx.)' }, { value: '€300', label: 'Travel allowance' }],
      source: 'Source: europarl.europa.eu (official Schuman portal)',
    },
    'eures': {
      ageRange: '18+ years', duration: 'Ongoing', funding: 'Free services',
      stats: [{ value: '3m', label: 'Job vacancies in database' }, { value: '850+', label: 'EURES advisers' }, { value: '31', label: 'Countries covered' }],
      source: 'Source: eures.europa.eu (official EURES portal)',
    },
    'eures-targeted-mobility': {
      ageRange: '18+ (no other requirements)', duration: 'Varies by project', funding: 'Financial support available',
      stats: [{ value: '18+', label: 'Age — no other requirements' }, { value: '3', label: 'Active lead projects' }, { value: 'ESF+', label: 'EU funding' }],
      source: 'Source: eures.europa.eu (official EURES portal)',
    },
    'eurodesk': {
      ageRange: '13–30 years', duration: 'Ongoing service', funding: 'Free',
      stats: [{ value: '38', label: 'Eurodesk centres in Europe' }, { value: '4,000+', label: 'Local multipliers' }, { value: '200+', label: 'Programmes in Opportunity Finder' }],
      source: 'Source: eurodesk.eu and youth.europa.eu',
    },
    'europa-direkt': {
      ageRange: 'All ages', duration: 'Ongoing service', funding: 'Free for all EU citizens',
      stats: [{ value: '400', label: 'Local centres in EU' }, { value: '27', label: 'EU countries covered' }, { value: 'Free', label: 'Calls within EU' }],
      source: 'Source: european-union.europa.eu (last updated March 2026)',
    },
    'eu-youth-portal': {
      ageRange: '13–30 years', duration: 'Always available', funding: 'Free',
      stats: [{ value: '23', label: 'Official EU languages' }, { value: '4', label: 'Main sections' }, { value: 'Free', label: 'Always available' }],
      source: 'Source: youth.europa.eu',
    },
  },

  es: {
    'europeiska-solidaritetskaren': {
      ageRange: '18–30 años', duration: '2 semanas – 12 meses', funding: 'Completamente financiado por la UE',
      stats: [{ value: '1.010 M€', label: 'Presupuesto 2021–2027' }, { value: '18–30', label: 'Requisito de edad' }, { value: '0 €', label: 'Coste para ti' }],
      source: 'Fuente: youth.europa.eu, commission.europa.eu y eacea.ec.europa.eu',
    },
    'humanitart-volontararbete': {
      ageRange: '18–35 años', duration: '2 semanas – 12 meses', funding: 'Completamente financiado por la UE',
      stats: [{ value: '18–35', label: 'Requisito de edad' }, { value: '5 días', label: 'Formación presencial obligatoria' }, { value: '3', label: 'Organizaciones requeridas' }],
      source: 'Fuente: youth.europa.eu, commission.europa.eu y eacea.ec.europa.eu',
    },
    'erasmus-plus': {
      ageRange: '13–30 años (jóvenes) y mayores (educación)', duration: 'Varía según la actividad', funding: 'Financiado a través de organización o institución',
      stats: [{ value: '26.200 M€', label: 'Presupuesto 2021–2027' }, { value: '16 mill.+', label: 'Participantes desde 1987' }, { value: '3', label: 'Acciones Clave' }],
      source: 'Fuente: erasmus-plus.ec.europa.eu',
    },
    'discovereu': {
      ageRange: 'Exactamente 18 años', duration: '7 días de viaje en 1 mes', funding: 'Bono de tren UE + tarjeta de descuentos',
      stats: [{ value: '40.000', label: 'Bonos por convocatoria (primavera 2026)' }, { value: '7', label: 'Días de viaje incluidos' }, { value: '0 €', label: 'Coste del bono' }],
      source: 'Fuente: youth.europa.eu y erasmus-plus.ec.europa.eu',
    },
    'blue-book-traineeship': {
      ageRange: 'Titulados (EQF 6+)', duration: '5 meses', funding: '1.538 €/mes',
      stats: [{ value: '1.538 €', label: 'Al mes' }, { value: '~1.000', label: 'Plazas por sesión' }, { value: '2×', label: 'Sesiones al año' }],
      source: 'Fuente: traineeships.ec.europa.eu (portal oficial Blue Book)',
    },
    'robert-schuman-praktiken': {
      ageRange: '18+ años (con título universitario)', duration: '5 meses', funding: '~1.719 €/mes (España, aprox.)',
      stats: [{ value: '~1.719 €', label: 'Al mes (España, aprox.)' }, { value: '1.889 €', label: 'Al mes (base, Bélgica)' }, { value: '300 €', label: 'Compensación de viaje' }],
      source: 'Fuente: europarl.europa.eu (portal oficial Schuman)',
    },
    'eures': {
      ageRange: '18+ años', duration: 'Continuo', funding: 'Servicios gratuitos',
      stats: [{ value: '3 mill.', label: 'Ofertas en la base de datos' }, { value: '850+', label: 'Asesores EURES' }, { value: '31', label: 'Países cubiertos' }],
      source: 'Fuente: eures.europa.eu (portal oficial de EURES)',
    },
    'eures-targeted-mobility': {
      ageRange: '18+ (sin otros requisitos)', duration: 'Varía según el proyecto', funding: 'Apoyo financiero disponible',
      stats: [{ value: '18+', label: 'Edad — sin otros requisitos' }, { value: '3', label: 'Proyectos líderes activos' }, { value: 'ESF+', label: 'Financiación de la UE' }],
      source: 'Fuente: eures.europa.eu (portal oficial de EURES)',
    },
    'eurodesk': {
      ageRange: '13–30 años', duration: 'Servicio continuo', funding: 'Gratuito',
      stats: [{ value: '38', label: 'Centros Eurodesk en Europa' }, { value: '4.000+', label: 'Multiplicadores locales' }, { value: '200+', label: 'Programas en Opportunity Finder' }],
      source: 'Fuente: eurodesk.eu y youth.europa.eu',
    },
    'europa-direkt': {
      ageRange: 'Todas las edades', duration: 'Servicio continuo', funding: 'Gratuito para ciudadanos de la UE',
      stats: [{ value: '400', label: 'Centros locales en la UE' }, { value: '27', label: 'Países de la UE cubiertos' }, { value: 'Gratis', label: 'Llamadas dentro de la UE' }],
      source: 'Fuente: european-union.europa.eu (última actualización marzo 2026)',
    },
    'eu-youth-portal': {
      ageRange: '13–30 años', duration: 'Siempre disponible', funding: 'Gratuito',
      stats: [{ value: '23', label: 'Idiomas oficiales de la UE' }, { value: '4', label: 'Secciones principales' }, { value: 'Gratis', label: 'Siempre disponible' }],
      source: 'Fuente: youth.europa.eu',
    },
  },

  it: {
    'europeiska-solidaritetskaren': {
      ageRange: '18–30 anni', duration: '2 settimane – 12 mesi', funding: "Completamente finanziato dall'UE",
      stats: [{ value: '1,01 mrd €', label: 'Budget 2021–2027' }, { value: '18–30', label: 'Requisito di età' }, { value: '0 €', label: 'Costo per te' }],
      source: "Fonte: youth.europa.eu, commission.europa.eu ed eacea.ec.europa.eu",
    },
    'humanitart-volontararbete': {
      ageRange: '18–35 anni', duration: '2 settimane – 12 mesi', funding: "Completamente finanziato dall'UE",
      stats: [{ value: '18–35', label: 'Requisito di età' }, { value: '5 giorni', label: 'Formazione in presenza obbligatoria' }, { value: '3', label: 'Organizzazioni richieste' }],
      source: "Fonte: youth.europa.eu, commission.europa.eu ed eacea.ec.europa.eu",
    },
    'erasmus-plus': {
      ageRange: '13–30 anni (giovani) e oltre (istruzione)', duration: 'Varia per attività', funding: "Finanziato tramite organizzazione o istituzione",
      stats: [{ value: '26,2 mrd €', label: 'Budget 2021–2027' }, { value: '16 mln+', label: 'Partecipanti dal 1987' }, { value: '3', label: 'Azioni Chiave' }],
      source: 'Fonte: erasmus-plus.ec.europa.eu',
    },
    'discovereu': {
      ageRange: 'Esattamente 18 anni', duration: '7 giorni di viaggio in 1 mese', funding: 'Pass ferroviario UE + carta sconto',
      stats: [{ value: '40.000', label: 'Pass per ciclo (primavera 2026)' }, { value: '7', label: 'Giorni di viaggio inclusi' }, { value: '0 €', label: 'Costo del pass' }],
      source: 'Fonte: youth.europa.eu e erasmus-plus.ec.europa.eu',
    },
    'blue-book-traineeship': {
      ageRange: 'Laureati (EQF 6+)', duration: '5 mesi', funding: '1.538 €/mese',
      stats: [{ value: '1.538 €', label: 'Al mese' }, { value: '~1.000', label: 'Posti per sessione' }, { value: '2×', label: "Sessioni all'anno" }],
      source: 'Fonte: traineeships.ec.europa.eu (portale ufficiale Blue Book)',
    },
    'robert-schuman-praktiken': {
      ageRange: '18+ anni (con laurea)', duration: '5 mesi', funding: '~1.899 €/mese (Italia, ca.)',
      stats: [{ value: '~1.899 €', label: 'Al mese (Italia, ca.)' }, { value: '1.889 €', label: 'Al mese (base, Belgio)' }, { value: '300 €', label: 'Indennità di viaggio' }],
      source: 'Fonte: europarl.europa.eu (portale ufficiale Schuman)',
    },
    'eures': {
      ageRange: '18+ anni', duration: 'Continuo', funding: 'Servizi gratuiti',
      stats: [{ value: '3 mln', label: 'Offerte nel database' }, { value: '850+', label: 'Consulenti EURES' }, { value: '31', label: 'Paesi coperti' }],
      source: 'Fonte: eures.europa.eu (portale ufficiale EURES)',
    },
    'eures-targeted-mobility': {
      ageRange: '18+ (nessun altro requisito)', duration: 'Varia per progetto', funding: 'Sostegno finanziario disponibile',
      stats: [{ value: '18+', label: 'Età — nessun altro requisito' }, { value: '3', label: 'Progetti guida attivi' }, { value: 'ESF+', label: 'Finanziamento UE' }],
      source: 'Fonte: eures.europa.eu (portale ufficiale EURES)',
    },
    'eurodesk': {
      ageRange: '13–30 anni', duration: 'Servizio continuo', funding: 'Gratuito',
      stats: [{ value: '38', label: 'Centri Eurodesk in Europa' }, { value: '4.000+', label: 'Moltiplicatori locali' }, { value: '200+', label: 'Programmi in Opportunity Finder' }],
      source: 'Fonte: eurodesk.eu e youth.europa.eu',
    },
    'europa-direkt': {
      ageRange: 'Tutte le età', duration: 'Servizio continuo', funding: "Gratuito per i cittadini dell'UE",
      stats: [{ value: '400', label: "Centri locali nell'UE" }, { value: '27', label: 'Paesi UE coperti' }, { value: 'Gratuito', label: "Chiamate all'interno dell'UE" }],
      source: "Fonte: european-union.europa.eu (ultimo aggiornamento marzo 2026)",
    },
    'eu-youth-portal': {
      ageRange: '13–30 anni', duration: 'Sempre disponibile', funding: 'Gratuito',
      stats: [{ value: '23', label: "Lingue ufficiali dell'UE" }, { value: '4', label: 'Sezioni principali' }, { value: 'Gratuito', label: 'Sempre disponibile' }],
      source: 'Fonte: youth.europa.eu',
    },
  },

  de: {
    'europeiska-solidaritetskaren': {
      ageRange: '18–30 Jahre', duration: '2 Wochen – 12 Monate', funding: 'Vollständig von der EU finanziert',
      stats: [{ value: '1,01 Mrd. €', label: 'Budget 2021–2027' }, { value: '18–30', label: 'Altersanforderung' }, { value: '0 €', label: 'Kosten für dich' }],
      source: 'Quelle: youth.europa.eu, commission.europa.eu und eacea.ec.europa.eu',
    },
    'humanitart-volontararbete': {
      ageRange: '18–35 Jahre', duration: '2 Wochen – 12 Monate', funding: 'Vollständig von der EU finanziert',
      stats: [{ value: '18–35', label: 'Altersanforderung' }, { value: '5 Tage', label: 'Obligatorische Präsenzausbildung' }, { value: '3', label: 'Erforderliche Organisationen' }],
      source: 'Quelle: youth.europa.eu, commission.europa.eu und eacea.ec.europa.eu',
    },
    'erasmus-plus': {
      ageRange: '13–30 Jahre (Jugend) und älter (Bildung)', duration: 'Variiert je Aktivität', funding: 'Finanziert über Organisation oder Institution',
      stats: [{ value: '26,2 Mrd. €', label: 'Budget 2021–2027' }, { value: '16 Mio.+', label: 'Teilnehmer seit 1987' }, { value: '3', label: 'Schlüsselaktionen' }],
      source: 'Quelle: erasmus-plus.ec.europa.eu',
    },
    'discovereu': {
      ageRange: 'Genau 18 Jahre alt', duration: '7 Reisetage innerhalb 1 Monat', funding: 'EU-Zugpass + Rabattkarte',
      stats: [{ value: '40.000', label: 'Pässe pro Runde (Frühjahr 2026)' }, { value: '7', label: 'Enthaltene Reisetage' }, { value: '0 €', label: 'Kosten des Passes' }],
      source: 'Quelle: youth.europa.eu und erasmus-plus.ec.europa.eu',
    },
    'blue-book-traineeship': {
      ageRange: 'Absolventen (EQF 6+)', duration: '5 Monate', funding: '1.538 €/Monat',
      stats: [{ value: '1.538 €', label: 'Pro Monat' }, { value: '~1.000', label: 'Plätze pro Session' }, { value: '2×', label: 'Sessions pro Jahr' }],
      source: 'Quelle: traineeships.ec.europa.eu (offizielles Blue Book-Portal)',
    },
    'robert-schuman-praktiken': {
      ageRange: '18+ Jahre (mit Hochschulabschluss)', duration: '5 Monate', funding: '~1.948 €/Monat (Deutschland, ca.)',
      stats: [{ value: '~1.948 €', label: 'Pro Monat (Deutschland, ca.)' }, { value: '1.889 €', label: 'Pro Monat (Basis, Belgien)' }, { value: '300 €', label: 'Reisepauschale' }],
      source: 'Quelle: europarl.europa.eu (offizielles Schuman-Portal)',
    },
    'eures': {
      ageRange: '18+ Jahre', duration: 'Laufend', funding: 'Kostenlose Dienste',
      stats: [{ value: '3 Mio.', label: 'Stellen in der Datenbank' }, { value: '850+', label: 'EURES-Berater' }, { value: '31', label: 'Länder abgedeckt' }],
      source: 'Quelle: eures.europa.eu (offizielles EURES-Portal)',
    },
    'eures-targeted-mobility': {
      ageRange: '18+ (keine weiteren Anforderungen)', duration: 'Variiert je Projekt', funding: 'Finanzielle Unterstützung verfügbar',
      stats: [{ value: '18+', label: 'Alter — keine weiteren Anforderungen' }, { value: '3', label: 'Aktive Leitprojekte' }, { value: 'ESF+', label: 'EU-Finanzierung' }],
      source: 'Quelle: eures.europa.eu (offizielles EURES-Portal)',
    },
    'eurodesk': {
      ageRange: '13–30 Jahre', duration: 'Laufender Dienst', funding: 'Kostenlos',
      stats: [{ value: '38', label: 'Eurodesk-Zentren in Europa' }, { value: '4.000+', label: 'Lokale Multiplikatoren' }, { value: '200+', label: 'Programme im Opportunity Finder' }],
      source: 'Quelle: eurodesk.eu und youth.europa.eu',
    },
    'europa-direkt': {
      ageRange: 'Alle Altersgruppen', duration: 'Laufender Dienst', funding: 'Kostenlos für alle EU-Bürger',
      stats: [{ value: '400', label: 'Lokale Zentren in der EU' }, { value: '27', label: 'Abgedeckte EU-Länder' }, { value: 'Kostenlos', label: 'Anrufe innerhalb der EU' }],
      source: 'Quelle: european-union.europa.eu (zuletzt aktualisiert März 2026)',
    },
    'eu-youth-portal': {
      ageRange: '13–30 Jahre', duration: 'Immer verfügbar', funding: 'Kostenlos',
      stats: [{ value: '23', label: 'Offizielle EU-Sprachen' }, { value: '4', label: 'Hauptabschnitte' }, { value: 'Kostenlos', label: 'Immer verfügbar' }],
      source: 'Quelle: youth.europa.eu',
    },
  },
}

export default meta
