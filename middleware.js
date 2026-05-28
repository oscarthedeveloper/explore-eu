import { NextResponse } from 'next/server'

const locales = ['sv', 'en', 'es', 'it', 'de']

export function middleware(request) {
  const { pathname } = request.nextUrl

  // Skip if already on a locale path or static file
  const hasLocale = locales.some((l) => pathname.startsWith(`/${l}/`) || pathname === `/${l}`)
  if (hasLocale || pathname.startsWith('/_next') || pathname.includes('.')) {
    return NextResponse.next()
  }

  // Redirect / → /sv
  const url = request.nextUrl.clone()
  url.pathname = '/sv' + (pathname === '/' ? '' : pathname)
  return NextResponse.redirect(url)
}

export const config = {
  matcher: ['/((?!_next|.*\\..*).*)'],
}
