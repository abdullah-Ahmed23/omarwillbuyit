import { useState, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import { MapPin, ArrowRight } from 'lucide-react'

export default function CTASection() {
    const [address, setAddress] = useState('')
    const ref = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
    const y = useTransform(scrollYProgress, [0, 1], [100, -100])
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 1.02, 0.85])
    const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [8, 0, -8])
    const orbY = useTransform(scrollYProgress, [0, 1], [-60, 120])

    return (
        <section ref={ref} className="py-32 bg-primary-light relative overflow-hidden noise" style={{ perspective: 1200 }}>
            <div className="glow-line" />
            <motion.div style={{ y: orbY }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-accent/8 rounded-full blur-[120px]" />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div style={{ y, scale, rotateX }}>
                    <div className="glass-card rounded-3xl p-10 sm:p-14 text-center gradient-border relative overflow-hidden">
                        {/* Shimmer sweep */}
                        <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
                            <div className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/3 to-transparent" style={{ animation: 'shimmer-sweep 4s ease-in-out infinite' }} />
                        </div>

                        <div className="relative z-10">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white">
                                Ready to Sell <span className="gradient-text">Fast</span>?
                            </h2>
                            <p className="mt-4 text-lg text-white/30 max-w-xl mx-auto">Get a no-obligation cash offer through a simple, transparent wholesaling process.</p>
                            <div className="mt-8 flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
                                <div className="relative flex-1">
                                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/20" />
                                    <input type="text" value={address} onChange={e => setAddress(e.target.value)} placeholder="Enter your address..."
                                        className="w-full pl-12 pr-4 py-4 rounded-2xl border border-white/8 bg-white/4 focus:border-accent/40 focus:ring-4 focus:ring-accent/10 outline-none text-white placeholder-white/20 transition-all text-base" />
                                </div>
                                <Link to="/contact" className="btn-glow flex items-center justify-center gap-2 !py-4 !px-8 !rounded-2xl whitespace-nowrap">
                                    Start <ArrowRight className="w-5 h-5" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
