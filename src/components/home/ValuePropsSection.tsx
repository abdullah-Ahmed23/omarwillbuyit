import { Suspense, lazy, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Wrench, DollarSign, Calendar, Zap, Eye, Home } from 'lucide-react'

const BackgroundParticles = lazy(() => import('../3d/BackgroundParticles'))

const values = [
    { icon: Wrench, title: 'No Repairs or Cleaning', desc: 'We buy your home exactly as it is. No renovations, no deep cleaning.', accent: '#7c3aed' },
    { icon: DollarSign, title: 'Zero Fees or Commissions', desc: 'Keep every dollar. No hidden costs. No listing commissions.', accent: '#06b6d4' },
    { icon: Calendar, title: 'Close on Your Schedule', desc: 'Pick any date — 7 days to 60 days out.', accent: '#a78bfa' },
    { icon: Zap, title: 'Cash Offers in 24 Hours', desc: 'Fair, transparent offer within one business day.', accent: '#f43f5e' },
    { icon: Eye, title: 'No Showings or Open Houses', desc: 'No strangers. No staging required.', accent: '#eab308' },
    { icon: Home, title: 'We Buy in Any Situation', desc: 'Foreclosure, divorce, inherited, tax liens — we help.', accent: '#06b6d4' },
]

export default function ValuePropsSection() {
    const ref = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
    const headingY = useTransform(scrollYProgress, [0, 1], [80, -80])

    // Staggered depth parallax for cards
    const cardYs = values.map((_, i) =>
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useTransform(scrollYProgress, [0, 1], [40 + (i % 3) * 30, -(20 + (i % 3) * 20)])
    )

    return (
        <section ref={ref} className="relative py-32 bg-primary overflow-hidden noise">
            <div className="glow-line" />
            <Suspense fallback={null}><BackgroundParticles /></Suspense>

            <motion.div style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 80]) }} className="absolute bottom-0 left-1/3 w-[500px] h-[400px] bg-accent/5 rounded-full blur-[120px]" />
            <motion.div style={{ y: useTransform(scrollYProgress, [0, 1], [40, -100]) }} className="absolute top-0 right-1/4 w-[350px] h-[350px] bg-cyan/4 rounded-full blur-[100px]" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div style={{ y: headingY }} className="text-center mb-16">
                    <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                        className="text-3xl sm:text-4xl lg:text-5xl font-black text-white">
                        Why Choose a <span className="gradient-text">Cash Deal?</span>
                    </motion.h2>
                    <p className="mt-4 text-lg text-white/30 max-w-2xl mx-auto">A transparent wholesaling process gives you speed, certainty, and a clear path to closing.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {values.map((v, i) => (
                        <motion.div key={v.title} style={{ y: cardYs[i] }}
                            className="glass-card rounded-2xl p-8 gradient-border card-hover-glow">
                            <div className="relative z-10">
                                <motion.div whileHover={{ scale: 1.15, rotate: 12 }} transition={{ type: 'spring', stiffness: 300 }}
                                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: `${v.accent}15` }}>
                                    <v.icon className="w-6 h-6" style={{ color: v.accent }} />
                                </motion.div>
                                <h3 className="text-lg font-bold text-white mb-2">{v.title}</h3>
                                <p className="text-white/35 text-sm leading-relaxed">{v.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mt-14">
                    <Link to="/contact" className="btn-glow inline-flex items-center gap-2 text-lg !px-10 !py-4">Get My Cash Offer</Link>
                </motion.div>
            </div>
        </section>
    )
}
