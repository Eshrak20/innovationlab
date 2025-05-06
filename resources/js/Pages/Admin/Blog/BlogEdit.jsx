import React, { useState } from "react";
import { useForm } from "@inertiajs/inertia-react";
import axios from "axios";
import AdminLayout from "@/Layouts/AdminLayout";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { showErrorToast, showSuccessToast } from "@/toastConfig/toast";

const BlogEdit = ({ blog, categories }) => {
    const { data, setData, processing, errors } = useForm({
        image: blog.image || "",
        title: blog.title || "",
        summary: blog.summary || "",
        description: blog.description || "",
        date: blog.date || new Date().toISOString().split("T")[0],
        published_by: blog.published_by || "",
        category: blog.category || "technical",
        type: blog.type || "",
        slug: blog.slug || "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [previewImage, setPreviewImage] = useState(
        blog.image ? `/storage/${blog.image}` : null
    );
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData();

        // Append all fields to formData using a loop
        const fieldsToAppend = [
            "title",
            "summary",
            "description",
            "date",
            "published_by",
            "category",
            "slug",
        ];

        fieldsToAppend.forEach((key) => {
            if (data[key] !== undefined) {
                formData.append(key, data[key]);
            }
        });

        // Handle image separately
        if (data.image instanceof File) {
            formData.append("image", data.image);
        } else if (!data.image) {
            formData.append("image", "");
        }

        try {
            const response = await axios.post(
                route("blogs.update", blog.id),
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                        "X-HTTP-Method-Override": "PATCH",
                    },
                }
            );

            showSuccessToast(response.data.success);
        } catch (error) {
            console.error("Update error:", error);
            if (error.response && error.response.data.errors) {
                // Handle validation errors
                const errors = error.response.data.errors;
                Object.keys(errors).forEach((key) => {
                    showErrorToast(errors[key][0]);
                });
            } else {
                showErrorToast(
                    error.response?.data?.message || "Failed to update blog"
                );
            }
        } finally {
            setIsSubmitting(false);
        }
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
            <div className="p-6 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 rounded-lg shadow">
                <h1 className="text-2xl font-bold mb-6">Edit Blog</h1>
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Image Upload */}
                        <div className="col-span-2">
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                Upload Image
                            </label>
                            <input
                                type="file"
                                accept="image/*"
                                className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                onChange={(e) => {
                                    if (e.target.files && e.target.files[0]) {
                                        setData("image", e.target.files[0]);
                                        setPreviewImage(
                                            URL.createObjectURL(
                                                e.target.files[0]
                                            )
                                        );
                                    }
                                }}
                            />
                            {errors.image && (
                                <p className="mt-1 text-sm text-red-600">
                                    {errors.image}
                                </p>
                            )}
                            <div className="mt-4">
                                {previewImage ? (
                                    <img
                                        src={previewImage}
                                        alt="Preview"
                                        className="h-40 object-cover rounded-md border"
                                    />
                                ) : (
                                    blog.image && (
                                        <img
                                            src={blog.image}
                                            alt="Current"
                                            className="h-40 object-cover rounded-md border"
                                        />
                                    )
                                )}
                            </div>
                        </div>

                        {/* Title */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                Title*
                            </label>
                            <input
                                type="text"
                                className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
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
                                    className="mt-1 block w-full rounded-l-md border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                    value={data.slug}
                                    onChange={(e) =>
                                        setData("slug", e.target.value)
                                    }
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={generateSlug}
                                    className="mt-1 px-3 py-2 bg-gray-200 dark:bg-gray-700 dark:text-white rounded-r-md hover:bg-gray-300 dark:hover:bg-gray-600"
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
                            <input
                                type="text"
                                className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                value={data.published_by}
                                onChange={(e) =>
                                    setData("published_by", e.target.value)
                                }
                                required
                            />
                            {errors.published_by && (
                                <p className="mt-1 text-sm text-red-600">
                                    {errors.published_by}
                                </p>
                            )}
                        </div>

                        {/* Date */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                Date*
                            </label>
                            <input
                                type="date"
                                className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
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
                                className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
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
                                className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
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
                                className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                rows={6}
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

                    <div className="mt-6 flex justify-end">
                        <button
                            type="submit"
                            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 disabled:opacity-50"
                            disabled={isSubmitting || processing}
                        >
                            {isSubmitting || processing
                                ? "Updating..."
                                : "Update Blog"}
                        </button>
                    </div>
                </form>
            </div>
        </AdminLayout>
    );
};

export default BlogEdit;
