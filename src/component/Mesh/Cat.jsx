import React, { useRef, useState } from "react";
import { useLoader, useFrame, useThree } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";
import Keycontroller from "../../function/Keycontroller";

export function Cat(props) {
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  // load GLTF
  const gltf = useLoader(GLTFLoader, "/cat.glb");
  // console.log(gltf);
  const catMesh = gltf.scene.children[0];
  const actions = [];
  const clock = new THREE.Clock();
  const mixer = new THREE.AnimationMixer(catMesh);
  const catSizeByPlayer = 830;
  // const cameraPosition = new THREE.Vector3(1, 5, 5);
  // console.log(gltf.scene.traverse);
  if (mixer) {
    actions[0] = mixer.clipAction(gltf.animations[0]);
    actions[0].play();
    gltf.scene.traverse((child) => {
      // glb 그림자 설정
      if (child.isMesh) {
        child.castShadow = true;
      }
    });
  }
  catMesh.position.x = catSizeByPlayer * 0.4;
  catMesh.position.y = 2;
  catMesh.position.z = -catSizeByPlayer * 7;
  const keyController = new Keycontroller();
  useFrame((state, delta, frame) => {
    catMesh.name = "cat";

    //   if (keyController.keys.KeyW || keyController.keys.ArrowUp) {
    //     catMesh.position.z -= 0.01 * catSizeByPlayer;
    //     console.log("앞으로");
    //     // if (catMesh.rotation.x <= Math.PI) {
    //     //   catMesh.rotation.x += delta * Math.PI * 2;
    //     // }
    //   }
    //   if (keyController.keys["KeyS"] || keyController.keys["ArrowDown"]) {
    //     if (catMesh.position.z < -0.5) {
    //       catMesh.position.z += 0.01 * catSizeByPlayer;
    //       // if (catMesh.rotation.x >= 0) {
    //       //   catMesh.rotation.x -= delta * Math.PI * 2;
    //       // }
    //     }
    //   }
    //   if (keyController.keys["KeyA"] || keyController.keys["ArrowLeft"]) {
    //     if (catMesh.position.x > -0.7) {
    //       catMesh.position.x -= 0.01 * catSizeByPlayer;
    //     }
    //   }
    //   if (keyController.keys["KeyD"] || keyController.keys["ArrowRight"]) {
    //     if (catMesh.position.x < 0.7) {
    //       catMesh.position.x += 0.01 * catSizeByPlayer;
    //     }
    //   }
    //   if (mixer) mixer.update(delta);
    //   catMesh.rotation.z = Math.PI;
  });

  return (
    <>
      <primitive
        object={gltf.scene}
        scale={0.03}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
        onClick={() => window.open("https://sketchfab.com/anthonyjamesgirdler")}
        // camera={{ fov: 75 }}
      />
    </>
  );
}
