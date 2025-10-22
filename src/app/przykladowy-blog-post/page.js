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

// Ikony dla komponentu Timeline
import IdeaIcon from '@/components/icons/IdeaIcon';
import PaletteIcon from '@/components/icons/PaletteIcon';
import CodeIcon from '@/components/icons/CodeIcon';
import BoltIcon from '@/components/icons/BoltIcon';
import RocketIcon from '@/components/icons/RocketIcon';

// --- Dane dla komponentów (w przyszłości mogą pochodzić z API/CMS) ---


//Ty zaczynasz ustawienia artykułów
const articleData = {
  title: "Jak stworzyć stronę internetową, która przyciągnie klientów w 2025?",
  tags: [
    { text: "Web Development", colorClass: "tag-purple" },
    { text: "Strony internetowe", colorClass: "tag-blue" },
  ],
  author: "Tomisław Bensari",
  date: "21 października 2025",
  readTime: "5 min czytania",
};

//Blok z kreskami i ikonkami
const timelineItems = [
  { number: '01', title: 'Planowanie i Research', description: 'Zrozumienie celów biznesowych, analizy konkurencji i potrzeb użytkowników', icon: IdeaIcon },
  { number: '02', title: 'Design i Prototypowanie', description: 'Tworzenie wireframes, mockupów i prototypów interaktywnych', icon: PaletteIcon },
  { number: '03', title: 'Rozwój i Implementacja', description: 'Kodowanie strony z wykorzystaniem nowoczesnych technologii', icon: CodeIcon },
  { number: '04', title: 'Testy i Optymalizacja', description: 'Testowanie funkcjonalności, wydajności i dostępności', icon: BoltIcon },
  { number: '05', title: 'Launch i Monitoring', description: 'Wdrożenie strony i ciągłe monitorowanie wyników', icon: RocketIcon },
];

//Blok z fioletowym tłem
const seoInfo = {
  title: "Kluczowe elementy SEO w 2025:",
  items: [
    "✨ Optymalizacja pod Core Web Vitals",
    "✨ Strategia słów kluczowych dostosowana do intencji użytkownika",
    "✨ Wysokiej jakości, unikalne treści",
    "✨ Optymalizacja mobilna (mobile-first indexing)",
    "✨ Budowanie autorytetu przez linki zwrotne",
  ]
};

//Informacje o autorze
const authorData = {
  name: "Tomisław Bensari",
  bio: "Web designer i UX specialist z pasją do tworzenia intuicyjnych i pięknych interfejsów. Ponad 5 lat doświadczenia w projektowaniu stron internetowych dla firm z różnych branż.",
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

export default function PrzykładowyBlogPost() {
  return (
    <>
      <BlogSidebar />
      <DynamicNavbar />
      <div className="main-container">
        <div className="content-wrapper"><Link className='logo-atta' href={'/'} target='_blank'>
          <Image  src='/logo.png' alt='logo' width={39} height={63}></Image></Link>
          <div className="article-section">

            <ArticleHeader
              title={articleData.title}
              tags={articleData.tags}
              author={articleData.author}
              date={articleData.date}
              readTime={articleData.readTime}
            />

            {/* Tu zaczynasz pisać artykuł */}
            <p className="article-text">
              W dzisiejszych czasach strona internetowa to nie tylko wizytówka firmy...
            </p>

            <div className="featured-image">
              <Image alt='opis dla czytników ekranu' width={865} height={504} src='/img-test.png' />
            </div>

            <p className="article-text">
              Design strony internetowej to pierwsze wrażenie, jakie robisz na potencjalnym kliencie...
            </p>

            <Timeline>
              {timelineItems.map(item => (
                <TimelineItem
                  key={item.number}
                  number={item.number}
                  title={item.title}
                  description={item.description}
                  icon={item.icon}
                />
              ))}
            </Timeline>

            <p className="article-text">
              Stworzenie skutecznej strony internetowej w 2025 roku to połączenie wielu elementów...
            </p>

            <InfoBox title={seoInfo.title} items={seoInfo.items} />

            <p className="article-text">
              Stworzenie skutecznejh strony internetowej w 2025 roku toawdwad połączenie wielu elementów...
            </p>
            {/* Tu kończysz pisać artykuł */}
            <AuthorBio name={authorData.name} bio={authorData.bio} />

          </div> {/* */}

        </div> {/* */}


      </div> {/* */}
      <Analytics />

    </>
  )
}