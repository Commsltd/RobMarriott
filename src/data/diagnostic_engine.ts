
import { COMPETENCIES, PROJECTS } from './portfolio';
import type { Project, ProjectPhase } from './portfolio';

// Maturity Levels
export type MaturityLevel = 'Crisis' | 'Stabilising' | 'Thriving';

// Answer Option
export interface DiagnosticOption {
    level: MaturityLevel;
    text: string;
    value: number; // 1 (Crisis), 3 (Stabilising), 5 (Thriving)
}

// Question Structure
export interface DiagnosticQuestion {
    id: string; // matches competency id
    title: string;
    context: string; // The "What we are looking for"
    options: DiagnosticOption[];
}

// Result Structure
export interface DiagnosticResult {
    overallScore: number;
    maturityLevel: MaturityLevel;
    headline: string;
    summary: string;
    riskAreas: DiagnosticRisk[];
}

export interface DiagnosticRisk {
    competencyId: string;
    title: string;
    score: number;
    recommendation: string;
    relevantEvidence?: {
        project: Project;
        phase: ProjectPhase;
        reason: string;
    };
}

// --- GENERATING QUESTIONS FROM PORTFOLIO DATA ---

// --- CUSTOM QUESTION DEFINITIONS (Problem-Centric for Lead Gen) ---

// --- CUSTOM QUESTION DEFINITIONS (Top 5 Consulting Standard) ---

const CUSTOM_DEFINITIONS: Record<string, {
    context: string;
    crisisText: string;
    stabilisingText: string;
    thrivingText: string;
}> = {
    'c1': {
        context: "Does your strategy actively unify decision-making across the organisation?",
        crisisText: "No. Conflicting agendas cause resource waste and paralysis.",
        stabilisingText: "Partially. We have a vision, but it disconnects at the operational level.",
        thrivingText: "Yes. Every key decision aligns with our long-term vision."
    },
    'c2': {
        context: "Are your high-stakes programmes delivering on time, on budget, and to scope?",
        crisisText: "No. features are cut, deadlines missed, or costs spiral.",
        stabilisingText: "Inconsistent. We deliver, but at high personal cost and stress to the team.",
        thrivingText: "Yes. Governance ensures predictable, high-value delivery."
    },
    'c3': {
        context: "Is your organisation capable of sustaining complex behavioural change?",
        crisisText: "No. Change initiatives fatigue the organisation and fail to stick.",
        stabilisingText: "Surface-level. We change processes, but mindsets remain stuck in old ways.",
        thrivingText: "Yes. We diagnose root causes and embed lasting new behaviours."
    },
    'c4': {
        context: "Does your L&D investment directly drive commercial performance?",
        crisisText: "No. Training is a compliance exercise with unclear ROI.",
        stabilisingText: "Ad-hoc. Individuals learn, but it doesn't build organisational capability.",
        thrivingText: "Yes. Learning is integrated with business goals and directly accelerates execution."
    },
    'c5': {
        context: "Do you solve problems permanently, or do they keep recurring?",
        crisisText: "Recurring. We treat symptoms, so the same issues resurface.",
        stabilisingText: "Reactive. We fix problems effectively, but rarely prevent them.",
        thrivingText: "Permanently. We use rigorous inquiry to fix the root dysfunction."
    },
    'c6': {
        context: "Is your culture an accelerator or a blocker for strategy?",
        crisisText: "Blocker. Low psychological safety and resistance stall progress.",
        stabilisingText: "Neutral. People comply with change but don't champion or own it.",
        thrivingText: "Accelerator. Trust and alignment speed up adoption."
    },
    'c7': {
        context: "Do stakeholders across the business trust and support your agenda?",
        crisisText: "No. Politics and silos undermine our ability to execute.",
        stabilisingText: "Transactional. Support exists only when immediate interests align.",
        thrivingText: "Yes. We have strong coalitions and shared objectives."
    },
    'c8': {
        context: "Are strategic decisions backed by defensible, integrated data?",
        crisisText: "No. We rely on gut feel or fragmented, unreliable reports.",
        stabilisingText: "Data-rich, Insight-poor. We have dashboards, but they don't drive action.",
        thrivingText: "Yes. Integrated evidence drives all investment decisions."
    },
    'c9': {
        context: "Are your operational systems lean, transparent, and efficient?",
        crisisText: "No. Bureaucracy and manual work obscure accountability.",
        stabilisingText: "Functional but Heavy. Systems work, but require excessive manual intervention.",
        thrivingText: "Yes. Systems are optimized to minimize waste and maximize flow."
    },
    'c10': {
        context: "Do your leaders consistently model high-performance behaviours?",
        crisisText: "No. Inconsistency or toxicity burns out our best talent.",
        stabilisingText: "Variable. Some pockets of excellence exist alongside legacy behaviours.",
        thrivingText: "Yes. Leadership is a force multiplier for team resilience."
    },
    'c11': {
        context: "Does your strategic narrative secure instant executive buy-in?",
        crisisText: "No. We struggle to articulate the 'why' and gain traction.",
        stabilisingText: "Understood but Unfelt. The logic is clear, but the emotional buy-in is missing.",
        thrivingText: "Yes. Our communication shapes the boardroom agenda."
    },
    'c12': {
        context: "Are you proactively managing systemic risks and interdependencies?",
        crisisText: "No. We are frequently blindsided by predictable issues.",
        stabilisingText: "Silocated. Risks are managed within teams, but cross-functional threats are missed.",
        thrivingText: "Yes. We anticipate threats and mitigate them before impact."
    },
    'c13': {
        context: "Is governance a strategic enabler or a bureaucratic checkbox?",
        crisisText: "Checkbox. Accountability is unclear and standards slip.",
        stabilisingText: "Rigid. Governance exists but slows down decision-making flexibility.",
        thrivingText: "Enabler. Clear frameworks empower rapid, safe decision-making."
    }
};

