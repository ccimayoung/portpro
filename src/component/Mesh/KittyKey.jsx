import React from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";

function KittyKey(props) {
  // load GLTF
  const gltf = useLoader(GLTFLoader, "/assets/glb/kitty_key.glb");
  const kittyKeySizeByPlayer = 167;
  const kittyKeyMesh = gltf.scene.children[0];

  kittyKeyMesh.position.x = -kittyKeySizeByPlayer * 1.6;
  kittyKeyMesh.position.y = -kittyKeySizeByPlayer * 0.3;
  kittyKeyMesh.position.z = -kittyKeySizeByPlayer * 23.5;
  kittyKeyMesh.rotation.x = (Math.PI / 180) * 170;
  kittyKeyMesh.rotation.y = (Math.PI / 180) * 20;

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
      <primitive object={gltf.scene} scale={0.15} />
    </>
  );
}
export default React.memo(KittyKey);
