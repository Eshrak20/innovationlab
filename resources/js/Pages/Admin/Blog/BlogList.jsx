import React, { useState } from "react";
import { Link, router } from "@inertiajs/react";
import AdminLayout from "@/Layouts/AdminLayout";
import { showErrorToast, showSuccessToast } from "@/toastConfig/toast";
import { ToastContainer } from "react-toastify";
const BlogList = ({ blogs: initialBlogs  }) => {
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
            <div className="p-6 bg-white rounded-lg shadow">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold"><span className="text-red-500">*Only Your</span> Blog Posts</h1>
                    <Link
                        href={route("blogs.create")}
                        className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
                    >
                        Create New Blog
                    </Link>
                </div>

                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Title
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Category
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Date
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Published By
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Likes
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {blogs.map((blog) => (
                                <tr key={blog.id}>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm font-medium text-gray-900">
                                            {blog.title}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-500 capitalize">
                                            {blog.category}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-500">
                                            {new Date(
                                                blog.date
                                            ).toLocaleDateString()}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-500">
                                            {blog.published_by}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-500">
                                            {blog.likes}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        <div className="flex space-x-2">
                                            <Link
                                                href={route(
                                                    "blogs.show",
                                                    blog.id
                                                )}
                                                className="text-indigo-600 hover:text-indigo-900"
                                            >
                                                View
                                            </Link>
                                            <Link
                                                href={route(
                                                    "blogs.edit",
                                                    blog.id
                                                )}
                                                className="text-indigo-600 hover:text-indigo-900"
                                            >
                                                Edit
                                            </Link>
                                            <button
                                                onClick={() =>
                                                    handleDelete(blog.id)
                                                }
                                                className="text-red-600 hover:text-red-900"
                                            >
                                                Delete
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
