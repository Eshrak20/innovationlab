import React from "react";
// import { Player } from "@lottiefiles/react-lottie-player";
// import underDevAnimation from "@/../../public/reactAssets/lottiefile/404.json"; 
const UnderDev = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-teal-800 to-gray-900 text-white px-4">
            {/* <Player
                autoplay
                loop
                src={underDevAnimation}
                className="w-72 md:w-96"
            /> */}
            <h1 className="text-4xl md:text-5xl font-bold mt-6">
                Under Development
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mt-2 text-center">
                We’re working hard to bring you something amazing! <br /> Stay
                tuned.
            </p>
        </div>
    );
};

export default UnderDev;
