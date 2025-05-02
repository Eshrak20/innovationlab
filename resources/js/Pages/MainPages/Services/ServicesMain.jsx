import DynamicBanner from "@/Components/MyComponents/DynamicBanner";
import MainLayout from "@/Layouts/MainLayout";
import videoSrc from "@/../../public/reactAssets/videos/bluevideo.mp4";
import { Link } from "@inertiajs/react";
import Vision from "../About/Vision/Vision";

const ServicesMain = ({ service }) => {
    return (
        <>
            <MainLayout>
                <div>
                    <div className="relative">
                        {/* Dynamic Banner */}
                        <DynamicBanner
                            videoSrc={videoSrc}
                            title="Our Services"
                            breadcrumb="Home / About Us"
                        />

                        {/* Service Cards - slightly overlapping the banner */}
                        <div className="absolute top-[85%] left-1/2 transform -translate-x-1/2 w-full px-4 z-10 ">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                                {service?.slice(0, 4).map((item, index) => (
                                    <div
                                        key={index}
                                        className="bg-white rounded-2xl shadow-2xl overflow-hidden hover:scale-105 transition-transform duration-300 border border-gray-200"
                                    >
                                        {/* Image */}
                                        {item.image && (
                                            <img
                                                src={`/storage/${item.image}`}
                                                alt={item.title}
                                                className="w-full h-44 object-fill object-center"
                                            />
                                        )}

                                        {/* Content */}
                                        <div className="p-5">
                                            <h3 className="text-xl font-bold text-blue-600 mb-2">
                                                {item.title}
                                            </h3>
                                            <p className="text-sm text-gray-700 line-clamp-3 mb-4">
                                                {item.short_description}
                                            </p>

                                            <Link href={`/service/${item.id}`}>
                                                <button className="px-4 py-1 text-sm bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-200 shadow-md">
                                                    Read More
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-56"></div>

                <div className="max-w-full lg:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-4 md:px-8 lg:px-12">
                    <Vision
                        title="Become the most preferred technology"
                        description={`Become the most preferred technology integrator and service provider with \n multiplatform, vendor independent information and communication \n technology solutions for both local and global market.`}
                        imageUrl={`reactAssets/images/AboutBoxAbout/2.png`}
                    />
                    <Vision
                        title="To develop a sustainable information Technology"
                        description={`To develop a sustainable information Technology infra. & design the most \n Scalable IT solutions enabling Clients to reach their business goals.`}
                        imageUrl={`reactAssets/images/AboutBoxAbout/1.png`}
                        reverse={true}
                    />
                    <Vision
                        title="Become the most preferred technology"
                        description={`Become the most preferred technology integrator and service provider with \n multiplatform, vendor independent information and communication \n technology solutions for both local and global market.`}
                        imageUrl={`reactAssets/images/AboutBoxAbout/2.png`}
                    />
                    <Vision
                        title="To develop a sustainable information Technology"
                        description={`To develop a sustainable information Technology infra. & design the most \n Scalable IT solutions enabling Clients to reach their business goals.`}
                        imageUrl={`reactAssets/images/AboutBoxAbout/1.png`}
                        reverse={true}
                    />
                </div>

                {/* Optional spacing to prevent content overlap */}
            </MainLayout>
        </>
    );
};

export default ServicesMain;
