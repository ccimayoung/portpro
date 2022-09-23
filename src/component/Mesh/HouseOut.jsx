import React from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { TextureLoader } from "three/src/loaders/TextureLoader";

function HouseOut(props) {
  // load GLTF
  const gltf = useLoader(GLTFLoader, "/assets/glb/fishercabin.glb");
  const houseMesh = gltf.scene.children[0];

  houseMesh.position.x = 0.1;
  houseMesh.position.y = -7.55;
  houseMesh.position.z = 4;
  houseMesh.rotation.z = (Math.PI / 180) * -90;

  const cp = useLoader(TextureLoader, "/assets/textures/cp.png");

  return (
    <mesh position={[70, 38, -385]} rotation={[0, (Math.PI / 180) * 90, 0]}>
      <primitive object={gltf.scene} scale={10} />
      <boxGeometry attach="geometry" args={[33, 11, 1]} />
      <meshStandardMaterial attach="material" map={cp} color={"white"} />
    </mesh>
  );
}
export default React.memo(HouseOut);
