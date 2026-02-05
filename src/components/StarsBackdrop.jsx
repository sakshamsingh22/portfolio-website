import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

export default function StarsBackdrop() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 1] }}
        gl={{ antialias: true, alpha: true }}
      >
        <Stars radius={60} depth={40} count={1800} factor={2} fade speed={0.6} />
      </Canvas>
    </div>
  );
}
