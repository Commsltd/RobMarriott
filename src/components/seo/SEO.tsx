import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title: string;
    description: string;
    canonical?: string;
    image?: string;
    type?: 'website' | 'article';
    publishedTime?: string;
    author?: string;
    tags?: string[];
}

const DOMAIN = 'https://rob-marriott-portfolio.vercel.app';
const DEFAULT_IMAGE = '/og-image.jpg'; // Need to create this or use headshot

export const SEO = ({
    title,
    description,
    canonical,
    image = DEFAULT_IMAGE,
    type = 'website',
    publishedTime,
    author = 'Robert Marriott',
    tags
}: SEOProps) => {
    // Ensure absolute URLs
    const siteUrl = DOMAIN;
    const url = canonical ? (canonical.startsWith('http') ? canonical : `${siteUrl}${canonical}`) : siteUrl;
    const imageUrl = image.startsWith('http') ? image : `${siteUrl}${image}`;

    const fullTitle = `${title} | Robert Marriott`;

    return (
        <Helmet>
            {/* Standard Metrics */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={url} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={imageUrl} />
            <meta property="og:site_name" content="Robert Marriott Portfolio" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={imageUrl} />

            {/* Article Specific */}
            {type === 'article' && publishedTime && (
                <meta property="article:published_time" content={publishedTime} />
            )}
            {type === 'article' && author && (
                <meta property="article:author" content={author} />
            )}
            {type === 'article' && tags && tags.map(tag => (
                <meta property="article:tag" content={tag} key={tag} />
            ))}
        </Helmet>
    );
};
