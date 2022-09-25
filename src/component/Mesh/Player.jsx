import React, { useEffect } from "react";
import { useLoader, useFrame, useThree } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";
import { PointerLockControls } from "three/examples/jsm/controls/PointerLockControls";
import Keycontroller from "../../function/Keycontroller";
import { useRecoilState } from "recoil";
import {
  bagGatherState,
  findObjectGatherState,
  modalGatherState,
  playerPositionState,
  questGatherState,
  questProgressGatherState,
} from "../../recoil/store";

const Player = (props) => {
  // const { canvas } = props;

  const [playerPosition, setPlayerPosition] =
    useRecoilState(playerPositionState);
  const [modalGather, setmodalGather] = useRecoilState(modalGatherState);
  const [questGather, setQuestGather] = useRecoilState(questGatherState);
  const [bagGather, setBagGather] = useRecoilState(bagGatherState);
  const [findObjectGather, setFindObjectGather] = useRecoilState(
    findObjectGatherState
  );
  const [questProgressGather, setQuestProgressGather] = useRecoilState(
    questProgressGatherState
  );

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

  controls.pointerSpeed = 0.15;
  controls.maxPolarAngle = THREE.MathUtils.degToRad(135);
  controls.minPolarAngle = Math.PI / 4;
  const keyController = new Keycontroller();

  useEffect(() => {
    setPlayerPosition([
      playerMesh.position.x,
      playerMesh.position.y,
      playerMesh.position.z,
    ]);
  }, [modalGather]);

  const playerGltf = useLoader(GLTFLoader, "/assets/glb/캐릭터.glb");
  const playerMesh = playerGltf.scene.children[0];
  const playerActions = [];
  const playerMixer = new THREE.AnimationMixer(playerMesh);
  const playerSpeed = 0.02;

  const catGltf = useLoader(GLTFLoader, "/assets/glb/cat.glb");
  const catMesh = catGltf.scene.children[0];
  const catSizeByPlayer = 830;
  const catActions = [];
  const catMixer = new THREE.AnimationMixer(catMesh);

  if (playerMixer) {
    playerActions[0] = playerMixer.clipAction(playerGltf.animations[0]);
    playerActions[1] = playerMixer.clipAction(playerGltf.animations[1]);
    playerActions[1].setEffectiveTimeScale(0.7);

    playerGltf.scene.traverse((child) => {
      // glb 그림자 설정
      if (child.isMesh) {
        child.castShadow = true;
      }
    });
  }

  if (catMixer) {
    catActions[0] = catMixer.clipAction(catGltf.animations[0]);
    catGltf.scene.traverse((child) => {
      // glb 그림자 설정
      if (child.isMesh) {
        child.castShadow = true;
      }
    });
  }

  if (questProgressGather.q1TunaCan !== "finish") {
    catMesh.position.x = catSizeByPlayer * 0.4;
    catMesh.position.y = -catSizeByPlayer * 0.5;
    catMesh.position.z = -catSizeByPlayer * 6;
  }

  controls.domElement.addEventListener("click", () => {
    controls.lock();
  });

  playerMesh.name = "player";

  playerMesh.rotation.y = Math.PI;

  useThree(({ camera }) => {
    camera.position.set(
      playerMesh.position.x,
      playerMesh.position.y + 35,
      playerMesh.position.z + 80
    );
    camera.updateProjectionMatrix();
  });

  let playerJump = false;
  let catJump = false;

  if (questProgressGather.q1TunaCan === "finish") {
    catMesh.rotation.z = Math.PI;
  }
  useFrame((state, delta, frame) => {
    const cameraPosition = new THREE.Vector3(
      playerMesh.position.x,
      playerMesh.position.y * 25 + 35,
      playerMesh.position.z + 80
    );
    camera.position.x = cameraPosition.x + playerMesh.position.x;
    camera.position.z = cameraPosition.z + playerMesh.position.z * 24;
    if (questProgressGather.q1TunaCan === "finish") {
      catMesh.position.x = catSizeByPlayer * playerMesh.position.x;
      catMesh.position.z = catSizeByPlayer * playerMesh.position.z + 830;
    }
    if (playerMixer) {
      playerMixer.update(delta);
    }
    if (catMixer) {
      catMixer.update(delta);
    }

    //걸을때 애니메이션
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
      if (!playerActions[1].isRunning()) {
        playerActions[1].reset();
        playerActions[1].setLoop(THREE.LoopRepeat, Infinity);

        if (questProgressGather.q1TunaCan === "finish") {
          catActions[0].reset();
          catActions[0].setLoop(THREE.LoopRepeat, Infinity);
        }
      }

      playerActions[1].play();

      if (questProgressGather.q1TunaCan === "finish") {
        catActions[0].play();
      }
    } else {
      playerActions[1].setLoop(THREE.LoopOnce);

      if (questProgressGather.q1TunaCan === "finish") {
        catActions[0].setLoop(THREE.LoopOnce);
      }
    }

    if (keyController.keys.KeyW || keyController.keys.ArrowUp) {
      if (playerMesh.position.z > -80) {
        if (playerMesh.rotation.y <= Math.PI) {
          playerMesh.rotation.y += delta * Math.PI * 2;
          if (questProgressGather.q1TunaCan === "finish") {
            catMesh.rotation.z += delta * Math.PI * 2;
          }
        }

        if (keyController.keys.ShiftLeft) {
          playerMesh.position.z -= playerSpeed * 3;
          playerActions[1].setEffectiveTimeScale(1.2);
        } else {
          playerMesh.position.z -= playerSpeed;
          playerActions[1].setEffectiveTimeScale(0.7);
        }
      }
    }

    if (keyController.keys["KeyS"] || keyController.keys["ArrowDown"]) {
      if (playerMesh.position.z < 1) {
        if (keyController.keys.ShiftLeft) {
          playerMesh.position.z += playerSpeed * 3;
          playerActions[1].setEffectiveTimeScale(1.2);
        } else {
          playerMesh.position.z += playerSpeed;
          playerActions[1].setEffectiveTimeScale(0.7);
        }
        if (playerMesh.rotation.y >= 0) {
          playerMesh.rotation.y -= delta * Math.PI * 2;

          if (questProgressGather.q1TunaCan === "finish") {
            catMesh.rotation.z -= delta * Math.PI * 2;
          }
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
      if (playerMesh.position.y <= 1 && !playerJump) {
        playerMesh.position.y += 0.03;

        const jumpTimer = setTimeout(() => {
          playerJump = true;
          playerMesh.position.y -= 0.03;

          clearTimeout(jumpTimer);
        }, 300);
      }
      playerJump = false;

      // const catJumpTimer = setTimeout(() => {
      if (
        catMesh.position.y <= catSizeByPlayer &&
        !catJump &&
        questProgressGather.q1TunaCan === "finish"
      ) {
        catMesh.position.y += 0.03 * catSizeByPlayer;

        const jumpTimer = setTimeout(() => {
          catJump = true;
          catMesh.position.y -= 0.03 * catSizeByPlayer;

          clearTimeout(jumpTimer);
        }, 300);
      }
      //   clearTimeout(catJumpTimer);
      // }, 100);

      catJump = false;
    }

    if (keyController.keys["KeyG"]) {
      if (
        playerMesh.position.z > -7.3 &&
        playerMesh.position.z < -3.3 &&
        questProgressGather.q1TunaCan !== "finish"
      ) {
        setQuestGather({ ...questGatherState, catQuestModal1: true });
        // console.log("고양이g");
      }

      if (playerMesh.position.z > -15 && playerMesh.position.z < -11) {
        setQuestGather({ ...questGatherState, foxQuestModal: true });
        // console.log("여우g");
      }

      if (
        playerMesh.position.z > -30 &&
        playerMesh.position.z < -22.5 &&
        !findObjectGather.keyFind
      ) {
        setBagGather({ ...bagGather, key1: true });
        setFindObjectGather({
          ...findObjectGather,
          keyModal: true,
          keyFind: true,
        });
        // console.log("키g");
      }

      if (playerMesh.position.z > -60 && playerMesh.position.z < -46) {
        setQuestGather({ ...questGatherState, birdQuestModal: true });
      }

      if (playerMesh.position.z > -98 && playerMesh.position.z < -67) {
        setQuestGather({ ...questGatherState, penguinQuestModal: true });
      }
    }

    if (keyController.keys["Escape"]) {
      setmodalGather({
        ...modalGather,

        questionModal: false,
        questModal: false,
        memoriesModal: false,
        bagModal: false,
      });
      setFindObjectGather({ ...findObjectGather, keyModal: false });
    }
  });

  return (
    <>
      <primitive object={playerGltf.scene} scale={25} />
      <primitive object={catGltf.scene} scale={0.03} />
    </>
  );
};
export default React.memo(Player);
