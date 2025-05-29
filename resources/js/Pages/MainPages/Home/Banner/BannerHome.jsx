import React, { useState, useEffect } from "react";
import ReactTypingEffect from "react-typing-effect";
import { motion } from "framer-motion";
import BackgroundVideo from "./BackgroundVideo"; // Adjust the path if needed
import { Link } from "@inertiajs/react";

const BannerHome = ({ stats }) => {
    const taglines = [
        "Empowering Progress\nEngineering the Future",
        "Igniting Innovation\nCrafting Tomorrow",
        "Where Ideas Take Flight\nAnd Futures Are Built",
        "Think Beyond Boundaries\nBuild Beyond Limits",
        "Innovate the Present\nShape the Future",
        "Designing Solutions\nFueling Evolution",
        "Reimagining Possibilities\nEngineering Change",
        "Driven by Curiosity\nDefined by Innovation",
        "From Vision to Reality\nThe Future Starts Here",
    ];

    const [currentTagline, setCurrentTagline] = useState(taglines[0]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === taglines.length - 1 ? 0 : prevIndex + 1
            );
            setCurrentTagline(taglines[currentIndex]);
        }, 4000); // Change every 0.5 seconds

        return () => clearInterval(interval);
    }, [currentIndex]);

    return (
        <div
            style={{
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat", // 👈 this disables repeat
                width: "100%",
                height: "100vh",
                backgroundImage:
                    "url('reactAssets/images/ilabsimages/image3.avif')",
            }}
            className="relative w-full h-[500px] md:h-screen overflow-hidden text-white flex items-center justify-center bg-black"
        >
            {/* Background Video */}
            {/* <BackgroundVideo src="reactAssets/videos/purplevideo.mp4" /> */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/40"></div>

            {/* Centeblue Content */}
            <div className="relative text-center z-10">
                <h2 className="-mt-32 text-xl md:text-4xl 2xl:text-6xl font-extrabold uppercase text-white  bg-opacity-70 p-8 rounded-xl transition duration-500 ease-in-out hover:scale-95">
                    {currentTagline.split("\n").map((line, i) => (
                        <React.Fragment key={i}>
                            "{line}"
                            {i < currentTagline.split("\n").length - 1 && (
                                <br />
                            )}
                        </React.Fragment>
                    ))}
                </h2>

                <div className="absolute top-[55px] md:top-[175px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                    <motion.h1
                        className="2xl:text-4xl md:text-3xl font-bold leading-tight"
                        initial={{ opacity: 0, y: -50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <span className="inline-block text-white">
                            <ReactTypingEffect
                                text={[
                                    "Web Application",
                                    "Mobile Application",
                                    "Software Development",
                                    "IT Consultancy",
                                    "Managed Services",
                                    "Website Development",
                                ]}
                                speed={100}
                                eraseSpeed={50}
                                eraseDelay={2000}
                                typingDelay={1000}
                                cursorRenderer={(cursor) => <h1>{cursor}</h1>}
                            />
                        </span>
                    </motion.h1>

                    {/* Let's Talk Button */}
                    <Link href="/contact">
                        <motion.button
                            className="glowing-button py-1 px-3 text-sm rounded-full mt-1 md:mt-3 transition-all duration-300 ease-in-out md:py-3 md:px-6 md:text-xl  transform hover:translate-x-2"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            Lets Talk
                        </motion.button>
                    </Link>

                    <div className="flex justify-center mt-10 gap-6">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                className="text-center"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.2,
                                }}
                            >
                                <h2
                                    className="text-xl font-bold md:text-2xl"
                                    style={{ color: "white" }}
                                >
                                    {stat.value}+
                                </h2>
                                <p className="text-sm md:text-xl">
                                    {stat.label}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerHome;
