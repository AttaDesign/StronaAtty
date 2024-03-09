import './footer.scss'
import Link from 'next/link';
import Image from 'next/image';
export default function Footer() {
    return (
        <footer>
            <div className="footerbox">
                <div className="links">
                    <h2>Kontakt</h2>
                    <a  href='tel:+48531436420'>+48&nbsp;531&nbsp;436&nbsp;420</a>
                    <a  href='mailto:home@attadesign.pl'>home@attadesign.pl</a>
                    <Link  target='blank'  href='https://www.google.com/maps/place/Szlenkier%C3%B3w+2%2Fu3,+01-404+Warszawa/@52.2371761,20.9681115,17z/data=!3m1!4b1!4m5!3m4!1s0x471ecb7c72510091:0x386c1d335fbd9853!8m2!3d52.2371728!4d20.9706864?hl=pl-PL&entry=ttu'>Siedziba - Mapa</Link>
                    <Link href='/politykaprywatnosci'>Polityka prywatności</Link>
                    <div className="fsocial">
                        <Link  target="blank" href='https://www.linkedin.com/company/atta-web-agency/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BI3mz9PcGTu%2BQGeu5SAOxQw%3D%3D'><Image alt='linkedin icon' src='/linkedin.png' width={20} height={20}></Image></Link>
                        <Link  target="blank" href='https://www.facebook.com/profile.php?id=61555956276192&locale=pl_PL'><Image alt='facebook icon' src='/facebook-icon-512x512.png' width={20} height={20}></Image></Link>
                        <Link target="blank" href='https://www.instagram.com/atta_web_agency/'><Image alt='instagram icon' src='/igicon.jpg-2.png' width={20} height={20}></Image></Link>
                        <Link target="blank" href='https://twitter.com/AttaWebAgency'><Image  alt='x icon' src='/X_icon_2.svg.png' width={20} height={20}></Image></Link>
                    </div>
                </div>
                <div className="links">
                    <h2>Linki</h2>
                    <Link href='/'>Strona Główna</Link>
                    <Link href='/contact'>Kontakt</Link>
                    <Link href='/contact'>Witryny Bizensowe</Link>
                    <Link href='/contact'>Sklepy Internetowe</Link>
                    <Link href='/contact'>Landing Page</Link>
                    <Link href='/contact'>SEO, Aplikacje</Link>
                </div>
            </div>
            <div className="attacopy">
                <div className="logo"></div>
                <Link href='/'><Image src='/atta/aa_beztła.png' width={45} height={45} alt='logo of Bensari Solution' priority></Image></Link>
                Atta Web Design 2024 &copy;
            </div>
        </footer>
    );
}