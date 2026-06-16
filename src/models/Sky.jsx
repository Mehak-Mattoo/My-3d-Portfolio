import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import skyScene from "../assets/3d/sky.glb";

const Sky = () => {
  const { scene } = useGLTF(skyScene);
  const skyRef = useRef();

  useFrame((_, delta) => {
    if (skyRef.current) {
      skyRef.current.rotation.y += 0.1 * delta;
    }
  });

  return (
    <mesh ref={skyRef}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Sky;
