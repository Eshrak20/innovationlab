import React from "react";
import MainLayout from "@/Layouts/MainLayout";
import termsData from "./termsConditions.json";

const TermsConditions = () => {
    return (
        <MainLayout>
            <div className="mt-20 min-h-screen flex flex-col bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-gray-200">
                <main className="flex-1 container mx-auto px-6 py-10">
                    <h1 className="text-3xl font-bold mb-4">{termsData.title}</h1>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                        <strong>Last updated:</strong> {termsData.lastUpdated}
                    </p>
                    <p className="mb-6">{termsData.intro}</p>

                    {termsData.sections.map((section, index) => (
                        <div key={index} className="mb-8">
                            <h2 className="text-xl font-semibold mb-3">{section.title}</h2>

                            {section.paragraphs &&
                                section.paragraphs.map((para, i) => (
                                    <p key={i} className="mb-3">{para}</p>
                                ))}

                            {section.list && (
                                <ul className="list-disc list-inside space-y-2 pl-4">
                                    {section.list.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </main>
            </div>
        </MainLayout>
    );
};

export default TermsConditions;
