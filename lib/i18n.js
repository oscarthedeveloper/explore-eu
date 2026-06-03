export const locales = ['sv', 'en', 'es', 'it', 'de']
export const defaultLocale = 'sv'

export const localeNames = {
  sv: { label: 'SV', full: 'Svenska',  flag: '🇸🇪' },
  en: { label: 'EN', full: 'English',  flag: '🇬🇧' },
  es: { label: 'ES', full: 'Español',  flag: '🇪🇸' },
  it: { label: 'IT', full: 'Italiano', flag: '🇮🇹' },
  de: { label: 'DE', full: 'Deutsch',  flag: '🇩🇪' },
}

const suffixMap = { sv: '_sv', en: '_en', es: '_es', it: '_it', de: '_de' }
const pathMap   = { sv: '',    en: '/en', es: '/es', it: '/it', de: '/de' }

export function localizeUrl(baseUrl, locale) {
  if (!baseUrl) return baseUrl
  if (baseUrl.includes('youth.europa.eu') || baseUrl.includes('european-union.europa.eu'))
    return baseUrl.replace(/_[a-z]{2}$/, suffixMap[locale] || '_en')
  if (baseUrl === 'https://erasmus-plus.ec.europa.eu' || baseUrl === 'https://eures.europa.eu') {
    const p = pathMap[locale]; return p ? `${baseUrl}${p}` : baseUrl
  }
  return baseUrl
}

export async function getT(locale) {
  const safe = locales.includes(locale) ? locale : defaultLocale
  const mod = await import(`./translations/${safe}.js`)
  return mod.default
}

/**
 * Merge priority per field:
 *  1. programTranslations[locale][slug]  — locale-specific overrides (name, tagline, hero, what, faq, areas + arrays if provided)
 *  2. programSections[locale][slug]      — locale-specific formats/covered/steps (dedicated file, full coverage)
 *  3. programTranslations.en[slug]       — EN fallback for any still-missing content
 *  4. programMeta[locale][slug]          — locale-specific short metadata (ageRange, duration, funding, stats, source)
 *  5. base program from programs.js      — Swedish baseline
 */
export async function getLocalizedProgram(program, locale) {
  if (locale === 'sv') return program

  const [{ default: pt }, { default: ps }, { default: pm }] = await Promise.all([
    import('./programTranslations.js'),
    import('./programSections.js'),
    import('./programMeta.js'),
  ])

  const locT  = pt?.[locale]?.[program.slug] || {}
  const locS  = ps?.[locale]?.[program.slug] || {}
  const enT   = pt?.en?.[program.slug]       || {}
  const meta  = pm?.[locale]?.[program.slug] || {}

  // Arrays: locale programTranslations → locale programSections → EN programTranslations → base
  const formats = locT.formats ?? locS.formats ?? enT.formats ?? program.formats
  const covered = locT.covered ?? locS.covered ?? enT.covered ?? program.covered
  const steps   = locT.steps   ?? locS.steps   ?? enT.steps   ?? program.steps
  const faq     = locT.faq     ?? enT.faq     ?? program.faq
  const areas   = locT.areas   ?? enT.areas   ?? program.areas

  return {
    ...program,
    // Short metadata
    ageRange:       meta.ageRange       ?? program.ageRange,
    duration:       meta.duration       ?? program.duration,
    funding:        meta.funding        ?? program.funding,
    stats:          meta.stats          ?? locT.stats ?? enT.stats ?? program.stats,
    source:         meta.source         ?? program.source,
    // Name / tagline / categoryLabel
    name:          locT.name          ?? enT.name          ?? program.name,
    tagline:       locT.tagline       ?? enT.tagline       ?? program.tagline,
    categoryLabel: locT.categoryLabel ?? enT.categoryLabel ?? program.categoryLabel,
    // Hero / what
    hero: { ...program.hero, ...(enT.hero || {}), ...(locT.hero || {}) },
    what: { ...program.what, ...(enT.what || {}), ...(locT.what || {}) },
    // Arrays
    formats,
    covered,
    steps,
    faq,
    areas,
  }
}

export async function getLocalizedPrograms(programs, locale) {
  if (locale === 'sv') return programs
  return Promise.all(programs.map((p) => getLocalizedProgram(p, locale)))
}

/**
 * Merge an area's Swedish baseline with locale-specific translations.
 * Fallback chain: locale → en → sv baseline (data/areas.js)
 */
export async function getLocalizedArea(area, locale) {
  if (locale === 'sv') return area

  const { default: at } = await import('./areaTranslations.js')
  const locA = at?.[locale]?.[area.slug] || {}
  const enA  = at?.en?.[area.slug]       || {}

  return {
    ...area,
    name:     locA.name     ?? enA.name     ?? area.name,
    tagline:  locA.tagline  ?? enA.tagline  ?? area.tagline,
    hero:     { ...area.hero, ...(enA.hero || {}), ...(locA.hero || {}) },
    stats:    locA.stats    ?? enA.stats    ?? area.stats,
    body:     locA.body     ?? enA.body     ?? area.body,
    examples: locA.examples ?? enA.examples ?? area.examples,
    skills:   locA.skills   ?? enA.skills   ?? area.skills,
    suitedFor:locA.suitedFor?? enA.suitedFor?? area.suitedFor,
    practical:{ ...area.practical, ...(enA.practical || {}), ...(locA.practical || {}) },
  }
}

export async function getLocalizedAreas(areas, locale) {
  if (locale === 'sv') return areas
  return Promise.all(areas.map((a) => getLocalizedArea(a, locale)))
}
