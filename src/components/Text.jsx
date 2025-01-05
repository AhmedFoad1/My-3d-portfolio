import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text3D, Center } from '@react-three/drei';

const Text = ({
  text = "Hello it's me Ahmed!",
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  color = "#ffffff",
}) => {
  const textRef = useRef();

  useFrame((state) => {
    if (textRef.current) {
      const elapsedTime = state.clock.elapsedTime;
      textRef.current.position.x = position[0] + Math.sin(elapsedTime) * 0.1; // Horizontal motion
      textRef.current.position.y = position[1] + Math.cos(elapsedTime) * 0.1; // Vertical motion
    }
  });

  return (
    <Center position={position} rotation={rotation}>
      <Text3D
        ref={textRef}
        font="https://threejs.org/examples/fonts/helvetiker_bold.typeface.json" // Default hosted font
        size={0.75}
        height={0.2}
        curveSegments={12}
        bevelEnabled
        bevelThickness={0.02}
        bevelSize={0.02}
        bevelOffset={0}
        bevelSegments={5}
      >
        {text}
        <meshStandardMaterial color={color} />
      </Text3D>
    </Center>
  );
};

export default Text;
