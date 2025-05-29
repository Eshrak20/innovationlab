// src/components/BackgroundVideo.jsx
import React from "react";

const BackgroundVideo = ({ src }) => {
    return (
        <>
            {/* Background Video */}
            <video
                className="absolute top-0 left-0 w-full h-full object-cover z-negative"
                autoPlay
                loop
                muted
                playsInline
                src={src}
            ></video>

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent"></div>
        </>
    );
};

export default BackgroundVideo;
