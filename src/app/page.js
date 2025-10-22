import Image from 'next/image'
import Herosection from '@/components/herosection'
import Portfolio from '@/components/portfolio'
import DynamicNavbar from '@/components/navbar'
import Aboutus from '@/components/aboutus'
import Webservice from '@/components/Webservice'
import Services from '@/components/Services'
import ServiceV2 from '@/components/ServiceV2'
import { AnimatePresence } from 'framer-motion'
import Footer from '@/components/footer'
import ContactSection from '@/components/ContactSection'
import { Analytics } from "@vercel/analytics/next"
export default function Home() {
  return (
    <>
        <DynamicNavbar></DynamicNavbar>
        <Herosection></Herosection>
        <Portfolio></Portfolio>
        <Aboutus></Aboutus>
        <Webservice></Webservice>
        <ServiceV2></ServiceV2>
        <ContactSection></ContactSection>
        <Footer></Footer>
        <Analytics></Analytics>
    </>
  )
}
