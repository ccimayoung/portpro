import React, { useEffect, useRef, useState } from "react";
import { useLoader, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";
import dat from "dat.gui";
import { PointerLockControls } from "three/examples/jsm/controls/PointerLockControls";
import Keycontroller from "../function/Keycontroller";

export function PlayerMesh(props) {
  const { canvas } = props;
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  // load GLTF
  const gltf = useLoader(GLTFLoader, "/캐릭터.glb");
  // console.log(gltf);
  const playerMesh = gltf.scene.children[0];
  const actions = [];
  const clock = new THREE.Clock();
  const delta = clock.getDelta();
  const mixer = new THREE.AnimationMixer(playerMesh);
  // console.log(gltf.scene.traverse);
  if (mixer) {
    actions[0] = mixer.clipAction(gltf.animations[0]);
    actions[1] = mixer.clipAction(gltf.animations[1]);
    actions[1].setEffectiveTimeScale(0.6);
    actions[1].play();
    console.log(actions);
    gltf.scene.traverse((child) => {
      // glb 그림자 설정
      if (child.isMesh) {
        child.castShadow = true;
      }
    });
  }

  // const { gl, camera } = useThree();
  // const renderer = gl;
  // renderer.setSize(window.innerWidth, window.innerHeight);
  // renderer.setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1);

  // camera.fov = 75;
  // camera.aspect = window.innerWidth / window.innerHeight;
  // camera.near = 0.1;
  // camera.far = 1000;
  // console.log(camera);

  const keyController = new Keycontroller();

  playerMesh.name = "player";
  // if (foward === "start") {
  playerMesh.position.y = 0.35;
  playerMesh.position.z = -2.5;
  playerMesh.rotation.y = Math.PI;
  // }

  useThree(({ camera }) => {
    camera.position.set(playerMesh.position.x, playerMesh.position.y + 50);
  });
  let jump = false;
  useFrame((state, delta, frame) => {
    // console.log(state.camera);
    if (mixer) mixer.update(delta);

    // mesh.rotation.x = state.clock.getElapsedTime();

    if (keyController.keys.KeyW || keyController.keys.ArrowUp) {
      playerMesh.position.z -= 0.01;
      console.log("앞으로");
      if (playerMesh.rotation.y <= Math.PI) {
        playerMesh.rotation.y += delta * Math.PI * 2;
      }
    }
    if (keyController.keys["KeyS"] || keyController.keys["ArrowDown"]) {
      if (playerMesh.position.z < -0.5) {
        playerMesh.position.z += 0.01;
        if (playerMesh.rotation.y >= 0) {
          playerMesh.rotation.y -= delta * Math.PI * 2;
        }
      }
    }
    if (keyController.keys["KeyA"] || keyController.keys["ArrowLeft"]) {
      if (playerMesh.position.x > -0.7) {
        playerMesh.position.x -= 0.01;
      }
    }
    if (keyController.keys["KeyD"] || keyController.keys["ArrowRight"]) {
      if (playerMesh.position.x < 0.7) {
        playerMesh.position.x += 0.01;
      }
    }

    if (keyController.keys["Space"]) {
      if (playerMesh.position.y <= 1 && !jump) {
        playerMesh.position.y += 0.03;

        const jumpTimer = setTimeout(() => {
          jump = true;
          playerMesh.position.y -= 0.03;

          clearTimeout(jumpTimer);
        }, 300);
      }
      jump = false;
    }
    state.camera.position.z = playerMesh.position.z * 25 + 120;
  });

  // gltf 로더는 시간이 걸리는데 draw함수는 바로 실행되서 오류 발생. 그래서 if문 사용
  const gui = new dat.GUI();
  // gui.add(mesh.position, "y", -5, 5, 0.01).name("y 위치"); // 한줄로 쓸때
  // gui.add(camera.position, "x", -10, 10, 1).name("카메라 X");

  return (
    <>
      <primitive
        object={gltf.scene}
        scale={25}
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
