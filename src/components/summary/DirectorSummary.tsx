import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, X, Quote, Zap } from 'lucide-react';
import type { Competency } from '../../data/portfolio';

interface Props {
    competency: Competency;
    evidenceCount: number;
    onShowProof: () => void;
    onClose: () => void;
}

export const DirectorSummary: React.FC<Props> = ({ competency, evidenceCount, onShowProof, onClose }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] as [number, number, number, number] }}
            className="fixed inset-x-0 bottom-0 z-50 p-4 md:p-8 flex justify-center pointer-events-none"
        >
            <div className="pointer-events-auto w-full max-w-5xl bg-gradient-to-b from-[#1E1E28] to-[#12121A] 
                      backdrop-blur-xl border border-white/10 border-t-white/20 border-b-black/30
                      shadow-2xl rounded-lg overflow-hidden relative"
            >
                {/* Machined Metal Header Trend */}
                <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                <div className="p-8 md:p-10 relative">
                    <button
                        onClick={onClose}
                        className="absolute top-6 right-6 text-slate-500 hover:text-white transition-colors"
                    >
                        <X size={20} strokeWidth={1} />
                    </button>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                        {/* Title & Insight Column */}
                        <div className="col-span-1 lg:col-span-8 space-y-6">
                            <div>
                                <span className="text-xs font-mono text-accent mb-2 block tracking-widest">EXECUTIVE INSIGHT</span>
                                <h2 className="text-3xl font-light text-white">
                                    {competency.title}
                                </h2>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white/5 p-6 rounded-sm border border-white/5">
                                <div>
                                    <div className="flex items-center gap-2 mb-2 text-rose-400/80">
                                        <Quote size={14} />
                                        <span className="text-xs font-mono uppercase tracking-wider">The Challenge</span>
                                    </div>
                                    <p className="text-slate-300 font-light leading-relaxed text-sm">
                                        "{competency.insight.challenge}"
                                    </p>
                                </div>
                                <div>
                                    <div className="flex items-center gap-2 mb-2 text-emerald-400/80">
                                        <Zap size={14} />
                                        <span className="text-xs font-mono uppercase tracking-wider">The Solution</span>
                                    </div>
                                    <p className="text-slate-300 font-light leading-relaxed text-sm">
                                        {competency.insight.solution}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Impact & Action Column */}
                        <div className="col-span-1 lg:col-span-4 flex flex-col justify-between h-full space-y-6 border-t lg:border-t-0 lg:border-l border-white/10 pt-6 lg:pt-0 lg:pl-8">
                            <div>
                                <span className="text-xs font-mono text-slate-500 mb-2 block uppercase tracking-wider">Proven Impact</span>
                                <div className="text-2xl font-light text-white leading-tight">
                                    {competency.insight.stat || "Proven commercial results at scale."}
                                </div>
                            </div>

                            <div className="space-y-3">
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={onShowProof}
                                    className="w-full flex items-center justify-between bg-white text-void px-6 py-4 rounded-sm font-medium tracking-wide hover:bg-slate-200 transition-colors shadow-lg shadow-white/5 group"
                                >
                                    <span>View Evidence</span>
                                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </motion.button>
                                <div className="text-center">
                                    <span className="text-[10px] text-slate-500 font-mono">
                                        {evidenceCount} RELATED PROJECT PHASES
                                    </span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </motion.div>
    );
};
