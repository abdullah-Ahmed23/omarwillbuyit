import { Canvas } from '@react-three/fiber'
import { Sparkles } from '@react-three/drei'

export default function BackgroundParticles() {
    return (
        <div className="absolute inset-0 pointer-events-none">
            <Canvas dpr={[1, 1.5]} gl={{ antialias: false, alpha: true }} style={{ background: 'transparent' }}>
                <Sparkles count={50} scale={10} size={2} speed={0.15} opacity={0.25} color="#7c3aed" />
                <Sparkles count={25} scale={8} size={1.5} speed={0.1} opacity={0.15} color="#06b6d4" />
                <Sparkles count={15} scale={6} size={1} speed={0.2} opacity={0.1} color="#a78bfa" />
            </Canvas>
        </div>
    )
}
