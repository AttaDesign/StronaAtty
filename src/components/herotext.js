'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Herotext() {

  let [design, setDesign] = useState('01010')
  let [develop, setDevelop] = useState('10101010')
  let [deploy, setDeploy] = useState('010101')
  let [we, setWe] = useState('01')
  let [and, setAnd] = useState('010')
  let [solutions, setSolutions] = useState('101010101')
  let [for2, setFor2] = useState('010')
  let [clients, setClients] = useState('1010101')
  let [around, setAround] = useState('010101')
  let [the, setThe] = useState('010')
  let [world, setWorld] = useState('10101')
  const znaki = ['0', '1']
  let time = 3
  let speed = 0.5

  useEffect(() => {
    let iterrations = 0
    let string = ''
    let string1 = ''
    let string2 = ''
    let stringWe = ''
    let stringand = ''
    let stringsolutions = ''
    let stringfor2 = ''
    let stringclients = ''
    let stringaround = ''
    let stringthe = ''
    let stringworld = ''

    const interval = setInterval(() => {
      string = ''
      string1 = ''
      string2 = ''
      stringWe = ''
      stringand = ''
      stringsolutions = ''
      stringfor2 = ''
      stringclients = ''
      stringaround = ''
      stringthe = ''
      stringworld = ''

      for (let i = 0; i < 10; i++) {
        if (stringWe[0] != '0' || '1') {
          if (stringWe.length < 9) {
            stringWe += (znaki[Math.round(Math.random())])
          }
        }
        if (string[0] != '0' || '1') {
          if (string.length < 7) {
            string += (znaki[Math.round(Math.random())])
          }
        }
        if (string1[0] != '0' || '1') {
          if (string1.length < 5) {
            string1 += (znaki[Math.round(Math.random())])
          }
        }
        if (stringand[0] != '0' || '1') {
          if (stringand.length < 6) {
            stringand += (znaki[Math.round(Math.random())])
          }
        }

        if (string2[0] != '0' || '1') {
          if (string2.length < 2) {
            string2 += (znaki[Math.round(Math.random())])
          }
        }
        if (stringsolutions[0] != '0' || '1') {
          if (stringsolutions.length < 7) {
            stringsolutions += (znaki[Math.round(Math.random())])
          }
        }
        if (stringfor2[0] != '0' || '1') {
          if (stringfor2.length < 2) {
            stringfor2 += (znaki[Math.round(Math.random())])
          }
        }
        if (stringclients[0] != '0' || '1') {
          if (stringclients.length < 7) {
            stringclients += (znaki[Math.round(Math.random())])
          }
        }
        if (stringaround[0] != '0' || '1') {
          if (stringaround.length < 6) {
            stringaround += (znaki[Math.round(Math.random())])
          }
        }
        if (stringthe[0] != '0' || '1') {
          if (stringthe.length < 9) {
            stringthe += (znaki[Math.round(Math.random())])
          }
        }

      }

      setWe(stringWe)
      setAnd(stringand)
      setSolutions(stringsolutions)
      setFor2(stringfor2)
      setClients(stringclients)
      setAround(stringaround)
      setThe(stringthe)
      setWorld(stringworld)
      setDesign(string)
      setDeploy(string1)
      setDevelop(string2)

      iterrations += 1
      if (iterrations >= 3 * time) {
        setWe('Stworzymy')
      }
      if (iterrations >= 6 * time) {
        setDesign('stronę,')
      }

      if (iterrations >= 9 * time) {
        setDevelop('która')
      }
      if (iterrations >= 12 * time) {
        setAnd('pomoże')
      }
      if (iterrations >= 16 * time) {
        setDeploy('ci')
      }
      if (iterrations >= 19 * time) {
        setSolutions('dotrzeć')
      }

      if (iterrations >= 21 * time) {
        setFor2('do')
      }
      if (iterrations >= 23 * time) {
        setClients('większej')
      }
      if (iterrations >= 24 * time) {
        setAround('ilości')
      }
      if (iterrations >= 25 * time) {
        setThe('klientów!')
      }

    }, 40 * speed);
    return () => clearInterval(interval); //Wyczyszczenie interwału przy odmontowywaniu komponentu
  }, []);



  return (
    <div className="load z-20 relative grid h-2/3 place-content-center space-y-3 sm:space-y-6 bg-transparent p-8 mb-8 sm: m-0 sm:p-0">
      <h1 className="text-center sm:text-6xl text-4xl font-black text-neutral-50">
        ATTA Web Agency
      </h1>
      <p className="text-center text-neutral-400  text-wrap sm:text-unwrap ">
        {we} {design} {develop} {and} {deploy} {solutions} {for2} {clients} {around} {the} {world}🌎
      </p>
      <div className="flex items-center justify-center gap-3 sm:gap-3">

        <div onClick={() => (document.querySelector('#about-us').scrollIntoView({
          behavior: 'smooth'
        }))} className="cta unselectable ">
        <div className="text m-2 sm:m-0"  >
          Poznaj Nas <i className="fa-solid fa-arrow-right-long"></i>
        </div>
      </div>
    </div>
      
    </div >
  )
}
