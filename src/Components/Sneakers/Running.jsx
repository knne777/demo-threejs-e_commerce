import React, { useRef } from "react";
import { useGLTF, Plane } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";

export function Running(props) {
  const boxRef = useRef();
  useFrame(() => {
    boxRef.current.position.y += Math.sin(new Date().getTime() / 1000) * 0.005;;
  });
  const { nodes, materials } = useGLTF("/running.glb");
  return (
    <group {...props} dispose={null}>
      <group
        position={[0, .5, -0.573]}
        rotation={[-1.448, -0.858, 0.111]}
        scale={0.20}
        ref={boxRef}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials.tex_u1_v1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3.geometry}
          material={materials.tex_u1_v1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials.tex_u1_v1}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/running.glb");
