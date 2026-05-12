import { useState, useRef } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { ChevronDown, MessageCircleQuestion } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageTransition from '../components/PageTransition'

const faqCategories = [
    {
        title: 'Cash Deals & Wholesaling',
        items: [
            { q: 'How does your wholesaling process work?', a: 'We review your property, make a clear cash offer, and coordinate the closing through a local title company. In some deals we buy directly; in others we may assign the contract to a vetted cash buyer. Either way, the terms are explained up front.' },
            { q: 'Why is this better than listing on the MLS?', a: 'Listing on the MLS is great if you have a perfect home, out-of-pocket cash for repairs, and time to wait months for a retail buyer. We offer certainty. No repairs, no endless showings, no staging, and a guaranteed closing date.' },
        ]
    },
    {
        title: 'The Offer & Process',
        items: [
            { q: 'How do you determine the offer price?', a: 'Our process is fully transparent. We look at the location of the property, the current condition, the cost of needed repairs, and the value of comparable houses sold in the area recently. We share this data with you so you see exactly how we arrived at our number.' },
            { q: 'Are there any fees or commissions?', a: 'None. With our cash deal process, there are zero listing commissions, zero hidden fees, and we can pay standard closing costs. The number we offer is the number you can plan around.' },
            { q: 'Am I obligated to accept your offer?', a: 'Absolutely not. Our offers are 100% free and come with zero obligation. We present the offer, answer your questions, and leave the decision entirely up to you.' },
        ]
    }
]

export default function FAQ() {
    const [activeTab, setActiveTab] = useState(0)
    const [openItem, setOpenItem] = useState<string | null>(null)

    const ref = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
    const headingY = useTransform(scrollYProgress, [0, 1], [0, 150])

    return (
        <PageTransition>
            <div className="pt-32 pb-24 min-h-screen bg-primary noise overflow-hidden" ref={ref}>
                <motion.div style={{ y: useTransform(scrollYProgress, [0, 1], [0, 200]) }} className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px]" />

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div style={{ y: headingY }} className="text-center mb-16">
                        <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-cyan/10">
                            <MessageCircleQuestion className="w-8 h-8 text-cyan" />
                        </div>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
                            Frequently Asked <span className="gradient-text">Questions</span>
                        </h1>
                    </motion.div>

                    {/* Category Tabs */}
                    <div className="flex flex-wrap justify-center gap-2 mb-12">
                        {faqCategories.map((cat, idx) => (
                            <button key={idx} onClick={() => setActiveTab(idx)}
                                className={`px-6 py-3 rounded-xl font-semibold transition-all ${activeTab === idx ? 'gradient-bg text-white shadow-lg shadow-accent/20' : 'bg-white/5 text-white/40 hover:text-white hover:bg-white/10'
                                    }`}>
                                {cat.title}
                            </button>
                        ))}
                    </div>

                    {/* Accordion List */}
                    <div className="space-y-4">
                        <AnimatePresence mode="popLayout">
                            {faqCategories[activeTab].items.map((faq, i) => {
                                const isOpen = openItem === `${activeTab}-${i}`
                                return (
                                    <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.2 }}>
                                        <div className="glass-card rounded-2xl overflow-hidden gradient-border">
                                            <button onClick={() => setOpenItem(isOpen ? null : `${activeTab}-${i}`)}
                                                className={`w-full text-left px-8 py-6 flex items-center justify-between transition-colors ${isOpen ? 'bg-white/5' : 'hover:bg-white/5'
                                                    }`}>
                                                <span className="font-bold text-white text-lg pr-4">{faq.q}</span>
                                                <ChevronDown className={`w-5 h-5 text-cyan transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                                            </button>
                                            <AnimatePresence>
                                                {isOpen && (
                                                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}>
                                                        <div className="px-8 pb-6 text-white/50 leading-relaxed border-t border-white/5 pt-4">
                                                            {faq.a}
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    </motion.div>
                                )
                            })}
                        </AnimatePresence>
                    </div>

                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="mt-20 text-center glass-card p-12 rounded-3xl gradient-border">
                        <h3 className="text-2xl font-bold text-white mb-4">Still have a question?</h3>
                        <p className="text-white/40 mb-8 max-w-lg mx-auto">If you couldn't find the answer to your question, our team is ready to help.</p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link to="/contact" className="btn-glow !px-8">Get Your Offer</Link>
                            <Link to="/contact" className="btn-outline">Call Us Today</Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </PageTransition>
    )
}
