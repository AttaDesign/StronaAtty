'use client'
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import './webservice.scss';
import Icon from './icon.js';
import Galeria from './galeriastron.js'
import AnimatedText from './Words';
import AttaIMG from './attaService';

export default function Webservice() {

  let [press, setPress] = useState(false)

 
  function handleClick(e) {
    setPress(true)
    e.preventDefault();
    setTimeout(() => {
      setPress(false)

    },800)
    setTimeout(() => {
      document.getElementById("servicesV2").scrollIntoView({behavior: "smooth", block: "start"});
    }, 100)
  }

  return (
    <>
      <motion.div id='webservice' animate={press ? { scale: [1, 0] } : { scale: 1 }} >
        <div className="box">
          <div className="text-box">
            <AttaIMG></AttaIMG>
            <AnimatedText text="What do we do? We specialize in crafting websites, applications, and online stores that not only boast visually stunning designs across all devices but also serve as powerful tools to drive your business towards its objectives. From implementing effective SEO strategies to ensuring robust security measures and providing ongoing support, our comprehensive services cater to every aspect of your digital presence, covering all your needs and ensuring your success in the online realm."></AnimatedText>
            <br></br>
            <Link href='/contact' id='#contact_link' className='unselectable' ><Image src='/rightarrow.png' alt="button" onClick={handleClick} className='button unselectable' width={44} height={44} style={{rotate: '90deg'}} ></Image></Link>
          </div>
        </div>
        <div className="service_container">
          <Icon src='/WWW.png' height='15vh' ></Icon>
          <Galeria></Galeria>
        </div>
      </motion.div>
    </>
  )
}
