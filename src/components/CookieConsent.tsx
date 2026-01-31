import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const CONSENT_KEY = 'cookie_consent';

export const CookieConsent = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check if user has already made a choice
        const consent = localStorage.getItem(CONSENT_KEY);
        if (!consent) {
            // Small delay for better UX
            const timer = setTimeout(() => setIsVisible(true), 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem(CONSENT_KEY, 'accepted');
        setIsVisible(false);
    };

    const handleDecline = () => {
        localStorage.setItem(CONSENT_KEY, 'declined');
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                    className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
                >
                    <div className="container max-w-4xl mx-auto">
                        <div className="bg-[#051008] p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 border border-[var(--color-border-subtle)] shadow-2xl">
                            {/* Icon */}
                            <div className="flex-shrink-0 p-3 rounded-xl bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20">
                                <Cookie className="w-6 h-6 text-[var(--color-accent)]" />
                            </div>

                            {/* Content */}
                            <div className="flex-1">
                                <h3 className="text-lg font-medium text-[var(--color-text-primary)] mb-2">
                                    Cookie Notice
                                </h3>
                                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                                    This website uses essential cookies to remember your preferences.
                                    We don't use tracking or advertising cookies.{' '}
                                    <Link
                                        to="/privacy"
                                        className="text-[var(--color-accent)] hover:underline"
                                    >
                                        Read our Privacy Policy
                                    </Link>
                                </p>
                            </div>

                            {/* Actions */}
                            <div className="flex items-center gap-3 w-full md:w-auto">
                                <button
                                    onClick={handleDecline}
                                    className="flex-1 md:flex-none px-5 py-2.5 text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors rounded-xl border border-[var(--color-border-subtle)] hover:border-[var(--color-border-visible)]"
                                >
                                    Decline
                                </button>
                                <button
                                    onClick={handleAccept}
                                    className="flex-1 md:flex-none px-5 py-2.5 text-sm font-medium bg-[var(--color-accent)] text-white rounded-xl hover:bg-[var(--color-accent)]/90 transition-colors shadow-lg shadow-[var(--color-accent)]/20"
                                >
                                    Accept
                                </button>
                            </div>

                            {/* Close button */}
                            <button
                                onClick={handleDecline}
                                className="absolute top-4 right-4 md:hidden p-2 text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors"
                                aria-label="Close"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
