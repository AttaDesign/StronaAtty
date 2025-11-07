import './pp.scss';
import Link from 'next/link';
import Image from 'next/image';
import AttaIMG from '@/components/attaService';
// Usunęliśmy import Navbar, bo nie był używany i import metadata

// Ta sekcja jest teraz JEDYNĄ definicją metadata
export const metadata = {
  robots: {
    index: false, // Mówi Google, aby nie indeksowało tej strony
    follow: true, // Ale pozwala śledzić linki na tej stronie
  },
};

// To jest teraz JEDYNA definicja funkcji i default export
export default function PolitykaPrywatnosci() {
    return (
        <>
            <div className='wrap'>
                <AttaIMG></AttaIMG>
                <div className="backbutton">
                    <Link href="/#Contactus" id='#contact_link'  ><Image src='/rightarrow.png' alt="go back to projects" className='button' width={44} height={44} style={{ rotate: '90deg' }} ></Image></Link>
                </div>
                <div className='pp'>
                    {/* ... (cała twoja treść polityki prywatności po polsku) ... */}
                    <br></br><span style={{ fontWeight: '700' }}>Ochrona prywatności Użytkowników odwiedzających Serwis jest dla nas szczególnie istotna...</span><br></br>
                    {/* ... reszta ... */}
                    ...zgłoszenia naruszeń do Prezesa Urzędu Ochrony Danych Osobowych.
                </div>
            </div>
        </>
    )
}
