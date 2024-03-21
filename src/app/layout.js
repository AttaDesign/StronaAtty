
import './globals.scss'
import { Source_Sans_3, Orbitron } from 'next/font/google'
import GoogleAnalytics from '@/components/GoogleAnalitics';
import CookieBanner from '@/components/CookieBanner';
import { SpeedInsights } from "@vercel/speed-insights/next"

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

export const metadata = {
  title: 'ATTA Web Agency - strony na zamówienie',
  description: 'Tworzymy z precyzją eleganckie strony internetowe, które opowiedzą hisotrię twojej frimy.',
  metadataBase: new URL("https://attadesign.pl/"),

}

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <GoogleAnalytics GA_MEASUREMENT_ID='G-QZB3N6PC6X' />
      <body className={`${source.variable} ${orbi.variable}`}>{children}
        <CookieBanner />
      </body>
    </html>
  )
}
