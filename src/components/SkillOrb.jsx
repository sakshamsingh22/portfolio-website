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
        position: [Math.cos(angle) * 1.3, Math.sin(angle) * 1.3, 0]
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
            <sphereGeometry args={[0.12, 32, 32]} />
            <meshStandardMaterial
              color="#0f1116"
              emissive="#4f6bff"
              emissiveIntensity={0.6}
              metalness={0.5}
              roughness={0.3}
            />
          </mesh>
          <Html distanceFactor={5}>
            <span className="rounded-full border border-white/10 bg-base-900/80 px-3 py-1 text-xs text-white/80 shadow-glow">
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
    <div className="h-64 w-full">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }} dpr={[1, 1.5]}>
        <ambientLight intensity={0.6} />
        <pointLight position={[2, 3, 2]} intensity={1} color="#5b8dff" />
        <OrbGroup labels={labels} />
      </Canvas>
    </div>
  );
}
