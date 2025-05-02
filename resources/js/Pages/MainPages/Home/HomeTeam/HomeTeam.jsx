import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaGlobe } from "react-icons/fa";

const HomeTeam = ({ profileData }) => {
    const [currentIndex, setCurrentIndex] = useState(2);
    const [autoSlide, setAutoSlide] = useState(true);

    if (!Array.isArray(profileData) || profileData.length === 0) {
        return null;
    }

    const parseArrayField = (field) => {
        if (Array.isArray(field)) return field;
        if (typeof field === "string") {
            try {
                return JSON.parse(field);
            } catch {
                return [];
            }
        }
        return [];
    };

    const completeProfiles = profileData.map((profile) => ({
        ...profile,
        image: profile.profilePhotoPath || "https://via.placeholder.com/150",
        skills: parseArrayField(profile.skills),
        certifications: parseArrayField(profile.certifications),
    }));

    useEffect(() => {
        if (!autoSlide) return;
        const interval = setInterval(() => {
            handleNext();
        }, 5000);
        return () => clearInterval(interval);
    }, [autoSlide, currentIndex]);

    const handlePrev = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? completeProfiles.length - 1 : prev - 1
        );
        setAutoSlide(false);
        setTimeout(() => setAutoSlide(true), 10000);
    };

    const handleNext = () => {
        setCurrentIndex((prev) =>
            prev === completeProfiles.length - 1 ? 0 : prev + 1
        );
        setAutoSlide(false);
        setTimeout(() => setAutoSlide(true), 10000);
    };

    const visibleCards = [];
    for (let i = -2; i <= 2; i++) {
        const index =
            (currentIndex + i + completeProfiles.length) %
            completeProfiles.length;
        visibleCards.push({
            ...completeProfiles[index],
            position: i,
            active: i === 0,
        });
    }

    const renderListItems = (items) => {
        if (!items || items.length === 0) {
            return <li className="text-sm text-gray-500">None listed</li>;
        }
        return items.map((item, i) => (
            <li key={i} className="text-sm text-gray-700">
                {item}
            </li>
        ));
    };

    const renderField = (label, value) => {
        if (!value) return null;
        return (
            <p className="text-sm">
                <span className="font-medium">{label}:</span> {value}
            </p>
        );
    };

    const renderIcons = (profile) => {
        const icons = [
            {
                label: "LinkedIn",
                url: profile.linkedin,
                icon: <FaLinkedin />,
            },
            {
                label: "GitHub",
                url: profile.github,
                icon: <FaGithub />,
            },
            {
                label: "Portfolio",
                url: profile.portfolio_url,
                icon: <FaGlobe />,
            },
        ];

        return (
            <div className="flex gap-4 text-xl mt-2">
                {icons.map(
                    (item, i) =>
                        item.url && (
                            <a
                                key={i}
                                href={item.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-600 hover:text-blue-600 transition-transform transform hover:scale-110"
                                title={item.label}
                            >
                                {item.icon}
                            </a>
                        )
                )}
            </div>
        );
    };

    return (
        <div className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-800 mb-2">
                        Our Expert Team
                    </h2>
                    <p className="text-lg text-gray-600">
                        Meet our team of professionals with diverse expertise
                    </p>
                </div>

                <div className="flex items-center justify-center relative">
                    <button
                        className="absolute left-0 z-20 bg-blue-500 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-md hover:bg-blue-600 hover:scale-110 transition-all duration-300 focus:outline-none"
                        onClick={handlePrev}
                        aria-label="Previous profile"
                    >
                        &lt;
                    </button>

                    <div className="flex items-center justify-center perspective-1000 h-[500px] w-full relative">
                        {visibleCards.map((profile, idx) => (
                            <div
                                key={idx}
                                className={`absolute transition-all duration-500 ease-in-out rounded-xl bg-blue-100/80 backdrop-blur-md shadow-2xl border border-blue-200 overflow-hidden cursor-pointer group ${
                                    profile.active
                                        ? "w-[350px] h-auto z-10 scale-105"
                                        : "w-[300px] h-[450px]"
                                } ${
                                    profile.position === -2
                                        ? "-translate-x-[180%] scale-75 opacity-60 z-1"
                                        : profile.position === -1
                                        ? "-translate-x-[90%] scale-90 opacity-80 z-2"
                                        : profile.position === 1
                                        ? "translate-x-[90%] scale-90 opacity-80 z-2"
                                        : profile.position === 2
                                        ? "translate-x-[180%] scale-75 opacity-60 z-1"
                                        : ""
                                }`}
                                onClick={() => {
                                    if (!profile.active) {
                                        const diff = profile.position;
                                        setCurrentIndex(
                                            (prev) =>
                                                (prev +
                                                    diff +
                                                    completeProfiles.length) %
                                                completeProfiles.length
                                        );
                                    }
                                }}
                            >
                                <div className="max-h-[400px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-blue-400 scrollbar-track-blue-100 scrollbar-thumb-rounded hover:scrollbar-thumb-blue-500 transition-colors duration-300">
                                    {/* Card Wrapper with Animated Gradient Border */}
                                    <div className="rounded-xl p-[2px] bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-300 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.01] animate-gradient-border">
                                        {/* Inner Card */}
                                        <div className="bg-white rounded-xl overflow-hidden custom-card group">
                                            {/* Card Header */}
                                            <div className="p-6 flex flex-col items-center bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 relative overflow-hidden">
                                                {/* Animated background elements */}
                                                <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-700">
                                                    <div className="absolute top-0 left-10 w-20 h-20 bg-blue-300 rounded-full filter blur-xl animate-float1"></div>
                                                    <div className="absolute top-10 right-5 w-24 h-24 bg-purple-300 rounded-full filter blur-xl animate-float2"></div>
                                                </div>

                                                <div className="w-32 h-32 mb-4 rounded-full overflow-hidden border-4 border-white shadow-lg transition-all duration-500 hover:scale-110 hover:shadow-xl relative z-10">
                                                    <img
                                                        src={
                                                            profile.profilePhotoPath ||
                                                            "https://via.placeholder.com/150"
                                                        }
                                                        alt={
                                                            profile.name ||
                                                            "Team member"
                                                        }
                                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                                        loading="lazy"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-white opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                                                </div>

                                                <h3 className="text-2xl font-bold text-gray-900 mb-1 text-center hover:text-indigo-600 transition-colors duration-300 relative z-10">
                                                    {profile.title ||
                                                        "No name provided"}
                                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-500 group-hover:w-full"></span>
                                                </h3>

                                                {profile.subtitle && (
                                                    <p className="text-gray-600 text-sm mb-2 text-center relative z-10 transform transition-transform duration-300 group-hover:-translate-y-1 mt-3">
                                                        {profile.subtitle}
                                                    </p>
                                                )}
                                            </div>

                                            {/* Card Details */}
                                            <div className="p-6 flex flex-col items-center text-gray-800 bg-white relative">
                                                {profile.active && (
                                                    <div className="w-full space-y-4 text-left">
                                                        {/* Fields */}
                                                        <div className="space-y-2">
                                                            {renderField(
                                                                "Designation",
                                                                profile.employment_type
                                                            )}
                                                            {renderField(
                                                                "Specialization",
                                                                profile.specialization
                                                            )}
                                                            {renderField(
                                                                "Years of Experience",
                                                                profile.experience_years
                                                            )}
                                                        </div>

                                                        {/* Skills */}
                                                        <div className="space-y-2">
                                                            <h4 className="font-bold text-indigo-600 flex items-center">
                                                                <span className="mr-2">
                                                                    🌟
                                                                </span>
                                                                <span>
                                                                    Skills
                                                                </span>
                                                            </h4>
                                                            <ul className="list-disc pl-5 space-y-1">
                                                                {renderListItems(
                                                                    profile.skills
                                                                )}
                                                            </ul>
                                                        </div>

                                                        {/* Certifications */}
                                                        <div className="space-y-2">
                                                            <h4 className="font-bold text-indigo-600 flex items-center">
                                                                <span className="mr-2">
                                                                    🏆
                                                                </span>
                                                                <span>
                                                                    Certifications
                                                                </span>
                                                            </h4>
                                                            <ul className="list-disc pl-5 space-y-1">
                                                                {renderListItems(
                                                                    profile.certifications
                                                                )}
                                                            </ul>
                                                        </div>

                                                        {/* Personal Info */}
                                                        <div className="space-y-2">
                                                            <h4 className="font-bold text-indigo-600 flex items-center">
                                                                <span className="mr-2">
                                                                    ℹ️
                                                                </span>
                                                                <span>
                                                                    Personal
                                                                    Information
                                                                </span>
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

                                                        {/* Social Media */}
                                                        <div className="space-y-2 pt-2">
                                                            <h4 className="font-bold text-indigo-600 flex items-center">
                                                                <span className="mr-2">
                                                                    🌐
                                                                </span>
                                                                <span>
                                                                    Connect
                                                                </span>
                                                            </h4>
                                                            <div className="flex space-x-3">
                                                                {renderIcons(
                                                                    profile
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button
                        className="absolute right-0 z-20 bg-blue-500 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-md hover:bg-blue-600 hover:scale-110 transition-all duration-300 focus:outline-none"
                        onClick={handleNext}
                        aria-label="Next profile"
                    >
                        &gt;
                    </button>
                </div>

                <div className="flex justify-center mt-8 space-x-2">
                    {completeProfiles.map((_, index) => (
                        <button
                            key={index}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                index === currentIndex
                                    ? "bg-blue-500 scale-125"
                                    : "bg-gray-300"
                            }`}
                            onClick={() => {
                                setCurrentIndex(index);
                                setAutoSlide(false);
                                setTimeout(() => setAutoSlide(true), 500);
                            }}
                            aria-label={`Go to profile ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HomeTeam;
