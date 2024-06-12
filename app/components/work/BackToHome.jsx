import { useRouter } from "next/navigation"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useRef } from "react"

const BackToHome = () => {

    const router = useRouter()
    const backRef = useRef(null)

    useGSAP(() => {

        const TL = gsap.timeline({ paused: true })
        TL.to(backRef.current, { y: -32, duration: 0.7, ease: 'power1.out' })

        backRef.current.addEventListener('mouseenter', () => TL.play())
        backRef.current.addEventListener('mouseleave', () => TL.reverse())
    })

    return (
        <div onClick={() => router.push('/')} className="overflow-hidden cursor-pointer h-8 w-fit">
            <div ref={backRef}>
                <p className="text-2xl">Moufid Sghiri</p>
                <div className="text-xl flex">
                <svg className="w-16 rotate-180" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 800 400"><path d="M138.2736053466797,190.22801208496094C206.20249163309734,189.4128662363688,522.5749333953858,190.79411224365234,586.1563720703125,184.85342407226562C649.7378107452392,178.9127359008789,549.3404192097981,151.15744641621907,557.4918823242188,151.0586395263672C565.6433454386394,150.9598326365153,639.3588598632813,174.2843349202474,639.9022827148438,184.2019500732422C640.4457055664062,194.11956522623697,573.0303780110677,211.5586289469401,561.0748901367188,216.4495086669922" fill="none" stroke-width="26" stroke="hsl(0, 0%, 0%)" stroke-linecap="round"></path><defs><linearGradient id="SvgjsLinearGradient1000"><stop stop-color="hsl(37, 99%, 67%)" offset="0"></stop><stop stop-color="hsl(316, 73%, 52%)" offset="1"></stop></linearGradient></defs></svg>
                <p>back</p>
                </div>
            </div>
        </div>
    )
}

export default BackToHome