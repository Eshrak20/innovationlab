import AdminLayout from "@/Layouts/AdminLayout";
import { Head } from "@inertiajs/react";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { showErrorToast, showSuccessToast } from "@/toastConfig/toast";
import ProfileHeader from "./ProfileHeader";
import ProfilePic from "./ProfilePic";
import ProfileSection from "./ProfileSection";
import ArrayInputField from "./ArrayInputField";

const ProfileEdit = ({ profile }) => {
    // Form state
    const [formData, setFormData] = useState({
        title: profile?.title || "",
        subtitle: profile?.subtitle || "",
        experience_years: profile?.experience_years || "",
        specialization: profile?.specialization || "",
        age: profile?.age || "",
        education: profile?.education || "",
        location: profile?.location || "",
        linkedin: profile?.linkedin || "",
        github: profile?.github || "",
        portfolio_url: profile?.portfolio_url || "",
        profilePhotoPath: profile?.profilePhotoPath || null,
        current_stack: profile?.current_stack || "",
        employment_type: profile?.employment_type || "",
        hourly_rate: profile?.hourly_rate || "",
        bio: profile?.bio || "",
    });

    // Array fields with null protection
    const [skills, setSkills] = useState(
        Array.isArray(profile?.skills)
            ? profile.skills
            : profile?.skills
            ? JSON.parse(profile.skills)
            : []
    );
    const [certifications, setCertifications] = useState(
        Array.isArray(profile?.certifications)
            ? profile.certifications
            : profile?.certifications
            ? JSON.parse(profile.certifications)
            : []
    );
    const [programmingLanguages, setProgrammingLanguages] = useState(
        Array.isArray(profile?.programming_languages)
            ? profile.programming_languages
            : []
    );
    const [tools, setTools] = useState(
        Array.isArray(profile?.tools) ? profile.tools : []
    );
    const [projects, setProjects] = useState(
        Array.isArray(profile?.projects) ? profile.projects : []
    );

    // File state
    const [profilePhoto, setProfilePhoto] = useState(null);
    const [isUpdating, setIsUpdating] = useState(false);

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // Handle file upload
    const handleFileChange = (file) => {
        setProfilePhoto(file);
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsUpdating(true);

        try {
            const formDataToSend = new FormData();

            // Append all regular form data except profilePhotoPath
            Object.entries(formData).forEach(([key, value]) => {
                if (
                    key !== "profilePhotoPath" &&
                    value !== null &&
                    value !== undefined
                ) {
                    formDataToSend.append(key, value);
                }
            });

            // Append array fields
            skills.forEach((skill) => formDataToSend.append("skills[]", skill));
            certifications.forEach((cert) =>
                formDataToSend.append("certifications[]", cert)
            );
            programmingLanguages.forEach((lang) =>
                formDataToSend.append("programming_languages[]", lang)
            );
            tools.forEach((tool) => formDataToSend.append("tools[]", tool));
            projects.forEach((project) =>
                formDataToSend.append("projects[]", project)
            );

            // Only append profile photo if it's a new file
            if (profilePhoto && profilePhoto instanceof File) {
                formDataToSend.append("profilePhotoPath", profilePhoto);
            }

            const { data } = await axios.post(
                `/profile/${profile.id}?_method=PUT`,
                formDataToSend,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );
            console.log(data);

            showSuccessToast("Profile updated successfully!");
        } catch (error) {
            console.error("Update error:", error);
            showErrorToast(
                error.response?.data?.message || "Failed to update profile"
            );
        } finally {
            setIsUpdating(false);
        }
    };

    const getInitials = (name) => {
        if (!name || name.trim().length === 0) {
            return ""; // Return an empty string if name is empty or contains only spaces
        } else {
            const nameArray = name.split(" ");
            const initials1 = nameArray[0].charAt(0).toUpperCase();
            const initials2 = nameArray[1]
                ? nameArray[1].charAt(0).toUpperCase()
                : ""; // Check if the second name part exists
            const join = initials1 + initials2;
            return join;
        }
    };

    return (
        <AdminLayout>
            <Head title="Edit Profile" />
            <ToastContainer position="top-right" autoClose={3000} />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="bg-white dark:bg-gray-900 shadow rounded-lg overflow-hidden">
                    <ProfileHeader
                        title="Edit Your Profile"
                        description="Update your professional information"
                    />

                    <form onSubmit={handleSubmit} className="p-6 space-y-8">
                        <ProfilePic
                            fullName={formData.title}
                            profilePhoto={
                                profilePhoto || formData.profilePhotoPath
                            }
                            onFileChange={handleFileChange}
                            getInitials={getInitials}
                        />

                        {/* Professional Information Section */}
                        <ProfileSection title="Professional Information">
                            <div>
                                <label
                                    htmlFor="title"
                                    className="block text-sm font-medium dark:text-gray-200 text-gray-800"
                                >
                                    Professional Title*
                                </label>
                                <input
                                    type="text"
                                    id="title"
                                    name="title"
                                    value={formData.title}
                                    onChange={handleChange}
                                    required
                                    className="mt-1 block w-full dark:text rounded-md text-black dark:border-gray-800 border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="subtitle"
                                    className="block text-sm font-medium dark:text-gray-200 text-gray-800"
                                >
                                    Tagline
                                </label>
                                <input
                                    type="text"
                                    id="subtitle"
                                    name="subtitle"
                                    value={formData.subtitle}
                                    onChange={handleChange}
                                    className="mt-1 block w-full rounded-md text-black dark:border-gray-800 border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="employment_type"
                                    className="block text-sm font-medium dark:text-gray-200 text-gray-800"
                                >
                                    Designation
                                </label>
                                <input
                                    type="text"
                                    id="employment_type"
                                    name="employment_type"
                                    value={formData.employment_type}
                                    onChange={handleChange}
                                    className="mt-1 block w-full rounded-md text-black dark:border-gray-800 border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="experience_years"
                                    className="block text-sm font-medium dark:text-gray-200 text-gray-800"
                                >
                                    Years of Experience
                                </label>
                                <input
                                    type="number"
                                    id="experience_years"
                                    name="experience_years"
                                    value={formData.experience_years}
                                    onChange={handleChange}
                                    min="0"
                                    max="50"
                                    className="mt-1 block w-full rounded-md text-black dark:border-gray-800 border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="current_stack"
                                    className="block text-sm font-medium dark:text-gray-200 text-gray-800"
                                >
                                    Current Tech Stack
                                </label>
                                <input
                                    type="text"
                                    id="current_stack"
                                    name="current_stack"
                                    value={formData.current_stack}
                                    onChange={handleChange}
                                    className="mt-1 block w-full rounded-md text-black dark:border-gray-800 border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="specialization"
                                    className="block text-sm font-medium dark:text-gray-200 text-gray-800"
                                >
                                    Specialization
                                </label>
                                <input
                                    type="text"
                                    id="specialization"
                                    name="specialization"
                                    value={formData.specialization}
                                    onChange={handleChange}
                                    className="mt-1 block w-full rounded-md text-black dark:border-gray-800 border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
                                />
                            </div>
                        </ProfileSection>

                        {/* Skills Section */}
                        <div className="space-y-6">
                            <h2 className="text-lg font-medium text-gray-900">
                                Skills
                            </h2>
                            <ArrayInputField
                                items={skills}
                                onAdd={(skill) => setSkills([...skills, skill])}
                                onRemove={(index) =>
                                    setSkills(
                                        skills.filter((_, i) => i !== index)
                                    )
                                }
                                placeholder="Add a new skill (e.g. React, Node.js)"
                                // className="text-black"
                            />
                        </div>

                        {/* Certifications Section */}
                        <div className="space-y-6">
                            <h2 className="text-lg font-medium text-gray-900">
                                Certifications
                            </h2>
                            <ArrayInputField
                                items={certifications}
                                onAdd={(cert) =>
                                    setCertifications([...certifications, cert])
                                }
                                onRemove={(index) =>
                                    setCertifications(
                                        certifications.filter(
                                            (_, i) => i !== index
                                        )
                                    )
                                }
                                placeholder="Add a new certification"
                                buttonText="Add Certification"
                            />
                        </div>

                        {/* Personal Information Section */}
                        <ProfileSection title="Personal Information">
                            <div>
                                <label
                                    htmlFor="age"
                                    className="block text-sm font-medium dark:text-gray-200 text-gray-800"
                                >
                                    Age
                                </label>
                                <input
                                    type="number"
                                    id="age"
                                    name="age"
                                    value={formData.age}
                                    onChange={handleChange}
                                    min="18"
                                    max="99"
                                    className="mt-1 block w-full rounded-md text-black dark:border-gray-800 border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="education"
                                    className="block text-sm  font-medium dark:text-gray-200 text-gray-800"
                                >
                                    Education
                                </label>
                                <input
                                    type="text"
                                    id="education"
                                    name="education"
                                    value={formData.education}
                                    onChange={handleChange}
                                    className="mt-1 block w-full rounded-md text-black dark:border-gray-800 border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="location"
                                    className="block text-sm font-medium dark:text-gray-200 text-gray-800"
                                >
                                    Location
                                </label>
                                <input
                                    type="text"
                                    id="location"
                                    name="location"
                                    value={formData.location}
                                    onChange={handleChange}
                                    className="mt-1 block w-full rounded-md text-black dark:border-gray-800 border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
                                />
                            </div>
                        </ProfileSection>

                        {/* Bio Section */}
                        <div>
                            <label
                                htmlFor="bio"
                                className="block text-sm font-medium dark:text-gray-200 text-gray-800"
                            >
                                Professional Bio
                            </label>
                            <textarea
                                id="bio"
                                name="bio"
                                rows={5}
                                value={formData.bio}
                                onChange={handleChange}
                                className="mt-1 block w-full rounded-md text-black dark:border-gray-800 border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
                                placeholder="Tell us about your professional journey, skills, and achievements..."
                            />
                        </div>

                        {/* Social Media Section */}
                        <ProfileSection title="Social Media Information">
                            <div>
                                <label
                                    htmlFor="linkedin"
                                    className="block text-sm font-medium dark:text-gray-200 text-gray-800"
                                >
                                    LinkedIn URL
                                </label>
                                <input
                                    type="url"
                                    id="linkedin"
                                    name="linkedin"
                                    value={formData.linkedin}
                                    onChange={handleChange}
                                    className="mt-1 block w-full rounded-md text-black dark:border-gray-800 border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
                                    placeholder="https://linkedin.com/in/yourprofile"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="github"
                                    className="block text-sm font-medium dark:text-gray-200 text-gray-800"
                                >
                                    GitHub URL
                                </label>
                                <input
                                    type="url"
                                    id="github"
                                    name="github"
                                    value={formData.github}
                                    onChange={handleChange}
                                    className="mt-1 block w-full rounded-md text-black dark:border-gray-800 border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
                                    placeholder="https://github.com/yourusername"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="portfolio_url"
                                    className="block text-sm font-medium dark:text-gray-200 text-gray-800"
                                >
                                    Portfolio URL
                                </label>
                                <input
                                    type="url"
                                    id="portfolio_url"
                                    name="portfolio_url"
                                    value={formData.portfolio_url}
                                    onChange={handleChange}
                                    className="mt-1 block w-full rounded-md text-black dark:border-gray-800 border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
                                    placeholder="https://yourportfolio.com"
                                />
                            </div>
                        </ProfileSection>

                        {/* Submit Button */}
                        <div className="flex justify-end pt-6 border-t border-gray-200">
                            <button
                                type="submit"
                                disabled={isUpdating}
                                className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 transition-colors"
                            >
                                {isUpdating ? (
                                    <span className="flex items-center">
                                        <svg
                                            className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                        >
                                            <circle
                                                className="opacity-25"
                                                cx="12"
                                                cy="12"
                                                r="10"
                                                stroke="currentColor"
                                                strokeWidth="4"
                                            ></circle>
                                            <path
                                                className="opacity-75"
                                                fill="currentColor"
                                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                            ></path>
                                        </svg>
                                        Updating...
                                    </span>
                                ) : (
                                    "Update Profile"
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </AdminLayout>
    );
};

export default ProfileEdit;
