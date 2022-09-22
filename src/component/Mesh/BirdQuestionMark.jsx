import React from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { TextureLoader } from "three/src/loaders/TextureLoader";

function BirdQuestionMark(props) {
  // load GLTF
  const gltf = useLoader(GLTFLoader, "/question_icon_bird.glb");
  const questionMesh = gltf.scene.children[0];
  questionMesh.rotation.x = Math.PI / 180;
  questionMesh.position.y = -3.7;

  useFrame((state, delta, frame) => {
    questionMesh.name = "BirdQuestionMark";
  });

  const preesG = useLoader(TextureLoader, "/assets/G 누르기.png");
  return (
    <>
      <mesh position={[-25, 90, -1470]} rotation={[0, Math.PI / 180, 0]}>
        <boxGeometry attach="geometry" args={[25.6, 10.5, 1]} />
        <meshStandardMaterial attach="material" map={preesG} visible="true" />
        <primitive object={gltf.scene} scale={4} />
      </mesh>
    </>
  );
}
export default React.memo(BirdQuestionMark);
