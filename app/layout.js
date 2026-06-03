import './globals.css'

export const metadata = {
  title: 'Explore EU',
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
