import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition'

export default function Privacy() {
    return (
        <PageTransition>
            <div className="pt-32 pb-24 min-h-screen bg-primary noise">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
                        <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">Privacy <span className="gradient-text">Policy</span></h1>
                        <p className="text-white/40">Last Updated: October 2023</p>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="glass-card p-8 sm:p-12 rounded-3xl gradient-border prose prose-invert max-w-none">
                        <p className="lead text-white/70">At Omarwillbuyit, accessible from [Website URL], one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Omarwillbuyit and how we use it.</p>

                        <h2 className="text-white">Information We Collect</h2>
                        <p className="text-white/60">The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.</p>
                        <p className="text-white/60">If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.</p>
                        <p className="text-white/60">When you submit a property to us, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.</p>

                        <h2 className="text-white">How We Use Your Information</h2>
                        <p className="text-white/60">We use the information we collect in various ways, including to:</p>
                        <ul className="text-white/60">
                            <li>Provide, operate, and maintain our website</li>
                            <li>Improve, personalize, and expand our website</li>
                            <li>Understand and analyze how you use our website</li>
                            <li>Develop new products, services, features, and functionality</li>
                            <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes</li>
                            <li>Send you emails</li>
                            <li>Find and prevent fraud</li>
                        </ul>

                        <h2 className="text-white">Log Files</h2>
                        <p className="text-white/60">Omarwillbuyit follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks.</p>

                        <h2 className="text-white">Contact Us</h2>
                        <p className="text-white/60">If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us at office@omarwillbuyit.com.</p>
                    </motion.div>
                </div>
            </div>
        </PageTransition>
    )
}
