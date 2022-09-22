import React, { useRef } from "react";
import {
  useRecoilBridgeAcrossReactRoots_UNSTABLE,
  useRecoilState,
} from "recoil";

import { Suspense, useEffect } from "react";
import * as THREE from "three";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Keycontroller from "../function/Keycontroller";
import { BottomMenu } from "../component/BottomMenu";
import { BagModal } from "../component/BagModal";
import { QuestionModal } from "../component/QuestionModal";
import { findObjectGatherState, modalGatherState } from "../recoil/store";

import { MemoriesModal } from "../component/MemoriesModal";

import { TextureLoader } from "three/src/loaders/TextureLoader";
import { QuestModal } from "../component/QuestModal";
import { FindPhotoModal } from "../component/Quest/FindPhotoModal";

function PhotoParticleMesh(props: JSX.IntrinsicElements["mesh"]) {
  const [modalGather, setmodalGather] = useRecoilState(modalGatherState);
  const [findObjectGather, setFindObjectGather] = useRecoilState(
    findObjectGatherState
  );

  const { gl, camera, scene } = useThree<any>();
  const renderer = gl;
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1);
  camera.fov = 75;
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.near = 0.1;
  camera.far = 1000;
  const keyController = new Keycontroller();

  const sphereRef = useRef<any>(null);

  const positionArray = sphereRef.current?.attributes.position.array;

  let plane;

  const planeMesh1 = new THREE.Mesh(
    new THREE.PlaneGeometry(0.3, 0.3),
    new THREE.MeshStandardMaterial({
      side: THREE.DoubleSide, // 양쪽면 보임
      map: useLoader(TextureLoader, `/assets/사진/사진1.jpg`),
    })
  );
  const planeMesh2 = new THREE.Mesh(
    new THREE.PlaneGeometry(0.3, 0.3),
    new THREE.MeshStandardMaterial({
      side: THREE.DoubleSide, // 양쪽면 보임
      map: useLoader(TextureLoader, `/assets/사진/사진3.jpg`),
    })
  );
  const planeMesh3 = new THREE.Mesh(
    new THREE.PlaneGeometry(0.3, 0.3),
    new THREE.MeshStandardMaterial({
      side: THREE.DoubleSide, // 양쪽면 보임
      map: useLoader(TextureLoader, `/assets/사진/사진6.jpg`),
    })
  );
  const planeMesh4 = new THREE.Mesh(
    new THREE.PlaneGeometry(0.3, 0.3),
    new THREE.MeshStandardMaterial({
      side: THREE.DoubleSide, // 양쪽면 보임
      map: useLoader(TextureLoader, `/assets/사진/사진4.jpg`),
    })
  );

  // const preesG = useLoader(TextureLoader, "/assets/G 누르기.png");

  if (positionArray) {
    for (let i = 0; i < positionArray.length; i += 3) {
      // textuerLoaderLoad = textureLoader.load(
      //   `/assets/사진/사진${Math.ceil(Math.random() * 5)}.jpg`
      // );
      if ((i / 3) % 4 === 0) {
        plane = planeMesh1.clone();
      } else if ((i / 3) % 4 === 1) {
        plane = planeMesh2.clone();
      } else if ((i / 3) % 4 === 2) {
        plane = planeMesh3.clone();
      } else {
        plane = planeMesh4.clone();
      }

      if (plane) {
        // console.log(plane);
        plane.position.x = positionArray[i];
        plane.position.y = positionArray[i + 1];
        plane.position.z = positionArray[i + 2];

        plane.lookAt(0, 0, 0); // 가운데 바라보게 설정

        scene.add(plane);
      }
    }
  }

  useFrame((state, delta, frame) => {
    if (keyController.keys["Escape"]) {
      setmodalGather({
        ...modalGather,

        questionModal: false,
        questModal: false,
        memoriesModal: false,
        bagModal: false,
      });
      setFindObjectGather({ ...findObjectGather, photoModal: false });
    }
  });
  return (
    <>
      <mesh visible={false}>
        <sphereGeometry attach="geometry" args={[2, 16, 16]} ref={sphereRef} />
      </mesh>
    </>
  );
}

export const PhotoParticle = () => {
  const clock = new THREE.Clock();
  const ref = useRef<any>();
  const RecoilBridge = useRecoilBridgeAcrossReactRoots_UNSTABLE();
  const [findObjectGather, setFindObjectGather] = useRecoilState(
    findObjectGatherState
  );

  useEffect(() => {
    const photoModalTime = setTimeout(() => {
      setFindObjectGather({ ...findObjectGather, photoModal: true });
      clearTimeout(photoModalTime);
    }, 300);
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
        <RecoilBridge>
          <Suspense fallback={null}>
            <PhotoParticleMesh />
          </Suspense>
          <OrbitControls />
        </RecoilBridge>
      </Canvas>
      <BottomMenu />
      <MemoriesModal />
      <QuestionModal />
      <QuestModal />
      <BagModal />
      <FindPhotoModal />
    </>
  );
  // };
};
