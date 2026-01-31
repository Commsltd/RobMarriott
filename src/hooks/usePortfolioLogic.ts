import { useState } from 'react';
import { COMPETENCIES, PROJECTS, type ProjectPhase, type Competency } from '../data/portfolio';

// The verified Logic State Machine states
type ViewState = 'IDLE' | 'SUMMARY' | 'EVIDENCE' | 'DETAIL';

interface PortfolioState {
    view: ViewState;
    selectedCompetency: Competency | null;
    filteredPhases: ProjectPhase[];
    selectedPhase: ProjectPhase | null;
    contextParams?: {
        relatedProjectInfo?: string;
    };
}

export const usePortfolioLogic = () => {
    const [state, setState] = useState<PortfolioState>({
        view: 'IDLE',
        selectedCompetency: null,
        filteredPhases: [],
        selectedPhase: null,
    });

    // Action: Select Competency (Logic: Homepage -> Summary)
    const selectCompetency = (competencyId: string) => {
        const competency = COMPETENCIES.find(c => c.id === competencyId);
        if (!competency) return;

        // Filter evidence based on the tag logic
        const evidence: ProjectPhase[] = [];
        PROJECTS.forEach(proj => {
            proj.phases.forEach(phase => {
                if (phase.tags.includes(competencyId)) {
                    evidence.push({ ...phase, title: `${proj.title} - ${phase.title}` }); // Contextualizing title
                }
            });
        });

        setState({
            view: 'SUMMARY',
            selectedCompetency: competency,
            filteredPhases: evidence,
            selectedPhase: null
        });
    };

    // Action: Show Proof (Logic: Summary -> Filtered Evidence)
    const showProof = () => {
        setState(prev => ({ ...prev, view: 'EVIDENCE' }));
    };

    // Action: View Detail (Logic: Evidence -> Detail)
    const viewDetail = (phaseId: string) => {
        const phase = state.filteredPhases.find(p => p.id === phaseId);
        if (phase) {
            setState(prev => ({ ...prev, view: 'DETAIL', selectedPhase: phase }));
        }
    };

    // Action: Reset (Logic: * -> Idle)
    const reset = () => {
        setState({
            view: 'IDLE',
            selectedCompetency: null,
            filteredPhases: [],
            selectedPhase: null
        });
    };

    return {
        state,
        actions: {
            selectCompetency,
            showProof,
            viewDetail,
            reset
        }
    };
};
