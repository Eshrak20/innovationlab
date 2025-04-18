import React from "react";

const DynamicBanner = ({ videoSrc, title, breadcrumb }) => {
    return (
        <div className="relative w-full h-64 md:h-[500px] 2xl:h-[700px] flex items-center justify-center">
            {/* Background Video */}
            <video
                className="absolute inset-0 w-full h-full object-cover"
                src={videoSrc}
                autoPlay
                muted
                loop
                playsInline
            ></video>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Centered Text Content */}
            <div className="absolute inset-0 z-10 flex items-center justify-center">
                <h1 className="text-3xl md:text-7xl underline font-bold text-white text-center">
                    {title}
                </h1>
            </div>
        </div>
    );
};

export default DynamicBanner;
