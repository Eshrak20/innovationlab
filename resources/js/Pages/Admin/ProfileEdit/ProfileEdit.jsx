import AdminLayout from "@/Layouts/AdminLayout";
import { Head } from "@inertiajs/react";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { showErrorToast, showSuccessToast } from "@/toastConfig/toast";
import ProfilePic from "./ProfilePic";

const ProfileEdit = ({ profile }) => {
    const [profilePhoto, setProfilePhoto] = useState(null);

    const getInitials = (fullName) => {
        if (!fullName) return "";
        const names = fullName.trim().split(" ");
        if (names.length === 1) return names[0][0].toUpperCase();
        return (
            names[0][0].toUpperCase() + names[names.length - 1][0].toUpperCase()
        );
    };

    // const handleFileChange = (file) => {
    //     setProfilePhoto(file);
    //     console.log("Cropped file received:", file);
    // };

    const handleFileChange = async (file) => {
        setProfilePhoto(file);

        const formData = new FormData();
        formData.append("profilePhotoPath", file);

        try {
            const csrfToken = document.querySelector(
                'meta[name="csrf-token"]'
            ).content;

            const response = await axios.put(
                `/profile/${profile.id}`,
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                        "X-CSRF-TOKEN": csrfToken, // Include CSRF token in headers
                    },
                }
            );

            console.log("PUT successful:", response.data);
        } catch (error) {
            console.error("Error uploading file via PUT:", error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsUpdating(true);
        // In your parent component (ProfileEdit)

        try {
            const payload = {
                ...formData,
                skills: skills.length ? skills : null,
                certifications: certifications.length ? certifications : null,
                programming_languages: programmingLanguages.length
                    ? programmingLanguages
                    : null,
                tools: tools.length ? tools : null,
                // profilePhotoPath: file ? file : null,
                projects: projects.length ? projects : null,
            };

            const { data } = await axios.put(`/profile/${profile.id}`, payload);

            // Update local state with the response
            setFormData({
                title: data.title || "",
                subtitle: data.subtitle || "",
                experience_years: data.experience_years || "",
                specialization: data.specialization || "",
                age: data.age || "",
                education: data.education || "",
                location: data.location || "",
                linkedin: data.linkedin || "",
                github: data.github || "",
                portfolio_url: data.portfolio_url || "",
                profilePhotoPath: data.profilePhotoPath || "",
                current_stack: data.current_stack || "",
                employment_type: data.employment_type || "",
                hourly_rate: data.hourly_rate || "",
                bio: data.bio || "",
            });

            setSkills(Array.isArray(data.skills) ? data.skills : []);
            setCertifications(
                Array.isArray(data.certifications) ? data.certifications : []
            );
            setProgrammingLanguages(
                Array.isArray(data.programming_languages)
                    ? data.programming_languages
                    : []
            );
            setTools(Array.isArray(data.tools) ? data.tools : []);
            setProjects(Array.isArray(data.projects) ? data.projects : []);

            showSuccessToast("Profile updated successfully");
        } catch (error) {
            console.error("Update error:", error);
            showErrorToast("Failed to update profile");
        } finally {
            setIsUpdating(false);
        }
    };

    // Initialize form state with profile data
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
        profilePhotoPath: profile?.profilePhotoPath || "",
        current_stack: profile?.current_stack || "",
        employment_type: profile?.employment_type || "",
        hourly_rate: profile?.hourly_rate || "",
        bio: profile?.bio || "",
    });

    // Array fields with null protection
    const [skills, setSkills] = useState(
        Array.isArray(profile?.skills) ? profile.skills : []
    );
    const [certifications, setCertifications] = useState(
        Array.isArray(profile?.certifications) ? profile.certifications : []
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

    // Input states for array fields
    const [newSkill, setNewSkill] = useState("");
    const [newCertification, setNewCertification] = useState("");
    const [isUpdating, setIsUpdating] = useState(false);

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // Handle array field additions
    const handleAddSkill = () => {
        if (newSkill.trim() && !skills.includes(newSkill.trim())) {
            setSkills([...skills, newSkill.trim()]);
            setNewSkill("");
        }
    };

    const handleRemoveSkill = (index) => {
        setSkills(skills.filter((_, i) => i !== index));
    };

    const handleAddCertification = () => {
        if (
            newCertification.trim() &&
            !certifications.includes(newCertification.trim())
        ) {
            setCertifications([...certifications, newCertification.trim()]);
            setNewCertification("");
        }
    };

    const handleRemoveCertification = (index) => {
        setCertifications(certifications.filter((_, i) => i !== index));
    };

    // Submit form

    return (
        <AdminLayout>
            <Head title="Edit Profile" />
            <ToastContainer />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="bg-white shadow rounded-lg overflow-hidden">
                    <div className="p-6 border-b border-gray-200">
                        <h1 className="text-2xl font-bold text-gray-900">
                            Edit Your Profile
                        </h1>
                        <p className="mt-1 text-gray-600">
                            Update your professional information
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="p-6 space-y-8">
                        <ProfilePic
                            fullName={profile?.title}
                            getInitials={getInitials}
                            profilePhoto={
                                profilePhoto || profile?.profilePhotoPath
                            }
                            onFileChange={handleFileChange}
                        />
                        {/* Professional Information Section */}
                        <div className="space-y-6">
                            <h2 className="text-lg font-medium text-gray-900">
                                Professional Information
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label
                                        htmlFor="title"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Professional Title
                                    </label>
                                    <input
                                        type="text"
                                        id="title"
                                        name="title"
                                        value={formData.title}
                                        onChange={handleChange}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="subtitle"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Tagline
                                    </label>
                                    <input
                                        type="text"
                                        id="subtitle"
                                        name="subtitle"
                                        value={formData.subtitle}
                                        onChange={handleChange}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="employment_type"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Designation
                                    </label>
                                    <input
                                        type="text"
                                        id="employment_type"
                                        name="employment_type"
                                        value={formData.employment_type}
                                        onChange={handleChange}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="experience_years"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Years of Experience
                                    </label>
                                    <input
                                        type="number"
                                        id="experience_years"
                                        name="experience_years"
                                        value={formData.experience_years}
                                        onChange={handleChange}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="current_stack"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Current Tech Stack
                                    </label>
                                    <input
                                        type="text"
                                        id="current_stack"
                                        name="current_stack"
                                        value={formData.current_stack}
                                        onChange={handleChange}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="specialization"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Specialization
                                    </label>
                                    <input
                                        type="text"
                                        id="specialization"
                                        name="specialization"
                                        value={formData.specialization}
                                        onChange={handleChange}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Skills Section */}
                        <div className="space-y-6">
                            <h2 className="text-lg font-medium text-gray-900">
                                Skills
                            </h2>
                            <div className="space-y-4">
                                <div className="flex space-x-2">
                                    <input
                                        type="text"
                                        value={newSkill}
                                        onChange={(e) =>
                                            setNewSkill(e.target.value)
                                        }
                                        className="flex-1 block rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                        placeholder="Add a new skill"
                                    />
                                    <button
                                        type="button"
                                        onClick={handleAddSkill}
                                        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                                    >
                                        Add
                                    </button>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {skills.map((skill, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center bg-gray-100 px-3 py-1 rounded-full"
                                        >
                                            <span>{skill}</span>
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    handleRemoveSkill(index)
                                                }
                                                className="ml-2 text-gray-500 hover:text-red-500"
                                            >
                                                ×
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Certifications Section */}
                        <div className="space-y-6">
                            <h2 className="text-lg font-medium text-gray-900">
                                Certifications
                            </h2>
                            <div className="space-y-4">
                                <div className="flex space-x-2">
                                    <input
                                        type="text"
                                        value={newCertification}
                                        onChange={(e) =>
                                            setNewCertification(e.target.value)
                                        }
                                        className="flex-1 block rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                        placeholder="Add a new certification"
                                    />
                                    <button
                                        type="button"
                                        onClick={handleAddCertification}
                                        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                                    >
                                        Add
                                    </button>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {certifications.map(
                                        (certification, index) => (
                                            <div
                                                key={index}
                                                className="flex items-center bg-gray-100 px-3 py-1 rounded-full"
                                            >
                                                <span>{certification}</span>
                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        handleRemoveCertification(
                                                            index
                                                        )
                                                    }
                                                    className="ml-2 text-gray-500 hover:text-red-500"
                                                >
                                                    ×
                                                </button>
                                            </div>
                                        )
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Personal Information Section */}
                        <div className="space-y-6">
                            <h2 className="text-lg font-medium text-gray-900">
                                Personal Information
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label
                                        htmlFor="age"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Age
                                    </label>
                                    <input
                                        type="number"
                                        id="age"
                                        name="age"
                                        value={formData.age}
                                        onChange={handleChange}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="education"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Education
                                    </label>
                                    <input
                                        type="text"
                                        id="education"
                                        name="education"
                                        value={formData.education}
                                        onChange={handleChange}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="location"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Location
                                    </label>
                                    <input
                                        type="text"
                                        id="location"
                                        name="location"
                                        value={formData.location}
                                        onChange={handleChange}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Bio Section */}
                        <div>
                            <label
                                htmlFor="bio"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Professional Bio
                            </label>
                            <textarea
                                id="bio"
                                name="bio"
                                rows={4}
                                value={formData.bio}
                                onChange={handleChange}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            />
                        </div>

                        {/* Social Media Section */}
                        <div className="space-y-6">
                            <h2 className="text-lg font-medium text-gray-900">
                                Social Media Information
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label
                                        htmlFor="linkedin"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Linkedin
                                    </label>
                                    <input
                                        type="text"
                                        id="linkedin"
                                        name="linkedin"
                                        value={formData.linkedin}
                                        onChange={handleChange}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="github"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Github
                                    </label>
                                    <input
                                        type="text"
                                        id="github"
                                        name="github"
                                        value={formData.github}
                                        onChange={handleChange}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="portfolio_url"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Portfolio
                                    </label>
                                    <input
                                        type="text"
                                        id="portfolio_url"
                                        name="portfolio_url"
                                        value={formData.portfolio_url}
                                        onChange={handleChange}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="profilePhotoPath"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Profile Photo Path
                                    </label>
                                    <input
                                        type="text"
                                        id="profilePhotoPath"
                                        name="profilePhotoPath"
                                        value={formData.profilePhotoPath}
                                        onChange={handleChange}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="flex justify-end">
                            <button
                                type="submit"
                                disabled={isUpdating}
                                className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
                            >
                                {isUpdating ? "Updating..." : "Update Profile"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </AdminLayout>
    );
};

export default ProfileEdit;
