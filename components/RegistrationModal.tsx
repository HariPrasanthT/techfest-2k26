import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useState } from 'react';

const RegistrationModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Sticky Bottom Status Bar */}
            <div className="fixed bottom-0 left-0 w-full bg-cyber-green border-t-4 border-black z-[100] py-4 px-6 flex flex-col md:flex-row items-center justify-between gap-4 shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
                <div className="flex items-center gap-4">
                    <div className="relative">
                        <div className="w-4 h-4 bg-black rounded-none animate-pulse rotate-45" />
                        <div className="absolute inset-0 bg-black rounded-none animate-ping opacity-50 rotate-45" />
                    </div>
                    <span className="font-orbitron font-black tracking-widest text-sm md:text-xl text-black uppercase">
                        STATUS: <span className="bg-black text-cyber-green px-2">REGISTRATION ONLINE</span>
                    </span>
                </div>

                <button
                    onClick={() => setIsOpen(true)}
                    className="bg-black text-white font-black font-orbitron px-8 py-3 hover:bg-white hover:text-black hover:scale-105 transition-all uppercase tracking-wider relative group shadow-[5px_5px_0px_white] clip-corner-1"
                >
                    <span className="relative z-10">Initialize Payment</span>
                </button>
            </div>

            {/* Modal */}
            <RegistrationModalContent isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </>
    );
};

interface RegistrationModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const RegistrationModalContent = ({ isOpen, onClose }: RegistrationModalProps) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                        onClick={onClose}
                    />

                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        className="relative w-full max-w-md bg-cyber-dark border-2 border-cyber-green p-8 shadow-[0_0_30px_rgba(57,255,20,0.2)] clip-corner-2"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 text-gray-400 hover:text-cyber-green transition-colors"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        <div className="text-center mb-8">
                            <h2 className="text-2xl font-orbitron font-bold text-white mb-2 uppercase">
                                Payment Gateway
                            </h2>
                            <div className="h-1 w-24 mx-auto bg-cyber-green mb-4" />
                            <p className="text-gray-400 font-rajdhani">
                                Secure transaction link via Google Forms
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="bg-white/5 border border-white/10 p-4 font-mono text-sm text-cyber-cyan">
                                <p>FEE: ₹200.00</p>
                                <p>ACCESS: ALL EVENTS</p>
                                <p>ENCRYPTION: ENABLED</p>
                            </div>

                            <a
                                href="https://docs.google.com/forms/d/1tsiLFyOveddLrO794Vqn5WqIdr2A-1GrGI8rC0A4_HM/viewform"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full text-center bg-cyber-green text-black font-orbitron font-bold py-4 hover:bg-white hover:text-black transition-all clip-corner-1 uppercase tracking-widest relative group overflow-hidden"
                            >
                                <span className="relative z-10 group-hover:tracking-[0.2em] transition-all">Proceed to Pay</span>
                                <div className="absolute inset-0 bg-cyber-cyan opacity-0 group-hover:opacity-20 transition-opacity" />
                            </a>

                            <p className="text-center text-xs text-gray-500 font-rajdhani">
                                *Redirects to external secure form
                            </p>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default RegistrationModal;
