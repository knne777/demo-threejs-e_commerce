import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";

export function AirForce(props) {
  const boxRef = useRef();
  useFrame(() => {
    boxRef.current.position.y += Math.sin(new Date().getTime() / 1000) * 0.003;;
  });
  const { nodes, materials } = useGLTF("/airForce.glb");
  return (
    <group {...props} dispose={null}>
      <group ref={boxRef} position={[0,.0, 0]} rotation={[-1.33, 0.174, 3.125]} scale={.8}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Model_material0_0.geometry}
            material={materials.material0}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/airForce.glb");