export const DIAGNOSTIC_QUESTIONS: DiagnosticQuestion[] = COMPETENCIES.map(comp => {
    const custom = CUSTOM_DEFINITIONS[comp.id];

    return {
        id: comp.id,
        title: comp.title,
        context: custom ? custom.context : comp.description,
        options: [
            {
                level: 'Crisis',
                text: custom ? custom.crisisText : comp.insight.challenge,
                value: 1
            },
            {
                level: 'Stabilising',
                text: custom ? custom.stabilisingText : "We have some structures in place, but consistency and deep alignment are missing.",
                value: 3
            },
            {
                level: 'Thriving',
                text: custom ? custom.thrivingText : comp.insight.solution,
                value: 5
            }
        ]
    };
});

// --- SCORING ENGINE ---

export const calculateDeepResult = (answers: Record<string, number>): DiagnosticResult => {
    const totalScore = Object.values(answers).reduce((a, b) => a + b, 0);
    const maxScore = Object.keys(answers).length * 5;
    const percentage = (totalScore / maxScore) * 100;

    let level: MaturityLevel = 'Crisis';
    let headline = "Immediate Intervention Required";
    let summary = "Your programme is showing significant signs of distress. Core pillars of governance and leadership need urgent attention.";

    if (percentage > 40) {
        level = 'Stabilising';
        headline = "Foundations Exist, But Risks Remain";
        summary = "You have the basics in place, but the programme lacks the scalability and resilience to deliver long-term value.";
    }
    if (percentage > 80) {
        level = 'Thriving';
        headline = "High Performance Detected";
        summary = "Your programme is operating at an elite level. Focus now shifts to optimization and legacy.";
    }

    // Identify Risks (Scores <= 3)
    const riskAreas: DiagnosticRisk[] = Object.entries(answers)
        .filter(([_, score]) => score <= 3) // Crisis or Stabilising
        .map(([id, score]) => {
            const comp = COMPETENCIES.find(c => c.id === id)!;

            // Find relevant evidence (Project Phase with this tag)
            // Algo: Prioritize phases with a defined 'outcome' (strongest proof)
            let evidence: { project: Project; phase: ProjectPhase; reason: string; stat?: string } | undefined;

            const candidates: { project: Project; phase: ProjectPhase }[] = [];

            for (const proj of PROJECTS) {
                const phases = proj.phases.filter(p => p.tags.includes(id));
                phases.forEach(p => candidates.push({ project: proj, phase: p }));
            }

            // Sort by impact (has outcome > no outcome)
            candidates.sort((a, b) => {
                const aHasOutcome = !!a.phase.outcome;
                const bHasOutcome = !!b.phase.outcome;
                if (aHasOutcome && !bHasOutcome) return -1;
                if (!aHasOutcome && bHasOutcome) return 1;
                return 0;
            });

            const bestMatch = candidates[0];

            if (bestMatch) {
                // Synthesis: Construct the "Hook" using Solution + Result
                // Anonymized: Focus on the "What" and "How", not the "Who"
                const resultStat = bestMatch.phase.outcome || comp.insight.stat;

                evidence = {
                    project: bestMatch.project,
                    phase: bestMatch.phase,
                    reason: `${comp.insight.solution} Result: ${resultStat || "Significantly improved operational maturity."}`,
                    stat: resultStat
                };
            }

            return {
                competencyId: id,
                title: comp.title,
                score,
                recommendation: comp.insight.solution,
                relevantEvidence: evidence
            };
        }).sort((a, b) => a.score - b.score)
        .slice(0, 3);

    return {
        overallScore: Math.round(percentage),
        maturityLevel: level,
        headline,
        summary,
        riskAreas
    };
};
