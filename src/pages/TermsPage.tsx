import { Layout } from '../components/layout/Layout';

export const TermsPage = () => {
    return (
        <Layout>
            <div className="section-void min-h-screen py-24">
                <div className="container max-w-3xl mx-auto px-6">
                    <h1 className="text-4xl md:text-5xl font-light mb-4 text-[var(--color-text-primary)]">
                        Terms of Service
                    </h1>
                    <p className="text-sm text-[var(--color-text-muted)] mb-12">
                        Last updated: January 2026
                    </p>

                    <div className="prose prose-invert prose-lg max-w-none space-y-8 text-[var(--color-text-secondary)] font-light leading-relaxed">

                        <section>
                            <h2 className="text-2xl font-medium text-[var(--color-text-primary)] mb-4">Introduction</h2>
                            <p>
                                These terms of service ("Terms") govern your use of this website operated by Rob Marriott ("I", "me", "my").
                                By accessing or using this website, you agree to be bound by these Terms. If you do not agree to these Terms,
                                please do not use this website.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-medium text-[var(--color-text-primary)] mb-4">Use of This Website</h2>
                            <p>
                                This website is provided for informational purposes about my professional services and expertise.
                                You may use this website for lawful purposes only. You agree not to:
                            </p>
                            <ul className="list-disc pl-6 mt-4 space-y-2">
                                <li>Use the website in any way that breaches any applicable local, national, or international law or regulation</li>
                                <li>Use the website to transmit any unsolicited advertising or promotional material</li>
                                <li>Attempt to gain unauthorised access to any part of the website or any server, computer, or database connected to it</li>
                                <li>Use the website to harm or attempt to harm others in any way</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-medium text-[var(--color-text-primary)] mb-4">Intellectual Property</h2>
                            <p>
                                All content on this website, including but not limited to text, graphics, logos, images, and software,
                                is my property or the property of my licensors and is protected by copyright, trademark, and other
                                intellectual property laws.
                            </p>
                            <p className="mt-4">
                                You may view, download, and print pages from this website for your personal, non-commercial use only.
                                You may not reproduce, distribute, modify, or create derivative works from any content without
                                my prior written consent.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-medium text-[var(--color-text-primary)] mb-4">Professional Services</h2>
                            <p>
                                Information provided on this website about my services is for general information only and does not
                                constitute a binding offer. Any engagement for professional services will be subject to a separate
                                written agreement between the parties.
                            </p>
                            <p className="mt-4">
                                The content on this website does not constitute professional advice. You should seek appropriate
                                professional advice before making any business or financial decisions.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-medium text-[var(--color-text-primary)] mb-4">Disclaimer</h2>
                            <p>
                                This website and its content are provided "as is" without any warranties, express or implied.
                                I do not warrant that:
                            </p>
                            <ul className="list-disc pl-6 mt-4 space-y-2">
                                <li>The website will be available at all times or uninterrupted</li>
                                <li>The information on the website is complete, accurate, or up-to-date</li>
                                <li>The website is free from viruses or other harmful components</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-medium text-[var(--color-text-primary)] mb-4">Limitation of Liability</h2>
                            <p>
                                To the fullest extent permitted by law, I shall not be liable for any direct, indirect, incidental,
                                special, consequential, or punitive damages arising out of or relating to your use of this website.
                            </p>
                            <p className="mt-4">
                                Nothing in these Terms excludes or limits liability for death or personal injury caused by negligence,
                                fraud or fraudulent misrepresentation, or any other liability that cannot be excluded or limited by
                                English law.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-medium text-[var(--color-text-primary)] mb-4">External Links</h2>
                            <p>
                                This website may contain links to external websites that are not operated by me. I have no control
                                over the content and practices of these sites and cannot accept responsibility for their respective
                                privacy policies or content.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-medium text-[var(--color-text-primary)] mb-4">Changes to These Terms</h2>
                            <p>
                                I reserve the right to modify these Terms at any time. Changes will be effective immediately upon
                                posting to this website. Your continued use of the website following any changes constitutes your
                                acceptance of those changes.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-medium text-[var(--color-text-primary)] mb-4">Governing Law</h2>
                            <p>
                                These Terms are governed by and construed in accordance with the laws of England and Wales.
                                Any disputes arising in connection with these Terms shall be subject to the exclusive jurisdiction
                                of the courts of England and Wales.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-medium text-[var(--color-text-primary)] mb-4">Contact</h2>
                            <p>
                                If you have any questions about these Terms, please contact me at{' '}
                                <a href="mailto:rob.marriott.development@gmail.com" className="text-[var(--color-accent)] hover:underline">
                                    rob.marriott.development@gmail.com
                                </a>.
                            </p>
                        </section>

                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default TermsPage;
