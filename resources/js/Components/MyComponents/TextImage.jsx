import { Link } from "@inertiajs/react";
import { motion } from "framer-motion";

const TextImage = ({
  title,
  description,
  buttonText,
  imageUrl,
  reverse,
  link,
  border, // Default border color
}) => {
  return (
    <div
      className={`flex ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      } flex-col 
    md:justify-between md:items-center 
     py-3 px-2
      md:py-10 2xl:py-20
     lg:px-24 xl:px-28 2xl:px-20
     2xl:my-20 gap-10 lg:gap-16 xl:gap-20 2xl:gap-32`}
    >
      {/* Left side content */}
      <motion.div
        className="md:w-1/2"
        initial={{ opacity: 0, x: -100 }} // Slide in from the left
        whileInView={{ opacity: 1, x: 0 }} // Fade in and move to original position
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }} // Trigger animation only once when in view
      >
        <h1 className="mb-7 text-3xl 2xl:text-5xl md:font-bold">{title}</h1>
        <p className="mt-2 md:whitespace-pre-line">{description}</p>
        <Link to={link}>
          <button className="nice-button mt-4">{buttonText}</button>
        </Link>
      </motion.div>

      {/* Right side image */}
      <motion.div
        className="md:w-1/2 mt-5 md:mt-0"
        initial={{ opacity: 0, x: 100 }} // Slide in from the right
        whileInView={{ opacity: 1, x: 0 }} // Fade in and move to original position
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div
          className={`ml-2 aspect-[1555/1199] w-full  border-success ${border} rounded-br-[35%] rounded-tl-[40%] pb-1 pr-1`}
        >
          <img
            src={imageUrl}
            alt="photo"
            className="w-full h-full object-cover rounded-br-[35%] rounded-tl-[35%] -mt-4 -ml-4"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default TextImage;
