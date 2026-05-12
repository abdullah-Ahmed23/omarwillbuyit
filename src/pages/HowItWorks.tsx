import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Phone, Home, DollarSign, Calendar, CheckCircle2, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageTransition from '../components/PageTransition'

const steps = [
    {
        num: 1, icon: Phone, color: '#7c3aed',
        title: 'Initial Conversation',
        desc: 'We start by understanding your unique situation.',
        details: [
            'Fill out the form or call us directly.',
            'We discuss your property\'s condition and your ideal timeline.',
            'No pressure, just gathering the facts to see if we\'re a good fit.'
        ]
    },
    {
        num: 2, icon: Home, color: '#06b6d4',
        title: 'Property Evaluation',
        desc: 'A quick, simple walk-through of your home.',
        details: [
            'We schedule a brief visit at your convenience.',
            'We look at the major systems (roof, HVAC, foundation).',
            'No need to clean up or make any repairs beforehand.'
        ]
    },
    {
        num: 3, icon: DollarSign, color: '#a78bfa',
        title: 'Your Cash Offer',
        desc: 'A fair, transparent, no-obligation offer.',
        details: [
            'We present our cash offer, usually within 24 hours of the walk-through.',
            'We transparently explain how we arrived at our number.',
            'You are free to accept, decline, or think about it.'
        ]
    },
    {
        num: 4, icon: Calendar, color: '#f43f5e',
        title: 'Closing Day',
        desc: 'Sign the papers and get your cash.',
        details: [
            'You pick the closing date (as fast as 7 days).',
            'We handle all the paperwork and pay all closing costs.',
            'You walk away with cash in hand and your property sold.'
        ]
    }
]

export default function HowItWorks() {
    const ref = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
    const headingY = useTransform(scrollYProgress, [0, 1], [0, 150])

    return (
        <PageTransition>
            <div className="pt-32 pb-24 min-h-screen bg-primary noise overflow-hidden" ref={ref}>
                <motion.div style={{ y: useTransform(scrollYProgress, [0, 1], [0, 250]) }} className="absolute top-[15%] left-[10%] w-[500px] h-[500px] bg-accent/6 rounded-full blur-[120px]" />
                <motion.div style={{ y: useTransform(scrollYProgress, [0, 1], [0, -150]) }} className="absolute top-[60%] right-[10%] w-[400px] h-[400px] bg-cyan/6 rounded-full blur-[100px]" />

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div style={{ y: headingY }} className="text-center mb-24 max-w-2xl mx-auto">
                        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
                            How the Process <span className="gradient-text">Works</span>
                        </motion.h1>
                        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mt-6 text-lg text-white/40">
                            We've stripped away the complexity of selling a home. Just a straightforward, transparent process designed around you.
                        </motion.p>
                    </motion.div>

                    <div className="relative">
                        {/* Connecting line */}
                        <div className="absolute left-6 md:left-12 top-0 bottom-0 w-1 bg-gradient-to-b from-accent via-cyan to-rose hidden sm:block" />

                        <div className="space-y-12 sm:space-y-20">
                            {steps.map((step, index) => (
                                <motion.div key={step.num} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="relative flex flex-col sm:flex-row gap-6 sm:gap-12">
                                    <div className="sm:absolute sm:left-12 sm:-translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full font-black text-white z-10 shadow-[0_0_20px_rgba(0,0,0,0.5)] border-4 border-primary"
                                        style={{ background: step.color }}>
                                        {step.num}
                                    </div>

                                    <div className="sm:pl-28 w-full">
                                        <div className="glass-card p-8 sm:p-10 rounded-3xl gradient-border card-hover-glow">
                                            <div className="flex items-center gap-4 mb-6">
                                                <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-white/5">
                                                    <step.icon className="w-7 h-7" style={{ color: step.color }} />
                                                </div>
                                                <div>
                                                    <h2 className="text-2xl font-bold text-white">{step.title}</h2>
                                                    <p className="text-white/40 font-medium">{step.desc}</p>
                                                </div>
                                            </div>

                                            <div className="bg-white/5 rounded-2xl p-6 sm:p-8">
                                                <ul className="space-y-4">
                                                    {step.details.map((detail, idx) => (
                                                        <li key={idx} className="flex items-start gap-3">
                                                            <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: step.color }} />
                                                            <span className="text-white/70 leading-relaxed text-sm">{detail}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="mt-24 text-center">
                        <div className="glass-card p-10 sm:p-16 rounded-3xl gradient-border relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan/10 to-accent/10 opacity-50" />
                            <div className="relative z-10">
                                <h2 className="text-3xl font-bold text-white mb-6">Ready to see what we can offer?</h2>
                                <p className="text-white/60 mb-8 max-w-xl mx-auto">There's no obligation to accept, and it costs you nothing to find out.</p>
                                <Link to="/contact" className="btn-glow inline-flex items-center gap-2 !px-10 !py-4 text-lg">
                                    Get My Fast Cash Offer <ArrowRight className="w-5 h-5" />
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </PageTransition>
    )
}
