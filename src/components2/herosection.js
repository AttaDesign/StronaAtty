'use server'
import './herosection.scss';
import Image from 'next/image';
import Astronaut from './astronaut';
import HeroText from './herotext';
import Cosmicdust from './cosmicdust';
import Comet from './comet';
import Line from './Line.js';

const Herosection = () => {
    return (
        <header className='sourceFont'>
            <Image className='star sm:visible invisible' style={{ position: 'absolute', top: '20%', left: '30%', animation: `blinking 4s infinite ${1 * 0.3}s` }} src='/stars/bigbluestar.png' width={18} height={18} alt='star image' priority ></Image>
            <Image className='star sm:visible invisible' src='/stars/bigbluestar.png' width={22} height={22} style={{ position: 'absolute', top: '40%', left: '10%', animation: `blinking 4s infinite ${11 * 0.3}s` }} alt='star image' priority ></Image>
            <Image className='star sm:visible invisible' src='/stars/sniegowymediumstar.png' width={8} height={8} style={{ position: 'absolute', top: '80%', left: '30%', animation: `blinking 4s infinite ${2 * 0.3}s` }} alt='star image' priority ></Image>
            <Image className='star sm:visible invisible' src='/stars/bigbluestar.png' width={13} height={13} style={{ position: 'absolute', top: '65%', left: '20%', animation: `blinking 4s infinite ${10 * 0.3}s` }} alt='star image' priority ></Image>
            <Image className='star ' src='/stars/bigwhitestar.png' width={13} height={13} style={{ position: 'absolute', top: '85%', left: '15%', animation: `blinking 4s infinite ${3 * 0.3}s` }} alt='star image' priority ></Image>
            <Image className='star ' style={{ position: 'absolute', top: '20%', right: '30%', animation: `blinking 4s infinite ${4 * 0.3}s` }} src='/stars/bigbluestar.png' width={18} height={18} alt='star image' priority ></Image>
            <Image className='star ' src='/stars/bigbluestar.png' width={22} height={22} style={{ position: 'absolute', top: '40%', right: '10%', animation: `blinking 4s infinite ${8 * 0.3}s` }} alt='star image' priority ></Image>
            <Image className='star sm:visible invisible' src='/stars/sniegowymediumstar.png' width={8} height={8} style={{ position: 'absolute', top: '80%', right: '30%', animation: `blinking 4s infinite ${5 * 0.3}s` }} alt='star image' priority ></Image>
            <Image className='star sm:visible invisible' src='/stars/bigbluestar.png' width={13} height={13} style={{ position: 'absolute', top: '65%', right: '20%', animation: `blinking 4s infinite ${7 * 0.3}s` }} alt='star image' priority ></Image>
            <Image className='star ' src='/stars/bigwhitestar.png' width={13} height={13} style={{ position: 'absolute', top: '85%', right: '15%', animation: `blinking 4s infinite ${6 * 0.3}s` }} alt='star image' priority ></Image>
            <div className='logo' style={{ position: 'absolute', top: '10px', left: '10px', zIndex: 10 }}>
                <Image className='logo' src='/atta/aa_beztła.png' width={45} height={45}  alt='logo of Bensari Solution' priority></Image>
            </div>
            <HeroText></HeroText>
            <div className="mgla">
                <div className="clippath"></div>
            </div>
            <div className="mgla" style={{ top: '9%' }}>
                <div className="clippath"></div>
            </div>
            <div style={{position: 'absolute',width: '100%', height:'100%',top:'-240px'}}>
            <Cosmicdust></Cosmicdust>
            </div>
            <Astronaut></Astronaut>
            <Comet></Comet>
            <Line></Line>
        </header>
    );
}

export default Herosection;
