import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Phone, Mail, PhoneCall, MapPin } from 'lucide-react'

const markets = ['Indianapolis', 'Fort Wayne', 'Evansville', 'South Bend', 'Carmel', 'Bloomington']

export default function ContactStripSection() {
    const ref = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
    const leftX = useTransform(scrollYProgress, [0, 0.5, 1], [-80, 0, 20])
    const rightX = useTransform(scrollYProgress, [0, 0.5, 1], [80, 0, -20])
    const houseRotate = useTransform(scrollYProgress, [0, 1], [0, 360])

    return (
        <section ref={ref} className="py-32 bg-radial-cyan relative overflow-hidden noise">
            <div className="glow-line" />

            {/* Rotating SVG house with parallax */}
            <motion.svg style={{ rotate: houseRotate, opacity: 0.03 }} className="absolute right-10 top-10 w-64 h-64 text-accent pointer-events-none hidden lg:block" viewBox="0 0 200 200">
                <path d="M 100,20 L 20,80 L 20,180 L 80,180 L 80,120 L 120,120 L 120,180 L 180,180 L 180,80 Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </motion.svg>

            {/* Orbiting dot */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:block pointer-events-none">
                <div className="w-2 h-2 bg-cyan rounded-full animate-orbit opacity-30" />
            </div>

            <motion.div style={{ y: useTransform(scrollYProgress, [0, 1], [-30, 60]) }} className="absolute top-0 left-1/3 w-[400px] h-[300px] bg-accent/5 rounded-full blur-[100px]" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div style={{ x: leftX }}>
                        <h2 className="text-3xl sm:text-4xl font-black text-white">Still Have <span className="gradient-text">Questions</span>?</h2>
                        <p className="mt-4 text-lg text-white/30 leading-relaxed">
                            Connect with our <span className="font-bold gradient-text">cash deals team</span> today and get the answers you need.
                        </p>
                    </motion.div>

                    <motion.div style={{ x: rightX }} className="flex flex-col sm:flex-row lg:flex-col gap-3">
                        {[
                            { href: '/contact', icon: Phone, label: 'Call Us', sub: 'Talk to the deals team', gradient: false },
                            { href: 'mailto:office@omarwillbuyit.com', icon: Mail, label: 'Email Us', sub: 'office@omarwillbuyit.com', gradient: false },
                            { href: '/contact', icon: PhoneCall, label: 'Request a Call', sub: "We'll call you back", gradient: true },
                        ].map((c, i) => (
                            <motion.a key={i} href={c.href} whileHover={{ scale: 1.03, x: 5 }} transition={{ type: 'spring', stiffness: 300 }}
                                className={`flex items-center gap-3 px-6 py-4 rounded-2xl transition-all group ${c.gradient ? 'gradient-bg text-white shadow-lg shadow-accent/20' : 'glass-card !transform-none'}`}>
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${c.gradient ? 'bg-white/20' : 'bg-accent/10 group-hover:bg-accent/20'}`}>
                                    <c.icon className={`w-5 h-5 ${c.gradient ? 'text-white' : 'text-accent-light'}`} />
                                </div>
                                <div>
                                    <div className="text-sm font-bold">{c.label}</div>
                                    <div className={`text-sm ${c.gradient ? 'text-white/60' : 'text-white/30'}`}>{c.sub}</div>
                                </div>
                            </motion.a>
                        ))}
                    </motion.div>
                </div>

                <div className="mt-14 pt-8 border-t border-white/5">
                    <div className="flex flex-wrap items-center gap-2 justify-center">
                        <span className="text-sm text-white/15 mr-2">Our Markets:</span>
                        {markets.map(c => (
                            <span key={c} className="inline-flex items-center gap-1 text-xs text-white/25 bg-white/3 px-3 py-1.5 rounded-full border border-white/5">
                                <MapPin className="w-3 h-3 text-cyan/50" />{c}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
