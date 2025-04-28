'use client'

import Image from 'next/image';
import { useState } from 'react'
import './portfolio.scss';
import Case from './casestudy';

const Portfolio = () => {
    let [hidden, setHidden] = useState(true)

    return (
        <div className='portfolio'>
            <div className='box2'>
                <h2 className='text-neutral-50 sm:text-6xl text-4xl sourceFont font-semibold'>Portfolio</h2>
                <p className='sub'>
                    Nie tworzymy stron z szablonów, tworzymy indywidualne szablony dla każdego klienta. Nasz proces opiera się na 3 krokach: Analiza i makieta → Projektowanie designu → Zaimplementowanie panelu administracyjnego
                </p>
            </div>
            <div className={hidden ? 'listing' : 'listing show'}>
                <Case alt="Screen z aplikacji Modern CV" h3="Aplikacja Modern CV" p="Stworzony przez nasz zespół, darmowy kreator CV z AI, z którego skorzystało setki osób w Polsce. Modern CV jest aplikacją, która stoi na infrastrukturze chmurowej Google i Amazon. Zadbaliśmy o wiele szczegółów, użytkownicy mogą zmieniać czcionki, kolejność sekcji i wiele więcej." img="/moderncvscreen.png"></Case>
                <Case alt="screen z cashradar.pl" h3="Cashradar.pl" p="Blog reklamujący programy oraz promocje afiliacyjne. Stworzyliśmy makietę żeby omówić strukturę oraz wszystkie mechanizmy strony. Następnie zaprojektowaliśmy design w programie “Figma”. Po wszystkich poprawkach designu zajęliśmy się programowaniem strony do systemu WordPress." img="/cashradar.png"></Case>
                <Case alt="screen z stumilowylas.pl" h3="Strona z Wirtualnym Spacerem" p="W raz z naszym partnerem tworzymy wirtualne spacery i umieszczamy je na dedykowanych stronach internetowych. W tym projekcie naszym zadaniem było stworzenie strony internetowej, która zachęca do zarezerwowania domku w popularnym ośrodku w Mielenku." img="/stumilowylas.png"></Case>
                <Case alt="screen z sdkpartner.pl" h3="Kancelaria SDK Partner" p="Kancelaria prawna, która pomaga odzyskać niesłusznie naliczone koszty z umów kredytowych.  Wizytówka, której głównym celem jest zachęcenie klienta do uzupełnienia formularza kontaktowego" img="/SDK Partner.png"></Case>
                <Case alt="Paweł Orłowski oraz Krzysztof mielczarek" h3="Kancelaria notarialna " p="Wizytówka znanej kancelarii notarialnej w Warszawie. Jeden z pierwszych projektów ATTA Design" img="/kancelarianotarialna.png"></Case>
                <Case alt="strona Tymka Drużbickiego" h3="Lejek sprzedażowy Youtubera" p="Stworzyliśmy dwuetapowy proces sprzedażowy, dzięki któremu nasz klient skutecznie pozyskuje nowych klientów na swoją usługę. Lejek sprzedażowy prowadzi użytkownika z podstrony oferującej darmowe szkolenie do strony zachęcającej do umówienia się na bezpłatną konsultację" img="/tymek Drużbicki.png"></Case>
                <Case alt="strona nexumairways" h3="Startup linii lotniczej Nexum Airways" p="Startup poszukujący inwestorów w branży linii lotniczych. Naszym zadaniem było stworzenie strony internetowej, która pomoże dostać się na rozmowy z inwestorami oraz menedżerami lotnisk" img="/nexumairways.png"></Case>
                <Case alt="brandtube strona agencji marketingowej" h3="Agencja Brandtube (w budowie)" p="Ten sam klient, który zamówił u nas lejek sprzedażowy, postanowił założyć nową firmę i zlecić nam stworzenie jej strony internetowej. Brandtube nawiązało współpracę partnerską z ATTA Design - wspólnie pomagamy naszym klientom w tworzeniu treści na media społecznościowe oraz budowaniu stron internetowych" img="/brandtube.png"></Case>

            </div>
            <div
                className="wrappingbutton"
                style={{ opacity: hidden ? '1' : '0' }}
            >
                <div className="cta unselectable" onClick={() => setHidden(!hidden)}>
                    <div className="text m-2 sm:m-0 font-normal flex items-center">
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