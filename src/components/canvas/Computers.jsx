import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

// Computer model with floating animation
const Computers = () => {
  const computer = useGLTF("./desktop_pc/scene.gltf");
  const ref = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    // Floating animation
    ref.current.position.y = -2.5 + Math.sin(t * 0.5) * 0.2;
  });

  return (
    <mesh ref={ref}>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={0.75}
        position={[0, 0, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

// Canvas component
const ComputersCanvas = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");

    const handleMediaQueryChange = (event) => {
      setIsLargeScreen(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    isLargeScreen && (
      <div
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          height: "100vh",
          width: "50vw",
          pointerEvents: "none",
          zIndex: 10
        }}
      >
        <Canvas
          frameloop="always"
          shadows
          dpr={[1, 2]}
          camera={{ position: [20, 3, 5], fov: 25 }}
          gl={{ preserveDrawingBuffer: true }}
        >
          <Suspense fallback={<CanvasLoader />}>
            <OrbitControls
              enableZoom={false}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}
            />
            <Computers />
          </Suspense>
          <Preload all />
        </Canvas>
      </div>
    )
  );
};

export default ComputersCanvas;
