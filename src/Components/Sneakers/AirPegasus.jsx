/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function AirPegasus(props) {
  const { nodes, materials } = useGLTF("/zoom.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.defaultMaterial.geometry}
        material={materials.NikeShoe}
      />
    </group>
  );
}

useGLTF.preload("/zoom.glb");
