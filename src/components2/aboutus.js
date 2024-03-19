'use client'
import Image from 'next/image';
import './aboutus.scss'
import { useInView, motion, spring, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';
import Line from './Line.js';
import AnimatedText from './Words.js'
import Cosmicdust from './cosmicdust';

export default function Aboutus() {
  const inforef = useRef(null)
  const inforef2 = useRef(null)
  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: inforef2,
    offset: ['25% 75%', '20% 20%']
  })
  const isInView = useInView(inforef,
    {
      once: true,
      margin: "0px 0px -300px 00px"
    })
  const isInView2 = useInView(inforef2,
    {
      once: true,
      margin: "0px 0px -300px 00px"
    })


    

  const paralax = useTransform(scrollYProgress, [0, 1], [0, -150])
  const paralax2 = useTransform(scrollYProgress, [0, 1], [0, -70])

  return (
    <div id='about-us'  >
      <div ref={container} className="container">
        <motion.div className='icon_container' animate={isInView ? { opacity: 1 } : { opacity: [1, 0] }} transition={{ duration: 0.4, type: spring, delay: 0.1 }} >
          <Image ref={inforef} src='/infowhite.png' alt="info icon" className='infologo' style={{ zIndex: '21' }} width={50} height={50}></Image>
        </motion.div>
        <motion.div initial={{marginBottom: '15vh'}} animate={isInView ? { height: ['0vh', '15vh'] ,marginBottom: ['15vh', '0vh']} : { height: 0}} transition={{ duration: 2, type: 'spring' }} className='line2' style={{ backgroundImage: 'linear-gradient(to top, black, white,black)' }}></motion.div>
        <motion.div animate={{ opacity: 1 }} transition={{ duration: 0.5}} className='customStyle'>
          <motion.div className="images" initial={{opacity: 0}} animate={isInView ? { opacity: 1 } : {}} transition={{delay: 0.3, duration: 1}} >
            <motion.div  className='stockimage' style={{ y:paralax }}>
              <Image src="/sergey-zolkin-_UeY8aTI6d0-unsplash.jpg" alt="stock image" width={350} height={190} ></Image>
            </motion.div>
            <motion.div  className='attaimage' style={{ y: paralax2 }}>
              <Image src='/IMG_20240210_192157.jpg' alt="First photo of Atta Web Design" width={400} height={190} ></Image>
            </motion.div>
          </motion.div>
          <div style={{ display: 'flex', alignItems: 'center', position: 'relative', flexDirection: 'column', gap: '15px', width: '50%' }} >
            
           <AnimatedText text="We are a creative team dedicated to crafting exceptional websites. Our projects not only reflect precision but also adorn your company's image with elegance and originality. Our web agency is where innovation meets professionalism, and ideas transform into functional online solutions."></AnimatedText>
          
            
            {/* <Image src="/StockSnap_CO08LAFBTH.png" width={300} height={190} style={{position:'absolute', right: '-50%', bottom: '-50%'}}></Image>*/}
          </div>
        </motion.div>
      </div>
      <motion.div initial={{marginBottom: '35vh'}} ref={inforef2} animate={isInView2 ? { height: ['0vh', '35vh'] , marginBottom: ['35vh', '0vh'] } : { height: 0 }} transition={{ duration: 2, type: 'spring' }} className='line2' style={{ backgroundImage: 'linear-gradient(to top, black, white,black)'}}></motion.div>
    </div>
  )
}
