import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

interface WorkflowStep {
    title: string;
    description: string;
}

interface EventData {
    id: string;
    title: string;
    tagline: string;
    description: string;
    color?: string;
    icon: any; // Using any for simplicity with Lucide icons passed as props/components
    workflow: WorkflowStep[];
}

interface EventDetailViewProps {
    event: EventData;
    onBack: () => void;
}

const EventDetailView = ({ event, onBack }: EventDetailViewProps) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
        >
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(57,255,20,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(57,255,20,0.05)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

            <motion.div
                initial={{ scale: 0.9, y: 50 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 50 }}
                className="relative w-full max-w-6xl h-[90vh] bg-black border-4 border-cyber-green flex flex-col md:flex-row shadow-[0_0_50px_rgba(57,255,20,0.3)] clip-corner-1"
            >
                {/* Close Button Mobile */}
                <button
                    onClick={onBack}
                    className="md:hidden absolute top-4 left-4 z-50 p-2 bg-black border border-cyber-green text-cyber-green"
                >
                    <ArrowLeft className="w-6 h-6" />
                </button>

                {/* Left Side: Info */}
                <div className="w-full md:w-1/3 p-8 border-b-4 md:border-b-0 md:border-r-4 border-gray-800 relative overflow-hidden flex flex-col justify-center bg-black">
                    {/* Decorative Elements */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-cyber-green" />

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="relative z-10"
                    >
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-3 h-3 bg-cyber-green animate-pulse" />
                            <span className="text-cyber-green text-xs font-mono tracking-widest">CLASSIFIED EVENT DATA</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-orbitron font-black text-white mb-4 uppercase leading-none">
                            {event.title}
                        </h2>

                        <div className="flex items-center gap-2 mb-8">
                            <div className="h-[2px] w-12 bg-cyber-cyan" />
                            <p className="text-xl text-cyber-cyan font-rajdhani font-bold italic">
                                &quot;{event.tagline}&quot;
                            </p>
                        </div>

                        <p className="text-gray-400 font-rajdhani text-lg leading-relaxed mb-12 border-l-2 border-gray-800 pl-4">
                            {event.description}
                        </p>

                        <button
                            onClick={onBack}
                            className="hidden md:flex items-center gap-4 text-cyber-green hover:text-white transition-colors group font-orbitron tracking-widest text-sm"
                        >
                            <ArrowLeft className="w-5 h-5" />
                            <span className="border-b border-cyber-green group-hover:border-white transition-colors">ABORT_VIEW</span>
                        </button>
                    </motion.div>
                </div>

                {/* Right Side: Workflow */}
                <div className="w-full md:w-2/3 p-4 md:p-8 bg-cyber-dark overflow-y-auto custom-scrollbar relative">
                    {/* Corner Decoration */}
                    <div className="absolute top-0 right-0 w-24 h-24 border-r-4 border-t-4 border-cyber-green opacity-50" />

                    <h3 className="text-2xl font-orbitron text-white mb-12 flex items-center gap-3 border-b border-gray-800 pb-4">
                        <span className="text-cyber-green">01</span> // MISSION_PROTOCOLS
                    </h3>

                    <div className="space-y-8 relative pl-4 md:pl-0">
                        {/* Connecting Line */}
                        <div className="absolute left-8 top-4 bottom-4 w-1 bg-gray-800 hidden md:block" />

                        {event.workflow.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 + (index * 0.1) }}
                                className="relative md:pl-24"
                            >
                                {/* Number Node */}
                                <div className="absolute left-0 top-0 w-16 h-16 bg-black border-2 border-cyber-green hidden md:flex items-center justify-center text-cyber-green font-bold font-orbitron text-2xl z-10 clip-corner-1">
                                    {String(index + 1).padStart(2, '0')}
                                </div>

                                {/* Content Card */}
                                <div className="bg-white/5 p-6 border-l-4 border-gray-600 hover:border-cyber-green hover:bg-white/10 transition-all group">
                                    <div className="md:hidden text-cyber-green font-orbitron text-xl mb-2 font-bold">
                                        {String(index + 1).padStart(2, '0')}
                                    </div>
                                    <h4 className="text-xl font-bold font-orbitron text-white mb-2 group-hover:text-cyber-green transition-colors">
                                        {step.title}
                                    </h4>
                                    <p className="text-gray-400 font-rajdhani text-lg">
                                        {step.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default EventDetailView;
