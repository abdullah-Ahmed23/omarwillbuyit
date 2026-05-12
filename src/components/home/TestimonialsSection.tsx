import { useState, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight, BadgeCheck, Quote } from 'lucide-react'

const reviews = [
    { name: 'Sarah M.', text: 'Omar was incredible! He gave us a fair cash offer and closed in just 10 days. No repairs, no hassle. Highly recommend!' },
    { name: 'James T.', text: 'I was facing foreclosure and needed to sell fast. The team walked me through the cash deal and made it stress-free.' },
    { name: 'Linda K.', text: 'Best experience selling a home. The process was honest, transparent, and built around our situation.' },
    { name: 'Robert P.', text: 'Sold my inherited property in 2 weeks. Omar made it simple. Fair offer, no games.' },
    { name: 'Maria G.', text: 'I compared 3 companies. Omarwillbuyit gave the best price AND the best service. Real people, real results.' },
    { name: 'David W.', text: 'Going through a divorce and needed to sell quickly. Omar was compassionate and professional. Closed in 12 days.' },
    { name: 'Angela R.', text: 'No repairs needed! We sold our 40-year-old house as-is. The cash offer was fair and closing seamless.' },
    { name: 'Chris B.', text: 'The cash deal process makes ALL the difference. No call centers, no runaround. Omar answered every question.' },
]

export default function TestimonialsSection() {
    const [current, setCurrent] = useState(0)
    const perView = typeof window !== 'undefined' && window.innerWidth >= 1024 ? 3 : 1
    const maxIndex = Math.max(0, reviews.length - perView)

    const ref = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
    const headingY = useTransform(scrollYProgress, [0, 1], [60, -60])
    const orbY1 = useTransform(scrollYProgress, [0, 1], [-50, 80])
    const orbY2 = useTransform(scrollYProgress, [0, 1], [30, -100])
    const carouselX = useTransform(scrollYProgress, [0, 1], [40, -40])

    return (
        <section ref={ref} className="py-32 bg-primary-light relative overflow-hidden noise">
            <div className="glow-line" />
            <motion.div style={{ y: orbY1 }} className="absolute top-0 right-[20%] w-[400px] h-[400px] bg-accent/6 rounded-full blur-[100px]" />
            <motion.div style={{ y: orbY2 }} className="absolute bottom-0 left-[15%] w-[300px] h-[300px] bg-gold/5 rounded-full blur-[80px]" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div style={{ y: headingY }} className="text-center mb-14">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20 text-gold text-sm font-bold mb-4">
                        <Star className="w-4 h-4" fill="currentColor" /> 5.0 Google Reviews
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white">
                        Reviews From <span className="gradient-text">Real Customers</span>
                    </h2>
                </motion.div>

                <motion.div style={{ x: carouselX }}>
                    <div className="overflow-hidden">
                        <motion.div className="flex gap-5" animate={{ x: `-${current * (100 / perView + (perView > 1 ? 1.7 : 0))}%` }} transition={{ type: 'spring', stiffness: 200, damping: 30 }}>
                            {reviews.map((r, i) => (
                                <motion.div key={i} className="flex-shrink-0 w-full lg:w-[calc(33.333%-0.85rem)]" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                                    <div className="glass-card rounded-2xl p-8 h-full gradient-border card-hover-glow">
                                        <div className="relative z-10">
                                            <Quote className="w-8 h-8 text-accent/20 mb-3" />
                                            <div className="flex gap-1 mb-4">{Array.from({ length: 5 }).map((_, j) => <Star key={j} className="w-4 h-4 text-gold" fill="currentColor" />)}</div>
                                            <p className="text-white/40 leading-relaxed mb-6 text-sm">"{r.text}"</p>
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-full gradient-bg-multi flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-accent/20">{r.name[0]}</div>
                                                <div>
                                                    <p className="font-semibold text-white text-sm">{r.name}</p>
                                                    <div className="flex items-center gap-1 text-xs text-cyan"><BadgeCheck className="w-3.5 h-3.5" /> Verified Seller</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </motion.div>

                <div className="flex items-center justify-center gap-4 mt-10">
                    <button onClick={() => setCurrent(c => Math.max(0, c - 1))} disabled={current === 0}
                        className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-accent hover:border-accent text-white/40 hover:text-white transition-all disabled:opacity-20">
                        <ChevronLeft className="w-5 h-5" />
                    </button>
                    <div className="flex gap-2">{Array.from({ length: maxIndex + 1 }).map((_, i) => (
                        <button key={i} onClick={() => setCurrent(i)} className={`h-2 rounded-full transition-all ${i === current ? 'gradient-bg w-8' : 'bg-white/15 w-2 hover:bg-white/25'}`} />
                    ))}</div>
                    <button onClick={() => setCurrent(c => Math.min(maxIndex, c + 1))} disabled={current >= maxIndex}
                        className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-accent hover:border-accent text-white/40 hover:text-white transition-all disabled:opacity-20">
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </section>
    )
}
