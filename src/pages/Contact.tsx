import { useState, useRef } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Phone, Mail, MapPin, ArrowRight, CheckCircle2 } from 'lucide-react'
import PageTransition from '../components/PageTransition'

const formSchema = z.object({
    address: z.string().min(5, 'Property address is required'),
    firstName: z.string().min(2, 'First name is required'),
    lastName: z.string().min(2, 'Last name is required'),
    phone: z.string().min(10, 'Valid phone number required'),
    email: z.string().email('Valid email required'),
    timeline: z.string().optional(),
    reason: z.string().optional()
})
type FormData = z.infer<typeof formSchema>

export default function Contact() {
    const [success, setSuccess] = useState(false)
    const [step, setStep] = useState(1)

    const ref = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
    const y = useTransform(scrollYProgress, [0, 1], [0, 150])

    const { register, handleSubmit, trigger, formState: { errors, isValid } } = useForm<FormData>({ resolver: zodResolver(formSchema), mode: 'onChange' })

    const onSubmit = (data: FormData) => {
        console.log(data)
        setSuccess(true)
    }

    return (
        <PageTransition>
            <div className="pt-32 pb-24 min-h-screen bg-primary noise overflow-hidden" ref={ref}>
                <motion.div style={{ y }} className="absolute top-[10%] right-[10%] w-[600px] h-[600px] bg-accent/10 rounded-full blur-[150px]" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                        {/* Left Info */}
                        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="lg:sticky lg:top-32">
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
                                Get Your <span className="gradient-text">Offer</span>
                            </h1>
                            <p className="text-lg text-white/40 mb-12 max-w-lg">
                                Fill out the form to get started. Our cash deals team will review your property and prepare a fair cash offer within 24 hours. No obligations, no fees.
                            </p>

                            <div className="space-y-8">
                                {[
                                    { icon: Phone, title: 'Call Us Directly', desc: 'Request a call from our team', action: '/contact', color: '#06b6d4' },
                                    { icon: Mail, title: 'Email Us', desc: 'office@omarwillbuyit.com', action: 'mailto:office@omarwillbuyit.com', color: '#7c3aed' },
                                    { icon: MapPin, title: 'Headquarters', desc: 'Indianapolis, Indiana', action: '#', color: '#a78bfa' }
                                ].map((item, i) => (
                                    <a key={i} href={item.action} className="flex items-start gap-4 group">
                                        <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors">
                                            <item.icon className="w-5 h-5" style={{ color: item.color }} />
                                        </div>
                                        <div>
                                            <h3 className="text-white font-bold">{item.title}</h3>
                                            <p className="text-white/40 text-sm mt-1 group-hover:text-white/80 transition-colors">{item.desc}</p>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </motion.div>

                        {/* Right Form */}
                        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }}>
                            <div className="glass-card p-8 sm:p-12 rounded-3xl gradient-border relative overflow-hidden">
                                {success ? (
                                    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-10">
                                        <div className="w-20 h-20 bg-cyan/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                            <CheckCircle2 className="w-10 h-10 text-cyan" />
                                        </div>
                                        <h2 className="text-3xl font-bold text-white mb-4">You're All Set!</h2>
                                        <p className="text-white/60 mb-8">We've received your information. Our team will be in contact shortly with your cash offer.</p>
                                        <button onClick={() => setSuccess(false)} className="btn-outline">Submit Another Property</button>
                                    </motion.div>
                                ) : (
                                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 relative z-10">
                                        <div className="flex gap-2 mb-8">
                                            <div className={`h-1.5 flex-1 rounded-full ${step >= 1 ? 'bg-cyan' : 'bg-white/10'}`} />
                                            <div className={`h-1.5 flex-1 rounded-full ${step >= 2 ? 'bg-accent' : 'bg-white/10'}`} />
                                        </div>

                                        <AnimatePresence mode="wait">
                                            {step === 1 ? (
                                                <motion.div key="step1" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} className="space-y-6">
                                                    <h3 className="text-xl font-bold text-white mb-6">Property Details</h3>
                                                    <div>
                                                        <label className="block text-sm font-medium text-white/60 mb-2">Property Address *</label>
                                                        <input {...register('address')} type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-cyan/50 focus:ring-1 focus:ring-cyan/50 transition-all" placeholder="123 Main St, Indianapolis, IN" />
                                                        {errors.address && <p className="text-rose text-sm mt-1">{errors.address.message}</p>}
                                                    </div>
                                                    <div>
                                                        <label className="block text-sm font-medium text-white/60 mb-2">Why are you looking to sell?</label>
                                                        <select {...register('reason')} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan/50 transition-all appearance-none">
                                                            <option value="" className="bg-primary">Select a reason...</option>
                                                            <option value="relocation" className="bg-primary">Relocating</option>
                                                            <option value="repairs" className="bg-primary">Needs too many repairs</option>
                                                            <option value="financial" className="bg-primary">Financial distress/Foreclosure</option>
                                                            <option value="inherited" className="bg-primary">Inherited property</option>
                                                            <option value="other" className="bg-primary">Other</option>
                                                        </select>
                                                    </div>
                                                    <button type="button" onClick={async () => { const valid = await trigger('address'); if (valid) setStep(2) }} className="btn-glow w-full flex justify-center items-center gap-2 !py-4">
                                                        Next Step <ArrowRight className="w-4 h-4" />
                                                    </button>
                                                </motion.div>
                                            ) : (
                                                <motion.div key="step2" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} className="space-y-6">
                                                    <h3 className="text-xl font-bold text-white mb-6">Your Information</h3>
                                                    <div className="grid grid-cols-2 gap-4">
                                                        <div>
                                                            <label className="block text-sm font-medium text-white/60 mb-2">First Name *</label>
                                                            <input {...register('firstName')} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-accent/50" />
                                                            {errors.firstName && <p className="text-rose text-sm mt-1">{errors.firstName.message}</p>}
                                                        </div>
                                                        <div>
                                                            <label className="block text-sm font-medium text-white/60 mb-2">Last Name *</label>
                                                            <input {...register('lastName')} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-accent/50" />
                                                            {errors.lastName && <p className="text-rose text-sm mt-1">{errors.lastName.message}</p>}
                                                        </div>
                                                    </div>
                                                    <div className="grid grid-cols-2 gap-4">
                                                        <div>
                                                            <label className="block text-sm font-medium text-white/60 mb-2">Phone *</label>
                                                            <input {...register('phone')} type="tel" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-accent/50" />
                                                            {errors.phone && <p className="text-rose text-sm mt-1">{errors.phone.message}</p>}
                                                        </div>
                                                        <div>
                                                            <label className="block text-sm font-medium text-white/60 mb-2">Email *</label>
                                                            <input {...register('email')} type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-accent/50" />
                                                            {errors.email && <p className="text-rose text-sm mt-1">{errors.email.message}</p>}
                                                        </div>
                                                    </div>
                                                    <div className="flex gap-4 pt-4">
                                                        <button type="button" onClick={() => setStep(1)} className="btn-outline flex-1">Back</button>
                                                        <button type="submit" disabled={!isValid} className="btn-glow flex-1 disabled:opacity-50 !py-4">Get Cash Offer</button>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </form>
                                )}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </PageTransition>
    )
}
