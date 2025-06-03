import { useState } from "react";
import AdminLayout from "@/Layouts/AdminLayout";
import { ToastContainer } from "react-toastify";
import { showSuccessToast, showErrorToast } from "@/toastConfig/toast";
import axios from "axios";
import { useForm } from "@inertiajs/inertia-react";

const AdminGalleryEdit = ({ galleries }) => {
    const { data, setData, errors } = useForm({
        image_name: galleries.image_name || "",
        image_path: galleries.image_path || "",
        is_home: galleries.is_home ? true : false,
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [previewImage, setPreviewImage] = useState(
        galleries.image_path ? `/storage/${galleries.image_path}` : null
    );

    const handleChange = (e) => {
        const { name, type, value, checked, files } = e.target;
        if (type === "file") {
            const file = files[0];
            setData(name, file);
            setPreviewImage(URL.createObjectURL(file));
        } else if (type === "checkbox") {
            setData(name, checked);
        } else {
            setData(name, value);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData();

        Object.keys(data).forEach((key) => {
            if (key === "is_home") {
                formData.append(key, data[key] ? "1" : "0");
            } else if (key !== "image_path") {
                formData.append(key, data[key]);
            }
        });

        if (data.image_path instanceof File) {
            formData.append("image_path", data.image_path);
        }
        console.log(formData);
        try {
            const response = await axios.post(
                route("galleries.update", galleries.id),
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                        "X-HTTP-Method-Override": "PUT",
                    },
                }
            );
            showSuccessToast(
                response.data?.success || "Gallery updated successfully!"
            );
        } catch (error) {
            console.error(error);
            const errorData = error.response?.data?.errors;
            if (errorData) {
                Object.values(errorData).forEach((errArr) =>
                    showErrorToast(errArr[0])
                );
            } else {
                showErrorToast("Failed to update gallery.");
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <AdminLayout>
            <ToastContainer />
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
                <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                    Edit Gallery Image
                </h1>
                <form onSubmit={handleSubmit} encType="multipart/form-data">
                    {/* Image Name */}
                    <div className="mb-4">
                        <label
                            htmlFor="image_name"
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                        >
                            Image Name
                        </label>
                        <input
                            type="text"
                            name="image_name"
                            id="image_name"
                            value={data.image_name}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full px-4 py-2 border dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                        />
                        {errors.image_name && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.image_name}
                            </p>
                        )}
                    </div>

                    {/* Image Upload */}
                    <div className="mb-4">
                        <label
                            htmlFor="image_path"
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                        >
                            Replace Image (optional)
                        </label>
                        <input
                            type="file"
                            name="image_path"
                            id="image_path"
                            accept="image/*"
                            onChange={handleChange}
                            className="mt-1 block w-full text-sm text-gray-900 dark:text-white bg-white dark:bg-gray-700 rounded-md border border-gray-300 dark:border-gray-600"
                        />
                        {previewImage && (
                            <img
                                src={previewImage}
                                alt="Preview"
                                className="mt-2 w-32 h-auto rounded border"
                            />
                        )}
                        {errors.image_path && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.image_path}
                            </p>
                        )}
                    </div>

                    {/* is_home checkbox */}
                    <div className="mb-4 flex items-center">
                        <input
                            type="checkbox"
                            name="is_home"
                            id="is_home"
                            checked={data.is_home}
                            onChange={handleChange}
                            className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
                        />
                        <label
                            htmlFor="is_home"
                            className="ml-2 block text-sm text-gray-700 dark:text-gray-300"
                        >
                            Show on Home Page
                        </label>
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 dark:hover:bg-blue-500 disabled:opacity-50"
                    >
                        {isSubmitting ? "Updating..." : "Update Gallery"}
                    </button>
                </form>
            </div>
        </AdminLayout>
    );
};

export default AdminGalleryEdit;
