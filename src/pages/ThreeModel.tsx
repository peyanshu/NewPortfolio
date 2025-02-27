import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

interface ModelProps {
  modelPath: string;
  scale?: number;
  position?: [number, number, number];
}

const Model: React.FC<ModelProps> = ({ modelPath, scale = 1, position = [0, 0, 0] }) => {
  const { scene } = useGLTF(modelPath);
  return <primitive object={scene} scale={scale} position={position} />;
};

interface Canvas3DProps extends ModelProps {
  cameraPosition?: [number, number, number];
}

const Canvas3D: React.FC<Canvas3DProps> = ({
  modelPath,
  scale = 1,
  position = [0, 0, 0],
  cameraPosition = [0, 0, 5],
}) => {
  return (
    <Canvas camera={{ position: cameraPosition }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <Suspense fallback={null}>
        <Model modelPath={modelPath} scale={scale} position={position} />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
};

export default Canvas3D;
