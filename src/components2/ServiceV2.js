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
                <motion.h1 initial={isPhone ? {} : { opacity: 0 }} animate={isPhone ? {} : View ? { opacity: 1 } : {}} transition={{ duration: 1 }} className="heading" >Services</motion.h1>

                <div className="uslugi p-8" >

                    <div className="group">
                        <motion.div ref={projects} initial={isPhone ? {} : { opacity: 0, scale: 0 }} animate={isPhone ? {} : View ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 1.5, delay: 0, type: 'spring' }} className="block">
                            <Image alt='icon' height={90} width={90} src={'/Id.png'} className="svg"></Image>

                            <div className="text_of_block">
                                <div className="caption">
                                    Buissnes Websites
                                </div>
                                <div className="bodytext2">
                                    <p>
                                        We'll design a website to <br></br>
                                        match your client's profile,  <br></br>
                                        With a clear sales strategy,<br></br>
                                        your success will compile.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div initial={isPhone ? { opacity: 1 } : { opacity: 0, scale: 0 }} animate={isPhone ? {} : View ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 1.5, delay: 0.2, type: 'spring' }} className="block">
                            <Image alt='icon' height={93.4} width={93.4} src={'/Basket.png'} className="svg2"></Image>
                            <div className="text_of_block">
                                <div className="caption">
                                    E-COMMERS
                                </div>
                                <div className="bodytext2">
                                    <p>
                                    We'll design an intuitive<br></br>store so customers can easily <br></br>make purchases with <br></br>fluidity.
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
                                    Our landing pages captivate<br></br>attention and retain<br></br>customers for longer.</p>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div initial={isPhone ? {} : { opacity: 0, scale: 0 }} animate={isPhone ? {} : View ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 1.5, delay: 0.3, type: 'spring' }} className="block">
                            <Image  alt='icon' height={93.4} width={93.4} src={'/Select.png'} className="svg4"></Image>

                            <div className="text_of_block">
                                <div className="caption">
                                    SEO and Apps
                                </div>
                                <div className="bodytext2">
                                    <p>We repair websites and<br></br> undertake challenging <br></br>projects that require the<br></br> entire team of programmers.<br></br></p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                    <div className="horLine">      </div>
                    <motion.div initial={isPhone ? {} : { opacity: 0 }} animate={isPhone ? {} : View ? { opacity: 1 } : {}} transition={{ duration: 1.5, delay: 0.4 }} className="layerblur"></motion.div>


                </div>
                <Link href='/eng/contact' className='unselectable ' onClick={() => { if (!isPhone) { setOtherPage(true) } }}>

                    {otherPage ? null : <AnimatePresence mode='wait'>
                        <motion.div exit={isPhone ? {} : { opacity: 0 }} initial={isPhone ? {} : { opacity: 0 }} animate={isPhone ? {} : View ? { opacity: 1 } : {}} transition={{ duration: 1.5, delay: 0.5, type: 'spring' }} className="konsultacja">Book a FREE Call</motion.div>
                    </AnimatePresence>}
                </Link>

            </motion.div >
        </div >
    )
}
export default ServiceV2
