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
  const exclamationtMesh = gltf.scene.children[0];
  const clock = new THREE.Clock();
  const exclamationtSizeByPlayer = 10;

  exclamationtMesh.position.x = 11.5;
  exclamationtMesh.position.y = -3.5;
  exclamationtMesh.position.z = -38.5;
  const keyController = new Keycontroller();

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
