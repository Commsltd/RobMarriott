import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { DIAGNOSTIC_QUESTIONS, calculateDeepResult } from '../../data/diagnostic_engine';
import type { DiagnosticResult } from '../../data/diagnostic_engine';
import { QuestionCard } from './QuestionCard';
import { ResultsView } from './ResultsView';

export const DiagnosticWizard = () => {
    const [started, setStarted] = useState(false);
    const [currentStep, setCurrentStep] = useState(0);
    const [answers, setAnswers] = useState<Record<string, number>>({});
    const [result, setResult] = useState<DiagnosticResult | null>(null);

    const handleStart = () => setStarted(true);

    const handleAnswer = (value: number) => {
        const question = DIAGNOSTIC_QUESTIONS[currentStep];
        const newAnswers = { ...answers, [question.id]: value };
        setAnswers(newAnswers);

        if (currentStep < DIAGNOSTIC_QUESTIONS.length - 1) {
            setTimeout(() => setCurrentStep(currentStep + 1), 300);
        } else {
            setTimeout(() => {
                setResult(calculateDeepResult(newAnswers));
            }, 500);
        }
    };

    const handleRetake = () => {
        setStarted(false);
        setCurrentStep(0);
        setAnswers({});
        setResult(null);
    };

    if (result) {
        return <ResultsView result={result} onRetake={handleRetake} />;
    }

    if (!started) {
        return (
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-2xl mx-auto text-center"
            >
                <span className="metric-chip mb-6">Free Assessment</span>
                <h1 className="display-heading mb-6">Internal Audit</h1>
                <p className="text-xl text-[var(--color-text-secondary)] font-light mb-8">
                    Assess your programme against 13 critical competencies.
                    Identify hidden risks, governance gaps, and delivery blockers in 5 minutes.
                </p>
                <button onClick={handleStart} className="btn-primary text-xl px-12 py-4">
                    Start Assessment <ArrowRight className="w-6 h-6" />
                </button>
            </motion.div>
        );
    }

    const question = DIAGNOSTIC_QUESTIONS[currentStep];

    return (
        <AnimatePresence mode="wait">
            <QuestionCard
                key={question.id}
                question={question}
                currentValue={answers[question.id] || null}
                onSelect={handleAnswer}
                index={currentStep}
                total={DIAGNOSTIC_QUESTIONS.length}
            />
        </AnimatePresence>
    );
};
