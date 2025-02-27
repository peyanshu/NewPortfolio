import React, { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF, Float, PresentationControls } from '@react-three/drei';
import { Group } from 'three';

interface SceneProps {
  modelPath: string;
  scale?: number;
  position?: [number, number, number];
  rotation?: [number, number, number];
}

const Scene: React.FC<SceneProps> = ({ 
  modelPath, 
  scale = 1, 
  position = [0, 0, 0], 
  rotation = [0, 0, 0] 
}) => {
  const group = useRef<Group>(null);
  const [modelError, setModelError] = useState(false);
  
  // This is a fallback if the model fails to load
  const Fallback = () => {
    const meshRef = useRef<THREE.Mesh>(null);
    
    useFrame((state) => {
      if (meshRef.current) {
        meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.5;
      }
    });
    
    return (
      <mesh ref={meshRef} position={position} rotation={rotation} scale={scale}>
        <dodecahedronGeometry args={[1.5, 0]} />
        <meshStandardMaterial color="#2196f3" wireframe />
      </mesh>
    );
  };
  
  const Model = () => {
    if (modelError) {
      return <Fallback />;
    }
    
    try {
      // Pre-load the model to catch errors
      useGLTF.preload(modelPath);
      
      // Use a try-catch block to handle model loading errors
      try {
        const { scene } = useGLTF(modelPath);
        
        useFrame((state) => {
          if (group.current) {
            group.current.rotation.y = state.clock.getElapsedTime() * 0.1;
          }
        });
        
        return (
          <primitive 
            ref={group}
            object={scene} 
            position={position} 
            rotation={rotation}
            scale={scale} 
          />
        );
      } catch (error) {
        console.warn("Error loading model, using fallback:", error);
        return <Fallback />;
      }
    } catch (error) {
      console.warn("Error preloading model, using fallback:", error);
      return <Fallback />;
    }
  };

  // Handle model loading errors
  useEffect(() => {
    const handleModelError = () => {
      setModelError(true);
    };

    // Try to load the model and catch any errors
    const loadModel = async () => {
      try {
        await fetch(modelPath, { method: 'HEAD' });
      } catch (error) {
        console.warn("Model URL is not accessible:", modelPath);
        handleModelError();
      }
    };

    loadModel();

    return () => {
      // Cleanup
    };
  }, [modelPath]);

  return (
    <PresentationControls
      global
      rotation={[0.13, 0.1, 0]}
      polar={[-0.4, 0.2]}
      azimuth={[-1, 0.75]}
      config={{ mass: 2, tension: 400 }}
      snap={{ mass: 4, tension: 400 }}
    >
      <Float rotationIntensity={0.4}>
        <Model />
      </Float>
    </PresentationControls>
  );
};

export default Scene;