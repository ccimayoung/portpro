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

function BoardUT(props) {
  const loader = new THREE.TextureLoader();
  const [hover, setHover] = useState(false);
  const [modalGather, setmodalGather] = useRecoilState(modalGatherState);

  const todowith = useLoader(TextureLoader, "/assets/textures/우탐1.png");
  return (
    <>
      <Select enabled={hover}>
        <mesh
          position={[11.5, 1.6, -6.6]}
          rotation={[0, Math.PI / 1.3, 0]}
          onClick={() => {
            setmodalGather({ ...modalGather, utModal: true });
          }}
          onPointerOver={() => setHover(true)}
          onPointerOut={() => setHover(false)}
        >
          <boxGeometry attach="geometry" args={[6, 2.7, 0.5]} />
          <meshBasicMaterial
            attach="material"
            map={todowith}
            color={hover ? "#ffb1dc" : "white"}
          />
        </mesh>
      </Select>
    </>
  );
}

export default React.memo(BoardUT);
