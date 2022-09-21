import React, { useRef, useState, useMemo } from "react";
import { useLoader, useFrame, useThree } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";
import Keycontroller from "../../function/Keycontroller";
import { useRecoilState } from "recoil";
import { questGatherState } from "../../recoil/store";

function Bird(props) {
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  // load GLTF
  const gltf = useLoader(GLTFLoader, "/bird.glb");
  const birdSizeByPlayer = 3.5;
  const foxMesh = gltf.scene.children[0];
  const clock = new THREE.Clock();
  const exclamationtSizeByPlayer = 10;

  foxMesh.position.x = birdSizeByPlayer * -2.1;
  foxMesh.position.y = birdSizeByPlayer * 3.2;
  foxMesh.position.z = -birdSizeByPlayer * 60.5;
  // foxMesh.rotation.z = (Math.PI / 180) * 230;

  const keyController = new Keycontroller();
  const actions = [];
  const mixer = new THREE.AnimationMixer(foxMesh);
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
        scale={7}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
        onClick={() => window.open("https://sketchfab.com/anthonyjamesgirdler")}
      />
    </>
  );
}
export default React.memo(Bird);
