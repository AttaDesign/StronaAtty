'use client'
import { easeIn, motion, spring } from 'framer-motion'

export default function Comet() {
    return (
        <>
            <motion.div animate={{ x: '1000px', y: '1000px',opacity: [1,0] }} transition={{ duration: 1, delay: 3, type: easeIn }} className='comet absolute -top-7 z-30 left-1/3'>
                <div className='w-1 h-1  rounded-full bg-white z-30 '></div>
            </motion.div>
            <motion.div animate={{ x: '-1000px', y: '1000px',opacity: [1,0] }} transition={{ duration: 1, type: easeIn }} className='comet absolute -top-7 z-30 right-1/3'>
                <div className='w-1 h-1  rounded-full bg-white z-30 '></div>
            </motion.div>
        </>
    )
}
