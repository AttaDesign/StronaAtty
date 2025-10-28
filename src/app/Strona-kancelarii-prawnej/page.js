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
  title: "Strona kancelarii prawnej: 5 kluczowych elementów, które zmieniają wizytówkę w maszynę do pozyskiwania klientów.",
  tags: [
    { text: "Strona Kancelarii", colorClass: "tag-green" },
    { text: "WordPress", colorClass: "tag-purple" },
    { text: "SEO", colorClass: "tag-blue" },
  ],
  author: "Tomisław Bensari",
  date: "27 października 2025",
  readTime: "8 min czytania",
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
      <BlogSidebar telefon={"+48 572 057 499"} opis={"Specjalizujemy się w tworzeniu profesjonalnego wizerunku dla firm i marek na stronach internetowych. Projektujemy od podstaw, nie korzystamy z gotowych szablonów."} />
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
              Strona internetowa Twojej kancelarii to jest Wizytówka, ma zawierać wszystkie niezbędne informację które Twój potencjalny klient chce znaleźć. Informację które nie mogą być wrzucone od tak. Oprócz tego wizytówka musi być nowoczesna, ładna i szybka tak aby dodatkowo wzbudziła zainteresowanie Twojego potencjalnego jak i stałego klienta!
              <br></br><br></br>
              Ten artykuł to konkretne podstawy. Pokażę Ci 5 kluczowych elementów, które musi posiadać skuteczna strona kancelarii. Taka, która buduje zaufanie (UX), jest widoczna w Google (SEO) i realnie generuje zapytania (Konwersja).
            </p>

            <div className="featured-image">
              <Image alt='Strona kancelarii prawnej 5 kluczowych elementów ATTA Design' width={865} height={504} src='/Strona-kancelarii-prawnej-5-kluczowych-elementów-ATTA-Design.webp' />
            </div>
          <h2 className="article-title">Co musi zawierać skuteczna strona kancelarii?</h2>
            <p className="article-text">
              Żeby strona zaczęła zarabiać na siebie musi spełniać pięć podstawowych kryteriów:<br></br><br></br>
              <b>Filar 1:</b> Nowoczesny wygląd strony internetowej!<br></br>
              <b>Filar 2:</b> Fundament Techniczny (Szybkość i Mobile)<br></br>
              <b>Filar 3:</b> Oferta, którą rozumie klient (nie prawnik)<br></br>
              <b>Filar 4:</b> Informacje o Kancelarii <br></br>
              <b>Filar 5:</b> Logiczna Konwersja (Jasne Wezwanie do Działania)<br></br>
            </p>

          <h2 className="article-title">Filar 1: Nowoczesny wygląd strony internetowej!</h2>
            <p className="article-text">
              Masz 3 sekundy. Tyle wystarczy, by użytkownik ocenił Twoją kancelarię na podstawie strony. Jeśli design jest stary i wygląda jak z 2015 roku, co klient myśli o Twoich usługach? Dokładnie to samo.<br></br><br></br>
              Nowoczesny wygląd to podstawa. To on odpowiada za przyciągnięcie uwagi klienta, on decyduje na czym klient skupi uwagę!<br></br><br></br>
              <b>Co to znaczy "Nowoczesny" design dla Kancelarii?</b> To przemyślana, czytelna czcionka, profesjonalna kolorystyka. Profesjonalny i przemyślany układ strony, wyróżnienie najważniejszych sekcji. Subtelne animacje i mechaniki elementów strony. Klient chce zobaczyć, KTO mu pomoże. Zainwestuj w profesjonalną sesję zdjęciową. Pokaż autentyczne zdjęcia zespołu i biura. To buduje zaufanie, którego nie da się kupić w banku zdjęć.

            </p>
          <h2 className="article-title">Filar 2: Fundament Techniczny (Szybkość i Mobile)</h2>
            <p className="article-text">
              To jest Twój twardy wymóg. Fundament, na którym stoi cała reszta. Możesz mieć najpiękniejszy design, ale jeśli strona nie działa, to jest bezwartościowa.<br></br><br></br>
              <b>Szybkość:</b> Jak pisałem w moim ostatnim artykule [HIPERŁĄCZE]!!!!!!!!!!!!!!!!!!!!!!!!!!!!!, nikt nie lubi czekać. Czas reakcji powyżej 2-5 sekund to KATASTROFA. Google widzi wolną stronę i obniża Twój ranking (SEO). <br></br>
              <b>Responsywność:</b> Twój klient prawdopodobnie szuka pomocy na smartfonie. Często "na już". Jeśli musi powiększać tekst, szukać przycisku albo strona mu się "rozjeżdża" – właśnie tracisz klienta. Strona musi być idealnie dopasowana do telefonu!
            </p>
          <h2 className="article-title">Filar 3: Oferta, którą rozumie klient (nie prawnik)</h2>
            <p className="article-text">
              To błąd większości kancelarii. Komunikujecie się prawniczym żargonem.<br></br><br></br>
              Klient nie myśli "potrzebuję usługi z zakresu prawa cywilnego". On myśli "chcę się rozwieść" albo "sąsiad zalał mi mieszkanie". Mów wprost od czego jesteś specjalistą: <br></br><br></br>
              <b>Zamiast:</b> Prawo Rodzinne.<br></br>
              <b>Napisz:</b> Rozwody, Alimenty, Podział Majątku, Kontakty z dzieckiem. <br></br><br></br>
              Klient musi znaleźć na stronie swój konkretny problem. Jeśli nie rozumie o czym piszesz pójdzie do kogoś, kto mówi po ludzku. Jasna oferta to szybsza konwersja.
            </p>
          <h2 className="article-title">Filar 4: Informacje o Kancelarii</h2>
            <p className="article-text">
              Z niewiadomego mi powodu prawnicy kochają pisać o sobie. Efekt? Nieczytelna ściana tekstu, prawnicze CV i historia od 1998 roku. Powiem wprost: nikogo to nie interesuje na stronie głównej. Długie opisy przenieś na dedykowane podstrony.<br></br><br></br>
              Pamiętaj, <b>użytkownicy nie czytają w sieci.</b> Badania Nielsena są jasne: <b>blok tekstu dłuższy niż 4 linijki wizualnie odstrasza.</b> Klient szuka konkretów.<br></br><br></br>
              Dlatego na stronie musi panować żelazna hierarchia. Na samą górę idą informacje kluczowe dla klienta: "Specjalizacje" i odpowiedź na pytanie: "KTO mi pomoże?". Zaufanie budujesz, pokazując profesjonalne zdjęcia zespołu. Zamiast nudnego CV, daj dwa zdania konkretu: specjalizacja i doświadczenie (np. "15 lat w prawie rodzinnym, 200+ spraw"). Mniej ważne informacje, jak długa historia kancelarii, przesuń na sam dół.
            </p>

            <div className="featured-image">
              <Image alt='Wezwanie do działania ATTA Design' width={865} height={504} src='/Wezwanie-do-dzialania-ATTA-Design.webp' />
            </div>
          <h2 className="article-title">Filar 5: Logiczna Konwersja (Jasne Wezwanie do Działania)</h2>
            <p className="article-text">
              Klient jest na stronie. Podoba mu się design (Filar 1), strona działa szybko (Filar 2), znalazł swoją usługę (Filar 3) i nawet Cię polubił (Filar 4).<br></br><br></br>
              I co teraz ma zrobić?<br></br><br></br>
              Twoja strona musi go prowadzić prosto do celu. Celem jest kontakt.<br></br><br></br>
              <b>CTA (Call to Action):</b>Każda podstrona musi mieć jasne "wezwanie do działania". "Umów konsultację", "Zadzwoń teraz", "Napisz do nas".<br></br>
              <b>Nie każ mu szukać:</b>Numer telefonu musi być widoczny w nagłówku i klikalny na telefonie. Formularz kontaktowy ma być prosty – imię, telefon/e-mail, krótki opis sprawy. Nie twórz 15-polowego formularza, bo nikt go nie wypełni.
            </p>
          <h2 className="article-title">Podsumowanie</h2>
            <p className="article-text">
              Przestań traktować swoją stronę jak ozdobną ulotkę, która jest tylko kosztem. To ma być Twój najskuteczniejszy pracownik, który pracuje 24/7 na Twój sukces.<br></br><br></br>
              <b>W ATTA Design budujemy strony, które spełniają wszystkie te warunki. Tworzymy narzędzia, które budują zaufanie i realnie generują zapytania. Skontaktuj się z nami i sprawdź, co możemy zrobić dla Twojej kancelarii!</b>
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