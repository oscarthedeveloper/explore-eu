import './globals.css'

export const metadata = {
  title: 'EU Opportunities',
  description: 'Guide to EU-funded opportunities for young people.',
}

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
