import { motion } from 'framer-motion';
import { Cpu, Zap } from 'lucide-react';

const WorkshopSpotlight = () => {
    return (
        <section className="py-24 px-4 relative overflow-hidden bg-black text-cyber-green border-t-8 border-cyber-green">
            {/* Background Texture*/}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] mix-blend-screen" />

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Left: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1 bg-cyber-green text-black font-bold font-mono text-xs uppercase tracking-widest clip-corner-1 transform -skew-x-12">
                            <span className="w-2 h-2 bg-black animate-pulse" />
                            System_Override_Detected
                        </div>

                        <h2 className="text-5xl md:text-7xl font-black font-orbitron text-white leading-[0.9] uppercase relative">
                            Agentic <br />
                            <span className="text-black bg-cyber-green px-2 inline-block transform skew-x-12">AI Workshop</span>
                        </h2>

                        <p className="text-xl text-cyber-green font-rajdhani border-l-8 border-cyber-green pl-6 font-bold">
                            &quot;Break the code. Build autonomous systems.&quot; <br />
                            <span className="text-sm uppercase tracking-widest opacity-70 text-gray-400">A hands-on deep dive into the next generation.</span>
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <button className="bg-cyber-green text-black font-black font-orbitron px-8 py-4 clip-corner-1 hover:bg-black hover:text-cyber-green hover:border hover:border-cyber-green transition-all shadow-[8px_8px_0px_rgba(255,255,255,0.1)] hover:shadow-[8px_8px_0px_white]">
                                JOIN THE NETWORK
                            </button>
                            <div className="flex items-center gap-4 px-6 py-4 border-2 border-cyber-green bg-black clip-corner-2">
                                <Cpu className="w-6 h-6 text-cyber-green" />
                                <span className="font-mono text-sm text-cyber-green font-bold">LIMITED_SLOTS</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="relative z-10 bg-black p-2 clip-corner-2 shadow-[0_0_40px_rgba(57,255,20,0.2)] border border-cyber-green/30">
                            <div className="bg-black border border-white/20 p-8 relative overflow-hidden group">
                                {/* Glitch Overlay on Hover */}
                                <div className="absolute inset-0 bg-cyber-green/10 opacity-0 group-hover:opacity-100 transition-opacity mix-blend-overlay pointer-events-none" />

                                <div className="flex justify-between items-start mb-12">
                                    <Zap className="w-12 h-12 text-cyber-green" />
                                    <span className="font-mono text-xs text-cyber-green/50">ID: WORKSHOP_001</span>
                                </div>

                                <h3 className="text-4xl font-black font-orbitron text-white mb-2">
                                    NEURAL <span className="text-cyber-green">LINK</span>
                                </h3>
                                <div className="h-2 w-full bg-gray-800 mb-6 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-cyber-green w-1/2 animate-shimmer" />
                                </div>

                                <ul className="space-y-4 font-rajdhani text-lg text-gray-300 font-bold">
                                    <li className="flex items-center gap-2">
                                        <span className="text-cyber-green">&gt;</span> Autonomous Agent Design
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-cyber-green">&gt;</span> LLM Integration
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-cyber-green">&gt;</span> Real-time Deployment
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            <style jsx global>{`
                @keyframes shimmer {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(200%); }
                }
                .animate-shimmer {
                    animation: shimmer 2s infinite linear;
                }
            `}</style>
        </section>
    );
};

export default WorkshopSpotlight;
