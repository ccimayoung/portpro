import React, { useRef, useState, useMemo } from "react";
import { useLoader, useFrame, useThree, extend } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";
import Keycontroller from "../../function/Keycontroller";
import { useRecoilState } from "recoil";
import { modalGatherState, questGatherState } from "../../recoil/store";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import {
  Selection,
  Select,
  EffectComposer,
  Outline,
} from "@react-three/postprocessing";

function BoardTodowith(props) {
  const loader = new THREE.TextureLoader();
  const [hover, setHover] = useState(false);
  const [modalGather, setmodalGather] = useRecoilState(modalGatherState);
  const ref = useRef();
  console.log(ref);
  const todowith = useLoader(TextureLoader, "/assets/textures/투두윗1.png");
  return (
    <>
      <Select enabled={hover}>
        <mesh
          position={[7.5, 0, -10.5]}
          rotation={[0, Math.PI / 1.3, 0]}
          onClick={() => {
            setmodalGather({ ...modalGather, todowithModal: true });
          }}
          onPointerOver={() => setHover(true)}
          onPointerOut={() => setHover(false)}
        >
          <boxGeometry attach="geometry" args={[2.5, 6, 0.5]} />
          <meshStandardMaterial
            attach="material"
            map={todowith}
            color={hover ? "#ffb1dc" : "white"}
          />
        </mesh>
      </Select>
    </>
  );
}

export default React.memo(BoardTodowith);
