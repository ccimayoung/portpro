import React, { useRef, useState, useMemo } from "react";
import { useLoader, useFrame, useThree } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";
import Keycontroller from "../../function/Keycontroller";
import { useRecoilState } from "recoil";
import { questGatherState } from "../../recoil/store";

function HouseOut(props) {
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  // load GLTF
  const gltf = useLoader(GLTFLoader, "/fishercabin.glb");
  console.log(gltf);
  const exclamationtMesh = gltf.scene.children[0];
  const clock = new THREE.Clock();
  const exclamationtSizeByPlayer = 10;

  exclamationtMesh.position.x = 12;
  exclamationtMesh.position.y = -1;
  exclamationtMesh.position.z = -20;
  const keyController = new Keycontroller();

  useFrame((state, delta, frame) => {
    exclamationtMesh.name = "exclamationt";
    if (keyController.keys["KeyG"]) {
      console.log("g누른ㄱ");
    }
  });

  return (
    <>
      <primitive
        object={gltf.scene}
        scale={10}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
        onClick={() => window.open("https://sketchfab.com/anthonyjamesgirdler")}
      />
    </>
  );
}
export default React.memo(HouseOut);
