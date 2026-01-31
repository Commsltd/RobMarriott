import { useState } from 'react';
import { ArrowUpRight, Linkedin, Mail } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ContactFormModal } from '../ContactFormModal';

export const Footer = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isContactFormOpen, setIsContactFormOpen] = useState(false);

    const handleNavClick = (href: string) => {
        if (href.startsWith('/#')) {
            const hash = href.substring(1); // #matrix
            if (location.pathname === '/') {
                const element = document.querySelector(hash);
                element?.scrollIntoView({ behavior: 'smooth' });
            } else {
                navigate('/');
                setTimeout(() => {
                    const element = document.querySelector(hash);
                    element?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        } else {
            navigate(href);
        }
    };

    return (
        <>
            <footer className="bg-[var(--color-void)] border-t border-[var(--color-border-subtle)]">
                <div className="container py-16">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
                        {/* Brand */}
                        <div className="md:col-span-2">
                            <h3 className="text-xl font-light mb-4">Rob Marriott</h3>
                            <p className="text-[var(--color-text-muted)] text-sm font-light max-w-md mb-6 leading-relaxed">
                                I rescue and scale complex L&D programmes in environments where credibility has been lost
                                and stakeholders are fragmented. My work creates tangible, board-level outcomes.
                            </p>
                            <div className="flex flex-col gap-3">
                                <button
                                    onClick={() => setIsContactFormOpen(true)}
                                    className="flex items-center gap-3 text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors text-sm text-left"
                                >
                                    <Mail className="w-4 h-4" />
                                    Contact Me
                                </button>
                                <a
                                    href="https://www.linkedin.com/in/robert-marriott-36b51a3/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors text-sm"
                                >
                                    <Linkedin className="w-4 h-4" />
                                    Connect on LinkedIn
                                </a>
                            </div>
                        </div>

                        {/* Navigation */}
                        <div>
                            <h4 className="text-sm font-medium tracking-wide text-[var(--color-text-whisper)] mb-4">
                                EXPLORE
                            </h4>
                            <ul className="flex flex-col gap-3">
                                {[
                                    { label: 'Diagnostic', href: '/diagnostic' },
                                    { label: 'Capabilities', href: '/capabilities' },
                                    { label: 'Insights', href: '/insights' },
                                    { label: 'Proof', href: '/#proof' },
                                    { label: 'About Rob', href: '/#about' },
                                ].map((link) => (
                                    <li key={link.label}>
                                        <button
                                            onClick={() => handleNavClick(link.href)}
                                            className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors text-left"
                                        >
                                            {link.label}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* CTA */}
                        <div>
                            <h4 className="text-sm font-medium tracking-wide text-[var(--color-text-whisper)] mb-4">
                                WORK WITH ME
                            </h4>
                            <p className="text-sm text-[var(--color-text-muted)] mb-4 leading-relaxed">
                                Facing a failing programme? Let's talk about turning it around.
                            </p>
                            <button
                                onClick={() => setIsContactFormOpen(true)}
                                className="btn-primary w-full justify-center text-sm"
                            >
                                Get in Touch
                                <ArrowUpRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>

                    {/* Bottom bar */}
                    <div className="mt-12 pt-8 border-t border-[var(--color-border-subtle)] flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-xs text-[var(--color-text-whisper)]">
                            © {new Date().getFullYear()} Rob Marriott. All rights reserved.
                        </p>
                        <div className="flex items-center gap-6">
                            <a href="/privacy" className="text-xs text-[var(--color-text-whisper)] hover:text-[var(--color-text-muted)] transition-colors">
                                Privacy
                            </a>
                            <a href="/terms" className="text-xs text-[var(--color-text-whisper)] hover:text-[var(--color-text-muted)] transition-colors">
                                Terms
                            </a>
                        </div>
                    </div>
                </div>
            </footer>

            {/* Contact Form Modal */}
            <ContactFormModal
                isOpen={isContactFormOpen}
                onClose={() => setIsContactFormOpen(false)}
            />
        </>
    );
};
