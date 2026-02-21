import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

import logo from '../assets/Property 1=Big.png';

export default function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-24">
            {/* Background Gradient & Effects - Dark Premium Theme */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.08),transparent_50%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(79,70,229,0.4),transparent_50%)]" />
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center">

                {/* Logo */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-16"
                >
                    <img src={logo} alt="CAPPI Logo" className="h-12 md:h-16 w-auto object-contain drop-shadow-sm" />
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 max-w-5xl text-zinc-100"
                >
                    Welcome to the evolution of <span className="text-gradient-premium">hospitality.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="text-lg sm:text-xl md:text-3xl text-zinc-400 max-w-3xl mb-12 font-light leading-relaxed px-4 md:px-0"
                >
                    CAPPI connects exceptional partners with discerning travelers through an intelligence that feels, anticipates, and orchestrates every detail.
                </motion.p>

            </div>
        </section >
    );
}
