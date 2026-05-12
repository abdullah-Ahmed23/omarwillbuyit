import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FileText, Clock, Shield, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageTransition from '../components/PageTransition'

export default function PartnersTitleCompanies() {
    const ref = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
    const headingY = useTransform(scrollYProgress, [0, 1], [0, 150])

    return (
        <PageTransition>
            <div className="pt-32 pb-24 min-h-screen bg-primary noise overflow-hidden" ref={ref}>
                <motion.div style={{ y: useTransform(scrollYProgress, [0, 1], [0, 200]) }} className="absolute top-[30%] left-[20%] w-[500px] h-[500px] bg-rose/10 rounded-full blur-[150px]" />

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div style={{ y: headingY }} className="text-center mb-16">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
                            Partner with Us: <span className="gradient-text">Title Companies</span>
                        </h1>
                        <p className="mt-6 text-lg text-white/40">We are high-volume cash buyers looking for efficient, investor-friendly escrow officers.</p>
                    </motion.div>

                    <div className="glass-card p-8 sm:p-12 rounded-3xl gradient-border mb-12">
                        <h2 className="text-2xl font-bold text-white mb-6">Drive Volume with Us</h2>
                        <p className="text-white/60 mb-6 leading-relaxed">
                            We close 10-15 transactions a month statewide. We understand the value of a great escrow team. If your title company is investor-friendly, understands double closings, assignments, and can handle fast 7-day turnarounds, we want to route our deals to you.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                            {[
                                { icon: Clock, title: 'Speed of Execution', desc: 'Can you clear title fast? We need partners who operate at wholesale speeds.' },
                                { icon: FileText, title: 'Investor Friendly', desc: 'Familiarity with trust docs, LLCs, assignments, and hard money lenders.' },
                                { icon: Shield, title: 'High Volume', desc: 'Consistent, predictable deal flow directed to your desk.' }
                            ].map((b, i) => (
                                <div key={i} className="bg-white/5 p-6 rounded-2xl border border-white/10">
                                    <b.icon className="w-8 h-8 text-rose mb-4" />
                                    <h3 className="text-white font-bold mb-2">{b.title}</h3>
                                    <p className="text-white/40 text-sm">{b.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="text-center">
                        <a href="mailto:partners@omarwillbuyit.com" className="btn-glow inline-flex items-center gap-2 !px-10 !py-4 text-lg bg-rose/20 hover:bg-rose/30">
                            Introduce Your Title Co <ArrowRight className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </div>
        </PageTransition>
    )
}
