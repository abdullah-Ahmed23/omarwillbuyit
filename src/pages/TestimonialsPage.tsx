import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Star, BadgeCheck, MessageCircleHeart } from 'lucide-react'
import PageTransition from '../components/PageTransition'

const reviews = [
    { name: 'Sarah M.', location: 'Indianapolis', text: 'Omar was incredible! He gave us a fair cash offer and closed in just 10 days. No repairs, no hassle. Highly recommend!', rating: 5, date: 'October 2023' },
    { name: 'James T.', location: 'Carmel', text: 'I was facing foreclosure and needed to sell fast. The team walked me through the cash deal and made it stress-free.', rating: 5, date: 'September 2023' },
    { name: 'Linda K.', location: 'Fishers', text: 'Best experience selling a home. The process was honest, transparent, and built around our situation.', rating: 5, date: 'August 2023' },
    { name: 'Robert P.', location: 'Broad Ripple', text: 'Sold my inherited property in 2 weeks. Omar made it simple. Fair offer, no games.', rating: 5, date: 'July 2023' },
    { name: 'Maria G.', location: 'Evansville', text: 'I compared 3 companies. Omarwillbuyit gave the best price AND the best service. Real people, real results.', rating: 5, date: 'June 2023' },
    { name: 'David W.', location: 'South Bend', text: 'Going through a divorce and needed to sell quickly. Omar was compassionate and professional. Closed in 12 days.', rating: 5, date: 'May 2023' },
    { name: 'Angela R.', location: 'Fort Wayne', text: 'No repairs needed! We sold our 40-year-old house as-is. The cash offer was fair and closing seamless.', rating: 5, date: 'April 2023' },
    { name: 'Chris B.', location: 'Zionsville', text: 'The cash deal process made ALL the difference. No call centers, no runaround. Omar answered every question.', rating: 5, date: 'March 2023' },
    { name: 'Thompson Family', location: 'Noblesville', text: 'We lived out of state and needed to sell a rental property. The team handled everything locally. We barely lifted a finger.', rating: 5, date: 'February 2023' },
    { name: 'Michael D.', location: 'Avon', text: 'Fair price, fast close. I didn\'t have to deal with showings or random buyers walking through my house. Exactly what I wanted.', rating: 5, date: 'January 2023' },
    { name: 'The Wilsons', location: 'Greenwood', text: 'We needed cash fast to buy our next home out of state. The 7-day close saved our cross-country move.', rating: 5, date: 'December 2022' },
    { name: 'Elena C.', location: 'Brownsburg', text: 'I was skeptical of "we buy houses" companies, but Omar proved me wrong. Completely professional and transparent from day one.', rating: 5, date: 'November 2022' },
]

export default function TestimonialsPage() {
    const ref = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
    const headingY = useTransform(scrollYProgress, [0, 1], [0, 150])

    return (
        <PageTransition>
            <div className="pt-32 pb-24 min-h-screen bg-primary noise overflow-hidden" ref={ref}>
                <motion.div style={{ y: useTransform(scrollYProgress, [0, 1], [0, 200]) }} className="absolute top-[20%] left-[20%] w-[500px] h-[500px] bg-gold/5 rounded-full blur-[150px]" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div style={{ y: headingY }} className="text-center mb-16 max-w-3xl mx-auto">
                        <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-gold/10">
                            <MessageCircleHeart className="w-8 h-8 text-gold" />
                        </div>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
                            Real Words from <span className="text-gold">Real Homeowners</span>
                        </h1>
                        <p className="mt-6 text-lg text-white/40">Don't take our word for it. Read what our clients have to say about the cash deal experience.</p>
                    </motion.div>

                    {/* Stats Bar */}
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="glass-card mb-16 rounded-3xl p-8 flex flex-wrap justify-between items-center gap-6 max-w-4xl mx-auto gradient-border shadow-[0_0_30px_rgba(251,191,36,0.1)]">
                        <div className="text-center flex-1">
                            <div className="text-3xl font-black text-gold mb-1 text-shadow-glow">5.0</div>
                            <div className="flex gap-1 justify-center mb-1">
                                {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 text-gold" fill="currentColor" />)}
                            </div>
                            <div className="text-xs text-white/40 uppercase tracking-widest font-bold">Average Rating</div>
                        </div>
                        <div className="w-px h-12 bg-white/10 hidden md:block" />
                        <div className="text-center flex-1">
                            <div className="text-3xl font-black text-white mb-2">150+</div>
                            <div className="text-xs text-white/40 uppercase tracking-widest font-bold">Homes Purchased</div>
                        </div>
                        <div className="w-px h-12 bg-white/10 hidden md:block" />
                        <div className="text-center flex-1">
                            <div className="text-3xl font-black text-white mb-2">12 Days</div>
                            <div className="text-xs text-white/40 uppercase tracking-widest font-bold">Average Close Time</div>
                        </div>
                    </motion.div>

                    {/* Reviews Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {reviews.map((review, i) => (
                            <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                                className="glass-card p-8 rounded-3xl flex flex-col h-full card-hover-glow border-white/5 hover:border-gold/30">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="flex gap-1">
                                        {Array.from({ length: review.rating }).map((_, j) => (
                                            <Star key={j} className="w-4 h-4 text-gold" fill="currentColor" />
                                        ))}
                                    </div>
                                    <span className="text-xs text-white/30 font-medium">{review.date}</span>
                                </div>

                                <p className="text-white/60 leading-relaxed mb-8 flex-1 italic relative">
                                    <span className="absolute -top-4 -left-2 text-4xl text-white/5 font-serif leading-none">"</span>
                                    {review.text}
                                </p>

                                <div className="flex items-center gap-4 border-t border-white/5 pt-6 mt-auto">
                                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-gold/20 to-orange-500/20 border border-gold/30 flex items-center justify-center text-gold font-bold text-lg shadow-[0_0_15px_rgba(251,191,36,0.2)]">
                                        {review.name[0]}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-white text-sm">{review.name}</h3>
                                        <div className="flex items-center gap-2 text-xs text-white/40 mt-0.5">
                                            <span>{review.location}</span>
                                            <span className="w-1 h-1 rounded-full bg-cyan/50" />
                                            <span className="text-cyan flex items-center gap-1"><BadgeCheck className="w-3 h-3" /> Confirmed Seller</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </PageTransition>
    )
}
