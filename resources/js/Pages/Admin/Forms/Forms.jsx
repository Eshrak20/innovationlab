import React, { useState } from "react";
import AdminLayout from "@/Layouts/AdminLayout";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import { showSuccessToast, showErrorToast } from "@/toastConfig/toast";
import "react-toastify/dist/ReactToastify.css";

const Forms = ({ forms: initialForms }) => {
    const [forms, setForms] = useState(initialForms);

    const handleDelete = async (id) => {
        if (!confirm("Are you sure you want to delete this form?")) return;

        try {
            const response = await axios.delete(`forms/${id}`, {
            });

            if (response.status === 200) {
                setForms((prev) => prev.filter((form) => form.id !== id));
                showSuccessToast("Form deleted successfully");
            }
        } catch (error) {
            console.error("Delete error:", error);
            showErrorToast("Failed to delete form");
        }
    };

    return (
        <AdminLayout>
            <ToastContainer />
            <div className="p-6">
                <h2 className="text-2xl font-bold mb-4">Contact Forms</h2>
                <table className="w-full border-collapse border border-gray-300">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="border px-4 py-2">Name</th>
                            <th className="border px-4 py-2">Company</th>
                            <th className="border px-4 py-2">Phone</th>
                            <th className="border px-4 py-2">Email</th>
                            <th className="border px-4 py-2">Description</th>
                            <th className="border px-4 py-2">Read</th>
                            <th className="border px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {forms.map((form) => (
                            <tr
                                key={form.id}
                                className="cursor-pointer hover:bg-gray-100"
                            >
                                <td className="border px-4 py-2">
                                    {form.name}
                                </td>
                                <td className="border px-4 py-2">
                                    {form.company}
                                </td>
                                <td className="border px-4 py-2">
                                    {form.phone}
                                </td>
                                <td className="border px-4 py-2">
                                    {form.email}
                                </td>
                                <td className="border px-4 py-2">
                                    {form.description}
                                </td>
                                <td className="border px-4 py-2">
                                    {form.is_read}
                                </td>
                                <td
                                    className="border px-4 py-2"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <button
                                        onClick={() => handleDelete(form.id)}
                                        className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </AdminLayout>
    );
};

export default Forms;
