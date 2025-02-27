import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import Scene from './Scene';

interface Canvas3DProps {
  modelPath: string;
  scale?: number;
  position?: [number, number, number];
  rotation?: [number, number, number];
  environmentPreset?: 'sunset' | 'dawn' | 'night' | 'warehouse' | 'forest' | 'apartment' | 'studio' | 'city' | 'park' | 'lobby';
  cameraPosition?: [number, number, number];
}

const Canvas3D: React.FC<Canvas3DProps> = ({
  modelPath,
  scale = 1,
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  environmentPreset = 'city',
  cameraPosition = [0, 0, 5]
}) => {
  return (
    <Canvas
      camera={{ position: cameraPosition, fov: 45 }}
      style={{ background: 'transparent' }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <Suspense fallback={null}>
        <Scene 
          modelPath={modelPath} 
          scale={scale} 
          position={position} 
          rotation={rotation} 
        />
        <Environment preset={environmentPreset} />
      </Suspense>
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default Canvas3D;