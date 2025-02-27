import React, { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import { Group } from 'three';

interface SkillSphereProps {
  skills: string[];
  radius?: number;
}

const SkillSphere: React.FC<SkillSphereProps> = ({ skills, radius = 3 }) => {
  const groupRef = useRef<Group>(null);

  useEffect(() => {
    if (groupRef.current) {
      // Position skills in a spherical pattern
      skills.forEach((_, index) => {
        const phi = Math.acos(-1 + (2 * index) / skills.length);
        const theta = Math.sqrt(skills.length * Math.PI) * phi;
        
        const x = radius * Math.cos(theta) * Math.sin(phi);
        const y = radius * Math.sin(theta) * Math.sin(phi);
        const z = radius * Math.cos(phi);
        
        if (groupRef.current && groupRef.current.children[index]) {
          groupRef.current.children[index].position.set(x, y, z);
          groupRef.current.children[index].lookAt(0, 0, 0);
        }
      });
    }
  }, [skills, radius]);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.1;
      groupRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.05) * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      {skills.map((skill, index) => (
        <Text
          key={index}
          color="white"
          fontSize={0.3}
          anchorX="center"
          anchorY="middle"
        >
          {skill}
        </Text>
      ))}
    </group>
  );
};

export default SkillSphere;