import { Canvas } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import { OrbitControls, shaderMaterial } from '@react-three/drei';
import './style.css'
import * as Three from 'three'

import myFragmentShader from './shaders/fragment.glsl'
import myVertexShader from './shaders/vertex.glsl'

const Cube = () => {
  const mesh = useRef();

  const uniforms = useMemo(
    () => ({
      u_time: {
        value: 0.0,
      },
      u_colorA: { value: new Three.Color("#FFE486") },
      u_colorB: { value: new Three.Color("#FEB3D9") },
    }), []
  );

  return (
    <mesh ref={mesh}>
      <planeGeometry args={[2, 2, 100, 100]} />
      <shaderMaterial 
        uniforms={ uniforms }
        fragmentShader = { myFragmentShader }
        vertexShader = { myVertexShader }
      />
    </mesh>
  );
};

const App = () => {
  return (
    <Canvas>
      <OrbitControls />
      <Cube />
    </Canvas>
  );
};

export default App
