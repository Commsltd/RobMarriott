import React from 'react';
import { motion } from 'framer-motion';
import type { ProjectPhase } from '../../data/portfolio';
import { ArrowLeft } from 'lucide-react';

interface Props {
    phases: ProjectPhase[];
    onBack: () => void;
    onSelectPhase: (id: string) => void;
}

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

const item = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 }
};

export const EvidenceVault: React.FC<Props> = ({ phases, onBack, onSelectPhase }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="md:pl-12"
        >
            <button
                onClick={onBack}
                className="flex items-center gap-2 text-slate-400 hover:text-white mb-8 transition-colors text-sm tracking-widest uppercase"
            >
                <ArrowLeft size={16} /> Back to Matrix
            </button>

            <h2 className="text-3xl font-light text-white mb-12">Evidence Vault</h2>

            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="grid grid-cols-1 gap-4"
            >
                {phases.map((phase) => (
                    <motion.div
                        key={phase.id}
                        variants={item}
                        onClick={() => onSelectPhase(phase.id)}
                        className="group cursor-pointer p-6 bg-glass/50 backdrop-blur-liquid border border-white/5 
                       hover:bg-elevated hover:border-accent/40 transition-all duration-300 rounded-sm"
                    >
                        <div className="flex justify-between items-start mb-2">
                            <h3 className="text-lg font-medium text-slate-200 group-hover:text-accent transition-colors">
                                {phase.title}
                            </h3>
                            <span className="text-[10px] font-mono border border-white/10 px-2 py-1 rounded text-slate-500">
                                {phase.id.split('-')[0].toUpperCase()}
                            </span>
                        </div>
                        <p className="text-slate-400 font-light text-sm leading-relaxed mb-4">
                            {phase.description}
                        </p>

                        {/* Full narrative from source documents */}
                        {phase.narrative && (
                            <div className="mb-4 p-4 bg-white/5 rounded border-l-2 border-accent/50">
                                <p className="text-slate-300 text-sm leading-relaxed">
                                    {phase.narrative}
                                </p>
                            </div>
                        )}

                        {/* Techniques used */}
                        {phase.techniques && phase.techniques.length > 0 && (
                            <div className="mb-3">
                                <span className="text-xs uppercase tracking-widest text-accent/70 font-medium">Methods & Frameworks:</span>
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {phase.techniques.map((tech, i) => (
                                        <span key={i} className="text-xs bg-accent/10 text-accent px-2 py-1 rounded">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Challenge faced */}
                        {phase.challenge && (
                            <div className="mb-3 p-3 bg-rose-400/5 rounded border-l-2 border-rose-400/40">
                                <span className="text-xs uppercase tracking-widest text-rose-400/80 font-medium block mb-1">Challenge:</span>
                                <p className="text-slate-300 text-sm">{phase.challenge}</p>
                            </div>
                        )}

                        {/* Outcome achieved */}
                        {phase.outcome && (
                            <div className="p-3 bg-emerald-400/5 rounded border-l-2 border-emerald-400/40">
                                <span className="text-xs uppercase tracking-widest text-emerald-400/80 font-medium block mb-1">Outcome:</span>
                                <p className="text-slate-300 text-sm">{phase.outcome}</p>
                            </div>
                        )}
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
};
