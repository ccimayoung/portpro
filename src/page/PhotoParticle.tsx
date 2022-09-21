import React, { MutableRefObject, Ref, useRef } from "react";
import styled, { keyframes } from "styled-components";
import {
  useRecoilBridgeAcrossReactRoots_UNSTABLE,
  useRecoilState,
  useRecoilValue,
} from "recoil";

import { Suspense, useEffect, useState } from "react";
import * as THREE from "three";
import { createRoot } from "react-dom/client";
import { useGLTF } from "@react-three/drei";
import {
  Canvas,
  useFrame,
  ThreeElements,
  useLoader,
  useThree,
} from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Cat } from "../component/Mesh/Cat";
import { PointerLockControls } from "three/examples/jsm/controls/PointerLockControls";
import Keycontroller from "../function/Keycontroller";
import Player from "../component/Mesh/Player";
import { BottomMenu } from "../component/BottomMenu";
import { BagModal } from "../component/BagModal";
import { QuestionModal } from "../component/QuestionModal";
import Exclamation from "../component/Mesh/Exclamation";
import { modalGatherState, questGatherState } from "../recoil/store";
import { CatQuestModal1 } from "../component/Quest/CatQuestModal1";
import TunaCan1 from "../component/Mesh/TunaCan1";
import TunaCan2 from "../component/Mesh/TunaCan2";
import BoardTodowith from "../component/Mesh/BoardTodowith";
import {
  Selection,
  Select,
  EffectComposer,
  Outline,
} from "@react-three/postprocessing";
import { MemoriesModal } from "../component/MemoriesModal";
import { TextureLoader } from "three/src/loaders/TextureLoader";

function PhotoParticleMesh(props: JSX.IntrinsicElements["mesh"]) {
  const gltf = useLoader(GLTFLoader, "/rick_and_morty_garage_fan_art.glb");
  const { gl, camera }: { gl: any; camera: any } = useThree();
  const renderer = gl;
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1);
  camera.fov = 75;
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.near = 0.1;
  camera.far = 1000;

  const imagePanels = [];

  const photo1 = useLoader(TextureLoader, "/assets/사진/사진1.jpg");

  useFrame((state, delta, frame) => {
    // mesh.rotation.x = state.clock.getElapsedTime();
  });
  return (
    <>
      <mesh>
        <planeGeometry attach="geometry" args={[0.3, 0.3]} />
        <meshStandardMaterial
          map={photo1}
          attach="material"
          color="#ffb1dc"
          visible={true}
        />

        <primitive object={gltf.scene} scale={0.005} />
      </mesh>
    </>
  );
}

export const PhotoParticle = () => {
  const clock = new THREE.Clock();
  const ref = useRef<any>();
  const [modalGather, setmodalGather] = useRecoilState(modalGatherState);
  const canvas = ref.current;
  const RecoilBridge = useRecoilBridgeAcrossReactRoots_UNSTABLE();

  // const [questGather, setQuestGather] = useRecoilState(questGatherState);
  // const keyUpEvent = (e: React.KeyboardEvent<any>) => {
  //   console.log(e);
  //   if (e.key === "G") {
  //     setQuestGather({ ...questGatherState, catQuestModal1: true });
  //   }
  // };

  useEffect(() => {
    setmodalGather({ ...modalGather, houseInExplainModal: true });
  }, []);

  return (
    <>
      <Canvas
        ref={ref}
        style={{
          backgroundColor: "black",
          width: "100vw",
          height: "100vh",
        }}
        // onKeyUp={keyUpEvent}
      >
        <ambientLight color={"white"} intensity={0.5} />
        {/* <directionalLight /> */}
        <RecoilBridge>
          <Suspense fallback={null}></Suspense>
          <OrbitControls />
        </RecoilBridge>
        {/* <pointLight position={[30, 10, 10]} /> */}
        <Selection>
          <EffectComposer multisampling={8} autoClear={false}>
            <Outline blur visibleEdgeColor={1} edgeStrength={100} width={500} />
          </EffectComposer>
        </Selection>
      </Canvas>
      <BottomMenu />
      <MemoriesModal />
      <QuestionModal />
      <BagModal />
    </>
  );
  // };

  // export class ImagePanel {
  //   constructor(info) {
  //     const texture = info.textureLoader.load(info.imageSrc);
  //     const material = new MeshBasicMaterial({
  //       map: texture,
  //       side: DoubleSide,
  //     });

  //     this.mesh = new Mesh(info.geometry, material);
  //     this.mesh.position.set(info.x, info.y, info.z);
  //     this.mesh.lookAt(0, 0, 0);

  //     // Sphere 상태의 회전각을 저장해둠. 날라가는게 좋으면 여기 빼기
  //     this.sphereRotationX = this.mesh.rotation.x;
  //     this.sphereRotationY = this.mesh.rotation.y;
  //     this.sphereRotationZ = this.mesh.rotation.z;

  //     info.scene.add(this.mesh);
  //   }
};
