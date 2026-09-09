import { Head } from '@inertiajs/react';
import { Nav } from '@/components/Nav';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Stats } from '@/components/Stats';
import { WhyWebsite } from '@/components/WhyWebsite';
import { Services } from '@/components/Services';
import { Portfolio } from '@/components/PortfolioSection';
import { ProcessSection } from '@/components/ProcessSection';
import { Testimonials } from '@/components/Testimonials';
import { Pricing } from '@/components/Pricing';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

/**
 * One-page portfolio for a web-design service for local UMKM clients.
 * Warm & Bersahaja: cream surfaces, warm ink, terracotta accent, serif display.
 */
export default function Welcome() {
    return (
        <>
            <Head title="Beranda" />

            <div className="relative min-h-[100dvh] bg-cream-50 font-sans text-ink-900 antialiased dark:bg-warm-900 dark:text-cream-50">
                {/* Grain overlay */}
                <div className="grain pointer-events-none fixed inset-0 z-[9000]" />

                <Nav />

                <main>
                    <Hero />
                    <About />
                    <Stats />
                    <WhyWebsite />
                    <Services />
                    <Portfolio />
                    <ProcessSection />
                    <Testimonials />
                    <Pricing />
                    <Contact />
                </main>

                <Footer />
            </div>
        </>
    );
}
