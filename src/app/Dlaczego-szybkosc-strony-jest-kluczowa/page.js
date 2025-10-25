// src/app/blog/przykładowy-post/page.jsx
import './styleblogposta.scss'
// Komponenty frameworka
import Link from 'next/link';
import Image from 'next/image'
import DynamicNavbar from '@/components/navbar'
import { AnimatePresence } from 'framer-motion'
import Footer from '@/components/footer'
import { Analytics } from "@vercel/analytics/next"

// Nowe, wydzielone komponenty bloga
import ArticleHeader from '@/components/blog/ArticleHeader';
import Timeline from '@/components/blog/Timeline';
import TimelineItem from '@/components/blog/TimelineItem';
import InfoBox from '@/components/blog/InfoBox';
import BlogSidebar from '@/components/blog/BlogSidebar';
import AuthorBio from '@/components/blog/AuthorBio';
import Head from 'next/head';

import TooltipLink from '@/components/blog/ToolTipLink';

// Ikony dla komponentu Timeline
import IdeaIcon from '@/components/icons/IdeaIcon';
import PaletteIcon from '@/components/icons/PaletteIcon';
import CodeIcon from '@/components/icons/CodeIcon';
import BoltIcon from '@/components/icons/BoltIcon';
import RocketIcon from '@/components/icons/RocketIcon';

// --- Dane dla komponentów (w przyszłości mogą pochodzić z API/CMS) ---


//Ty zaczynasz ustawienia artykułów
const articleData = {
  title: "Dlaczego szybkość strony jest kluczowa?",
  tags: [
    { text: "Szybkość strony", colorClass: "tag-purple" },
    { text: "WordPress", colorClass: "tag-purple" },
    { text: "SEO", colorClass: "tag-blue" },
  ],
  author: "Tomisław Bensari",
  date: "23 października 2025",
  readTime: "5 min czytania",
};

//Informacje o autorze
const authorData = {
  name: "Tomisław Bensari",
  bio: "UI/UX Designer. Projektuję strony dla prawników i biur nieruchomości. Nie korzystam z szablonów – tworzę indywidualne, profesjonalne projekty, które budują zaufanie i zdobywają klientów.",
};

export const metadata = {
  title: articleData.title,

  description: articleData.description,

  metadataBase: new URL("https://attadesign.pl/"),

  robots: {
    index: true,
    follow: true,
  },
}

