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
                                className={`absolute transition-all duration-500 ease-in-out bg-white rounded-xl shadow-lg cursor-pointer overflow-hidden ${
                                    profile.active
                                        ? "w-[350px] h-auto z-10 shadow-xl"
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
                                <div className="max-h-[400px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 scrollbar-thumb-rounded">
                                    <div className="p-6 flex flex-col items-center">
                                        <div className="relative w-32 h-32 mb-4 rounded-full overflow-hidden border-4 border-white shadow-lg">
                                            <img
                                                src={
                                                    profile.profilePhotoPath ||
                                                    "https://via.placeholder.com/150"
                                                }
                                                alt={profile.name || "Team member"}
                                                className="w-full h-full object-cover"
                                                loading="lazy"
                                            />
                                            {profile.active && (
                                                <div className="absolute bottom-1 right-2 w-5 h-5 bg-blue-500 rounded-full border-2 border-white"></div>
                                            )}
                                        </div>

                                        <h3 className="text-xl font-bold text-gray-800 mb-1">
                                            {profile.title || "No name provided"}
                                        </h3>
                                        {profile.subtitle && (
                                            <p className="text-gray-500 text-sm mb-4">
                                                {profile.subtitle}
                                            </p>
                                        )}

                                        {profile.active && (
                                            <div className="w-full space-y-4 text-left">
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

                                                <div className="space-y-2">
                                                    <h4 className="font-bold text-gray-800">Skills</h4>
                                                    <ul className="list-disc pl-5 space-y-1">
                                                        {renderListItems(profile.skills)}
                                                    </ul>
                                                </div>

                                                <div className="space-y-2">
                                                    <h4 className="font-bold text-gray-800">
                                                        Certifications
                                                    </h4>
                                                    <ul className="list-disc pl-5 space-y-1">
                                                        {renderListItems(profile.certifications)}
                                                    </ul>
                                                </div>

                                                <div className="space-y-2">
                                                    <h4 className="font-bold text-gray-800">
                                                        Personal Information
                                                    </h4>
                                                    {renderField("Age", profile.age)}
                                                    {renderField("Education", profile.education)}
                                                    {renderField("Location", profile.location)}
                                                    {renderField("Bio", profile.bio)}
                                                </div>

                                                <div className="space-y-2">
                                                    <h4 className="font-bold text-gray-800">
                                                        Social Media
                                                    </h4>
                                                    {renderIcons(profile)}
                                                </div>
                                            </div>
                                        )}
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
