import { useState, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Search, MapPin, Bed, Bath, Square, ChevronRight } from 'lucide-react'
import PageTransition from '../components/PageTransition'

const properties = [
    { id: 1, title: 'Modern Ranch in Broad Ripple', price: '$425,000', address: '6110 N College Ave, Indianapolis, IN', beds: 3, baths: 2, sqft: 1850, image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80', status: 'Active' },
    { id: 2, title: 'Renovated Historic Gem', price: '$350,000', address: '1243 E Market St, Indianapolis, IN', beds: 4, baths: 2.5, sqft: 2200, image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80', status: 'Pending' },
    { id: 3, title: 'Carmel Family Home', price: '$580,000', address: '11224 Guilford Rd, Carmel, IN', beds: 4, baths: 3, sqft: 3100, image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&q=80', status: 'Active' },
    { id: 4, title: 'Downtown Indy Condo', price: '$315,000', address: '450 E Ohio St Unit 4B, Indianapolis, IN', beds: 2, baths: 2, sqft: 1400, image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80', status: 'Active' },
    { id: 5, title: 'Fishers Suburb Retreat', price: '$495,000', address: '8821 E 116th St, Fishers, IN', beds: 4, baths: 2.5, sqft: 2800, image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&q=80', status: 'Sold' },
    { id: 6, title: 'Zionsville Estate', price: '$725,000', address: '105 S Main St, Zionsville, IN', beds: 5, baths: 4, sqft: 4200, image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80', status: 'Active' },
]

export default function Listings() {
    const [filter, setFilter] = useState('All')
    const ref = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
    const headingY = useTransform(scrollYProgress, [0, 1], [0, 150])

    return (
        <PageTransition>
            <div className="pt-32 pb-24 min-h-screen bg-primary noise overflow-hidden" ref={ref}>
                <motion.div style={{ y: useTransform(scrollYProgress, [0, 1], [0, 200]) }} className="absolute top-[10%] left-[15%] w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px]" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div style={{ y: headingY }} className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                        <div>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
                                Featured <span className="gradient-text">Listings</span>
                            </h1>
                            <p className="mt-4 text-lg text-white/40 max-w-lg">Explore our curated portfolio of renovated, market-ready homes across Central Indiana.</p>
                        </div>

                        <div className="flex gap-2 bg-white/5 p-1 rounded-xl border border-white/10 w-fit">
                            {['All', 'Active', 'Pending', 'Sold'].map(f => (
                                <button key={f} onClick={() => setFilter(f)}
                                    className={`px-5 py-2 rounded-lg text-sm font-bold transition-all ${filter === f ? 'gradient-bg text-white shadow-lg' : 'text-white/40 hover:text-white hover:bg-white/5'
                                        }`}>
                                    {f}
                                </button>
                            ))}
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                        {properties.filter(p => filter === 'All' || p.status === filter).map((prop, i) => (
                            <motion.div key={prop.id} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
                                className="glass-card rounded-3xl overflow-hidden group">

                                <div className="relative aspect-[4/3] overflow-hidden">
                                    <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10" />
                                    <img src={prop.image} alt={prop.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" />

                                    {/* Status Badge */}
                                    <div className="absolute top-4 left-4 z-20">
                                        <span className={`px-4 py-1.5 rounded-full text-xs font-bold shadow-lg backdrop-blur-md border ${prop.status === 'Active' ? 'bg-cyan/90 border-cyan text-primary' :
                                                prop.status === 'Pending' ? 'bg-accent/90 border-accent text-white' :
                                                    'bg-white/20 border-white/30 text-white'
                                            }`}>
                                            {prop.status}
                                        </span>
                                    </div>
                                    <div className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <Search className="w-4 h-4 text-white" />
                                    </div>
                                </div>

                                <div className="p-6">
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <h2 className="text-xl font-bold text-white mb-1 group-hover:text-cyan transition-colors">{prop.title}</h2>
                                            <div className="flex items-center gap-1.5 text-white/40 text-sm">
                                                <MapPin className="w-4 h-4 text-accent" /> {prop.address}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="text-2xl font-black gradient-text mb-6">{prop.price}</div>

                                    <div className="flex items-center justify-between border-t border-white/10 pt-5 pb-2">
                                        <div className="flex items-center gap-4 text-sm text-white/60">
                                            <div className="flex items-center gap-1.5"><Bed className="w-4 h-4 text-white/30" /> {prop.beds} Beds</div>
                                            <div className="flex items-center gap-1.5"><Bath className="w-4 h-4 text-white/30" /> {prop.baths} Baths</div>
                                            <div className="flex items-center gap-1.5"><Square className="w-4 h-4 text-white/30" /> {prop.sqft} sqft</div>
                                        </div>
                                    </div>

                                    <Link to={`/listing/${prop.id}`} className="absolute inset-0 z-30"><span className="sr-only">View Details</span></Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </PageTransition>
    )
}
