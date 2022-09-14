import React, { useRef, useState } from "react";
import { useLoader, useFrame, useThree } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";
import dat from "dat.gui";
import { PlayerMesh } from "./Player";
import Keycontroller from "../function/Keycontroller";

export function CatMesh(props) {
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  // load GLTF
  const gltf = useLoader(GLTFLoader, "/cat.glb");
  // console.log(gltf);
  const catMesh = gltf.scene.children[0];
  const actions = [];
  const clock = new THREE.Clock();
  const mixer = new THREE.AnimationMixer(catMesh);
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
  catMesh.position.y = 2;
  catMesh.position.z = -200;
  const keyController = new Keycontroller();
  useFrame((state, delta, frame) => {
    catMesh.name = "cat";

    // catMesh.position.x = PlayerMesh.position.x;
    // catMesh.position.y = PlayerMesh.position.y;
    // catMesh.position.z = PlayerMesh.position.z;
    // console.log(PlayerMesh);
    if (keyController.keys.KeyW || keyController.keys.ArrowUp) {
      catMesh.position.z -= 0.01 * 500;
      console.log("앞으로");
      // if (catMesh.rotation.x <= Math.PI) {
      //   catMesh.rotation.x += delta * Math.PI * 2;
      // }
    }
    if (keyController.keys["KeyS"] || keyController.keys["ArrowDown"]) {
      if (catMesh.position.z < -0.5) {
        catMesh.position.z += 0.01 * 500;
        // if (catMesh.rotation.x >= 0) {
        //   catMesh.rotation.x -= delta * Math.PI * 2;
        // }
      }
    }
    if (keyController.keys["KeyA"] || keyController.keys["ArrowLeft"]) {
      if (catMesh.position.x > -0.7) {
        catMesh.position.x -= 0.01 * 500;
      }
    }
    if (keyController.keys["KeyD"] || keyController.keys["ArrowRight"]) {
      if (catMesh.position.x < 0.7) {
        catMesh.position.x += 0.01 * 500;
      }
    }
    if (mixer) mixer.update(delta);
    catMesh.rotation.z = Math.PI;
  });

  // gltf 로더는 시간이 걸리는데 draw함수는 바로 실행되서 오류 발생. 그래서 if문 사용
  const gui = new dat.GUI();
  gui.add(catMesh.position, "y", -5, 5, 0.01).name("y 위치"); // 한줄로 쓸때
  // gui.add(camera.position, "x", -10, 10, 1).name("카메라 X");
  return (
    <>
      <primitive
        object={gltf.scene}
        scale={0.05}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
        onClick={() => window.open("https://sketchfab.com/anthonyjamesgirdler")}
        // camera={{ fov: 75 }}
      />
    </>
  );
}

// export default function Model({ ...props }) {
//   const group = useRef();
//   const { nodes, materials } = useGLTF("/models/adventure_map.glb");
//   return (
//     <group ref={group} {...props} dispose={null}>
//       <primitive object={nodes.Hips} />
//       <roadMap
//         geometry={nodes.Wolf3D_Body.geometry}
//         material={materials.Wolf3D_Body}
//         skeleton={nodes.Wolf3D_Body.skeleton}
//       />
//     </group>
//   );
// }

// useGLTF.preload("/model.glb");

// const Model = (props) => {
//   const model = useLoader(GLTFLoader, props.path);
//   console.log(model);
//   return (
//     //<primitive>
//     null
//   );
// };

// export default Model;

// const RoadMap = (info) => {

//   return (

//     info.gltfLoader.load(info.modelSrc, (glb) => {
//       info.modelMesh = glb.scene.children[0];
//       info.modelMesh.castShadow = true;
//       info.modelMesh.position.set(this.x, this.y, this.z);
//       info.scene.add(this.modelMesh);
//     });
//   )
// }
