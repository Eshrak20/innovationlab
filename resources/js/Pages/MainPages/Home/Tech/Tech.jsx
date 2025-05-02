import { useState } from "react";
import techData from "../../../../../../public/Json/TeachData.json";
import './Tech.css';

const baseUrl = import.meta.env.VITE_APP_BASE_URL;

const Tech = () => {
    const [selectedTech, setSelectedTech] = useState("Backend");

    return (
        <div className="p-6 2xl:p-20 md:px-40 py-20 bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-300 transition-colors duration-500">
            <h2 className="text-2xl md:text-4xl font-bold mb-6 text-center text-white">
                Our Tech Stack
            </h2>

            <div className="flex flex-wrap justify-center  gap-6 p-4 mb-10 md:mb-20 bg-white/20 backdrop-blur-md shadow-md rounded-xl transition duration-300">
                {Object.keys(techData).map((tech) => (
                    <span
                        key={tech}
                        className={`cursor-pointer text-base md:text-lg 2xl:text-2xl font-semibold transition duration-300 px-4 py-2 rounded-xl transform hover:scale-105 ${
                            selectedTech === tech
                                ? "bg-white text-blue-600 shadow-md"
                                : "text-white hover:bg-white/20 hover:text-purple-100"
                        }`}
                        onClick={() => setSelectedTech(tech)}
                    >
                        {tech}
                    </span>
                ))}
            </div>

            <div className="flex flex-wrap justify-center gap-8 md:gap-x-20 2xl:gap-x-20 gap-y-10 mt-10">
                {techData[selectedTech].map((item) => (
                    <div
                    key={item.name}
                    className="flex flex-col items-center group transform transition duration-300 hover:scale-105"
                  >
                    <div
                      className="tech-card w-24 h-24 md:w-28 md:h-28 flex items-center justify-center shadow-lg group-hover:shadow-purple-300 auto-hover"
                      style={{
                        backgroundColor: item.hexCode,
                        WebkitMaskImage: `url("/reactAssets/images/Tech/tailwind.svg")`,
                        maskImage: `url("/reactAssets/images/Tech/tailwind.svg")`,
                      }}
                    >
                      <img
                        src={`${baseUrl}/${item.image}`}
                        alt={item.name}
                        className="tech-logo w-10 h-10 md:w-14 md:h-14 object-contain"
                      />
                    </div>
                    <h3 className="text-sm md:text-lg font-semibold mt-2 text-center text-white">
                      {item.name}
                    </h3>
                  </div>
                  
                    
                ))}
            </div>
        </div>
    );
};

export default Tech;
