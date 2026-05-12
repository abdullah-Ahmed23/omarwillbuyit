import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { lazy, Suspense, useEffect } from 'react'
import MainLayout from './layouts/MainLayout'

const Home = lazy(() => import('./pages/Home'))
const SellingOptions = lazy(() => import('./pages/SellingOptions'))
const AboutUs = lazy(() => import('./pages/AboutUs'))
const Contact = lazy(() => import('./pages/Contact'))
const HowItWorks = lazy(() => import('./pages/HowItWorks'))
const Listings = lazy(() => import('./pages/Listings'))
const ListingDetail = lazy(() => import('./pages/ListingDetail'))
const Blog = lazy(() => import('./pages/Blog'))
const BlogPost = lazy(() => import('./pages/BlogPost'))
const TestimonialsPage = lazy(() => import('./pages/TestimonialsPage'))
const Partners = lazy(() => import('./pages/Partners'))
const PartnersAgents = lazy(() => import('./pages/PartnersAgents'))
const PartnersWholesalers = lazy(() => import('./pages/PartnersWholesalers'))
const PartnersInvestors = lazy(() => import('./pages/PartnersInvestors'))
const PartnersTitleCompanies = lazy(() => import('./pages/PartnersTitleCompanies'))
const FAQ = lazy(() => import('./pages/FAQ'))
const Careers = lazy(() => import('./pages/Careers'))
const CityLanding = lazy(() => import('./pages/CityLanding'))
const Privacy = lazy(() => import('./pages/Privacy'))
const Terms = lazy(() => import('./pages/Terms'))
const NotFound = lazy(() => import('./pages/NotFound'))

function PageLoader() {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="w-12 h-12 border-4 border-accent/30 border-t-accent rounded-full animate-spin" />
        </div>
    )
}

export default function App() {
    const location = useLocation()

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    }, [location.pathname])

    return (
        <MainLayout>
            <AnimatePresence mode="wait">
                <Suspense fallback={<PageLoader />}>
                    <Routes location={location} key={location.pathname}>
                        <Route path="/" element={<Home />} />
                        <Route path="/selling-options" element={<SellingOptions />} />
                        <Route path="/who-are-we" element={<AboutUs />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/how-it-works" element={<HowItWorks />} />
                        <Route path="/listing" element={<Listings />} />
                        <Route path="/listing/:id" element={<ListingDetail />} />
                        <Route path="/blog" element={<Blog />} />
                        <Route path="/blog/:slug" element={<BlogPost />} />
                        <Route path="/testimonials" element={<TestimonialsPage />} />
                        <Route path="/partners" element={<Partners />} />
                        <Route path="/partners/agents" element={<PartnersAgents />} />
                        <Route path="/partners/wholesalers" element={<PartnersWholesalers />} />
                        <Route path="/partners/local-investors" element={<PartnersInvestors />} />
                        <Route path="/partners/title-companies" element={<PartnersTitleCompanies />} />
                        <Route path="/faq" element={<FAQ />} />
                        <Route path="/careers" element={<Careers />} />
                        <Route path="/we-buy-houses/:area" element={<CityLanding />} />
                        <Route path="/privacy-policy" element={<Privacy />} />
                        <Route path="/terms-of-service" element={<Terms />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </Suspense>
            </AnimatePresence>
        </MainLayout>
    )
}
