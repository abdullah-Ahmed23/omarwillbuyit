import { useState, Suspense, lazy, useRef, useEffect, useMemo } from 'react'
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion'
import { MapPin, ArrowRight, Shield, Clock, DollarSign, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'

const FloatingHouse = lazy(() => import('../3d/FloatingHouse'))

const trustBadges = [
    { icon: Shield, label: 'No repairs needed' },
    { icon: DollarSign, label: 'No listing fees' },
    { icon: Clock, label: 'Close in 7-14 days' },
]

export default function HeroSection() {
    const [address, setAddress] = useState('')
    const sectionRef = useRef<HTMLDivElement>(null)
    const floatingParticles = useMemo(() => Array.from({ length: 10 }, (_, i) => ({
        left: `${(i * 41) % 100}%`,
        animationDuration: `${9 + (i % 5) * 2}s`,
        animationDelay: `${(i % 4) * 1.4}s`,
        size: `${1 + (i % 3)}px`,
        background: i % 3 === 0 ? '#06b6d4' : '#7c3aed',
    })), [])

    /* --- Scroll parallax --- */
    const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] })
    const bgY = useTransform(scrollYProgress, [0, 1], [0, 300])
    const textY = useTransform(scrollYProgress, [0, 1], [0, -100])
    const orb1Y = useTransform(scrollYProgress, [0, 1], [0, 180])
    const orb2Y = useTransform(scrollYProgress, [0, 1], [0, -120])
    const orb3Y = useTransform(scrollYProgress, [0, 1], [0, 250])
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9])

    /* --- Mouse parallax --- */
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)
    const springX = useSpring(mouseX, { stiffness: 50, damping: 20 })
    const springY = useSpring(mouseY, { stiffness: 50, damping: 20 })
    const mouseOrbX = useTransform(springX, [-1, 1], [-40, 40])
    const mouseOrbY = useTransform(springY, [-1, 1], [-30, 30])
    const mouseTextX = useTransform(springX, [-1, 1], [-8, 8])
    const mouseTextY = useTransform(springY, [-1, 1], [-6, 6])

    useEffect(() => {
        const onMove = (e: MouseEvent) => {
            mouseX.set((e.clientX / window.innerWidth - 0.5) * 2)
            mouseY.set((e.clientY / window.innerHeight - 0.5) * 2)
        }
        window.addEventListener('mousemove', onMove)
        return () => window.removeEventListener('mousemove', onMove)
    }, [mouseX, mouseY])

    return (
        <section ref={sectionRef} className="relative min-h-screen flex items-center overflow-hidden bg-primary noise">
            {/* Multi-layer parallax orbs */}
            <motion.div style={{ y: orb1Y, x: mouseOrbX }} className="absolute top-[10%] right-[15%] w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px] animate-glow-breathe" />
            <motion.div style={{ y: orb2Y, x: mouseOrbY }} className="absolute bottom-[20%] left-[10%] w-[400px] h-[400px] bg-cyan/8 rounded-full blur-[80px]" />
            <motion.div style={{ y: orb3Y }} className="absolute top-[50%] left-[50%] w-[300px] h-[300px] bg-rose/5 rounded-full blur-[100px]" />

            {/* Grid overlay with scroll */}
            <motion.div style={{ y: bgY }} className="absolute inset-0 bg-grid-fine pointer-events-none" />

            {/* Floating particles */}
            {floatingParticles.map((particle, i) => (
                <div key={i} className="particle" style={{
                    left: particle.left,
                    animationDuration: particle.animationDuration,
                    animationDelay: particle.animationDelay,
                    width: particle.size,
                    height: particle.size,
                    background: particle.background,
                }} />
            ))}

            {/* 3D */}
            <div className="absolute inset-0 opacity-15 pointer-events-none">
                <Suspense fallback={null}><FloatingHouse /></Suspense>
            </div>

            {/* Content with scroll + mouse parallax */}
            <motion.div style={{ y: textY, x: mouseTextX, opacity, scale }} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
                <div className="max-w-3xl">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent-light text-sm font-semibold mb-6">
                            <Sparkles className="w-4 h-4" />
                            Cash Deals — Simple Wholesaling Process
                        </span>
                    </motion.div>

                    <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[1.05] tracking-tight">
                        Sell Your House Through a{' '}
                        <span className="gradient-text">Cash Deal</span>{' '}
                        That Actually Closes
                    </motion.h1>

                    <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}
                        className="mt-6 text-lg sm:text-xl text-white/40 max-w-2xl leading-relaxed">
                        A simple wholesale-style process: we review the property, make a clear cash offer, and close on your timeline.
                    </motion.p>

                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }} className="mt-10">
                        <div className="flex flex-col sm:flex-row gap-3 max-w-xl">
                            <div className="relative flex-1">
                                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/20" />
                                <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Enter your property address..."
                                    className="w-full pl-12 pr-4 py-4 rounded-2xl border border-white/8 bg-white/4 backdrop-blur-sm focus:border-accent/40 focus:ring-4 focus:ring-accent/10 outline-none text-white placeholder-white/20 transition-all" />
                            </div>
                            <Link to="/contact" className="btn-glow flex items-center justify-center gap-2 !py-4 !px-8 !rounded-2xl whitespace-nowrap">
                                Get My Cash Offer <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </motion.div>

                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="mt-10 flex flex-wrap gap-5">
                        {trustBadges.map((b, i) => (
                            <motion.div key={b.label} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.9 + i * 0.15 }}
                                className="flex items-center gap-2 text-sm text-white/35">
                                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/8 flex items-center justify-center"><b.icon className="w-4 h-4 text-cyan" /></div>
                                {b.label}
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
                <div className="w-6 h-10 rounded-full border-2 border-white/15 flex items-start justify-center p-1.5"><div className="w-1.5 h-3 rounded-full bg-accent-light" /></div>
            </motion.div>
        </section>
    )
}
