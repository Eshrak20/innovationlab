import React, { useState } from "react";
import { Link } from "@inertiajs/react";
import AdminLayout from "@/Layouts/AdminLayout";
import { showErrorToast, showSuccessToast } from "@/toastConfig/toast";
import { ToastContainer } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const AdminGalleryList = ({ galleries: initialGalleries }) => {
    const [galleries, setGalleries] = useState(initialGalleries);

    const handleDelete = async (id) => {
        try {
            await axios.delete(route("galleries.destroy", id));
            setGalleries((prev) => prev.filter((item) => item.id !== id));
            showSuccessToast("Image deleted successfully!");
        } catch (error) {
            console.error(error);
            showErrorToast(error?.response?.data?.message || "Delete failed");
        }
    };

    return (
        <AdminLayout>
            <ToastContainer />
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                        Gallery Images
                    </h1>
                    <Link
                        href={route("galleries.create")}
                        className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 dark:hover:bg-indigo-500"
                    >
                        Upload New Image
                    </Link>
                </div>

                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-600">
                        <thead className="bg-gray-50 dark:bg-gray-700">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase">
                                    Image
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase">
                                    Name
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase">
                                    Is Home
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase">
                                    Uploaded At
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-600">
                            {galleries.map((gallery) => (
                                <tr key={gallery.id}>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <img
                                            src={gallery.image_path}
                                            alt={gallery.image_name}
                                            className="w-20 h-20 object-cover rounded"
                                        />
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">
                                        {gallery.image_name}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                                        {gallery.is_home ? "Yes" : "No"}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                                        {new Date(
                                            gallery.created_at
                                        ).toLocaleDateString()}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                                        <div className="flex space-x-2">
                                            <Link
                                                href={route(
                                                    "galleries.show",
                                                    gallery.id
                                                )}
                                                className="action-button"
                                            >
                                                <FontAwesomeIcon icon={faEye} />
                                            </Link>
                                            <Link
                                                href={route(
                                                    "galleries.edit",
                                                    gallery.id
                                                )}
                                                className="action-button"
                                            >
                                                <FontAwesomeIcon icon={faPen} />
                                            </Link>
                                            <button
                                                className="action-button delete-btn"
                                                onClick={() =>
                                                    handleDelete(gallery.id)
                                                }
                                            >
                                                <FontAwesomeIcon icon={faTrash} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </AdminLayout>
    );
};

export default AdminGalleryList;
