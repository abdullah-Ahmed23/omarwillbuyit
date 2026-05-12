import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Home, Search, ArrowRight } from 'lucide-react'
import PageTransition from '../components/PageTransition'

export default function NotFound() {
    return (
        <PageTransition>
            <div className="min-h-screen bg-primary noise flex items-center justify-center relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[200px]" />

                {/* Floating elements */}
                <motion.div animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 5 }} className="absolute top-[20%] left-[20%] text-cyan/20">
                    <Search className="w-24 h-24" />
                </motion.div>
                <motion.div animate={{ y: [0, 30, 0], rotate: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 7 }} className="absolute bottom-[20%] right-[20%] text-accent/20">
                    <Home className="w-32 h-32" />
                </motion.div>

                <div className="max-w-xl mx-auto px-4 relative z-10 text-center">
                    <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="mb-8">
                        <h1 className="text-[12rem] font-black leading-none gradient-text drop-shadow-[0_0_40px_rgba(124,58,237,0.3)]">404</h1>
                    </motion.div>

                    <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-3xl font-bold text-white mb-4">
                        House Not Found!
                    </motion.h2>

                    <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-white/40 mb-10 text-lg">
                        Looks like you've wandered off the property line. We buy houses fast, but we can't buy pages that don't exist.
                    </motion.p>

                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/" className="btn-glow inline-flex items-center justify-center gap-2 !px-8">
                            Back to Home <Home className="w-4 h-4" />
                        </Link>
                        <Link to="/contact" className="btn-outline inline-flex items-center justify-center gap-2 !px-8">
                            Get an Offer <ArrowRight className="w-4 h-4" />
                        </Link>
                    </motion.div>
                </div>
            </div>
        </PageTransition>
    )
}
