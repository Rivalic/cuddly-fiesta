import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 scan-line">
            {/* Animated Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-secondary to-black z-0" />

            {/* Floating Particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-primary/30 rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -30, 0],
                            opacity: [0.2, 0.8, 0.2],
                        }}
                        transition={{
                            duration: 3 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                        }}
                    />
                ))}
            </div>

            {/* Decorative Glowing Orbs */}
            <motion.div
                className="absolute top-20 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                }}
            />
            <motion.div
                className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
                animate={{
                    scale: [1.2, 1, 1.2],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                }}
            />

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.span
                        className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wider mb-6 border border-primary/30 glow-purple"
                        whileHover={{ scale: 1.05 }}
                    >
                        <Sparkles size={16} className="animate-pulse" />
                        PREMIUM HAIR SOLUTIONS
                    </motion.span>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 leading-tight">
                        Rediscover Your <br />
                        <span className="gradient-text inline-block mt-2">
                            Confidence
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Experience the most natural-looking hair systems in India.
                        <br className="hidden md:block" />
                        Undetectable, comfortable, and styled to perfection.
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                        <motion.button
                            className="group relative bg-primary text-black px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center gap-2 glow-purple-strong overflow-hidden"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span className="relative z-10">Shop Collection</span>
                            <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                            <div className="absolute inset-0 bg-gradient-to-r from-primary via-purple-400 to-primary bg-[length:200%_100%] animate-pulse" />
                        </motion.button>

                        <motion.button
                            className="px-8 py-4 rounded-full font-bold text-white border-2 border-primary/50 hover:border-primary hover:bg-primary/10 transition-all glow-purple"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Book Consultation
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
