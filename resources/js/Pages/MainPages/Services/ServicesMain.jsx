import DynamicBanner from "@/Components/MyComponents/DynamicBanner";
import MainLayout from "@/Layouts/MainLayout";
import videoSrc from "@/../../public/reactAssets/videos/purplevideo.mp4";
import { Link } from "@inertiajs/react";
import Vision from "../About/Vision/Vision";
import { useEffect, useRef } from "react";

const ServicesMain = ({ service }) => {
     const contentRef = useRef();
        useEffect(() => {
            if (contentRef.current) {
                contentRef.current.scrollIntoView({
                    behavior: "smooth",
                    block: "end",
                });
            }
        }, []);
    return (
        <>
            <MainLayout>
                <div className="relative">
                    {/* Dynamic Banner */}
                    <DynamicBanner
                        videoSrc={videoSrc}
                        title="Our Services"
                        breadcrumb="Home / About Us"
                    />

                    {/* Service Cards - adjusted positioning for mobile */}
                    <div ref={contentRef} className="absolute top-[75%] sm:top-[85%] left-1/2 transform -translate-x-1/2 w-full px-4 z-10">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto">
                            {service?.slice(0, 4).map((item, index) => (
                                <div
                                    key={index}
                                    className="bg-white/90 card-hover-glow rounded-2xl shadow-2xl overflow-hidden hover:scale-105 transition-transform duration-300 border border-gray-200 backdrop-blur-sm"
                                >
                                    {/* Image */}
                                    {item.image && (
                                        <img
                                            src={`/storage/${item.image}`}
                                            alt={item.title}
                                            className="w-full h-40 sm:h-44 object-cover object-center"
                                        />
                                    )}

                                    {/* Content */}
                                    <div className="p-4 sm:p-5">
                                        <h3 className="text-lg sm:text-xl font-bold text-success mb-2">
                                            {item.title}
                                        </h3>
                                        <p className="text-xs sm:text-sm text-gray-700 line-clamp-3 mb-4">
                                            {item.short_description}
                                        </p>

                                        <Link href={`/service/${item.id}`}>
                                            <button className="px-3 sm:px-4 py-1 text-xs sm:text-sm bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-full hover:brightness-110 transition duration-200 shadow-md">
                                                Read More
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Spacing adjusted for mobile */}
                <div className="h-[1300px] md:h-56"></div>

                <div className="max-w-full lg:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-4 md:px-8 lg:px-12 mt-8 sm:mt-0">
                    {service?.map((item, index) => (
                        <Vision
                            key={item.id}
                            title={item.title}
                            description={item.short_description}
                            imageUrl={`/storage/${item.image}`}
                            link={`/service/${item.id}`}
                            buttonText="Read More"
                            reverse={index % 2 !== 0}
                            buttonTrue={true}
                        />
                    ))}
                </div>
            </MainLayout>
        </>
    );
};

export default ServicesMain;