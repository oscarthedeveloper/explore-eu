import './globals.css'
import { Analytics } from '@vercel/analytics/next'

export const metadata = {
  title: 'EU Opportunities',
  description: 'Guide to EU-funded opportunities for young people.',
}

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning>
      <body suppressHydrationWarning>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
