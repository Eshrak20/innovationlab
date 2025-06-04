import React, { useState } from "react";
import AdminLayout from "@/Layouts/AdminLayout";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { showErrorToast, showSuccessToast } from "@/toastConfig/toast";
import { useForm } from "@inertiajs/inertia-react";
import { router } from "@inertiajs/react";

const BlogCreate = ({ categories, adminProfile }) => {
    const { data, setData, reset, processing, errors } = useForm({
        image: "",
        title: "",
        summary: "",
        description: "",
        date: new Date().toISOString().split("T")[0],
        published_by: adminProfile?.name || "Unknown",
        profile_photo: adminProfile?.photo || "",
        category: "technical",
        type: "",
        slug: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData();
        Object.keys(data).forEach((key) => {
            formData.append(key, data[key]);
        });

        router.post(route("blogs.store"), formData, {
            onSuccess: () => {
                reset();
            },
            
            onError: (errors) => {
                console.error("Submit error:", errors);
                showErrorToast("Failed to create blog");
            },
            onFinish: () => setIsSubmitting(false),
        });
    };

    const generateSlug = () => {
        const slug = data.title
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/(^-|-$)+/g, "");
        setData("slug", slug);
    };

    return (
        <AdminLayout>
            <ToastContainer />
            <div className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow">
                <h1 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                    Create New Blog
                </h1>
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Upload Image */}
                        <div className="col-span-2">
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                Upload Image
                            </label>
                            <input
                                type="file"
                                className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                onChange={(e) =>
                                    setData("image", e.target.files[0])
                                }
                            />
                            {errors.image && (
                                <p className="mt-1 text-sm text-red-600">
                                    {errors.image}
                                </p>
                            )}
                        </div>

                        {/* Title */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                Title*
                            </label>
                            <input
                                type="text"
                                className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                value={data.title}
                                onChange={(e) =>
                                    setData("title", e.target.value)
                                }
                                required
                            />
                            {errors.title && (
                                <p className="mt-1 text-sm text-red-600">
                                    {errors.title}
                                </p>
                            )}
                        </div>

                        {/* Slug */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                Slug*
                            </label>
                            <div className="flex">
                                <input
                                    type="text"
                                    className="mt-1 block w-full rounded-l-md border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                    value={data.slug}
                                    onChange={(e) =>
                                        setData("slug", e.target.value)
                                    }
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={generateSlug}
                                    className="mt-1 px-3 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-r-md hover:bg-gray-300 dark:hover:bg-gray-600"
                                >
                                    Generate
                                </button>
                            </div>
                            {errors.slug && (
                                <p className="mt-1 text-sm text-red-600">
                                    {errors.slug}
                                </p>
                            )}
                        </div>

                        {/* Published By */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                Published By*
                            </label>
                            <div>
                                <div className="mt-1 p-2 rounded-md border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white shadow-sm">
                                    {adminProfile?.name || "Unknown"}
                                </div>
                            </div>
                        </div>

                        {/* Date */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                Date*
                            </label>
                            <input
                                type="date"
                                className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                value={data.date}
                                onChange={(e) =>
                                    setData("date", e.target.value)
                                }
                                required
                            />
                            {errors.date && (
                                <p className="mt-1 text-sm text-red-600">
                                    {errors.date}
                                </p>
                            )}
                        </div>

                        {/* Category */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                Category*
                            </label>
                            <select
                                className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                value={data.category}
                                onChange={(e) =>
                                    setData("category", e.target.value)
                                }
                                required
                            >
                                {categories.map((category) => (
                                    <option key={category} value={category}>
                                        {category.charAt(0).toUpperCase() +
                                            category.slice(1)}
                                    </option>
                                ))}
                            </select>
                            {errors.category && (
                                <p className="mt-1 text-sm text-red-600">
                                    {errors.category}
                                </p>
                            )}
                        </div>

                        {/* Summary */}
                        <div className="col-span-2">
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                Summary
                            </label>
                            <textarea
                                className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                rows={3}
                                value={data.summary}
                                onChange={(e) =>
                                    setData("summary", e.target.value)
                                }
                            />
                            {errors.summary && (
                                <p className="mt-1 text-sm text-red-600">
                                    {errors.summary}
                                </p>
                            )}
                        </div>

                        {/* Description */}
                        <div className="col-span-2">
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                Description*
                            </label>
                            <textarea
                                className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                rows={12}
                                value={data.description}
                                onChange={(e) =>
                                    setData("description", e.target.value)
                                }
                                required
                            />
                            {errors.description && (
                                <p className="mt-1 text-sm text-red-600">
                                    {errors.description}
                                </p>
                            )}
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="mt-6 flex justify-end">
                        <button
                            type="submit"
                            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 disabled:opacity-50"
                            disabled={isSubmitting || processing}
                        >
                            {isSubmitting || processing
                                ? "Creating..."
                                : "Create Blog"}
                        </button>
                    </div>
                </form>
            </div>
        </AdminLayout>
    );
};

export default BlogCreate;
