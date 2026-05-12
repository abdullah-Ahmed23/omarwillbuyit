import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Check, X, ArrowRight, Shield, Zap, TrendingUp } from 'lucide-react'
import PageTransition from '../components/PageTransition'

const options = [
    {
        title: 'Cash Deal Offer',
        subtitle: 'Fastest & Easiest',
        idealFor: 'Sellers who want zero hassle, no repairs, and a guaranteed fast closing.',
        icon: Zap,
        color: '#06b6d4',
        bg: 'from-[#06b6d4]/20 to-transparent',
        features: [
            { text: 'Close in as little as 7 days', included: true },
            { text: 'No repairs or cleaning needed', included: true },
            { text: 'Zero listing commissions or fees', included: true },
            { text: 'No strangers touring your home', included: true },
            { text: 'Pick your exact moving date', included: true },
        ],
        cta: 'Get Cash Offer'
    },
    {
        title: 'Traditional MLS Listing',
        subtitle: 'Maximize Potential Value',
        idealFor: 'Sellers with fully updated homes who are willing to wait for the highest retail buyer.',
        icon: TrendingUp,
        color: '#7c3aed',
        bg: 'from-[#7c3aed]/20 to-transparent',
        features: [
            { text: 'Potentially higher final sale price', included: true },
            { text: 'Requires upfront repairs & prep', included: false },
            { text: 'Pay 6% in listing commissions', included: false },
            { text: 'Endure weeks of open houses', included: false },
            { text: 'Risk of buyer financing falling through', included: false },
        ],
        cta: 'Discuss Listing'
    },
    {
        title: 'The Hybrid Approach',
        subtitle: 'List & Cash Backup',
        idealFor: 'Sellers who want to try the market but need a safety net guaranteed offer.',
        icon: Shield,
        color: '#a78bfa',
        bg: 'from-[#a78bfa]/20 to-transparent',
        features: [
            { text: 'Test the market for 30 days', included: true },
            { text: 'Guaranteed cash offer in your pocket', included: true },
            { text: 'Complete peace of mind', included: true },
            { text: 'You control the final decision', included: true },
            { text: 'Avoid worst-case scenarios', included: true },
        ],
        cta: 'Learn About Hybrid'
    }
]

export default function SellingOptions() {
    const ref = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
    const headingY = useTransform(scrollYProgress, [0, 1], [0, 150])
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

    return (
        <PageTransition>
            <div className="pt-32 pb-24 min-h-screen bg-primary noise overflow-hidden" ref={ref}>
                {/* Parallax Orbs */}
                <motion.div style={{ y: useTransform(scrollYProgress, [0, 1], [0, 300]) }} className="absolute top-[10%] left-[20%] w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px]" />
                <motion.div style={{ y: useTransform(scrollYProgress, [0, 1], [0, -200]) }} className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] bg-cyan/10 rounded-full blur-[100px]" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div style={{ y: headingY, opacity }} className="text-center mb-20 max-w-3xl mx-auto">
                        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
                            Compare Your <span className="gradient-text">Selling Options</span>
                        </motion.h1>
                        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mt-6 text-lg text-white/40">
                            Every homeowner's situation is unique. That's why our cash deals team offers multiple ways to sell your Indiana home.
                        </motion.p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {options.map((option, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + i * 0.1 }}
                                className={`glass-card rounded-3xl overflow-hidden flex flex-col relative ${i === 0 ? 'border-cyan/30 shadow-[0_0_40px_rgba(6,182,212,0.15)] ring-1 ring-cyan/20' : ''}`}>

                                {i === 0 && (
                                    <div className="absolute top-0 left-0 right-0 py-1.5 bg-gradient-to-r from-cyan to-blue-500 text-center text-xs font-bold text-white tracking-wider uppercase">
                                        Most Popular Choice
                                    </div>
                                )}

                                <div className={`p-8 pb-6 border-b border-white/5 bg-gradient-to-b ${option.bg} ${i === 0 ? 'pt-12' : ''}`}>
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-white/5 backdrop-blur-md">
                                            <option.icon className="w-6 h-6" style={{ color: option.color }} />
                                        </div>
                                        <div>
                                            <div className="text-sm font-bold tracking-wider" style={{ color: option.color }}>{option.subtitle}</div>
                                            <h2 className="text-xl font-bold text-white">{option.title}</h2>
                                        </div>
                                    </div>
                                    <p className="text-sm text-white/40 leading-relaxed">{option.idealFor}</p>
                                </div>

                                <div className="p-8 flex-1 flex flex-col">
                                    <ul className="space-y-4 flex-1 mb-8">
                                        {option.features.map((feat, j) => (
                                            <li key={j} className="flex items-start gap-3">
                                                <div className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${feat.included ? 'bg-cyan/20 text-cyan' : 'bg-rose/20 text-rose'}`}>
                                                    {feat.included ? <Check className="w-3 h-3 font-bold" /> : <X className="w-3 h-3 font-bold" />}
                                                </div>
                                                <span className={`text-sm ${feat.included ? 'text-white/80' : 'text-white/40'}`}>{feat.text}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <Link to="/contact" className={`w-full py-4 rounded-xl flex items-center justify-center gap-2 font-bold transition-all ${i === 0 ? 'bg-cyan hover:bg-cyan/80 text-primary shadow-lg shadow-cyan/20' : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
                                        }`}>
                                        {option.cta} <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </PageTransition>
    )
}
