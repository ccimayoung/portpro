import React, { useState } from "react";
import { useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { useRecoilState } from "recoil";
import {
  findObjectGatherState,
  memoriesGatherState,
  modalGatherState,
  questGatherState,
} from "../../recoil/store";
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
  const [findObjectGather, setFindObjectGather] = useRecoilState(
    findObjectGatherState
  );
  const [memoriesGather, setMemoriesGather] =
    useRecoilState(memoriesGatherState);
  const todowith = useLoader(TextureLoader, "/assets/textures/투두윗1.png");
  return (
    <>
      <Select enabled={hover}>
        <mesh
          position={[7.5, 0, -10.5]}
          rotation={[0, Math.PI / 1.3, 0]}
          onClick={() => {
            setMemoriesGather({ ...memoriesGather, todowithMemory: true });
            const madalTimer = setTimeout(() => {
              setmodalGather({ ...modalGather, todowithModal: true });
              const memoryTimer = setTimeout(() => {
                setFindObjectGather({
                  ...findObjectGather,
                  projectTodowith: true,
                  projectModal: true,
                });
                clearTimeout(memoryTimer);
              }, 200);

              clearTimeout(madalTimer);
            }, 200);
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
