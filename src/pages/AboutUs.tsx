import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Handshake, Heart, Target, Users } from 'lucide-react'
import PageTransition from '../components/PageTransition'

export default function AboutUs() {
    const ref = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
    const y = useTransform(scrollYProgress, [0, 1], [0, 200])

    return (
        <PageTransition>
            <div className="pt-32 pb-24 min-h-screen bg-primary noise overflow-hidden" ref={ref}>
                <motion.div style={{ y }} className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px]" />

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-20">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
                            Real People. Real Offers.<br />
                            <span className="gradient-text">Real Results.</span>
                        </h1>
                    </motion.div>

                    {/* Story Section */}
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="prose prose-lg prose-invert max-w-none mb-24">
                        <div className="glass-card p-10 sm:p-14 rounded-3xl gradient-border">
                            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">Our Story</h2>
                            <p className="text-white/60 leading-relaxed mb-6">
                                Omarwillbuyit was founded on a simple premise: selling a home should not be the most stressful event in a person's life. After years in the traditional real estate market, we saw firsthand how the conventional MLS process failed homeowners who needed certainty, speed, and convenience.
                            </p>
                            <p className="text-white/60 leading-relaxed mb-6">
                                We also saw the rise of mega-corporation "iBuyers" who treated homeowners like data points in an algorithm, dropping offers at the last minute and offering terrible customer service through overseas call centers.
                            </p>
                            <p className="text-white/80 font-semibold leading-relaxed text-xl border-l-4 border-cyan pl-6 my-10">
                                We decided to build a better way: <span className="text-cyan">cash deals with a transparent wholesaling process.</span>
                            </p>
                            <p className="text-white/60 leading-relaxed">
                                By combining investor speed, local market knowledge, and clear deal structure, we provide a process that puts certainty first. When you sell to us, you work with a local Indiana team that explains the numbers, handles the details, and has the cash buyer network to close on your timeline.
                            </p>
                        </div>
                    </motion.div>

                    {/* Core Values */}
                    <div className="mb-20">
                        <h2 className="text-3xl font-bold text-white text-center mb-12">Our Core <span className="gradient-text">Values</span></h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {[
                                { icon: Handshake, title: 'Total Transparency', desc: 'We show you our math. Our cash offers are based on hard data, not arbitrary lowballing.', color: '#06b6d4' },
                                { icon: Heart, title: 'Empathy First', desc: 'We understand that selling a house often comes during life transitions. We treat every client with compassion.', color: '#f43f5e' },
                                { icon: Target, title: 'Execution', desc: 'When we say we will close on the 15th, we close on the 15th. We do what we say we are going to do.', color: '#a78bfa' },
                                { icon: Users, title: 'Local Expertise', desc: 'We are not a faceless tech company in Silicon Valley. We live, work, and invest in Indiana.', color: '#7c3aed' }
                            ].map((val, i) => (
                                <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + i * 0.1 }}
                                    className="glass-card p-8 rounded-2xl card-hover-glow">
                                    <div className="w-12 h-12 rounded-xl mb-4 flex items-center justify-center bg-white/5 border border-white/10">
                                        <val.icon className="w-6 h-6" style={{ color: val.color }} />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2">{val.title}</h3>
                                    <p className="text-white/40 leading-relaxed text-sm">{val.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </PageTransition>
    )
}
