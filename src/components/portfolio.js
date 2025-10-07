'use client'

import Image from 'next/image';
import { useState } from 'react'
import './portfolio.scss';
import Case from './casestudy';

const Portfolio = () => {
    let [hidden, setHidden] = useState(true)

    return (
        <div className='portfolio' id="portfolio">
            <div className='box2'>
                <h2 className='text-neutral-50 sm:text-6xl text-4xl sourceFont font-semibold'>Portfolio</h2>
                <p className='sub'>
                    Nie tworzymy stron z szablonów, tworzymy indywidualne szablony dla każdego klienta. Nasz proces opiera się na 3 krokach: Analiza i makieta → Projektowanie designu → Zaimplementowanie panelu administracyjnego
                </p>
            </div>
            <div className={hidden ? 'listing' : 'listing show'}>
                <Case link="https://moderncv.pl/" title="Modern CV" alt="Screen z aplikacji Modern CV" h3="Aplikacja Modern CV" p="Stworzony przez nasz zespół, darmowy kreator CV z AI, z którego skorzystało setki osób w Polsce. Modern CV jest aplikacją, która stoi na infrastrukturze chmurowej Google i Amazon. Zadbaliśmy o wiele szczegółów, użytkownicy mogą zmieniać czcionki, kolejność sekcji i wiele więcej." img="/moderncvscreen.png"></Case>
                <Case link="https://zembrzuski.eu/" title="Tadeusz Zembrzuski" alt="Strona zembrzuski.eu" h3="Strona prof. UW dr. hab. Tadeusza Zembrzuskiego" p=" Przeprowadziliśmy migrację oraz odświeżenie designu z zachowaniem ponad 800 wpisów oraz całej struktury linków SEO. Wprowadziliśmy wielo języczność, archiwum wspisów oraz wiele nowoczesnych funkcji" img="/zembrzuski.png"></Case>
                <Case link="https://brandmove.pl/" title="Brandmove" alt="brandmove strona agencji marketingowej" h3="Agencja Brandmove" p="Ten sam klient, który zamówił u nas lejek sprzedażowy, postanowił założyć nową firmę i zlecić nam stworzenie jej strony internetowej. Brandmove nawiązało współpracę partnerską z ATTA Design - wspólnie pomagamy naszym klientom w tworzeniu treści na media społecznościowe oraz budowaniu stron internetowych" img="/brandtube.png"></Case>
                {/* <Case link="https://cashradar.pl/" title="Cashradar" alt="screen z cashradar.pl" h3="Cashradar.pl" p="Blog reklamujący programy oraz promocje afiliacyjne. Stworzyliśmy makietę żeby omówić strukturę oraz wszystkie mechanizmy strony. Następnie zaprojektowaliśmy design w programie “Figma”. Po wszystkich poprawkach designu zajęliśmy się programowaniem strony do systemu WordPress." img="/cashradar.png"></Case> */}
                <Case link="https://stumilowylas.eu/?v" title="StuliowyLas" alt="screen z stumilowylas.pl" h3="Strona z Wirtualnym Spacerem" p="W raz z naszym partnerem tworzymy wirtualne spacery i umieszczamy je na dedykowanych stronach internetowych. W tym projekcie naszym zadaniem było stworzenie strony internetowej, która zachęca do zarezerwowania domku w popularnym ośrodku w Mielenku." img="/stumilowylas.png"></Case>
                <Case link="https://srv83742.seohost.com.pl/" title="SDK Partner w budowie" alt="screen z sdkpartner.pl" h3="Kancelaria SDK Partner (w budowie)" p="Kancelaria prawna, która pomaga odzyskać niesłusznie naliczone koszty z umów kredytowych.  Wizytówka, której głównym celem jest zachęcenie klienta do uzupełnienia formularza kontaktowego" img="/SDK Partner.png"></Case>
                <Case link="https://notariusz-zoliborz.info" title="" alt="Paweł Orłowski oraz Krzysztof mielczarek" h3="Kancelaria notarialna " p="Wizytówka znanej kancelarii notarialnej w Warszawie. Jeden z pierwszych projektów ATTA Design" img="/kancelarianotarialna.png"></Case>
                <Case link="https://nexumairways.com/" title="Nexum airways" alt="strona nexumairways" h3="Startup linii lotniczej Nexum Airways" p="Startup poszukujący inwestorów w branży linii lotniczych. Naszym zadaniem było stworzenie strony internetowej, która pomoże dostać się na rozmowy z inwestorami oraz menedżerami lotnisk" img="/nexumairways.png"></Case>
                <Case link="https://www.tymekdruzbicki.pl/" title="Tymoteusz Drużbicki" alt="strona Tymka Drużbickiego" h3="Lejek sprzedażowy Youtubera" p="Stworzyliśmy dwuetapowy proces sprzedażowy, dzięki któremu nasz klient skutecznie pozyskuje nowych klientów na swoją usługę. Lejek sprzedażowy prowadzi użytkownika z podstrony oferującej darmowe szkolenie do strony zachęcającej do umówienia się na bezpłatną konsultację" img="/tymek Drużbicki.png"></Case>
            </div>
            <div
                className="wrappingbutton"
                style={{ display: hidden ? 'block' : 'none' }}
            >
                <div className="cta unselectable" onClick={() => setHidden(!hidden)}>
                    <div className="text fw-400 m-2 sm:m-0 font-normal flex items-center" style={{fontWeight: '400 !important'}}>
                        {hidden ? 'Wyświetl wszystkie realizacje' : 'Schowaj realizacje'}
                        <Image
                            width={20}
                            height={20}
                            src="/nav-arrow-down.svg"
                            className={`ml-2 transition-transform duration-300 ${!hidden ? 'rotate-180' : ''}`}
                            alt="Arrow"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;