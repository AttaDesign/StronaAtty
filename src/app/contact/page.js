
'use client'
import './contact.scss'
import Transition from '@/components/transistion'
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import emailjs from '@emailjs/browser';
import { Toaster, toast } from 'sonner';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion'
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';

export default function Contact() {
    let form = useRef(null);
    let imie = useRef(null);
    let email = useRef(null);
    let temat = useRef(null);

    
    const sendEmail = (e) => {
        let TemplateParams = {
            name: imie.current.value,
            email: email.current.value,
            message: temat.current.value,
        }
        emailjs.init({
            publicKey: '6WSJ2sxAUYdJKwXbE',
            blockHeadless: true,
        });

        e.preventDefault();

        console.log(temat.current.value)
        if (sessionStorage.getItem('isformsend') == 'true') {
            toast.info("Odezwiemy się w przeciągu 5 godzin")
        } else {
            emailjs.send('service_7y80uty', 'template_6vhrpsv', TemplateParams).then((result) => {
                sessionStorage.setItem('isformsend', 'true')
                toast.success("Wiadomość została wysłana, dziękujemy!");
            }, (error) => {
                console.log(error.text);
                toast.error("Wiadomość nie dotarła :( napisz email")
            })
}



    };
const [isPhone, setIsPhone] = useState(true);
useEffect(() => {
    if (window.innerWidth > 1000) {
        setIsPhone(false);
    }
}, []);
const [firstLoad, setFirstLoad] = useState(3.2)
const clienList = {
    0: {
        img: '/site3.png',
        h2: 'Joanna Bensari, Fotograf',
        p: 'Naszym zadaniem było stworzenie fotograficznego portfolio, które stanowi wizualne świadectwo umiejętności oraz kreatywności Joanny Bensari.'
    },
    1: {
        img: '/site2.png',
        h2: 'Paweł, Notariusz',
        p: 'Prosta wizytówka dla kancelarii notarialnej w Warszawie. Naszym celem było ukazanie kancelarii w sposób minimalistyczny oraz elegancki'
    }
}
const [clientInfo, showClientInfo] = useState([false, null])
const videoRef = useRef(null); // Utworzenie refa dla elementu video

function MouseEnter(id) {
    setFirstLoad(false)
    showClientInfo([true, id])
}
function MouseLeave() {
    showClientInfo([false, null])
}

useEffect(() => {
    if (videoRef.current) {
        videoRef.current.playbackRate = 1; // Ustawienie szybkości odtwarzania na 1, czyli spowolnienie wideo
    }
}, []); // Pusta tablica zależności, aby efekt uruchomił się tylko raz po zamontowaniu komponentu

return (
    <>
        <Transition>
            <div id='contact' className='sourceFont'>
                <Toaster richColors  position="top-center"/>

                <div className="backbutton">
                    <Link href="/#servicesV2" id='#contact_link'  ><Image src='/rightarrow.png' alt="go back to projects" className='button' width={44} height={44} style={{ rotate: '90deg' }} ></Image></Link>
                </div>
                <div className="video_box" >
                    <motion.div animate={{ scale: [0, 1] }} transition={{ duration: 1, delay: 1 }}><video poster="/video.jpg" preload='auto' ref={videoRef} src='/video.mp4' className='bg' muted autoPlay loop alt="background video" loading='lazy' /></motion.div>
                    <AnimatePresence>
                        {clientInfo[0] ? (
                            <motion.div style={{ overflow: 'hidden' }} key="clientInfo1" transition={{ duration: 1 }} className="formularz_foremka">
                                <motion.div className='clientBox' exit={{ y: ['-10%', '0%', '-100%'] }} animate={{ y: ['-100%', '-10%'], transition: { duration: 0.5, type: 'spring' } }}>
                                    <motion.h2 animate={{ opacity: [0, 1], scale: [0, 1] }} exit={{ opacity: [1, 0], scale: [1, 0], transition: { delay: 0.2 } }} transition={{ duration: 1, delay: 0.3, type: 'spring' }}>{clienList[clientInfo[1]].h2}</motion.h2>
                                    <motion.div animate={{ opacity: [0, 1], scale: [0, 1] }} exit={{ opacity: [1, 0], scale: [1, 0], transition: { delay: 0.1 } }} transition={{ duration: 1, delay: 0.4, type: 'spring' }}  >
                                        <Image alt="Paweł Orłowski, Notariusz" src={clienList[clientInfo[1]].img} width={330} height={330}></Image>
                                    </motion.div>
                                    <motion.p alt="Joanna Bensari, Fotograf" animate={{ opacity: [0, 1], scale: [0, 1] }} exit={{ opacity: [1, 0], scale: [1, 0], transition: { delay: 0 } }} transition={{ duration: 1, delay: 0.5, type: 'spring' }}>
                                        {clienList[clientInfo[1]].p}
                                    </motion.p>
                                </motion.div>
                            </motion.div>
                        ) :
                            (
                                <>
                                    <motion.form ref={form} key="clientInfo" animate={isPhone ? {} : { opacity: [0, 1] }} transition={firstLoad ? { duration: 1, delay: 2.8 } : { duration: 1, delay: 0.5 }} className="formularz">

                                        <label htmlFor="name" placeholder="Proszę wprowadzić imię">Imię <span style={{ fontWeight: 700 }}>*</span> </label>
                                        <input ref={imie} maxLength='40' type="text" id='name' htmlFor="name" name='Imie' autoComplete="off" />

                                        <label htmlFor="nazwafirmy" placeholder="Proszę wprowadzić email.">e-mail <span style={{ fontWeight: 700 }}>*</span></label>
                                        <input ref={email} type="email" id='nazwafirmy' name='email' htmlFor="email" autoComplete="on" required />

                                        <label htmlFor="temat">Temat Rozmowy</label>
                                        <textarea ref={temat} type="text" id='temat' htmlFor="message" name='Nazwafirmy' autoComplete="off" placeholder="w czym możemy pomóc?" required />


                                        <button className='stylized-button' type='submit' onClick={sendEmail}> PRZEŚLIJ</button>
                                        <Link href='/politykaprywatnosci'><div className="polityka">*Przesyłając formularz akceptujesz <span> politykę prywatności </span></div></Link>
                                        <div className="phonediv">
                                            <a href='mailto:home@attadesign.pl'><div className="polityka">Nasz email <span> home@attadesign.pl </span></div></a>
                                            <a href='tel:+48531436420'><div>Telefon <span > +48 531&nbsp;436&nbsp;420</span></div></a>
                                            <Link target='blank' href='https://www.google.com/maps/place/Szlenkier%C3%B3w+2%2Fu3,+01-404+Warszawa/@52.2371761,20.9681115,17z/data=!3m1!4b1!4m5!3m4!1s0x471ecb7c72510091:0x386c1d335fbd9853!8m2!3d52.2371728!4d20.9706864?hl=pl-PL&entry=ttu'><div className="polityka">Adres <span> ul. Szlenkierów 2/U3, 01-181 Warszawa </span></div></Link>
                                        </div>
                                    </motion.form>

                                </>
                            )}
                    </AnimatePresence>

                    <div className="leftside">
                        <div className="text_box2">
                            <motion.h1 animate={{ opacity: [0, 1], scale: [0, 1] }} transition={{ duration: 1, delay: 2, type: 'spring' }}>Kontakt</motion.h1>
                            <motion.p animate={{ opacity: [0, 1], scale: [0, 1] }} transition={{ duration: 1, delay: 2, type: 'spring' }}>Skorzystaj z formularza lub skontaktuj się osobiście!</motion.p>
                        </div>
                        <div className="contact">
                            <motion.div animate={{ opacity: [0, 1], scale: [0, 1] }} transition={{ duration: 1, delay: 2, type: 'spring' }} className="rowholder"> <a href="tel:+48531436420" >+48 531&nbsp;436&nbsp;420</a><span><Image alt="phone icon" src='/phoneicon3.png' width={40} height={40} /></span></motion.div>
                            <motion.div animate={{ opacity: [0, 1], scale: [0, 1] }} transition={{ duration: 1, delay: 2.2, type: 'spring' }} className="rowholder"> <a href="mailto:home@attadesign.pl">home@attadesign.pl</a>  <span><Image alt="mail icon" src='/mailicon3.png' width={36} height={36} /></span> </motion.div>
                            <motion.div animate={{ opacity: [0, 1], scale: [0, 1] }} transition={{ duration: 1, delay: 2.4, type: 'spring' }} className="rowholder"> <p> ul. Szlenkierów 2/U3, 01-181 Warszawa</p><span><Image src='/locationicon2.png' alt="location icon" width={36} height={36} /></span></motion.div>
                        </div>
                        <motion.div animate={{ opacity: [0, 1] }} transition={{ duration: 1, delay: 2.6, type: 'spring' }} className="zaufali">
                            <div className="column">
                                <p>Nasi Klienci</p>
                                <div className="clients">
                                    <motion.div animate={{ opacity: [0, 1], scale: [0, 1] }} onMouseEnter={() => MouseEnter(0)} onMouseLeave={() => MouseLeave()} transition={{ duration: 1, delay: 2.8, type: 'spring' }}><Image alt="zdjęcie strony Asi Bensari" src='/JoannaBensari.webp' width={50} height={50} className="client"></Image ></motion.div>
                                    <motion.div animate={{ opacity: [0, 1], scale: [0, 1] }} onMouseEnter={() => MouseEnter(1)} onMouseLeave={() => MouseLeave()} transition={{ duration: 1, delay: 3, type: 'spring' }}><Image src='/IMG_2356.JPG' alt="zdjęcie strony Pawła Orłowskiego" width={50} height={150} className="client"></Image ></motion.div>
                                </div>
                            </div>
                            <div className="column">
                                <div className="linia"></div>
                            </div>
                        </motion.div>
                    </div>
                    <Image className='logocon' alt='ATTA Design Logo' src='/atta/logoATTAN.png' width={300} height={112.5} />
                </div>
                <div className="mb-10"></div>
            </div>
        </Transition >

        <Footer></Footer>

    </>
);
}