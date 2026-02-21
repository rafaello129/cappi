import { motion } from 'framer-motion';
import { Layers, Search, Brain, MapPin, Zap, Bot, Network, ShieldCheck } from 'lucide-react';

export default function PlatformCapabilities() {
    const capabilities = [
        {
            icon: <Layers className="w-8 h-8 text-zinc-400" />,
            title: "Core Architecture & PMS",
            desc: "Robust infrastructure proven in high-demand environments. Centralized management of services, availability, and operational rules with a unique digital identifier.",
            colSpan: "col-span-1 md:col-span-2 lg:col-span-2",
            isPremium: true
        },
        {
            icon: <Search className="w-8 h-8 text-indigo-400" />,
            title: "Bi-directional Profiling",
            desc: "Creation of structured profiles for both partners and guests, deeply understanding true identity and value proposition.",
            colSpan: "col-span-1"
        },
        {
            icon: <Network className="w-8 h-8 text-cyan-400" />,
            title: "Hyper-Personalized Matching Engine",
            desc: "Our technology prioritizes and cross-references millions of variables in milliseconds to achieve perfect mathematical compatibility between user and experience.",
            colSpan: "col-span-1 md:col-span-1"
        },
        {
            icon: <MapPin className="w-8 h-8 text-indigo-300" />,
            title: "Geointelligence & Mobility",
            desc: "Dynamic map analysis evaluating security and density, coordinating the flow of ground transport and air connections in real-time.",
            colSpan: "col-span-1 md:col-span-2"
        },
        {
            icon: <Brain className="w-8 h-8 text-sky-400" />,
            title: "Insights & Advanced Analytics",
            desc: "Automatic interpretation of operational data for the partner and behavioral analysis for the client, delivering strategies for maximum conversion.",
            colSpan: "col-span-1 md:col-span-3",
            isPremium: true
        },
        {
            icon: <Bot className="w-10 h-10 text-zinc-100" />,
            title: "Autonomous Operational Agents",
            desc: "The highest level of delegated AI. The Partner Agent reads emails and manages bookings automatically; the Guest Agent orchestrates flights, transport, and the entire journey persistently.",
            colSpan: "col-span-1 md:col-span-3",
            isHero: true
        }
    ];

    return (
        <section className="py-20 md:py-32 border-t border-white/5 bg-black/40 relative overflow-hidden">
            {/* Ambient Background */}
            <div className="absolute top-1/2 right-0 w-[800px] h-[800px] bg-indigo-600/10 rounded-full blur-[150px] pointer-events-none -translate-y-1/2" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-24 max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block mb-6"
                    >
                        <span className="px-5 py-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-sm font-semibold tracking-widest uppercase text-indigo-300">
                            Technological Suite
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-8 text-zinc-100"
                    >
                        The Complete Ecosystem. <br />
                        <span className="text-gradient-premium">Unveiled.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-lg sm:text-xl md:text-2xl text-zinc-400 font-light leading-relaxed px-4 md:px-0"
                    >
                        An architecture designed to shift the hospitality paradigm, module by module, driven entirely by AI.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
                    {capabilities.map((cap, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.7, delay: idx * 0.1 }}
                            className={`glass-panel overflow-hidden relative group p-6 md:p-10 flex flex-col justify-between ${cap.colSpan} ${cap.isHero
                                ? 'bg-gradient-to-br from-indigo-900/40 text-zinc-100 border-indigo-500/30 py-10 md:py-16'
                                : cap.isPremium
                                    ? 'bg-white/5 border-white/10'
                                    : 'bg-black/40 border-white/5'
                                }`}
                        >
                            {/* Hover effect glow */}
                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                            <div className="relative z-10">
                                <div className={`mb-8 p-4 rounded-2xl w-fit ${cap.isHero ? 'bg-indigo-500/20 border border-indigo-500/30' : 'bg-white/5 border border-white/10'}`}>
                                    {cap.icon}
                                </div>
                                <h3 className={`${cap.isHero ? 'text-4xl text-white' : 'text-2xl text-zinc-100'} font-bold mb-4`}>
                                    {cap.title}
                                </h3>
                                <p className={`text-zinc-400 leading-relaxed ${cap.isHero ? 'text-xl max-w-3xl' : 'text-lg'}`}>
                                    {cap.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Final Banner Machine to Machine */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="max-w-7xl mx-auto mt-6 glass-panel bg-white/5 border border-white/10 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 relative overflow-hidden"
                >
                    <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-50" />
                    <div className="relative z-10 max-w-3xl">
                        <div className="flex items-center gap-3 mb-4">
                            <ShieldCheck className="w-6 h-6 text-indigo-400" />
                            <span className="text-sm font-semibold tracking-widest uppercase text-indigo-400">Infinite Scalability</span>
                        </div>
                        <h3 className="text-3xl md:text-4xl font-bold text-zinc-100 mb-4">Machine-to-Machine Negotiation</h3>
                        <p className="text-zinc-400 text-xl leading-relaxed">Our architecture allows all these capabilities to converge at a single point: the <strong className="text-zinc-100">Guest Agent</strong> negotiating in the background with the <strong className="text-zinc-100">Partner Agent</strong>. Zero friction, maximum conversion.</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
