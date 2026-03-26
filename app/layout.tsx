import React from "react"
import type { Metadata } from 'next'
import { Orbitron } from 'next/font/google'
import { LocaleProvider } from '../components/locale-provider'
import './globals.css'

const _orbitron = Orbitron({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-orbitron'
});

export const metadata: Metadata = {
  title: 'NAJEM - Vitesse. Puissance. Passion.',
  description: 'Découvrez des véhicules d\'exception. Performance ultime, design audacieux, expérience unique. Achetez ou louez la voiture de vos rêves.',
  icons: {
    icon: [
      {
        url: '/logo.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/logo.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/logo.png',
        type: 'image/png',
      },
    ],
    apple: '/logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className="dark">
      <body className={`${_orbitron.variable} font-sans antialiased`}>
        <LocaleProvider>
          {children}
        </LocaleProvider>
      </body>
    </html>
  )
}
