import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useRef } from "react";

export const TedxModel = () => {
  const gltf = useLoader(GLTFLoader, "/models/sas.glb");
  const meshRef = useRef();

  return (
    <primitive
      ref={meshRef}
      object={gltf.scene}
      position={[-1.45, -0.38, 0.65]}
    />
  );
};