export default function DlaczegoSzybkoscStronyJestKluczowa() {
  return (
    <>
      <BlogSidebar telefon={"+48 572 057 499"} opis={"Nie tworzymy stron z szablonów, tworzymy indywidualne szablony dla każdego klienta. Nasz proces opiera się na 3 krokach: Analiza i makieta → Projektowanie designu→ Zaimplementowanie panelu administracyjnego"} />
      <DynamicNavbar />
      <div className="main-container">
        <div className="content-wrapper">
          <div className="article-section">
<Link className='logo-atta' href={'/'} target='_blank'>
          <Image src='/logo.png' alt='logo' width={39} height={63}></Image></Link>
            <ArticleHeader
              title={articleData.title}
              tags={articleData.tags}
              author={articleData.author}
              date={articleData.date}
              readTime={articleData.readTime}
            />

            {/* Tu zaczynasz pisać artykuł */}
            <p className="article-text">
              Możesz mieć najpiękniejszy, najbardziej dynamiczny design i perfekcyjne treści, ale w dzisiejszym internecie nikt nie lubi czekać! Użytkownik, który trafia na stronę, oczekuje natychmiastowej reakcji! Zanim jeszcze zdąży zobaczyć pierwszy ekran. Użytkownik jest niecierpliwy!
            </p>

            <div className="featured-image">
              <Image alt='Dlaczego szybkość strony jest kluczowa? ATTA Design' width={865} height={504} src='/Dlaczego-szybkość-strony-jest-kluczowa-ATTA-Design.svg' />
            </div>
          <h2 className="article-title">Dlaczego szybkość ma aż takie znaczenie?</h2>
            <p className="article-text">
              Słynne badanie  &ldquo;Response Times: The 3 Important Limits&rdquo; autorstwa Jakoba Nielsena (autorytetu w dziedzinie usability) jasno określa, jak postrzegamy czas reakcji systemu:<br></br><br></br>

              0.1 sekundy: Taki czas reakcji jest odbierany jako natychmiastowy. Użytkownik ma poczucie bezpośredniej kontroli.<br></br><br></br>
              1.0 sekunda: To granica płynności. Użytkownik zauważa minimalne opóźnienie, ale jego tok myślenia nie zostaje przerwany.<br></br><br></br>
              Powyżej 2-5 sekund: To KATASTROFA! Użytkownik zaczyna się irytować, a jego uwaga ucieka. Szansa, że opuści stronę (tzw. &ldquo;bounce rate&rdquo;) wzrasta.<br></br><br></br>


              Wolna strona frustruje odwiedzającego! Buduje negatywne pierwsze wrażenie o firmie, jeszcze zanim użytkownik zdąży zapoznać się z treścią czy ofertą.

            </p>

            <div className="featured-image">
              <Image alt='Wykres ATTA Design' width={865} height={504} src='/Limits-ATTA-Design.svg' />
            </div>

          <h2 className="article-title">Jaki wpływ ma szybkość strony na pozycjonowanie (SEO)</h2>
            <p className="article-text">
              Dla Google szybkość strony to nie jest sugestia – to twardy wymóg i jeden z najważniejszych czynników rankingowych.<br></br><br></br>
              Algorytmy bezpośrednio mierzą, jak strona ładuje się i reaguje na interakcje użytkownika. Jeśli Twoja strona jest wolna, Google uznaje ją za mniej wartościową dla odwiedzających.<br></br><br></br>
              Efekt? Wolna strona = niższa pozycja w wynikach wyszukiwania. Proste. Twoja idealna wizytówka ląduje na drugiej lub trzeciej stronie wyników, gdzie nikt już nie zagląda.
            </p>

         

            <p className="article-text">
              Na koniec dnia strona internetowa ma realizować konkretny cel: sprzedawać, zbierać kontakty, budować markę. Każda dodatkowa sekunda ładowania to realny spadek konwersji.<br></br><br></br>
              Jeśli prowadzisz sklep internetowy, wolne ładowanie koszyka czy strony produktu to prosta droga do porzuconych koszyków. Klienci pójdą tam, gdzie proces zakupowy jest płynny i natychmiastowy.


            </p>
        <h2 className='article-title'>Jak sprawdzić, czy moja strona jest szybka?</h2>
            <p className="article-text">
              Zanim zaczniemy optymalizację, musimy mieć twarde dane. W ATTA Design używamy profesjonalnych narzędzi, ale Ty sam możesz zrobić pierwszy krok diagnostyczny.
              Naszym podstawowym i rekomendowanym narzędziem jest Google PageSpeed Insights: <TooltipLink text="PageSpeed Insights (PSI) to bezpłatne narzędzie stworzone przez Google, które służy do analizy wydajności stron internetowych. Mierzy ono, jak szybko stronę się ładuje i jak działa dana strona "><Link href={"https://pagespeed.web.dev/"} target='_blank'>https://pagespeed.web.dev/</Link></TooltipLink><br></br><br></br>

              Dlaczego to narzędzie? Ponieważ pokazuje Ci dokładnie to, co widzi Google. Nie tylko daje wynik w skali 0-100, ale przede wszystkim analizuje stronę pod kątem SEO.<br></br><br></br>

              <b>Wklej adres swojej strony i zobacz wyniki, szczególnie dla urządzeń mobilnych (bo to one są dziś priorytetem). Narzędzie da Ci też listę konkretnych rekomendacji, co &ldquo;boli&rdquo; Twoją witrynę i co należy poprawić.
                Nie jesteś pewien, czy Twoja strona działa wystarczająco szybko? Skontaktuj się z nami w ATTA Design. Zrobimy profesjonalny audyt i zaproponujemy konkretne rozwiązania!</b>

            </p>

            {/* Tu kończysz pisać artykuł */}
            <AuthorBio name={authorData.name} bio={authorData.bio} />

          </div> {/* */}

        </div> {/* */}

      <Footer></Footer>
      </div> {/* */}
      <Analytics />

    </>
  )
}