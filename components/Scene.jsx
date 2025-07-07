'use client';

import { useGLTF, useTexture } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

function Scene() {
  const groupRef = useRef();
  const { nodes } = useGLTF('/models/scene.glb');

  const [
    ground,
    ground2,
    ground_debris,
    pipes_and_rover,
    astronauts_white,
    astronauts_orange,
    fragments,
    debris
  ] = useTexture([
    '/testures/ground.png',
    '/testures/ground2.png',
    '/testures/ground_debris.png',
    '/testures/pipes_and_rover.png',
    '/testures/astronauts_white.png',
    '/testures/astronauts_orange.png',
    '/testures/fragments.png',
    '/testures/debris.png'
  ]);

  const debrisRef = useRef();
  const timeRef = useRef(0);

  useFrame((state, delta) => {
  timeRef.current += delta;
  const t = timeRef.current;

  if (groupRef.current) {
    groupRef.current.rotation.y += 0.001; // keep same slow rotation
  }

  if (debrisRef.current) {
    debrisRef.current.position.y = 0.1 * Math.sin(t * 0.7);  // slower float (from 1.5 to 0.7)
    debrisRef.current.rotation.x = 0.05 * Math.sin(t * 0.3); // slower rotation (from 0.7 to 0.3)
    debrisRef.current.rotation.y = 0.05 * Math.sin(t * 0.4); // slower rotation (from 0.9 to 0.4)
    debrisRef.current.rotation.z = 0.05 * Math.sin(t * 0.5); // slower rotation (from 1.1 to 0.5)
  }
});


  return (
    <group ref={groupRef}>
      <mesh geometry={nodes.ground.geometry}>
        <meshBasicMaterial map={ground} />
      </mesh>
      <mesh geometry={nodes.ground2.geometry}>
        <meshBasicMaterial map={ground2} />
      </mesh>
      <mesh geometry={nodes.ground_debris.geometry}>
        <meshBasicMaterial map={ground_debris} />
      </mesh>
      <mesh geometry={nodes.pipes_and_rover.geometry}>
        <meshBasicMaterial map={pipes_and_rover} />
      </mesh>
      <mesh geometry={nodes.astronauts_white.geometry}>
        <meshBasicMaterial map={astronauts_white} />
      </mesh>
      <mesh geometry={nodes.astronauts_orange.geometry}>
        <meshBasicMaterial map={astronauts_orange} />
      </mesh>
      <mesh geometry={nodes.fragments.geometry}>
        <meshBasicMaterial map={fragments} />
      </mesh>

      {/* Floating + rotating debris */}
      <mesh ref={debrisRef} geometry={nodes.debris.geometry}>
        <meshBasicMaterial map={debris} />
      </mesh>

      <mesh geometry={nodes.astronauts_visors.geometry}>
        <meshStandardMaterial roughness={0} metalness={1} color={'#b68432'} />
      </mesh>
    </group>
  );
}

export default Scene;
