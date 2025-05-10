import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Sample client logos (replace with your actual image paths)
const clients = [
    "/reactAssets/images/Clients/syntaxss.png",
    "/reactAssets/images/Clients/electron.png",
    "/reactAssets/images/Clients/happ_customers.png",
    "/reactAssets/images/Clients/turnkey.png",
    "/reactAssets/images/Clients/halalqueue.png",
    "/reactAssets/images/Clients/farmapp.png",
    "/reactAssets/images/Clients/nfthl.png",
    "/reactAssets/images/Clients/timetracker.png",
    "/reactAssets/images/Clients/Bizzy.png",
];

const HomeClient = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    // Duplicate the clients array to create seamless looping
    const duplicatedClients = [...clients, ...clients];

    return (
        <div className="py-16 bg-gray-50 dark:bg-gray-900 overflow-hidden" ref={ref}>
            <div className="container mx-auto px-4">
                <motion.h2
                    className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    Trusted By Industry Leaders
                </motion.h2>

                <div className="relative h-32 overflow-hidden">
                    {/* First Marquee */}
                    <motion.div
                        className="absolute flex items-center h-full"
                        animate={{
                            x: ["0%", "-100%"],
                        }}
                        transition={{
                            duration: 30,
                            ease: "linear",
                            repeat: Infinity,
                        }}
                    >
                        {duplicatedClients.map((client, index) => (
                            <div
                                key={`first-${index}`}
                                className="flex-shrink-0 mx-8 transition-all duration-300 hover:scale-110"
                            >
                                <img
                                    src={client}
                                    alt={`Client ${index + 1}`}
                                    className="h-16 object-contain max-w-[180px]"
                                    loading="lazy"
                                />
                            </div>
                        ))}
                    </motion.div>

                    {/* Second Marquee (delayed for continuous effect) */}
                    <motion.div
                        className="absolute flex items-center h-full"
                        animate={{
                            x: ["100%", "0%"],
                        }}
                        transition={{
                            duration: 30,
                            ease: "linear",
                            repeat: Infinity,
                        }}
                    >
                        {duplicatedClients.map((client, index) => (
                            <div
                                key={`second-${index}`}
                                className="flex-shrink-0 mx-8 transition-all duration-300 hover:scale-110"
                            >
                                <img
                                    src={client}
                                    alt={`Client ${index + 1}`}
                                    className="h-16 object-contain max-w-[180px]"
                                    loading="lazy"
                                />
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Button Area */}
                <motion.div
                    className="flex justify-center mt-12"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.4, duration: 0.6 }}
                >
                    {/* <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-lg hover:shadow-blue-500/20">
            View All Clients
          </button> */}
                </motion.div>
            </div>
        </div>
    );
};

export default HomeClient;
