import React, { useRef, useState, useMemo } from "react";
import { useLoader, useFrame, useThree } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";
import Keycontroller from "../../function/Keycontroller";
import { useRecoilState } from "recoil";
import { questGatherState } from "../../recoil/store";

function Log(props) {
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  // load GLTF
  const gltf = useLoader(GLTFLoader, "/log_scene.glb");
  const logSizeByPlayer = 6.25;
  const LogMesh = gltf.scene.children[0];
  const clock = new THREE.Clock();
  const exclamationtSizeByPlayer = 10;

  //   LogMesh.position.x = -kittyKeySizeByPlayer * 1.6;
  LogMesh.position.y = -3;
  LogMesh.position.z = -logSizeByPlayer * 32;
  //   LogMesh.rotation.x = (Math.PI / 180) * 170;
  LogMesh.rotation.z = (Math.PI / 180) * 180;

  const keyController = new Keycontroller();
  const actions = [];
  const mixer = new THREE.AnimationMixer(LogMesh);
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
        scale={4}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
        onClick={() => window.open("https://sketchfab.com/anthonyjamesgirdler")}
      />
    </>
  );
}
export default React.memo(Log);
