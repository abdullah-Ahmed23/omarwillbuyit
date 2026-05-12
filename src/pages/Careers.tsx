import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Briefcase, ArrowRight, CheckCircle2, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageTransition from '../components/PageTransition'

const jobs = [
    { id: 1, title: 'Acquisitions Manager (Inside Sales)', type: 'Full-time', location: 'Indianapolis (Hybrid)', desc: 'Field inbound seller leads, run comps, negotiate, and lock up properties under contract. Real estate license preferred but not required.' },
    { id: 2, title: 'Dispositions Manager', type: 'Full-time', location: 'Remote (Indiana focus)', desc: 'Build our cash buyer list, market properties to investors, and negotiate assignments or end-sales.' },
    { id: 3, title: 'Transaction Coordinator', type: 'Full-time', location: 'Remote', desc: 'Manage the escrow process from contract to close. Liaise with title companies, sellers, and buyers to ensure smooth 7-day closings.' }
]

export default function Careers() {
    const ref = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
    const headingY = useTransform(scrollYProgress, [0, 1], [0, 150])

    return (
        <PageTransition>
            <div className="pt-32 pb-24 min-h-screen bg-primary noise overflow-hidden" ref={ref}>
                <motion.div style={{ y: useTransform(scrollYProgress, [0, 1], [0, 300]) }} className="absolute top-[10%] left-[20%] w-[500px] h-[500px] bg-accent/10 rounded-full blur-[150px]" />

                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div style={{ y: headingY }} className="text-center mb-20">
                        <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-6 shadow-[0_0_20px_rgba(6,182,212,0.2)]">
                            <Briefcase className="w-8 h-8 text-cyan" />
                        </div>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
                            Join the <span className="gradient-text">Team</span>
                        </h1>
                        <p className="mt-6 text-lg text-white/40 max-w-2xl mx-auto">
                            We are disrupting traditional real estate in Indiana by combining investor speed, wholesale transparency, and reliable cash buyer relationships. We're looking for hungry, ethical players to join our growing operation.
                        </p>
                    </motion.div>

                    {/* Culture Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
                        <div className="glass-card p-10 rounded-3xl gradient-border bg-gradient-to-br from-cyan/10 to-transparent">
                            <h2 className="text-2xl font-bold text-white mb-6">Why work with us?</h2>
                            <ul className="space-y-4">
                                {['Uncapped commission structures for sales roles', 'Fully remote or hybrid flexibility', 'Direct mentorship from active investors', 'No corporate red tape or bureaucracy', 'Access to elite off-market deal flow'].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-cyan flex-shrink-0 mt-0.5" />
                                        <span className="text-white/60">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="glass-card p-10 rounded-3xl gradient-border bg-gradient-to-br from-accent/10 to-transparent">
                            <h2 className="text-2xl font-bold text-white mb-6">Who we look for:</h2>
                            <p className="text-white/60 leading-relaxed mb-4">We don't care about your corporate pedigree. We care about extreme ownership, speed of execution, and ethical treatment of distressed homeowners.</p>
                            <p className="text-white/60 leading-relaxed">If you are a high-agency individual who figures things out and pushes the ball forward, you belong here.</p>
                        </div>
                    </div>

                    {/* Job Listings */}
                    <h2 className="text-3xl font-bold text-white mb-8 text-center sm:text-left">Open Positions</h2>
                    <div className="space-y-6">
                        {jobs.map((job) => (
                            <motion.div key={job.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-card p-8 sm:p-10 rounded-3xl flex flex-col md:flex-row justify-between items-start md:items-center gap-6 group hover:border-cyan/50 transition-colors">
                                <div className="flex-1">
                                    <div className="flex flex-wrap gap-2 mb-3">
                                        <span className="px-3 py-1 rounded-full text-xs font-bold bg-cyan/20 text-cyan border border-cyan/30">{job.type}</span>
                                        <span className="flex items-center gap-1 text-xs text-white/40"><MapPin className="w-3 h-3" /> {job.location}</span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan transition-colors">{job.title}</h3>
                                    <p className="text-white/50 text-sm leading-relaxed max-w-2xl">{job.desc}</p>
                                </div>
                                <Link to="/contact" className="btn-outline whitespace-nowrap shrink-0 group-hover:bg-cyan/10 group-hover:text-cyan group-hover:border-cyan">Apply Now</Link>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </PageTransition>
    )
}
