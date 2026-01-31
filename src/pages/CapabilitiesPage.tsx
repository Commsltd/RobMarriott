
import { useState, useMemo } from 'react';
import { SEO } from '../components/seo/SEO';
import { SchemaOrg } from '../components/seo/SchemaOrg';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ArrowLeft, ArrowRight, RotateCcw, Target, Lightbulb, Award, LayoutGrid, CheckCircle2,
    Compass, Layout, GitMerge, GraduationCap, Briefcase,
    Users, Zap, MessageSquare, ShieldCheck, DivideCircle
} from 'lucide-react';
import { Header } from '../components/layout/Header';
import { CompetencyGrid } from '../components/matrix/CompetencyGrid';
import { PROJECTS } from '../data/portfolio';
import { COMPETENCIES } from '../data/portfolio';
import type { Competency, Project, ProjectPhase } from '../data/portfolio';

// =============================================================================
// ICONS & HELPERS
// =============================================================================

const ICON_MAP: Record<string, React.ElementType> = {
    'c1': Compass,          // Strategic Leadership
    'c2': Layout,           // Programme Management
    'c3': GitMerge,         // Org Development
    'c4': GraduationCap,    // L&D
    'c5': Briefcase,        // Consultancy
    'c7': Users,            // Stakeholder Engagement
    'c9': Zap,              // Ops Excellence
    'c11': MessageSquare,   // Communication
    'c13': ShieldCheck      // Governance
};

const getProjectsForCompetency = (competencyId: string): Project[] => {
    return PROJECTS.filter(p =>
        p.phases.some(phase => phase.tags.includes(competencyId))
    );
};

const getPhasesForCompetency = (competencyId: string) => {
    const phases: { project: Project; phase: ProjectPhase }[] = [];
    PROJECTS.forEach(project => {
        project.phases.forEach(phase => {
            if (phase.tags.includes(competencyId)) {
                phases.push({ project, phase });
            }
        });
    });
    return phases;
};

// =============================================================================
// SHARED COMPONENTS
// =============================================================================

// Reusable Glass Card Component
/* Updated to match CompetencyCard styling: cleaner, sharper, darker */
const GlassCard = ({
    children,
    className = "",
    index,
    onClick,
    interactive = true
}: {
    children: React.ReactNode;
    className?: string;
    index?: number;
    onClick?: () => void;
    interactive?: boolean;
}) => (
    <motion.div
        layout
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index ? index * 0.1 : 0 }}
        onClick={onClick}
        className={`
            relative overflow-hidden p-8
            bg-glass backdrop-blur-liquid border border-white/5 rounded-sm
            ${interactive
                ? 'hover:bg-elevated/80 cursor-pointer group transition-colors duration-300'
                : ''
            }
            ${className}
        `}
    >
        {children}
        {interactive && (
            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-accent opacity-0 group-hover:opacity-100 transition-opacity" />
        )}
    </motion.div>
);

type ViewState = 'grid' | 'summary' | 'evidence';

