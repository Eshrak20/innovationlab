const Mission = ({missionData}) => {
    return (
      <div className="text-white rounded-lg px-5 md:px-10 mt-44">
        {/* Section Title */}
        <h1 className="text-3xl md:text-7xl font-extrabold text-start mb-12 text-success ">
          Our Mission
        </h1>
  
        {/* mission List */}
        <div className="space-y-10">
          {missionData.map((mission, index) => (
            <div
              key={index}
              className="flex flex-col space-y-4 transition-transform transform hover:scale-105"
            >
              {/* mission Text */}
              <p className="text-lg font-medium text-gray-800">
                <span className="text-success font-bold">{`0${index + 1}. `}</span>
                {mission.text}
              </p>
              {/* Divider */}
              <div className="border-b border-gray-600 w-full"></div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Mission;
  