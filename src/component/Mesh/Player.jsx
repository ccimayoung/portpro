import React, { useEffect, useRef, useState, useMemo } from "react";
import { useLoader, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";
import dat from "dat.gui";
import { PointerLockControls } from "three/examples/jsm/controls/PointerLockControls";
import Keycontroller from "../../function/Keycontroller";
import { useRecoilState } from "recoil";
import {
  modalGatherState,
  playerPositionState,
  questGatherState,
} from "../../recoil/store";
import { CatQuestModal1 } from "../Quest/CatQuestModal1";

const Player = (props) => {
  // const { canvas } = props;
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  const [playerPosition, setPlayerPosition] =
    useRecoilState(playerPositionState);
  const [modalGather, setmodalGather] = useRecoilState(modalGatherState);
  const [questGather, setQuestGather] = useRecoilState(questGatherState);
  const [pressG, setPressG] = useState(false);
  const { gl, camera } = useThree();
  const renderer = gl;
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1);
  camera.fov = 75;
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.near = 0.1;
  camera.far = 1000;
  camera.zoom = 0.8;

  const controls = new PointerLockControls(camera, renderer.domElement);
  const keyController = new Keycontroller();
  const conditions =
    keyController.keys.KeyW ||
    keyController.keys.ArrowUp ||
    keyController.keys["KeyS"] ||
    keyController.keys["ArrowDown"] ||
    keyController.keys["KeyA"] ||
    keyController.keys["ArrowLeft"] ||
    keyController.keys["KeyD"] ||
    keyController.keys["ArrowRight"] ||
    keyController.keys["Space"];

  // const keyDownEvent = (e) => {
  //   if (e.key === "Enter") {
  //     setPressG(true);
  //   }
  // };

  // const keyUpEvent = (e) => {
  //   if (e.key === "Enter") {
  //     setPressG(false);
  //   }
  // };

  useEffect(() => {
    setPlayerPosition([
      playerMesh.position.x,
      playerMesh.position.y,
      playerMesh.position.z,
    ]);
  }, [modalGather, pressG]);

  const gltf = useLoader(GLTFLoader, "/캐릭터.glb");

  const playerMesh = gltf.scene.children[0];
  const actions = [];
  const clock = new THREE.Clock();
  const delta = clock.getDelta();
  const mixer = new THREE.AnimationMixer(playerMesh);
  // console.log(gltf.scene.traverse);
  if (mixer) {
    actions[0] = mixer.clipAction(gltf.animations[0]);
    actions[1] = mixer.clipAction(gltf.animations[1]);
    actions[1].setEffectiveTimeScale(0.7);

    gltf.scene.traverse((child) => {
      // glb 그림자 설정
      if (child.isMesh) {
        child.castShadow = true;
      }
    });
  }

  controls.domElement.addEventListener("click", () => {
    controls.lock();
  });

  playerMesh.name = "player";
  // if (foward === "start") {

  playerMesh.rotation.y = Math.PI;
  // }
  useThree(({ camera }) => {
    camera.position.set(
      playerMesh.position.x,
      playerMesh.position.y + 35,
      playerMesh.position.z + 80
    );
    // camera.lookAt(
    //   playerMesh.position.x,
    //   playerMesh.position.y,
    //   playerMesh.position.z
    // );
    // camera.zoom = 0.2;
    camera.updateProjectionMatrix();
  });
  let jump = false;
  let walk = false;
  const playerSpeed = 0.02;
  console.log(playerMesh.position);

  useFrame((state, delta, frame) => {
    // playerMesh.position.y = 0.3;
    // playerMesh.position.z = -2;
    const cameraPosition = new THREE.Vector3(
      playerMesh.position.x,
      playerMesh.position.y * 25 + 35,
      playerMesh.position.z + 80
    );
    // camera.lookAt(playerMesh.position);
    camera.position.x = cameraPosition.x + playerMesh.position.x; //맞춰서 카메라 이동

    camera.position.z = cameraPosition.z + playerMesh.position.z * 24;

    if (mixer) {
      mixer.update(delta);
    }

    if (
      keyController.keys.KeyW ||
      keyController.keys.ArrowUp ||
      keyController.keys["KeyS"] ||
      keyController.keys["ArrowDown"] ||
      keyController.keys["KeyA"] ||
      keyController.keys["ArrowLeft"] ||
      keyController.keys["KeyD"] ||
      keyController.keys["ArrowRight"] ||
      keyController.keys["Space"]
    ) {
      if (!actions[1].isRunning()) {
        actions[1].reset();
        actions[1].setLoop(THREE.LoopRepeat, Infinity);
      }
      actions[1].play();
    } else {
      actions[1].setLoop(THREE.LoopOnce);
    }

    // if (Object.keys(keyController.keys).length) {
    //   if (!actions[1].isRunning()) {
    //     actions[1].reset();
    //     actions[1].setLoop(THREE.LoopRepeat, Infinity);
    //   }
    //   actions[1].play();
    // } else {
    //   actions[1].setLoop(THREE.LoopOnce);
    // }

    if (keyController.keys.KeyW || keyController.keys.ArrowUp) {
      if (playerMesh.rotation.y <= Math.PI) {
        playerMesh.rotation.y += delta * Math.PI * 2;
      }

      playerMesh.position.z -= playerSpeed;
    }
    walk = false;

    if (keyController.keys["KeyS"] || keyController.keys["ArrowDown"]) {
      if (playerMesh.position.z < 1) {
        playerMesh.position.z += playerSpeed;
        if (playerMesh.rotation.y >= 0) {
          playerMesh.rotation.y -= delta * Math.PI * 2;
        }
      }
    }

    if (keyController.keys["KeyA"] || keyController.keys["ArrowLeft"]) {
      if (playerMesh.position.x > -0.7) {
        playerMesh.position.x -= playerSpeed;
      }
    }
    if (keyController.keys["KeyD"] || keyController.keys["ArrowRight"]) {
      if (playerMesh.position.x < 0.7) {
        playerMesh.position.x += playerSpeed;
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

    if (keyController.keys["KeyG"]) {
      setPressG(!pressG);
    }

    // state.camera.position.z = playerMesh.position.z * 25 + 120;
  });

  // gltf 로더는 시간이 걸리는데 draw함수는 바로 실행되서 오류 발생. 그래서 if문 사용
  const gui = new dat.GUI();
  // gui.add(mesh.position, "y", -5, 5, 0.01).name("y 위치"); // 한줄로 쓸때
  // gui.add(camera.position, "x", -10, 10, 1).name("카메라 X");
  // gui.add(camera.position, "Y", -10, 10, 1).name("카메라 Y");
  // gui.add(camera.position, "Z", -10, 10, 1).name("카메라 Z");
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
};
export default React.memo(Player);
