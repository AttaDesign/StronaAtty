import './pp.scss';
import Link from 'next/link';
import Image from 'next/image';
import AttaIMG from '@/components/attaService';
// Usunęliśmy import Navbar, bo nie był używany

// Ta sekcja jest teraz JEDYNĄ definicją metadata
export const metadata = {
  robots: {
    index: false,
    follow: true,
  },
};

// To jest teraz JEDYNA definicja funkcji i default export
export default function PolitykaPrywatnosci() {
    return (
        <>
            <div className='wrap'>
                <AttaIMG></AttaIMG>
                <div className="backbutton">
                    <Link href="/eng/contact" id='#contact_link'  ><Image src='/rightarrow.png' alt="go back to projects" className='button' width={44} height={44} style={{ rotate: '90deg' }} ></Image></Link>
                </div>
                <div className='pp'>
                    {/* ... (cała twoja treść polityki prywatności po angielsku) ... */}
                    <br></br><span style={{ fontWeight: '700' }}>Privacy protection of Users visiting the Website is particularly important to us...</span><br></br>
                    {/* ... reszta ... */}
                    ...report breaches to the President of the Office for Personal Data Protection.
                </div>
            </div>
        </>
    )
}
