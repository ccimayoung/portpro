import React, { useRef, useState, useMemo } from "react";
import { useLoader, useFrame, useThree } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";
import Keycontroller from "../../function/Keycontroller";
import { useRecoilState } from "recoil";
import { playerPositionState, questGatherState } from "../../recoil/store";
import { TextureLoader } from "three/src/loaders/TextureLoader";

function PenguinQuestionMark(props) {
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  const [playerPosition, setPlayerPosition] =
    useRecoilState(playerPositionState);

  // load GLTF
  const gltf = useLoader(GLTFLoader, "/question_icon_penguin.glb");
  const questionMesh = gltf.scene.children[0];
  const clock = new THREE.Clock();
  const QuestionSizeByPlayer = 12.5;
  // const cameraPosition = new THREE.Vector3(1, 5, 5);
  // console.log(gltf.scene.traverse);
  const [questGather, setQuestGather] = useRecoilState(questGatherState);
  questionMesh.rotation.x = Math.PI / 180;
  // questionMesh.position.x = 5;
  questionMesh.position.y = -3.7;
  // questionMesh.position.z = -QuestionSizeByPlayer * 4.9;
  const keyController = new Keycontroller();

  useFrame((state, delta, frame) => {
    questionMesh.name = "BirdQuestionMark";
  });

  const preesG = useLoader(TextureLoader, "/assets/G 누르기.png");
  return (
    <>
      <mesh position={[23, 50, -1873]} rotation={[0, Math.PI / 180, 0]}>
        <boxGeometry attach="geometry" args={[25.6, 10.5, 1]} />
        <meshStandardMaterial
          attach="material"
          map={preesG}
          visible="true"
          // visible={hover ? true : false}
        />
        <primitive object={gltf.scene} scale={4} />
      </mesh>
    </>
  );
}
export default React.memo(PenguinQuestionMark);
