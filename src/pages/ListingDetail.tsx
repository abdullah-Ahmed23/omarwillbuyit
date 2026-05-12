import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useParams, Link } from 'react-router-dom'
import { MapPin, Bed, Bath, Square, Calendar, Hash, ArrowLeft, Phone, Mail } from 'lucide-react'
import PageTransition from '../components/PageTransition'

export default function ListingDetail() {
    const { id } = useParams()
    const ref = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
    const y = useTransform(scrollYProgress, [0, 1], [0, 200])
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

    return (
        <PageTransition>
            <div className="pt-24 pb-24 min-h-screen bg-primary noise overflow-hidden" ref={ref}>
                {/* Parallax Hero Image */}
                <div className="relative h-[50vh] min-h-[400px] w-full mt-4">
                    <motion.div style={{ y, opacity }} className="absolute inset-0">
                        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent z-10" />
                        <img src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80" alt="Listing" className="w-full h-full object-cover" />
                    </motion.div>

                    <div className="absolute top-8 left-8 z-20">
                        <Link to="/listing" className="inline-flex items-center gap-2 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full text-white/80 hover:text-white hover:bg-black/60 transition-all border border-white/10 text-sm font-semibold">
                            <ArrowLeft className="w-4 h-4" /> Back to Listings
                        </Link>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 -mt-32">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Main Content */}
                        <div className="lg:col-span-2 space-y-8">
                            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="glass-card p-8 sm:p-10 rounded-3xl gradient-border">
                                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                                    <div>
                                        <div className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-wider mb-4 bg-cyan/20 text-cyan border border-cyan/30 shadow-[0_0_15px_rgba(6,182,212,0.2)]">Active Listing</div>
                                        <h1 className="text-3xl sm:text-4xl font-black text-white mb-2 leading-tight">Modern Ranch in Broad Ripple</h1>
                                        <div className="flex items-center gap-2 text-white/50 text-lg">
                                            <MapPin className="w-5 h-5 text-accent-light" /> 6110 N College Ave, Indianapolis, IN 46220
                                        </div>
                                    </div>
                                    <div className="text-4xl sm:text-5xl font-black gradient-text">$425,000</div>
                                </div>

                                <div className="flex flex-wrap items-center gap-6 py-6 border-y border-white/10 my-8">
                                    {[
                                        { icon: Bed, val: 3, label: 'Beds', color: '#06b6d4' },
                                        { icon: Bath, val: 2, label: 'Baths', color: '#7c3aed' },
                                        { icon: Square, val: '1,850', label: 'Sq Ft', color: '#a78bfa' },
                                        { icon: Calendar, val: 1955, label: 'Built', color: '#f43f5e' }
                                    ].map((stat, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-white/5 border border-white/10">
                                                <stat.icon className="w-6 h-6" style={{ color: stat.color }} />
                                            </div>
                                            <div>
                                                <div className="text-xl font-bold text-white">{stat.val}</div>
                                                <div className="text-xs text-white/40 uppercase tracking-wider">{stat.label}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="prose prose-invert max-w-none">
                                    <h3 className="text-xl font-bold text-white mb-4">Property Description</h3>
                                    <p className="text-white/60 leading-relaxed">
                                        Beautifully renovated mid-century ranch meticulously updated for modern living. This home features a sweeping open concept floorplan with original refinished hardwood floors that span the main living areas. The gourmet kitchen boasts striking quartz countertops, custom shaker cabinetry, and an oversized center island perfect for entertaining.
                                    </p>
                                    <p className="text-white/60 leading-relaxed mt-4">
                                        The spacious master suite offers a private retreat with an upgraded en-suite bathroom featuring dual vanities, an expansive glass-enclosed shower, and bespoke tile work. Two additional bedrooms provide ample space for a growing family or a dedicated home office setup.
                                    </p>
                                </div>
                            </motion.div>

                            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="glass-card p-8 sm:p-10 rounded-3xl gradient-border">
                                <h3 className="text-xl font-bold text-white mb-6">Property Highlights</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {[
                                        'Fully Renovated Kitchen', 'New Appliances Included', 'Refinished Hardwood Floors',
                                        'Attached 2-Car Garage', 'Fenced Backyard', 'New HVAC System (2023)',
                                        'Smart Thermostat', 'Finished Basement Area'
                                    ].map((feat, i) => (
                                        <div key={i} className="flex items-center gap-3 bg-white/4 p-4 rounded-xl border border-white/5">
                                            <Hash className="w-4 h-4 text-cyan flex-shrink-0" />
                                            <span className="text-white/70 text-sm">{feat}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-1">
                            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} className="sticky top-32 glass-card p-8 rounded-3xl gradient-border">
                                <h3 className="text-2xl font-bold text-white mb-2">Interested?</h3>
                                <p className="text-white/40 text-sm mb-8">Schedule a showing or make an offer on this home.</p>

                                <form className="space-y-4 mb-8">
                                    <input type="text" placeholder="Full Name *" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-cyan/50 focus:ring-1 focus:ring-cyan/50 transition-all text-sm" />
                                    <input type="tel" placeholder="Phone Number *" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-cyan/50 focus:ring-1 focus:ring-cyan/50 transition-all text-sm" />
                                    <input type="email" placeholder="Email Address *" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-cyan/50 focus:ring-1 focus:ring-cyan/50 transition-all text-sm" />
                                    <textarea placeholder="Your Message" rows={3} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-cyan/50 focus:ring-1 focus:ring-cyan/50 transition-all text-sm resize-none"></textarea>
                                    <button type="button" className="btn-glow w-full !py-3">Request Info</button>
                                </form>

                                <div className="flex flex-col gap-3">
                                    <a href="/contact" className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-white/5 text-white hover:bg-white/10 border border-white/10 transition-colors text-sm font-bold">
                                        <Phone className="w-4 h-4 text-cyan" /> Contact Deals Team
                                    </a>
                                    <a href="mailto:office@omarwillbuyit.com" className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-white/5 text-white hover:bg-white/10 border border-white/10 transition-colors text-sm font-bold">
                                        <Mail className="w-4 h-4 text-accent-light" /> Email Us
                                    </a>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </PageTransition>
    )
}
