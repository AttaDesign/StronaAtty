'use client'
import Image from 'next/image';
import Link from 'next/link';
import './concactSection.scss';

function ContactSection() {
    return (
        <>
            <div id='Contactus' className='ct sourceFont wwwww'>
                <div className='v'>
                    <h3 className='vh3'>Zdecydowany?</h3>
                    <p className='p font-normal'>Skontaktuj się z nami, a spersonalizujemy dla Ciebie ofertę!</p>
                    <p className='p font-normal'>Napisz na: <Link href={"mailto:home@attadesign.pl"}><span  >home@attadesign.pl</span></Link> </p>
                </div>
                <Image src='/atta/aa_beztła.png' width={45} height={45} alt='logo of Bensari Solution' priority></Image>
            </div>
        </>
    );
}

export default ContactSection;
