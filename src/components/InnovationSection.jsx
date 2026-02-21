import { motion } from 'framer-motion';
import { Network, UserCheck, Search, Zap } from 'lucide-react';

export default function InnovationSection() {
    const innovations = [
        {
            icon: <UserCheck className="w-8 h-8 text-indigo-400" />,
            title: "Guest Profiling",
            description: "We don't just store data; we build a structured, dynamic profile of the guest based on their preferences, behaviors, and continuous interaction with the system."
        },
        {
            icon: <Search className="w-8 h-8 text-cyan-400" />,
            title: "Partner Profiling",
            description: "During onboarding, the system exhaustively maps the partner's operation and the exact type of client their business model caters to."
        },
        {
            icon: <Network className="w-8 h-8 text-indigo-300" />,
            title: "Hyper-Personalized Matching",
            description: "The core engine where the magic happens: we cross-reference profiles in milliseconds to connect the exact client with the perfect service, prioritizing total compatibility."
        },
        {
            icon: <Zap className="w-8 h-8 text-zinc-400" />,
            title: "Unique Operational Identity",
            description: "Every booking generates a verifiable digital identifier that unifies all operational information, allowing the partner to instantly identify the booking and the guest."
        }
    ];

    return (
        <section className="py-20 md:py-32 relative border-t border-white/5 bg-black/40">
            <div className="container mx-auto px-6">
                <div className="text-center mb-24 max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block mb-6"
                    >
                        <span className="px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-sm font-medium tracking-widest uppercase text-indigo-300">
                            CAPPI Core Engine
                        </span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight mb-8 text-zinc-100"
                    >
                        The Power of the <span className="text-gradient-premium">Matching System.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-lg sm:text-xl text-zinc-400 font-light leading-relaxed"
                    >
                        CAPPI is not a traditional inventory system. We have built a technical architecture based on deep profiles so that every journey is as unique as the person living it.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {innovations.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.7, delay: idx * 0.15 }}
                            className="group relative p-1 rounded-3xl"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="relative h-full glass-panel p-6 md:p-10 bg-black/50 hover:bg-white/5 transition-colors duration-500">
                                <div className="mb-6">
                                    {item.icon}
                                </div>
                                <h3 className="text-2xl font-semibold mb-4 text-zinc-100">{item.title}</h3>
                                <p className="text-zinc-400 text-lg leading-relaxed">{item.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
