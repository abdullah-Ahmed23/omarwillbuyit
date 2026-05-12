import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useParams, Link } from 'react-router-dom'
import { Calendar, User, ArrowLeft, ArrowRight, Home } from 'lucide-react'
import PageTransition from '../components/PageTransition'

export default function BlogPost() {
    const { slug } = useParams()
    const ref = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
    const y = useTransform(scrollYProgress, [0, 1], [0, 150])
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

    return (
        <PageTransition>
            <div className="pt-24 pb-24 min-h-screen bg-primary noise overflow-hidden" ref={ref}>
                <div className="relative h-[60vh] min-h-[500px] w-full mt-4">
                    <motion.div style={{ y, opacity }} className="absolute inset-0">
                        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-primary/40 z-10" />
                        <img src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&q=80" alt="Blog Post" className="w-full h-full object-cover" />
                    </motion.div>

                    <div className="absolute top-8 left-8 z-20">
                        <Link to="/blog" className="inline-flex items-center gap-2 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full text-white/80 hover:text-white hover:bg-black/60 transition-all border border-white/10 text-sm font-semibold">
                            <ArrowLeft className="w-4 h-4" /> Back to Blog
                        </Link>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 z-20 p-8 pb-16">
                        <div className="max-w-4xl mx-auto mt-auto">
                            <span className="inline-block px-3 py-1 bg-cyan/20 border border-cyan/30 text-cyan text-xs font-bold rounded-md shadow-lg mb-6 tracking-wider shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                                Market Insights
                            </span>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
                                How Long Does It Really Take to Sell a House in Indiana?
                            </h1>
                            <div className="flex items-center gap-6 text-sm font-medium text-white/50">
                                <div className="flex items-center gap-2"><Calendar className="w-4 h-4 text-accent-light" /> October 12, 2023</div>
                                <div className="flex items-center gap-2"><User className="w-4 h-4 text-accent-light" /> Written by Omar</div>
                                <div className="flex items-center gap-2"><Home className="w-4 h-4 text-accent-light" /> 5 min read</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-30 -mt-8">
                    <div className="glass-card p-10 sm:p-14 rounded-3xl gradient-border prose prose-lg prose-invert max-w-none">
                        <p className="lead text-xl text-white/80 font-medium">
                            If you’re thinking about selling your house in Indiana, the first question on your mind is probably: "How long is this going to take?"
                        </p>
                        <p className="text-white/60">
                            The answer depends entirely on the method you choose to sell. While the traditional real estate market dictates one timeline (often a lengthy one), working directly with a cash buyer offers a completely different, much faster scenario.
                        </p>

                        <h2 className="text-2xl font-bold text-white mt-10 mb-6">The Traditional MLS Timeline: 65+ Days</h2>
                        <p className="text-white/60">
                            When you list a house on the Multiple Listing Service (MLS) with a real estate agent, you are essentially entering a waiting game. Here is a breakdown of the typical traditional timeline:
                        </p>
                        <ul className="text-white/60 space-y-2 mt-4">
                            <li><strong>Prep & Repair (1-3 weeks):</strong> Cleaning, painting, landscaping, and fixing minor issues before photos are taken.</li>
                            <li><strong>Time on Market (30-45 days):</strong> The national average for a home to sit on the market before receiving an acceptable offer.</li>
                            <li><strong>Closing Period (30-45 days):</strong> Once an offer is accepted, you wait on the buyer's mortgage approval, appraisal, and inspections.</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-white mt-10 mb-6">The Cash Deal Timeline: 7 to 14 Days</h2>
                        <p className="text-white/60">
                            At Omarwillbuyit, our cash deal and wholesaling process bypasses the delays of the traditional market. Because deals are built around cash buyers, we do not need bank approvals or drawn-out retail buyer financing.
                        </p>

                        <div className="bg-white/5 border-l-4 border-cyan p-6 my-8 rounded-r-xl">
                            <strong className="text-white text-lg block mb-2">The streamlined process:</strong>
                            <p className="text-white/60 m-0">
                                You contact us on Monday. We review the property on Tuesday. You have a cash offer by Wednesday. If accepted, we coordinate the transaction with a local title company and can close the following Wednesday. That's 9 days from start to finish.
                            </p>
                        </div>
                    </div>

                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-16 sm:mt-20">
                        <div className="glass-card p-10 sm:p-14 rounded-3xl text-center gradient-border relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-cyan/10 opacity-30" />
                            <div className="relative z-10">
                                <h3 className="text-3xl font-black text-white mb-4">Want to skip the <span className="gradient-text">65-day wait</span>?</h3>
                                <p className="text-white/50 mb-8 max-w-xl mx-auto">Get a fair cash offer within 24 hours. No repairs, no showings, no waiting on bank loans.</p>
                                <Link to="/contact" className="btn-glow inline-flex items-center gap-2 !px-10 !py-4 text-lg">
                                    Get My Cash Offer <ArrowRight className="w-5 h-5" />
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </PageTransition>
    )
}
