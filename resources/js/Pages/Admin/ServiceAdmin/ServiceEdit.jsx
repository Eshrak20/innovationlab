import { useState } from "react";
import { useForm } from "@inertiajs/inertia-react";
import AdminLayout from "@/Layouts/AdminLayout";
import { ToastContainer } from "react-toastify";
import { showErrorToast, showSuccessToast } from "@/toastConfig/toast";
import { router } from "@inertiajs/react";

const ServiceEdit = ({ service }) => {
    const { data, setData, errors } = useForm({
        title: service.title || "",
        short_description: service.short_description || "",
        description: service.description || "",
        icon: service.icon || "",
        image: service.image || "",
        is_featured: service.is_featured ? true : false,
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [previewImage, setPreviewImage] = useState(
        service.image ? `/storage/${service.image}` : null
    );

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Validate if is_featured is a boolean
        if (typeof data.is_featured !== "boolean") {
            showErrorToast("Feature status must be either true or false.");
            setIsSubmitting(false);
            return;
        }

        const formData = new FormData();

        // Append all fields except image
        Object.keys(data).forEach((key) => {
            if (key === "is_featured") {
                formData.append(key, data[key] ? "1" : "0");
            } else if (key !== "image") {
                formData.append(key, data[key]);
            }
        });

        // Only append image if it's a new file
        if (data.image instanceof File) {
            formData.append("image", data.image);
        }

        // Add PATCH override for Inertia
        formData.append("_method", "PATCH");

        router.post(route("services.update", service.id), formData, {
            forceFormData: true, // Important for file uploads
            onSuccess: () => {
                showSuccessToast("Service updated successfully!");
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
                    Edit Service
                </h1>
                <form onSubmit={handleSubmit} encType="multipart/form-data">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Title */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                Title*
                            </label>
                            <input
                                type="text"
                                value={data.title}
                                onChange={(e) =>
                                    setData("title", e.target.value)
                                }
                                className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white shadow-sm"
                                required
                            />
                            {errors.title && (
                                <p className="text-red-500 text-sm">
                                    {errors.title}
                                </p>
                            )}
                        </div>

                        {/* Icon */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                Icon (class or URL)
                            </label>
                            <input
                                type="text"
                                value={data.icon}
                                onChange={(e) =>
                                    setData("icon", e.target.value)
                                }
                                className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white shadow-sm"
                            />
                            {errors.icon && (
                                <p className="text-red-500 text-sm">
                                    {errors.icon}
                                </p>
                            )}
                        </div>

                        {/* Is Featured */}
                        <div className="col-span-2">
                            <label className="inline-flex items-center mt-2">
                                <input
                                    type="checkbox"
                                    checked={data.is_featured}
                                    onChange={(e) =>
                                        setData("is_featured", e.target.checked)
                                    }
                                    className="rounded border-gray-300 dark:border-gray-600"
                                />
                                <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                                    Feature on homepage
                                </span>
                            </label>
                        </div>

                        {/* Short Description */}
                        <div className="col-span-2">
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                Short Description
                            </label>
                            <textarea
                                value={data.short_description}
                                onChange={(e) =>
                                    setData("short_description", e.target.value)
                                }
                                rows={3}
                                className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white shadow-sm"
                            />
                            {errors.short_description && (
                                <p className="text-red-500 text-sm">
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
                                value={data.description}
                                onChange={(e) =>
                                    setData("description", e.target.value)
                                }
                                rows={5}
                                className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white shadow-sm"
                            />
                            {errors.description && (
                                <p className="text-red-500 text-sm">
                                    {errors.description}
                                </p>
                            )}
                        </div>

                        {/* Image Upload */}
                        <div className="col-span-2">
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                Upload Image
                            </label>
                            <input
                                type="file"
                                accept="image/*"
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
                                className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white shadow-sm"
                            />
                            {errors.image && (
                                <p className="text-red-500 text-sm">
                                    {errors.image}
                                </p>
                            )}
                            <div className="mt-4">
                                {previewImage && (
                                    <img
                                        src={previewImage}
                                        alt="Preview"
                                        className="h-40 rounded-md object-cover border"
                                    />
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 flex justify-end">
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 disabled:opacity-50"
                        >
                            {isSubmitting ? "Updating..." : "Update Service"}
                        </button>
                    </div>
                </form>
            </div>
        </AdminLayout>
    );
};

export default ServiceEdit;
