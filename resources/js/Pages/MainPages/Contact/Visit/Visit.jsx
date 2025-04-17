import { useEffect, useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const Visit = () => {
    const [currentDate, setCurrentDate] = useState("");
    const [isRoadView, setIsRoadView] = useState(false);

    const defaultMapUrl =
        "https://www.google.com/maps/embed?pb=!4v1744818607364!6m8!1m7!1s6W7BqznYrnXkhpQCTiqXDQ!2m2!1d23.75607228895079!2d90.35256269575737!3f186.85668870781612!4f24.80265692807157!5f0.4000000000000002";

    const roadViewUrl =
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d528.2464174408202!2d90.35223031080713!3d23.756006649101764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bf66b3c0a14f%3A0x777f459aa721862f!2sChadd%20Uddan%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1744386714513!5m2!1sen!2sbd";

    useEffect(() => {
        const date = new Date();
        setCurrentDate(
            date.toLocaleString("en-US", { timeZone: "Asia/Dhaka" })
        );
    }, []);

    return (
        <div className="flex flex-col items-center p-5 gap-10 -pt-20">
            {/* Information Section */}
            <motion.div
                className="w-full p-8 rounded-lg flex flex-wrap justify-between items-start text-success"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                {/* Address Section */}
                <motion.div className="flex flex-col items-center text-center space-y-4 w-full sm:w-1/3 hover:scale-105 transition-transform duration-300 mb-8 sm:mb-0">
                    <div className="bg-blue-100 p-4 rounded-full shadow-md">
                        <FaMapMarkerAlt className="text-5xl text-success" />
                    </div>
                    <h2 className="text-xl font-bold">Address</h2>
                    <p className="text-lg text-gray-700">
                        Head Office Address: House # 5 <br />
                        Road # 01 Chaduddan, Mohammadpur,
                        <br />
                        Dhaka-1205
                    </p>
                </motion.div>

                {/* Phone Section */}
                <motion.div className="flex flex-col items-center text-center w-full sm:w-1/3 hover:scale-105 transition-transform duration-300 mb-8 sm:mb-0">
                    <div className="bg-blue-100 p-4 rounded-full shadow-md">
                        <FaPhoneAlt className="text-5xl text-success" />
                    </div>
                    <h2 className="text-xl font-bold mt-4">Phone Numbers</h2>
                    <p className="text-lg text-gray-700 mt-4">
                        +880 1521-498303
                    </p>
                    <p className="text-lg text-gray-700">+880 1309176398</p>
                </motion.div>

                {/* Email Section */}
                <motion.div className="flex flex-col items-center text-center space-y-4 w-full sm:w-1/3 hover:scale-105 transition-transform duration-300">
                    <div className="bg-blue-100 p-4 rounded-full shadow-md">
                        <FaEnvelope className="text-5xl text-success" />
                    </div>
                    <h2 className="text-xl font-bold">Email</h2>
                    <div className="text-start">
                        <p className="text-lg text-gray-700">
                            support@innovationlabs360.com
                        </p>
                        <p className="text-lg text-gray-700">
                            info@innovationlabs360.com
                        </p>
                    </div>
                </motion.div>
            </motion.div>

            {/* Toggle Button */}
            <button
                onClick={() => setIsRoadView(!isRoadView)}
                className="bg-success text-white px-6 py-2 rounded-full shadow-md hover:bg-blue-500 transition-colors duration-300"
            >
                {isRoadView ? "Show Default View" : "Show Road View"}
            </button>

            {/* Map Section */}
            <motion.div
                className="w-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <iframe
                    src={isRoadView ? roadViewUrl : defaultMapUrl}
                    width="100%"
                    height="650"
                    className="rounded-sm border-0 shadow-lg"
                    allowFullScreen=""
                    loading="lazy"
                    title="Google Map View"
                ></iframe>
            </motion.div>
        </div>
    );
};

export default Visit;
