import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Users, Handshake, Landmark, ShieldCheck, ArrowRight, ArrowUpRight } from 'lucide-react'
import PageTransition from '../components/PageTransition'

const programs = [
    {
        title: 'Agents & Brokers',
        desc: 'Got a pocket listing or an un-listable home? Bring it to us. Double end the deal, get your commission, and let us handle the cash.',
        icon: Users,
        to: '/partners/agents',
        color: '#06b6d4',
        bg: 'from-cyan/20 to-transparent',
        perk: 'Double End Commission'
    },
    {
        title: 'Wholesalers',
        desc: 'We are aggressive end-buyers. Bring us your contracts. If the numbers make sense, we close fast with no assignments chain.',
        icon: Handshake,
        to: '/partners/wholesalers',
        color: '#7c3aed',
        bg: 'from-accent/20 to-transparent',
        perk: 'Direct End Buyers'
    },
    {
        title: 'Local Investors',
        desc: 'Looking for a JV partner? Or need to offload a tired rental portfolio? We partner with operators and buy bulk portfolios.',
        icon: Landmark,
        to: '/partners/local-investors',
        color: '#a78bfa',
        bg: 'from-accent-light/20 to-transparent',
        perk: 'JV Opportunities'
    },
    {
        title: 'Title Companies',
        desc: 'We close 10-15 transactions a month. We are always looking for efficient, investor-friendly title partners in new MSAs.',
        icon: ShieldCheck,
        to: '/partners/title-companies',
        color: '#f43f5e',
        bg: 'from-rose/20 to-transparent',
        perk: 'High Volume Closings'
    }
]

export default function Partners() {
    const ref = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
    const headingY = useTransform(scrollYProgress, [0, 1], [0, 150])

    return (
        <PageTransition>
            <div className="pt-32 pb-24 min-h-screen bg-primary noise overflow-hidden" ref={ref}>
                <motion.div style={{ y: useTransform(scrollYProgress, [0, 1], [0, 200]) }} className="absolute top-[10%] right-[10%] w-[500px] h-[500px] bg-accent/10 rounded-full blur-[150px]" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div style={{ y: headingY }} className="text-center mb-20 max-w-3xl mx-auto">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
                            Partner with <span className="gradient-text">Omarwillbuyit</span>
                        </h1>
                        <p className="mt-6 text-lg text-white/40">
                            We believe real estate is a team sport. Whether you have a deal to sell, money to deploy, or services to offer, we want to work with you in the Indiana market.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {programs.map((prog, i) => (
                            <motion.div key={prog.title} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
                                className="glass-card rounded-3xl overflow-hidden group card-hover-glow h-full flex flex-col relative">

                                <div className="absolute top-6 right-6 inline-block px-3 py-1 rounded-full text-xs font-bold bg-white/5 border border-white/10 text-white/60">
                                    {prog.perk}
                                </div>

                                <div className={`p-8 sm:p-10 flex-1 flex flex-col bg-gradient-to-br ${prog.bg}`}>
                                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-white/10 backdrop-blur-md mb-8 border border-white/20 shadow-lg" style={{ boxShadow: `0 10px 15px -3px ${prog.color}40` }}>
                                        <prog.icon className="w-8 h-8" style={{ color: prog.color }} />
                                    </div>

                                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 group-hover:text-cyan transition-colors">{prog.title}</h2>
                                    <p className="text-white/50 leading-relaxed mb-8 flex-1">{prog.desc}</p>

                                    <div className="mt-auto">
                                        <Link to={prog.to} className="inline-flex items-center gap-2 font-bold text-sm tracking-widest uppercase transition-all hover:gap-3" style={{ color: prog.color }}>
                                            Learn More <ArrowRight className="w-4 h-4" />
                                        </Link>
                                    </div>
                                </div>
                                {/* Full card clickable link */}
                                <Link to={prog.to} className="absolute inset-0 z-10"><span className="sr-only">View Program</span></Link>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="mt-20">
                        <div className="glass-card p-10 sm:p-14 rounded-3xl text-center gradient-border relative overflow-hidden flex flex-col sm:flex-row items-center justify-between gap-8 text-left">
                            <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-cyan/10 opacity-30" />
                            <div className="relative z-10 flex-1">
                                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">Have a unique proposal?</h3>
                                <p className="text-white/50">Pitch us your deal or idea. We review every submission.</p>
                            </div>
                            <div className="relative z-10">
                                <a href="mailto:partners@omarwillbuyit.com" className="btn-glow inline-flex items-center gap-2 !px-8 !py-4 whitespace-nowrap text-lg">
                                    Email Partners Hub <ArrowUpRight className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </PageTransition>
    )
}
