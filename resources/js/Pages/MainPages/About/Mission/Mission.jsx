const Mission = ({ missionData }) => {
  return (
    <div className="rounded-lg px-5 md:px-10 text-gray-800 dark:text-white transition-colors duration-500">
      {/* Section Title */}
      <h1 className="text-3xl md:text-7xl font-extrabold text-start mb-12 text-success">
        Our Mission
      </h1>

      {/* mission List */}
      <div className="space-y-10">
        {missionData.map((mission, index) => (
          <div
            key={index}
            className="animated-border-2 card-hover-glow relative flex flex-col space-y-4 p-6 bg-white dark:bg-[#1f1f2e] rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <span></span> {/* Required for pseudo-elements */}
            
            {/* mission Text */}
            <p className="2xl:text-2xl md:text-xl text-lg font-medium dark:text-gray-300 text-gray-700">
              <span className="text-success font-bold">{`0${index + 1}. `}</span>
              {mission.text}
            </p>

            {/* Divider */}
            <div className="border-b border-gray-300 dark:border-gray-600 w-full"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mission;
