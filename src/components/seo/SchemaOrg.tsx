import { Helmet } from 'react-helmet-async';

interface SchemaOrgProps {
    type: 'Person' | 'Organization' | 'Article' | 'WebSite';
    data: any;
}

export const SchemaOrg = ({ type, data }: SchemaOrgProps) => {
    let schema = {};

    if (type === 'Person' || type === 'Organization') {
        schema = {
            '@context': 'https://schema.org',
            '@type': type,
            ...data
        };
    } else if (type === 'Article') {
        schema = {
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            ...data
        };
    } else {
        schema = {
            '@context': 'https://schema.org',
            '@type': type,
            ...data
        };
    }

    return (
        <Helmet>
            <script type="application/ld+json">
                {JSON.stringify(schema)}
            </script>
        </Helmet>
    );
};
