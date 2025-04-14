import leaders from "../../../../../../public/Json/Leader.json";


const Leader = () => {
  return (
    <>
      <div className="my-20 md:my-60">
        <h2 className="text-4xl font-bold mb-3 text-center text-gray-900">
          Meet Our Leaders
        </h2>
        <p className="text-center mb-20 text-xl">Management Profile</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:px-10">
          {leaders.map((leader, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg text-center"
            >
              <img
                src={leader.image}
                alt={leader.name}
                className="w-32 h-32 mx-auto rounded-full mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-100">
                {leader.name}
              </h3>
              <p className="text-base text-gray-100">{leader.position}</p>
              <p className="text-xs text-gray-300 mt-2">
                {leader.short_description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Leader;
