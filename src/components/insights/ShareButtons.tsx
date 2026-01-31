import { Share2, Linkedin, Twitter, Link as LinkIcon, Check } from 'lucide-react';
import { useState } from 'react';
import type { Insight } from '../../data/insights';

export const ShareButtons = ({ insight }: { insight: Insight }) => {
    const [copied, setCopied] = useState(false);

    // Construct real URL (assuming live domain for sharing)
    const shareUrl = `https://rob-marriott-portfolio.vercel.app/insights?search=${encodeURIComponent(insight.title)}`;
    const shareText = `Check out this insight from Rob Marriott: ${insight.title}`;

    const handleShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: insight.title,
                    text: insight.excerpt,
                    url: shareUrl
                });
            } catch (err) {
                console.log('Error sharing:', err);
            }
        }
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(shareUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;

    return (
        <div className="flex items-center gap-2">
            <span className="text-xs font-medium text-[var(--color-text-muted)] uppercase tracking-wider mr-2">Share</span>

            {/* Native Share (Mobile) */}
            {typeof navigator !== 'undefined' && 'share' in navigator && (
                <button
                    onClick={handleShare}
                    className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/70 hover:text-[var(--color-accent)] transition-all"
                    title="Share"
                >
                    <Share2 className="w-4 h-4" />
                </button>
            )}

            {/* LinkedIn */}
            <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#0077b5]/20 flex items-center justify-center text-white/70 hover:text-[#0077b5] transition-all"
                title="Share on LinkedIn"
            >
                <Linkedin className="w-4 h-4" />
            </a>

            {/* Twitter/X */}
            <a
                href={twitterUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-[var(--color-text-primary)]/20 flex items-center justify-center text-white/70 hover:text-white transition-all"
                title="Share on Twitter"
            >
                <Twitter className="w-4 h-4" />
            </a>

            {/* Copy Link */}
            <button
                onClick={handleCopy}
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/70 hover:text-[var(--color-accent)] transition-all"
                title="Copy Link"
            >
                {copied ? <Check className="w-4 h-4" /> : <LinkIcon className="w-4 h-4" />}
            </button>
        </div>
    );
};
