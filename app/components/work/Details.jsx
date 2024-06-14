'use client'

import localFont from '@next/font/local'
import Image from 'next/image'
import { data } from './data'
import { useRef, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'



const craftSemi = localFont({ src: '../../../public/fonts/CraftworkGrotesk-SemiBold.ttf' })

const Details = () => {

    const [currentIdx, setCurrentIdx] = useState(0)

    const {name, tech, role, link, img} = data[currentIdx]

    const handlePrev = () => {
        setCurrentIdx(prev => prev === 0 ? data.length -1 : prev -1)
    } 

    const handleNext = () => {
        setCurrentIdx(prev => prev === data.length -1 ? 0 : prev +1)
    }

    const nameRef = useRef(null)
    const techRef = useRef(null)
    const roleRef = useRef(null)
    const indexRef = useRef(null)
    const imgRef = useRef(null)

    useGSAP(() => {

        const animation = { y: 0, skewX: 0, duration: 1, ease: 'power1.out', }

        gsap.fromTo(techRef.current, { y: 30, skewX: -15 }, animation)
        gsap.fromTo(roleRef.current, { y: 30, skewX: -15 }, animation)
        gsap.fromTo(indexRef.current, { y: 30, skewX: -15 }, animation)
        gsap.fromTo(nameRef.current, { y: 80, skewX: -15 }, animation)
        gsap.fromTo(imgRef.current, { y: 250, scale: 1.5 }, { y: 0, scale: 1, duration: 1, ease: 'power1.out' })

    }, [currentIdx])


  return (
    <section className='flex flex-col lg:flex-row lg:items-end items-center lg:justify-between mt-8 lg:mt-20 pb-6 sm:pb-0'>

    <div className='space-y-6 order-last lg:order-first w-full mt-6 lg:mt-0'>

        <div className={`${craftSemi.className} flex items-center text-sm overflow-hidden`}>
            <p>0</p>
            <p ref={indexRef}>{currentIdx +1}</p>
        </div>

        <div className='overflow-hidden'>
            <p className='font-bold text-lg'>TECHNOLOGIES</p>
            <p ref={techRef}>{tech}</p>
        </div>

        <div className='overflow-hidden'>
            <p className='font-bold text-lg'>ROLE</p>
            <p ref={roleRef}>{role}</p>
        </div>

        <div className='flex items-center cursor-pointer w-fit group'>
            <a href={link} target='_blank'>See project</a>
            <svg className='group-hover:rotate-[-45deg] mt-1 duration-300' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><path fill="black" d="m218.83 130.83l-72 72a4 4 0 0 1-5.66-5.66L206.34 132H40a4 4 0 0 1 0-8h166.34l-65.17-65.17a4 4 0 0 1 5.66-5.66l72 72a4 4 0 0 1 0 5.66"/></svg>
        </div>

        <div className='overflow-hidden'>
            <p ref={nameRef} className={`${craftSemi.className} text-5xl md:text-8xl font-bold`}>{name}</p>
        </div>
        
    </div>

{/* images part ************************/}
    <div>
        <div className={`${craftSemi.className} absolute top-6 lg:top-12 right-6 lg:right-12 flex items-center text-end space-x-8`}>
            <p onClick={handlePrev} className='cursor-pointer underlineAnim relative'>Prev</p>
            <p onClick={handleNext} className='cursor-pointer underlineAnim relative'>Next</p>
        </div>

        <div className='overflow-hidden'>
            <Image
                src={img}
                alt="work_picture"
                width="420"
                height="634"
                ref={imgRef}
            />
        </div>
    </div>

    </section>
  )
}

export default Details