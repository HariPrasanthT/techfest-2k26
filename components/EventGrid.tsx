import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { eventsData } from '../data/eventsData';
import EventDetailView from './EventDetailView';

const EventGrid = () => {
    const [activeEvent, setActiveEvent] = useState<typeof eventsData[0] | null>(null);

    return (
        <section id="events" className="py-20 px-4 relative min-h-screen flex flex-col justify-center bg-black text-cyber-green">

            {/* Background Texture similar to Hero */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] mix-blend-screen" />

            <div className="max-w-7xl mx-auto w-full relative z-10">
                <AnimatePresence mode="wait">
                    {!activeEvent ? (
                        <motion.div
                            key="grid"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="flex items-center justify-between mb-12 border-b-4 border-cyber-green/30 pb-4">
                                <h2 className="text-4xl md:text-6xl font-black font-orbitron text-white uppercase tracking-tighter relative transform -skew-x-12">
                                    <span className="text-black bg-cyber-green px-4 inline-block mr-2">/</span>
                                    Mission_Select
                                </h2>
                                <div className="hidden md:flex space-x-2">
                                    <div className="w-6 h-6 bg-cyber-green"></div>
                                    <div className="w-6 h-6 bg-cyber-green/50"></div>
                                    <div className="w-6 h-6 bg-cyber-green/25"></div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {eventsData.map((event, index) => (
                                    <motion.div
                                        key={event.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        whileHover={{ y: -10, scale: 1.02 }}
                                        onClick={() => setActiveEvent(event)}
                                        className="relative group cursor-pointer"
                                    >
                                        {/* Card BG - Solid Black */}
                                        <div className="absolute inset-0 bg-black border-2 border-white/10 group-hover:border-cyber-green transition-all duration-200 clip-corner-2 group-hover:shadow-[0_0_20px_rgba(57,255,20,0.3)]" />

                                        {/* Content */}
                                        <div className="relative p-8 h-full flex flex-col z-10 clip-corner-2">
                                            <div className="flex justify-between items-start mb-6">
                                                <div className="p-3 bg-cyber-green/10 border-2 border-cyber-green/30 group-hover:bg-cyber-green group-hover:text-black transition-colors text-cyber-green">
                                                    <event.icon className="w-8 h-8" />
                                                </div>
                                                <div className="text-xl font-orbitron font-bold text-cyber-green opacity-50 group-hover:opacity-100">
                                                    0{index + 1}
                                                </div>
                                            </div>

                                            <h3 className="text-2xl font-black font-orbitron text-white mb-4 uppercase tracking-tight group-hover:text-cyber-green transition-colors">
                                                {event.title}
                                            </h3>

                                            <p className="text-gray-400 text-sm font-rajdhani line-clamp-3 group-hover:text-gray-200 font-medium leading-relaxed">
                                                {event.description}
                                            </p>

                                            <div className="mt-8 pt-6 flex items-center justify-between border-t border-white/20 group-hover:border-cyber-green/50">
                                                <span className="text-cyber-green font-bold font-mono text-xs uppercase tracking-widest group-hover:text-white">
                                                    Initialize_Protocol
                                                </span>
                                                <div className="w-8 h-8 bg-white/10 group-hover:bg-cyber-green flex items-center justify-center transition-colors">
                                                    <div className="w-0 h-0 border-l-[8px] border-l-white group-hover:border-l-black border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent ml-1" />
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ) : null}
                </AnimatePresence>

                <AnimatePresence>
                    {activeEvent && (
                        <EventDetailView
                            event={activeEvent}
                            onBack={() => setActiveEvent(null)}
                        />
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default EventGrid;
