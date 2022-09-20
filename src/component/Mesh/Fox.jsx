import React, { useRef, useState, useMemo } from "react";
import { useLoader, useFrame, useThree } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";
import Keycontroller from "../../function/Keycontroller";
import { useRecoilState } from "recoil";
import { questGatherState } from "../../recoil/store";

function Fox(props) {
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  // load GLTF
  const gltf = useLoader(GLTFLoader, "/fox.glb");
  const foxSizeByPlayer = 167;
  const foxMesh = gltf.scene.children[0];
  const clock = new THREE.Clock();
  const exclamationtSizeByPlayer = 10;

  foxMesh.position.x = foxSizeByPlayer * 1.2;
  foxMesh.position.y = -foxSizeByPlayer * 0.3;
  foxMesh.position.z = -foxSizeByPlayer * 12.7;
  foxMesh.rotation.z = (Math.PI / 180) * 230;

  const keyController = new Keycontroller();
  const actions = [];
  const mixer = new THREE.AnimationMixer(foxMesh);
  if (mixer) {
    actions[0] = mixer.clipAction(gltf.animations[0]);
    actions[0].setEffectiveTimeScale(1.2);
    actions[0].play();

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
        scale={0.15}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
        onClick={() => window.open("https://sketchfab.com/anthonyjamesgirdler")}
      />
    </>
  );
}
export default React.memo(Fox);
