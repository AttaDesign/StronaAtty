'use client'

import './Servicesv2.scss'
import { AnimatePresence, motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

function ServiceV2() {
    const [isPhone, setIsPhone] = useState(false);

    useEffect(() => {


        if (window.innerWidth < 700) {
            setIsPhone(false);
        }

    }, []);

    const projects = useRef()
    const View = useInView(projects, { once: true, margin: '0px 0px -300px 0px' })
    const [otherPage, setOtherPage] = useState(false)

    return (
        <div className="mainwrap" id='servicesV2' >
            <motion.div animate={isPhone ? {} : otherPage ? { opacity: 0 } : {}} transition={{ duration: 1 }} className="services-main" >

                <div className="uslugi p-8" >

                    <div className="group">
                        <motion.div ref={projects} initial={isPhone ? {} : { opacity: 0, scale: 0 }} animate={isPhone ? {} : View ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 1.5, delay: 0, type: 'spring' }} className="block">
                            <Image alt='icon' height={90} width={90} src={'/Id.png'} className="svg"></Image>

                            <div className="text_of_block">
                                <div className="caption">
                                    Witryny Biznesowe
                                </div>
                                <div className="bodytext2">
                                    <p>
                                        Stworzymy stronę zgodną z <br></br>
                                        profilem twojego klienta  <br></br>oraz
                                        jasno określoną <br></br>strategią 
                                        sprzedaży.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div initial={isPhone ? { opacity: 1 } : { opacity: 0, scale: 0 }} animate={isPhone ? {} : View ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 1.5, delay: 0.2, type: 'spring' }} className="block">
                            <Image alt='icon' height={93.4} width={93.4} src={'/Basket.png'} className="svg2"></Image>
                            <div className="text_of_block">
                                <div className="caption">
                                    Sklepy internetowe
                                </div>
                                <div className="bodytext2">
                                    <p>
                                       Zaprojektujemy intuicyjny <br></br>sklep tak aby klient z <br></br>łatwością mógł dokonywać<br></br>zakupów
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                    <div className="group">
                        <motion.div initial={isPhone ? {} : { opacity: 0, scale: 0 }} animate={isPhone ? {} : View ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 1.5, delay: 0.1, type: 'spring' }} className="block">
                            <Image alt='icon' height={93.4} width={93.4} src={'/Graph.png'} className="svg3"></Image>

                            <div className="text_of_block">
                                <div className="caption">
                                    Landing Page
                                </div>
                                <div className="bodytext2">
                                    <p>
                                    Nasze landingi przykuwają<br></br> uwagę oraz zatrzymują <br></br>klientów na dłużej</p>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div initial={isPhone ? {} : { opacity: 0, scale: 0 }} animate={isPhone ? {} : View ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 1.5, delay: 0.3, type: 'spring' }} className="block">
                            <Image  alt='icon' height={93.4} width={93.4} src={'/Select.png'} className="svg4"></Image>

                            <div className="text_of_block">
                                <div className="caption">
                                    SEO oraz Aplikacje
                                </div>
                                <div className="bodytext2">
                                    <p>Naprawiamy strony  oraz<br></br> wykonujemy trudniejsze<br></br> projekty wymagające<br></br> całego zespołu<br></br>  programistów</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                    <div className="horLine">      </div>
                    <motion.div initial={isPhone ? {} : { opacity: 0 }} animate={isPhone ? {} : View ? { opacity: 1 } : {}} transition={{ duration: 1.5, delay: 0.4 }} className="layerblur"></motion.div>


                </div>
            </motion.div >
        </div >
    )
}
export default ServiceV2
