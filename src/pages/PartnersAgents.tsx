import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Users, DollarSign, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageTransition from '../components/PageTransition'

export default function PartnersAgents() {
    const ref = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
    const headingY = useTransform(scrollYProgress, [0, 1], [0, 150])

    return (
        <PageTransition>
            <div className="pt-32 pb-24 min-h-screen bg-primary noise overflow-hidden" ref={ref}>
                <motion.div style={{ y: useTransform(scrollYProgress, [0, 1], [0, 200]) }} className="absolute top-[10%] left-[20%] w-[500px] h-[500px] bg-cyan/10 rounded-full blur-[150px]" />

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div style={{ y: headingY }} className="text-center mb-16">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
                            Partner with Us: <span className="gradient-text">Agents</span>
                        </h1>
                        <p className="mt-6 text-lg text-white/40">Double end your commissions. Bring us your un-listable properties or sellers who need out fast.</p>
                    </motion.div>

                    <div className="glass-card p-8 sm:p-12 rounded-3xl gradient-border mb-12">
                        <h2 className="text-2xl font-bold text-white mb-6">How We Work With Agents</h2>
                        <p className="text-white/60 mb-6 leading-relaxed">
                            We respect agency. If you bring us a deal, you represent the seller (or us, depending on the scenario) and you keep your commission. We are cash buyers looking for off-market opportunities, pocket listings, or houses that simply cannot survive a traditional MLS listing due to condition or seller timeline.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                            {[
                                { icon: DollarSign, title: 'Keep Your Commission', desc: 'We don\'t cut you out. You bring the deal, you get paid.' },
                                { icon: ShieldCheck, title: 'Certainty of Close', desc: 'We buy with our own cash. No financing contingencies.' },
                                { icon: Users, title: 'Referral Fees', desc: 'Not licensed? We pay competitive referral fees for solid leads.' }
                            ].map((b, i) => (
                                <div key={i} className="bg-white/5 p-6 rounded-2xl border border-white/10">
                                    <b.icon className="w-8 h-8 text-cyan mb-4" />
                                    <h3 className="text-white font-bold mb-2">{b.title}</h3>
                                    <p className="text-white/40 text-sm">{b.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="text-center">
                        <Link to="/contact" className="btn-glow inline-flex items-center gap-2 !px-10 !py-4 text-lg">
                            Submit a Property <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </div>
        </PageTransition>
    )
}
