import { motion } from 'framer-motion';
import { Layers, Activity, Wand2, Cpu } from 'lucide-react';

export default function PartnerSystem() {
    const features = [
        {
            icon: <Layers className="w-6 h-6 text-indigo-400" />,
            title: "PMS System",
            description: "Centralized management of the service catalog, operational availability, and business rules."
        },
        {
            icon: <Activity className="w-6 h-6 text-blue-400" />,
            title: "Operational Digital Identifier",
            description: "Every booking generates a unique verifiable token, instantly merging the digital experience with physical operations."
        },
        {
            icon: <Wand2 className="w-6 h-6 text-indigo-300" />,
            title: "AI-Driven Automation",
            description: "Creation of services and bookings through assisted conversational interaction."
        },
        {
            icon: <Cpu className="w-6 h-6 text-sky-400" />,
            title: "Partner Agent",
            description: "Advanced level of functional AI: reads email requests, acts upon them, and recommends operational decisions."
        }
    ];

    return (
        <section className="py-20 md:py-32 relative border-t border-white/5 bg-black/40">
            <div className="container mx-auto px-6">
                <div className="text-center mb-24 max-w-4xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-8 text-zinc-100"
                    >
                        For the Partner. <br /><span className="text-gradient-premium">An ecosystem that operates for you.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-lg sm:text-xl md:text-2xl text-zinc-400 font-light"
                    >
                        You've been operating in manual mode. It is time to introduce the first hyper-personalized PMS that instantly connects your availability with the perfect demand.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-indigo-500/20 blur-[100px] rounded-full" />
                        <img
                            src="/cappi_partner_dashboard_1771701930016.png"
                            alt="Partner Dashboard UI"
                            className="w-full h-auto rounded-3xl border border-white/10 shadow-[0_20px_60px_-15px_rgba(79,70,229,0.3)] relative z-10"
                            onError={(e) => { e.currentTarget.style.display = 'none'; }}
                        />
                    </motion.div>

                    <div className="grid sm:grid-cols-2 gap-8">
                        {features.map((feature, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: idx * 0.1 }}
                                className="glass-panel p-6 md:p-8 hover:bg-white/5 transition-colors duration-300"
                            >
                                <div className="mb-6 p-4 rounded-xl bg-indigo-500/10 w-fit border border-indigo-500/20 inline-block">
                                    {feature.icon}
                                </div>
                                <h3 className="text-2xl font-semibold mb-3 text-zinc-100">{feature.title}</h3>
                                <p className="text-zinc-400 leading-relaxed text-lg">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
