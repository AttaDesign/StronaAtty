'use client'
import './herosection.scss';
import  {motion, } from 'framer-motion';



export default function Line() {
  return (
    <>
    <motion.div animate={{height: ['0vh', '35vh']}} transition={{duration: 2, type: 'spring' }} className='line' style={{backgroundImage: 'linear-gradient(to top, black, white,black)'}}></motion.div>
    </>
  )
}
