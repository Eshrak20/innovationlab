import React, { useState } from "react";
import { Link } from "@inertiajs/react";
import AdminLayout from "@/Layouts/AdminLayout";
import { showErrorToast, showSuccessToast } from "@/toastConfig/toast";
import { ToastContainer } from "react-toastify";
import axios from "axios";

const ServiceList = ({ services: initialServices }) => {
    const [services, setServices] = useState(initialServices); // ✅ Convert to state

    const handleDelete = async (id) => {
        try {
            await axios.delete(route("services.destroy", id));
            // ✅ Remove deleted item from state
            setServices((prevServices) =>
                prevServices.filter((service) => service.id !== id)
            );
            showSuccessToast("Service deleted successfully!");
        } catch (error) {
            console.error(error);
            const errorMessage =
                error.response?.data?.message || "Failed to delete service";
            showErrorToast(errorMessage);
        }
    };

    return (
        <AdminLayout>
            <ToastContainer />
            <div className="p-6 bg-white rounded-lg shadow">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold">Service List</h1>
                    <Link
                        href={route("services.create")}
                        className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
                    >
                        Add New Service
                    </Link>
                </div>

                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Featured</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created At</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Updated At</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {services.map((service) => (
                                <tr key={service.id}>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                        {service.title}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {service.is_featured ? "Yes" : "No"}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {new Date(service.created_at).toLocaleDateString()}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {new Date(service.updated_at).toLocaleDateString()}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        <div className="flex space-x-2">
                                            
                                            <Link
                                                href={route("services.edit", service.id)}
                                                className="text-indigo-600 hover:text-indigo-900"
                                            >
                                                Edit
                                            </Link>
                                            <button
                                                onClick={() => handleDelete(service.id)}
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

export default ServiceList;
