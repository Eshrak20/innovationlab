import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import techData from "../../../../../../public/Json/TeachData.json";
import "./Tech.css";

const Tech = () => {
    const [selectedTech, setSelectedTech] = useState("Frontend");
    const [animationKey, setAnimationKey] = useState(0);

    // Reset animation when tech changes
    useEffect(() => {
        setAnimationKey((prevKey) => prevKey + 1);
    }, [selectedTech]);

    // Calculate total width of one set of tech cards
    const calculateTotalWidth = (techArray) => {
        return techArray.length * (112 + 96); // card width (112) + gap (96)
    };

    // Animation variants
    const floatVariants = {
        float: {
            y: ["0%", "-15%", "0%"],
            transition: {
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
            },
        },
    };

    const buttonVariants = {
        hover: {
            scale: 1.05,
            backgroundColor: "rgba(255,255,255,0.3)",
        },
        tap: {
            scale: 0.95,
        },
        selected: {
            backgroundColor: "rgba(255,255,255,1)",
            color: "#4f46e5",
        },
    };

    return (
        <section className="relative overflow-hidden min-h-screen">
            {/* Animated Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 opacity-95"></div>
                <div className="absolute inset-0 opacity-30">
                    {[...Array(20)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute rounded-full bg-white"
                            style={{
                                width: `${Math.random() * 300 + 100}px`,
                                height: `${Math.random() * 300 + 100}px`,
                                top: `${Math.random() * 100}%`,
                                left: `${Math.random() * 100}%`,
                                opacity: Math.random() * 0.2 + 0.1,
                                filter: "blur(40px)",
                            }}
                        ></div>
                    ))}
                </div>
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 pt-20 md:py-20">
                {/* Main Content */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.h2
                        className="text-3xl md:text-6xl font-bold mb-6 text-center text-white"
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        Our{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300">
                            Tech Stack
                        </span>
                    </motion.h2>

                    <motion.p
                        className="md:text-xl text-center text-white/80 mb-16 max-w-3xl mx-auto"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    >
                        The technologies we use to build amazing digital
                        experiences
                    </motion.p>

                    {/* Tech Category Selector */}
                    <motion.div
                        className="flex flex-wrap justify-center gap-3 md:gap-4 md:p-6 mb-16 md:bg-white/10 md:backdrop-blur-md rounded-xl md:shadow-lg md:border md:border-white/10"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                    >
                        {Object.keys(techData).map((tech) => (
                            <motion.button
                                key={tech}
                                className={`px-2 py-1 text-base rounded-lg font-semibold text-white transition md:px-6 md:py-3 md:text-lg`}
                                onClick={() => setSelectedTech(tech)}
                                variants={buttonVariants}
                                whileHover="hover"
                                whileTap="tap"
                                animate={
                                    selectedTech === tech ? "selected" : ""
                                }
                            >
                                {tech}
                            </motion.button>
                        ))}
                    </motion.div>

                    {/* Track */}
                    <div className="relative h-32 md:h-96 overflow-hidden md:mb-32">
                        {/* Sleepers */}
                        <div className="absolute top-0 bottom-0 left-0 right-0 flex">
                            {[...Array(40)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="h-full w-2 mx-8 bg-white/10"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{
                                        delay: i * 0.05,
                                        duration: 0.5,
                                    }}
                                ></motion.div>
                            ))}
                        </div>

                        {/* Infinite moving tech cards */}
                        <div className="absolute top-0 left-0 h-full w-full overflow-hidden">
                            <motion.div
                                key={animationKey}
                                className="flex gap-5 md:gap-24 items-center h-full"
                                animate={{
                                    x: [
                                        "0%",
                                        `-${calculateTotalWidth(
                                            techData[selectedTech]
                                        )}px`,
                                    ],
                                }}
                                transition={{
                                    x: {
                                        repeat: Infinity,
                                        duration: 40,
                                        ease: "linear",
                                    },
                                }}
                            >
                                {[
                                    ...techData[selectedTech],
                                    ...techData[selectedTech],
                                ].map((item, index) => (
                                    <motion.div
                                        key={`${item.name}-${index}`}
                                        className="flex flex-col items-center group relative px-4"
                                        whileHover={{ scale: 1.2, zIndex: 10 }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 300,
                                        }}
                                    >
                                        <motion.div
                                            className="tech-card w-28 h-28 flex items-center justify-center rounded-2xl shadow-xl"
                                            style={{
                                                backgroundColor: item.hexCode
                                                    ? `${item.hexCode}33`
                                                    : "#ffffff33", // 33 = 20% opacity in hex
                                                boxShadow: `0 0 30px ${
                                                    item.hexCode || "#ffffff"
                                                }`,
                                                backdropFilter: "blur(5px)", // optional: adds a nice blur effect to the background
                                            }}
                                            whileHover={{
                                                scale: 1.5,
                                                boxShadow: `0 0 50px ${
                                                    item.hexCode || "#ffffff"
                                                }80`, // 80 = 50% opacity in hex
                                                zIndex: 20,
                                                backgroundColor: item.hexCode
                                                    ? `${item.hexCode}66`
                                                    : "#ffffff66", // 66 = 40% opacity
                                            }}
                                        >
                                            <motion.img
                                                src={`${item.image}`}
                                                alt={item.name}
                                                className="tech-logo w-20 h-20 object-contain"
                                                whileHover={{
                                                    rotate: 360,
                                                    scale: 1.5,
                                                    filter: "brightness(1.2) drop-shadow(0 0 15px white)",
                                                }}
                                                transition={{ duration: 0.8 }}
                                            />
                                        </motion.div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Tech;
