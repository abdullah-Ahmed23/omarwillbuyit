import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition'

export default function Terms() {
    return (
        <PageTransition>
            <div className="pt-32 pb-24 min-h-screen bg-primary noise">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
                        <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">Terms of <span className="gradient-text">Service</span></h1>
                        <p className="text-white/40">Last Updated: October 2023</p>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="glass-card p-8 sm:p-12 rounded-3xl gradient-border prose prose-invert max-w-none">
                        <h2 className="text-white">1. Terms</h2>
                        <p className="text-white/60">By accessing this Website, accessible from [Website URL], you are agreeing to be bound by these Website Terms and Conditions of Use and agree that you are responsible for the agreement with any applicable local laws. If you disagree with any of these terms, you are prohibited from accessing this site. The materials contained in this Website are protected by copyright and trade mark law.</p>

                        <h2 className="text-white">2. Use License</h2>
                        <p className="text-white/60">Permission is granted to temporarily download one copy of the materials on Omarwillbuyit's Website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
                        <ul className="text-white/60">
                            <li>modify or copy the materials;</li>
                            <li>use the materials for any commercial purpose or for any public display;</li>
                            <li>attempt to reverse engineer any software contained on Omarwillbuyit's Website;</li>
                            <li>remove any copyright or other proprietary notations from the materials; or</li>
                            <li>transferring the materials to another person or "mirror" the materials on any other server.</li>
                        </ul>

                        <h2 className="text-white">3. Disclaimer</h2>
                        <p className="text-white/60">All the materials on Omarwillbuyit's Website are provided "as is". Omarwillbuyit makes no warranties, may it be expressed or implied, therefore negates all other warranties. Furthermore, Omarwillbuyit does not make any representations concerning the accuracy or reliability of the use of the materials on its Website or otherwise relating to such materials or any sites linked to this Website.</p>

                        <h2 className="text-white">4. Limitations</h2>
                        <p className="text-white/60">Omarwillbuyit or its suppliers will not be hold accountable for any damages that will arise with the use or inability to use the materials on Omarwillbuyit's Website, even if Omarwillbuyit or an authorize representative of this Website has been notified, orally or written, of the possibility of such damage. Some jurisdiction does not allow limitations on implied warranties or limitations of liability for incidental damages, these limitations may not apply to you.</p>

                        <h2 className="text-white">5. Links</h2>
                        <p className="text-white/60">Omarwillbuyit has not reviewed all of the sites linked to its Website and is not responsible for the contents of any such linked site. The presence of any link does not imply endorsement by Omarwillbuyit of the site. The use of any linked website is at the user's own risk.</p>

                        <h2 className="text-white">6. Site Terms of Use Modifications</h2>
                        <p className="text-white/60">Omarwillbuyit may revise these Terms of Use for its Website at any time without prior notice. By using this Website, you are agreeing to be bound by the current version of these Terms and Conditions of Use.</p>
                    </motion.div>
                </div>
            </div>
        </PageTransition>
    )
}
