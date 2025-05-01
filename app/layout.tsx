import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ascii-Social',
  description: 'Where Characters Create Culture',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
