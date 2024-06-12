'use client'

import gsap from "gsap"
import { useGSAP } from "@gsap/react"

const Name = () => {

    useGSAP(() => {
        const TL = gsap.timeline()
        TL.to('.letter', { x: 0, duration: 0.5, ease:'power1.inOut', stagger:0.2 })
    })

  return (
    <div className="flex text-2xl overflow-hidden">
        <p className="letter translate-x-[150px]">M</p>
        <p className="letter translate-x-[150px]">o</p>
        <p className="letter translate-x-[150px]">u</p>
        <p className="letter translate-x-[150px]">f</p>
        <p className="letter translate-x-[150px]">i</p>
        <p className="letter translate-x-[150px]">d</p>

        <p className="letter translate-x-[150px] ml-2">S</p>
        <p className="letter translate-x-[150px]">g</p>
        <p className="letter translate-x-[150px]">h</p>
        <p className="letter translate-x-[150px]">i</p>
        <p className="letter translate-x-[150px]">r</p>
        <p className="letter translate-x-[150px]">i</p>
    </div>
  )
}

export default Name