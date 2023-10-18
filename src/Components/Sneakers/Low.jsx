import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Low(props) {
  const { nodes, materials } = useGLTF("/low.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_2.geometry}
        material={materials.NikeShoe_01_MS_Cleaned_Positioned_Final_2}
        rotation={[-1.583, 0.54, 3.106]}
      />
    </group>
  );
}

useGLTF.preload("/low.glb");
