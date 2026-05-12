import PageTransition from '../components/PageTransition'
import HeroSection from '../components/home/HeroSection'
import VideoSection from '../components/home/VideoSection'
import TrustSection from '../components/home/TrustSection'
import HowItWorksSection from '../components/home/HowItWorksSection'
import ValuePropsSection from '../components/home/ValuePropsSection'
import TestimonialsSection from '../components/home/TestimonialsSection'
import ServiceAreasSection from '../components/home/ServiceAreasSection'
import CTASection from '../components/home/CTASection'
import FAQSection from '../components/home/FAQSection'
import ContactStripSection from '../components/home/ContactStripSection'

export default function Home() {
    return (
        <PageTransition>
            <HeroSection />
            <VideoSection />
            <TrustSection />
            <HowItWorksSection />
            <ValuePropsSection />
            <TestimonialsSection />
            <ServiceAreasSection />
            <CTASection />
            <FAQSection />
            <ContactStripSection />
        </PageTransition>
    )
}
