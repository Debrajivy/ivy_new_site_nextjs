import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
const PrivacyPolicy = () => {
    const containerStyle = {
        maxWidth: '800px',
        margin: '0 auto',
        padding: '2rem',
        fontFamily: 'Arial, sans-serif',
        lineHeight: '1.6',
        color: '#333',
    };

    const headingStyle = {
        color: '#0056b3',
        borderBottom: '2px solid #ddd',
        paddingBottom: '0.5rem',
        marginBottom: '1.5rem',
    };

    const sectionHeadingStyle = {
        color: '#007bff',
        marginTop: '2rem',
        marginBottom: '0.5rem',
    };

    const paragraphStyle = {
        marginBottom: '1rem',
    };

    const listStyle = {
        listStyleType: 'disc',
        paddingLeft: '20px',
    };

    const listItemStyle = {
        marginBottom: '0.5rem',
    };

    return (

        <>
            <Navbar />
            <div style={containerStyle}>
                <h1 style={headingStyle}>Privacy Policy</h1>
                <p style={paragraphStyle}>
                    Ivy Professional School (“Ivy,” “we,” “our,” or “us”) respects your
                    privacy and is committed to protecting your personal data.
                </p>

                <h2 style={sectionHeadingStyle}>1. Information We Collect</h2>
                <p>
                    We collect the following information when you interact with our website,
                    forms, or services:
                </p>
                <ul style={listStyle}>
                    <li style={listItemStyle}>
                        <strong>Personal Data:</strong> Name, email, phone number, address,
                        academic/professional details.
                    </li>
                    <li style={listItemStyle}>
                        <strong>Payment Data:</strong> Transaction details for course
                        enrollments (processed securely by third-party payment providers).
                    </li>
                    <li style={listItemStyle}>
                        <strong>Usage Data:</strong> Website analytics, cookies, device
                        information, and browsing behavior.
                    </li>
                </ul>

                <h2 style={sectionHeadingStyle}>2. How We Use Your Information</h2>
                <p>We use collected data to:</p>
                <ul style={listStyle}>
                    <li style={listItemStyle}>Provide and improve our courses and services.</li>
                    <li style={listItemStyle}>Process payments and issue invoices.</li>
                    <li style={listItemStyle}>
                        Send updates, marketing communications, and learning resources.
                    </li>
                    <li style={listItemStyle}>Personalize your learning experience.</li>
                    <li style={listItemStyle}>Comply with legal requirements.</li>
                </ul>

                <h2 style={sectionHeadingStyle}>3. Sharing of Information</h2>
                <ul style={listStyle}>
                    <li style={listItemStyle}>We do not sell or rent your personal information.</li>
                    <li style={listItemStyle}>
                        We may share data with trusted partners (e.g., instructors, payment
                        gateways, learning management platforms) for delivering services.
                    </li>
                    <li style={listItemStyle}>
                        We may disclose data if required by law or to protect our legal rights.
                    </li>
                </ul>

                <h2 style={sectionHeadingStyle}>4. Cookies & Tracking</h2>
                <ul style={listStyle}>
                    <li style={listItemStyle}>
                        Ivy uses cookies and similar technologies to analyze site traffic and
                        improve user experience.
                    </li>
                    <li style={listItemStyle}>You can control cookie settings through your browser.</li>
                </ul>

                <h2 style={sectionHeadingStyle}>5. Data Security</h2>
                <ul style={listStyle}>
                    <li style={listItemStyle}>
                        We implement reasonable security practices to protect your personal data.
                    </li>
                    <li style={listItemStyle}>
                        However, no method of transmission over the internet is 100% secure.
                    </li>
                </ul>

                <h2 style={sectionHeadingStyle}>6. Your Rights</h2>
                <ul style={listStyle}>
                    <li style={listItemStyle}>
                        Depending on applicable law (e.g., GDPR), you may have the right to:
                    </li>
                    <ul style={{ ...listStyle, marginTop: '0.5rem' }}>
                        <li style={listItemStyle}>Access, correct, or delete your personal data.</li>
                        <li style={listItemStyle}>
                            Withdraw consent for marketing communications.
                        </li>
                        <li style={listItemStyle}>Request a copy of your stored data.</li>
                    </ul>
                </ul>

                <h2 style={sectionHeadingStyle}>7. Third-Party Links</h2>
                <ul style={listStyle}>
                    <li style={listItemStyle}>
                        Our website may contain links to third-party websites. We are not
                        responsible for their privacy practices.
                    </li>
                </ul>

                <h2 style={sectionHeadingStyle}>8. Updates to This Policy</h2>
                <ul style={listStyle}>
                    <li style={listItemStyle}>
                        We may update this Privacy Policy periodically. The latest version will
                        always be available on our website.
                    </li>
                </ul>

                <h2 style={sectionHeadingStyle}>9. Contact Us</h2>
                <p>
                    For questions or concerns regarding these policies, contact:
                </p>
                <address>
                    <strong>Ivy Professional School</strong><br />
                    Email: <a href="mailto:[info@ivyproschool.com]">[info@ivyproschool.com]</a><br />
                    Phone: <a href="tel:+919748441111">[+91 7676882222]</a><br />
                    Address: [Camac Street, Kolkata]
                </address>
            </div>
                <Footer />
            </>
        );
    }
    
    export default PrivacyPolicy;