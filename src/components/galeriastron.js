'use client'
import Image from 'next/image';
import './webservice.scss';
import { motion, useInView, useSpring, motionValue } from 'framer-motion'
import { useRef, useEffect, useState } from 'react';

export default function Galeriastron() {

    let [isPhone, setIsPhone] = useState(false);
    let useX = useSpring(motionValue(0), { mass: 5, bounce: 1, stiffness: 100 })
    let useY = useSpring(motionValue(0), { mass: 5, bounce: 1, stiffness: 100 })
    let usePerspective1 = useSpring(motionValue(5), { mass: 5, bounce: 1, stiffness: 100 })
    const [counter, setCounter] = useState(5);
    const webimagecontainer = useRef(null)
    const isInView = useInView(webimagecontainer, { margin: "220px 100px 250px 220px" });
    let windowWidth = 0
    let windowHeight = 0

    useEffect(() => {
        windowHeight = window.innerHeight;
        windowWidth = window.innerWidth;
        if (windowWidth <= 700) {
            setIsPhone(true)
        }
        if (isInView) {
            document.addEventListener('mousemove', handleMouseMove)
        } else {
            document.removeEventListener('mousemove', handleMouseMove);
        }
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, [isInView]);

    function handlePerspectiveChange() {
        if (counter > 0) {
            usePerspective1.set(counter - 1)
            setCounter(counter - 1)
        }
        else {
            setCounter(counter - 1)
            usePerspective1.set(Math.abs(counter) + 1)
        }
    }

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        useY.set((clientY - windowHeight / 2) / -20)
        useX.set((clientX - windowWidth / 2) / -20)
    };

    let base_speed = 135
    let img_scalar = 2.3
    let galeria = [
        { img: 'site1', zposition: -40, width: 190 * img_scalar, height: 88 * img_scalar, rotation: '30deg' }, { img: 'site2', zposition: -23, width: 190 * img_scalar, height: 88 * img_scalar, rotation: '-30deg' },
        { img: 'site3', zposition: -44, width: 190 * img_scalar, height: 88 * img_scalar, rotation: '30deg' }, { img: 'site4', zposition: -42, width: 190 * img_scalar, height: 88 * img_scalar, rotation: '-30deg' }, { img: 'site5', zposition: -44, width: 190 * img_scalar, height: 88 * img_scalar, rotation: '0deg' },
        { img: 'site6', zposition: -33, width: 190 * img_scalar, height: 88 * img_scalar, rotation: '30deg' }, { img: 'site7', zposition: -45, width: 190 * img_scalar, height: 88 * img_scalar, rotation: '-30deg' }, { img: 'site8', zposition: -33, width: 190 * img_scalar, height: 88 * img_scalar, rotation: '0deg' },
        { img: 'site9', zposition: -30, width: 190 * img_scalar, height: 88 * img_scalar, rotation: '30deg' }, { img: 'site10', zposition: -59, width: 190 * img_scalar, height: 88 * img_scalar, rotation: '-30deg' },
        { img: 'site11', zposition: -55, width: 190 * img_scalar, height: 88 * img_scalar, rotation: '30deg' }, { img: 'site12', zposition: -50, width: 190 * img_scalar, height: 88 * img_scalar, rotation: '-30deg' },
        { img: 'site13', zposition: -39, width: 190 * img_scalar, height: 88 * img_scalar, rotation: '30deg' }, { img: 'site15', zposition: -31, width: 190 * img_scalar, height: 88 * img_scalar, rotation: '-30deg' }]

    function LoadGallery(galeria) {
        let _galery = []
        let randprocent = Math.random() * 100;
        let randprocent2 = (Math.random() * 40) - 20;


        galeria.forEach((element, index) => {
            let speed = 10 / element.zposition * -base_speed
            randprocent = Math.random() * 100;
            randprocent2 = (Math.random() * 40) - 20;
            if (isPhone) {
                if(index % 2 == 0)
                _galery.push(
                    <>
                        <motion.div className='cosmicflashes' key={index} animate={isInView ? { z: [element.zposition / 3, 6], opacity: [0, 1, 1, 1], rotateX: '11deg' } : {}} transition={{ duration: speed / 2 / 1.2, repeat: Infinity }} style={{ left: `${randprocent + index / 10}%`, top: `${randprocent2 + index * 2}%` }}> </motion.div>
                        <motion.div className='cosmicflashes' key={index + 300} animate={isInView ? { z: [element.zposition / 3, 6], opacity: [1, 1, 1, 1], rotateX: '11deg' } : {}} transition={{ duration: speed / 2 / 1.3, repeat: Infinity }} style={{ left: `${randprocent + index / 20}%`, top: `${randprocent2 + index / 2}%` }}> </motion.div>
                        <motion.div onClick={handlePerspectiveChange} animate={{ z: [element.zposition, 1], opacity: [0, 0, 0, 1, 1, 1, 0] }} transition={{ duration: speed, repeat: Infinity }} className={`imageholder ${element.img}`}><Image src={`/${element.img}.png`} alt={element.img} key={index + 50} width={element.width} height={element.height} style={{ transform: `translateX(${element.rotation})` }}></Image></motion.div>
                    </>
                )
            } else {
                _galery.push(
                    <>
                        <motion.div className='cosmicflashes' key={index} animate={isInView ? { z: [element.zposition / 3, 6], opacity: [0, 1, 1, 1], rotateX: '11deg' } : {}} transition={{ duration: speed / 2 / 1.2, repeat: Infinity }} style={{ left: `${randprocent + index / 10}%`, top: `${randprocent2 + index * 2}%` }}> </motion.div>
                        <motion.div className='cosmicflashes' key={index + 300} animate={isInView ? { z: [element.zposition / 3, 6], opacity: [1, 1, 1, 1], rotateX: '11deg' } : {}} transition={{ duration: speed / 2 / 1.3, repeat: Infinity }} style={{ left: `${randprocent + index / 20}%`, top: `${randprocent2 + index / 2}%` }}> </motion.div>
                        <motion.div className='cosmicflashes' key={index + 200} animate={isInView ? { z: [element.zposition / 3, 6], opacity: [1, 1, 1, 1], rotateX: '11deg' } : {}} transition={{ duration: speed / 2, repeat: Infinity }} style={{ right: `${randprocent + index * 3}%`, bottom: `${randprocent2 + index * 2}%` }}> </motion.div>
                        <motion.div className='cosmicflashes' key={index + 100} animate={isInView ? { z: [element.zposition / 3, 6], opacity: [0, 1, 1, 1], rotateX: '11deg' } : {}} transition={{ duration: speed / 2, repeat: Infinity }} style={{ right: `${randprocent + index * 20}%`, bottom: `${randprocent2 + index / 2}%` }}> </motion.div>
                        <motion.div onClick={handlePerspectiveChange} animate={{ z: [element.zposition, 1], opacity: [0, 0, 0, 1, 1, 1, 0] }} transition={{ duration: speed, repeat: Infinity }} className={`imageholder ${element.img}`}><Image src={`/${element.img}.png`} alt={element.img} key={index + 50} width={element.width} height={element.height} style={{ transform: `translateX(${element.rotation})` }}></Image></motion.div>
                    </>
                )
            }
        });

        return <>{_galery}</>
    }

    return (
        <motion.div ref={webimagecontainer} className="webphotos" style={{ x: useX, y: useY, perspective: usePerspective1, transformStyle: 'preserve-3d' }} >
            {LoadGallery(galeria)}
        </motion.div>
    )
}
