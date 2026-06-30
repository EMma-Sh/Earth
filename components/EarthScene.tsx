'use client';

import { Suspense, useRef } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import * as THREE from 'three';
import type { Mesh } from 'three';

function Earth() {
  const meshRef = useRef<Mesh>(null);
  const texture = useLoader(THREE.TextureLoader, '/textures/earth.jpg');

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.06;
    }
  });

  return (
    <mesh ref={meshRef} castShadow receiveShadow>
      <sphereGeometry args={[1.5, 128, 128]} />
      <meshStandardMaterial map={texture} roughness={0.9} metalness={0.05} />
    </mesh>
  );
}

export default function EarthScene() {
  return (
    <div className="absolute inset-0">
      <Canvas camera={{ position: [0, 0, 5], fov: 40 }} gl={{ antialias: true }} dpr={[1, 2]}>
        <ambientLight intensity={0.15} />
        <directionalLight position={[5, 2, 5]} intensity={2.2} color="#fdf6ec" castShadow />
        <Suspense fallback={null}>
          <Earth />
          <Stars radius={100} depth={50} count={4000} factor={4} saturation={0} fade speed={0.4} />
        </Suspense>
        <OrbitControls
          enablePan={false}
          enableZoom={true}
          minDistance={2.8}
          maxDistance={10}
          rotateSpeed={0.4}
          zoomSpeed={0.6}
        />
      </Canvas>
    </div>
  );
}
