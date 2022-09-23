import React, { useState } from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useRecoilState } from "recoil";
import { bagGatherState, findObjectGatherState } from "../../recoil/store";
import { Select } from "@react-three/drei";

function TunaCan1(props) {
  // load GLTF
  const gltf = useLoader(GLTFLoader, "/assets/glb/tuna_can1.glb");
  const tunaCanMesh1 = gltf.scene.children[0];
  const [hover, setHover] = useState(false);
  const [bagGather, setBagGather] = useRecoilState(bagGatherState);
  const [findObjectGather, setFindObjectGather] = useRecoilState(
    findObjectGatherState
  );
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
            setFindObjectGather({
              ...findObjectGather,
              tonaCan1Find: true,
              tonaCan1Modal: true,
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

export default React.memo(TunaCan1);
