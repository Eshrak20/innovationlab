import React from "react";
import MainLayout from "@/Layouts/MainLayout";
import { Link } from "@inertiajs/react";

const ServicesDetails = ({ service }) => {
    return (
        <MainLayout>
            {/* Full-width Banner Image */}
            {service.image && (
                <div className="w-full">
                    <img
                        src={`/storage/${service.image}`}
                        alt={service.title}
                        className="w-full h-[500px] object-cover blur-lg"
                    />
                </div>
            )}

            {/* Content */}
            <div className="max-w-5xl mx-auto md:px-4 md:pb-20 -mt-64">
                <div className="bg-white dark:bg-gray-900 md:shadow-2xl md:rounded-2xl overflow-hidden card-hover-glow transition duration-300 relative">
                    <div className="px-5 py-3 md:p-10 text-gray-800 dark:text-gray-300">
                        <h1 className="text-4xl font-extrabold text-success mb-3 md:mb-6">
                            {service.title}
                        </h1>
                        <p className="text-sm md:text-lg leading-relaxed mb-6">
                            {service.description ||
                                `This service is designed with care to ensure your satisfaction at every step. 
                                We focus on providing tailored solutions that match your needs precisely. Whether it's 
                                consultation, implementation, or ongoing support, our team stands by to deliver. 
                                Our approach is built on trust, quality, and innovation, allowing us to adapt and 
                                grow with you. You'll notice the difference in every interaction—from the clarity 
                                of communication to the seamless delivery of outcomes. That's what makes this 
                                service truly special and dependable.`}
                        </p>

                        {/* Optional Extra Details */}
                        {service.extra_info && (
                            <div className="mt-6 text-sm text-gray-500 dark:text-gray-400 italic">
                                <strong>More Info:</strong> {service.extra_info}
                            </div>
                        )}

                        <div className="flex flex-col md:flex-row items-center justify-between mt-6">
                            {/* Optional CTA */}
                            <div className="mt-4 md:mt-10">
                                <button
                                    onClick={() =>
                                        window.open(
                                            `https://www.google.com/search?q=${encodeURIComponent(
                                                service.title
                                            )}`,
                                            "_blank"
                                        )
                                    }
                                    className="glowing-button px-6 py-3 rounded-xl text-lg font-semibold"
                                >
                                    Learn More
                                </button>
                            </div>
                            <Link href="/service" className="mt-4 md:mt-10">
                                <button className="glowing-button px-6 py-3 rounded-xl text-lg font-semibold">
                                    Back to Services
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default ServicesDetails;
