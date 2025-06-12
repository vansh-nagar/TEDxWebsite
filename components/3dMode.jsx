"use client";
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function Model({ mouse }) {
  const gltf = useGLTF("/models/Untitled.glb");
  const ref = useRef();

  useFrame(() => {
    if (ref.current && mouse.current) {
      ref.current.rotation.y = mouse.current.x * 0.2;
      ref.current.rotation.x = mouse.current.y * 0.1;
    }
  });

  // Set initial position
  React.useEffect(() => {
    const updatePosition = () => {
      if (window.innerWidth < 640) {
        gltf.scene.position.set(-3.5, -2, -5); // Center for small screens
      } else {
        gltf.scene.position.set(-3.8, -1, 0); // Default for larger screens
      }
    };
    updatePosition();
    window.addEventListener("resize", updatePosition);
    return () => window.removeEventListener("resize", updatePosition);
  }, [gltf.scene]);

  return <primitive ref={ref} object={gltf.scene} scale={3} />;
}

const ThreeDModel = () => {
  const mouse = useRef({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.current.y = (e.clientY / window.innerHeight) * 2 - 1;
  };

  return (
    <div
      className="flex flex-col items-center justify-between px-12 w-full py-8 h-screen relative"
      onMouseMove={handleMouseMove}
    >
      {/* gradient */}
      <div
        className="absolute inset-0 -z-10 pointer-events-none"
        aria-hidden="true"
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 800 800"
          className="w-full h-full"
        >
          <defs>
            <radialGradient id="blobGradient" cx="50%" cy="50%" r="70%">
              <stop offset="0%" stopColor="#f2f2f2" stopOpacity="0.7" />
              <stop offset="50%" stopColor="#8e1f29" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#8e1f29" stopOpacity="0.3" />
            </radialGradient>
          </defs>
          <ellipse
            cx="400"
            cy="400"
            rx="340"
            ry="320"
            fill="url(#blobGradient)"
            filter="blur(80px)"
          />
        </svg>
      </div>

      {/* 2D maal */}
      <div className="w-full h-full flex-1  flex justify-center ">
        <Canvas>
          <ambientLight intensity={0.6} />
          <directionalLight
            position={[mouse.current.x * 10, 5 + mouse.current.y * 5, 10000]}
            intensity={1}
            castShadow
          />
          <directionalLight
            position={[mouse.current.x * 10, 5 + mouse.current.y * -5, -100]}
            intensity={1}
            castShadow
          />
          <directionalLight position={[10, 100, 50]} intensity={1} castShadow />
          <directionalLight
            position={[100, -100, 50]}
            intensity={1}
            castShadow
          />
          <OrbitControls
            enablePan={true}
            enableRotate={false}
            enableZoom={false}
          />
          <Model position={[0, -2.5, 0]} mouse={mouse} />
        </Canvas>
      </div>
      <div className="mb-6 z-10">
        <button className="px-4 py-2 bg-black text-white rounded-xl">
          Explore More
        </button>
      </div>
    </div>
  );
};

export default ThreeDModel;
