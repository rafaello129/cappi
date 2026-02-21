import { motion } from 'framer-motion';
import { Map, ShieldAlert, Car, MapPin, Plane } from 'lucide-react';

export default function GeointelligenceSection() {
    const features = [
        {
            icon: <Map className="w-6 h-6 text-zinc-400" />,
            title: "Real-Time Environment Mapping",
            description: "Dynamic visualization of destination offerings, instantly adapted to the guest's preferences and location."
        },
        {
            icon: <ShieldAlert className="w-6 h-6 text-indigo-400" />,
            title: "Safety & Concurrency Evaluation",
            description: "Intelligent analysis that rates zones based on their security level and crowd density to suggest the perfect experience."
        },
        {
            icon: <Car className="w-6 h-6 text-sky-400" />,
            title: "Integrated Ground Mobility",
            description: "Orchestration of transport flows. CAPPI requests and coordinates private vehicles in sync with your itinerary."
        }
    ];

    return (
        <section className="py-20 md:py-32 relative border-t border-white/5 overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,rgba(79,70,229,0.05),transparent_50%)] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,rgba(56,189,248,0.05),transparent_50%)] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-24 max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block mb-6"
                    >
                        <span className="flex items-center gap-2 px-5 py-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-sm font-semibold tracking-widest uppercase text-indigo-300">
                            <MapPin className="w-4 h-4" /> Advanced Geointelligence
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-8 text-zinc-100"
                    >
                        The entire destination, <br />
                        <span className="text-gradient-premium">in absolute sync.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-lg sm:text-xl md:text-2xl text-zinc-400 font-light leading-relaxed px-4 md:px-0"
                    >
                        Beyond accommodation. CAPPI possesses spatial awareness: it maps, evaluates, and coordinates all mobility logistics around you.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center flex-col-reverse md:flex-row">

                    {/* Visual representation */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="relative h-[350px] md:h-[500px] w-full rounded-3xl border border-white/10 bg-black/50 overflow-hidden group shadow-[0_0_50px_rgba(79,70,229,0.1)] order-2 md:order-1"
                    >
                        <div className="absolute inset-0 bg-indigo-500/5 group-hover:bg-indigo-500/10 transition-colors duration-700" />

                        {/* Radar Interface - Dark Premium Theme */}
                        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                            {/* Concentric Circles */}
                            <div className="absolute w-[120%] h-[120%] rounded-full border border-white/10"></div>
                            <div className="absolute w-[90%] h-[90%] rounded-full border border-white/10"></div>
                            <div className="absolute w-[60%] h-[60%] rounded-full border border-white/10"></div>
                            <div className="absolute w-[30%] h-[30%] rounded-full border border-indigo-500/30"></div>

                            {/* Scanning Beam */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                className="absolute w-[60%] h-[60%] rounded-full opacity-60"
                                style={{
                                    background: "conic-gradient(from 0deg, transparent 0deg, transparent 270deg, rgba(79, 70, 229, 0.2) 360deg)"
                                }}
                            />

                            {/* Center Node */}
                            <div className="absolute w-3 h-3 rounded-full bg-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.6)] z-10" />

                            {/* Ping Nodes */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: [0, 1, 0], scale: [0.5, 1, 1] }}
                                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                                className="absolute top-[30%] left-[60%] w-3 h-3 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]"
                            />
                            <motion.div
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: [0, 1, 0], scale: [0.5, 1, 1] }}
                                transition={{ duration: 4, repeat: Infinity, delay: 1.2 }}
                                className="absolute bottom-[25%] left-[30%] w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.8)]"
                            />
                            <motion.div
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: [0, 1, 0], scale: [0.5, 1, 1] }}
                                transition={{ duration: 3.5, repeat: Infinity, delay: 2.5 }}
                                className="absolute top-[40%] right-[20%] w-2 h-2 rounded-full bg-indigo-400 shadow-[0_0_10px_rgba(129,140,248,0.8)]"
                            />
                        </div>
                    </motion.div>

                    {/* Features Grid */}
                    <div className="grid sm:grid-cols-1 gap-6 order-1 md:order-2">
                        {features.map((feature, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: idx * 0.15 }}
                                className="glass-panel p-6 hover:bg-white/5 transition-colors duration-300 flex gap-6 items-start"
                            >
                                <div className="p-4 rounded-xl bg-indigo-500/10 border border-indigo-500/20 shrink-0">
                                    {feature.icon}
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-2 text-zinc-100">{feature.title}</h3>
                                    <p className="text-zinc-400 leading-relaxed text-md">{feature.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
