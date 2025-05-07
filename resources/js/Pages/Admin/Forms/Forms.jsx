import React, { useState } from "react";
import AdminLayout from "@/Layouts/AdminLayout";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import { showSuccessToast, showErrorToast } from "@/toastConfig/toast";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Forms = ({ forms: initialForms }) => {
    const [forms, setForms] = useState(initialForms);

    const handleDelete = async (id) => {
        if (!confirm("Are you sure you want to delete this form?")) return;

        try {
            const response = await axios.delete(`forms/${id}`, {});

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
            <div className="p-6 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 rounded-lg shadow">
                <h2 className="text-2xl font-bold mb-4">Contact Forms</h2>
                <table className="w-full border-collapse border border-gray-300 dark:border-gray-700">
                    <thead>
                        <tr className="bg-gray-100 dark:bg-gray-800">
                            <th className="border px-4 py-2 dark:border-gray-700">
                                Name
                            </th>
                            <th className="border px-4 py-2 dark:border-gray-700">
                                Company
                            </th>
                            <th className="border px-4 py-2 dark:border-gray-700">
                                Phone
                            </th>
                            <th className="border px-4 py-2 dark:border-gray-700">
                                Email
                            </th>
                            <th className="border px-4 py-2 dark:border-gray-700">
                                Description
                            </th>
                            <th className="border px-4 py-2 dark:border-gray-700">
                                Read
                            </th>
                            <th className="border px-4 py-2 dark:border-gray-700">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {forms.map((form) => (
                            <tr
                                key={form.id}
                                className="cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800"
                            >
                                <td className="border px-4 py-2 dark:border-gray-700">
                                    {form.name}
                                </td>
                                <td className="border px-4 py-2 dark:border-gray-700">
                                    {form.company}
                                </td>
                                <td className="border px-4 py-2 dark:border-gray-700">
                                    {form.phone}
                                </td>
                                <td className="border px-4 py-2 dark:border-gray-700">
                                    {form.email}
                                </td>
                                <td className="border px-4 py-2 dark:border-gray-700">
                                    {form.description}
                                </td>
                                <td className="border px-4 py-2 dark:border-gray-700">
                                    {form.is_read}
                                </td>
                                <td
                                    className="border px-4 py-2 dark:border-gray-700"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <button
                                        onClick={() => handleDelete(form.id)}
                                        className="action-button delete-btn"
                                        title="Delete"
                                    >
                                        <FontAwesomeIcon icon={faTrash} />
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
