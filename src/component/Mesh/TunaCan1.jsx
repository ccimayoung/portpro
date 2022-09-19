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

function TunaCan1(props) {
  // load GLTF
  const gltf = useLoader(GLTFLoader, "/tuna_can1.glb");
  console.log(gltf);
  const tunaCanMesh1 = gltf.scene.children[0];
  const [hover, setHover] = useState(false);
  const [bagGather, setBagGather] = useRecoilState(bagGatherState);
  const [findObjectGather, setFindObjectGather] = useRecoilState(
    findObjectGatherState
  );
  const clock = new THREE.Clock();
  tunaCanMesh1.position.set(20, -40, -150);

  useFrame((state, delta, frame) => {
    tunaCanMesh1.name = "tunaCan1";
  });

  return (
    <>
      <Select enabled={hover}>
        <mesh
          position={[-1.7, -0.25, -6.7]}
          rotation={[0, Math.PI / 0.6, 0]}
          onClick={() => {
            setBagGather({ ...bagGather, tonaCan1: true });
            setFindObjectGather({ ...findObjectGather, tonaCan1: true });
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

export default React.memo(TunaCan1);
