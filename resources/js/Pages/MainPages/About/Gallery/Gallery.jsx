import { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../../../../../../public/reactAssets/images/Gallery/1.jpeg";
import img2 from "../../../../../../public/reactAssets/images/Gallery/2.jpeg";
import img3 from "../../../../../../public/reactAssets/images/Gallery/3.jpeg";
import img4 from "../../../../../../public/reactAssets/images/Gallery/4.jpeg";
import img5 from "../../../../../../public/reactAssets/images/Gallery/5.jpeg";

const Gallery = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [img1, img2, img3, img4, img5];
    const handleChange = (index) => {
        setCurrentIndex(index);
    };

    return (
        <section className="relative py-20 md:py-32 overflow-hidden">
            <div className="absolute inset-0 -z-10 opacity-10">
                <div className="absolute inset-0 "></div>
            </div>

            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center">
                    <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-success">
                        Our Gallery
                    </h1>
                    <p className="text-lg md:text-lg font-mono text-success max-w-3xl mx-auto">
                        Explore our collection of memorable moments and
                        beautiful visuals
                    </p>
                </div>

                <div className="relative  rounded-xl overflow-hidden ">
                    <span></span> {/* Required for animated border */}
                    <Carousel
                        autoPlay={true}
                        infiniteLoop={true}
                        showArrows={true}
                        showIndicators={false}
                        showThumbs={false}
                        showStatus={false}
                        dynamicHeight={false}
                        emulateTouch={true}
                        swipeable={true}
                        interval={4000}
                        transitionTime={1000}
                        stopOnHover={true}
                        selectedItem={currentIndex}
                        onChange={handleChange}
                        renderArrowPrev={(onClickHandler, hasPrev, label) =>
                            hasPrev && (
                                <button
                                    type="button"
                                    onClick={onClickHandler}
                                    title={label}
                                    className="absolute left-2 top-[797px] z-10 transform -translate-y-1/2 glowing-button w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M15 19l-7-7 7-7"
                                        />
                                    </svg>
                                </button>
                            )
                        }
                        renderArrowNext={(onClickHandler, hasNext, label) =>
                            hasNext && (
                                <button
                                    type="button"
                                    onClick={onClickHandler}
                                    title={label}
                                    className="hidden absolute -right-[70px] top-1/2 z-10 transform -translate-y-1/2 glowing-button w-12 h-12 rounded-full md:flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 5l7 7-7 7"
                                        />
                                    </svg>
                                </button>
                            )
                        }
                    >
                        {images.map((image, index) => (
                            <div key={index} className="relative group">
                                <img
                                    src={`${image}`}
                                    alt={`Gallery Image ${index + 1}`}
                                    className="w-full h-[350px] md:h-[550px] 2xl:h-[750px] object-cover transition-all duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                                    <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                                        <h3 className="text-white text-3xl font-extrabold tracking-wide mb-1">
                                            Timeless Frame {index + 1}
                                        </h3>
                                        <p className="text-gray-400 text-lg italic">
                                            Stories told without words
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Carousel>
                </div>

                <div className="flex justify-center space-x-2 mt-2">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                currentIndex === index
                                    ? "bg-indigo-500 w-6"
                                    : "bg-gray-300"
                            }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
