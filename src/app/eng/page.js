import Image from 'next/image'
import Herosection from '@/components2/herosection'
import DynamicNavbar from '@/components2/navbar'
import Aboutus from '@/components2/aboutus'
import Webservice from '@/components2/Webservice'
import Services from '@/components2/Services'
import ServiceV2 from '@/components2/ServiceV2'
import { AnimatePresence } from 'framer-motion'
import Footer from '@/components2/footer'

export default function Home() {
  return (
    <>
        <DynamicNavbar></DynamicNavbar>
        <Herosection></Herosection>
        <Aboutus></Aboutus>
        <Webservice></Webservice>
        <ServiceV2></ServiceV2>
        <Footer></Footer>
    </>
  )
}
