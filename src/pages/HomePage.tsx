import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, CheckCircle, TrendingUp, Users, Target, Award, Mail, Linkedin, ChevronRight, ClipboardCheck, BarChart3, AlertTriangle } from 'lucide-react';
import { PROFILE, COACHING_SERVICES, TESTIMONIALS } from '../data/portfolio';
import robertHeadshot from '../assets/robert-headshot.png';
import { ContactFormModal } from '../components/ContactFormModal';
import { SEO } from '../components/seo/SEO';
import { SchemaOrg } from '../components/seo/SchemaOrg';
import CountUp from '../components/CountUp';
import { useMotionValue, useTransform } from 'framer-motion';

console.log('HomePage.tsx: Module evaluating...');

// =============================================================================
// SECTION 1: HERO - ROB AS GURU
// =============================================================================
// =============================================================================
// SECTION 1: HERO - ROB AS GURU
// =============================================================================
import heroBg from '../assets/hero-training-dynamic.png';

const HeroSection = () => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = (e: React.MouseEvent) => {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        mouseX.set(clientX / innerWidth - 0.5);
        mouseY.set(clientY / innerHeight - 0.5);
    };

    const glowX = useTransform(mouseX, [-0.5, 0.5], [-20, 20]);
    const glowY = useTransform(mouseY, [-0.5, 0.5], [-20, 20]);

    return (
        <section
            className="relative min-h-screen flex items-center overflow-hidden py-20"
            onMouseMove={handleMouseMove}
        >
            {/* Background Image & Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src={heroBg}
                    alt="Corporate Training in Action"
                    className="w-full h-full object-cover object-right"
                />
                <div className="absolute inset-0 bg-gray-900/80" /> {/* Consistent overlay for text legibility */}
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-void)] via-[var(--color-void)]/80 to-transparent" />
            </div>

            {/* Ambient glows */}
            <motion.div
                className="ambient-glow ambient-glow-accent w-[600px] h-[600px] -top-40 -right-40 absolute opacity-50"
                style={{ x: glowX, y: glowY }}
            />

            <div className="container relative z-10">
                <div className="max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <p className="overline mb-6 text-[var(--color-accent)]">Transformational L&D Leadership</p>

                        <h1 className="display-heading mb-8 max-w-3xl">
                            I rescue failing programmes and turn them into <span className="text-[var(--color-accent)]">board-level wins.</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-[var(--color-text-secondary)] font-light leading-relaxed mb-10 max-w-2xl">
                            When your professional development programme is under strain, stakeholders have lost faith, and failure carries real reputational risk - that's when I step in.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mb-10">
                            <a href="/diagnostic" className="btn-primary btn-arrow text-lg group px-8 py-4 bg-[var(--color-accent)] hover:bg-[var(--color-accent)]/90 text-white border-none shadow-[0_0_20px_-5px_var(--color-accent-glow)]">
                                Take the Free Diagnostic
                                <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ml-2" />
                            </a>
                            <a href="#about" className="inline-flex items-center justify-center gap-2 rounded-xl transition-all duration-300 shadow-xl btn-arrow text-lg group px-8 py-4 bg-zinc-700/25 hover:bg-zinc-700/40 text-white font-medium backdrop-blur-md">
                                About My Methodology
                                <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ml-2" />
                            </a>
                        </div>

                        {/* Credibility markers - Re-positioned & Styled */}
                        <div className="flex flex-nowrap gap-16 mt-10 w-full max-w-2xl justify-center">
                            <span className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm font-medium text-[var(--color-text-primary)] backdrop-blur-md shadow-sm">
                                <Award className="w-4 h-4 text-[var(--color-accent)]" />
                                APM Qualified
                            </span>
                            <span className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm font-medium text-[var(--color-text-primary)] backdrop-blur-md shadow-sm">
                                <Award className="w-4 h-4 text-[var(--color-accent)]" />
                                CIPD Level 7
                            </span>
                            <span className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm font-medium text-[var(--color-text-primary)] backdrop-blur-md shadow-sm">
                                <Users className="w-4 h-4 text-[var(--color-accent)]" />
                                200+ Leaders Coached
                            </span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

