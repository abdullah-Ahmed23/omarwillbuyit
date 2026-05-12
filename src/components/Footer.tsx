import { Link } from 'react-router-dom'
import { Home, Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="bg-primary relative overflow-hidden noise">
            <div className="glow-line" />

            {/* BG glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent/5 rounded-full blur-[120px]" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    <div>
                        <Link to="/" className="flex items-center gap-2.5 mb-5">
                            <div className="w-10 h-10 gradient-bg rounded-xl flex items-center justify-center shadow-lg shadow-accent/30"><Home className="w-5 h-5 text-white" /></div>
                            <span className="text-lg font-extrabold text-white">Omar<span className="gradient-text">willbuyit</span></span>
                        </Link>
                        <p className="text-white/30 text-sm leading-relaxed mb-6">Cash Deals — Transparent Process. Real Offers. Real Results. We buy houses fast for cash throughout Indiana.</p>
                        <div className="flex gap-2">
                            {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                                <a key={i} href="#" className="w-9 h-9 rounded-lg bg-white/5 border border-white/8 flex items-center justify-center text-white/30 hover:text-white hover:bg-accent/20 hover:border-accent/30 transition-all"><Icon className="w-4 h-4" /></a>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-5 gradient-text">Quick Links</h4>
                        <ul className="space-y-2.5">
                            {[['Selling Options', '/selling-options'], ['How It Works', '/how-it-works'], ['About Us', '/who-are-we'], ['Testimonials', '/testimonials'], ['Blog', '/blog'], ['FAQ', '/faq']].map(([l, t]) => (
                                <li key={t}><Link to={t} className="text-sm text-white/30 hover:text-accent-light transition-colors">{l}</Link></li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-5 gradient-text">Service Areas</h4>
                        <ul className="space-y-2.5">
                            {['Indianapolis', 'Fort Wayne', 'Evansville', 'South Bend', 'Carmel', 'Fishers', 'Bloomington', 'Hammond'].map(c => (
                                <li key={c}><Link to={`/we-buy-houses/${c.toLowerCase().replace(/\s+/g, '-')}`} className="text-sm text-white/30 hover:text-accent-light transition-colors flex items-center gap-1.5"><MapPin className="w-3 h-3 text-cyan/40" />{c}</Link></li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-5 gradient-text">Contact</h4>
                        <ul className="space-y-3">
                            <li><Link to="/contact" className="flex items-center gap-2 text-sm text-white/30 hover:text-accent-light transition-colors"><Phone className="w-4 h-4 text-cyan" /> Call Us</Link></li>
                            <li><a href="mailto:office@omarwillbuyit.com" className="flex items-center gap-2 text-sm text-white/30 hover:text-accent-light transition-colors"><Mail className="w-4 h-4 text-cyan" /> office@omarwillbuyit.com</a></li>
                            <li className="flex items-start gap-2 text-sm text-white/30"><MapPin className="w-4 h-4 text-cyan mt-0.5" />Indianapolis, Indiana</li>
                        </ul>
                        <Link to="/contact" className="btn-glow mt-6 inline-block text-sm !px-6 !py-2.5">Get My Cash Offer</Link>
                    </div>
                </div>
                <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-white/15">© {new Date().getFullYear()} Omarwillbuyit. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link to="/privacy-policy" className="text-sm text-white/15 hover:text-white/50 transition-colors">Privacy</Link>
                        <Link to="/terms-of-service" className="text-sm text-white/15 hover:text-white/50 transition-colors">Terms</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
