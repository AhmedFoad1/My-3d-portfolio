import React, { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float, useGLTF } from '@react-three/drei'

const Donut = (props) => {
  const { nodes, materials } = useGLTF('/models/donut.glb')
  const donutRef = useRef()

  useFrame((state) => {
    if (donutRef.current) {
      // Gentle spinning animation
      donutRef.current.rotation.y += 0.005
      
      // Bobbing animation
      const t = state.clock.getElapsedTime()
      donutRef.current.position.y = Math.sin(t * 2) * 0.1
      

    }
  })

  return (
    <Float floatIntensity={2} rotationIntensity={0.5} speed={1.5}>
      <group {...props} dispose={null} ref={donutRef}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials.donut}
          position={[0, 0.037, 0]}
         
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_6.geometry}
          material={materials.icing}
          position={[0, 0.037, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_8.geometry}
          material={materials.sprinkles_bake}
          position={[0.076, 0.082, 0.009]}
          rotation={[1.448, 0.073, 3.007]}
          scale={0.141}
        />
      </group>
    </Float>
  )
}

useGLTF.preload('/models/donut.glb')

export default Donut

