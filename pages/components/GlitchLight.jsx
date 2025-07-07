'use client';

import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';

export default function GlitchLight() {
  const lightRef = useRef();
  const [intensity, setIntensity] = useState(2);

  useFrame(() => {
    if (Math.random() < 0.05) {
      // Randomly flicker on/off
      setIntensity(prev => (prev === 0 ? 2 : 0));
    }
  });

  return (
    <pointLight
      ref={lightRef}
      position={[0, 10, 0]}
      intensity={intensity}
      color={'#ffcc88'}
      distance={50}
      decay={2}
      castShadow
    />
  );
}
