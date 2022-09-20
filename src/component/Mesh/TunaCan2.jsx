import React, { useRef, useState, useMemo } from "react";
import { useLoader, useFrame, useThree } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";
import Keycontroller from "../../function/Keycontroller";
import { useRecoilState } from "recoil";
import {
  bagGatherState,
  findObjectGatherState,
  questGatherState,
} from "../../recoil/store";
import { Select } from "@react-three/drei";

function TunaCan2(props) {
  // load GLTF
  const gltf = useLoader(GLTFLoader, "/tuna_can2.glb");
  const tunaCanMesh2 = gltf.scene.children[0];
  const [hover, setHover] = useState(false);
  const [bagGather, setBagGather] = useRecoilState(bagGatherState);
  const [findObjectGather, setFindObjectGather] = useRecoilState(
    findObjectGatherState
  );
  const clock = new THREE.Clock();

  tunaCanMesh2.position.set(21, -40, -150);

  useFrame((state, delta, frame) => {
    tunaCanMesh2.name = "tunaCan2";
  });

  return (
    <>
      <Select enabled={hover}>
        <mesh
          position={[-1.9, -1.3, 6.5]}
          rotation={[0, Math.PI * 0.5, 0]}
          onClick={() => {
            setBagGather({ ...bagGather, tonaCan2: true });
            setFindObjectGather({
              ...findObjectGather,
              tonaCan2Find: true,
              tonaCan2Modal: true,
            });
          }}
          onPointerOver={() => setHover(true)}
          onPointerOut={() => setHover(false)}
        >
          <cylinderGeometry attach="geometry" args={[0.53, 0.53, 0.4, 20]} />
          <meshStandardMaterial
            attach="material"
            color="#ffb1dc"
            visible={hover ? true : false}
          />

          <primitive object={gltf.scene} scale={0.005} />
        </mesh>
      </Select>
    </>
  );
}

export default React.memo(TunaCan2);
