import React, { useState } from "react";
import { useForm } from "@inertiajs/inertia-react";
import AdminLayout from "@/Layouts/AdminLayout";
import { ToastContainer } from "react-toastify";
import { showErrorToast, showSuccessToast } from "@/toastConfig/toast";
import "react-toastify/dist/ReactToastify.css";
import { router } from "@inertiajs/react";

const ServiceCreate = () => {
    const { data, setData, reset, processing, errors } = useForm({
        title: "",
        short_description: "",
        description: "",
        icon: "",
        image: "",
        is_featured: false,
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData();
        Object.keys(data).forEach((key) => {
            if (key === "is_featured") {
                formData.append(key, data[key] ? "1" : "0");
            } else {
                formData.append(key, data[key]);
            }
        });

        router.post(route("services.store"), formData, {
            forceFormData: true, // Important for multipart/form-data
            onSuccess: () => {
                showSuccessToast("Service created successfully!");
                reset();
            },
            onError: (errors) => {
                console.error("Submit error:", errors);
                Object.values(errors).forEach((msg) => showErrorToast(msg));
            },
            onFinish: () => {
                setIsSubmitting(false);
            },
        });
    };

    return (
        <AdminLayout>
            <ToastContainer />
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
                <h1 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                    Create New Service
                </h1>
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Image */}
                        <div className="col-span-2">
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                Upload Image
                            </label>
                            <input
                                type="file"
                                className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white shadow-sm"
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
                                className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white shadow-sm"
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

                        {/* Icon */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                Icon (class or image URL)
                            </label>
                            <input
                                type="text"
                                className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white shadow-sm"
                                value={data.icon}
                                onChange={(e) =>
                                    setData("icon", e.target.value)
                                }
                            />
                            {errors.icon && (
                                <p className="mt-1 text-sm text-red-600">
                                    {errors.icon}
                                </p>
                            )}
                        </div>

                        {/* Short Description */}
                        <div className="col-span-2">
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                Short Description
                            </label>
                            <textarea
                                className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white shadow-sm"
                                rows={3}
                                value={data.short_description}
                                onChange={(e) =>
                                    setData("short_description", e.target.value)
                                }
                            />
                            {errors.short_description && (
                                <p className="mt-1 text-sm text-red-600">
                                    {errors.short_description}
                                </p>
                            )}
                        </div>

                        {/* Description */}
                        <div className="col-span-2">
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                Full Description
                            </label>
                            <textarea
                                className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white shadow-sm"
                                rows={6}
                                value={data.description}
                                onChange={(e) =>
                                    setData("description", e.target.value)
                                }
                            />
                            {errors.description && (
                                <p className="mt-1 text-sm text-red-600">
                                    {errors.description}
                                </p>
                            )}
                        </div>

                        {/* Is Featured */}
                        <div className="col-span-2 flex items-center">
                            <input
                                id="is_featured"
                                type="checkbox"
                                className="h-4 w-4 text-indigo-600 border-gray-300 dark:border-gray-600 dark:bg-gray-700 rounded"
                                checked={data.is_featured}
                                onChange={(e) =>
                                    setData("is_featured", e.target.checked)
                                }
                            />
                            <label
                                htmlFor="is_featured"
                                className="ml-2 block text-sm text-gray-700 dark:text-gray-300"
                            >
                                Feature this service on homepage
                            </label>
                        </div>
                    </div>

                    <div className="mt-6 flex justify-end">
                        <button
                            type="submit"
                            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 disabled:opacity-50"
                            disabled={isSubmitting || processing}
                        >
                            {isSubmitting || processing
                                ? "Creating..."
                                : "Create Service"}
                        </button>
                    </div>
                </form>
            </div>
        </AdminLayout>
    );
};

export default ServiceCreate;
