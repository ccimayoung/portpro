import React, { useRef, useState, useMemo } from "react";
import { useLoader, useFrame, useThree } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";
import Keycontroller from "../../function/Keycontroller";
import { useRecoilState } from "recoil";
import { questGatherState } from "../../recoil/store";

function KittyKey(props) {
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  // load GLTF
  const gltf = useLoader(GLTFLoader, "/kitty_key.glb");
  const kittyKeySizeByPlayer = 167;
  const kittyKeyMesh = gltf.scene.children[0];
  const clock = new THREE.Clock();
  const exclamationtSizeByPlayer = 10;

  kittyKeyMesh.position.x = -kittyKeySizeByPlayer * 1.6;
  kittyKeyMesh.position.y = -kittyKeySizeByPlayer * 0.3;
  kittyKeyMesh.position.z = -kittyKeySizeByPlayer * 23.5;
  kittyKeyMesh.rotation.x = (Math.PI / 180) * 170;
  kittyKeyMesh.rotation.y = (Math.PI / 180) * 20;

  const keyController = new Keycontroller();
  const actions = [];
  const mixer = new THREE.AnimationMixer(kittyKeyMesh);
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
        scale={0.15}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
        onClick={() => window.open("https://sketchfab.com/anthonyjamesgirdler")}
      />
    </>
  );
}
export default React.memo(KittyKey);
