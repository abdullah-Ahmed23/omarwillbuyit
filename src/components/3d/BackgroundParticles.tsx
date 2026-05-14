const particles = Array.from({ length: 18 }, (_, i) => ({
    left: `${(i * 37) % 100}%`,
    top: `${(i * 53) % 100}%`,
    size: `${1 + (i % 3)}px`,
    opacity: 0.12 + (i % 4) * 0.04,
}))

export default function BackgroundParticles() {
    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
            {particles.map((particle, i) => (
                <span
                    key={i}
                    className="bg-particle"
                    style={{
                        left: particle.left,
                        top: particle.top,
                        width: particle.size,
                        height: particle.size,
                        opacity: particle.opacity,
                        background: i % 3 === 0 ? '#06b6d4' : '#7c3aed',
                    }}
                />
            ))}
        </div>
    )
}
