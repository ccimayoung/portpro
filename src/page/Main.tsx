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
import { Canvas, useFrame, ThreeElements, useLoader } from "@react-three/fiber";
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
import { questGatherState } from "../recoil/store";
import { CatQuestModal1 } from "../component/Quest/CatQuestModal1";
import { MemoriesModal } from "../component/MemoriesModal";

function RoadMesh(props: JSX.IntrinsicElements["mesh"]) {
  // load GLTF
  const gltf = useLoader(GLTFLoader, "/adventure_map.glb");
  // console.log(gltf);
  // handle 3d model
  useFrame((state, delta, frame) => {
    const mesh = gltf.scene.children[0];
    mesh.rotation.z = Math.PI;
    // mesh.rotation.x = state.clock.getElapsedTime();
  });
  return (
    <>
      <primitive
        object={gltf.scene}
        scale={0.03}
        onClick={() => window.open("https://sketchfab.com/anthonyjamesgirdler")}
      />
    </>
  );
}

export const Main = () => {
  const clock = new THREE.Clock();
  const ref = useRef<any>();

  const canvas = ref.current;
  const RecoilBridge = useRecoilBridgeAcrossReactRoots_UNSTABLE();

  // const [questGather, setQuestGather] = useRecoilState(questGatherState);
  // const keyUpEvent = (e: React.KeyboardEvent<any>) => {
  //   console.log(e);
  //   if (e.key === "G") {
  //     setQuestGather({ ...questGatherState, catQuestModal1: true });
  //   }
  // };

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
        <ambientLight />
        <directionalLight />
        <RecoilBridge>
          <Suspense fallback={null}>
            <RoadMesh position={[0, 1, 0]} />
          </Suspense>
          <Suspense fallback={null}>
            <Player canvasProp={canvas} />
          </Suspense>
          <Suspense fallback={null}>
            <Cat />
            <Exclamation></Exclamation>
          </Suspense>
          <Suspense fallback={null}></Suspense>
        </RecoilBridge>
        <pointLight position={[10, 10, 10]} />
      </Canvas>
      <BottomMenu />
      <MemoriesModal />
      <QuestionModal />
      <BagModal />
      <CatQuestModal1 />
    </>
  );
};
