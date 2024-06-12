'use client'

import localFont from '@next/font/local'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'

const craft = localFont({ src: '../../public/fonts/CraftworkGrotesk-Regular.ttf' })
const craftSemi = localFont({ src: '../../public/fonts/CraftworkGrotesk-SemiBold.ttf' })


const HeroTitle = () => {

  const creative = useRef(null)
  const developer = useRef(null)

  useGSAP(() => {
    const elements = [creative.current, developer.current]
    gsap.to(elements,  {y: 0, opacity: 1, delay : 2.7, duration: 1, ease: 'power1.out'})
  })

  return (
    <div className='text-5xl md:text-7xl lg:text-8xl tracking-wide order-last lg:order-first pt-2 sm:pt-0'>
      <div className='overflow-hidden'>
        <p ref={creative} className={`${craftSemi.className} title translate-y-[100px] opacity-70`}>Creative</p>
      </div>
      <div className='overflow-hidden'>
        <p ref={developer} className={`${craftSemi.className} title ml-20 md:ml-28 lg:ml-40 translate-y-[90px]  opacity-70`}>Developer</p>
      </div>
    </div>
  )
}

export default HeroTitle