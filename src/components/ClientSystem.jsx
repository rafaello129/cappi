import { motion } from 'framer-motion';
import { MapPin, UserCheck, CalendarCheck, Lightbulb } from 'lucide-react';

export default function ClientSystem() {
    const benefits = [
        {
            icon: <UserCheck className="w-5 h-5 text-indigo-400" />,
            title: "Profiling that knows you",
            description: "CAPPI doesn't just store data; it builds a living profile that understands exactly who you are."
        },
        {
            icon: <CalendarCheck className="w-5 h-5 text-cyan-400" />,
            title: "AI for Bookings",
            description: "Generation of intelligent itineraries and bookings through natural language-based interaction."
        },
        {
            icon: <Lightbulb className="w-5 h-5 text-indigo-300" />,
            title: "Smart Insights",
            description: "The system interprets your historical behavior to surprise you with hyper-personalized recommendations."
        },
        {
            icon: <MapPin className="w-5 h-5 text-zinc-400" />,
            title: "Advanced Geointelligence",
            description: "Dynamic maps that evaluate safe zones, crowd density, and coordinate mobility and flights in real-time."
        }
    ];

    return (
        <section className="py-20 md:py-32 relative border-t border-white/5 bg-black/40 overflow-hidden text-zinc-100">
            {/* Background Matching Nodes - Set to blend with dark mode */}
            <div className="absolute inset-0 z-0 opacity-10 mix-blend-screen pointer-events-none flex justify-center items-center">
                <img
                    src="/cappi_matching_nodes_1771701888531.png"
                    alt="Nodes"
                    className="w-full h-full object-cover opacity-30"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center flex-col-reverse md:flex-row">
                    <div className="order-2 md:order-1">
                        <motion.h2
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-tight"
                        >
                            For the Guest.<br />
                            <span className="text-gradient-premium">
                                Your Private Concierge.
                            </span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-lg sm:text-xl text-zinc-400 mb-12 font-light"
                        >
                            Imagine having a luxury personal assistant in your pocket. CAPPI is not a booking app; it is an intelligence that feels your tastes and orchestrates bespoke experiences.
                        </motion.p>

                        <div className="space-y-8">
                            {benefits.map((benefit, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.4 + (idx * 0.1) }}
                                    className="flex items-start gap-6 group"
                                >
                                    <div className="mt-1 p-3 rounded-full bg-indigo-500/10 border border-indigo-500/20 group-hover:bg-indigo-500/20 transition-colors">
                                        {benefit.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-semibold mb-2">{benefit.title}</h4>
                                        <p className="text-zinc-400 text-lg leading-relaxed">{benefit.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 50 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="flex justify-center relative order-1 md:order-2"
                    >
                        {/* Soft Glow Behind Phone */}
                        <div className="absolute inset-0 bg-blue-500/20 blur-[120px] rounded-full" />
                        <img
                            src="/cappi_concierge_mobile_1771701910144.png"
                            alt="Concierge Chat Mobile"
                            className="h-[400px] md:h-[600px] w-auto drop-shadow-2xl rounded-[3rem] relative z-10 
                         border-[8px] border-zinc-900/80 object-cover"
                            onError={(e) => { e.currentTarget.style.display = 'none'; }}
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
