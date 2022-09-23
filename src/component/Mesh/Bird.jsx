import React from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";

function Bird(props) {
  // load GLTF
  const gltf = useLoader(GLTFLoader, "/assets/glb/bird.glb");
  const birdSizeByPlayer = 3.5;
  const foxMesh = gltf.scene.children[0];

  foxMesh.position.x = birdSizeByPlayer * -2.1;
  foxMesh.position.y = birdSizeByPlayer * 3.2;
  foxMesh.position.z = -birdSizeByPlayer * 60.5;

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
      <primitive object={gltf.scene} scale={7} />
    </>
  );
}
export default React.memo(Bird);
