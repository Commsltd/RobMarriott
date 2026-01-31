import React from 'react';
import { motion } from 'framer-motion';
import {
    Compass, Layout, GitMerge, GraduationCap, Briefcase,
    Users, Zap, MessageSquare, ShieldCheck, DivideCircle
} from 'lucide-react';
import { COMPETENCIES, type Competency } from '../../data/portfolio';

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

interface Props {
    onSelect: (id: string) => void;
}

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] as [number, number, number, number] }
    }
};

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.05
        }
    }
};

export const CompetencyGrid: React.FC<Props> = ({ onSelect }) => {
    return (
        <div className="space-y-8">
            <div className="flex items-center gap-4">
                <div className="h-[1px] flex-1 bg-white/10" />
                <span className="text-sm font-mono text-emerald-500/80 tracking-widest uppercase">Expertise & Solutions</span>
                <div className="h-[1px] flex-1 bg-white/10" />
            </div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
                {COMPETENCIES.map((comp) => (
                    <CompetencyCard key={comp.id} competency={comp} onClick={() => onSelect(comp.id)} />
                ))}
            </motion.div>
        </div>
    );
};

const CompetencyCard: React.FC<{ competency: Competency; onClick: () => void }> = ({ competency, onClick }) => {
    const Icon = ICON_MAP[competency.id] || DivideCircle;

    return (
        <motion.button
            variants={itemVariants}
            whileHover={{ scale: 1.02, borderColor: 'rgba(52, 211, 153, 0.3)' }}
            whileTap={{ scale: 0.98 }}
            onClick={onClick}
            className="group relative flex flex-col items-start text-left p-8 h-full min-h-[240px] 
                 bg-glass backdrop-blur-liquid border border-white/5 
                 hover:bg-elevated/80 transition-colors duration-300 rounded-sm"
        >
            <div className="mb-auto w-full">
                {/* Updated Layout: Icon top-left, no ID text */}
                <div className="mb-6">
                    <div className="p-2 rounded-lg bg-white/5 text-emerald-400 group-hover:text-emerald-300 group-hover:bg-emerald-500/20 transition-colors w-fit">
                        <Icon className="w-5 h-5" />
                    </div>
                </div>

                <h3 className="text-xl font-light text-white tracking-wide mb-4 group-hover:text-emerald-400 transition-colors">
                    {competency.title}
                </h3>
            </div>

            <p className="text-sm font-thin text-emerald-100/70 leading-relaxed line-clamp-3 group-hover:text-emerald-100/90">
                {competency.description}
            </p>

            {/* Hover decoration: Tiny corner accent - Emerald */}
            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-emerald-500/50 opacity-0 group-hover:opacity-100 transition-opacity" />
        </motion.button>
    );
};
