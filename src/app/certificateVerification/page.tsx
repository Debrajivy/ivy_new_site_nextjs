'use client';

import { useState, FormEvent } from 'react';
import Head from 'next/head';

interface Student {
    name: string;
    email: string;
    program: string;
    certificateId: string;
    completionMonth: string;
    branch: string;
}

const studentDatabase: Student[] = [
    {
        name: "John Doe",
        email: "john.doe@example.com",
        program: "Web Development",
        certificateId: "CERT-00123",
        completionMonth: "July 2024",
        branch: "Main Campus"
    },
    {
        name: "Jane Smith",
        email: "jane.smith@example.com",
        program: "Data Science",
        certificateId: "CERT-00456",
        completionMonth: "June 2024",
        branch: "Online"
    },
    {
        name: "Peter Jones",
        email: "peter.jones@example.com",
        program: "UI/UX Design",
        certificateId: "CERT-00789",
        completionMonth: "May 2024",
        branch: "Satellite Office"
    },
    {
        name: "Alice Williams",
        email: "alice.williams@example.com",
        program: "Cybersecurity",
        certificateId: "CERT-00101",
        completionMonth: "August 2024",
        branch: "Main Campus"
    },
];

const CertificateVerification = () => {
    const [studentName, setStudentName] = useState('');
    const [completionMonth, setCompletionMonth] = useState('');
    const [result, setResult] = useState<{ type: 'success' | 'error'; content: string; student?: Student } | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setResult(null);

        // Normalize input values for comparison
        const inputName = studentName.trim().toLowerCase();
        const inputMonth = completionMonth.trim().toLowerCase();

        // Simulate a network request delay
        await new Promise(resolve => setTimeout(resolve, 1000));

        const foundStudent = studentDatabase.find(student => {
            return student.name.toLowerCase() === inputName && student.completionMonth.toLowerCase() === inputMonth;
        });

        if (foundStudent) {
            setResult({
                type: 'success',
                content: 'Certificate Verified!',
                student: foundStudent
            });
        } else {
            setResult({
                type: 'error',
                content: 'Verification Failed. No certificate was found for the details provided. Please check your spelling and try again.'
            });
        }

        setIsLoading(false);
    };

    return (
        <>
            <Head>
                <title>Certificate Verification</title>
                <script src="https://cdn.tailwindcss.com"></script>
                <style>{`
                    body {
                        font-family: 'Inter', sans-serif;
                    }
                    .spinner {
                        border: 4px solid rgba(0, 0, 0, 0.1);
                        border-left-color: #ffffff;
                        border-radius: 50%;
                        width: 24px;
                        height: 24px;
                        animation: spin 1s linear infinite;
                    }
                    @keyframes spin {
                        0% { transform: rotate(0deg); }
                        100% { transform: rotate(360deg); }
                    }
                `}</style>
            </Head>

            <div className="bg-gray-50 min-h-screen flex items-center justify-center p-4">
                <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
                    <div className="text-center">
                        <h1 className="text-3xl font-bold text-gray-800 mb-2">Certificate Verification</h1>
                        <p className="text-gray-500 mb-6">Enter your details to verify your certificate.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="studentName" className="block text-sm font-medium text-gray-700 mb-1">Student Name</label>
                            <input
                                type="text"
                                id="studentName"
                                placeholder="Enter your full name"
                                required
                                value={studentName}
                                onChange={(e) => setStudentName(e.target.value)}
                                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="completionMonth" className="block text-sm font-medium text-gray-700 mb-1">Month of Completion</label>
                            <input
                                type="text"
                                id="completionMonth"
                                placeholder="e.g., July 2024"
                                required
                                value={completionMonth}
                                onChange={(e) => setCompletionMonth(e.target.value)}
                                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg shadow-md hover:bg-blue-700 transition duration-200 ease-in-out flex items-center justify-center"
                        >
                            <span className={isLoading ? 'hidden' : ''}>Verify Certificate</span>
                            <div className={isLoading ? 'spinner ml-2' : 'hidden spinner ml-2'}></div>
                        </button>
                    </form>

                    {result && (
                        <div
                            className={`mt-6 p-4 rounded-lg ${result.type === 'success' ? 'bg-green-100 text-green-800 border border-green-300' : 'bg-red-100 text-red-800 border border-red-300'}`}
                        >
                            <p className="font-bold text-lg mb-2">{result.content}</p>
                            {result.student && (
                                <>
                                    <p><strong>Student Name:</strong> {result.student.name}</p>
                                    <p><strong>Program:</strong> {result.student.program}</p>
                                    <p><strong>Certificate ID:</strong> {result.student.certificateId}</p>
                                    <p><strong>Completion Month:</strong> {result.student.completionMonth}</p>
                                </>
                            )}
                            {result.type === 'error' && (
                                <p>{result.content}</p>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default CertificateVerification;