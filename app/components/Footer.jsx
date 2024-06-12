'use client'

import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRouter } from "next/navigation"
import { useRef } from "react"


const Footer = () => {

    const router = useRouter()

    const about = useRef(null)
    const bio = useRef(null)
    const work = useRef(null)

    useGSAP(() => {
        gsap.to(about.current, { x: 0, delay: 4, duration: 1, ease: 'power1.out' })
        gsap.to(bio.current, { y: 0, delay: 4, duration: 1, ease: 'power1.out' })
        gsap.to(work.current, { y: 0, delay: 4, duration: 1, ease: 'power1.out' })
    })


    return (
        <section className="flex flex-col sm:flex-row items-end justify-between">
            <div className="overflow-hidden">
                <div ref={about} className="flex items-center translate-x-[-80px]">
                    <svg width="16" height="16" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_1204_4292)">
                            <path d="M2.45462 18.0037L2.52234 7.84632C2.5342 6.00753 3.82017 4.43118 5.59547 4.07984L15.4049 2.13522C17.7618 1.6679 19.9494 3.51263 19.9342 5.95335L19.8665 16.1124C19.8538 17.9504 18.5678 19.5259 16.7925 19.8781L6.98303 21.8227C4.62612 22.29 2.43853 20.4453 2.45462 18.0037Z" fill="#111827" fillOpacity="0.2" />
                            <path d="M7.26065 22.0565L7.32837 11.8974C7.33938 10.0603 8.6262 8.48479 10.4015 8.13261L20.2109 6.18884C22.5679 5.72152 24.7554 7.56539 24.7394 10.007L24.6716 20.1661C24.6598 22.004 23.3738 23.5795 21.5985 23.9317L11.7891 25.8763C9.43215 26.3428 7.24456 24.4989 7.26065 22.0582V22.0565Z" fill="#111827" fillOpacity="0.5" />
                            <path d="M12.0668 26.1092L12.1345 15.9501C12.1464 14.1113 13.4323 12.5366 15.2076 12.1845L25.0171 10.2398C27.374 9.77252 29.5616 11.6172 29.5455 14.058L29.4778 24.2171C29.4659 26.0558 28.1799 27.6314 26.4046 27.9827L16.5952 29.9273C14.2383 30.3946 12.0507 28.5499 12.0659 26.1092H12.0668Z" fill="#111827" fillOpacity="0.8" />
                        </g>
                        <defs>
                            <clipPath id="clip0_1204_4292">
                                <rect width="27.0909" height="27.9375" fill="white" transform="translate(2.45453 2.0625)" />
                            </clipPath>
                        </defs>
                    </svg>
                    <p className="text-lg ml-2">About</p>
                </div>

                <p ref={bio} className="md:w-3/5 lg:w-2/5 text-slate-600 translate-y-[150px]">
                    Creative developer who blends the worlds of art and code to create captivating digital experiences by telling stories through memorable styles. Constantly exploring new technologies and artistic techniques to push the boundaries of interactive design.
                </p>
            </div>

            <div onClick={() => router.push('/work')} 
                 className="workContainer relative w-12 sm:w-28 lg:w-[60px] mt-4 sm:mt-0 cursor-pointer">

                <svg className="w-24 h-16 absolute left-[-20px] arrowsvg" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 800 400"><path d="M138.2736053466797,190.22801208496094C206.20249163309734,189.4128662363688,522.5749333953858,190.79411224365234,586.1563720703125,184.85342407226562C649.7378107452392,178.9127359008789,549.3404192097981,151.15744641621907,557.4918823242188,151.0586395263672C565.6433454386394,150.9598326365153,639.3588598632813,174.2843349202474,639.9022827148438,184.2019500732422C640.4457055664062,194.11956522623697,573.0303780110677,211.5586289469401,561.0748901367188,216.4495086669922" fill="none" stroke-width="26" stroke="hsl(0, 0%, 0%)" stroke-linecap="round"></path><defs><linearGradient id="SvgjsLinearGradient1000"><stop stop-color="hsl(37, 99%, 67%)" offset="0"></stop><stop stop-color="hsl(316, 73%, 52%)" offset="1"></stop></linearGradient></defs></svg>

                <div className="overflow-hidden">
                    <p ref={work} className="text-lg translate-y-[80px]">Work</p>
                </div>

            </div>
        </section>
    )
}

export default Footer