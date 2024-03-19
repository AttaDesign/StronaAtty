'use client'
import styles from './page.module.css'
import { useRef, useEffect, useState } from 'react';
import { useScroll, motion, useTransform, useSpring, progress } from 'framer-motion';


export default function AnimatedText({ text }) {
  const phrase = text;
  let windowWidth = 0
  let windowHeight = 0
  let [isPhone, setIsPhone] = useState(false)
  let refs = useRef([]);
  const container = useRef(null);
  let body = useRef([]);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['60% 100%', '0% 42%']
  })

  useEffect(() => {
    windowHeight = window.innerHeight;
    windowWidth = window.innerWidth;
    if (windowWidth <= 700) {
      setIsPhone(true)
    }
  }, [])
  
  const splitWords = (phrase) => {
    const words = phrase.split(" ");
    let body = [];
    phrase.split(" ").forEach((word, i) => {
      const start = i / words.length;
      const end = start + 1 / words.length;
      const letters = splitLetters(word);
      body.push(<Word key={i} range={[start, end]} progress={scrollYProgress}>{letters}</Word>)
    })
    return body
  }

  const Word = ({ children, range, progress }) => {
    let opacity = useTransform(progress, range, [0, 1]); 
    
    return (
      <motion.p style={{opacity: opacity, scale: opacity }} >{children}</motion.p>
    )
  }

  const splitLetters = (word) => {
    let letters = []
    word.split("").forEach((letter, i) => {
      letters.push(<span key={letter + "_" + i} ref={el => { refs.current.push(el) }}>{letter}</span>)
    })
    return letters;
  }

  return (
    <main ref={container} className={styles.main}>
      <div ref={body} className={styles.body}>
        { isPhone ? <div style={{textWrap: 'wrap',fontSize: '18px', lineHeight: '34px', wordSpacing: '3px'}}>{phrase}</div> : splitWords(phrase) 
          

        }
      </div>
    </main>
  )
}