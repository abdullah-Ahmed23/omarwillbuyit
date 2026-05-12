import { Suspense, lazy, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { DollarSign, Wrench, Calendar, Zap } from 'lucide-react'

const BackgroundParticles = lazy(() => import('../3d/BackgroundParticles'))

const benefits = [
    { icon: DollarSign, title: 'No Commissions', desc: 'Keep 100% of your sale. Zero fees or commissions — ever.' },
    { icon: Wrench, title: 'No Repairs Needed', desc: 'Sell as-is in any condition. No cleaning, fixing, or staging.' },
    { icon: Calendar, title: 'Close in 7-14 Days', desc: 'Choose your closing date. We work on your timeline.' },
    { icon: Zap, title: 'Cash Offer in 24 Hrs', desc: 'Fair, no-obligation offer within one business day.' },
]

export default function TrustSection() {
    const ref = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
    const headingY = useTransform(scrollYProgress, [0, 1], [80, -80])
    const orbY1 = useTransform(scrollYProgress, [0, 1], [-60, 100])
    const orbY2 = useTransform(scrollYProgress, [0, 1], [40, -120])

    // Staggered card parallax — each card at a slightly different speed
    const cardYs = benefits.map((_, i) =>
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useTransform(scrollYProgress, [0, 1], [40 + i * 20, -(20 + i * 15)])
    )

    return (
        <section ref={ref} className="relative py-32 bg-radial-glow overflow-hidden noise">
            <div className="glow-line" />
            <Suspense fallback={null}><BackgroundParticles /></Suspense>

            {/* Parallax orbs */}
            <motion.div style={{ y: orbY1 }} className="absolute -top-20 right-[20%] w-[400px] h-[400px] bg-accent/8 rounded-full blur-[100px]" />
            <motion.div style={{ y: orbY2 }} className="absolute bottom-0 left-[10%] w-[300px] h-[300px] bg-cyan/6 rounded-full blur-[80px]" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div style={{ y: headingY }} className="text-center mb-16">
                    <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                        className="text-3xl sm:text-4xl lg:text-5xl font-black text-white">
                        Why Sell Through <span className="gradient-text">Cash Deals?</span>
                    </motion.h2>
                    <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
                        className="mt-4 text-lg text-white/30 max-w-2xl mx-auto">
                        Skip the listing hassle. Get a straightforward offer from buyers who understand wholesale real estate.
                    </motion.p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {benefits.map((b, i) => (
                        <motion.div key={b.title} style={{ y: cardYs[i] }}
                            className="glass-card rounded-2xl p-8 gradient-border card-hover-glow cursor-default">
                            <div className="relative z-10">
                                <motion.div whileHover={{ rotate: 15, scale: 1.15 }} transition={{ type: 'spring', stiffness: 300 }}
                                    className="w-14 h-14 rounded-2xl bg-accent/15 flex items-center justify-center mb-5">
                                    <b.icon className="w-7 h-7 text-accent-light" />
                                </motion.div>
                                <h3 className="text-xl font-bold text-white mb-2">{b.title}</h3>
                                <p className="text-white/35 text-sm leading-relaxed">{b.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
