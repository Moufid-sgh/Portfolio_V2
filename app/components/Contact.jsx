'use client'

import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import Instagram from "@/public/icons/Instagram"
import Linkedin from "@/public/icons/Linkedin"
import Mail from "@/public/icons/Mail"
import { useRef } from "react"


const Contact = () => {

  const containerRef = useRef(null)
  const contactRef = useRef(null)
  const mailRef = useRef(null)
  const linkedinRef = useRef(null)
  const instaRef = useRef(null)

  useGSAP(() => {
    gsap.to(contactRef.current, { y: 0, delay: 4, duration: 1, ease: 'power1.out' })
  })

  useGSAP(() => {
    const TL = gsap.timeline({ paused: true })

    const animation = { x: -40, duration : 0.4, ease: 'power1.out' }

    TL.to(contactRef.current, { y: 90, duration : 0.4, ease: 'power1.in' })
      .to(mailRef.current, animation)
      .to(linkedinRef.current, animation)
      .to(instaRef.current, animation)

    containerRef.current.addEventListener('mouseenter', () => TL.play())
    containerRef.current.addEventListener('mouseleave', () => TL.reverse())
  })

  return (
    <section ref={containerRef} className='absolute top-2 md:top-6 lg:top-8 right-4 md:right-6 w-8 flex justify-center overflow-hidden cursor-pointer'>
        <p ref={contactRef} className='rotate-90 text-lg tracking-wide mt-8 ml-6 translate-y-[100px] h-fit'>Contact</p>
      
        <div className="space-y-3 mt-4 sm:mt-2">
          <Mail mailRef={mailRef} />
          <Linkedin linkedinRef={linkedinRef} />
          <Instagram instaRef={instaRef} />
        </div>
    </section>
  )
}

export default Contact