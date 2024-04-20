import { Canvas } from '@react-three/fiber';
import { useRef } from 'react';
import { shaderMaterial } from '@react-three/drei';
import './style.css'

import myFragmentShader from './shaders/fragment.glsl'
import myVertexShader from './shaders/vertex.glsl'

const Cube = () => {
  const mesh = useRef();

  return (
    <mesh ref={mesh}>
      <boxGeometry args={[1, 1, 1]} />
      <shaderMaterial 
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
