import { motion } from 'framer-motion';
import type { DiagnosticQuestion } from '../../data/diagnostic_engine';

interface QuestionCardProps {
    question: DiagnosticQuestion;
    currentValue: number | null;
    onSelect: (value: number) => void;
    index: number;
    total: number;
}

export const QuestionCard = ({ question, currentValue, onSelect, index, total }: QuestionCardProps) => {
    return (
        <div className="w-full max-w-3xl mx-auto">
            {/* Progress */}
            <div className="flex justify-between text-sm text-[var(--color-text-muted)] mb-8 font-light">
                <span>Competency {index + 1} of {total}</span>
                <span>{Math.round(((index) / total) * 100)}% Complete</span>
            </div>

            <motion.div
                key={question.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className=""
            >
                <div className="mb-8 text-center">
                    <span className="overline mb-2 block text-[var(--color-accent)]">{question.title}</span>
                    <h3 className="text-2xl font-light text-[var(--color-text-primary)]">
                        {question.context}
                    </h3>
                </div>

                <div className="flex flex-col gap-4">
                    {question.options.map((option) => (
                        <button
                            key={option.level}
                            onClick={() => onSelect(option.value)}
                            className={`group relative p-6 text-left rounded-lg border transition-all duration-300
                                ${currentValue === option.value
                                    ? 'bg-[var(--color-accent-subtle)] border-[var(--color-accent)]'
                                    : 'glass-card border-[var(--color-border-subtle)] hover:border-[var(--color-text-muted)] hover:bg-[var(--color-surface-elevated)]'
                                }`}
                        >
                            <div className="flex items-start gap-4">
                                <div className={`mt-1 w-4 h-4 rounded-full border flex-shrink-0 flex items-center justify-center
                                    ${currentValue === option.value
                                        ? 'border-[var(--color-accent)]'
                                        : 'border-[var(--color-text-muted)] group-hover:border-[var(--color-text-primary)]'
                                    }`}>
                                    {currentValue === option.value && (
                                        <div className="w-2 h-2 rounded-full bg-[var(--color-accent)]" />
                                    )}
                                </div>
                                <div>
                                    <p className={`text-sm tracking-widest uppercase mb-1 font-medium
                                        ${option.level === 'Crisis' ? 'text-red-400' :
                                            option.level === 'Stabilising' ? 'text-yellow-400' : 'text-green-400'}
                                    `}>
                                        {option.level}
                                    </p>
                                    <p className={`font-light leading-relaxed
                                        ${currentValue === option.value ? 'text-[var(--color-text-primary)]' : 'text-[var(--color-text-secondary)]'}
                                    `}>
                                        {option.text}
                                    </p>
                                </div>
                            </div>
                        </button>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};
