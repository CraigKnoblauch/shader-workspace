import { Canvas } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import { shaderMaterial } from '@react-three/drei';
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
      <icosahedronGeometry args={[2, 20]} />
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
      <Cube />
    </Canvas>
  );
};

export default App
