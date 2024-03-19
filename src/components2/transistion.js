'use client'
import { easeIn, motion, AnimatePresence } from 'framer-motion'
import './transistion.scss'


export default function transistion({ children }) {

    const anim = (variants) => {
        return {
            initial: "initial",
            animate: "enter",
            exit: "exit",
            variants
        }
    }


    const opacity = {

        initial: {
            opacity: 0
        },
        enter: {
            transition: { duration: 2, delay: 1.2 },
            opacity: 1
        },
        exit: {
            opacity: 0
        }
    }
    const schodek1 = {
        initial: {},
        exit: {
            y: ['-100vh', '0vh']
        },
        enter: {
            y: ['0vh', '100vh'],

        }
    }

    let stairs = []
    function renderStairs() {
        for (let i = 0; i < 5; i++) {
            stairs.push(

                <motion.div {...anim(schodek1)} key={i} transition={{ duration: 1, ease: [0.65, 0, 0.35, 1], delay: i * 0.05 }} style={{ left: `${i * 2}0vw`, background: 'black', borderTop: '1px solid rgba(250, 214, 184, 0.693)' }} className='schodki'>

                </motion.div>

            )
        }
        return <><AnimatePresence>{stairs}</AnimatePresence></>;
    }


    return (
        <>
                <motion.div {...anim()}>
                    {renderStairs()}
                </motion.div>
                <motion.div  className='page'>
                    {children}
                </motion.div>
            
        </>
    )
}
