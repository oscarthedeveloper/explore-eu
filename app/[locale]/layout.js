import { IBM_Plex_Sans, IBM_Plex_Serif, Syne } from 'next/font/google'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { locales, getT } from '@/lib/i18n'
import { notFound } from 'next/navigation'

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-ibm-plex-sans',
  display: 'swap',
})
const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-ibm-plex-serif',
  display: 'swap',
})
const syne = Syne({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-syne',
  display: 'swap',
})

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }) {
  const { locale } = await params
  const t = await getT(locale)
  return {
    title: 'Explore EU — ' + (t.hero?.line1 || 'Din guide till EU:s möjligheter'),
    description: t.hero?.sub || '',
  }
}

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params
  if (!locales.includes(locale)) notFound()

  const t = await getT(locale)
  const fontClasses = `${ibmPlexSans.variable} ${ibmPlexSerif.variable} ${syne.variable} font-sans bg-white text-gray-900 antialiased`

  return (
    <div lang={locale} className={fontClasses}>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=IBM+Plex+Sans:wght@300;400;500;600&display=swap"
        rel="stylesheet"
      />
      <Nav locale={locale} t={t} />
      <main>{children}</main>
      <Footer locale={locale} t={t} />
    </div>
  )
}
