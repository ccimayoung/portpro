import React, { useRef, useState, useMemo } from "react";
import { useLoader, useFrame, useThree } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";
import Keycontroller from "../../function/Keycontroller";
import { useRecoilState } from "recoil";
import { questGatherState } from "../../recoil/store";
import { TextureLoader } from "three/src/loaders/TextureLoader";

function HouseOut(props) {
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  // load GLTF
  const gltf = useLoader(GLTFLoader, "/fishercabin.glb");
  const houseMesh = gltf.scene.children[0];
  const clock = new THREE.Clock();
  const exclamationtSizeByPlayer = 10;

  houseMesh.position.x = 0.1;
  houseMesh.position.y = -7.55;
  houseMesh.position.z = 4;
  houseMesh.rotation.z = (Math.PI / 180) * -90;

  const cp = useLoader(TextureLoader, "/assets/textures/cp.png");

  return (
    <mesh position={[70, 38, -385]} rotation={[0, (Math.PI / 180) * 90, 0]}>
      <primitive
        object={gltf.scene}
        scale={10}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
        onClick={() => window.open("https://sketchfab.com/anthonyjamesgirdler")}
      />
      <boxGeometry attach="geometry" args={[33, 11, 1]} />
      <meshStandardMaterial attach="material" map={cp} color={"white"} />
    </mesh>
  );
}
export default React.memo(HouseOut);
