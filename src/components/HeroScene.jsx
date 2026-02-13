import { Canvas, useFrame } from "@react-three/fiber";
import { Billboard, ContactShadows, OrbitControls, Stars, Text } from "@react-three/drei";
import { memo, useMemo, useRef } from "react";
import * as THREE from "three";

const techLabels = [
  "AWS",
  "Linux",
  "Docker",
  "Tailwind",
  "Express",
  "MongoDB",
  "Git",
  "React",
  "TypeScript",
  "Node.js",
  "JavaScript",
  "C++",
  "Python",
  "MySQL"
];

function createSpherePositions(count, radius) {
  const positions = [];
  const offset = 2 / count;
  const increment = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < count; i += 1) {
    const y = i * offset - 1 + offset / 2;
    const r = Math.sqrt(1 - y * y);
    const phi = i * increment;
    positions.push([radius * Math.cos(phi) * r, radius * y, radius * Math.sin(phi) * r]);
  }
  return positions;
}

const TechGlobe = memo(function TechGlobe() {
  const globeRef = useRef();
  const labelPositions = useMemo(() => createSpherePositions(techLabels.length, 1.75), []);
  const globeGeometry = useMemo(() => new THREE.SphereGeometry(1.15, 42, 42), []);

  useFrame((_, delta) => {
    if (!globeRef.current) return;
    globeRef.current.rotation.y += delta * 0.15;
  });

  return (
    <group ref={globeRef}>
      <mesh geometry={globeGeometry}>
        <meshStandardMaterial
          color="#5b8dff"
          wireframe
          transparent
          opacity={0.45}
          emissive="#3f4aff"
          emissiveIntensity={0.35}
          depthWrite={false}
          polygonOffset
          polygonOffsetFactor={-2}
          polygonOffsetUnits={-2}
        />
      </mesh>

      {labelPositions.map((position, index) => (
        <Billboard key={techLabels[index]} position={position}>
          <group>
            <mesh>
              <circleGeometry args={[0.19, 32]} />
              <meshStandardMaterial color="#0b0f17" emissive="#1b2a52" emissiveIntensity={0.35} />
            </mesh>
            <Text
              position={[0, 0, 0.01]}
              fontSize={0.08}
              color="#e6edff"
              anchorX="center"
              anchorY="middle"
            >
              {techLabels[index]}
            </Text>
          </group>
        </Billboard>
      ))}
    </group>
  );
});

export default function HeroScene() {
  return (
    <div className="absolute inset-0">
      <Canvas
        camera={{ position: [0, 0.4, 4.6], fov: 40, near: 0.1, far: 100 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <color attach="background" args={["#0b0f1a"]} />
        <ambientLight intensity={0.35} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} color="#ffffff" />
        <directionalLight position={[-4, 2, -2]} intensity={0.35} color="#5b8dff" />
        <Stars radius={18} depth={10} count={180} factor={2} fade speed={1} />
        <TechGlobe />
        <OrbitControls enableZoom={false} enablePan={false} enableDamping dampingFactor={0.08} rotateSpeed={0.6} />
        <ContactShadows position={[0, -1.1, 0]} opacity={0.2} blur={1.6} scale={8} far={3} frames={1} />
      </Canvas>
    </div>
  );
}
