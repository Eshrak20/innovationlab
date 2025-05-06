const Leader = ({ profiles }) => {
    return (
        <div className="my-20 md:my-32 px-4">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-3 text-center text-success">
                    Meet Our Team
                </h2>
                <p className="text-center mb-16 text-xl text-gray-600 text-success">
                    Team Profile
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
                    {profiles?.map((profile, index) => {
                        const skills = Array.isArray(profile?.skills)
                            ? profile.skills
                            : typeof profile?.skills === "string"
                            ? profile.skills.split(",")
                            : [];

                        return (
                            <div
                                key={index}
                                className="relative group p-[2px] rounded-2xl bg-gradient-to-tr from-teal-400 via-indigo-500 to-purple-600 hover:from-indigo-500 hover:via-purple-600 hover:to-teal-400 transition-all duration-500"
                            >
                                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-3">
                                    {/* Header with Image */}
                                    <div className="relative h-60 bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-700 flex items-center justify-center overflow-hidden">
                                        {profile?.profilePhotoPath ? (
                                            <div className="relative w-full h-full">
                                                <img
                                                    src={
                                                        profile.profilePhotoPath
                                                    }
                                                    alt={
                                                        profile?.title ||
                                                        "Profile"
                                                    }
                                                    className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-20 transition-opacity duration-500"
                                                />
                                                <img
                                                    src={
                                                        profile.profilePhotoPath
                                                    }
                                                    alt={
                                                        profile?.title ||
                                                        "Profile"
                                                    }
                                                    className="w-40 h-40 rounded-full border-[6px] border-white dark:border-gray-800 object-cover absolute -bottom-10 left-1/2 transform -translate-x-1/2 group-hover:scale-110 group-hover:-translate-y-5 transition-all duration-500 shadow-xl"
                                                />
                                            </div>
                                        ) : (
                                            <div className="w-40 h-40 rounded-full bg-white dark:bg-gray-700 flex items-center justify-center text-4xl font-bold text-indigo-600 dark:text-indigo-300 border-[6px] border-white dark:border-gray-800 absolute -bottom-10 left-1/2 transform -translate-x-1/2 group-hover:scale-110 group-hover:-translate-y-5 transition-all duration-500 shadow-xl">
                                                {profile?.title?.[0] || "?"}
                                            </div>
                                        )}
                                    </div>

                                    {/* Body */}
                                    <div className="pt-7 pb-8 px-6">
                                        <h3 className="text-base md:text-lg 2xl:text-2xl font-bold text-center text-gray-800 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                                            {profile?.title ||
                                                "No title provided"}
                                        </h3>
                                        <p className="text-sm text-indigo-600 dark:text-indigo-400 text-center font-medium mb-6">
                                            {profile?.employment_type ||
                                                "Position not specified"}
                                        </p>

                                        <div className="flex justify-between mb-6">
                                            <div className="text-center">
                                                <span className="block text-3xl font-bold text-gray-700 dark:text-gray-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                                                    {profile?.experience_years
                                                        ? `${profile.experience_years}+`
                                                        : "N/A"}
                                                </span>
                                                <span className="text-xs text-gray-500 dark:text-gray-400">
                                                    Years Exp
                                                </span>
                                            </div>

                                            <div className="text-center">
                                                <span className="block text-xs font-semibold text-gray-700 dark:text-gray-200 uppercase">
                                                    Specialization
                                                </span>
                                                <span className="text-xs text-gray-500 dark:text-gray-400">
                                                    {profile?.specialization
                                                        ? profile.specialization
                                                              .length > 20
                                                            ? `${profile.specialization.substring(
                                                                  0,
                                                                  20
                                                              )}...`
                                                            : profile.specialization
                                                        : "Not specified"}
                                                </span>
                                            </div>
                                        </div>

                                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-6 line-clamp-3">
                                            {profile?.bio ||
                                                "No biography available"}
                                        </p>

                                        {(profile?.linkedin ||
                                            profile?.github ||
                                            profile?.portfolio_url) && (
                                            <div className="flex justify-center space-x-5 pt-6 border-t border-gray-100 dark:border-gray-700">
                                                {profile?.linkedin && (
                                                    <a
                                                        href={profile.linkedin}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors transform hover:scale-125"
                                                    >
                                                        {/* LinkedIn Icon */}
                                                        <svg
                                                            className="w-6 h-6"
                                                            fill="currentColor"
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 24h4V7h-4v17zM9 7h3.5v2.2h.1c.5-.9 1.7-2.2 3.5-2.2 3.7 0 4.4 2.4 4.4 5.5V24h-4v-8.2c0-2-.04-4.6-2.8-4.6s-3.2 2.2-3.2 4.5V24H9V7z" />
                                                        </svg>
                                                    </a>
                                                )}
                                                {profile?.github && (
                                                    <a
                                                        href={profile.github}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors transform hover:scale-125"
                                                    >
                                                        {/* GitHub Icon */}
                                                        <svg
                                                            className="w-6 h-6"
                                                            fill="currentColor"
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.07-.02-2.1-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.2.08 1.83 1.24 1.83 1.24 1.07 1.83 2.8 1.3 3.48.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.16 0 0 1.01-.32 3.3 1.23a11.4 11.4 0 0 1 6 0C17.99 4.3 19 4.62 19 4.62c.66 1.64.25 2.86.12 3.16.77.84 1.24 1.91 1.24 3.22 0 4.62-2.81 5.65-5.48 5.95.43.37.81 1.1.81 2.22 0 1.6-.01 2.89-.01 3.28 0 .32.22.7.83.58A12.01 12.01 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                                                        </svg>
                                                    </a>
                                                )}
                                                {profile?.portfolio_url && (
                                                    <a
                                                        href={
                                                            profile.portfolio_url
                                                        }
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors transform hover:scale-125"
                                                    >
                                                        {/* Globe Icon */}
                                                        <svg
                                                            className="w-6 h-6"
                                                            fill="currentColor"
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path d="M12 2C6.477 2 2 6.478 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2zm4.95 3.05A7.962 7.962 0 0 1 20 12a7.96 7.96 0 0 1-1.05 3.95L16 12l.95-6.95zM12 4c1.042 0 2.042.2 2.95.55L12 12 9.05 4.55A7.96 7.96 0 0 1 12 4zM4 12c0-1.042.2-2.042.55-2.95L12 12 4.55 14.95A7.96 7.96 0 0 1 4 12zm7.05 7.95L12 12l2.95 7.95A7.96 7.96 0 0 1 12 20c-1.042 0-2.042-.2-2.95-.55z" />
                                                        </svg>
                                                    </a>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Leader;
