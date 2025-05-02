import React from 'react';
import MainLayout from '@/Layouts/MainLayout';

const ServicesDetails = ({ service }) => {
    return (
        <MainLayout>
            <div className="max-w-5xl mx-auto px-4 py-28">
                <div className="bg-white shadow-2xl rounded-3xl overflow-hidden">
                    {/* Header Image */}
                    {service.image && (
                        <img
                            src={`/storage/${service.image}`}
                            alt={service.title}
                            className="w-full h-96 object-cover"
                        />
                    )}

                    {/* Content */}
                    <div className="p-10">
                        <h1 className="text-3xl font-bold text-blue-600 mb-4">{service.title}</h1>
                        <p className="text-gray-700 text-base leading-relaxed">
                            {service.description || 'No full description provided.'}
                        </p>

                        {/* Optional Extra Details */}
                        {service.extra_info && (
                            <div className="mt-6 text-sm text-gray-500">
                                <strong>More Info:</strong> {service.extra_info}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default ServicesDetails;
