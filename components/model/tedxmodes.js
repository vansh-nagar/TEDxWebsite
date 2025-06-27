import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useRef, useEffect } from "react";

export const TedxModel = () => {
  const gltf = useLoader(GLTFLoader, "/models/mod.glb");
  const meshRef = useRef();
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      if (meshRef.current) {
        meshRef.current.rotation.y = x * 0.05;
        meshRef.current.rotation.x = -y * 0.02;
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  return (
    <primitive
      ref={meshRef}
      object={gltf.scene}
      position={[-1.35, -0.35, 0.6]}
      Slightly
      rotate
      for
      a
      better
      angle
    />
  );
};
