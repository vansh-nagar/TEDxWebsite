"use client"; // ① keep for Next.js

import { Canvas, useFrame } from "@react-three/fiber";
import { AsciiRenderer } from "@react-three/drei";
import { Suspense, useRef } from "react";
import { AdaptiveDpr } from "@react-three/drei";

export default function Toru() {
  return (
    <div className="overflow-hidden border-red-500 h-screen w-full absolute -top-32">
      <Canvas>
        <AdaptiveDpr pixelated />

        <color attach="background" args={["black"]} />
        <ambientLight intensity={1} />
        <directionalLight position={[5, 5, 5]} />
        <Suspense fallback={null}>
          {" "}
          <Knot />
        </Suspense>
        <AsciiRenderer fgColor="white" bgColor="transparent" />
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
      <torusKnotGeometry args={[1, 0.3, 128, 32]} />
      <meshStandardMaterial color="red" />
    </mesh>
  );
}
