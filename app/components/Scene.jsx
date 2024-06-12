'use client'

import { Canvas } from '@react-three/fiber'
import { Html, useProgress } from '@react-three/drei'
import { Suspense, useRef } from 'react'
import Model from './Model'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'


export default function Scene({size, img}) {

    const imgRef = useRef(null)

    useGSAP(() => {
        gsap.to(imgRef.current, { opacity: 1, delay : 3.7, duration: 1.5, ease: 'power1.out' })
    })

    const Loader = () => {
        const { progress } = useProgress()
        return <Html center>{progress.toFixed(0)}% </Html>
      }
    
    return (
        <div ref={imgRef} className='h-full opacity-0'>
            <Canvas>
                <Suspense fallback={<Loader />}>
                    <Model size={size} img={img} />
                </Suspense>
            </Canvas>
        </div>
    )
}