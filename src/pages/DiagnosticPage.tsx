import { Layout } from '../components/layout/Layout';
import { DiagnosticWizard } from '../components/diagnostic/DiagnosticWizard';

export const DiagnosticPage = () => {
    return (
        <Layout>
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
