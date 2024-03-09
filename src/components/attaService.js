'use client'
import {motion, useInView} from 'framer-motion'
import Image from 'next/image';
import {useRef} from 'react'

export default function AttaIMG() {
    const ref1 = useRef()
    let visible = useInView(ref1, {once: true})
  return (
    <motion.div animate={ visible ? { opacity: 1 } : {opacity: 0}} transition={{duration: 0.5, type: 'eseaIn' , delay: 0.3}}  >
          <Image alt="Atta Design Logo" ref={ref1} src='/atta/logoATTAN.png' className='logo22' width={300} height={102} ></Image>
    </motion.div>
  )
}
