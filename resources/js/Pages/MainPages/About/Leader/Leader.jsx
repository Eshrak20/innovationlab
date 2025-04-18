const Leader = ({ profiles }) => {
  return (
    <div className="my-20 md:my-60 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-3 text-center text-gray-900 dark:text-white">
          Meet Our Leaders
        </h2>
        <p className="text-center mb-20 text-xl text-gray-600 dark:text-gray-300">
          Management Profile
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {profiles?.map((profile, index) => {
            // Safely handle skills data
            const skills = Array.isArray(profile?.skills) 
              ? profile.skills 
              : typeof profile?.skills === 'string' 
                ? profile.skills.split(',') 
                : [];

            return (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group"
              >
                {/* Profile Header with Image */}
                <div className="relative h-48 bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center">
                  {profile?.profile_photo_path ? (
                    <img
                      src={profile.profile_photo_path}
                      alt={profile?.title || 'Profile'}
                      className="w-24 h-24 rounded-full border-4 border-white dark:border-gray-800 object-cover absolute -bottom-12 left-1/2 transform -translate-x-1/2 group-hover:scale-110 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-24 h-24 rounded-full bg-white dark:bg-gray-700 flex items-center justify-center text-3xl font-bold text-indigo-600 dark:text-indigo-300 border-4 border-white dark:border-gray-800 absolute -bottom-12 left-1/2 transform -translate-x-1/2">
                      {profile?.title?.[0] || '?'}
                    </div>
                  )}
                </div>

                {/* Profile Body */}
                <div className="pt-16 pb-6 px-6">
                  <h3 className="text-xl font-bold text-center text-gray-800 dark:text-white mb-1">
                    {profile?.title || 'No title provided'}
                  </h3>
                  <p className="text-sm text-indigo-600 dark:text-indigo-400 text-center font-medium mb-4">
                    {profile?.employment_type || 'Position not specified'}
                  </p>

                  {/* Experience & Specialization */}
                  <div className="flex justify-between mb-4">
                    <div className="text-center">
                      <span className="block text-2xl font-bold text-gray-700 dark:text-gray-200">
                        {profile?.experience_years ? `${profile.experience_years}+` : 'N/A'}
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
                          ? (profile.specialization.length > 20 
                            ? `${profile.specialization.substring(0, 20)}...` 
                            : profile.specialization)
                          : 'Not specified'}
                      </span>
                    </div>
                  </div>

                  {/* Bio */}
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                    {profile?.bio || 'No biography available'}
                  </p>

                  {/* Skills - Only show if there are skills */}
                  {skills.length > 0 && (
                    <div className="mb-4">
                      <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2">
                        SKILLS
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {skills.slice(0, 4).map((skill, i) => (
                          <span
                            key={i}
                            className="text-xs px-2 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-full"
                          >
                            {skill.trim()}
                          </span>
                        ))}
                        {skills.length > 4 && (
                          <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full">
                            +{skills.length - 4}
                          </span>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Social Links - Only show if at least one exists */}
                  {(profile?.linkedin || profile?.github || profile?.portfolio_url) && (
                    <div className="flex justify-center space-x-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                      {profile?.linkedin && (
                        <a
                          href={profile.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                          </svg>
                        </a>
                      )}
                      {profile?.github && (
                        <a
                          href={profile.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                          </svg>
                        </a>
                      )}
                      {profile?.portfolio_url && (
                        <a
                          href={profile.portfolio_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                          </svg>
                        </a>
                      )}
                    </div>
                  )}
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