// =============================================================================
// SUMMARY VIEW
// =============================================================================
const DirectorsSummary = ({
    competency,
    onBack,
    onShowEvidence,
    evidenceCount,
    projects
}: {
    competency: Competency;
    onBack: () => void;
    onShowEvidence: () => void;
    evidenceCount: number;
    projects: Project[];
}) => {
    return (
        <motion.div
            className="max-w-7xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4 }}
        >
            {/* Floating Nav - With Black Text on Green Button */}
            <motion.div
                className="sticky top-24 z-20 mb-12 flex justify-between items-center bg-black/40 backdrop-blur-xl p-2 pl-6 pr-2 rounded-full border border-white/10 max-w-4xl mx-auto shadow-xl"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
                <button
                    onClick={onBack}
                    className="flex items-center gap-2 text-sm text-emerald-100/70 hover:text-white transition-colors"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Matrix
                </button>
                <div className="h-4 w-[1px] bg-white/10" />
                <span className="text-sm font-medium text-white hidden md:block">{competency.title}</span>
                <div className="h-4 w-[1px] bg-white/10 hidden md:block" />
                <button
                    onClick={onShowEvidence}
                    className="btn-primary-sm flex items-center gap-2 px-6 py-2.5 text-xs font-bold rounded-full bg-emerald-500 hover:bg-emerald-400 text-black border-none shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all"
                >
                    View Evidence
                    <ArrowRight className="w-3 h-3" />
                </button>
            </motion.div>

            {/* HEADER BLOCK - OUTSIDE GRID FOR PROPER ALIGNMENT */}
            <div className="mb-12 border-b border-white/10 pb-8">
                <span className="text-emerald-500 font-mono text-sm uppercase tracking-widest mb-4 block">Strategic Capability</span>
                <h1 className="text-5xl md:text-7xl font-light text-white tracking-tighter leading-[1.05]">
                    {competency.title}
                </h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-20">

                {/* Left Column: Strategic Narrative (Typography Only) */}
                <div className="lg:col-span-8 space-y-16">

                    {/* Definition / Intro */}
                    <div className="">
                        <p className="text-xl md:text-2xl text-emerald-100/90 font-light leading-relaxed max-w-2xl">
                            {competency.description}
                        </p>
                    </div>

                    {/* The Narrative Flow - Pure Typography */}
                    <div className="space-y-12">
                        {/* The Challenge */}
                        <section>
                            <h3 className="flex items-center gap-3 text-sm font-bold text-red-500 uppercase tracking-wider mb-4">
                                <Target className="w-4 h-4" />
                                The Challenge
                            </h3>
                            <p className="text-lg md:text-xl text-white/80 leading-relaxed border-l-2 border-red-500/20 pl-6">
                                {competency.insight.challenge}
                            </p>
                        </section>

                        {/* The Methodology */}
                        <section>
                            <h3 className="flex items-center gap-3 text-sm font-bold text-emerald-400 uppercase tracking-wider mb-4">
                                <Lightbulb className="w-4 h-4" />
                                The Methodology
                            </h3>
                            <p className="text-lg md:text-xl text-white/80 leading-relaxed border-l-2 border-emerald-500/20 pl-6">
                                {competency.insight.solution}
                            </p>
                        </section>
                    </div>
                </div>

                {/* Right Column: Proven Application (Card) */}
                <div className="lg:col-span-4 space-y-6">
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        /* No top margin needed now as it aligns with the paragraph in the left column */
                        className="bg-black/40 border border-white/10 rounded-2xl p-8 sticky top-36 backdrop-blur-lg"
                    >

                        <div className="flex items-center gap-3 mb-8">
                            <span className="p-2 rounded-lg bg-[var(--color-gold)]/10 text-[var(--color-gold)]">
                                <Award className="w-5 h-5" />
                            </span>
                            <h3 className="text-sm font-semibold tracking-wider uppercase text-white">
                                Proven Application
                            </h3>
                        </div>

                        <p className="text-sm text-emerald-100/60 mb-6 font-medium">
                            Rob has delivered this recently on:
                        </p>

                        {/* List */}
                        <ul className="space-y-4 mb-10">
                            {projects.slice(0, 5).map(project => (
                                <li key={project.id} className="flex items-start gap-4 group">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-500/40 mt-1 shrink-0 group-hover:text-[var(--color-accent)] transition-colors" />
                                    <div className="text-sm">
                                        <span className="text-emerald-50 group-hover:text-white transition-colors block font-medium">
                                            {project.title}
                                        </span>
                                    </div>
                                </li>
                            ))}
                        </ul>

                        <div className="space-y-4">
                            {/* SIDEBAR GREEN BUTTON - BLACK TEXT */}
                            <button
                                onClick={onShowEvidence}
                                /* Explicit text-black to override any ghost styles */
                                className="w-full bg-emerald-500 hover:bg-emerald-400 text-black border-none shadow-[0_4px_20px_rgba(16,185,129,0.3)] hover:shadow-[0_4px_24px_rgba(16,185,129,0.5)] py-4 flex items-center justify-center gap-2 group text-sm rounded-xl transition-all font-bold cursor-pointer"
                            >
                                Review {evidenceCount} Records
                                <ArrowRight className="w-4 h-4 text-black group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

// =============================================================================
// EVIDENCE VIEW
// =============================================================================
const EvidenceView = ({
    competency,
    phases,
    onBack,
    onReset
}: {
    competency: Competency;
    phases: { project: Project; phase: ProjectPhase }[];
    onBack: () => void;
    onReset: () => void;
}) => {
    // Get the icon for this competency context
    const ContextIcon = ICON_MAP[competency.id] || DivideCircle;

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4 }}
        >
            {/* Header */}
            <div className="mb-12 flex items-center justify-between pb-6 border-b border-white/10">
                <div className="flex items-center gap-6">
                    <button
                        onClick={onBack}
                        className="flex items-center gap-2 text-sm text-emerald-100/60 hover:text-white transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back
                    </button>
                    <span className="text-white/10">|</span>
                    <span className="text-sm text-white font-medium">
                        Evidence Record: <span className="text-[var(--color-accent)] ml-2">{competency.title}</span>
                    </span>
                </div>
                {/* Reset Button (Green per previous request, kept consistent) */}
                <button
                    onClick={onReset}
                    className="flex items-center gap-2 text-sm font-medium text-emerald-400 hover:text-emerald-300 transition-colors bg-emerald-500/10 hover:bg-emerald-500/20 px-4 py-2 rounded-full border border-emerald-500/20"
                >
                    <RotateCcw className="w-3 h-3" />
                    Reset to Matrix
                </button>
            </div>

            {/* Evidence Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {phases.map(({ project, phase }, index) => (
                    <GlassCard
                        key={`${project.id} -${phase.id} `}
                        index={index}
                        interactive={false}
                        className="min-h-[240px] flex flex-col"
                    >
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-[10px] uppercase tracking-widest text-[var(--color-accent)] font-medium bg-emerald-500/10 px-2 py-0.5 rounded">
                                {project.context.split(' ')[0]} Phase
                            </span>
                            {/* Icon for the evidence card */}
                            <div className="p-1.5 rounded-md bg-white/5 text-emerald-400">
                                <ContextIcon className="w-4 h-4" />
                            </div>
                        </div>

                        <h3 className="text-lg font-medium text-white mb-3 leading-snug">
                            {phase.title}
                        </h3>

                        <p className="text-sm text-emerald-100/70 leading-relaxed mb-6 flex-grow">
                            {phase.description}
                        </p>

                        {phase.outcome && (
                            <div className="pt-4 border-t border-white/5 mt-auto">
                                <span className="text-xs font-mono text-[var(--color-gold)] flex items-center gap-2">
                                    <CheckCircle2 className="w-3 h-3" />
                                    {phase.outcome}
                                </span>
                            </div>
                        )}
                    </GlassCard>
                ))}
            </div>

            {phases.length === 0 && (
                <div className="text-center py-24 border border-dashed border-white/10 rounded-3xl bg-white/[0.02]">
                    <p className="text-emerald-100/40">No evidence records digitized for this competency.</p>
                </div>
            )}
        </motion.div>
    );
};

