import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const termsConditions = () => {
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
                <h1 style={headingStyle}> Terms & Conditions</h1>
                <p style={paragraphStyle}>
                    Welcome to Ivy Professional School (“Ivy,” “we,” “our,” or “us”). By
                    accessing or using our website, courses, or services, you agree to these
                    Terms & Conditions. Please read them carefully.
                </p>

                <h2 style={sectionHeadingStyle}>1. Use of Website & Services</h2>
                <ul style={listStyle}>
                    <li style={listItemStyle}>
                        The content on ivyproschool.com is for your personal, non-commercial use.
                    </li>
                    <li style={listItemStyle}>
                        You agree not to misuse, copy, resell, or distribute our materials
                        without prior written permission.
                    </li>
                    <li style={listItemStyle}>
                        Unauthorized use of our services may result in suspension or
                        termination of your access.
                    </li>
                </ul>

                <h2 style={sectionHeadingStyle}>2. Registration & Accounts</h2>
                <ul style={listStyle}>
                    <li style={listItemStyle}>
                        To access certain services, you may need to register and provide
                        accurate personal information.
                    </li>
                    <li style={listItemStyle}>
                        You are responsible for maintaining the confidentiality of your login
                        credentials.
                    </li>
                    <li style={listItemStyle}>
                        Ivy reserves the right to suspend or terminate accounts that violate
                        these terms.
                    </li>
                </ul>

                <h2 style={sectionHeadingStyle}>3. Courses, Payments & Refunds</h2>
                <ul style={listStyle}>
                    <li style={listItemStyle}>
                        Course fees must be paid as per the published structure.
                    </li>
                    <li style={listItemStyle}>
                        Refunds, if applicable, will follow Ivy’s Refund Policy (shared at the
                        time of enrollment).
                    </li>
                    <li style={listItemStyle}>
                        Ivy may update fees, curriculum, or course structures at any time.
                    </li>
                </ul>

                <h2 style={sectionHeadingStyle}>4. Intellectual Property</h2>
                <ul style={listStyle}>
                    <li style={listItemStyle}>
                        All content, including course material, logos, graphics, and website
                        content, is Ivy’s intellectual property or licensed to Ivy.
                    </li>
                    <li style={listItemStyle}>
                        You may not copy, reproduce, or distribute our materials without
                        written consent.
                    </li>
                </ul>

                <h2 style={sectionHeadingStyle}>5. Student Conduct</h2>
                <ul style={listStyle}>
                    <li style={listItemStyle}>
                        Learners are expected to maintain professional and respectful conduct
                        during courses, workshops, and community engagements.
                    </li>
                    <li style={listItemStyle}>
                        Ivy reserves the right to remove learners who engage in misconduct
                        without refund.
                    </li>
                </ul>

                <h2 style={sectionHeadingStyle}>6. Disclaimers</h2>
                <ul style={listStyle}>
                    <li style={listItemStyle}>
                        Courses and content are provided “as is” without warranties of
                        accuracy or fitness for a particular purpose.
                    </li>
                    <li style={listItemStyle}>
                        Ivy does not guarantee specific career outcomes or job placements.
                    </li>
                </ul>

                <h2 style={sectionHeadingStyle}>7. Limitation of Liability</h2>
                <ul style={listStyle}>
                    <li style={listItemStyle}>
                        Ivy will not be liable for any indirect, incidental, or consequential
                        damages arising from use of our services.
                    </li>
                </ul>

                <h2 style={sectionHeadingStyle}>8. Governing Law</h2>
                <ul style={listStyle}>
                    <li style={listItemStyle}>These terms are governed by the laws of India.</li>
                    <li style={listItemStyle}>
                        Any disputes shall be subject to the exclusive jurisdiction of Kolkata
                        courts.
                    </li>
                </ul>
            </div>
            <Footer />

        </>

    );
};

export default termsConditions;