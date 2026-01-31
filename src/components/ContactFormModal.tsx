import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ContactFormModalProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    submitLabel?: string;
    onSuccess?: () => void;
    initialMessage?: string;
}

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export const ContactFormModal = ({
    isOpen,
    onClose,
    title = "Get in Touch",
    submitLabel = "Send Message",
    onSuccess,
    initialMessage = ""
}: ContactFormModalProps) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        message: initialMessage
    });
    const [consent, setConsent] = useState(false);
    const [status, setStatus] = useState<FormStatus>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');

        try {
            // Use environment variable or fallback to placeholder
            const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || 'YOUR_ACCESS_KEY';

            // Web3Forms - free email service, no backend required
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    access_key: accessKey, // TODO: Replace with actual Web3Forms access key
                    to: 'rob.marriott.development@gmail.com',
                    subject: `New Contact from ${formData.name} - Rob Marriott Website`,
                    from_name: formData.name,
                    email: formData.email,
                    company: formData.company,
                    message: formData.message,
                    privacy_consent: 'User consented to privacy policy at ' + new Date().toISOString(),
                    context_source: title // Track where the lead came from
                })
            });

            const result = await response.json();

            if (result.success) {
                setStatus('success');
                setConsent(false);
                setFormData({ name: '', email: '', company: '', message: '' });

                // If there's an onSuccess callback (e.g. for unlocking content), call it
                if (onSuccess) {
                    setTimeout(() => {
                        onSuccess();
                        onClose();
                        setStatus('idle');
                    }, 1500);
                } else {
                    // Standard behavior
                    setTimeout(() => {
                        onClose();
                        setStatus('idle');
                    }, 2000);
                }
            } else {
                setStatus('error');
            }
        } catch {
            setStatus('error');
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    // Reset form when modal opens, if needed, or preserve state?
    // For now, simple standard behavior.

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                >
                    {/* Backdrop */}
                    <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

                    {/* Modal */}
                    <motion.div
                        className="relative w-full max-w-md bg-[#0a0a0a] rounded-2xl overflow-hidden shadow-2xl border border-white/10"
                        initial={{ opacity: 0, y: 50, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 50, scale: 0.95 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-6 border-b border-white/10">
                            <h2 className="text-xl font-light text-white">{title}</h2>
                            <button
                                onClick={onClose}
                                className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-all"
                                aria-label="Close"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="p-6 space-y-4">
                            {status === 'success' ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="py-8 text-center"
                                >
                                    <CheckCircle className="w-16 h-16 text-[var(--color-accent)] mx-auto mb-4" />
                                    <h3 className="text-xl font-light text-white mb-2">Message Sent!</h3>
                                    <p className="text-white/60">Thank you for reaching out.</p>
                                </motion.div>
                            ) : status === 'error' ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="py-8 text-center"
                                >
                                    <AlertCircle className="w-16 h-16 text-red-400 mx-auto mb-4" />
                                    <h3 className="text-xl font-light text-white mb-2">Something went wrong</h3>
                                    <p className="text-white/60 mb-4">Please try again or email directly.</p>
                                    <button
                                        type="button"
                                        onClick={() => setStatus('idle')}
                                        className="text-[var(--color-accent)] hover:underline"
                                    >
                                        Try Again
                                    </button>
                                </motion.div>
                            ) : (
                                <>
                                    <div>
                                        <label htmlFor="name" className="block text-sm text-white/70 mb-2">Name *</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)] transition-all"
                                            placeholder="Your name"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm text-white/70 mb-2">Email *</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)] transition-all"
                                            placeholder="your@email.com"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="company" className="block text-sm text-white/70 mb-2">Company</label>
                                        <input
                                            type="text"
                                            id="company"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)] transition-all"
                                            placeholder="Your company (optional)"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm text-white/70 mb-2">Message *</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            required
                                            rows={4}
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)] transition-all resize-none"
                                            placeholder="How can I help you?"
                                        />
                                    </div>

                                    {/* GDPR Consent Checkbox */}
                                    <div className="flex items-start gap-3">
                                        <input
                                            type="checkbox"
                                            id="consent"
                                            checked={consent}
                                            onChange={(e) => setConsent(e.target.checked)}
                                            className="mt-1 w-4 h-4 rounded border-white/20 bg-white/5 text-[var(--color-accent)] focus:ring-[var(--color-accent)] focus:ring-offset-0 focus:ring-1"
                                            required
                                        />
                                        <label htmlFor="consent" className="text-sm text-white/60 leading-relaxed">
                                            I agree to the processing of my data as described in the{' '}
                                            <Link
                                                to="/privacy"
                                                className="text-[var(--color-accent)] hover:underline"
                                                target="_blank"
                                            >
                                                Privacy Policy
                                            </Link>
                                            . *
                                        </label>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={status === 'submitting' || !consent}
                                        className="w-full py-3 bg-[var(--color-accent)] text-black font-medium rounded-lg hover:bg-[var(--color-accent-hover)] transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {status === 'submitting' ? (
                                            <>
                                                <Loader2 className="w-5 h-5 animate-spin" />
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                <Send className="w-5 h-5" />
                                                {submitLabel}
                                            </>
                                        )}
                                    </button>
                                </>
                            )}
                        </form>

                        {/* Footer Note */}
                        {status === 'idle' && (
                            <div className="px-6 pb-6">
                                <p className="text-xs text-white/40 text-center">
                                    Your information is secure and will never be shared.
                                </p>
                            </div>
                        )}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
