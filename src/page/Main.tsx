import React, { useRef } from "react";
import {
  useRecoilBridgeAcrossReactRoots_UNSTABLE,
  useRecoilState,
} from "recoil";
import { Suspense } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Cat } from "../component/Mesh/Cat";
import Player from "../component/Mesh/Player";
import { BottomMenu } from "../component/BottomMenu";
import { BagModal } from "../component/BagModal";
import { QuestionModal } from "../component/QuestionModal";
import {
  findObjectGatherState,
  questProgressGatherState,
} from "../recoil/store";
import { CatQuestModal1 } from "../component/Quest/CatQuestModal1";
import { MemoriesModal } from "../component/MemoriesModal";
import HouseOut from "../component/Mesh/HouseOut";
import CatQuestionMark from "../component/Mesh/CatQuestionMark";
import { QuestModal } from "../component/QuestModal";
import Fox from "../component/Mesh/Fox";
import FoxQuestionMark from "../component/Mesh/FoxQuestionMark";
import { FoxQuestModal } from "../component/Quest/FoxQuestModal";
import KittyKey from "../component/Mesh/KittyKey";
import KittyKeyQuestionMark from "../component/Mesh/KittyKeyQuestionMark";
import { FindKeyModal } from "../component/Quest/FindKeyModal";
import Bird from "../component/Mesh/Bird";
import BirdQuestionMark from "../component/Mesh/BirdQuestionMark";
import { BirdQuestModal } from "../component/Quest/BirdQuestModal";
import Penguin from "../component/Mesh/Penguin";
import PenguinQuestionMark from "../component/Mesh/PenguinQuestionMark";
import { PenguinQuestModal } from "../component/Quest/PenguinQuestModal";
import { FinishModal } from "../component/FinishModal";

function RoadMesh(props: JSX.IntrinsicElements["mesh"]) {
  const gltf = useLoader(GLTFLoader, "/adventure_map.glb");
  const roadMesh = gltf.scene.children[0];
  roadMesh.rotation.z = Math.PI;
  roadMesh.position.y = -450;
  roadMesh.position.z = 1400;
  useFrame((state, delta, frame) => {
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
  const ref = useRef<any>();
  const canvas = ref.current;
  const RecoilBridge = useRecoilBridgeAcrossReactRoots_UNSTABLE();
  const [questProgressGather, setQuestProgressGather] = useRecoilState(
    questProgressGatherState
  );
  const [findObjectGather, setFindObjectGather] = useRecoilState(
    findObjectGatherState
  );

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
        <ambientLight intensity={0.8} />
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
            {questProgressGather.q1TunaCan !== "finish" && <CatQuestionMark />}
            <FoxQuestionMark />
          </Suspense>
          <Suspense fallback={null}>
            <HouseOut />
            <Fox />
            {!findObjectGather.keyFind && (
              <>
                <KittyKey /> <KittyKeyQuestionMark />
              </>
            )}
          </Suspense>
          <Suspense fallback={null}>
            <Bird />
            <BirdQuestionMark />
            <Penguin />
            <PenguinQuestionMark />
          </Suspense>
        </RecoilBridge>
        <pointLight position={[10, 10, 10]} />
      </Canvas>
      <BottomMenu />
      <MemoriesModal />
      <QuestionModal />
      <BagModal />
      <CatQuestModal1 />
      <FoxQuestModal />
      <QuestModal />
      <FindKeyModal />
      <BirdQuestModal />
      <PenguinQuestModal />
      <FinishModal />
    </>
  );
};
