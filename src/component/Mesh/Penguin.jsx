import React, { useRef, useState, useMemo } from "react";
import { useLoader, useFrame, useThree } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";
import Keycontroller from "../../function/Keycontroller";
import { useRecoilState } from "recoil";
import { questGatherState } from "../../recoil/store";

function Penguin(props) {
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  // load GLTF
  const gltf = useLoader(GLTFLoader, "/pengi.glb");
  const penguinSizeByPlayer = 0.625;
  const penguinMesh = gltf.scene.children[0];
  const clock = new THREE.Clock();
  const exclamationtSizeByPlayer = 10;

  penguinMesh.position.x = penguinSizeByPlayer * 1;
  penguinMesh.position.y = penguinSizeByPlayer * 0.35;
  penguinMesh.position.z = -penguinSizeByPlayer * 75;
  penguinMesh.rotation.z = (Math.PI / 180) * 330;

  const keyController = new Keycontroller();
  const actions = [];
  const mixer = new THREE.AnimationMixer(penguinMesh);

  if (mixer) {
    gltf.scene.traverse((child) => {
      // glb 그림자 설정
      if (child.isMesh) {
        child.castShadow = true;
      }
    });
  }

  useFrame((state, delta, frame) => {
    if (mixer) {
      mixer.update(delta);
    }
  });

  return (
    <>
      <primitive
        object={gltf.scene}
        scale={40}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
        onClick={() => window.open("https://sketchfab.com/anthonyjamesgirdler")}
      />
    </>
  );
}
export default React.memo(Penguin);
