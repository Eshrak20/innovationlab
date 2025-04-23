import { useEffect, useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const Visit = ({ contactInfo }) => {
    const [currentDate, setCurrentDate] = useState("");
    const [isRoadView, setIsRoadView] = useState(false);

    useEffect(() => {
        const date = new Date();
        setCurrentDate(
            date.toLocaleString("en-US", { timeZone: "Asia/Dhaka" })
        );
    }, []);

    return (
        <div className="flex flex-col items-center p-5 gap-10 -pt-20">
            {/* Loop through contact items */}
            {contactInfo?.length > 0 ? (
                contactInfo.map((info, index) => {
                    const {
                        address = "No address provided",
                        phone = "No phone provided",
                        email = "No email provided",
                        mapDefault = "",
                        mapRoad = "",
                    } = info;

                    return (
                        <div key={index} className="w-full space-y-8">
                            {/* Info Section */}
                            <motion.div
                                className="w-full p-8 rounded-lg flex flex-wrap justify-between items-start text-success"
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.8,
                                    delay: index * 0.2,
                                }}
                            >
                                {/* Address */}
                                <motion.div className="flex flex-col items-center text-center space-y-4 w-full sm:w-1/3 hover:scale-105 transition-transform duration-300 mb-8 sm:mb-0">
                                    <div className="bg-blue-100 p-4 rounded-full shadow-md">
                                        <FaMapMarkerAlt className="text-5xl text-success" />
                                    </div>
                                    <h2 className="text-xl font-bold">
                                        Address
                                    </h2>
                                    <p className="text-lg text-gray-700 whitespace-pre-line">
                                        {address}
                                    </p>
                                </motion.div>

                                {/* Phone */}
                                <motion.div className="flex flex-col items-center text-center w-full sm:w-1/3 hover:scale-105 transition-transform duration-300 mb-8 sm:mb-0">
                                    <div className="bg-blue-100 p-4 rounded-full shadow-md">
                                        <FaPhoneAlt className="text-5xl text-success" />
                                    </div>
                                    <h2 className="text-xl font-bold mt-4">
                                        Phone Numbers
                                    </h2>
                                    <div className="text-lg text-gray-700 mt-4 space-y-1">
                                        <p>
                                            {info.phone || "No phone provided"}
                                        </p>
                                        <p>
                                            {info.phone2 && (
                                                <p>{info.phone2}</p>
                                            )}
                                        </p>
                                        <p>
                                            {info.phone3 && (
                                                <p>{info.phone3}</p>
                                            )}
                                        </p>
                                    </div>
                                </motion.div>
                                {/* Email */}
                                <motion.div className="flex flex-col items-center text-center space-y-4 w-full sm:w-1/3 hover:scale-105 transition-transform duration-300">
                                    <div className="bg-blue-100 p-4 rounded-full shadow-md">
                                        <FaEnvelope className="text-5xl text-success" />
                                    </div>
                                    <h2 className="text-xl font-bold">
                                        Emails
                                    </h2>
                                    <div className="text-lg text-gray-700 space-y-1">
                                        <p>
                                            {info.email || "No email provided"}{" "}
                                        </p>
                                        <p>
                                            {info.email2 && (
                                                <p>{info.email2}</p>
                                            )}
                                        </p>
                                        <p>
                                            {info.email3 && (
                                                <p>{info.email3}</p>
                                            )}
                                        </p>
                                    </div>
                                </motion.div>
                            </motion.div>

                            {/* Toggle Button */}
                            {(mapDefault || mapRoad) && (
                                <>
                                    <button
                                        onClick={() =>
                                            setIsRoadView(!isRoadView)
                                        }
                                        className="bg-success text-white px-6 py-2 rounded-full shadow-md hover:bg-blue-500 transition-colors duration-300"
                                    >
                                        {isRoadView
                                            ? "Show Default View"
                                            : "Show Road View"}
                                    </button>

                                    {/* Map */}
                                    <motion.div
                                        className="w-full"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 1 }}
                                    >
                                        <iframe
                                            src={
                                                isRoadView
                                                    ? mapRoad
                                                    : mapDefault
                                            }
                                            width="100%"
                                            height="650"
                                            className="rounded-sm border-0 shadow-lg"
                                            allowFullScreen=""
                                            loading="lazy"
                                            title={`Google Map View ${index}`}
                                        ></iframe>
                                    </motion.div>
                                </>
                            )}
                        </div>
                    );
                })
            ) : (
                <p className="text-lg text-center text-gray-500">
                    No contact information available.
                </p>
            )}
        </div>
    );
};

export default Visit;
