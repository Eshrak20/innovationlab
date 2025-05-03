import { motion } from "framer-motion";
import "./Vision.css"; // Make sure to import the custom CSS

const Vision = ({ title, description, imageUrl, reverse }) => {
    return (
        <div
            className={`flex ${
                reverse ? "md:flex-row-reverse" : "md:flex-row"
            } flex-col md:justify-between md:items-center p-6 my-7 md:my-44 gap-5 md:gap-20`}
        >
            {/* Left side content */}
            <motion.div
                className="md:w-1/2"
                initial={{ opacity: 0, x: reverse ? 100 : -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                <h1 className="mb-7 text-2xl md:text-5xl md:font-bold">
                    {title}
                </h1>
                <p className="mt-2 md:whitespace-pre-line">{description}</p>
            </motion.div>

            {/* Right side image */}
            <motion.div
                className="md:w-[60%] image-container"
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
                        className="absolute top-0 left-0 w-full h-full object-fill rounded-xl transition-transform duration-500 ease-out group-hover:scale-110 shadow-glow"
                    />
                </div>
            </motion.div>
        </div>
    );
};

export default Vision;
