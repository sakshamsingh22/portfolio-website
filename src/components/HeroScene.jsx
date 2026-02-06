import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useRef } from "react";

function CoreShape() {
  const ref = useRef();

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta * 0.2;
      ref.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <Float speed={1.4} rotationIntensity={0.6} floatIntensity={0.9}>
      <mesh ref={ref}>
        <torusKnotGeometry args={[0.6, 0.22, 140, 18]} />
        <meshStandardMaterial
          color="#0f1116"
          metalness={0.7}
          roughness={0.2}
          emissive="#4f6bff"
          emissiveIntensity={0.35}
        />
      </mesh>
    </Float>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 3.8], fov: 42 }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[3, 5, 2]} intensity={1.2} />
      <pointLight position={[-2, -2, 2]} intensity={0.6} color="#5b8dff" />
      <CoreShape />
    </Canvas>
  );
}
