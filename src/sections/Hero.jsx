import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import React, { Suspense } from 'react'
import CanvasLoader from '../components/CanvasLoader'
import { Canvas } from '@react-three/fiber'
import HackerRoom from '../components/HackerRoom'
import { Leva, useControls } from 'leva'
import { useMediaQuery } from 'react-responsive'
import Target from '../components/Target'
import ReactLogo from '../components/ReactLogo'
import Cube from '../components/cube'
import Rings from '../components/rings'
import Donut from '../components/donut'
import Text from '../components/Text'

const Hero = () => {
  const x = useControls({ 

      psX: { value: 0, min: -10, max: 10 },
      psY: { value: 0, min: -10, max: 10 },
      psZ: { value: 0, min: -10, max: 10 },
      sc: { value: 1, min: 0.1, max: 10 },
      rtX: { value: 0, min: -10, max: 10 },
      rtY: { value: 0, min: -10, max: 10 },
      rtZ: { value: 0, min: -10, max: 10 },
    })

  const isSmall = useMediaQuery({ query: '(max-width: 640px)' })
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
  const isTablet = useMediaQuery({ query: '(max-width: 1024px)' })

//  const sizes = calculateSizes(isSmall, isMobile, isTablet);
  return (
    <section className='min-h-screen  w-full flex flex-col relative'>
      <div className='mx-auto w-full h-full flex flex-col 
      sm:mt-36 mt-20 c-space gap-3'>
        <p className=' sm:text-3xl text-2xl text-white text-center font-medium font-generalsans'>Hi, I am Ahmed <span className='waving-hand'>👋🏻</span></p>
        <p className='hero_tag text-gray_gradient'>Building Products & Brands</p>
      </div>
     
      <div className='w-full h-full absolute inset-0'> 
          <Leva/>
          <Canvas className='w-full h-full '>
             <Suspense fallback={<CanvasLoader/>}>
              <PerspectiveCamera makeDefault position={[0, 0, 10]}/>
              
              <OrbitControls ></OrbitControls>
              
              <ambientLight intensity={1} />
              <directionalLight position={[10, 10, 10]} intensity={0.5} />
              
              <HackerRoom 
                //scale={0.5}
                // position={[0, 0 , 0]}
                // rotation={[0, -Math.PI/2, 50]}
                scale={ isMobile ? 0.7 : 0.9}
                position={[0, -1, -10.0]}
                rotation={[0, 4.7,-0.3]}
              />

              <Donut
                position={[x.psX, x.psY, x.psZ]} 
                scale={x.sc}
                rotation={[x.rtX, x.rtY, x.rtZ]}
                />
              <Text 
                    text="Building Products & Brands" 
                    position={[x.psX, x.psY, x.psZ]} 
                    rotation={[x.rtX, x.rtY, x.rtZ]} 
                    
                    color="red" 
              />

              <group>
                <Target position={[-10, -6, -9]} />
                <ReactLogo position={[5, 3, 0]}/>
                <Cube position={[4, -2, 0]} scale={0.4}/>
                <Rings position={[-25, 15, 0]} />
              </group>

              </Suspense>
          </Canvas>
        

      </div>

    </section>
  )
}

export default Hero
