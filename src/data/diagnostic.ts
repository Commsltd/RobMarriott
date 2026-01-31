import { COMPETENCIES } from './portfolio';

export interface DiagnosticQuestion {
    id: string;
    competencyId: string;
    title: string;
    question: string;
    lowImpact: string; // "Current state" description for low score
    highImpact: string; // "Future state" description for high score
}

const CUSTOM_QUESTIONS: Record<string, string> = {
    'c1': "To what extent is your long-term vision translated into coherent strategies that unify decision-making?",
    'c2': "How effective is your organisation at balancing cost, time, quality, risk, and scope in high-stakes programmes?",
    'c3': "How well does your organisation diagnose root causes to embed sustainable behavioural change?",
    'c4': "How aligned are your learning strategies with professional standards and commercial reality?",
    'c5': "How rigorous is your inquiry process in identifying underlying dysfunction before acting?",
    'c6': "How effectively do you manage the psychological safety and strategic alignment required for adoption?",
    'c7': "How strong is the trust and alignment within your diverse stakeholder groups?",
    'c8': "To what extent are your strategic decisions grounded in integrated qualitative and quantitative evidence?",
    'c9': "How optimized are your systems for reducing waste and strengthening operational capability?",
    'c10': "How consistent is the role-modeling of emotionally intelligent leadership across your teams?",
    'c11': "How effective are your narratives in securing executive alignment and shaping decision-making?",
    'c12': "How proactive is your strategy for identifying interdependencies and preventing failure?",
    'c13': "How robust are your frameworks for clarifying roles, responsibilities, and decision pathways?"
};

export const DIAGNOSTIC_QUESTIONS: DiagnosticQuestion[] = COMPETENCIES.map(c => ({
    id: c.id,
    competencyId: c.id,
    title: c.title,
    question: CUSTOM_QUESTIONS[c.id] || `How effective is your organisation at ${c.title.toLowerCase()}?`,
    lowImpact: c.insight.challenge,
    highImpact: c.insight.solution
}));

export interface DiagnosticResult {
    score: number; // 0-5
    level: 'Crisis' | 'Strain' | 'Stable' | 'High Performance';
    summary: string;
    recommendation: string;
}

export const calculateResult = (scores: Record<string, number>): DiagnosticResult => {
    const values = Object.values(scores);
    if (values.length === 0) return { score: 0, level: 'Crisis', summary: '', recommendation: '' };

    const avg = values.reduce((a, b) => a + b, 0) / values.length;

    if (avg < 2.5) return {
        score: avg,
        level: 'Crisis',
        summary: 'Your programme is at significant risk of failure or cancellation.',
        recommendation: 'Immediate intervention required to rebuild stakeholder trust and stabilize delivery.'
    };

    if (avg < 3.5) return {
        score: avg,
        level: 'Strain',
        summary: 'Your programme is functional but under severe pressure.',
        recommendation: 'Focus on governance and capability architecture to prevent burnout and drift.'
    };

    if (avg < 4.5) return {
        score: avg,
        level: 'Stable',
        summary: 'Your programme is delivering value but lacks strategic scale.',
        recommendation: 'Shift focus from delivery to strategic alignment and board-level advocacy.'
    };

    return {
        score: avg,
        level: 'High Performance',
        summary: 'Your programme is a strategic asset to the business.',
        recommendation: 'Focus on innovation and external benchmarking to maintain leadership.'
    };
};
