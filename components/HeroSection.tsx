
import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';


const HeroSection = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const targetDate = new Date('2026-02-12T09:00:00'); // Event Date

        const interval = setInterval(() => {
            const now = new Date();
            const difference = targetDate.getTime() - now.getTime();

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60),
                });
            } else {
                clearInterval(interval);
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section ref={containerRef} className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black text-cyber-green">

            {/* Background Texture/Glitch Overlay */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] mix-blend-screen" />

            {/* Top Right Navigation Buttons */}
            <div className="absolute top-8 right-8 z-50 flex gap-4">
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="hidden md:flex items-center gap-2 px-6 py-2 bg-black/50 border border-cyber-green/30 text-cyber-green font-orbitron text-sm tracking-wider hover:bg-cyber-green hover:text-black transition-all clip-corner-1"
                >
                    HOME
                </button>
                <button
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="flex items-center gap-2 px-6 py-2 bg-black/50 border border-cyber-green/30 text-cyber-green font-orbitron text-sm tracking-wider hover:bg-cyber-green hover:text-black transition-all clip-corner-1"
                >
                    CONTACT
                </button>
                <button
                    onClick={() => document.getElementById('glimpses')?.scrollIntoView({ behavior: 'smooth' })}
                    className="hidden md:flex items-center gap-2 px-6 py-2 bg-black/50 border border-cyber-green/30 text-cyber-green font-orbitron text-sm tracking-wider hover:bg-cyber-green hover:text-black transition-all clip-corner-1"
                >
                    GLIMPSES
                </button>
            </div>


            <div className="relative z-10 w-full max-w-5xl mx-auto px-4 flex flex-col items-center justify-center h-full pt-20 text-center gap-8">

                {/* Logo - Smaller & Attractive with Glow */}
                {/* Logo - Cyberpunk Reactor Style */}
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    className="relative w-40 h-40 md:w-48 md:h-48 mb-6 group"
                >
                    {/* Rotating Tech Ring */}
                    <div className="absolute inset-0 border-[3px] border-dashed border-cyber-green/30 rounded-full animate-[spin_10s_linear_infinite]" />

                    {/* Reverse Rotating Ring */}
                    <div className="absolute inset-2 border-[2px] border-dotted border-cyber-green/50 rounded-full animate-[spin_15s_linear_infinite_reverse]" />

                    {/* Main Hexagon Container */}
                    <div className="absolute inset-4 bg-black clip-path-polygon-[50%_0%,_100%_25%,_100%_75%,_50%_100%,_0%_75%,_0%_25%] flex items-center justify-center overflow-hidden border-2 border-cyber-green/30 shadow-[0_0_20px_rgba(57,255,20,0.2)]">

                        {/* Holographic Scanline Overlay */}
                        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(57,255,20,0.2)_50%,transparent_100%)] bg-[length:100%_200%] animate-[scan_2s_linear_infinite] pointer-events-none z-20" />

                        {/* The Logo */}
                        <div className="relative w-full h-full p-6 bg-cyber-green/5">
                            <Image
                                src="/college-logo.png"
                                alt="College Logo"
                                fill
                                className="object-contain z-10"
                                priority
                            />
                        </div>
                    </div>

                    {/* Decorative Brackets */}
                    <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-2 h-12 border-l-4 border-cyber-green" />
                    <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-2 h-12 border-r-4 border-cyber-green" />
                </motion.div>

                {/* Animated Department Text */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-col gap-2 font-mono text-xs md:text-sm tracking-[0.2em] md:tracking-[0.4em] text-cyber-green/80 uppercase"
                >
                    <p>FACULTY OF ENGINEERING // DEPT OF CSE</p>
                    <p className="text-white/60 text-[10px] md:text-xs tracking-[0.6em]">PROUDLY PRESENTS</p>
                </motion.div>

                {/* Main Title - Single Line & Aggressive */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="relative z-20"
                >
                    <h1
                        className="text-6xl md:text-8xl lg:text-9xl font-black font-orbitron italic tracking-tighter transform -skew-x-12 flex flex-col items-center gap-2"
                        style={{ textShadow: '4px 4px 0px rgba(57,255,20,0.3)' }}
                    >
                        <div className="flex items-center gap-4 animate-glitch relative z-10">
                            <span className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]">TECH</span>
                            <span className="text-cyber-green drop-shadow-[0_0_15px_rgba(57,255,20,0.8)]">FEST</span>
                        </div>
                        <span className="text-5xl md:text-7xl tracking-[0.6em] font-rajdhani font-bold not-italic skew-x-0 mt-4 text-cyber-green w-full pl-8">
                            2K26
                        </span>
                    </h1>
                </motion.div>

                {/* HUD with Timer Inside */}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="w-full max-w-xl"
                >
                    <div className="relative w-full bg-cyber-green/10 p-1 border-2 border-cyber-green clip-corner-2 shadow-[0_0_30px_rgba(57,255,20,0.1)] skew-x-[-5deg] mx-auto">
                        <div className="bg-black border border-cyber-green/30 p-6 clip-corner-2 relative overflow-hidden flex flex-col items-center justify-center gap-4">
                            <div className="absolute top-0 left-0 w-full h-1 bg-cyber-green animate-pulse" />

                            {/* Decorative Grid Background */}
                            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(57,255,20,0.05)_25%,rgba(57,255,20,0.05)_50%,transparent_50%,transparent_75%,rgba(57,255,20,0.05)_75%,rgba(57,255,20,0.05)_100%)] bg-[size:10px_10px] opacity-20 pointer-events-none" />

                            <span className="font-mono text-cyber-green text-xs blinking-cursor uppercase tracking-widest mb-1">
                                System_Ready // Event_Countdown
                            </span>

                            {/* Timer Display */}
                            <div className="flex gap-4 md:gap-8 font-mono text-cyber-green z-10">
                                <div className="text-center">
                                    <span className="text-4xl md:text-5xl font-black text-white">{String(timeLeft.days).padStart(2, '0')}</span>
                                    <span className="block text-xs md:text-sm text-cyber-green/60 uppercase">Days</span>
                                </div>
                                <div className="text-center">
                                    <span className="text-4xl md:text-5xl font-black text-white">{String(timeLeft.hours).padStart(2, '0')}</span>
                                    <span className="block text-xs md:text-sm text-cyber-green/60 uppercase">Hrs</span>
                                </div>
                                <div className="text-center">
                                    <span className="text-4xl md:text-5xl font-black text-white">{String(timeLeft.minutes).padStart(2, '0')}</span>
                                    <span className="block text-xs md:text-sm text-cyber-green/60 uppercase">Mins</span>
                                </div>
                                <div className="text-center">
                                    <span className="text-4xl md:text-5xl font-black text-white">{String(timeLeft.seconds).padStart(2, '0')}</span>
                                    <span className="block text-xs md:text-sm text-cyber-green/60 uppercase">Secs</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Register Button Only */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                >
                    <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                        <button
                            onClick={() => document.getElementById('events')?.scrollIntoView({ behavior: 'smooth' })}
                            className="bg-cyber-green text-black font-black font-orbitron py-4 px-12 clip-corner-1 hover:bg-black hover:text-cyber-green hover:border-2 hover:border-cyber-green transition-all shadow-[5px_5px_0px_rgba(57,255,20,0.5)] uppercase tracking-wider text-lg flex items-center justify-center gap-4 group"
                        >
                            <span>MISSIONS</span>
                            <span className="group-hover:translate-x-1 transition-transform">{'>'}</span>
                        </button>

                        <button
                            onClick={() => document.getElementById('mission-timeline')?.scrollIntoView({ behavior: 'smooth' })}
                            className="bg-transparent border-2 border-cyber-green text-cyber-green font-black font-orbitron py-4 px-12 clip-corner-1 hover:bg-cyber-green hover:text-black transition-all shadow-[0_0_15px_rgba(57,255,20,0.2)] uppercase tracking-wider text-lg flex items-center justify-center gap-4 group"
                        >
                            <span>Mission_Timeline</span>
                            <span className="group-hover:translate-x-1 transition-transform">{'>'}</span>
                        </button>
                    </div>

                    {/* Platform Icons */}
                    <div className="flex gap-6 opacity-60 mt-8 justify-center text-cyber-green">
                        <span className="font-bold">PC</span>
                        <span className="font-bold">PS5</span>
                        <span className="font-bold">XBOX</span>
                    </div>
                </motion.div>

            </div>

            {/* Bottom Decorative Bar Content */}
            <div className="absolute bottom-0 left-0 w-full h-12 bg-black/80 backdrop-blur-sm border-t border-cyber-green/30 flex items-center justify-between px-8 text-cyber-green font-mono text-xs z-20">
                <span>{'//'} SYSTEM_DIAGNOSTICS_OK</span>
                <div className="flex gap-1">
                    <div className="w-20 h-2 bg-black" />
                    <div className="w-4 h-2 bg-black/50" />
                    <div className="w-2 h-2 bg-black/20" />
                </div>

            </div>

        </section>
    );
};

export default HeroSection;
