const SplitLine = () => {
    return (
        <div className="w-full h-24 bg-black flex items-center justify-center relative overflow-hidden z-20">
            {/* Full width faint line */}
            <div className="absolute w-full h-[1px] bg-cyber-green/30" />

            {/* Center Diamond */}
            <div className="w-4 h-4 bg-black border-2 border-cyber-green rotate-45 z-10 shadow-[0_0_10px_rgba(57,255,20,0.8)]" />

            {/* Center glowing line segment */}
            <div className="absolute w-1/3 h-[1px] bg-cyber-green shadow-[0_0_10px_rgba(57,255,20,0.5)]" />
        </div>
    );
};

export default SplitLine;
