import React, { useRef, useState, useMemo } from "react";
import { useLoader, useFrame, useThree } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";
import Keycontroller from "../../function/Keycontroller";
import { useRecoilState } from "recoil";
import { questGatherState } from "../../recoil/store";

function TunaCan2(props) {
  // load GLTF
  const gltf = useLoader(GLTFLoader, "/tuna_can2.glb");
  console.log(gltf);
  const tunaCanMesh2 = gltf.scene.children[0];

  const clock = new THREE.Clock();

  tunaCanMesh2.position.set(-450, -300, 1200);

  useFrame((state, delta, frame) => {
    tunaCanMesh2.name = "tunaCan2";
  });

  return (
    <>
      <primitive
        object={gltf.scene}
        scale={0.005}
        onClick={() => window.open("https://sketchfab.com/anthonyjamesgirdler")}
      />
    </>
  );
}

export default React.memo(TunaCan2);
