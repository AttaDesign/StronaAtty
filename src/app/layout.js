
import './globals.scss'
import { Source_Sans_3, Orbitron } from 'next/font/google'
import GoogleAnalytics from '@/components/GoogleAnalitics';
import CookieBanner from '@/components/CookieBanner';
import { SpeedInsights } from "@vercel/speed-insights/next";
import Head from 'next/head';

const source = Source_Sans_3({
  subsets: ['latin'],
  variable: '--source',
  weight: ['400', '300', '200', '600'],
})

const orbi = Orbitron({
  subsets: ['latin'],
  variable: '--orbi',
  weight: ['600', '400', '500', '700'],
})

// src/app/layout.js

// src/app/layout.js

export const metadata = {
  // Odpowiednik: <title>{metadata.title}</title>
  title: 'ATTA Web Agency - strony na zamówienie',
  
  // Odpowiednik: <meta name="description" content={metadata.description} />
  description: 'Tworzymy z precyzją eleganckie strony internetowe, które opowiedzą historię twojej frimy.',
  
  metadataBase: new URL("https://attadesign.pl/"),

  // 
  //  TUTAJ JEST KLUCZOWA POPRAWKA KANONICZNA
  // 
  alternates: {
    canonical: '/', // Strona polska (/) wskazuje na samą siebie
    languages: {
      'pl-PL': '/',
      'en': '/eng', // Wskazuje na poprawny odpowiednik angielski /eng
    },
  },
  
  // TUTAJ JEST TWOJA POPRAWKA NOINDEX (jest poprawna)
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }) {
  return (
    <>
    <html lang="pl">
      <GoogleAnalytics GA_MEASUREMENT_ID='G-QZB3N6PC6X' />
      <body className={`${source.variable} ${orbi.variable}`}>{children}
        <CookieBanner />
      </body>
    </html>
  </>
  )
}
