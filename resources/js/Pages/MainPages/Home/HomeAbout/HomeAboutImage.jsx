import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const HomeAboutImage = () => {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(1);

    const images = [
        {
            main: "reactAssets/images/HomeAboutImages/lab1.jpeg",
            left1: "reactAssets/images/HomeAboutImages/potraitlab3.jpeg",
            left2: "reactAssets/images/HomeAboutImages/potraitlab4.jpeg",
        },
        {
            main: "reactAssets/images/HomeAboutImages/lab2.jpeg",
            left1: "reactAssets/images/HomeAboutImages/potraitlab4.jpeg",
            left2: "reactAssets/images/HomeAboutImages/potraitlab3.jpeg",
        },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setDirection(1);
            setIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const fadeSlide = {
        enter: (direction) => ({
            opacity: 0,
            x: direction > 0 ? 100 : -100,
            scale: 0.95
        }),
        center: {
            opacity: 1,
            x: 0,
            scale: 1,
            transition: { duration: 0.8, ease: "easeOut" }
        },
        exit: (direction) => ({
            opacity: 0,
            x: direction > 0 ? -100 : 100,
            scale: 0.95,
            transition: { duration: 0.6, ease: "easeIn" }
        }),
    };

    return (
        <div className="flex justify-center items-center w-full gap-4 p-4">
            {/* Left - 2 Small Images */}
            <div className="flex flex-col gap-4">
                <AnimatePresence mode="wait" custom={direction}>
                    <motion.img
                        key={`left1-${index}`}
                        src={images[index].left1}
                        alt="Left Top"
                        className="w-40 h-40 rounded-xl object-cover shadow-lg"
                        variants={fadeSlide}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        custom={direction}
                    />
                </AnimatePresence>
                <AnimatePresence mode="wait" custom={direction}>
                    <motion.img
                        key={`left2-${index}`}
                        src={images[index].left2}
                        alt="Left Bottom"
                        className="w-40 h-40 rounded-xl object-cover shadow-lg"
                        variants={fadeSlide}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        custom={-direction}
                    />
                </AnimatePresence>
            </div>

            {/* Right - Big Main Image */}
            <div className="relative w-[500px] h-[500px] rounded-2xl overflow-hidden shadow-2xl ">
                <AnimatePresence custom={direction} mode="wait">
                    <motion.div
                        key={`main-${index}`}
                        className="absolute inset-0"
                        custom={direction}
                        variants={fadeSlide}
                        initial="enter"
                        animate="center"
                        exit="exit"
                    >
                        <img
                            src={images[index].main}
                            alt="Main"
                            className="w-full h-full object-cover rounded-2xl"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-purple-900/20 " />
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};

export default HomeAboutImage;
