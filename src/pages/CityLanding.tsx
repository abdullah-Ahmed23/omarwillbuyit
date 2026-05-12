import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useParams, Link } from 'react-router-dom'
import { MapPin, ArrowRight, Shield, Zap, DollarSign } from 'lucide-react'
import PageTransition from '../components/PageTransition'

export default function CityLanding() {
    const { city } = useParams()
    // Format city name: "indianapolis" -> "Indianapolis"
    const cityName = city ? city.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') : 'Your City'

    const ref = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
    const headingY = useTransform(scrollYProgress, [0, 1], [0, 150])

    return (
        <PageTransition>
            <div className="pt-32 pb-24 min-h-screen bg-primary noise overflow-hidden" ref={ref}>
                <motion.div style={{ y: useTransform(scrollYProgress, [0, 1], [0, 250]) }} className="absolute top-[10%] left-[10%] w-[500px] h-[500px] bg-accent/10 rounded-full blur-[150px]" />
                <motion.div style={{ y: useTransform(scrollYProgress, [0, 1], [0, -200]) }} className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] bg-cyan/10 rounded-full blur-[120px]" />

                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div style={{ y: headingY }} className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan/10 border border-cyan/20 text-cyan text-sm font-bold mb-6">
                            <MapPin className="w-4 h-4" /> Local Buyers in {cityName}, IN
                        </div>
                        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-[1.05]">
                            We Buy Houses in <span className="gradient-text">{cityName}</span> Fast!
                        </h1>
                        <p className="mt-8 text-xl text-white/40 max-w-2xl mx-auto leading-relaxed">
                            Sell your <span className="text-white font-medium">{cityName}</span> house through a straightforward cash deal. No repairs, no cleaning, no fees. We close when you want to close.
                        </p>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="glass-card p-2 rounded-3xl gradient-border max-w-2xl mx-auto bg-primary-light/50 mb-20 shadow-[0_0_40px_rgba(6,182,212,0.1)]">
                        <form className="flex flex-col sm:flex-row gap-2" onSubmit={(e) => e.preventDefault()}>
                            <div className="relative flex-1">
                                <MapPin className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-white/20" />
                                <input type="text" placeholder={`Enter your ${cityName} address...`}
                                    className="w-full bg-transparent border-none px-12 py-5 text-white placeholder-white/20 focus:outline-none focus:ring-0 text-lg" />
                            </div>
                            <Link to="/contact" className="btn-glow !py-5 !px-8 !rounded-2xl whitespace-nowrap text-lg">
                                Get Cash Offer
                            </Link>
                        </form>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: Shield, title: 'No Repairs Needed', desc: `We buy properties in ${cityName} strictly "as-is". Leave the trash, leave the work to us.` },
                            { icon: DollarSign, title: 'Keep All Your Cash', desc: 'No listing commissions and we pay all the standard closing costs at the title company.' },
                            { icon: Zap, title: 'Close on Your Timeline', desc: 'Need to move out next week? Or need 60 days to pack? You pick the closing date.' }
                        ].map((ft, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                                className="glass-card p-8 rounded-3xl card-hover-glow">
                                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 shadow-md shadow-accent/10">
                                    <ft.icon className="w-7 h-7 text-cyan" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{ft.title}</h3>
                                <p className="text-white/40 leading-relaxed">{ft.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mt-24 text-center">
                        <h2 className="text-3xl font-bold text-white mb-6">Stop wondering "How do I sell my house in {cityName}?"</h2>
                        <Link to="/contact" className="inline-flex items-center gap-2 font-bold text-lg text-cyan hover:text-white transition-colors">
                            Read Our Step-By-Step Process <ArrowRight className="w-5 h-5" />
                        </Link>
                    </motion.div>
                </div>
            </div>
        </PageTransition>
    )
}
