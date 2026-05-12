import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, BadgeDollarSign, ClipboardCheck, FileSignature, KeyRound } from 'lucide-react'

const dealSteps = [
    {
        icon: ClipboardCheck,
        label: 'Property Review',
        title: 'Tell us about the house',
        desc: 'Share the address, condition, and your ideal timeline so we can size up the deal quickly.',
        accent: '#7c3aed',
    },
    {
        icon: BadgeDollarSign,
        label: 'Cash Offer',
        title: 'Get clear numbers',
        desc: 'We explain the offer, repair assumptions, closing costs, and any wholesale assignment structure up front.',
        accent: '#06b6d4',
    },
    {
        icon: FileSignature,
        label: 'Title Work',
        title: 'Sign and verify',
        desc: 'A local title company checks the file, prepares documents, and keeps the closing process clean.',
        accent: '#a78bfa',
    },
    {
        icon: KeyRound,
        label: 'Close',
        title: 'Pick your closing date',
        desc: 'Close fast or choose a date that gives you time to move. No showings, repairs, or retail buyer delays.',
        accent: '#f43f5e',
    },
]

export default function VideoSection() {
    const ref = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
    const y = useTransform(scrollYProgress, [0, 1], [80, -80])
    const orbY = useTransform(scrollYProgress, [0, 1], [-50, 100])

    return (
        <section ref={ref} className="py-32 bg-primary relative overflow-hidden">
            <div className="glow-line" />
            <motion.div style={{ y: orbY }} className="absolute top-1/3 left-1/4 w-[500px] h-[300px] bg-accent/5 rounded-full blur-[100px]" />
            <motion.div style={{ y: useTransform(scrollYProgress, [0, 1], [30, -80]) }} className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-cyan/5 rounded-full blur-[80px]" />

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div style={{ y }} className="relative overflow-hidden rounded-3xl border border-accent/10 bg-surface-dark shadow-[0_20px_80px_-20px_rgba(124,58,237,0.25)]">
                    <div className="absolute inset-0 bg-dots opacity-30" />
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-cyan/10" />

                    <div className="relative z-10 p-8 sm:p-12">
                        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-10">
                            <div>
                                <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent-light">Cash Deal Snapshot</p>
                                <h2 className="mt-3 text-3xl sm:text-4xl font-black text-white">
                                    A Cleaner Way to Sell <span className="gradient-text">Without Listing</span>
                                </h2>
                            </div>
                            <p className="text-white/40 max-w-md leading-relaxed">
                                See the whole wholesale-style process before you commit: clear numbers, title company closing, and no retail buyer waiting game.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {dealSteps.map((step, i) => (
                                <motion.div
                                    key={step.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.08 }}
                                    className="glass-card !transform-none rounded-2xl p-6 border-white/8"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${step.accent}18` }}>
                                            <step.icon className="w-6 h-6" style={{ color: step.accent }} />
                                        </div>
                                        <div>
                                            <div className="text-xs font-bold uppercase tracking-[0.18em]" style={{ color: step.accent }}>{step.label}</div>
                                            <h3 className="mt-2 text-lg font-bold text-white">{step.title}</h3>
                                            <p className="mt-2 text-sm leading-relaxed text-white/40">{step.desc}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-white/35">
                            <span className="inline-flex items-center gap-2">
                                <ArrowRight className="w-4 h-4 text-cyan" />
                                No repairs
                            </span>
                            <span className="inline-flex items-center gap-2">
                                <ArrowRight className="w-4 h-4 text-cyan" />
                                No showings
                            </span>
                            <span className="inline-flex items-center gap-2">
                                <ArrowRight className="w-4 h-4 text-cyan" />
                                Flexible closing
                            </span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
