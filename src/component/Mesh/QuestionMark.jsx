import React, { useRef, useState, useMemo } from "react";
import { useLoader, useFrame, useThree } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";
import Keycontroller from "../../function/Keycontroller";
import { useRecoilState } from "recoil";
import { questGatherState } from "../../recoil/store";

function Exclamation(props) {
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  // load GLTF
  const gltf = useLoader(GLTFLoader, "/question_3d_icon.glb");
  const questionMesh = gltf.scene.children[0];
  const clock = new THREE.Clock();
  const QuestionSizeByPlayer = 12.5;
  // const cameraPosition = new THREE.Vector3(1, 5, 5);
  // console.log(gltf.scene.traverse);
  const [questGather, setQuestGather] = useRecoilState(questGatherState);
  questionMesh.rotation.x = Math.PI / 180;
  questionMesh.position.x = 5;
  questionMesh.position.y = 7;
  questionMesh.position.z = -QuestionSizeByPlayer * 7;
  const keyController = new Keycontroller();

  useFrame((state, delta, frame) => {
    questionMesh.name = "exclamationt";
    if (keyController.keys["KeyG"]) {
      setQuestGather({ ...questGatherState, catQuestModal1: true });
      console.log("g누른ㄱ");
    }
  });

  return (
    <>
      <primitive
        object={gltf.scene}
        scale={2}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
        onClick={() => window.open("https://sketchfab.com/anthonyjamesgirdler")}
        // camera={{ fov: 75 }}
      />
    </>
  );
}
export default React.memo(Exclamation);
