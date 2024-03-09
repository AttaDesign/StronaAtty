'use client'

import './aboutus.scss'
import { motion, useInView } from 'framer-motion'
import Image from "next/image"
import { useEffect, useRef } from 'react';

export default function Icon({ src, height }) {

    const inforef2 = useRef(null)
    const isInView2 = useInView(inforef2, {
        once: true,
        margin: "0px 0px -300px 0px"
    });
 
    return (
        <>
            <motion.div animate={isInView2 ? { opacity: [0, 1] } : { opacity: [1, 0] }} transition={{ duration: 0.4, type: 'spring', delay: 0.1 }}>
                <Image alt='web icon' src={src} width={30} height={30} className='wwwicon'></Image>
            </motion.div>
            <motion.div ref={inforef2} initial={{marginBottom: '15vh'}} animate={isInView2 ? { height: ['0vh', '15vh'], marginBottom:['15vh','0vh'] } : { height: 0 }} transition={{ duration: 2, type: 'spring' }} className='line2' style={{ backgroundImage: 'linear-gradient(to top, black, white,black)', width: '2px' }}></motion.div>
        </>
    )
}
