import { useState } from "react";
import techData from "../../../../../../public/Json/TeachData.json";

const baseUrl = import.meta.env.VITE_APP_BASE_URL;

const Tech = () => {
  const [selectedTech, setSelectedTech] = useState("Backend");

  return (
    <div className="p-6 2xl:p-20 md:px-40 py-20 ">
      <h2 className="text-2xl md:text-4xl font-bold mb-6 text-center text-gray-800">
        Our Tech Stack
      </h2>
      <div className="flex flex-wrap justify-center gap-4 md:gap-6 p-2 md:p-4 mb-10 md:mb-20 rounded-lg">
        {Object.keys(techData).map((tech) => (
          <span
            key={tech}
            className={`cursor-pointer text-base md:text-lg lg:text-2xl font-semibold transition duration-300 p-2 rounded-lg transform hover:scale-95 ${
              selectedTech === tech
                ? " bg-blue-600 text-white border border-blue-600"
                : "text-gray-900 hover:text-blue-600 hover:border hover:border-blue-600"
            }`}
            onClick={() => setSelectedTech(tech)}
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-8 md:gap-x-20 2xl:gap-x-20 gap-y-10  mt-10">
        {techData[selectedTech].map((item) => (
          <div key={item.name} className="flex flex-col items-center">
            <div className="bg-white rounded-full p-2 w-20 h-20 md:w-24 md:h-24 flex items-center justify-center">
              <img
                src={`${baseUrl}/${item.image}`}
                alt={item.name}
                className="w-16 h-16 md:w-20 md:h-20 object-contain"
              />
            </div>
            <h3 className="text-sm md:text-lg font-semibold mt-2 text-center text-gray-800">
              {item.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tech;
