'use client'

import { fragment, vertex } from './shader'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { useAspect, useTexture } from '@react-three/drei'

const Model = ({size, img}) => {

    const image = useRef();
    const texture = useTexture(img)
    const { width, height } = texture.image

    const scale = useAspect(width, height, size)

    const amplitude = 0.25;
    const waveLength = 5;


    const uniforms = useRef({
        uTexture: { value: texture },
        uTime: { value: 0 },
        uAmplitude: { value: amplitude },
        uWaveLength: { value: waveLength }
    })

    useFrame( () => {
        image.current.material.uniforms.uTime.value += 0.04;
        image.current.material.uniforms.uAmplitude.value = amplitude
        image.current.material.uniforms.uWaveLength.value = waveLength;
    })


    return (
        <mesh ref={image} scale={scale}>
            <planeGeometry args={[1, 1, 45, 45]}/>
            <shaderMaterial
                fragmentShader={fragment}
                vertexShader={vertex}
                wireframe={false} 
                uniforms={uniforms.current}
            />
        </mesh>
    )
}

export default Model