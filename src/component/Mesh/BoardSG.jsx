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

function BoardSG(props) {
  const loader = new THREE.TextureLoader();
  const [hover, setHover] = useState(false);
  const [modalGather, setmodalGather] = useRecoilState(modalGatherState);

  const sg = useLoader(TextureLoader, "/assets/textures/브릿지게임1.png");
  return (
    <>
      <Select enabled={hover}>
        <mesh
          position={[11.2, -1.6, -6.35]}
          rotation={[0, Math.PI / 1.3, 0]}
          onClick={() => {
            setmodalGather({ ...modalGather, sgModal: true });
          }}
          onPointerOver={() => setHover(true)}
          onPointerOut={() => setHover(false)}
        >
          <boxGeometry attach="geometry" args={[6, 2.7, 0.5]} />
          <meshBasicMaterial
            attach="material"
            map={sg}
            color={hover ? "#ffb1dc" : "white"}
          />
        </mesh>
      </Select>
    </>
  );
}

export default React.memo(BoardSG);