// =============================================================================
// SECTION 2: DIAGNOSTIC PREVIEW
// =============================================================================
const DiagnosticSection = () => (
    <section id="diagnostic" className="section-void py-24 relative overflow-hidden">
        {/* Ambient glow */}
        <div className="ambient-glow ambient-glow-accent w-[600px] h-[600px] top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 absolute" />

        <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center mb-16">
                <p className="overline mb-4">Free Assessment</p>
                <h2 className="mb-6">The Leadership Readiness Diagnostic</h2>
                <p className="text-lg text-[var(--color-text-secondary)] font-light">
                    In 5 minutes, discover what's really holding your L&D programmes back.
                    Get a personalised action plan based on my proven framework.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
                {[
                    {
                        icon: ClipboardCheck,
                        title: "Leadership Alignment",
                        description: "How well are senior stakeholders aligned on programme vision and investment?"
                    },
                    {
                        icon: BarChart3,
                        title: "Organisational Readiness",
                        description: "Does your organisation have the structures and governance to support change?"
                    },
                    {
                        icon: AlertTriangle,
                        title: "Capability Architecture",
                        description: "Is your programme design fit for purpose and scalable?"
                    },
                ].map((dimension, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="glass-card text-center"
                    >
                        <dimension.icon className="w-10 h-10 text-[var(--color-accent)] mx-auto mb-4" />
                        <h3 className="text-xl font-light mb-2">{dimension.title}</h3>
                        <p className="text-sm text-[var(--color-text-muted)]">{dimension.description}</p>
                    </motion.div>
                ))}
            </div>

            {/* Animated Progress Bar */}
            <motion.div
                className="max-w-md mx-auto mb-12"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
                <div className="flex justify-between text-xs text-[var(--color-text-muted)] mb-2">
                    <span>Diagnostic Progress</span>
                    <span>5 min assessment</span>
                </div>
                <div className="h-2 bg-[var(--color-border-subtle)] rounded-full overflow-hidden">
                    <motion.div
                        className="h-full bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-gold)] rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
                    />
                </div>
            </motion.div>

            <div className="text-center">
                <a
                    href="/diagnostic"
                    className="btn-primary text-lg inline-flex"
                >
                    Take the Free Diagnostic
                    <ArrowUpRight className="w-5 h-5" />
                </a>
                <p className="text-sm text-[var(--color-text-whisper)] mt-4">
                    Takes 5 minutes. No email required. Instant results.
                </p>
            </div>
        </div>
    </section>
);

