import { Layout } from '../components/layout/Layout';

export const PrivacyPage = () => {
    return (
        <Layout>
            <div className="section-void min-h-screen py-24">
                <div className="container max-w-3xl mx-auto px-6">
                    <h1 className="text-4xl md:text-5xl font-light mb-4 text-[var(--color-text-primary)]">
                        Privacy Policy
                    </h1>
                    <p className="text-sm text-[var(--color-text-muted)] mb-12">
                        Last updated: January 2026
                    </p>

                    <div className="prose prose-invert prose-lg max-w-none space-y-8 text-[var(--color-text-secondary)] font-light leading-relaxed">

                        <section>
                            <h2 className="text-2xl font-medium text-[var(--color-text-primary)] mb-4">Data Controller</h2>
                            <p>
                                Rob Marriott is the data controller for this website. If you have any questions about how your data is processed,
                                you can contact me at <a href="mailto:rob.marriott.development@gmail.com" className="text-[var(--color-accent)] hover:underline">rob.marriott.development@gmail.com</a>.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-medium text-[var(--color-text-primary)] mb-4">What Information We Collect</h2>
                            <p>We collect only the information you voluntarily provide through our contact form:</p>
                            <ul className="list-disc pl-6 mt-4 space-y-2">
                                <li><strong className="text-[var(--color-text-primary)]">Name</strong> – To address you personally in our response</li>
                                <li><strong className="text-[var(--color-text-primary)]">Email Address</strong> – To respond to your enquiry</li>
                                <li><strong className="text-[var(--color-text-primary)]">Company Name</strong> (optional) – To understand your business context</li>
                                <li><strong className="text-[var(--color-text-primary)]">Message Content</strong> – To understand and respond to your enquiry</li>
                            </ul>
                            <p className="mt-4">
                                We do not use tracking cookies, analytics services, or any form of automated data collection beyond essential functionality.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-medium text-[var(--color-text-primary)] mb-4">How We Use Your Information</h2>
                            <p>Your information is used solely to:</p>
                            <ul className="list-disc pl-6 mt-4 space-y-2">
                                <li>Respond to your enquiry or request</li>
                                <li>Provide information about services you've expressed interest in</li>
                                <li>Follow up on conversations you've initiated</li>
                            </ul>
                            <p className="mt-4">
                                We will never sell, rent, or share your personal information with third parties for marketing purposes.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-medium text-[var(--color-text-primary)] mb-4">Legal Basis for Processing</h2>
                            <p>We process your data based on:</p>
                            <ul className="list-disc pl-6 mt-4 space-y-2">
                                <li><strong className="text-[var(--color-text-primary)]">Consent</strong> – You explicitly consent to processing when you submit the contact form</li>
                                <li><strong className="text-[var(--color-text-primary)]">Legitimate Interest</strong> – To respond to business enquiries and provide requested information</li>
                            </ul>
                            <p className="mt-4">You can withdraw your consent at any time by contacting us.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-medium text-[var(--color-text-primary)] mb-4">Third-Party Services</h2>
                            <p>
                                <strong className="text-[var(--color-text-primary)]">Web3Forms</strong> – Contact form submissions are processed through Web3Forms,
                                a secure email delivery service. They act as a data processor on our behalf and do not retain your data beyond delivery.
                            </p>
                            <p className="mt-4">
                                We do not use Google Analytics, Facebook Pixel, or any other tracking or advertising services.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-medium text-[var(--color-text-primary)] mb-4">Data Retention</h2>
                            <p>
                                Contact form submissions are retained in email for the duration of our business relationship or until you request deletion.
                                We do not maintain a database of personal information beyond standard email records.
                            </p>
                            <p className="mt-4">
                                Cookie preferences are stored locally in your browser and can be cleared at any time through your browser settings.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-medium text-[var(--color-text-primary)] mb-4">Your Rights</h2>
                            <p>Under UK GDPR and the Data Protection Act 2018, you have the right to:</p>
                            <ul className="list-disc pl-6 mt-4 space-y-2">
                                <li><strong className="text-[var(--color-text-primary)]">Access</strong> – Request a copy of any personal data we hold about you</li>
                                <li><strong className="text-[var(--color-text-primary)]">Rectification</strong> – Request correction of inaccurate data</li>
                                <li><strong className="text-[var(--color-text-primary)]">Erasure</strong> – Request deletion of your data ("right to be forgotten")</li>
                                <li><strong className="text-[var(--color-text-primary)]">Restriction</strong> – Request we limit how we use your data</li>
                                <li><strong className="text-[var(--color-text-primary)]">Portability</strong> – Request your data in a portable format</li>
                                <li><strong className="text-[var(--color-text-primary)]">Objection</strong> – Object to processing based on legitimate interest</li>
                                <li><strong className="text-[var(--color-text-primary)]">Withdrawal</strong> – Withdraw consent at any time</li>
                            </ul>
                            <p className="mt-4">
                                To exercise any of these rights, please contact me at{' '}
                                <a href="mailto:rob.marriott.development@gmail.com" className="text-[var(--color-accent)] hover:underline">
                                    rob.marriott.development@gmail.com
                                </a>.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-medium text-[var(--color-text-primary)] mb-4">Complaints</h2>
                            <p>
                                If you are not satisfied with how I handle your request, you have the right to lodge a complaint
                                with the Information Commissioner's Office (ICO) at{' '}
                                <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-[var(--color-accent)] hover:underline">
                                    ico.org.uk
                                </a>.
                            </p>
                        </section>

                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default PrivacyPage;
