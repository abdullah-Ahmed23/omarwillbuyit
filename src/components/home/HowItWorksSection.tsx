import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ClipboardList, Phone, DollarSign, Key, ArrowRight } from 'lucide-react'

const steps = [
    { num: 1, icon: ClipboardList, title: 'Contact Us', desc: 'Fill out our simple form or call us directly. Takes under 2 minutes.', color: '#7c3aed' },
    { num: 2, icon: Phone, title: 'Review the Deal', desc: 'We call to understand your goals, property condition, and timeline.', color: '#06b6d4' },
    { num: 3, icon: DollarSign, title: 'Get Your Cash Offer', desc: 'We present a fair, no-obligation offer that actually closes.', color: '#a78bfa' },
    { num: 4, icon: Key, title: 'Close on Your Schedule', desc: 'Choose your date — 7 days or 60 days. We pay all closing costs.', color: '#f43f5e' },
]

export default function HowItWorksSection() {
    const ref = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
    const headingY = useTransform(scrollYProgress, [0, 1], [60, -60])
    const lineProgress = useTransform(scrollYProgress, [0.1, 0.8], [0, 1])

    // Each step card gets depth parallax
    const cardYs = steps.map((_, i) =>
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useTransform(scrollYProgress, [0, 1], [60 + i * 25, -(30 + i * 10)])
    )

    return (
        <section ref={ref} className="py-32 bg-radial-cyan relative overflow-hidden noise">
            <div className="glow-line" />

            {/* Parallax background elements */}
            <motion.div style={{ y: useTransform(scrollYProgress, [0, 1], [-40, 100]) }} className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/6 rounded-full blur-[120px]" />
            <motion.div style={{ y: useTransform(scrollYProgress, [0, 1], [60, -80]) }} className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-cyan/5 rounded-full blur-[100px]" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div style={{ y: headingY }} className="text-center mb-20">
                    <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                        className="text-3xl sm:text-4xl lg:text-5xl font-black text-white">
                        4 Simple Steps to Your <span className="gradient-text">Quick Sale</span>
                    </motion.h2>
                </motion.div>

                {/* Desktop layout */}
                <div className="hidden lg:block relative">
                    {/* Animated connecting line */}
                    <svg className="absolute top-1/2 left-0 w-full h-2 -translate-y-1/2 pointer-events-none" preserveAspectRatio="none">
                        <defs>
                            <linearGradient id="line-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#7c3aed" />
                                <stop offset="33%" stopColor="#06b6d4" />
                                <stop offset="66%" stopColor="#a78bfa" />
                                <stop offset="100%" stopColor="#f43f5e" />
                            </linearGradient>
                        </defs>
                        <motion.rect x="5%" width="90%" height="2" rx="1" fill="url(#line-grad)" style={{ scaleX: lineProgress, transformOrigin: 'left' }} />
                    </svg>

                    <div className="grid grid-cols-4 gap-8">
                        {steps.map((step, i) => (
                            <motion.div key={step.num} style={{ y: cardYs[i] }} className={`${i % 2 !== 0 ? 'mt-24' : 'mt-0'}`}>
                                <div className="glass-card rounded-2xl p-8 gradient-border card-hover-glow h-full">
                                    <div className="relative z-10">
                                        <div className="flex items-center gap-3 mb-5">
                                            <motion.div whileHover={{ scale: 1.2, rotate: 10 }} className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{ background: `${step.color}20` }}>
                                                <step.icon className="w-6 h-6" style={{ color: step.color }} />
                                            </motion.div>
                                            <span className="text-5xl font-black text-white/5">{step.num}</span>
                                        </div>
                                        <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                                        <p className="text-white/35 text-sm leading-relaxed">{step.desc}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Floating SOLD badge */}
                    <motion.div initial={{ opacity: 0, scale: 0, rotate: -20 }} whileInView={{ opacity: 1, scale: 1, rotate: -12 }} viewport={{ once: true }}
                        transition={{ type: 'spring', delay: 0.8, stiffness: 200 }}
                        className="absolute -right-4 top-0 gradient-bg text-white font-black text-2xl px-6 py-3 rounded-xl shadow-2xl shadow-accent/30">
                        SOLD!
                    </motion.div>
                </div>

                {/* Mobile timeline */}
                <div className="lg:hidden space-y-6">
                    {steps.map((step, i) => (
                        <motion.div key={step.num} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className="flex gap-4">
                            <div className="flex flex-col items-center">
                                <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0 shadow-lg" style={{ background: step.color, boxShadow: `0 8px 25px ${step.color}40` }}>
                                    {step.num}
                                </div>
                                {i < 3 && <div className="w-0.5 flex-1 mt-2" style={{ background: `linear-gradient(to bottom, ${step.color}40, transparent)` }} />}
                            </div>
                            <div className="pb-8"><h3 className="text-lg font-bold text-white">{step.title}</h3><p className="text-white/35 text-sm mt-1">{step.desc}</p></div>
                        </motion.div>
                    ))}
                </div>

                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mt-16">
                    <Link to="/contact" className="btn-glow inline-flex items-center gap-2 text-lg !px-10 !py-4">Start Your Sale Today <ArrowRight className="w-5 h-5" /></Link>
                </motion.div>
            </div>
        </section>
    )
}
