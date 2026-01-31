import { motion } from 'framer-motion';
import Image from 'next/image';

const MemoryArchive = () => {
    return (
        <section id="glimpses" className="relative bg-black py-20 overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-[0.05] bg-fixed pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 relative"
                >
                    <h2 className="text-4xl md:text-6xl font-black font-orbitron text-white text-center uppercase tracking-tighter">
                        OFFLINE <span className="text-cyber-green">GLIMPSES</span>
                    </h2>
                    <div className="w-24 h-1 bg-cyber-green mx-auto mt-4" />
                    <p className="text-center font-mono text-cyber-green/60 mt-2 text-sm tracking-[0.3em]">
                        {'// LOADING_ARCHIVED_DATA...'}
                    </p>
                </motion.div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[250px]">

                    {/* Item 1: Wide Image (Top Left) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="md:col-span-2 relative group overflow-hidden border border-cyber-green/20 rounded-xl"
                    >
                        <Image
                            src="/real-hack4impact.png"
                            alt="Hackathon"
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                            <h3 className="text-xl font-bold font-orbitron text-cyber-green">HACK4IMPACT 2025</h3>
                        </div>
                    </motion.div>

                    {/* Item 2: Stat Card (Top Middle) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="md:col-span-1 bg-black border border-cyber-green/30 rounded-xl flex flex-col items-center justify-center p-6 relative overflow-hidden group hover:bg-cyber-green/5 transition-colors"
                    >
                        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,255,65,0.05)_25%,rgba(0,255,65,0.05)_50%,transparent_50%,transparent_75%,rgba(0,255,65,0.05)_75%,rgba(0,255,65,0.05)_100%)] bg-[size:20px_20px] opacity-20" />
                        <h3 className="text-5xl md:text-6xl font-black font-orbitron text-cyber-green mb-2">250+</h3>
                        <p className="font-mono text-sm tracking-widest text-white/60 uppercase">Participants</p>
                    </motion.div>

                    {/* Item 3: Tall Image (Right Side) - Spans 2 Rows */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="md:col-span-1 md:row-span-2 relative group overflow-hidden border border-cyber-green/20 rounded-xl min-h-[500px] md:min-h-0"
                    >
                        <Image
                            src="/real-standee.png"
                            alt="Event Standee"
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                            <div>
                                <h3 className="text-2xl font-black font-orbitron text-cyber-green mb-1">SYMPOSIUM</h3>
                                <p className="text-xs font-mono text-white/80">Collaborated with Growbinar & GeeksforGeeks. 500+ participants.</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Item 4: Stat Card (Middle Left) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="md:col-span-1 bg-black border border-cyber-green/30 rounded-xl flex flex-col items-center justify-center p-6 relative overflow-hidden group hover:bg-cyber-green/5 transition-colors"
                    >
                        <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_25%,rgba(0,255,65,0.05)_25%,rgba(0,255,65,0.05)_50%,transparent_50%,transparent_75%,rgba(0,255,65,0.05)_75%,rgba(0,255,65,0.05)_100%)] bg-[size:20px_20px] opacity-20" />
                        <h3 className="text-5xl md:text-6xl font-black font-orbitron text-cyber-green mb-2">50+</h3>
                        <p className="font-mono text-sm tracking-widest text-white/60 uppercase">Teams</p>
                    </motion.div>

                    {/* Item 5: Wide Image (Middle Center) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="md:col-span-2 relative group overflow-hidden border border-cyber-green/20 rounded-xl"
                    >
                        <Image
                            src="/real-lab.png"
                            alt="Lab Session"
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                            <h3 className="text-xl font-bold font-orbitron text-cyber-green">HACKSPRINT 1.0</h3>
                        </div>
                    </motion.div>

                    {/* Item 6a: Orientation Image (Bottom Left) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="md:col-span-2 relative group overflow-hidden border border-cyber-green/20 rounded-xl min-h-[250px]"
                    >
                        <Image
                            src="/real-orientation.jpg"
                            alt="Orientation Program"
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                            <h3 className="text-xl font-bold font-orbitron text-cyber-green">HACKSPRINT 2.0</h3>
                            <br />
                            <p className="text-xs font-mono text-white/80">250+ PARTICIPANTS </p>
                        </div>
                    </motion.div>

                    {/* Item 6b: Orientation Text (Bottom Right) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                        className="md:col-span-2 bg-black border border-cyber-green/30 rounded-xl flex flex-col items-center justify-center p-6 text-center relative overflow-hidden group"
                    >
                        {/* Animated Border */}
                        <div className="absolute inset-0 border-2 border-cyber-green/20 rounded-xl group-hover:border-cyber-green/50 transition-colors" />
                        <h3 className="text-3xl md:text-4xl font-black font-orbitron text-cyber-green mb-2 tracking-tighter">HACKSPRINT</h3>
                        <p className="font-rajdhani font-bold text-white text-xl tracking-[0.2em] uppercase">2.0</p>
                        <p className="font-mono text-cyber-green/60 text-xs mt-2 tracking-widest">{'// 36_HOURS_OF_NATIONAL_LEVEL_HACKATHON'}</p>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default MemoryArchive;