// =============================================================================
// SECTION 3: THE MARRIOTT METHOD
// =============================================================================
const PipelineSection = () => {
    const [hoveredPhase, setHoveredPhase] = useState<string | null>(null);
    const [hoveredGate, setHoveredGate] = useState<string | null>(null);

    // Three-phase model mapped to Rob's actual methodology
    const phases = [
        {
            id: 'diagnose',
            label: 'DIAGNOSE',
            sub: 'Rapid',
            activities: ['Discovery Phase', 'Data Analytics', 'Survey Redesign', 'Risk Analysis'],
            gate: 'Scope Locked',
            gateDescription: 'All constraints identified. Stakeholder map complete. Trilemma (Cost, Time, Quality, Risk, Scope) equilibrium established.',
            color: 'var(--color-accent)',
            x: 170,
        },
        {
            id: 'align',
            label: 'ALIGN',
            sub: 'Core',
            activities: ['Coalition Building', 'Safe Space Sessions', 'Mind Mapping', 'Stakeholder Sign-off'],
            gate: 'Mandate Signed',
            gateDescription: 'Documented sign-off from stakeholder groups. Budget and timeline locked. Political air-cover confirmed.',
            color: 'var(--color-gold)',
            x: 500,
        },
        {
            id: 'deliver',
            label: 'DELIVER',
            sub: 'Sustain',
            activities: ['Agile/Iterative Build', 'Dashboard Reporting', 'Benefits Realisation', 'Handover Protocol'],
            gate: 'BAU Accepted',
            gateDescription: 'Handover complete. Operations team trained. Success metrics embedded in BAU reporting.',
            color: 'var(--color-accent)',
            x: 830,
        },
    ];

    return (
        <section id="framework" className="section-elevated py-24 lg:py-32 relative overflow-hidden">
            {/* Background ambient effects */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--color-accent)]/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[var(--color-accent)]/3 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4 pointer-events-none" />

            <div className="container relative z-10">
                {/* Header */}
                <div className="max-w-4xl mx-auto text-center mb-16 lg:mb-20">
                    <p className="overline mb-4 text-[var(--color-accent)]">The Methodology</p>
                    <h2 className="display-heading mb-6">The Marriott Method</h2>
                    <p className="text-xl lg:text-2xl text-[var(--color-text-secondary)] font-light leading-relaxed">
                        Most programmes I inherit have already burned their political capital. I spend the first month rebuilding trust before touching delivery.
                    </p>
                </div>

                {/* SVG Pipeline Diagram - 3-Phase Model */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-16 lg:mb-24 relative"
                >
                    <svg viewBox="0 0 1000 380" className="w-full max-w-7xl mx-auto" preserveAspectRatio="xMidYMid meet">
                        <defs>
                            {/* Gradient for the main pipeline */}
                            <linearGradient id="pipelineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0.8" />
                                <stop offset="50%" stopColor="var(--color-gold)" stopOpacity="1" />
                                <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0.8" />
                            </linearGradient>
                            {/* Glow filter */}
                            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                                <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                                <feMerge>
                                    <feMergeNode in="coloredBlur" />
                                    <feMergeNode in="SourceGraphic" />
                                </feMerge>
                            </filter>
                            {/* Hover glow filter */}
                            <filter id="glowHover" x="-50%" y="-50%" width="200%" height="200%">
                                <feGaussianBlur stdDeviation="6" result="coloredBlur" />
                                <feMerge>
                                    <feMergeNode in="coloredBlur" />
                                    <feMergeNode in="SourceGraphic" />
                                </feMerge>
                            </filter>
                            {/* Animated dash for loops */}
                            <style>
                                {`
                                    @keyframes dashFlow {
                                        to { stroke-dashoffset: -40; }
                                    }
                                    @keyframes pulseGlow {
                                        0%, 100% { opacity: 0.3; }
                                        50% { opacity: 0.7; }
                                    }
                                    .loop-line {
                                        animation: dashFlow 2s linear infinite;
                                    }
                                    .pulse-ring {
                                        animation: pulseGlow 2s ease-in-out infinite;
                                    }
                                    .phase-node {
                                        cursor: pointer;
                                        transition: transform 0.2s ease;
                                    }
                                    .phase-node:hover {
                                        transform: scale(1.05);
                                    }
                                    .gate-pill {
                                        cursor: pointer;
                                        transition: opacity 0.2s ease;
                                    }
                                    .gate-pill:hover {
                                        opacity: 1 !important;
                                    }
                                `}
                            </style>
                            {/* Arrow marker */}
                            <marker id="arrowMarker" markerWidth="12" markerHeight="12" refX="10" refY="6" orient="auto">
                                <path d="M 0 0 L 12 6 L 0 12 L 3 6 Z" fill="var(--color-accent)" />
                            </marker>
                            <marker id="arrowMarkerGold" markerWidth="12" markerHeight="12" refX="10" refY="6" orient="auto">
                                <path d="M 0 0 L 12 6 L 0 12 L 3 6 Z" fill="var(--color-gold)" />
                            </marker>
                        </defs>

                        {/* === EVIDENCE LOOP (Top) === */}
                        <g>
                            <path
                                d="M 170 130 Q 500 30 830 130"
                                fill="none"
                                stroke="var(--color-accent)"
                                strokeWidth="2"
                                strokeDasharray="10 8"
                                className="loop-line"
                                opacity="0.5"
                            />
                            {/* Arrowhead on loop */}
                            <path
                                d="M 170 130 L 180 122 L 178 134 Z"
                                fill="var(--color-accent)"
                                opacity="0.7"
                            />
                            <text x="500" y="55" textAnchor="middle" fill="var(--color-accent)" fontSize="13" fontWeight="600" letterSpacing="0.12em">
                                EVIDENCE LOOP
                            </text>
                            <text x="500" y="75" textAnchor="middle" fill="var(--color-text-muted)" fontSize="11">
                                KPI drift triggers constraint re-audit
                            </text>
                        </g>

                        {/* === MAIN PIPELINE TRACK === */}
                        <rect x="120" y="188" width="760" height="4" rx="2" fill="var(--color-border-default)" opacity="0.2" />

                        {/* Animated progress fill */}
                        <motion.rect
                            x="120" y="188" height="4" rx="2"
                            fill="url(#pipelineGradient)"
                            initial={{ width: 0 }}
                            whileInView={{ width: 760 }}
                            transition={{ duration: 2.5, ease: "easeOut" }}
                            viewport={{ once: true }}
                        />

                        {/* === PHASE NODES === */}
                        {phases.map((phase, i) => (
                            <motion.g
                                key={phase.id}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.3 + i * 0.3, duration: 0.5 }}
                                viewport={{ once: true }}
                                className="phase-node"
                                onMouseEnter={() => setHoveredPhase(phase.id)}
                                onMouseLeave={() => setHoveredPhase(null)}
                            >
                                {/* Outer pulse ring */}
                                <circle
                                    cx={phase.x} cy="190" r="55"
                                    fill="none"
                                    stroke={phase.color}
                                    strokeWidth={hoveredPhase === phase.id ? "2" : "1"}
                                    className="pulse-ring"
                                />
                                {/* Main node */}
                                <circle
                                    cx={phase.x} cy="190" r="45"
                                    fill="var(--color-elevated)"
                                    stroke={phase.color}
                                    strokeWidth={hoveredPhase === phase.id ? "4" : "3"}
                                    filter={hoveredPhase === phase.id ? "url(#glowHover)" : "url(#glow)"}
                                />
                                {/* Number */}
                                <text x={phase.x} y="198" textAnchor="middle" fill={phase.color} fontSize="28" fontWeight="700">
                                    {i + 1}
                                </text>
                                {/* Label above */}
                                <text x={phase.x} y="120" textAnchor="middle" fill="white" fontSize="16" fontWeight="600" letterSpacing="0.1em">
                                    {phase.label}
                                </text>
                                {/* Timeframe */}
                                <text x={phase.x} y="270" textAnchor="middle" fill="var(--color-text-muted)" fontSize="12">
                                    {phase.sub}
                                </text>
                                {/* Gate pill - separate hover zone */}
                                <g
                                    className="gate-pill"
                                    onMouseEnter={(e) => { e.stopPropagation(); setHoveredGate(phase.id); }}
                                    onMouseLeave={(e) => { e.stopPropagation(); setHoveredGate(null); }}
                                >
                                    <rect
                                        x={phase.x - (phase.id === 'align' ? 70 : 60)}
                                        y="285"
                                        width={phase.id === 'align' ? 140 : 120}
                                        height="22"
                                        rx="11"
                                        fill={phase.color}
                                        opacity={hoveredGate === phase.id ? 0.4 : 0.15}
                                    />
                                    <text x={phase.x} y="300" textAnchor="middle" fill={phase.color} fontSize="10" fontWeight="500">
                                        {phase.gate.toUpperCase()}
                                    </text>
                                </g>
                            </motion.g>
                        ))}

                        {/* Arrow 1 → 2 */}
                        <motion.path
                            d="M 225 190 L 430 190"
                            fill="none"
                            stroke="var(--color-accent)"
                            strokeWidth="2"
                            markerEnd="url(#arrowMarker)"
                            initial={{ pathLength: 0, opacity: 0 }}
                            whileInView={{ pathLength: 1, opacity: 1 }}
                            transition={{ delay: 0.8, duration: 0.5 }}
                            viewport={{ once: true }}
                        />

                        {/* Arrow 2 → 3 */}
                        <motion.path
                            d="M 555 190 L 760 190"
                            fill="none"
                            stroke="var(--color-gold)"
                            strokeWidth="2"
                            markerEnd="url(#arrowMarkerGold)"
                            initial={{ pathLength: 0, opacity: 0 }}
                            whileInView={{ pathLength: 1, opacity: 1 }}
                            transition={{ delay: 1.1, duration: 0.5 }}
                            viewport={{ once: true }}
                        />

                        {/* === ADOPTION LOOP (Bottom) === */}
                        <g>
                            <path
                                d="M 830 250 Q 500 350 170 250"
                                fill="none"
                                stroke="var(--color-gold)"
                                strokeWidth="2"
                                strokeDasharray="10 8"
                                className="loop-line"
                                opacity="0.5"
                            />
                            {/* Arrowhead on loop */}
                            <path
                                d="M 170 250 L 180 242 L 178 258 Z"
                                fill="var(--color-gold)"
                                opacity="0.7"
                            />
                            <text x="500" y="345" textAnchor="middle" fill="var(--color-gold)" fontSize="13" fontWeight="600" letterSpacing="0.12em">
                                ADOPTION LOOP
                            </text>
                            <text x="500" y="365" textAnchor="middle" fill="var(--color-text-muted)" fontSize="11">
                                Low adoption escalates to sponsor
                            </text>
                        </g>
                    </svg>

                    {/* === TOOLTIP OVERLAYS === */}
                    <AnimatePresence>
                        {hoveredPhase && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                                transition={{ duration: 0.2 }}
                                className="absolute z-20 pointer-events-none"
                                style={{
                                    left: `${phases.find(p => p.id === hoveredPhase)!.x / 10}%`,
                                    top: '35%',
                                    transform: 'translateX(-50%)',
                                }}
                            >
                                <div className="glass-card p-4 border border-[var(--color-border-default)] shadow-xl min-w-[200px]">
                                    <p className="text-xs text-[var(--color-text-muted)] uppercase tracking-wider mb-2">
                                        {phases.find(p => p.id === hoveredPhase)!.label} Activities
                                    </p>
                                    <ul className="space-y-1">
                                        {phases.find(p => p.id === hoveredPhase)!.activities.map((activity, i) => (
                                            <li key={i} className="text-sm text-white flex items-center gap-2">
                                                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" />
                                                {activity}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <AnimatePresence>
                        {hoveredGate && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.2 }}
                                className="absolute z-20 pointer-events-none"
                                style={{
                                    left: `${phases.find(p => p.id === hoveredGate)!.x / 10}%`,
                                    top: '78%',
                                    transform: 'translateX(-50%)',
                                }}
                            >
                                <div className="glass-card p-3 border border-[var(--color-border-default)] shadow-xl max-w-[240px]">
                                    <p className="text-xs font-medium text-[var(--color-accent)] uppercase tracking-wider mb-1">
                                        Gate: {phases.find(p => p.id === hoveredGate)!.gate}
                                    </p>
                                    <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                                        {phases.find(p => p.id === hoveredGate)!.gateDescription}
                                    </p>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>

                {/* Three Differentiators - One per Phase */}
                <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
                    {/* Diagnose Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="glass-card p-6 border-t-4 border-t-[var(--color-accent)]"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/20 flex items-center justify-center">
                                <Target className="w-5 h-5 text-[var(--color-accent)]" />
                            </div>
                            <h3 className="text-lg font-medium text-white">Reality Audit</h3>
                        </div>
                        <p className="text-[var(--color-text-secondary)] leading-relaxed text-sm mb-3">
                            Week 1: I interview 10-15 stakeholders and cross-reference what L&D claims vs. what the business actually experiences. Output: a ranked Constraint Register.
                        </p>
                        <p className="text-sm text-[var(--color-text-secondary)]">
                            <span className="text-[var(--color-accent)] font-medium">APC Result:</span> 70% survey response. Identified 12 root-cause blockers before any build.
                        </p>
                    </motion.div>

                    {/* Align Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="glass-card p-6 border-t-4 border-t-[var(--color-gold)]"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-full bg-[var(--color-gold)]/20 flex items-center justify-center">
                                <Users className="w-5 h-5 text-[var(--color-gold)]" />
                            </div>
                            <h3 className="text-lg font-medium text-white">Coalition Pulse</h3>
                        </div>
                        <p className="text-[var(--color-text-secondary)] leading-relaxed text-sm mb-3">
                            Week 2-4: Safe-space roadshows with every stakeholder group. No mandate until I have documented sign-off from each. Output: Decision Rights matrix.
                        </p>
                        <p className="text-sm text-[var(--color-text-secondary)]">
                            <span className="text-[var(--color-gold)] font-medium">APC Result:</span> Unified 8 UK offices. Secured Westminster invitation. Zero resistance at launch.
                        </p>
                    </motion.div>

                    {/* Deliver Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="glass-card p-6 border-t-4 border-t-[var(--color-accent)]"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/20 flex items-center justify-center">
                                <TrendingUp className="w-5 h-5 text-[var(--color-accent)]" />
                            </div>
                            <h3 className="text-lg font-medium text-white">Constraint Burn-Down</h3>
                        </div>
                        <p className="text-[var(--color-text-secondary)] leading-relaxed text-sm mb-3">
                            Week 5+: Weekly triage on the Constraint Register. Ranked backlog of blockers with decision authority. Measured by how fast constraints die.
                        </p>
                        <p className="text-sm text-[var(--color-text-secondary)]">
                            <span className="text-[var(--color-accent)] font-medium">APC Result:</span> Delivered 3 months early. Pass rate 60% to 90%. Awarded £1.5m expansion.
                        </p>
                    </motion.div>
                </div>

                {/* CTA */}
                <div className="text-center mt-16">
                    <a href="/capabilities" className="btn-secondary group inline-flex items-center gap-2 px-6 py-3 border border-[var(--color-border-default)] hover:border-[var(--color-accent)] rounded-lg transition-all text-sm uppercase tracking-wide">
                        Explore Full Capabilities
                        <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </a>
                </div>
            </div>
        </section>
    );
};

// =============================================================================
// SECTION 3: INSIGHTS
// =============================================================================
const InsightsSection = () => (
    <section id="insights" className="section-void py-24">
        <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-16">
                <p className="overline mb-4">Insights</p>
                <h2 className="mb-6">What I've Learned</h2>
                <p className="text-lg text-[var(--color-text-secondary)] font-light">
                    After rescuing failing programmes and coaching 200+ leaders, here are the patterns I've seen.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {[
                    {
                        title: "Why Programmes Fail",
                        content: "It's rarely about content. It's about fragmented stakeholders, weak governance, and programmes built without understanding how people actually learn.",
                        icon: Target
                    },
                    {
                        title: "The Trust Problem",
                        content: "By the time I'm brought in, trust is already broken. My first job isn't fixing the programme. It's rebuilding the coalition of support.",
                        icon: Users
                    },
                    {
                        title: "Board-Level Language",
                        content: "L&D professionals often struggle to translate their work into commercial impact. I help frame outcomes in terms executives care about.",
                        icon: TrendingUp
                    },
                ].map((insight, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="glass-card"
                    >
                        <insight.icon className="w-8 h-8 text-[var(--color-accent)] mb-4" />
                        <h3 className="text-xl font-light mb-3">{insight.title}</h3>
                        <p className="text-[var(--color-text-muted)] leading-relaxed">{insight.content}</p>
                    </motion.div>
                ))}
            </div>

            {/* Read More CTA */}
            <motion.div
                className="text-center mt-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
            >
                <a
                    href="/insights"
                    className="inline-flex items-center gap-2 text-[var(--color-accent)] hover:text-white transition-colors group"
                >
                    <span>Explore All Insights</span>
                    <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
            </motion.div>
        </div>
    </section>
);

