import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ContactFormModal } from '../ContactFormModal';

interface NavItem {
    label: string;
    href: string;
}

const navItems: NavItem[] = [
    { label: 'Diagnostic', href: '/diagnostic' },
    { label: 'Capabilities', href: '/capabilities' },
    { label: 'Insights', href: '/insights' },
    { label: 'Proof', href: '/#proof' },
    { label: 'About Rob', href: '/#about' },
    { label: 'Contact', href: 'contact-form' },
];

export const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isContactFormOpen, setIsContactFormOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (href: string) => {
        setIsMobileMenuOpen(false);

        if (href === 'contact-form') {
            setIsContactFormOpen(true);
            return;
        }

        if (href.startsWith('/#')) {
            const hash = href.substring(1); // #matrix
            if (location.pathname === '/') {
                // We are on home page, just scroll
                const element = document.querySelector(hash);
                element?.scrollIntoView({ behavior: 'smooth' });
            } else {
                // Navigate to home then scroll (handled by browser or useEffect on home)
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
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${isScrolled || location.pathname !== '/'
                        ? 'bg-[var(--color-void)]/80 backdrop-blur-xl border-b border-[var(--color-border-subtle)]'
                        : 'bg-transparent'
                    }`}
            >
                <div className="container">
                    <nav className="flex items-center justify-between h-16 md:h-20">
                        {/* Logo */}
                        <button onClick={() => navigate('/')} className="flex items-center gap-3 group">
                            <span className="text-xl font-light tracking-tight text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)] transition-colors">
                                Rob Marriott
                            </span>
                        </button>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-8">
                            {navItems.map((item) => (
                                <button
                                    key={item.label}
                                    onClick={() => handleNavClick(item.href)}
                                    className="text-sm font-light text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors"
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <div className="flex items-center gap-4">
                            <button
                                onClick={() => setIsContactFormOpen(true)}
                                className="btn-primary hidden sm:inline-flex text-sm"
                            >
                                Work With Rob
                                <ArrowRight className="w-4 h-4" />
                            </button>

                            {/* Mobile Menu Button */}
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="md:hidden p-2 text-[var(--color-text-muted)]"
                                aria-label="Toggle menu"
                            >
                                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                            </button>
                        </div>
                    </nav>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="md:hidden bg-[var(--color-elevated)] border-b border-[var(--color-border-subtle)]"
                    >
                        <div className="container py-6 flex flex-col gap-4">
                            {navItems.map((item) => (
                                <button
                                    key={item.label}
                                    onClick={() => handleNavClick(item.href)}
                                    className="text-lg font-light py-2 text-[var(--color-text-secondary)] text-left"
                                >
                                    {item.label}
                                </button>
                            ))}
                            <button
                                onClick={() => setIsContactFormOpen(true)}
                                className="btn-primary mt-4 w-full justify-center"
                            >
                                Work With Rob
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>
                    </motion.div>
                )}
            </header>

            {/* Contact Form Modal */}
            <ContactFormModal
                isOpen={isContactFormOpen}
                onClose={() => setIsContactFormOpen(false)}
            />
        </>
    );
};
