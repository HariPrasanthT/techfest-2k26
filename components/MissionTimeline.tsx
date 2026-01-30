import { motion } from 'framer-motion';
import { Calendar, CheckCircle, Flag, Clock } from 'lucide-react';

const timelineData = [
    {
        id: 1,
        date: "20 JAN 2026",
        title: "REGISTRATION INITIATED",
        description: "Portal Online. Secure your spot in the network. Early access protocols enabled for all sectors.",
        color: "border-cyber-green text-cyber-green",
        bg: "bg-cyber-green",
        icon: Flag
    },
    {
        id: 2,
        date: "12 FEB 2026",
        title: "REGISTRATION CLOSES",
        description: "System Lockdown. Last chance to initialize participation protocols before the gateway seals.",
        color: "border-cyber-purple text-cyber-purple",
        bg: "bg-cyber-purple",
        icon: Clock
    },
    {
        id: 3,
        date: "12 FEB 2026",
        title: "SYSTEM ONLINE: 08:30 AM",
        description: "On-site check-in and spot registration verified. All operatives report to the command center.",
        color: "border-cyber-cyan text-cyber-cyan",
        bg: "bg-cyber-cyan",
        icon: CheckCircle
    },
    {
        id: 4,
        date: "12 FEB 2026",
        title: "MISSION LAUNCH: 09:30 AM",
        description: "Event commencement. Deploy projects, execute code, and compete for supremacy.",
        color: "border-cyber-green text-cyber-green",
        bg: "bg-cyber-green",
        icon: Calendar
    }
];

const MissionTimeline = () => {
    return (
        <section id="mission-timeline" className="py-24 relative overflow-hidden bg-black text-cyber-green border-t-8 border-cyber-green">
            {/* Background Texture*/}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] mix-blend-screen" />

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                {/* Header */}
                <div className="text-center mb-20">
                    <h2 className="text-5xl md:text-7xl font-black font-orbitron text-white uppercase mb-4 tracking-tighter transform -skew-x-12">
                        MISSION <span className="text-black bg-cyber-green px-4 inline-block transform skew-x-12">TIMELINE</span>
                    </h2>
                    <p className="font-mono text-sm tracking-[0.3em] uppercase font-bold text-cyber-green/80">
                        INITIALIZING LAUNCH SEQUENCE
                    </p>
                    <div className="w-24 h-2 bg-cyber-green mx-auto mt-6" />
                </div>

                {/* Timeline Container */}
                <div className="relative">
                    {/* Central Line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-cyber-green/30 md:-translate-x-1/2" />

                    <div className="space-y-12 md:space-y-24">
                        {timelineData.map((item, index) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                    }`}
                            >
                                {/* Empty Half for spacing */}
                                <div className="hidden md:block w-1/2" />

                                {/* Center Node */}
                                <div className={`absolute left-4 md:left-1/2 w-8 h-8 -translate-x-1/2 flex items-center justify-center z-10 bg-black border-4 ${item.color.split(' ')[0]} rotate-45`}>
                                    <div className={`w-3 h-3 ${item.bg}`} />
                                </div>

                                {/* Content Card */}
                                <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'
                                    }`}>
                                    <div className={`relative p-8 bg-black hover:scale-105 transition-transform duration-300 clip-corner-2 border-l-4 ${item.color.split(' ')[0]} border border-white/10 shadow-[0_0_20px_rgba(57,255,20,0.1)] hover:shadow-[0_0_30px_rgba(57,255,20,0.3)]`}>

                                        {/* Date Tag - Now inside and styled */}
                                        <div className={`inline-block px-4 py-1 mb-4 text-sm font-black font-mono tracking-widest text-black ${item.bg} clip-corner-1 transform -skew-x-12`}>
                                            {item.date}
                                        </div>

                                        <h3 className={`text-3xl font-black font-orbitron mb-2 uppercase ${item.color.split(' ')[1]}`}>
                                            {item.title}
                                        </h3>

                                        <p className="text-gray-400 font-rajdhani text-lg leading-relaxed font-bold">
                                            {item.description}
                                        </p>

                                        {/* Decorative Corner - Matches item color */}
                                        <div className={`absolute bottom-0 right-0 w-8 h-8 ${item.bg} clip-path-polygon-[100%_100%,_0%_100%,_100%_0%] opacity-50`} />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MissionTimeline;
