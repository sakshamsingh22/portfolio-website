import { Canvas, useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import { useMemo, useRef } from "react";

function OrbGroup({ labels }) {
  const group = useRef();
  const points = useMemo(() => {
    const angleStep = (Math.PI * 2) / labels.length;
    return labels.map((label, index) => {
      const angle = index * angleStep;
      return {
        label,
        position: [Math.cos(angle) * 1.6, Math.sin(angle) * 1.6, 0]
      };
    });
  }, [labels]);

  useFrame((state, delta) => {
    if (group.current) {
      group.current.rotation.z += delta * 0.25;
      group.current.rotation.x += delta * 0.1;
    }
  });

  return (
    <group ref={group}>
      {points.map((point) => (
        <group key={point.label} position={point.position}>
          <mesh>
            <sphereGeometry args={[0.13, 32, 32]} />
            <meshStandardMaterial
              color="#0f1116"
              emissive="#4f6bff"
              emissiveIntensity={0.6}
              metalness={0.5}
              roughness={0.3}
            />
          </mesh>
          <Html distanceFactor={5}>
            <span className="rounded-full border border-neon-500/30 bg-base-900/95 px-3 py-1 text-[11px] text-white/90 shadow-glow backdrop-blur">
              {point.label}
            </span>
          </Html>
        </group>
      ))}
    </group>
  );
}

export default function SkillOrb({ labels }) {
  return (
    <div className="flex h-72 w-full items-center justify-center md:h-80">
      <div className="relative h-72 w-72 overflow-visible md:h-80 md:w-80">
        <Canvas
          camera={{ position: [0, 0, 5.5], fov: 45 }}
          dpr={[1, 1.5]}
          style={{ overflow: "visible" }}
        >
          <ambientLight intensity={0.6} />
          <pointLight position={[2, 3, 2]} intensity={1} color="#5b8dff" />
          <OrbGroup labels={labels} />
        </Canvas>
      </div>
    </div>
  );
}
