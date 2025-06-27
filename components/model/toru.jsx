"use client"; // ① keep for Next.js

import { Canvas, useFrame } from "@react-three/fiber";
import { AsciiRenderer } from "@react-three/drei";
import { Suspense, useRef } from "react";

export default function Toru() {
  return (
    <div className=" overflow-hidden border-red-500  w-full h-screen">
      <Canvas>
        <color attach="background" args={["black"]} />
        <ambientLight intensity={1} />
        <directionalLight position={[5, 5, 5]} />

        <AsciiRenderer
          fgColor="white"
          bgColor="transparent"
          resolution={0.3}
          characters=" .:-+*=%@#"
        />
        <Knot />
      </Canvas>
    </div>
  );
}

function Knot() {
  const ref = useRef();
  useFrame((_, d) => {
    if (!ref.current) return;
    ref.current.rotation.x += d / 2;
    ref.current.rotation.y += d / 2;
  });
  return (
    <mesh ref={ref}>
      <torusKnotGeometry args={[0.8, 0.25, 100, 5]} />
      <meshStandardMaterial color="red" />
    </mesh>
  );
}
