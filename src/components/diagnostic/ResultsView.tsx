import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { DiagnosticResult } from '../../data/diagnostic_engine';
import { CheckCircle, RefreshCcw, Mail, AlertTriangle, ChevronDown, ChevronUp, Lock } from 'lucide-react';
import { ContactFormModal } from '../ContactFormModal';

interface ResultsViewProps {
    result: DiagnosticResult;
    onRetake: () => void;
}

export const ResultsView = ({ result, onRetake }: ResultsViewProps) => {
    const [expandedRisks, setExpandedRisks] = useState<string[]>([]);
    const [isContactFormOpen, setIsContactFormOpen] = useState(false);

    // GATING LOGIC:
    // If the score is very low (Crisis), maybe we unlock immediately? 
    // For now, consistent gating for everyone: Detailed Breakdown is locked.
    const [isUnlocked, setIsUnlocked] = useState(false);

    const toggleRisk = (id: string) => {
        setExpandedRisks(prev =>
            prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
        );
    };

    return (
        <div className="max-w-4xl mx-auto pb-12">
            {/* Header Card */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-card p-8 md:p-12 text-center mb-12"
            >
                <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-[var(--color-accent-glow)] bg-[var(--color-accent-subtle)] text-[var(--color-accent)] text-sm font-medium tracking-wide uppercase">
                    Diagnostic Complete
                </div>

                <h2 className="text-4xl md:text-5xl font-light mb-6 text-[var(--color-text-primary)]">
                    {result.headline}
                </h2>

                <p className="text-xl text-[var(--color-text-secondary)] font-light mb-8 max-w-2xl mx-auto leading-relaxed">
                    {result.summary}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 border-y border-[var(--color-border-subtle)] py-8">
                    <div>
                        <div className="text-4xl font-light text-[var(--color-text-primary)] mb-2">
                            {result.overallScore}%
                        </div>
                        <div className="text-xs uppercase tracking-widest text-[var(--color-text-muted)]">
                            Overall Readiness
                        </div>
                    </div>
                    <div>
                        <div className={`text-4xl font-light mb-2
                            ${result.maturityLevel === 'Crisis' ? 'text-red-400' :
                                result.maturityLevel === 'Stabilising' ? 'text-yellow-400' : 'text-green-400'}
                        `}>
                            {result.maturityLevel}
                        </div>
                        <div className="text-xs uppercase tracking-widest text-[var(--color-text-muted)]">
                            Maturity Level
                        </div>
                    </div>
                    <div>
                        <div className="text-4xl font-light text-[var(--color-text-primary)] mb-2">
                            {result.riskAreas.length}
                        </div>
                        <div className="text-xs uppercase tracking-widest text-[var(--color-text-muted)]">
                            Critical Risks
                        </div>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                        onClick={() => setIsContactFormOpen(true)}
                        className="btn-primary text-lg px-8"
                    >
                        <Mail className="w-5 h-5" />
                        Discuss Strategy with Rob
                    </button>
                    <button onClick={onRetake} className="btn-secondary px-8">
                        <RefreshCcw className="w-4 h-4" />
                        Retake Assessment
                    </button>
                </div>
            </motion.div>

            {/* Risk Areas & Evidence - Gated */}
            {result.riskAreas.length > 0 && (
                <div className="space-y-8 relative">
                    <h3 className="text-2xl font-light text-[var(--color-text-primary)] mb-6 px-4 border-l-2 border-[var(--color-accent)]">
                        Critical Focus Areas
                    </h3>

                    {isUnlocked ? (
                        // UNLOCKED VIEW: Show full details
                        <>
                            {result.riskAreas.map((risk, i) => (
                                <motion.div
                                    key={risk.competencyId}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="glass-card p-8 md:p-10 border-l-4 border-l-red-500/50"
                                >
                                    <div className="flex items-start justify-between mb-6">
                                        <div>
                                            <div className="flex items-center gap-3 mb-2">
                                                <AlertTriangle className="w-5 h-5 text-red-400" />
                                                <h4 className="text-xl font-medium text-[var(--color-text-primary)]">
                                                    {risk.title}
                                                </h4>
                                            </div>
                                            <p className="text-[var(--color-text-secondary)] font-light">
                                                {risk.recommendation}
                                            </p>
                                        </div>
                                    </div>

                                    {risk.relevantEvidence && (
                                        <div className="mt-8 bg-[var(--color-void)] rounded-lg border border-[var(--color-border-subtle)] overflow-hidden">
                                            <div className="p-6">
                                                <div className="flex items-center gap-2 mb-3 text-[var(--color-accent)]">
                                                    <CheckCircle className="w-4 h-4" />
                                                    <span className="text-xs font-bold tracking-widest uppercase">In My Experience</span>
                                                </div>
                                                <p className="text-md text-[var(--color-text-primary)] mb-4 italic font-light">
                                                    "{risk.relevantEvidence.reason}"
                                                </p>

                                                <button
                                                    onClick={() => toggleRisk(risk.competencyId)}
                                                    className="text-xs uppercase tracking-widest text-[var(--color-text-muted)] hover:text-[var(--color-accent)] flex items-center gap-1 transition-colors"
                                                >
                                                    {expandedRisks.includes(risk.competencyId) ? (
                                                        <>Collapse Case Study <ChevronUp className="w-3 h-3" /></>
                                                    ) : (
                                                        <>Read Case Study <ChevronDown className="w-3 h-3" /></>
                                                    )}
                                                </button>
                                            </div>

                                            <AnimatePresence>
                                                {expandedRisks.includes(risk.competencyId) && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: 'auto', opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        className="bg-[var(--color-surface)] border-t border-[var(--color-border-subtle)]"
                                                    >
                                                        <div className="p-6 text-sm text-[var(--color-text-secondary)] leading-relaxed">
                                                            <div className="mb-2 font-medium text-[var(--color-text-primary)]">
                                                                {risk.relevantEvidence.project.title} - {risk.relevantEvidence.phase.title}
                                                            </div>
                                                            {risk.relevantEvidence.phase.description}
                                                            {risk.relevantEvidence.phase.outcome && (
                                                                <div className="mt-4 pt-4 border-t border-[var(--color-border-subtle)] text-[var(--color-accent)]">
                                                                    <strong>Outcome:</strong> {risk.relevantEvidence.phase.outcome}
                                                                </div>
                                                            )}
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    )}
                                </motion.div>
                            ))}
                        </>
                    ) : (
                        // LOCKED VIEW: Show blurred previews and CTA
                        <div className="relative">
                            <div className="opacity-50 blur-sm select-none pointer-events-none space-y-8">
                                {[1, 2].map((i) => (
                                    <div key={i} className="glass-card p-8 md:p-10 border-l-4 border-l-zinc-700">
                                        <div className="flex items-start justify-between mb-6">
                                            <div>
                                                <div className="flex items-center gap-3 mb-2">
                                                    <AlertTriangle className="w-5 h-5 text-zinc-500" />
                                                    <div className="h-6 w-48 bg-white/10 rounded"></div>
                                                </div>
                                                <div className="h-4 w-full bg-white/5 rounded mb-2"></div>
                                                <div className="h-4 w-2/3 bg-white/5 rounded"></div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Unlock CTA Card */}
                            <div className="absolute inset-0 z-10 flex items-center justify-center">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="bg-[#0a0a0a] border border-[var(--color-accent)]/30 rounded-xl p-8 max-w-md w-full shadow-[0_0_50px_-20px_var(--color-accent)] text-center m-4"
                                >
                                    <Lock className="w-12 h-12 text-[var(--color-accent)] mx-auto mb-4" />
                                    <h3 className="text-2xl font-light text-white mb-2">Unlock Your Full Report</h3>
                                    <p className="text-[var(--color-text-secondary)] mb-6">
                                        You have identified {result.riskAreas.length} critical risks in your programme.
                                        Enter your email to reveal the detailed breakdown and evidence-based recommendations.
                                    </p>
                                    <button
                                        onClick={() => setIsContactFormOpen(true)}
                                        className="btn-primary w-full justify-center text-lg"
                                    >
                                        Unlock Analysis
                                    </button>
                                </motion.div>
                            </div>
                        </div>
                    )}
                </div>
            )}

            {/* Contact Form Modal - Configured as Unlocker when needed */}
            <ContactFormModal
                isOpen={isContactFormOpen}
                onClose={() => setIsContactFormOpen(false)}
                title={isUnlocked ? "Discuss Your Strategy" : "Unlock Full Report"}
                submitLabel={isUnlocked ? "Send Message" : "Unlock Analysis"}
                initialMessage={isUnlocked
                    ? `I'd like to discuss my diagnostic results (Score: ${result.overallScore}%, Maturity: ${result.maturityLevel}).`
                    : "Please send me my full diagnostic report."}
                onSuccess={() => setIsUnlocked(true)}
            />
        </div>
    );
};
