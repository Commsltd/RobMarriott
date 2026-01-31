import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Tag, X, Calendar, Clock } from 'lucide-react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { INSIGHTS } from '../data/insights';
import type { Insight, InsightType } from '../data/insights';
import ReactMarkdown from 'react-markdown';
import robertHeadshot from '../assets/robert-headshot.png';
import { ShareButtons } from '../components/insights/ShareButtons';
import { ArticleCTA } from '../components/insights/ArticleCTA';

// Modal Detail View Component
const InsightModal = ({ insight, onClose }: { insight: Insight; onClose: () => void }) => {
    // Prevent body scroll when modal is open
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    // Close on escape key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEscape);
        return () => window.removeEventListener('keydown', handleEscape);
    }, [onClose]);

    return (
        <motion.div
            className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
        >
            {/* Backdrop */}
            <div className="fixed inset-0 bg-black/80 backdrop-blur-sm" />

            {/* Modal Content */}
            <motion.div
                className="relative w-full max-w-4xl mx-4 my-8 bg-[#0a0a0a] rounded-xl overflow-hidden shadow-2xl border border-white/10"
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 50, scale: 0.95 }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white/70 hover:text-white hover:bg-black/70 transition-all"
                    aria-label="Close"
                >
                    <X className="w-5 h-5" />
                </button>

                {/* Hero Header with Dark Overlay */}
                <div className="relative h-64 md:h-80">
                    <img
                        src={insight.headerImage}
                        alt={insight.title}
                        className="w-full h-full object-cover"
                    />
                    {/* Dark overlay for readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/60" />

                    {/* Title Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                            <div>
                                <div className="flex items-center gap-3 mb-3">
                                    <span className="px-3 py-1 rounded-full bg-[var(--color-accent)] text-black text-sm font-medium capitalize">
                                        {insight.type}
                                    </span>
                                    {insight.readingTime && (
                                        <span className="flex items-center gap-1 text-white/70 text-sm">
                                            <Clock className="w-4 h-4" />
                                            {insight.readingTime}
                                        </span>
                                    )}
                                </div>
                                <h1 className="text-2xl md:text-3xl lg:text-4xl font-light text-white">
                                    {insight.title}
                                </h1>
                                {insight.subtitle && (
                                    <p className="text-lg text-white/70 mt-2">
                                        {insight.subtitle}
                                    </p>
                                )}
                            </div>

                            {/* Social Share */}
                            <div className="mb-1">
                                <ShareButtons insight={insight} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Article Content */}
                <div className="px-6 md:px-8 py-8">
                    <article className="prose prose-invert prose-lg max-w-none">
                        <ReactMarkdown
                            components={{
                                h2: ({ children }) => (
                                    <h2 className="text-xl font-medium text-white mt-10 mb-4 border-l-2 border-[var(--color-accent)] pl-4">
                                        {children}
                                    </h2>
                                ),
                                p: ({ children }) => (
                                    <p className="text-[var(--color-text-secondary)] leading-relaxed mb-5">
                                        {children}
                                    </p>
                                ),
                                strong: ({ children }) => (
                                    <strong className="text-white font-medium">{children}</strong>
                                ),
                                ol: ({ children }) => (
                                    <ol className="list-decimal list-outside ml-6 space-y-2 mb-5 text-[var(--color-text-secondary)]">
                                        {children}
                                    </ol>
                                ),
                                li: ({ children }) => (
                                    <li className="pl-2">{children}</li>
                                ),
                            }}
                        >
                            {insight.content}
                        </ReactMarkdown>
                    </article>

                    {/* Funnel Optimization CTA */}
                    <ArticleCTA />

                    {/* Tags */}
                    <div className="mt-8 pt-6 border-t border-[var(--color-border-subtle)]">
                        <div className="flex flex-wrap gap-2">
                            {insight.tags.map(tag => (
                                <span
                                    key={tag}
                                    className="px-3 py-1.5 rounded-full bg-white/5 text-sm text-[var(--color-text-muted)]"
                                >
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Author - Text with Photo */}
                    <div className="mt-8 pt-6 border-t border-[var(--color-border-subtle)] flex items-center gap-4">
                        <img
                            src={robertHeadshot}
                            alt="Robert Marriott"
                            className="w-12 h-12 rounded-full object-cover grayscale"
                        />
                        <div>
                            <span className="text-white font-medium">Robert Marriott</span>
                            <span className="text-[var(--color-text-muted)] text-sm ml-2">
                                Executive Coach & Leadership Development Specialist
                            </span>
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

// Main Insights Grid Component
export const InsightsPage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedType, setSelectedType] = useState<InsightType | 'all'>('all');
    const [selectedTag, setSelectedTag] = useState<string | null>(null);
    const [selectedInsight, setSelectedInsight] = useState<Insight | null>(null);

    // Filter insights
    const filteredInsights = useMemo(() => {
        return INSIGHTS.filter(insight => {
            const matchesSearch = searchQuery === '' ||
                insight.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                insight.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                insight.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

            const matchesType = selectedType === 'all' || insight.type === selectedType;
            const matchesTag = !selectedTag || insight.tags.includes(selectedTag);

            return matchesSearch && matchesType && matchesTag;
        });
    }, [searchQuery, selectedType, selectedTag]);

    const typeIcons: Record<InsightType, string> = {
        article: '📝',
        video: '🎬',
        infographic: '📊'
    };

    return (
        <>
            <Header />
            <main className="min-h-screen bg-[var(--color-bg-primary)] pt-24 pb-16">
                {/* Grid with left/right margins */}
                <div className="container-custom px-8 md:px-16 lg:px-24">
                    {/* Hero Section */}
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <p className="overline text-[var(--color-accent)] mb-4">Knowledge Hub</p>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6">Insights</h1>
                        <p className="text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto">
                            Articles, videos, and thought leadership on leadership development, organisational capability, and executive coaching.
                        </p>
                    </motion.div>

                    {/* Search Bar */}
                    <motion.div
                        className="max-w-2xl mx-auto mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                    >
                        <div className="relative">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--color-text-muted)]" />
                            <input
                                type="text"
                                placeholder="Search insights..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/5 border border-[var(--color-border-subtle)] text-white placeholder-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)] transition-all"
                            />
                            {searchQuery && (
                                <button
                                    onClick={() => setSearchQuery('')}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)] hover:text-white transition-colors"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            )}
                        </div>
                    </motion.div>

                    {/* Filter Pills */}
                    <motion.div
                        className="flex flex-wrap justify-center gap-3 mb-12"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        {/* Type Filters */}
                        <button
                            onClick={() => setSelectedType('all')}
                            className={`px-4 py-2 rounded-full text-sm transition-all ${selectedType === 'all'
                                ? 'bg-[var(--color-accent)] text-black font-medium'
                                : 'bg-white/5 text-[var(--color-text-secondary)] hover:bg-white/10'
                                }`}
                        >
                            All
                        </button>
                        {(['article', 'video', 'infographic'] as InsightType[]).map(type => (
                            <button
                                key={type}
                                onClick={() => setSelectedType(type)}
                                className={`px-4 py-2 rounded-full text-sm transition-all flex items-center gap-2 ${selectedType === type
                                    ? 'bg-[var(--color-accent)] text-black font-medium'
                                    : 'bg-white/5 text-[var(--color-text-secondary)] hover:bg-white/10'
                                    }`}
                            >
                                <span>{typeIcons[type]}</span>
                                <span className="capitalize">{type}s</span>
                            </button>
                        ))}

                        {/* Tag Pills */}
                        {selectedTag && (
                            <button
                                onClick={() => setSelectedTag(null)}
                                className="px-4 py-2 rounded-full text-sm bg-[var(--color-accent)]/20 text-[var(--color-accent)] flex items-center gap-2"
                            >
                                <Tag className="w-3 h-3" />
                                {selectedTag}
                                <X className="w-3 h-3" />
                            </button>
                        )}
                    </motion.div>

                    {/* Results Count */}
                    <motion.p
                        className="text-center text-[var(--color-text-muted)] text-sm mb-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        {filteredInsights.length} {filteredInsights.length === 1 ? 'result' : 'results'}
                    </motion.p>

                    {/* Insights Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <AnimatePresence mode="popLayout">
                            {filteredInsights.map((insight, i) => (
                                <motion.article
                                    key={insight.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ delay: i * 0.05 }}
                                    onClick={() => setSelectedInsight(insight)}
                                    className="group cursor-pointer"
                                >
                                    <div className="glass-card overflow-hidden hover:bg-white/5 transition-all duration-300 h-full flex flex-col">
                                        {/* Thumbnail */}
                                        <div className="relative aspect-[4/3] overflow-hidden">
                                            <img
                                                src={insight.thumbnail}
                                                alt={insight.title}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-primary)] to-transparent opacity-60" />

                                            {/* Type Badge */}
                                            <div className="absolute top-4 left-4">
                                                <span className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm text-xs text-white capitalize flex items-center gap-1.5">
                                                    <span>{typeIcons[insight.type]}</span>
                                                    {insight.type}
                                                </span>
                                            </div>

                                            {/* Featured Badge */}
                                            {insight.featured && (
                                                <div className="absolute top-4 right-4">
                                                    <span className="px-3 py-1 rounded-full bg-[var(--color-accent)] text-black text-xs font-medium">
                                                        Featured
                                                    </span>
                                                </div>
                                            )}
                                        </div>

                                        {/* Content */}
                                        <div className="p-6 flex-grow flex flex-col">
                                            <h3 className="text-xl font-medium text-white mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                                                {insight.title}
                                            </h3>
                                            <p className="text-[var(--color-text-secondary)] text-sm mb-4 flex-grow line-clamp-3">
                                                {insight.excerpt}
                                            </p>

                                            {/* Meta */}
                                            <div className="flex items-center gap-4 text-xs text-[var(--color-text-muted)]">
                                                {insight.readingTime && (
                                                    <span className="flex items-center gap-1">
                                                        <Clock className="w-3 h-3" />
                                                        {insight.readingTime}
                                                    </span>
                                                )}
                                                <span className="flex items-center gap-1">
                                                    <Calendar className="w-3 h-3" />
                                                    {new Date(insight.publishedDate).toLocaleDateString('en-GB', {
                                                        day: 'numeric',
                                                        month: 'short',
                                                        year: 'numeric'
                                                    })}
                                                </span>
                                            </div>

                                            {/* Tags */}
                                            <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-[var(--color-border-subtle)]">
                                                {insight.tags.slice(0, 2).map(tag => (
                                                    <button
                                                        key={tag}
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            setSelectedTag(tag);
                                                        }}
                                                        className="px-2 py-1 rounded text-xs bg-white/5 text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors"
                                                    >
                                                        {tag}
                                                    </button>
                                                ))}
                                                {insight.tags.length > 2 && (
                                                    <span className="px-2 py-1 text-xs text-[var(--color-text-muted)]">
                                                        +{insight.tags.length - 2}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </motion.article>
                            ))}
                        </AnimatePresence>
                    </div>

                    {/* Empty State */}
                    {filteredInsights.length === 0 && (
                        <motion.div
                            className="text-center py-16"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                        >
                            <p className="text-[var(--color-text-muted)] text-lg mb-4">No insights found matching your criteria.</p>
                            <button
                                onClick={() => {
                                    setSearchQuery('');
                                    setSelectedType('all');
                                    setSelectedTag(null);
                                }}
                                className="text-[var(--color-accent)] hover:underline"
                            >
                                Clear all filters
                            </button>
                        </motion.div>
                    )}
                </div>
            </main>
            <Footer />

            {/* Modal Overlay */}
            <AnimatePresence>
                {selectedInsight && (
                    <InsightModal
                        insight={selectedInsight}
                        onClose={() => setSelectedInsight(null)}
                    />
                )}
            </AnimatePresence>
        </>
    );
};