// =============================================================================
// SECTION 4: SOCIAL PROOF
// =============================================================================
const ProofSection = () => (
    <section id="proof" className="section-slab py-24">
        <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-16">
                <p className="overline mb-4">Results</p>
                <h2 className="mb-6">The Numbers Don't Lie</h2>
            </div>

            {/* Stats Strip */}
            <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20 mb-16">
                {/* Custom layout for stats to support CountUp integration manually where mapped */}

                {/* Pass Rate Transformation */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-center"
                >
                    <div className="text-4xl font-thin text-[var(--color-text-primary)] flex items-center justify-center gap-2">
                        <CountUp from={0} to={60} suffix="%" duration={2} />
                        <span className="text-[var(--color-text-muted)] text-2xl">→</span>
                        <CountUp from={0} to={90} suffix="%" duration={2.5} delay={0.5} />
                    </div>
                    <p className="text-sm text-[var(--color-text-muted)] mt-1">Pass Rate Transformation</p>
                </motion.div>

                {/* Leaders Coached */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-center"
                >
                    <div className="text-4xl font-thin text-[var(--color-text-primary)]">
                        <CountUp from={0} to={200} suffix="+" duration={2} />
                    </div>
                    <p className="text-sm text-[var(--color-text-muted)] mt-1">Leaders Coached</p>
                </motion.div>

                {/* Budget Secured */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="text-center"
                >
                    <div className="text-4xl font-thin text-[var(--color-text-primary)]">
                        £<CountUp from={0} to={1.5} decimals={1} suffix="M" duration={2} />
                    </div>
                    <p className="text-sm text-[var(--color-text-muted)] mt-1">Budget Secured</p>
                </motion.div>

                {/* Professionals Reached */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="text-center"
                >
                    <div className="text-4xl font-thin text-[var(--color-text-primary)]">
                        <CountUp from={0} to={5000} duration={2.5} />
                    </div>
                    <p className="text-sm text-[var(--color-text-muted)] mt-1">Professionals Reached</p>
                </motion.div>
            </div>

            {/* Featured Case */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-card p-8 md:p-12 max-w-4xl mx-auto"
            >
                <div className="grid md:grid-cols-2 gap-8 items-start">
                    <div>
                        <span className="metric-chip mb-4">Featured: RICS Chartership</span>
                        <h3 className="text-2xl font-light mb-4">A Programme on Its Knees</h3>
                        <p className="text-[var(--color-text-secondary)] font-light mb-6">
                            When I took over, the national APC programme was struggling with a 60% pass rate,
                            fragmented stakeholder support, and declining engagement. The programme's credibility was at stake.
                        </p>
                        <div className="space-y-3">
                            {[
                                'Rebuilt stakeholder coalition from the ground up',
                                'Redesigned assessment pathways for clarity and rigour',
                                'Secured £1.5M in board-level investment',
                                'Scaled from 500 to 5000 candidates nationally'
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <CheckCircle className="w-4 h-4 text-[var(--color-accent)] flex-shrink-0 mt-1" />
                                    <span className="text-sm text-[var(--color-text-secondary)]">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="border-l border-[var(--color-border-subtle)] pl-8 pt-16">
                        <blockquote className="text-xl font-thin italic text-[var(--color-text-secondary)] mb-6">
                            "Within a year, the average pass rate went up to 90%. A huge win for the programme and the profession."
                        </blockquote>
                        <p className="text-sm text-[var(--color-text-whisper)]">
                            {COACHING_SERVICES[1].testimonialHighlight}
                        </p>
                    </div>
                </div>
            </motion.div>


            {/* Social Proof - 2026 Editorial Design */}
            <motion.div
                className="mt-32 relative"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
            >
                {/* Subtle gradient backdrop */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--color-accent)]/[0.02] to-transparent pointer-events-none" />

                <div className="relative max-w-4xl mx-auto text-center">
                    {/* Impact Stats Row */}
                    <div className="flex justify-center gap-12 md:gap-20 mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-center"
                        >
                            <div className="text-4xl md:text-5xl font-light text-white mb-1">
                                <CountUp from={0} to={200} suffix="+" duration={2} />
                            </div>
                            <div className="text-xs uppercase tracking-[0.2em] text-[var(--color-text-muted)]">Leaders Coached</div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="text-center"
                        >
                            <div className="text-4xl md:text-5xl font-light text-white mb-1">
                                <CountUp from={0} to={90} suffix="%" duration={2} delay={0.2} />
                            </div>
                            <div className="text-xs uppercase tracking-[0.2em] text-[var(--color-text-muted)]">Distinction Rate</div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="text-center"
                        >
                            <div className="text-4xl md:text-5xl font-light text-white mb-1">
                                <CountUp from={0} to={15} suffix="+" duration={2} delay={0.4} />
                            </div>
                            <div className="text-xs uppercase tracking-[0.2em] text-[var(--color-text-muted)]">Years Experience</div>
                        </motion.div>
                    </div>

                    {/* Editorial Quote - Oversized Typography */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                    >
                        <blockquote className="text-2xl md:text-3xl lg:text-4xl font-light text-white/90 leading-relaxed md:leading-relaxed tracking-tight">
                            <span className="text-[var(--color-accent)] opacity-40">"</span>
                            {TESTIMONIALS[0]?.content}
                            <span className="text-[var(--color-accent)] opacity-40">"</span>
                        </blockquote>
                    </motion.div>

                    {/* Attribution - Clean inline */}
                    <motion.div
                        className="mt-10 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.7 }}
                    >
                        {/* Arcadis Logo */}
                        <img
                            src="/arcadislogo.png"
                            alt="Arcadis"
                            className="h-5 opacity-70 brightness-0 invert"
                        />
                        <div className="hidden md:block w-px h-4 bg-white/20" />
                        <div className="text-[var(--color-text-secondary)] text-sm">
                            <span className="font-medium text-white">{TESTIMONIALS[0]?.name}</span>
                            <span className="mx-2 text-white/20">·</span>
                            <span>{TESTIMONIALS[0]?.role}</span>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </div >
    </section >
);

// =============================================================================
// SECTION 5: ABOUT ROB
// =============================================================================
const AboutSection = () => (
    <section id="about" className="section-void py-24">
        <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="flex justify-center md:order-2"
                >
                    <div className="relative">
                        <img
                            src={robertHeadshot}
                            alt="Rob Marriott"
                            className="rounded-2xl w-full max-w-sm object-cover grayscale contrast-125"
                        />
                        <div className="absolute inset-0 rounded-2xl border border-[var(--color-border-subtle)]" />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="md:order-1"
                >
                    <p className="overline mb-4">About Me</p>
                    <h2 className="mb-6">I'm Rob Marriott</h2>
                    <div className="space-y-4 text-[var(--color-text-secondary)] font-light leading-relaxed">
                        {PROFILE.summary.slice(0, 2).map((para, i) => (
                            <p key={i}>{para}</p>
                        ))}
                    </div>
                    <div className="flex flex-wrap gap-4 mt-8">
                        <div className="flex items-center gap-2">
                            <Award className="w-5 h-5 text-[var(--color-accent)]" />
                            <span className="text-sm text-[var(--color-text-muted)]">APM Qualified</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Award className="w-5 h-5 text-[var(--color-accent)]" />
                            <span className="text-sm text-[var(--color-text-muted)]">CIPD Level 7</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Award className="w-5 h-5 text-[var(--color-accent)]" />
                            <span className="text-sm text-[var(--color-text-muted)]">90% Distinction Rate</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    </section>
);

// =============================================================================
// SECTION 6: CONTACT
// =============================================================================
interface ContactSectionProps {
    onOpenContactForm: () => void;
}

const ContactSection = ({ onOpenContactForm }: ContactSectionProps) => (
    <section id="contact" className="section-slab py-24 relative overflow-hidden">
        {/* Ambient glow */}
        <div className="ambient-glow ambient-glow-accent w-[800px] h-[800px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute" />

        <div className="container relative z-10">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-3xl mx-auto text-center"
            >
                <p className="overline mb-4">Let's Talk</p>
                <h2 className="mb-6">Ready to Turn Your Programme Around?</h2>
                <p className="text-lg text-[var(--color-text-secondary)] font-light mb-8">
                    If you're facing a failing programme, fragmented stakeholders, or need board-level credibility for your L&D investment, let's have a conversation.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                    <button
                        onClick={onOpenContactForm}
                        className="btn-primary text-lg"
                    >
                        <Mail className="w-5 h-5" />
                        Contact Me
                    </button>
                    <a
                        href="https://www.linkedin.com/in/robert-marriott-36b51a3/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary"
                    >
                        <Linkedin className="w-5 h-5" />
                        Connect on LinkedIn
                    </a>
                </div>

                <p className="text-sm text-[var(--color-text-whisper)]">
                    I typically respond within 24 hours.
                </p>
            </motion.div>
        </div>
    </section>
);

import { Layout } from '../components/layout/Layout';

// =============================================================================
// HOME PAGE EXPORT
// =============================================================================
export const HomePage = () => {
    const [isContactFormOpen, setIsContactFormOpen] = useState(false);

    return (
        <Layout>
            <SEO
                title="Executive Coach & Strategic Advisor"
                description="Robert Marriott helps organizations align people, processes, and technology for sustainable growth through O2C transformation and leadership development."
                canonical="/"
                image="/og-default.png"
            />
            <SchemaOrg
                type="Person"
                data={{
                    name: "Robert Marriott",
                    url: "https://rob-marriott-portfolio.vercel.app",
                    jobTitle: "Executive Coach & Strategic Advisor",
                    sameAs: ["https://www.linkedin.com/in/robert-marriott-36b51a3/"],
                    image: "https://rob-marriott-portfolio.vercel.app/robert-headshot.png",
                    description: "Bridging the gap between vision and execution in O2C transformation and leadership development."
                }}
            />
            <HeroSection />
            <InsightsSection />
            <PipelineSection />
            <ProofSection />
            <DiagnosticSection />
            <AboutSection />
            <ContactSection onOpenContactForm={() => setIsContactFormOpen(true)} />
            <ContactFormModal
                isOpen={isContactFormOpen}
                onClose={() => setIsContactFormOpen(false)}
            />
        </Layout>
    );
};

export default HomePage;
