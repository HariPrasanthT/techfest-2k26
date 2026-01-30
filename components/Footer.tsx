import { Mail, ExternalLink } from 'lucide-react';

const Footer = () => {
    return (
        <footer id="contact" className="relative bg-black text-white py-20 clip-corner-top-right overflow-hidden border-t-8 border-cyber-green">
            {/* Decorative Background Elements - Sharp Yellow Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(57,255,20,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(57,255,20,0.05)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-start gap-16">
                    {/* Left: Branding */}
                    <div className="space-y-8 max-w-md">
                        <div className="flex items-center gap-4">
                            <div className="w-16 h-16 bg-cyber-green flex items-center justify-center clip-corner-1">
                                <span className="text-black text-4xl font-black font-orbitron">T</span>
                            </div>
                            <div>
                                <h2 className="text-5xl font-black font-orbitron uppercase leading-none text-white tracking-tighter">TECH<span className="text-cyber-green">FEST</span></h2>
                                <p className="text-sm font-bold tracking-[0.5em] uppercase text-gray-500">System_Online_2k26</p>
                            </div>
                        </div>
                        <p className="text-xl font-bold font-rajdhani text-gray-300">
                            Karpagam Academy of Higher Education <br />
                            <span className="font-normal text-sm opacity-60 uppercase tracking-widest text-cyber-cyan">{'//'} Deemed to be University</span>
                        </p>
                        <div className="flex gap-4">
                            <button className="bg-cyber-green text-black p-4 hover:bg-white hover:text-black transition-all clip-corner-1 shadow-[4px_4px_0px_white]">
                                <ExternalLink className="w-6 h-6" />
                            </button>
                            <button className="bg-cyber-cyan text-black p-4 hover:bg-white hover:text-black transition-all clip-corner-1 shadow-[4px_4px_0px_white]">
                                <Mail className="w-6 h-6" />
                            </button>
                        </div>
                    </div>

                    {/* Middle: Contacts */}
                    <div className="space-y-8 flex-1">
                        <div className="inline-block relative">
                            <h3 className="text-2xl font-black font-orbitron uppercase mb-4 relative z-10">Command Center</h3>
                            <div className="absolute -bottom-2 left-0 w-full h-2 bg-cyber-green clip-path-polygon-[0%_0%,_100%_0%,_95%_100%,_0%_100%]" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 text-lg font-rajdhani">
                            <div className="space-y-1 border-l-2 border-cyber-green pl-4">
                                <p className="uppercase text-cyber-green text-xs tracking-widest font-black mb-1"> Dean </p>
                                <p className="font-bold text-white text-xl">DR. A. AMUDHA</p>
                                <p className="text-xs text-gray-500 font-mono tracking-wider">FACULTY OF ENGINEERING</p>
                            </div>

                            <div className="space-y-1 border-l-2 border-cyber-green pl-4">
                                <p className="uppercase text-cyber-green text-xs tracking-widest font-black mb-1"> Convenor </p>
                                <p className="font-bold text-white text-xl">DR. R. SANTHOSH</p>
                                <p className="text-xs text-gray-500 font-mono tracking-wider">HOD/CSE</p>
                            </div>

                            <div className="col-span-1 md:col-span-2 h-px bg-white/10" />

                            <div>
                                <p className="uppercase text-cyber-cyan text-xs tracking-widest font-bold mb-4"> Faculty Coordinators </p>
                                <ul className="space-y-3 text-gray-300">
                                    <li className="flex items-center gap-3 group">
                                        <div className="w-1.5 h-1.5 bg-cyber-green group-hover:bg-white transition-colors" />
                                        <span>Dr. B. Dhanapal <span className="text-gray-600 mx-2">|</span> <span className="text-white font-mono">96776 66396</span></span>
                                    </li>
                                    <li className="flex items-center gap-3 group">
                                        <div className="w-1.5 h-1.5 bg-cyber-green group-hover:bg-white transition-colors" />
                                        <span>Mrs. N. Mekala <span className="text-gray-600 mx-2">|</span> <span className="text-white font-mono">63807 32104</span></span>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <p className="uppercase text-cyber-cyan text-xs tracking-widest font-bold mb-4"> Student Coordinators </p>
                                <ul className="space-y-3 text-gray-300">
                                    <li className="flex items-center gap-3 group">
                                        <div className="w-1.5 h-1.5 bg-cyber-green group-hover:bg-white transition-colors" />
                                        <span>Vasanthakumar K <span className="text-gray-600 mx-2">|</span> <span className="text-white font-mono">93426 46741</span></span>
                                    </li>
                                    <li className="flex items-center gap-3 group">
                                        <div className="w-1.5 h-1.5 bg-cyber-green group-hover:bg-white transition-colors" />
                                        <span>SmithMarshall J <span className="text-gray-600 mx-2">|</span> <span className="text-white font-mono">63692 74107</span></span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono uppercase tracking-widest text-gray-500">
                    <p className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        © 2026 Karpagam Academy. All protocols secured.
                    </p>
                    <p>Designed by Dept of CSE</p>
                </div>
            </div>

            {/* Giant Background Text */}
            <div className="absolute -bottom-20 -right-20 text-[12rem] font-black font-orbitron text-white opacity-[0.02] pointer-events-none select-none leading-none">
                CYBER
            </div>
        </footer>
    );
};

export default Footer;
