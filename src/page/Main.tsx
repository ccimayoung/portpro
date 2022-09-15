import React, { MutableRefObject, Ref, useRef } from "react";
import styled, { keyframes } from "styled-components";
import { useRecoilState, useRecoilValue } from "recoil";
import { Suspense, useEffect, useState } from "react";
import * as THREE from "three";
import { createRoot } from "react-dom/client";
import { useGLTF } from "@react-three/drei";
import { Canvas, useFrame, ThreeElements, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { CatMesh } from "../component/CatMesh";
import { PointerLockControls } from "three/examples/jsm/controls/PointerLockControls";
import Keycontroller from "../function/Keycontroller";
import { PlayerMesh } from "../component/Player";
import { BottomMenu } from "../component/BottomMenu";
import { QuestModal } from "../component/QuestModal";
import { BagModal } from "../component/BagModal";

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
  // Renderer
  const canvas = ref.current;

  return (
    <>
      <Canvas
        ref={ref}
        style={{
          backgroundColor: "#7ec7ff",
          width: "100vw",
          height: "100vh",
        }}
      >
        <ambientLight />
        <directionalLight />
        <Suspense fallback={null}>
          <RoadMesh position={[0, 1, 0]} />
        </Suspense>
        <Suspense fallback={null}>
          <PlayerMesh canvasProp={canvas} />
        </Suspense>
        <Suspense fallback={null}>
          <CatMesh />
        </Suspense>
        <pointLight position={[10, 10, 10]} />
      </Canvas>
      <BottomMenu />
      <QuestModal />
      <BagModal />
    </>
  );
};
