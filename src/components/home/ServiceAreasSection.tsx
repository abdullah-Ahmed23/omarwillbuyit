import { useState, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import { MapPin } from 'lucide-react'

const cities = ['Indianapolis', 'Fort Wayne', 'Evansville', 'South Bend', 'Carmel', 'Fishers', 'Bloomington', 'Hammond', 'Muncie', 'Lafayette']
const counties = ['Marion', 'Allen', 'Vanderburgh', 'St. Joseph', 'Hamilton', 'Lake', 'Tippecanoe', 'Delaware', 'Monroe', 'Porter']

export default function ServiceAreasSection() {
    const [tab, setTab] = useState<'cities' | 'counties'>('cities')
    const items = tab === 'cities' ? cities : counties
    const ref = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
    const headingY = useTransform(scrollYProgress, [0, 1], [60, -60])
    const pillsScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9])

    return (
        <section ref={ref} className="py-32 bg-radial-glow relative overflow-hidden noise">
            <div className="glow-line" />
            <motion.div style={{ y: useTransform(scrollYProgress, [0, 1], [-40, 100]) }} className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px]" />
            <motion.div style={{ y: useTransform(scrollYProgress, [0, 1], [50, -80]) }} className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan/4 rounded-full blur-[100px]" />

            {/* Floating particles */}
            {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="particle" style={{ left: `${10 + i * 12}%`, animationDuration: `${10 + Math.random() * 8}s`, animationDelay: `${i * 1.5}s`, background: i % 2 === 0 ? '#06b6d4' : '#7c3aed' }} />
            ))}

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div style={{ y: headingY }} className="text-center mb-12">
                    <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                        className="text-3xl sm:text-4xl lg:text-5xl font-black text-white">
                        We Buy Houses Throughout <span className="gradient-text">Indiana</span>
                    </motion.h2>
                    <p className="mt-4 text-lg text-white/30 max-w-2xl mx-auto">Our cash deals team works with sellers across local Indiana markets.</p>
                </motion.div>

                <div className="flex justify-center mb-10">
                    <div className="inline-flex bg-white/5 border border-white/8 rounded-xl p-1">
                        {(['cities', 'counties'] as const).map(t => (
                            <button key={t} onClick={() => setTab(t)} className={`px-6 py-2.5 rounded-lg text-sm font-bold transition-all capitalize ${tab === t ? 'gradient-bg text-white shadow-lg shadow-accent/20' : 'text-white/35 hover:text-white'}`}>{t}</button>
                        ))}
                    </div>
                </div>

                <motion.div key={tab} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} style={{ scale: pillsScale }}>
                    <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
                        {items.map((item, i) => (
                            <motion.div key={item} initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.04 }}>
                                <Link to={`/we-buy-houses/${item.toLowerCase().replace(/[\s.]+/g, '-')}`}
                                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/4 border border-white/8 hover:border-accent/30 hover:bg-accent/10 text-sm font-medium text-white/50 hover:text-accent-light transition-all hover:scale-105 hover:shadow-lg hover:shadow-accent/10">
                                    <MapPin className="w-4 h-4 text-cyan" />{item}
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mt-12">
                    <Link to="/contact" className="btn-glow inline-flex items-center gap-2 !px-8 !py-3">See If We Buy in Your Area</Link>
                </motion.div>
            </div>
        </section>
    )
}
