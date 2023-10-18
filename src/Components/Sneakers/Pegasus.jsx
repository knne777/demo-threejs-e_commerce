import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
export function Pegasus(props) {
  const boxRef = useRef();
  useFrame(() => {
    boxRef.current.position.y += Math.sin(new Date().getTime() / 1000) * 0.003;
  });
  const { nodes, materials } = useGLTF("/pegasus.glb");
  return (
    <group {...props} dispose={null}>
      <group ref={boxRef} position={[0, 6, 0]} rotation={[2.621, 0.039, 0.01]} scale={1.35}>
        <group rotation={[Math.PI, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Model_material0_0.geometry}
            material={materials["material0.001"]}
            position={[3.427, 1.933, -6.615]}
            rotation={[-2.27, 0.462, -2.797]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/pegasus.glb");
