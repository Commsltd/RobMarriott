import { ArrowUpRight } from 'lucide-react';

export const ArticleCTA = () => (
    <div className="my-16">
        <div className="relative overflow-hidden rounded-xl border border-[var(--color-accent)]/20 bg-gradient-to-br from-[var(--color-accent)]/5 to-transparent p-8 md:p-12 text-center">
            {/* Ambient Background */}
            <div className="absolute top-0 right-0 -mt-8 -mr-8 h-32 w-32 rounded-full bg-[var(--color-accent)]/10 blur-3xl" />

            <h3 className="text-2xl font-light text-white mb-4">
                Does this resonate?
            </h3>
            <p className="text-[var(--color-text-secondary)] mb-8 max-w-xl mx-auto leading-relaxed">
                If you recognise these challenges in your organisation, your programme might be at risk.
                Get a clear, data-driven assessment of your leadership readiness in 5 minutes.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="/diagnostic" className="btn-primary text-lg px-8">
                    Take the Free Audit
                    <ArrowUpRight className="w-5 h-5 ml-2" />
                </a>
            </div>

            <p className="mt-4 text-xs text-[var(--color-text-muted)]">
                Instant results. No credit card required.
            </p>
        </div>
    </div>
);
