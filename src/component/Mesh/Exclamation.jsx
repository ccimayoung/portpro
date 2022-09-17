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
  const gltf = useLoader(GLTFLoader, "/exclamation_mark_3d_icon.glb");
  console.log(gltf);
  const exclamationtMesh = gltf.scene.children[0];
  const clock = new THREE.Clock();
  const exclamationtSizeByPlayer = 10;
  // const cameraPosition = new THREE.Vector3(1, 5, 5);
  // console.log(gltf.scene.traverse);
  const [questGather, setQuestGather] = useRecoilState(questGatherState);

  exclamationtMesh.position.x = exclamationtSizeByPlayer * 0.4;
  exclamationtMesh.position.y = exclamationtSizeByPlayer * 0.6;
  exclamationtMesh.position.z = -30;
  const keyController = new Keycontroller();

  useFrame((state, delta, frame) => {
    exclamationtMesh.name = "exclamationt";
    if (keyController.keys["KeyG"]) {
      setQuestGather({ ...questGatherState, catQuestModal1: true });
      console.log("g누른ㄱ");
    }
  });

  return (
    <>
      <primitive
        object={gltf.scene}
        scale={2.5}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
        onClick={() => window.open("https://sketchfab.com/anthonyjamesgirdler")}
        // camera={{ fov: 75 }}
      />
    </>
  );
}
export default React.memo(Exclamation);
