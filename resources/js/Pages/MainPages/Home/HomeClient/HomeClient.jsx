import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

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
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const duplicatedClients = [...clients, ...clients];

  const marqueeControls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) {
      marqueeControls.stop();
    } else {
      marqueeControls.start({
        y: [0, -50],
        transition: { duration: 0.8, ease: [0.68, -0.55, 0.27, 1.55] }, // Custom easing
      }).then(() => {
        marqueeControls.start({
          y: 0,
          x: ["0%", "-100%"],
          transition: {
            duration: 30,
            ease: "linear",
            repeat: Infinity,
          },
        });
      });
    }
  }, [isHovered, marqueeControls]);

  // Dragging logic (mouse & touch)
  const marqueeRef = useRef(null);
  let isDown = false, startX, scrollLeft;

  const handleStart = (e) => {
    isDown = true;
    marqueeRef.current.classList.add("cursor-grabbing");
    startX = (e.pageX || e.touches[0].pageX) - marqueeRef.current.offsetLeft;
    scrollLeft = marqueeRef.current.scrollLeft;
  };

  const handleEnd = () => {
    isDown = false;
    marqueeRef.current.classList.remove("cursor-grabbing");
  };

  const handleMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = (e.pageX || e.touches[0].pageX) - marqueeRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    marqueeRef.current.scrollLeft = scrollLeft - walk;
  };

  // Preload images
  useEffect(() => {
    if (inView) {
      duplicatedClients.forEach((src) => {
        const img = new Image();
        img.src = src;
      });
    }
  }, [inView, duplicatedClients]);

  return (
    <div
      className="py-16 bg-gray-50 dark:bg-gray-900 overflow-hidden"
      ref={ref}
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Trusted By Industry Leaders
        </motion.h2>

        <div
          className="relative h-44 overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onMouseDown={handleStart}
          onMouseUp={handleEnd}
          onMouseMove={handleMove}
          onTouchStart={handleStart}
          onTouchEnd={handleEnd}
          onTouchMove={handleMove}
          ref={marqueeRef}
        >
          <motion.div
            className="absolute flex items-center h-full select-none"
            animate={marqueeControls}
            style={{ cursor: isDown ? "grabbing" : "grab" }}
          >
            {duplicatedClients.map((client, index) => (
              <motion.div
                key={`client-${index}`}
                className="flex-shrink-0 mx-8"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
                whileHover={{ scale: 1.1 }}
              >
                <img
                  src={client}
                  alt={`Client ${index + 1}`}
                  className="h-16 object-contain max-w-[180px]"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HomeClient;
