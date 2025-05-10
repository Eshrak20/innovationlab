import React, { useState } from "react";
import { Link, router } from "@inertiajs/react";
import AdminLayout from "@/Layouts/AdminLayout";
import { showErrorToast, showSuccessToast } from "@/toastConfig/toast";
import { ToastContainer } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
const BlogList = ({ blogs: initialBlogs }) => {
    const [blogs, setBlogs] = useState(initialBlogs);
    const handleDelete = async (id) => {
        try {
            await axios.delete(route("blogs.destroy", id));
            setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog.id !== id));
            showSuccessToast("Blog deleted successfully!");
        } catch (error) {
            console.error(error);
            const errorMessage =
                error.response?.data?.message || "Failed to delete blog";
            showErrorToast(errorMessage);
        }
    };

    return (
        <AdminLayout>
            <ToastContainer />
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                        <span className="text-red-500">*Only Your</span> Blog
                        Posts
                    </h1>
                    <Link
                        href={route("blogs.create")}
                        className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 dark:hover:bg-indigo-500"
                    >
                        Create New Blog
                    </Link>
                </div>

                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-600">
                        <thead className="bg-gray-50 dark:bg-gray-700">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                    Title
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                    Category
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                    Date
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                    Published By
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                    Likes
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-600">
                            {blogs.map((blog) => (
                                <tr key={blog.id}>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm font-medium text-gray-900 dark:text-gray-100">
                                            {blog.title}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-500 dark:text-gray-300 capitalize">
                                            {blog.category}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-500 dark:text-gray-300">
                                            {new Date(
                                                blog.date
                                            ).toLocaleDateString()}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-500 dark:text-gray-300">
                                            {blog.published_by}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-500 dark:text-gray-300">
                                            {blog.likes}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                                        <div className="flex space-x-2">
                                            <Link
                                                href={route(
                                                    "blogs.show",
                                                    blog.id
                                                )}
                                                className="action-button edit-btn"
                                                title="Edit"
                                            >
                                                <FontAwesomeIcon icon={faEye} />
                                            </Link>
                                            <Link
                                                href={route(
                                                    "blogs.edit",
                                                    blog.id
                                                )}
                                                className="action-button edit-btn"
                                                title="Edit"
                                            >
                                                <FontAwesomeIcon icon={faPen} />
                                            </Link>
                                            <button
                                                className="action-button delete-btn"
                                                title="Delete"
                                            >
                                                <FontAwesomeIcon
                                                    icon={faTrash}
                                                />
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

export default BlogList;
