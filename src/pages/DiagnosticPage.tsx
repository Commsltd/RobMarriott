import { Layout } from '../components/layout/Layout';
import { DiagnosticWizard } from '../components/diagnostic/DiagnosticWizard';
import { SEO } from '../components/seo/SEO';
import { SchemaOrg } from '../components/seo/SchemaOrg';

export const DiagnosticPage = () => {
    return (
        <Layout>
            <SEO
                title="Leadership Readiness Diagnostic | Robert Marriott"
                description="Assess your program's readiness for transformation. Get a personalized action plan in 5 minutes."
                canonical="/diagnostic"
            />
            <SchemaOrg
                type="WebSite"
                data={{
                    name: "Leadership Readiness Diagnostic",
                    url: "https://rob-marriott-portfolio.vercel.app/diagnostic",
                    description: "Assess your program's readiness for transformation."
                }}
            />
            <div className="min-h-[80vh] flex items-center justify-center py-20 bg-[var(--color-void)] relative overflow-hidden">
                {/* Background glow */}
                <div className="ambient-glow w-[800px] h-[800px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute" />

                <div className="container relative z-10">
                    <DiagnosticWizard />
                </div>
            </div>
        </Layout>
    );
};

export default DiagnosticPage;
