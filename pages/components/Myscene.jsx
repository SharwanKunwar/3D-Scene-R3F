'use client';

import { Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei';
import React, { Suspense, useEffect } from 'react';
import Scene from './Scene';
import { useThree } from '@react-three/fiber';

function Myscene() {
    const state = useThree();
    useEffect(()=>{
        state.gl.toneMappingExposure = 5;
    },[state.gl]);
    
  return (
    <>
      <Environment background={'only'} files={'/testures/envmap_blur.hdr'} ground={{height:100, radius:300}}/>
      <Environment background={false} files={'/testures/envmap.hdr'} />
      <PerspectiveCamera makeDefault fov={33} position={[-0.09, 16.01, -27.9]} />
      <OrbitControls target={[0.304, 0.806, 0.427]} maxPolarAngle={Math.PI * 0.45} />

      <Suspense fallback={null}>
        <Scene/>
      </Suspense>
    </>
  );
}

export default Myscene;
