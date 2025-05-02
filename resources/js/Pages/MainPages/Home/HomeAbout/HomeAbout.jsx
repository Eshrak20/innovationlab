import { useEffect, useState } from "react";

const HomeAbout = ({stats}) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const images = [
        {
            main: "reactAssets/images/HomeAboutImages/lab1.jpeg",
            overlay: "reactAssets/images/HomeAboutImages/potraitlab3.jpeg",
        },
        {
            main: "reactAssets/images/HomeAboutImages/lab2.jpeg", // Add your other images
            overlay: "reactAssets/images/HomeAboutImages/potraitlab4.jpeg",
        },
        // Add more image pairs as needed
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex(
                (prevIndex) => (prevIndex + 1) % images.length
            );
        }, 2000); // Change every 2 second

        return () => clearInterval(interval);
    }, [images.length]);
    return (
        <>
            <div className="flex flex-col md:flex-row gap-10 md:gap-44 mt-10 mb-20 lg:p-20 p-2 items-center">
                {/* Text Section */}
                <div className="w-full md:w-1/2 px-4 md:px-0">
                    <h1 className="text-2xl md:text-5xl font-medium leading-tight mb-6 md:mb-10">
                        <span className="text-success">Insights</span> About{" "}
                        <br /> Our Company
                    </h1>
                    <p className="text-sm 2xl:text-lg font-medium leading-relaxed">
                        InnovationLabs360 is now exporting software to 3+
                        countries including Bangladesh. In Bangladesh, it is
                        working with Bangladeshi Govt organizations,
                        Multinational Companies, Group of Companies, Private
                        Companies, and other organizations.
                        <br /> InnovationLabs360 is committed to providing its
                        clients with the highest level of service. The company
                        offers a 100% satisfaction guarantee on all services,
                        and its team is always available to answer questions and
                        provide support. However, InnovationLabs360 serves
                        clients all over the world. InnovationLabs360 is the
                        perfect choice if you are looking for a reliable and
                        experienced IT partner.
                    </p>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-10 mt-8 md:mt-10">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-start">
                                <p className="text-xs md:text-lg">
                                    {stat.label}
                                </p>
                                <h2 className="text-lg font-bold md:text-2xl text-success">
                                    {stat.value}+
                                </h2>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Image Section */}
                <div className="relative flex justify-center md:block px-4 md:px-0">
                    <div className="aspect-[636/748] w-full transition-opacity duration-500">
                        <img
                            className="rounded-[8%] max-w-sm md:max-w-xl h-full object-cover px-3 md:px-0 transition-all duration-500"
                            src={images[currentImageIndex].main}
                            alt={`Main lab image ${currentImageIndex + 1}`}
                        />
                    </div>
                    <img
                        className="object-cover rounded-[20%] w-[150px] h-[150px] md:w-[200px] md:h-[240px] absolute -bottom-20 left-10 md:-bottom-10 md:-left-10 border-blue-900 border-r-[3px] border-t-[3px] -mt-10 border-l-[3px] md:border-l-[3px] transition-all duration-500"
                        src={images[currentImageIndex].overlay}
                        alt={`Overlay lab image ${currentImageIndex + 1}`}
                    />
                </div>
            </div>
        </>
    );
};

export default HomeAbout;
