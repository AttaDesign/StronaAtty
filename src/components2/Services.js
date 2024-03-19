'use client'
import './services.scss'

import Line from './Line.js';
import { AnimatePresence, motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

export default function Services() {
    const projects = useRef()
    const View = useInView(projects, { once: true, margin: '0px 0px -300px 0px' })
    const [otherPage, setOtherPage] = useState(false)




    return (
        <>
            <div className='top_blur'></div>
            <motion.div animate={otherPage ? { opacity: 0 } : {}} transition={{ duration: 1 }} className="desktop-2" id='services'  >
                <div className="desktop-2-child"></div>
                <motion.h1 initial={{ opacity: 0 }} animate={View ? { opacity: 1 } : {}} transition={{ duration: 1 }} className="projektujemy" >Projektujemy</motion.h1>
                <section className="rectangle-parent">
                    <motion.div initial={{ opacity: 0 }} animate={View ? { opacity: 1 } : {}} transition={{ duration: 1 }} className="frame-child"></motion.div>
                    <motion.div initial={{ opacity: 0 }} animate={View ? { opacity: 1 } : {}} transition={{ duration: 1.5, delay: 0.4 }} className="layerblur"></motion.div>
                    <div className="witryny-biznezowe-parent" >
                        <motion.div ref={projects} initial={{ opacity: 0, scale: 0 }} animate={View ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 1.5, delay: 0, type: 'spring' }} className="witryny-biznezowe">
                            <div className="witryny-biznezowe-child"></div>
                            <div className="landing-page-frames">
                                <div className="kwadra">
                                    <div className="additional-frames">
                                        <div className="additional-frames-child"></div>
                                        <div className="background-rectangle"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="business-website-frame">
                                <b className="witryny-biznesowe">
                                    <p className="witryny-biznesowe1">Witryny Biznesowe</p>
                                    <p className="blank-line">&nbsp;</p>
                                </b>
                                <div className="client-remember-frame">
                                    <div className="stworzymy-stron-zgodn-container">
                                        <p className="pas">Stworzymy stronę zgodną z
                                            profilem twojego klienta oraz
                                            jasno określoną strategią
                                            sprzedaży.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, scale: 0 }} animate={View ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 1.5, delay: 0.2, type: 'spring' }} className="landing">
                            <div className="landing-child"></div>
                            <div className="trjk-wrapper">
                                <Image
                                    className="trjk-icon"
                                    loading="eager"
                                    alt=""
                                    src="./trjk.svg"
                                    width={200}
                                    height={200}
                                />
                            </div>
                            <div className="landing-page-parent">
                                <div className="landing-page" style={{ marginLeft: '1px' }}>Landing Page</div>
                                <div className="zaprojektujemy-go-tak-by-twj-wrapper" style={{ marginTop: '1px' }}>
                                    <div className="pas">
                                        Zaprojektujemy go tak, by twój klient zapamiętał o twoim
                                        produkcie.
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, scale: 0 }} animate={View ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 1.5, delay: 0.1, type: 'spring' }} className="witryny-biznezowe1">
                            <div className="witryny-biznezowe-item"></div>
                            <div className="koa-wrapper">
                                <Image
                                    className="koa-icon"
                                    loading="eager"
                                    alt=""
                                    src="./koa.svg"
                                    width={200}
                                    height={200}
                                />
                            </div>
                            <div className="sklepy-internetowe-parent">
                                <div className="sklepy-internetowe" style={{ marginBottom: '-5px' }}>Sklepy internetowe</div>
                                <div className="tworzymy-idealne-landingi-ktr-wrapper" >
                                    <div className="pas">
                                        Tworzymy idealne landingi które konwertują leady z 50%
                                        skutecznością
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, scale: 0 }} animate={View ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 1.5, delay: 0.3, type: 'spring' }} className="landing1">
                            <div className="landing-item"></div>
                            <div className="optymaliza-wrapper">
                                <Image
                                    className="optymaliza-icon"
                                    loading="eager"
                                    alt=""
                                    src="./optymaliza.svg"
                                    width={200}
                                    height={200}
                                />
                            </div>
                            <div className="seo-oraz-aplikacje-parent">
                                <div className="seo-oraz-aplikacje">SEO oraz Aplikacje</div>
                                <div className="pas">
                                    Zaprojektujemy go tak, by twój klient zapamiętał o twoim
                                    produkcie.
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>
                <Link href='/contact' onClick={()=>setOtherPage(true)}>
                   { otherPage ? null : <AnimatePresence mode='wait'>
                        <motion.div exit={{opacity: 0}} initial={{ opacity: 0 }} animate={View ? { opacity: 1 } : {}} transition={{ duration: 1.5, delay: 0.5, type: 'spring' }} className="free-consultation-label">
                            <div className="free-consultation-label-child"></div>
                            <div className="darmowa-konsultacja">BEZPŁATNA KONSULTACJA</div>
                        </motion.div>
                    </AnimatePresence>} 
                </Link>
            </motion.div>
        </>
    )
}
