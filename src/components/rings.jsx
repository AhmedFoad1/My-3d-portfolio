import { useFrame } from '@react-three/fiber';
import { Center, useTexture } from '@react-three/drei';
import { useCallback, useRef } from 'react';

const Rings = ({ position }) => {
  const refList = useRef([]);
  const getRef = useCallback((mesh) => {
    if (mesh && !refList.current.includes(mesh)) {
      refList.current.push(mesh);
    }
  }, []);

  const texture = useTexture('textures/rings.png');

  useFrame(() => {
    if (refList.current.length === 0) return;

    refList.current.forEach((r) => {
      r.position.set(position[0], position[1], position[2]);
    });

    refList.current.forEach((r, index) => {
      r.rotation.y = (index + Math.sin(Date.now() * 0.001)) * 0.1;
      r.rotation.x = (index + Math.cos(Date.now() * 0.001)) * 0.1;
    });
  });

  return (
    <Center>
      <group scale={0.2}>
        {Array.from({ length: 4 }, (_, index) => (
          <mesh key={index} ref={getRef}>
            <torusGeometry args={[(index + 1) * 0.5, 0.1]}></torusGeometry>
            <meshMatcapMaterial matcap={texture} toneMapped={false} />
          </mesh>
        ))}
      </group>
    </Center>
  );
};

export default Rings;
