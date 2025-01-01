import React from "react";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

// Main 3D Scene Component
const Shimmer3DScene: React.FC = () => {
  return (
    <Canvas
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 0,
        width: "100%",
        height: "100vh",
        background: "#1e1e1e", // VS Code dark theme background
      }}
      camera={{ position: [0, 0, 5], fov: 75 }}
    >
      {/* Ambient Light */}
      <ambientLight intensity={0.4} />

      {/* Starry Background */}
      <Stars
        radius={200}
        depth={50}
        count={4000}
        factor={4}
        saturation={0}
        fade
        speed={3}
      />
      <Stars
        radius={200}
        depth={50}
        count={4000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />
      <Stars
        radius={50}
        depth={10}
        count={300}
        factor={4}
        saturation={0}
        fade
        speed={1.5}
      />
      <Stars
        radius={50}
        depth={10}
        count={50}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />
      

    </Canvas>
  );
};


export default Shimmer3DScene;
