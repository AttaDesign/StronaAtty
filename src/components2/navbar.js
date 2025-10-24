'use client'
import './navbar.scss'
import { useState, useRef } from 'react'
import { animate, motion, spring, useAnimate } from "framer-motion"
import { Source_Code_Pro } from 'next/font/google'
import Link from 'next/link'

const sourceCode = Source_Code_Pro({
    subsets: ['latin'],
    weight: ['400', '300', '200', '600']
})

const Navbar = () => {

    const sidebar = {
        'open': {
            transition: { duration: 1, type: 'spring' },
            width: '100vw',
            height: '100vh',
            borderRadius: '0px',


        },
        'close': {
            transition: { duration: 1, type: 'spring' },
            height: '0vh',
            width: '100vw',


        }
    }
    const [showMenu, setShowMenu] = useState(false);
   function handleLinkClick(e, id) {
    e.preventDefault();
    setShowMenu(false);
    // Correct usage for scrolling into view:
    document.querySelector(id).scrollIntoView({
        behavior: 'smooth'
    });
}

    function HandleMenu() {
        setShowMenu(!showMenu);
    };
    let [scope, animate] = useAnimate();
    return (
        <div className={sourceCode.className}>
            <div className='burger fixed' onClick={HandleMenu}>
                <motion.span animate={showMenu ? { opacity: 0 } : { opacity: 1 }}></motion.span >
                <motion.span animate={showMenu ? { rotateY: '130deg', rotateZ: '145deg' } : ''}></motion.span >
                <motion.span animate={showMenu ? { rotateY: '130deg', rotateZ: '-145deg', translateY: '-10px' } : ''}></motion.span>
            </div>
            <motion.div ref={scope} className='menu fixed overflow-hidden' initial={{ height: '0vh' }} animate={showMenu ? 'open' : 'close'} variants={sidebar}>

                <div className='topbar'><div style={{ fontSize: '12px', color: 'black', letterSpacing: '1px', textAlign: 'center' }}>BS: $navbar extended</div><div className='circle' onClick={() => (animate(scope.current, { scale: ['150%', '100%'] }))}></div><div className='circle' onClick={() => (animate(scope.current, { scale: ['150%', '100%'], opacity: [0, 1], backdropFilter: 'grayscale(100%) blur(10px)' }))}></div><div className='circle' onClick={HandleMenu}></div></div>
                <nav className='menu_box'>

               
                        <div className={showMenu ? 'numb animation_1' : 'numb'} style={{ marginBottom: '10px' }}>$BensariSolution: &#123;	</div>
                    

                    <ul className={showMenu ? 'start' : ''}>
                        <li className="animation_1_1">
                            <Link  href="/" className='row menu_link'><span aria-hidden="true" className='numb'>&nbsp; &nbsp;0&#62;</span>Home</Link>
                        </li>
                        <li className="animation_1_1">
                            <Link  onClick={(e)=>handleLinkClick(e,'#about-us')} href="/#about-us" className='row menu_link'><span aria-hidden="true" className='numb'>&nbsp; &nbsp;1&#62;</span>About us</Link>
                        </li>
                        <li className="animation_1_1">
                            <Link  onClick={(e)=>handleLinkClick(e,'#servicesV2')} href="/#servicesV2" className='row menu_link'><span aria-hidden="true" className='numb'>&nbsp; &nbsp;2&#62;</span>Services</Link>
                        </li>
                        
                        <li className="animation_1_1">
                            <Link  onClick={()=>setShowMenu(false)} href="https://www.attadesign.pl/#ContactUs" className='row menu_link'><span aria-hidden="true" className='numb'>&nbsp; &nbsp;4&#62;</span>Contact</Link>
                        </li>
                        <li>
                        </li>
                    </ul>

{/*                  
                        <div className={showMenu ? 'numb animation_2' : 'numb'} style={{ margin: '16px 0px 10px 0px' }}>$Services: &#123;</div>
                

                    <ul className={showMenu ? 'start' : ''}>
                        <li className="animation_1_2">
                            <Link  onClick={()=>setShowMenu(false)} href="/contact" className='row menu_link'><span aria-hidden="true" className='numb'>&nbsp; &nbsp;0&#62;</span>E-COMMERS</Link>
                        </li>
                        <li className="animation_1_2">
                            <Link  onClick={()=>setShowMenu(false)} href="/contact" className='row menu_link'><span aria-hidden="true" className='numb'>&nbsp; &nbsp;2&#62;</span>Web Development</Link>
                        </li>
                        <li className="animation_1_2">
                            <Link  onClick={()=>setShowMenu(false)} href="/contact" className='row menu_link'><span aria-hidden="true" className='numb'>&nbsp; &nbsp;3&#62;</span>Mobile Apps</Link>
                        </li>
                        <li className="animation_1_2">
                            <Link  onClick={()=>setShowMenu(false)} href="/contact" className='row menu_link'><span aria-hidden="true" className='numb'>&nbsp; &nbsp;4&#62;</span>SEO Optimization</Link>
                        </li>
                    </ul> */}

                </nav>

            </motion.div>
        </div>
    );
}

export default Navbar;
