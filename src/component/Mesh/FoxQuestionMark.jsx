import React from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { TextureLoader } from "three/src/loaders/TextureLoader";

function FoxQuestionMark(props) {
  // load GLTF
  const gltf = useLoader(GLTFLoader, "/assets/glb/question_icon_fox.glb");
  const questionMesh = gltf.scene.children[0];
  questionMesh.rotation.x = Math.PI / 180;
  questionMesh.position.y = -3.7;

  const preesG = useLoader(TextureLoader, "/assets/G 누르기.png");
  return (
    <>
      <mesh position={[20, 25, -325]} rotation={[0, (Math.PI / 180) * 270, 0]}>
        <boxGeometry attach="geometry" args={[17.1, 7, 1]} />
        <meshStandardMaterial attach="material" map={preesG} visible="true" />
        <primitive object={gltf.scene} scale={2} />
      </mesh>
    </>
  );
}
export default React.memo(FoxQuestionMark);
