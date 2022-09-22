import React, { useState } from "react";
import { useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { useRecoilState } from "recoil";
import {
  findObjectGatherState,
  memoriesGatherState,
  modalGatherState,
} from "../../recoil/store";
import { TextureLoader } from "three/src/loaders/TextureLoader";

import { Select } from "@react-three/postprocessing";

function BoardUT(props) {
  const [hover, setHover] = useState(false);
  const [modalGather, setmodalGather] = useRecoilState(modalGatherState);
  const [findObjectGather, setFindObjectGather] = useRecoilState(
    findObjectGatherState
  );
  const [memoriesGather, setMemoriesGather] =
    useRecoilState(memoriesGatherState);
  console.log(findObjectGather);
  const todowith = useLoader(TextureLoader, "/assets/textures/우탐1.png");
  return (
    <>
      <Select enabled={hover}>
        <mesh
          position={[11.5, 1.6, -6.6]}
          rotation={[0, Math.PI / 1.3, 0]}
          onClick={() => {
            setMemoriesGather({ ...memoriesGather, utMemory: true });
            const madalTimer = setTimeout(() => {
              setmodalGather({ ...modalGather, utModal: true });
              const memoryTimer = setTimeout(() => {
                setFindObjectGather({
                  ...findObjectGather,
                  projectUt: true,
                  projectModal: true,
                });
                clearTimeout(memoryTimer);
              }, 200);

              clearTimeout(madalTimer);
            }, 200);
          }}
        >
          <boxGeometry attach="geometry" args={[6, 2.7, 0.5]} />
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

export default React.memo(BoardUT);
