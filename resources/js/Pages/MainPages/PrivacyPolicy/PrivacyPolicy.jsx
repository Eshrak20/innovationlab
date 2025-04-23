import MainLayout from "@/Layouts/MainLayout";
import React from "react";
import policyData from "./privacyPolicy.json";

const PrivacyPolicy = () => {
    return (
        <MainLayout>
            <div className="mt-20 min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
                <main className="flex-1 container mx-auto px-6 py-10">
                    <h1 className="text-4xl font-extrabold mb-4 text-gray-800 dark:text-white">
                        {policyData.title}
                    </h1>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        <strong>Last updated:</strong> {policyData.lastUpdated}
                    </p>
                    <p className="mb-6 text-gray-700 dark:text-gray-400">
                        {policyData.intro}
                    </p>
                    <ul className="list-disc list-inside mb-6 text-gray-700 dark:text-gray-400">
                        {policyData.usageExamples.map((item, idx) => (
                            <li key={idx}>{item}</li>
                        ))}
                    </ul>
                    {policyData.sections.map((section, idx) => (
                        <div key={idx} className="mb-10">
                            <h2 className="text-2xl font-semibold mt-6 mb-3 text-gray-800 dark:text-white">
                                {section.title}
                            </h2>
                            {section.paragraph && (
                                <p className="mb-4 text-gray-700 dark:text-gray-400">
                                    {section.paragraph}
                                </p>
                            )}
                            {section.list && (
                                <ul className="list-disc list-inside text-gray-700 dark:text-gray-400">
                                    {section.list.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                    <h2 className="text-2xl font-semibold mt-6 mb-3 text-gray-800 dark:text-white">
                        {policyData.contact.title}
                    </h2>
                    <p className="mb-6 text-gray-700 dark:text-gray-400">
                        {policyData.contact.description}
                        <a
                            href={`mailto:${policyData.contact.email}`}
                            className="text-blue-600 hover:underline"
                        >
                            {policyData.contact.email}
                        </a>
                    </p>
                </main>
            </div>
        </MainLayout>
    );
};

export default PrivacyPolicy;
