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
import { TodowithModal } from "../component/Project/TodowithModal";
import BoardUT from "../component/Mesh/BoardUT";
import BoardSG from "../component/Mesh/BoardSG";
import { SgModal } from "../component/Project/SgModal";
import { UtModal } from "../component/Project/UtModal";
import { MemoriesModal } from "../component/MemoriesModal";
import { FindTuna1Modal } from "../component/Quest/FindTuna1Modal";
import { FindTuna2Modal } from "../component/Quest/FindTuna2Modal";
import { HouseInExplainModal } from "../component/HouseInExplainModal";
import { HouseInMenu } from "../component/HouseInMenu";
import { QuestModal } from "../component/QuestModal";
import { FindProjectModal } from "../component/Quest/FindProjectModal";

function HouseInMesh(props: JSX.IntrinsicElements["mesh"]) {
  const gltf = useLoader(GLTFLoader, "/rick_and_morty_garage_fan_art.glb");
  const { gl, camera }: { gl: any; camera: any } = useThree();
  const renderer = gl;
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1);
  camera.fov = 75;
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.near = 0.1;
  camera.far = 1000;

  // camera.zoom = 0.2;
  const houseMesh = gltf.scene.children[0];
  houseMesh.rotation.z = Math.PI / 4;
  houseMesh.position.set(-1, -1.5, -2.5);
  useFrame((state, delta, frame) => {
    // mesh.rotation.x = state.clock.getElapsedTime();
  });
  return (
    <>
      <primitive
        object={gltf.scene}
        scale={2.5}
        onClick={() => window.open("https://sketchfab.com/anthonyjamesgirdler")}
      />
    </>
  );
}

export const HouseInMap = () => {
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
          backgroundColor: "#7ec7ff",
          width: "100vw",
          height: "100vh",
        }}
        // onKeyUp={keyUpEvent}
      >
        <ambientLight color={"white"} intensity={0.5} />
        {/* <directionalLight /> */}
        <RecoilBridge>
          <Suspense fallback={null}>
            <BoardTodowith />
            <BoardUT />
            <BoardSG />
            <HouseInMesh />
            <TunaCan1 />
            <TunaCan2 />
          </Suspense>
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
      <TodowithModal />
      <UtModal />
      <SgModal />
      <FindTuna1Modal />
      <FindTuna2Modal />
      <HouseInExplainModal />
      <HouseInMenu />
      <QuestModal />
      <FindProjectModal />
    </>
  );
};
