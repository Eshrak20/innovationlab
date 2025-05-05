import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaGlobe } from "react-icons/fa";

const HomeTeam = ({ profileData }) => {
    const [currentIndex, setCurrentIndex] = useState(2);
    const [autoSlide, setAutoSlide] = useState(true);
    const [isHovering, setIsHovering] = useState(false);

    // Exit if no data
    if (!Array.isArray(profileData) || profileData.length === 0) return null;

    // Parse stringified arrays
    const parseArray = (field) => {
        if (Array.isArray(field)) return field;
        try {
            return JSON.parse(field);
        } catch {
            return [];
        }
    };

    // Enhance all profiles
    const completeProfiles = profileData.map((profile) => ({
        ...profile,
        image: profile.profilePhotoPath || "https://via.placeholder.com/150",
        skills: parseArray(profile.skills),
        certifications: parseArray(profile.certifications),
    }));

    // Auto slider effect
    useEffect(() => {
        if (!autoSlide || isHovering) return;
        const timer = setInterval(handleNext, 3000);
        return () => clearInterval(timer);
    }, [autoSlide, currentIndex, isHovering]);

    const handlePrev = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? completeProfiles.length - 1 : prev - 1
        );
        pauseAutoSlide();
    };

    const handleNext = () => {
        setCurrentIndex((prev) =>
            prev === completeProfiles.length - 1 ? 0 : prev + 1
        );
        pauseAutoSlide();
    };

    const pauseAutoSlide = () => {
        setAutoSlide(false);
        setTimeout(() => setAutoSlide(true), 10000);
    };

    const handleMouseEnter = () => {
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
    };

    // Render visible cards with relative positions
    const visibleCards = Array.from({ length: 5 }, (_, i) => {
        const position = i - 2;
        const index =
            (currentIndex + position + completeProfiles.length) %
            completeProfiles.length;
        return {
            ...completeProfiles[index],
            position,
            active: position === 0,
        };
    });

    const renderList = (items) =>
        items?.length ? (
            <ul className="flex flex-wrap gap-2 mt-2">
                {items.map((item, i) => (
                    <li
                        key={i}
                        className="px-2 py-1 bg-indigo-100  text-indigo-800  text-xs rounded-full"
                    >
                        {item}
                    </li>
                ))}
            </ul>
        ) : null;

    const renderField = (label, value) =>
        value ? (
            <p className="text-sm mb-2">
                <span className="font-medium text-indigo-600 ">{label}:</span>{" "}
                <span className="text-gray-700 ">{value}</span>
            </p>
        ) : null;

    const renderSocialIcons = ({ linkedin, github, portfolio_url }) => {
        const links = [
            { icon: <FaLinkedin />, url: linkedin, label: "LinkedIn" },
            { icon: <FaGithub />, url: github, label: "GitHub" },
            { icon: <FaGlobe />, url: portfolio_url, label: "Portfolio" },
        ];

        return (
            <div className="flex gap-4 text-xl mt-4 justify-center">
                {links.map(
                    ({ icon, url, label }, i) =>
                        url && (
                            <a
                                key={i}
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                title={label}
                                className="text-gray-600  hover:text-indigo-600  transform hover:scale-125 transition-all"
                            >
                                {icon}
                            </a>
                        )
                )}
            </div>
        );
    };

    return (
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-100 dark:bg-gray-900">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-bold text-success">
                        Our Expert Team
                    </h2>
                    <p className="text-xs md:text-lg text-gray-900 font-mono dark:text-gray-300 mt-2 md:mt-4">
                        Meet our team of professionals
                    </p>
                </div>

                <div className="relative flex justify-center items-center">
                    {/* Navigation Buttons */}
                    <button
                        onClick={handlePrev}
                        className="absolute left-0 z-20 bg-indigo-600 text-white w-10 h-10 rounded-full shadow hover:bg-indigo-700 hover:scale-110 transition-all"
                        aria-label="Previous"
                    >
                        &lt;
                    </button>

                    {/* Card Carousel */}
                    <div 
                        className="flex justify-center relative w-full h-[350px]  md:h-[550px] md:mt-10 perspective-1000"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        {visibleCards.map((profile, idx) => {
                            const baseStyle =
                                "absolute transition-all duration-500 md:rounded-2xl bg-white  md:shadow-lg overflow-hidden cursor-pointer group";
                            const sizeStyle = profile.active
                                ? "w-[350px] h-[500px] z-10 scale-105"
                                : "w-[300px] h-[450px]";
                            const positionStyle =
                                profile.position === -2
                                    ? "-translate-x-[180%] scale-75 opacity-60 z-1"
                                    : profile.position === -1
                                    ? "-translate-x-[90%] scale-90 opacity-80 z-2"
                                    : profile.position === 1
                                    ? "translate-x-[90%] scale-90 opacity-80 z-2"
                                    : profile.position === 2
                                    ? "translate-x-[180%] scale-75 opacity-60 z-1"
                                    : "";

                            return (
                                <div
                                    key={idx}
                                    className={`${baseStyle} ${sizeStyle} ${positionStyle} md:hover:shadow-2xl hover:-translate-y-3`}
                                    onClick={() =>
                                        !profile.active &&
                                        setCurrentIndex(
                                            (currentIndex +
                                                profile.position +
                                                completeProfiles.length) %
                                                completeProfiles.length
                                        )
                                    }
                                >
                                    <div className="h-full overflow-y-auto pr-2 no-scrollbar mx-3 md:mx-0">
                                        {/* Profile Header with Enhanced Image */}
                                        <div className="relative h-60 bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-700 flex items-center justify-center overflow-hidden">
                                            {profile.image ? (
                                                <div className="relative w-full h-full">
                                                    <img
                                                        src={profile.image}
                                                        alt={
                                                            profile.title ||
                                                            "Profile"
                                                        }
                                                        className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-20 transition-opacity duration-500"
                                                    />
                                                    <img
                                                        src={profile.image}
                                                        alt={
                                                            profile.title ||
                                                            "Profile"
                                                        }
                                                        className="w-44 h-44 rounded-full border-[4px] border-white object-cover absolute -bottom-2 left-1/2 transform -translate-x-1/2 group-hover:scale-110 group-hover:-translate-y-5 transition-all duration-500 shadow-xl"
                                                    />
                                                </div>
                                            ) : (
                                                <div className="w-24 h-24 rounded-full bg-white  flex items-center justify-center text-3xl font-bold text-indigo-600 border-[4px] border-white absolute -bottom-12 left-1/2 transform -translate-x-1/2 group-hover:scale-110 group-hover:-translate-y-5 transition-all duration-500 shadow-xl">
                                                    {profile?.title?.[0] || "?"}
                                                </div>
                                            )}
                                        </div>

                                        {/* Profile Body */}
                                        <div className="pt-16 pb-6 px-6 bg-gray-100 md:bg-white">
                                            <h3 className="text-xl  font-bold text-center text-gray-800  mb-1 group-hover:text-indigo-600  transition-colors">
                                                {profile.title ||
                                                    "No name provided"}
                                            </h3>
                                            {profile.subtitle && (
                                                <p className="text-sm text-indigo-600  text-center font-medium mb-4">
                                                    {profile.subtitle}
                                                </p>
                                            )}

                                            {/* Experience & Specialization */}
                                            <div className="flex justify-between mb-4">
                                                <div className="text-center">
                                                    <span className="block text-xl font-bold text-gray-700 group-hover:text-indigo-600 transition-colors">
                                                        {profile.experience_years
                                                            ? `${profile.experience_years}+`
                                                            : "N/A"}
                                                    </span>
                                                    <span className="text-xs text-gray-500">
                                                        Years Exp
                                                    </span>
                                                </div>

                                                <div className="text-center">
                                                    <span className="block text-xs font-semibold text-gray-700  uppercase">
                                                        Specialization
                                                    </span>
                                                    <span className="text-xs text-gray-500">
                                                        {profile.specialization ||
                                                            "Not specified"}
                                                    </span>
                                                </div>
                                            </div>

                                            {profile.active && (
                                                <div className="space-y-4 text-left">
                                                    <div>
                                                        <h4 className="font-bold text-indigo-600 ">
                                                            🌟 Skills
                                                        </h4>
                                                        {renderList(
                                                            profile.skills
                                                        )}
                                                    </div>

                                                    <div>
                                                        <h4 className="font-bold text-indigo-600">
                                                            🏆 Certifications
                                                        </h4>
                                                        {renderList(
                                                            profile.certifications
                                                        )}
                                                    </div>

                                                    <div>
                                                        <h4 className="font-bold text-indigo-600">
                                                            ℹ️ About
                                                        </h4>
                                                        {renderField(
                                                            "Age",
                                                            profile.age
                                                        )}
                                                        {renderField(
                                                            "Education",
                                                            profile.education
                                                        )}
                                                        {renderField(
                                                            "Location",
                                                            profile.location
                                                        )}
                                                        {renderField(
                                                            "Bio",
                                                            profile.bio
                                                        )}
                                                    </div>

                                                    {renderSocialIcons(profile)}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <button
                        onClick={handleNext}
                        className="absolute right-0 z-20 bg-indigo-600 text-white w-10 h-10 rounded-full shadow hover:bg-indigo-700 hover:scale-110 transition-all"
                        aria-label="Next"
                    >
                        &gt;
                    </button>
                </div>
            </div>
        </section>
    );
};

export default HomeTeam;