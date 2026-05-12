import { useState, useRef } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ChevronDown, ArrowRight } from 'lucide-react'

const faqs = [
    { q: 'Do you purchase homes directly?', a: "Yes! We're professional cash buyers — not agents listing on the MLS. We buy with cash, so sales are faster and cleaner." },
    { q: 'Will you make a fair offer?', a: "Absolutely. Our offers are based on real market data. We walk you through our numbers transparently." },
    { q: 'Can you close in 14 days?', a: "Yes! No banks, no delays. We can close in 7 days or on whatever timeline works for you." },
    { q: 'Do I need to make repairs?', a: "Zero repairs. We buy in any condition — as-is. No cleaning, fixing, or staging needed." },
    { q: 'How does the wholesaling process work?', a: "We review the property, make a clear cash offer, and handle the closing details through a local title company. No MLS listing, no repairs, and no drawn-out buyer financing." },
]

export default function FAQSection() {
    const [open, setOpen] = useState<number | null>(0)
    const ref = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
    const headingY = useTransform(scrollYProgress, [0, 1], [60, -60])

    // Staggered parallax on FAQ items
    const itemYs = faqs.map((_, i) =>
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useTransform(scrollYProgress, [0, 1], [30 + i * 10, -(15 + i * 8)])
    )

    return (
        <section ref={ref} className="py-32 bg-primary relative overflow-hidden noise">
            <div className="glow-line" />
            <motion.div style={{ y: useTransform(scrollYProgress, [0, 1], [-40, 80]) }} className="absolute bottom-1/4 right-0 w-[350px] h-[350px] bg-accent/4 rounded-full blur-[100px]" />

            {/* Particles */}
            {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="particle" style={{ left: `${20 + i * 15}%`, animationDuration: `${10 + i * 3}s`, animationDelay: `${i * 2}s`, background: i % 2 === 0 ? '#a78bfa' : '#06b6d4' }} />
            ))}

            <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div style={{ y: headingY }} className="text-center mb-14">
                    <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                        className="text-3xl sm:text-4xl lg:text-5xl font-black text-white">
                        Frequently Asked <span className="gradient-text">Questions</span>
                    </motion.h2>
                </motion.div>

                <div className="space-y-3">
                    {faqs.map((faq, i) => {
                        const isOpen = open === i
                        return (
                            <motion.div key={i} style={{ y: itemYs[i] }}>
                                <button onClick={() => setOpen(isOpen ? null : i)}
                                    className={`w-full flex items-center justify-between p-6 rounded-2xl text-left transition-all duration-300 ${isOpen ? 'gradient-bg text-white shadow-xl shadow-accent/20' : 'glass-card !transform-none'
                                        }`}>
                                    <span className="font-semibold text-base pr-4">{faq.q}</span>
                                    <ChevronDown className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : 'text-white/30'}`} />
                                </button>
                                <AnimatePresence>
                                    {isOpen && (
                                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                                            <p className="p-6 text-white/35 leading-relaxed text-sm">{faq.a}</p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        )
                    })}
                </div>

                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mt-10">
                    <Link to="/faq" className="inline-flex items-center gap-2 text-accent-light font-semibold hover:gap-3 transition-all">View All FAQs <ArrowRight className="w-4 h-4" /></Link>
                </motion.div>
            </div>
        </section>
    )
}
