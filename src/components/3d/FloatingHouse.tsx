import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import * as THREE from 'three'

function House({ mouseX, mouseY }: { mouseX: number; mouseY: number }) {
    const group = useRef<THREE.Group>(null!)
    useFrame((_, delta) => {
        if (group.current) {
            group.current.rotation.y += delta * 0.15
            group.current.position.x = THREE.MathUtils.lerp(group.current.position.x, mouseX * 0.3, 0.05)
            group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, mouseY * 0.2, 0.05)
        }
    })

    return (
        <Float speed={2} rotationIntensity={0.3} floatIntensity={0.6}>
            <group ref={group} scale={1.8}>
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
        </Float>
    )
}

export default function FloatingHouse() {
    const mouseRef = useRef({ x: 0, y: 0 })
    return (
        <div className="absolute inset-0 pointer-events-auto" onMouseMove={e => {
            const r = (e.target as HTMLElement).getBoundingClientRect()
            mouseRef.current.x = ((e.clientX - r.left) / r.width - 0.5) * 2
            mouseRef.current.y = -((e.clientY - r.top) / r.height - 0.5) * 2
        }}>
            <Canvas camera={{ position: [0, 1, 5], fov: 45 }} dpr={[1, 1.5]} gl={{ antialias: true, alpha: true }} style={{ background: 'transparent' }}>
                <ambientLight intensity={0.2} />
                <directionalLight position={[5, 5, 5]} intensity={0.5} />
                <pointLight position={[-3, 2, 3]} intensity={0.8} color="#7c3aed" />
                <pointLight position={[3, -1, 2]} intensity={0.5} color="#06b6d4" />
                <pointLight position={[0, 3, -2]} intensity={0.3} color="#a78bfa" />
                <House mouseX={mouseRef.current.x} mouseY={mouseRef.current.y} />
            </Canvas>
        </div>
    )
}
