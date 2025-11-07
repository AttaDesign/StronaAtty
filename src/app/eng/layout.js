// Importujesz te same czcionki, co w głównym pliku layout.js
import { Source_Sans_3, Orbitron } from 'next/font/google'
import { SpeedInsights } from "@vercel/speed-insights/next";
import GoogleAnalytics from '@/components2/GoogleAnalitics'; // Używamy komponentów z folderu /components2
import CookieBanner from '@/components2/CookieBanner'; // Używamy komponentów z folderu /components2


// Definiujesz czcionki
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

// NOWE Metadane dla strony angielskiej
export const metadata = {
  title: 'ATTA Web Agency - Custom Websites', // Tytuł po angielsku
  description: 'We precisely create elegant websites that will tell your company\'s story.', // Opis po angielsku
  
  metadataBase: new URL("https://attadesign.pl/"),

  alternates: {
    canonical: '/eng', // Strona angielska wskazuje na samą siebie
    languages: {
      'pl-PL': '/',
      'en': '/eng',
    },
  },
  
  robots: {
    index: true,
    follow: true,
  },
}

// Funkcja layoutu dla podstron w /eng
export default function RootLayout({ children }) {
  return (
    <>
    {/* Ważna zmiana: lang="en" */}
    <html lang="en"> 
      {/* Zakładam, że chcesz te same skrypty analityczne na wersji angielskiej.
        Jeśli nie, usuń poniższe dwie linie. 
      */}
      <GoogleAnalytics GA_MEASUREMENT_ID='G-QZB3N6PC6X' />
      <body className={`${source.variable} ${orbi.variable}`}>{children}
        <CookieBanner />
        <SpeedInsights />
      </body>
    </html>
  </>
  )
}
