import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Calendar, User, ArrowRight } from 'lucide-react'
import PageTransition from '../components/PageTransition'

const posts = [
    { id: 1, title: 'How Long Does It Really Take to Sell a House in Indiana?', excerpt: 'The traditional MLS process takes an average of 65 days. Learn how a cash deal and wholesaling process can cut that down to 7 days.', category: 'Selling Tips', readTime: '5 min read', date: 'Oct 12, 2023', image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&q=80', slug: 'how-long-to-sell' },
    { id: 2, title: '5 Repairs You SHOULD NOT Make Before Selling', excerpt: 'Don\'t waste money on renovations that won\'t increase your sale price. Discover which repairs are total money pits.', category: 'Home Improvements', readTime: '7 min read', date: 'Oct 05, 2023', image: 'https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?auto=format&fit=crop&q=80', slug: 'repairs-not-to-make' },
    { id: 3, title: 'What is an iBuyer? (And why you should avoid them)', excerpt: 'Big tech companies are buying homes via algorithms. Uncover the hidden fees and bait-and-switch tactics they use.', category: 'Market Insights', readTime: '6 min read', date: 'Sep 28, 2023', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80', slug: 'what-is-ibuyer' },
    { id: 4, title: 'Indianapolis Housing Market Predicts for 2024', excerpt: 'Are prices dropping? Should you sell now or wait? We break down the local data so you can make an informed decision.', category: 'Market Updates', readTime: '8 min read', date: 'Sep 15, 2023', image: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&q=80', slug: 'indy-predictions' },
    { id: 5, title: 'Selling an Inherited Property in Indiana: A Guide', excerpt: 'Navigating probate and property maintenance can be overwhelming. Here is your step-by-step guide to selling inherited real estate.', category: 'Situations', readTime: '10 min read', date: 'Sep 02, 2023', image: 'https://images.unsplash.com/photo-1448630360428-65456885f650?auto=format&fit=crop&q=80', slug: 'inherited-property-guide' },
    { id: 6, title: 'We Bought This House As-Is (Case Study)', excerpt: 'See the before-and-after of a recent property we purchased that was facing code violations, and how we helped the owner out of a tough spot.', category: 'Case Studies', readTime: '4 min read', date: 'Aug 21, 2023', image: 'https://images.unsplash.com/photo-1503174971373-b1f69850bded?auto=format&fit=crop&q=80', slug: 'as-is-case-study' },
]

export default function Blog() {
    const ref = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
    const headingY = useTransform(scrollYProgress, [0, 1], [0, 150])

    return (
        <PageTransition>
            <div className="pt-32 pb-24 min-h-screen bg-primary noise overflow-hidden" ref={ref}>
                <motion.div style={{ y: useTransform(scrollYProgress, [0, 1], [0, 300]) }} className="absolute top-[10%] right-[15%] w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px]" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div style={{ y: headingY }} className="text-center mb-20 max-w-3xl mx-auto">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
                            Real Estate <span className="gradient-text">Insights</span>
                        </h1>
                        <p className="mt-6 text-lg text-white/40">Tips, market data, and guides to help you navigate selling your home in Indiana.</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post, i) => (
                            <motion.div key={post.id} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
                                className="glass-card rounded-3xl overflow-hidden group flex flex-col h-full card-hover-glow">

                                <div className="relative aspect-video overflow-hidden">
                                    <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10" />
                                    <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" />
                                    <div className="absolute top-4 left-4 z-20">
                                        <span className="px-3 py-1 bg-cyan/90 border border-cyan text-primary text-xs font-bold rounded-md shadow-lg backdrop-blur-sm">
                                            {post.category}
                                        </span>
                                    </div>
                                </div>

                                <div className="p-8 flex flex-col flex-1">
                                    <div className="flex items-center gap-4 text-xs font-medium text-white/40 mb-4">
                                        <div className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5 text-accent-light" /> {post.date}</div>
                                        <div className="w-1 h-1 rounded-full bg-white/20" />
                                        <div className="flex items-center gap-1.5"><User className="w-3.5 h-3.5 text-accent-light" /> Omar</div>
                                    </div>

                                    <h2 className="text-xl font-bold text-white mb-3 group-hover:text-cyan transition-colors leading-snug">
                                        <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                                    </h2>
                                    <p className="text-white/40 text-sm leading-relaxed mb-6 flex-1 line-clamp-3">{post.excerpt}</p>

                                    <div className="flex items-center justify-between border-t border-white/10 pt-4 mt-auto">
                                        <span className="text-xs text-white/30 font-medium">{post.readTime}</span>
                                        <Link to={`/blog/${post.slug}`} className="inline-flex items-center gap-1 text-sm font-bold gradient-text group-hover:gap-2 transition-all">
                                            Read More <ArrowRight className="w-4 h-4 text-cyan" />
                                        </Link>
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
