import './globals.css'
import { Analytics } from "@vercel/analytics/next"

export const metadata = {
  title: 'EU Opportunities',
  description: 'Guide to EU-funded opportunities for young people.',
}

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning>
      <head>
        {/* Pre-paint: enable reveal animations only when motion is allowed */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){try{if(!matchMedia('(prefers-reduced-motion: reduce)').matches){document.documentElement.classList.add('js-fx')}}catch(e){}})();",
          }}
        />
      </head>
      <body suppressHydrationWarning>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
