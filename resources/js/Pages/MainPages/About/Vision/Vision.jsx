import { motion } from "framer-motion";
import "./Vision.css";

const Vision = ({ title, description, imageUrl, reverse }) => {
    return (
        <div
            className={`flex ${
                reverse ? "md:flex-row-reverse" : "md:flex-row"
            } flex-col md:justify-between md:items-center p-6 my-7 md:my-44 gap-5 md:gap-20 relative`}
        >
            {/* Decorative background elements */}
            <div className="absolute -z-10 inset-0 overflow-hidden opacity-10">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-900 to-indigo-800 rounded-full filter blur-3xl"></div>
            </div>

            {/* Left side content */}
            <motion.div
                className="md:w-1/2 relative"
                initial={{ opacity: 0, x: reverse ? 100 : -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                <div className="text-gradient bg-clip-text text-transparent">
                    <h1 className="mb-7 text-3xl md:text-5xl font-extrabold leading-tight">
                        {title}
                    </h1>
                </div>
                <p className="mt-2 md:whitespace-pre-line text-lg md:text-xl text-gray-800 dark:text-gray-200 leading-relaxed">
                    {description}
                </p>
                
                {/* Decorative accent */}
                <div className="absolute -left-10 top-0 h-full w-1 bg-gradient-to-b from-purple-500 to-indigo-400 rounded-full"></div>
            </motion.div>

            {/* Right side image */}
            <motion.div
                className="md:w-[60%] image-container relative group"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
            >
                <div className="relative w-full aspect-video rounded-xl animated-border overflow-hidden group">
                    <span aria-hidden="true" />
                    <img
                        src={imageUrl}
                        alt="photo"
                        className="absolute top-0 left-0 w-full h-full object-fill rounded-xl transition-all duration-500 ease-out group-hover:scale-95 shadow-glow"
                    />
                    {/* Image overlay effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 via-indigo-800/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                {/* Floating decorative elements */}
                <div className="absolute -right-5 -top-5 w-20 h-20 rounded-full bg-purple-600/20 filter blur-xl z-0"></div>
                <div className="absolute -left-5 -bottom-5 w-16 h-16 rounded-full bg-indigo-600/20 filter blur-xl z-0"></div>
            </motion.div>
        </div>
    );
};

export default Vision;