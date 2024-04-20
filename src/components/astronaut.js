'use client'
import Image from 'next/image';
import { useSpring, motion, motionValue, useInView, useScroll, useMotionValueEvent, delay } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const Astronaut = () => {
    let width = 0;
    let height = 0;
    const { scrollY } = useScroll()
    const ref = useRef(null)
    const isInView = useInView(ref)
    let [hidden, sethidden] = useState(false)
    let [SCALAR, setSCALAR] = useState(false)

    const [isPhone, setIsPhone] = useState(false);

  useEffect(() => {

        
        if(window.innerWidth<1000){
            setIsPhone(true);
        }

  }, []);

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest >= 30 && latest <= 1700) {
            sethidden(true)
            setSCALAR(false)
        }
        else if (latest >= 1400 && latest <= 2200) {
            sethidden(false)
            setSCALAR(true)

        }
        else {
            sethidden(false)
            setSCALAR(false)
        }
    })

    let images = {
        astronaut: { x: useSpring(motionValue(0), { damping: 5, stiffness: 10 }), y: useSpring(motionValue(0), { damping: 5, stiffness: 10 }) },
        oxygen: { x: useSpring(motionValue(0), { damping: 5, stiffness: 10 }), y: useSpring(motionValue(0), { damping: 5, stiffness: 10 }) },
        asteroid1: { x: useSpring(motionValue(0), { damping: 5, stiffness: 10 }), y: useSpring(motionValue(0), { damping: 5, stiffness: 10 }) },
        asteroid2: { x: useSpring(motionValue(0), { damping: 5, stiffness: 10 }), y: useSpring(motionValue(0), { damping: 5, stiffness: 10 }) },
        asteroid3: { x: useSpring(motionValue(0), { damping: 5, stiffness: 10 }), y: useSpring(motionValue(0), { damping: 5, stiffness: 10 }) }
    }

    const handleMouseMove = (e) => {
        if (!hidden && !isPhone) {
            const { clientX, clientY } = e;
            images.astronaut.x.set((clientX - width / 2) / 40);
            images.astronaut.y.set((clientY - height / 2) / 40);

            images.oxygen.x.set((clientX - width / 2) / -60);
            images.oxygen.y.set((clientY - height / 2) / -60);

            images.asteroid1.x.set((clientX - width / 2) / -60);
            images.asteroid1.y.set((clientY - height / 2) / -60);

            images.asteroid2.x.set((clientX - width / 2) / 10);
            images.asteroid2.y.set((clientY - width / 2) / 10);

            images.asteroid3.x.set((clientX - width / 2) / 9);
            images.asteroid3.y.set((clientY - height / 2) / 9);


        }
    };

    useEffect(() => {
        width = window.innerWidth;
        height = window.innerHeight;

        if (isInView) {
            document.addEventListener('mousemove', handleMouseMove);
        } else {
            document.removeEventListener('mousemove', handleMouseMove);
        }

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, [isInView]);

    return (
        <motion.div >
            
            <motion.div className='img_container pointer-events-none' animate={hidden ? { scale: 0 } : SCALAR ? { scale: 0.66 } : { scale: 1 }} transition={{ delay: 0.1, type: 'spring' }} style={ isPhone ? {  height: 'auto', width: 'auto', position: 'fixed', zIndex: 2, bottom: '16%', right: '28%'} : {  height: 'auto', width: 'auto', position: 'fixed', zIndex: 2, bottom: '36%', right: '28%', x: images.asteroid1.x, y: images.asteroid1.y }}>
                <Image id='meteo1' src='/asteroida_faded.png' width={27} height={27} alt='' loading="eager"></Image>
            </motion.div>
            <motion.div className='img_container pointer-events-none' animate={hidden ? { scale: 0 } : SCALAR ? { scale: 0.66 } : { scale: 1 }} transition={{ delay: 0.13, type: 'spring' }} style={isPhone ? {height: 'auto', width: 'auto', position: 'fixed', zIndex: 2, bottom: '13%', right: '29%' } :  { height: 'auto', width: 'auto', position: 'fixed', zIndex: 2, bottom: '23%', right: '29%' , x: images.asteroid3.x, y: images.asteroid3.y }}>
                <Image id='meteo3' src='/asteroida3.png' width={30} height={30} alt='' loading="eager"></Image>
            </motion.div>
            <motion.div className='img_container pointer-events-none' animate={hidden ? { scale: 0 } : SCALAR ? { scale: 0.66 } : { scale: 1 }} transition={{ delay: 0.12, type: 'spring' }} style={ isPhone ? { height: 'auto', width: 'auto', position: 'fixed', zIndex: 2, bottom: '10%', right: '10%' } :  { height: 'auto', width: 'auto', position: 'fixed', zIndex: 2, bottom: '33%', right: '19%', x: images.oxygen.x, y: images.oxygen.y }}>
                <Image id='butlo' src='/butla2.png' width={46} height={46} alt='' loading="eager"></Image>
            </motion.div>
            <motion.div ref={ref} className='img_container pointer-events-none' animate={hidden ? { scale: 0 } : SCALAR ? { scale: 0.66 } : { scale: 1 }} transition={{ delay: 0.24, type: 'spring' }} style={isPhone ? {  height: 'auto', width: 'auto', position: 'fixed', zIndex: 2, bottom: '10%', right: '8%' } :  { height: 'auto', width: 'auto', position: 'fixed', zIndex: 2, bottom: '30%', right: '22%', x: images.astronaut.x, y: images.astronaut.y }}>
                <Image id='astro' src='/astronautR2.png' width={83} height={83} alt=''  loading="eager"></Image>
            </motion.div>
            <motion.div className='img_container pointer-events-none' animate={hidden ? { scale: 0 } : SCALAR ? { scale: 0.66 } : { scale: 1 }} transition={{ delay: 0.14, type: 'spring' }} style={  { position: 'fixed', zIndex: 2, bottom: '19%', right: '22%', x: images.asteroid2.x, y: images.asteroid2.y, height: 'auto', width: 'auto' }} >
                <Image id='meteo2' src='/asteroida2.png' width={62} height={62} alt='' loading="eager"></Image>
            </motion.div>
        </motion.div>
    );
}

export default Astronaut;
