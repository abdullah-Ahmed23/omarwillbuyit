import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, ChevronDown, Home, HelpCircle, BookOpen, Briefcase, Mail, Users, Handshake, Landmark, ShieldCheck, Sun, Moon } from 'lucide-react'

const learnItems = [
    { label: 'Marketplace', desc: 'Browse available properties', icon: Home, to: '/listing' },
    { label: 'FAQ', desc: 'Common questions answered', icon: HelpCircle, to: '/faq' },
    { label: 'Blog', desc: 'Tips & market insights', icon: BookOpen, to: '/blog' },
    { label: 'Careers', desc: 'Join our team', icon: Briefcase, to: '/careers' },
    { label: 'Contact', desc: 'Get in touch', icon: Mail, to: '/contact' },
]
const partnerItems = [
    { label: 'For Agents', icon: Users, to: '/partners/agents' },
    { label: 'For Wholesalers', icon: Handshake, to: '/partners/wholesalers' },
    { label: 'For Investors', icon: Landmark, to: '/partners/local-investors' },
    { label: 'For Title Companies', icon: ShieldCheck, to: '/partners/title-companies' },
]

export default function Header() {
    const [scrolled, setScrolled] = useState(false)
    const [mobileOpen, setMobileOpen] = useState(false)
    const [activeDD, setActiveDD] = useState<string | null>(null)
    const [isLight, setIsLight] = useState(() => document.documentElement.classList.contains('light'))
    const location = useLocation()

    useEffect(() => {
        const fn = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', fn)
        return () => window.removeEventListener('scroll', fn)
    }, [])
    useEffect(() => { setMobileOpen(false); setActiveDD(null) }, [location])

    const toggleTheme = () => {
        const nextIsLight = !isLight
        setIsLight(nextIsLight)
        document.documentElement.classList.toggle('light', nextIsLight)
        localStorage.setItem('theme', nextIsLight ? 'light' : 'dark')
    }

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-primary/80 backdrop-blur-2xl shadow-[0_4px_30px_rgba(0,0,0,0.6)] border-b border-accent/5' : 'bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <Link to="/" className="flex items-center gap-2.5 group">
                        <div className="w-10 h-10 gradient-bg rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-accent/30">
                            <Home className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-lg font-extrabold text-white hidden sm:block">Omar<span className="gradient-text">willbuyit</span></span>
                    </Link>

                    <nav className="hidden lg:flex items-center gap-0.5">
                        {[{ label: 'Selling Options', to: '/selling-options' }, { label: 'About Us', to: '/who-are-we' }, { label: 'Testimonials', to: '/testimonials' }].map(l => (
                            <Link key={l.to} to={l.to} className="px-4 py-2 text-sm font-medium text-white/50 hover:text-white rounded-lg hover:bg-white/5 transition-all">{l.label}</Link>
                        ))}
                        {/* Dropdowns */}
                        {[{ key: 'learn', label: 'Learn', items: learnItems }, { key: 'partners', label: 'Partners', items: partnerItems }].map(dd => (
                            <div key={dd.key} className="relative" onMouseEnter={() => setActiveDD(dd.key)} onMouseLeave={() => setActiveDD(null)}>
                                <button className="px-4 py-2 text-sm font-medium text-white/50 hover:text-white rounded-lg hover:bg-white/5 transition-all flex items-center gap-1">
                                    {dd.label} <ChevronDown className={`w-4 h-4 transition-transform ${activeDD === dd.key ? 'rotate-180' : ''}`} />
                                </button>
                                <AnimatePresence>
                                    {activeDD === dd.key && (
                                        <motion.div initial={{ opacity: 0, y: -8, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -8, scale: 0.96 }} transition={{ duration: 0.15 }}
                                            className="absolute top-full left-0 mt-2 w-64 bg-primary-light/95 backdrop-blur-2xl rounded-2xl shadow-2xl border border-accent/10 p-2">
                                            {dd.items.map(item => (
                                                <Link key={item.to} to={item.to} className="flex items-center gap-3 p-3 rounded-xl hover:bg-accent/10 transition-colors group">
                                                    <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20"><item.icon className="w-4 h-4 text-accent-light" /></div>
                                                    <span className="text-sm font-medium text-white/70 group-hover:text-white">{item.label}</span>
                                                </Link>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </nav>

                    <div className="flex items-center gap-3">
                        <Link to="/contact" className="hidden md:flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors"><Phone className="w-4 h-4" /> Call Us</Link>
                        <button
                            onClick={toggleTheme}
                            className="theme-toggle"
                            aria-label={isLight ? 'Switch to dark mode' : 'Switch to light mode'}
                            title={isLight ? 'Dark mode' : 'Light mode'}
                        >
                            {isLight ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
                        </button>
                        <Link to="/contact" className="btn-glow text-sm !px-5 !py-2.5">Get My Cash Offer</Link>
                        <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden p-2 rounded-lg hover:bg-white/5 text-white"><Menu className="w-6 h-6" /></button>
                    </div>
                </div>
            </div>

            {/* Mobile */}
            <AnimatePresence>
                {mobileOpen && <>
                    <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'spring', damping: 25 }}
                        className="fixed inset-y-0 right-0 w-80 bg-primary-light z-50 overflow-y-auto border-l border-accent/10 shadow-2xl p-6">
                        <div className="flex justify-between items-center mb-8">
                            <span className="text-lg font-extrabold text-white">Omar<span className="gradient-text">willbuyit</span></span>
                            <button onClick={() => setMobileOpen(false)} className="p-2 rounded-lg hover:bg-white/10 text-white"><X className="w-6 h-6" /></button>
                        </div>
                        <div className="space-y-1">
                            {['/selling-options', '/who-are-we', '/testimonials', '/listing', '/faq', '/blog', '/contact'].map(p => (
                                <Link key={p} to={p} className="block px-4 py-3 rounded-xl hover:bg-white/5 text-white/60 hover:text-white text-sm font-medium capitalize">
                                    {p.slice(1).replace(/-/g, ' ')}
                                </Link>
                            ))}
                        </div>
                        <button onClick={toggleTheme} className="theme-toggle w-full !justify-center mt-5">
                            {isLight ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
                            {isLight ? 'Dark mode' : 'Light mode'}
                        </button>
                        <Link to="/contact" className="block w-full text-center btn-glow !rounded-xl mt-6">Get My Cash Offer</Link>
                    </motion.div>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setMobileOpen(false)} className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40" />
                </>}
            </AnimatePresence>
        </header>
    )
}
