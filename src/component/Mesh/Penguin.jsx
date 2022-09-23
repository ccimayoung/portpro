import React from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";

function Penguin(props) {
  // load GLTF
  const gltf = useLoader(GLTFLoader, "/assets/glb/pengi.glb");
  const penguinSizeByPlayer = 0.625;
  const penguinMesh = gltf.scene.children[0];

  penguinMesh.position.x = penguinSizeByPlayer * 1;
  penguinMesh.position.y = penguinSizeByPlayer * 0.35;
  penguinMesh.position.z = -penguinSizeByPlayer * 75;
  penguinMesh.rotation.z = (Math.PI / 180) * 330;

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
      <primitive object={gltf.scene} scale={40} />
    </>
  );
}
export default React.memo(Penguin);
