import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Landmark, Briefcase, TrendingUp, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageTransition from '../components/PageTransition'

export default function PartnersInvestors() {
    const ref = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
    const headingY = useTransform(scrollYProgress, [0, 1], [0, 150])

    return (
        <PageTransition>
            <div className="pt-32 pb-24 min-h-screen bg-primary noise overflow-hidden" ref={ref}>
                <motion.div style={{ y: useTransform(scrollYProgress, [0, 1], [0, 200]) }} className="absolute bottom-[20%] left-[20%] w-[500px] h-[500px] bg-accent-light/10 rounded-full blur-[150px]" />

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div style={{ y: headingY }} className="text-center mb-16">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
                            Partner with Us: <span className="gradient-text">Investors</span>
                        </h1>
                        <p className="mt-6 text-lg text-white/40">Joint ventures, portfolio acquisitions, and private money partnerships.</p>
                    </motion.div>

                    <div className="glass-card p-8 sm:p-12 rounded-3xl gradient-border mb-12">
                        <h2 className="text-2xl font-bold text-white mb-6">Scale Together</h2>
                        <p className="text-white/60 mb-6 leading-relaxed">
                            We generate massive amounts of off-market deal flow in Indiana. We are always open to partnering with local operators for joint ventures on larger flips or development projects. We also frequently acquire tired rental portfolios for cash.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                            {[
                                { icon: Briefcase, title: 'Portfolio Buyouts', desc: 'Looking to liquidate rentals? We buy bulk portfolios.' },
                                { icon: TrendingUp, title: 'Joint Ventures', desc: 'Partner on flips using our deal flow and your local crews.' },
                                { icon: Landmark, title: 'Private Capital', desc: 'Deploy capital securely backed by Indiana real estate.' }
                            ].map((b, i) => (
                                <div key={i} className="bg-white/5 p-6 rounded-2xl border border-white/10">
                                    <b.icon className="w-8 h-8 text-accent-light mb-4" />
                                    <h3 className="text-white font-bold mb-2">{b.title}</h3>
                                    <p className="text-white/40 text-sm">{b.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="text-center">
                        <a href="mailto:partners@omarwillbuyit.com" className="btn-glow inline-flex items-center gap-2 !px-10 !py-4 text-lg bg-accent-light/20">
                            Discuss Opportunities <ArrowRight className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </div>
        </PageTransition>
    )
}
