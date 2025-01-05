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

  const isSmallScreen = useMediaQuery({ query: '(max-width: 640px)' })
  const isMobileScreen = useMediaQuery({ query: '(max-width: 768px)' })
  const isTabletScreen = useMediaQuery({ query: '(max-width: 1024px)' })

//  const sizes = calculateSizes(isSmall, isMobile, isTablet);
  return (
    <section className='min-h-screen  w-full flex flex-col relative'>
      <div className='mx-auto w-full h-full flex flex-col 
      sm:mt-36 mt-20 c-space gap-3'>
        {/* Header Section */}
        <p className=' sm:text-3xl text-2xl text-white text-center font-medium font-generalsans'>Hi, I am Ahmed <span className='waving-hand'>&#x1F44B;</span></p>
        {/* Tagline */}
        <p className='hero_tag text-gray_gradient'>Building Products & Brands</p>
      </div>
     
      <div className='w-full h-full absolute inset-0'> 
          {/* Leva Controls */}
          <Leva/>
          {/* React Three Fiber Canvas */}
          <Canvas className='w-full h-full '>
             <Suspense fallback={<CanvasLoader/>}>
              {/* Camera */}
              <PerspectiveCamera makeDefault position={[0, 0, 10]}/>
              
              {/* Orbit Controls */}
              <OrbitControls ></OrbitControls>
              
              {/* Lighting */}
              <ambientLight intensity={1} />
              <directionalLight position={[10, 10, 10]} intensity={0.5} />
              
              {/* Hacker Room Component */}
              <HackerRoom 
                //scale={0.5}
                // position={[0, 0 , 0]}
                // rotation={[0, -Math.PI/2, 50]}
                scale={isMobileScreen ? 0.7 : isTabletScreen ? 0.8 : 0.9}
                position={[0, -1, -10.0]}
                rotation={[0, 4.7,-0.3]}
              />

              {/* Donut Component */}
              <Donut
                position={[x.psX, x.psY, x.psZ]} 
                scale={x.sc}
                rotation={[x.rtX, x.rtY, x.rtZ]}
                />
              {/* Text Component */}
              <Text 
                    text="Building Products & Brands" 
                    position={[x.psX, x.psY, x.psZ]} 
                    rotation={[x.rtX, x.rtY, x.rtZ]} 
                    
                    color="red" 
              />

              {/* Group Component */}
              <group>
                {/* Target Component */}
                <Target position={[-10, -6, -9]} />
                {/* React Logo Component */}
                <ReactLogo position={[5, 3, 0]}/>
                {/* Cube Component */}
                <Cube position={[4, -2, 0]} scale={0.4}/>
                {/* Rings Component */}
                <Rings position={[-25, 15, 0]} />
              </group>

              </Suspense>
          </Canvas>
        

      </div>

    </section>
  )
}

export default Hero

