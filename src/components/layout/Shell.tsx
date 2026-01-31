import React from 'react';
import { motion } from 'framer-motion';
import { PROFILE } from '../../data/portfolio';

interface ShellProps {
    children: React.ReactNode;
}

const backgroundVariants = {
    animate: {
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.5, 0.3],
        transition: {
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut" as any
        }
    }
};

export const Shell: React.FC<ShellProps> = ({ children }) => {
    return (
        <div className="relative min-h-screen w-full bg-void text-slate-200 font-sans selection:bg-accent selection:text-void overflow-x-hidden">

            {/* Cinematic Background Ambiance */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <motion.div
                    animate="animate"
                    variants={backgroundVariants}
                    className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] bg-accent/5 rounded-full blur-[120px]"
                />
                <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-blue-900/5 rounded-full blur-[100px]" />
            </div>

            {/* Main Content Container */}
            <motion.main
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                className="relative z-10 container mx-auto px-6 py-12 md:px-12 md:py-24 max-w-7xl"
            >
                {/* Header / Brand */}
                <header className="mb-24 flex flex-col md:flex-row justify-between items-start md:items-end border-b border-white/5 pb-8 gap-8">
                    <div className="max-w-3xl">
                        <h1 className="text-5xl md:text-6xl font-extralight tracking-ultra text-white mb-6">
                            Robert Marriott
                        </h1>

                        {/* Profile Summary Integration */}
                        <div className="flex flex-col md:flex-row gap-8 items-start">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="shrink-0"
                            >
                                <img
                                    src="/src/assets/robert-headshot.png"
                                    alt="Robert Marriott"
                                    className="w-32 h-32 md:w-40 md:h-40 rounded-sm object-cover grayscale brightness-110 contrast-125 border border-white/10 shadow-2xl"
                                />
                            </motion.div>
                            <div className="border-l border-accent/30 pl-6">
                                <h2 className="text-xl text-accent font-light mb-4">{PROFILE.headline}</h2>
                                <div className="space-y-4 text-slate-400 font-light leading-relaxed text-sm md:text-base">
                                    {PROFILE.summary.map((paragraph, index) => (
                                        <p key={index}>{paragraph}</p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="hidden md:flex flex-col items-end gap-4 shrink-0">
                        <span className="text-xs font-mono text-slate-600 border border-white/5 px-3 py-1 rounded-full">
                            v2026.2.0
                        </span>
                        <button className="bg-accent text-void px-6 py-3 rounded-sm font-medium hover:bg-white transition-colors shadow-lg shadow-accent/20">
                            Book Consultation
                        </button>
                    </div>
                </header>

                {children}
            </motion.main>
        </div>
    );
};
