import AdminLayout from "@/Layouts/AdminLayout";
import { Head } from "@inertiajs/react";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import { showSuccessToast, showErrorToast } from "@/toastConfig/toast";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";

const ManagementData = ({ managementData: initialData }) => {
    const [dataList, setDataList] = useState(initialData);
    const [editingId, setEditingId] = useState(null);
    const [form, setForm] = useState({ title: "", number: "" });
    const [isUpdating, setIsUpdating] = useState(false);

    const handleEdit = (item) => {
        setEditingId(item.id);
        setForm({ title: item.title, number: item.number.toString() });
    };

    const handleUpdate = async (id) => {
        if (!form.title || !form.number) {
            showErrorToast("Please enter both title and number");
            return;
        }

        setIsUpdating(true);
        try {
            const { data } = await axios.put(`managementData/${id}`, {
                title: form.title,
                number: parseInt(form.number),
            });

            setDataList((list) =>
                list.map((item) =>
                    item.id === id ? { ...item, ...data.data } : item
                )
            );
            showSuccessToast("Data updated successfully");
            setEditingId(null);
        } catch (error) {
            console.error("Update error:", error);
            const errorMessage =
                error.response?.data?.message || "Failed to update data";
            showErrorToast(errorMessage);
        } finally {
            setIsUpdating(false);
        }
    };

    const handleDelete = async (id) => {
        if (!confirm("Are you sure you want to delete this item?")) return;
        try {
            await axios.delete(`management-data/${id}`);
            setDataList((list) => list.filter((item) => item.id !== id));
            showSuccessToast("Data deleted successfully");
        } catch (error) {
            console.error("Delete error:", error);
            showErrorToast("Failed to delete item");
        }
    };

    return (
        <AdminLayout>
            <Head title="Management Data" />
            <ToastContainer />
            <div className="max-w-7xl mx-auto p-6">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold text-gray-800">Management Metrics</h1>
                    <div className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">
                        {dataList.length} Records
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Metric
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-32">
                                        Value
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider w-40">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {dataList.map((item) => (
                                    <tr key={item.id} className="hover:bg-gray-50">
                                        <td className="px-6 py-4">
                                            {editingId === item.id ? (
                                                <input
                                                    type="text"
                                                    value={form.title}
                                                    onChange={(e) => setForm({ ...form, title: e.target.value })}
                                                    onKeyDown={(e) => {
                                                        if (
                                                            e.key === "Enter" &&
                                                            !e.shiftKey
                                                        ) {
                                                            e.preventDefault();
                                                            handleUpdate(
                                                                editingId
                                                            );
                                                        }
                                                    }}
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                    autoFocus
                                                />
                                            ) : (
                                                <div className="text-sm font-medium text-gray-900">{item.title}</div>
                                            )}
                                        </td>
                                        <td className="px-6 py-4">
                                            {editingId === item.id ? (
                                                <input
                                                    type="number"
                                                    value={form.number}
                                                    onChange={(e) => setForm({ ...form, number: e.target.value })}
                                                    onKeyDown={(e) => {
                                                        if (
                                                            e.key === "Enter" &&
                                                            !e.shiftKey
                                                        ) {
                                                            e.preventDefault();
                                                            handleUpdate(
                                                                editingId
                                                            );
                                                        }
                                                    }}
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                />
                                            ) : (
                                                <div className="text-xl font-bold text-blue-600">{item.number}+</div>
                                            )}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            {editingId === item.id ? (
                                                <div className="flex justify-end space-x-2">
                                                    <button
                                                        onClick={() => setEditingId(null)}
                                                        className="px-3 py-1 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-md text-xs"
                                                    >
                                                        Cancel
                                                    </button>
                                                    <button
                                                        onClick={() => handleUpdate(item.id)}
                                                        disabled={isUpdating}
                                                        className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-xs disabled:opacity-50"
                                                    >
                                                        {isUpdating ? "Saving..." : "Save"}
                                                    </button>
                                                </div>
                                            ) : (
                                                <div className="flex justify-end space-x-2">
                                                    <button
                                                        onClick={() => handleEdit(item)}
                                                        className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-xs"
                                                    >
                                                        Edit
                                                    </button>
                                                    <button
                                                        onClick={() => handleDelete(item.id)}
                                                        className="px-3 py-1 bg-red-600 hover:bg-red-700 text-white rounded-md text-xs"
                                                    >
                                                        Delete
                                                    </button>
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

export default ManagementData;