import AdminLayout from "@/Layouts/AdminLayout";
import { Head, Link } from "@inertiajs/react";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import { showSuccessToast, showErrorToast } from "@/toastConfig/toast";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";

const ExperienceStatus = ({ experiences: initialExperiences }) => {
    const [experiences, setExperiences] = useState(initialExperiences);
    const [editing, setEditing] = useState(null);
    const [form, setForm] = useState({ value: "" });
    const [isUpdating, setIsUpdating] = useState(false);

    const handleEdit = (exp) => {
        setEditing(exp.id);
        setForm({ value: exp.value.toString() });
    };

    const handleUpdate = async (id) => {
        if (!form.value) {
            showErrorToast("Please enter a value");
            return;
        }
        setIsUpdating(true);
        try {
            const { data } = await axios.patch(`experienceStatuses/${id}`, {
                value: parseInt(form.value),
            });

            setExperiences((exps) =>
                exps.map((e) =>
                    e.id === id ? { ...e, value: data.data.value } : e
                )
            );

            showSuccessToast("Experience updated successfully");
            setEditing(null);
        } catch (error) {
            console.error("Update error:", error);
            const errorMessage =
                error.response?.data?.message || "Failed to update experience";
            showErrorToast(errorMessage);
        } finally {
            setIsUpdating(false);
        }
    };
    //! Delete is disable for now
    // const handleDelete = async (id) => {
    //     if (!confirm("Are you sure you want to delete this experience?"))
    //         return;

    //     try {
    //         await axios.delete(`experience-statuses/${id}`);
    //         setExperiences((exps) => exps.filter((e) => e.id !== id));
    //         showSuccessToast("Experience deleted successfully");
    //     } catch (error) {
    //         console.error("Delete error:", error);
    //         showErrorToast("Failed to delete experience");
    //     }
    // };

    return (
        <AdminLayout>
            <Head title="Experience Status" />
            <ToastContainer />
            <div className="max-w-7xl mx-auto p-6">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
                        Experience Status
                    </h1>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                            <thead className="bg-gray-50 dark:bg-gray-700">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                        Experience Level
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                        Numbers
                                    </th>
                                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                                {experiences.map((exp) => (
                                    <tr
                                        key={exp.id}
                                        className="hover:bg-gray-50 dark:hover:bg-gray-700"
                                    >
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm font-medium text-gray-900 dark:text-white">
                                                {exp.label}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            {editing === exp.id ? (
                                                <input
                                                    type="number"
                                                    value={form.value}
                                                    onChange={(e) =>
                                                        setForm({
                                                            value: e.target
                                                                .value,
                                                        })
                                                    }
                                                    onKeyDown={(e) => {
                                                        if (
                                                            e.key === "Enter" &&
                                                            !e.shiftKey
                                                        ) {
                                                            e.preventDefault();
                                                            handleUpdate(
                                                                editing
                                                            );
                                                        }
                                                    }}
                                                    className="w-24 px-3 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                    min="0"
                                                    autoFocus
                                                />
                                            ) : (
                                                <div className="text-sm text-gray-900 dark:text-white font-semibold">
                                                    {exp.value}
                                                </div>
                                            )}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            {editing === exp.id ? (
                                                <div className="flex justify-end space-x-2">
                                                    <button
                                                        onClick={() =>
                                                            setEditing(null)
                                                        }
                                                        className="px-3 py-1 bg-gray-200 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-500 text-gray-800 dark:text-white rounded-md text-xs"
                                                    >
                                                        Cancel
                                                    </button>
                                                    <button
                                                        onClick={() =>
                                                            handleUpdate(exp.id)
                                                        }
                                                        disabled={isUpdating}
                                                        className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-xs disabled:opacity-50"
                                                    >
                                                        {isUpdating
                                                            ? "Saving..."
                                                            : "Save"}
                                                    </button>
                                                </div>
                                            ) : (
                                                <div className="flex justify-end space-x-2">
                                                    <button
                                                        onClick={() =>
                                                            handleEdit(exp)
                                                        }
                                                        className="action-button edit-btn"
                                                        title="Edit"
                                                    >
                                                        <FontAwesomeIcon
                                                            icon={faPen}
                                                        />
                                                    </button>

                                                    {/* //!  Delete is disable for now */}
                                                    {/* <button
                                                        onClick={() =>
                                                            handleDelete(exp.id)
                                                        }
                                                        className="action-button delete-btn"
                                                        title="Delete"
                                                    >
                                                        <FontAwesomeIcon
                                                            icon={faTrash}
                                                        />
                                                    </button> */}
                                                </div>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
};

export default ExperienceStatus;
