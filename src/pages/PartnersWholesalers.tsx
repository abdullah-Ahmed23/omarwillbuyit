import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Handshake, Zap, Target, ArrowRight } from 'lucide-react'
import PageTransition from '../components/PageTransition'

export default function PartnersWholesalers() {
    const ref = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
    const headingY = useTransform(scrollYProgress, [0, 1], [0, 150])

    return (
        <PageTransition>
            <div className="pt-32 pb-24 min-h-screen bg-primary noise overflow-hidden" ref={ref}>
                <motion.div style={{ y: useTransform(scrollYProgress, [0, 1], [0, 200]) }} className="absolute top-[10%] right-[20%] w-[500px] h-[500px] bg-accent/10 rounded-full blur-[150px]" />

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div style={{ y: headingY }} className="text-center mb-16">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
                            Partner with Us: <span className="gradient-text">Wholesalers</span>
                        </h1>
                        <p className="mt-6 text-lg text-white/40">We are aggressive end-buyers. Bring us your assignable contracts.</p>
                    </motion.div>

                    <div className="glass-card p-8 sm:p-12 rounded-3xl gradient-border mb-12">
                        <h2 className="text-2xl font-bold text-white mb-6">Bring Us Your Deals</h2>
                        <p className="text-white/60 mb-6 leading-relaxed">
                            If you have a property under contract in Indiana that makes sense as a flip or a rental, we want to buy it. We don't daisy-chain or re-market your deals. We are the actual end buyer closing with our own cash.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                            {[
                                { icon: Zap, title: 'Fast Decisions', desc: 'Send us the address and numbers. We reply within hours.' },
                                { icon: Target, title: 'Reliable Closings', desc: 'If we commit, we close. We don\'t back out during inspection.' },
                                { icon: Handshake, title: 'No BS', desc: 'Transparent communication. We respect your assignment fee.' }
                            ].map((b, i) => (
                                <div key={i} className="bg-white/5 p-6 rounded-2xl border border-white/10">
                                    <b.icon className="w-8 h-8 text-accent mb-4" />
                                    <h3 className="text-white font-bold mb-2">{b.title}</h3>
                                    <p className="text-white/40 text-sm">{b.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="text-center">
                        <a href="mailto:partners@omarwillbuyit.com" className="btn-glow inline-flex items-center gap-2 !px-10 !py-4 text-lg bg-accent/20">
                            Email Us Your Deal <ArrowRight className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </div>
        </PageTransition>
    )
}
