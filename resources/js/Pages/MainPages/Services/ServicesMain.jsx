import DynamicBanner from "@/Components/MyComponents/DynamicBanner";
import MainLayout from "@/Layouts/MainLayout";
import videoSrc from "@/../../public/reactAssets/videos/bluevideo.mp4";

const ServicesMain = ({ service }) => {
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
                                            className="w-full h-44 object-cover"
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

                                        <div className="flex justify-end">
                                            <button className="px-4 py-1 text-sm bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-200 shadow-md">
                                                Read More
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Optional spacing to prevent content overlap */}
                <div className="h-96"></div>
            </MainLayout>
        </>
    );
};

export default ServicesMain;
