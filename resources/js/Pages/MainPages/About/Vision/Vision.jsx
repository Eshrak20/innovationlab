import { motion } from 'framer-motion';

const Vision = ({ title, description, imageUrl, reverse }) => {
  return (
    <div
      className={`flex ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      } flex-col md:justify-between md:items-center p-6 my-7 md:my-44  gap-5 md:gap-20`}
    >
      {/* Left side content */}
      <motion.div
        className="md:w-1/2"
        initial={{ opacity: 0, x: reverse ? 100 : -100 }} // Slide in from the right or left
        whileInView={{ opacity: 1, x: 0 }} // Fade in and move to original position
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }} // Trigger animation only once when in view
      >
        <h1 className="mb-7 text-2xl md:text-5xl md:font-bold">{title}</h1>
        <p className="mt-2 md:whitespace-pre-line">{description}</p>
      </motion.div>

      {/* Right side image */}
      <motion.div
        className="md:w-1/2"
        initial={{ opacity: 0, scale: 0.8 }} // Start scaled down and invisible
        whileInView={{ opacity: 1, scale: 1 }} // Fade in and scale to normal size
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }} // Delay for staggered effect
        viewport={{ once: true }}
      >
        <div className="relative w-full" style={{ paddingTop: '75%' }}> {/* Adjust padding-top for aspect ratio */}
          <img
            src={imageUrl}
            alt="photo"
            className="absolute rounded-badge top-0 left-0 w-full h-full object-cover shadow-md"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Vision;
