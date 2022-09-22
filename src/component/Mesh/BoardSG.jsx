import React, { useState } from "react";
import { useLoader } from "@react-three/fiber";
import { useRecoilState } from "recoil";
import {
  findObjectGatherState,
  memoriesGatherState,
  modalGatherState,
} from "../../recoil/store";
import { TextureLoader } from "three/src/loaders/TextureLoader";

import { Select } from "@react-three/postprocessing";

function BoardSG(props) {
  const [hover, setHover] = useState(false);
  const [modalGather, setmodalGather] = useRecoilState(modalGatherState);
  const [findObjectGather, setFindObjectGather] = useRecoilState(
    findObjectGatherState
  );
  const [memoriesGather, setMemoriesGather] =
    useRecoilState(memoriesGatherState);

  const sg = useLoader(TextureLoader, "/assets/textures/브릿지게임1.png");
  console.log(findObjectGather);
  return (
    <>
      <Select enabled={hover}>
        <mesh
          position={[11.2, -1.6, -6.35]}
          rotation={[0, Math.PI / 1.3, 0]}
          onClick={() => {
            setMemoriesGather({ ...memoriesGather, sgMemory: true });
            const madalTimer = setTimeout(() => {
              setmodalGather({ ...modalGather, sgModal: true });
              const memoryTimer = setTimeout(() => {
                setFindObjectGather({
                  ...findObjectGather,
                  projectSg: true,
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
          <boxGeometry attach="geometry" args={[6, 2.7, 0.5]} />
          <meshStandardMaterial
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
