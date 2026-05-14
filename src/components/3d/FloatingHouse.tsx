import { Canvas } from '@react-three/fiber'

function House() {
    return (
        <group scale={1.8} rotation={[0.08, -0.38, 0]}>
            <mesh position={[0, 0, 0]}>
                <boxGeometry args={[2, 1.2, 1.5]} />
                <meshStandardMaterial color="#12121f" roughness={0.7} />
            </mesh>
            <mesh position={[0, 0.95, 0]} rotation={[0, Math.PI / 4, 0]}>
                <coneGeometry args={[1.6, 0.8, 4]} />
                <meshStandardMaterial color="#7c3aed" roughness={0.5} metalness={0.4} />
            </mesh>
            <mesh position={[0, -0.2, 0.76]}>
                <boxGeometry args={[0.35, 0.6, 0.02]} />
                <meshStandardMaterial color="#050510" />
            </mesh>
            <mesh position={[-0.55, 0.15, 0.76]}>
                <boxGeometry args={[0.3, 0.3, 0.02]} />
                <meshStandardMaterial color="#06b6d4" emissive="#06b6d4" emissiveIntensity={0.4} roughness={0.3} metalness={0.5} />
            </mesh>
            <mesh position={[0.55, 0.15, 0.76]}>
                <boxGeometry args={[0.3, 0.3, 0.02]} />
                <meshStandardMaterial color="#a78bfa" emissive="#a78bfa" emissiveIntensity={0.3} roughness={0.3} metalness={0.5} />
            </mesh>
            <mesh position={[0.6, 1.1, -0.2]}>
                <boxGeometry args={[0.25, 0.5, 0.25]} />
                <meshStandardMaterial color="#1a1a30" />
            </mesh>
        </group>
    )
}

export default function FloatingHouse() {
    return (
        <div className="absolute inset-0 pointer-events-none max-h-[1080px]">
            <Canvas
                camera={{ position: [0, 1, 5], fov: 45 }}
                dpr={1}
                frameloop="demand"
                resize={{ debounce: { scroll: 250, resize: 250 } }}
                gl={{ antialias: false, alpha: true, powerPreference: 'low-power' }}
                style={{ background: 'transparent' }}
            >
                <ambientLight intensity={0.2} />
                <directionalLight position={[5, 5, 5]} intensity={0.5} />
                <pointLight position={[-3, 2, 3]} intensity={0.8} color="#7c3aed" />
                <pointLight position={[3, -1, 2]} intensity={0.5} color="#06b6d4" />
                <pointLight position={[0, 3, -2]} intensity={0.3} color="#a78bfa" />
                <House />
            </Canvas>
        </div>
    )
}
