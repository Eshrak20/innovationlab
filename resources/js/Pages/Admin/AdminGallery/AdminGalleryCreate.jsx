import React, { useState } from "react";
import AdminLayout from "@/Layouts/AdminLayout";
import { router } from "@inertiajs/react";
import { showErrorToast, showSuccessToast } from "@/toastConfig/toast";
import { ToastContainer } from "react-toastify";

const AdminGalleryCreate = () => {
    const [formData, setFormData] = useState({
        image_name: "",
        image_path: null,
        is_home: false,
    });

    const handleChange = (e) => {
        const { name, type, value, checked, files } = e.target;
        if (type === "file") {
            setFormData({ ...formData, image_path: files[0] });
        } else if (type === "checkbox") {
            setFormData({ ...formData, [name]: checked });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append("image_name", formData.image_name);
        data.append("image_path", formData.image_path);
        data.append("is_home", formData.is_home ? 1 : 0);

        router.post(route("galleries.store"), data, {
            onSuccess: () => {
                showSuccessToast("Gallery image uploaded successfully!");
                setFormData({
                    image_name: "",
                    image_path: null,
                    is_home: false,
                });
            },
            onError: (errors) => {
                console.error(errors);
                showErrorToast("Failed to upload image.");
            },
        });
    };

    return (
        <AdminLayout>
            <ToastContainer />
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
                <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                    Upload New Gallery Image
                </h1>
                <form onSubmit={handleSubmit} encType="multipart/form-data">
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
                            value={formData.image_name}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full px-4 py-2 border dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="image_path"
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                        >
                            Image File
                        </label>
                        <input
                            type="file"
                            name="image_path"
                            id="image_path"
                            accept="image/*"
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full text-sm text-gray-900 dark:text-white bg-white dark:bg-gray-700 rounded-md border border-gray-300 dark:border-gray-600"
                        />
                    </div>
                    <div className="mb-4 flex items-center">
                        <input
                            type="checkbox"
                            name="is_home"
                            id="is_home"
                            checked={formData.is_home}
                            onChange={handleChange}
                            className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                        />
                        <label
                            htmlFor="is_home"
                            className="ml-2 block text-sm text-gray-700 dark:text-gray-300"
                        >
                            Show on Home Page
                        </label>
                    </div>
                    <button
                        type="submit"
                        className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 dark:hover:bg-indigo-500"
                    >
                        Upload Image
                    </button>
                </form>
            </div>
        </AdminLayout>
    );
};

export default AdminGalleryCreate;