// =============================================================================
// PAGE COMPONENT
// =============================================================================
export const CapabilitiesPage = () => {
    const [viewState, setViewState] = useState<ViewState>('grid');
    const [selectedCompetency, setSelectedCompetency] = useState<Competency | null>(null);

    const projects = useMemo(() => {
        if (!selectedCompetency) return [];
        return getProjectsForCompetency(selectedCompetency.id);
    }, [selectedCompetency]);

    const linkedPhases = useMemo(() => {
        if (!selectedCompetency) return [];
        return getPhasesForCompetency(selectedCompetency.id);
    }, [selectedCompetency]);

    const handleSelect = (id: string) => {
        const comp = COMPETENCIES.find(c => c.id === id);
        if (comp) {
            setSelectedCompetency(comp);
            setViewState('summary');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <div className="min-h-screen bg-[var(--color-void)] text-white font-sans selection:bg-[var(--color-accent)] selection:text-white overflow-x-hidden relative">

            {/* 
                ABSTRACT IMAGE BACKGROUND 
            */}
            <SEO
                title="Strategic Capabilities | Robert Marriott"
                description="Explore the core competencies and methodologies used to deliver high-stakes O2C transformation and leadership development programmes."
                canonical="/capabilities"
            />
            <SchemaOrg
                type="WebSite"
                data={{
                    name: "Robert Marriott - Strategic Capabilities",
                    url: "https://rob-marriott-portfolio.vercel.app/capabilities",
                    description: "Explore the core competencies and methodologies used to deliver high-stakes O2C transformation and leadership development programmes."
                }}
            />
            <div className="fixed inset-0 z-0 pointer-events-none bg-[#020403]">
                {/* Main gradient map */}
                <div className="absolute inset-0 opacity-40 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-900/40 via-[#051010] to-black" />

                {/* Fluid Shape 1 (Top Left) */}
                <div className="absolute top-[-10%] left-[-10%] w-[70vw] h-[70vw] bg-emerald-600/10 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '8s' }} />

                {/* Fluid Shape 2 (Bottom Right) */}
                <div className="absolute bottom-[-10%] right-[-20%] w-[60vw] h-[60vw] bg-teal-900/20 rounded-full blur-[120px]" />

                {/* Sharp Accent Line */}
                <div className="absolute top-[20%] right-[10%] w-[40vw] h-[1px] bg-gradient-to-l from-emerald-500/20 to-transparent rotate-12 blur-[1px]" />

                {/* Noise Overlay */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 contrast-150 brightness-100 mix-blend-overlay" />
            </div>

            <div className="relative z-10">
                <Header />
                <main className="pt-32 pb-24">
                    <div className="container px-6 md:px-12 max-w-7xl mx-auto">

                        {/* Header - Only visible when not in evidence view */}
                        <AnimatePresence>
                            {viewState === 'grid' && (
                                <motion.div
                                    className="max-w-4xl mx-auto text-center mb-20"
                                    initial={{ opacity: 0, y: -20, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, height: 0, marginBottom: 0, overflow: 'hidden' }}
                                    transition={{ duration: 0.5, ease: "easeOut" }}
                                >
                                    <motion.div
                                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium tracking-wide mb-8"
                                    >
                                        <LayoutGrid className="w-3 h-3" />
                                        CORE COMPETENCY MATRIX
                                    </motion.div>

                                    <h1 className="text-5xl md:text-7xl font-light tracking-tighter mb-8 text-white">
                                        Strategic <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">Capabilities</span>
                                    </h1>
                                    <p className="text-xl text-emerald-100/60 font-light max-w-2xl mx-auto leading-relaxed">
                                        The proprietary methodology deployed across 20+ years of high-stakes programme delivery.
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <AnimatePresence mode="wait">
                            {viewState === 'grid' && (
                                <CompetencyGrid onSelect={handleSelect} />
                            )}
                            {viewState === 'summary' && selectedCompetency && (
                                <DirectorsSummary
                                    competency={selectedCompetency}
                                    onBack={() => {
                                        setViewState('grid');
                                        setTimeout(() => setSelectedCompetency(null), 500);
                                    }}
                                    onShowEvidence={() => setViewState('evidence')}
                                    evidenceCount={linkedPhases.length}
                                    projects={projects}
                                />
                            )}
                            {viewState === 'evidence' && selectedCompetency && (
                                <EvidenceView
                                    competency={selectedCompetency}
                                    phases={linkedPhases}
                                    onBack={() => setViewState('summary')}
                                    onReset={() => {
                                        setViewState('grid');
                                        setTimeout(() => setSelectedCompetency(null), 500);
                                    }}
                                />
                            )}
                        </AnimatePresence>

                    </div>
                </main>
            </div>
        </div>
    );
};
