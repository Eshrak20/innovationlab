import React, { useState } from "react";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head } from "@inertiajs/react";
import { ToastContainer } from "react-toastify";
import axios from "axios";
import { showSuccessToast, showErrorToast } from "@/toastConfig/toast";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";

const MissionData = ({ missions: initialMissions }) => {
    const [missions, setMissions] = useState(initialMissions);
    const [editing, setEditing] = useState(null);
    const [form, setForm] = useState({ text: "" });
    const [isUpdating, setIsUpdating] = useState(false);

    const handleEdit = (mission) => {
        setEditing(mission.id);
        setForm({ text: mission.text });
    };

    const handleUpdate = async (id) => {
        if (!form.text.trim()) {
            showErrorToast("Please enter mission text");
            return;
        }

        setIsUpdating(true);

        try {
            const { data } = await axios.patch(`/mission/${id}`, {
                text: form.text,
            });

            setMissions((prev) =>
                prev.map((m) =>
                    m.id === id ? { ...m, text: data.data.text } : m
                )
            );

            showSuccessToast("Mission updated successfully");
            setEditing(null);
        } catch (error) {
            const message =
                error.response?.data?.message || "Failed to update mission";
            showErrorToast(message);
        } finally {
            setIsUpdating(false);
        }
    };
    //! Delete is disable for now
    // const handleDelete = async (id) => {
    //     if (!confirm("Are you sure you want to delete this mission?")) return;

    //     try {
    //         await axios.delete(`mission/${id}`);
    //         setMissions((prev) => prev.filter((m) => m.id !== id));
    //         showSuccessToast("Mission deleted successfully");
    //     } catch (error) {
    //         showErrorToast("Failed to delete mission");
    //     }
    // };

    return (
        <AdminLayout>
            <Head title="Mission Data" />
            <ToastContainer />
            <div className="max-w-7xl mx-auto p-6">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                        Mission Statements
                    </h1>
                    <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium dark:bg-blue-900 dark:text-blue-100">
                        Total: {missions.length}
                    </div>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                            <thead className="bg-gray-50 dark:bg-gray-700">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider w-16">
                                        ID
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                        Mission Statement
                                    </th>
                                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider w-32">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                                {missions.map((mission) => (
                                    <tr
                                        key={mission.id}
                                        className="hover:bg-gray-50 dark:hover:bg-gray-700"
                                    >
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-2xl font-serif text-gray-500 dark:text-gray-400">
                                                0{mission.id}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            {editing === mission.id ? (
                                                <textarea
                                                    value={form.text}
                                                    onChange={(e) =>
                                                        setForm({
                                                            text: e.target
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
                                                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                                                    rows={3}
                                                    autoFocus
                                                />
                                            ) : (
                                                <p className="text-gray-800 dark:text-gray-200">
                                                    {mission.text}
                                                </p>
                                            )}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            {editing === mission.id ? (
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
                                                            handleUpdate(
                                                                mission.id
                                                            )
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
                                                            handleEdit(mission)
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
                                                            handleDelete(
                                                                mission.id
                                                            )
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

                {/* Stats Card */}
                <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow border border-gray-100 dark:border-gray-700">
                        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-300">
                            Last Updated
                        </h3>
                        <p className="text-2xl font-semibold text-gray-900 dark:text-white">
                            {new Date().toLocaleDateString()}
                        </p>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
};

export default MissionData;
