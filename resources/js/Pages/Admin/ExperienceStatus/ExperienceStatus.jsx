import AdminLayout from "@/Layouts/AdminLayout";
import { Head } from "@inertiajs/react";
import { useState } from "react";
import { ToastContainer } from 'react-toastify';
import { showSuccessToast, showErrorToast } from '@/toastConfig/toast';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';

const ExperienceStatus = ({ experiences: initialExperiences }) => {
    const [experiences, setExperiences] = useState(initialExperiences);
    const [editing, setEditing] = useState(null);
    const [form, setForm] = useState({ value: '' });
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
            const { data } = await axios.put(`/admin/experience-statuses/${id}`, {
                value: parseInt(form.value)
            });
            
            setExperiences(exps => exps.map(e => 
                e.id === id ? { ...e, value: data.data.value } : e
            ));
            
            showSuccessToast("Experience updated successfully");
            setEditing(null);
        } catch (error) {
            console.error("Update error:", error);
            const errorMessage = error.response?.data?.message || "Failed to update experience";
            showErrorToast(errorMessage);
        } finally {
            setIsUpdating(false);
        }
    };

    const handleDelete = async (id) => {
        if (!confirm("Are you sure you want to delete this experience?")) return;
        
        try {
            await axios.delete(`/admin/experience-statuses/${id}`);
            setExperiences(exps => exps.filter(e => e.id !== id));
            showSuccessToast("Experience deleted successfully");
        } catch (error) {
            console.error("Delete error:", error);
            showErrorToast("Failed to delete experience");
        }
    };

    return (
        <AdminLayout>
            <Head title="Experience Status" />
            {/* Toast Container must be included somewhere in your component tree */}
            <ToastContainer />
            
            <div className="max-w-7xl mx-auto p-6">
                <h1 className="text-2xl font-bold mb-6">Experience Status</h1>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {experiences.map(exp => (
                        <div key={exp.id} className="bg-white p-4 rounded-lg shadow-md border border-gray-100">
                            <h3 className="font-semibold text-gray-800">{exp.label}</h3>
                            
                            {editing === exp.id ? (
                                <div className="mt-3 space-y-3">
                                    <input
                                        type="number"
                                        value={form.value}
                                        onChange={(e) => setForm({ value: e.target.value })}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        min="0"
                                        autoFocus
                                    />
                                    <div className="flex space-x-2">
                                        <button 
                                            onClick={() => handleUpdate(exp.id)}
                                            disabled={isUpdating}
                                            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md disabled:opacity-50"
                                        >
                                            {isUpdating ? "Updating..." : "Save"}
                                        </button>
                                        <button 
                                            onClick={() => setEditing(null)}
                                            className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-md"
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <div className="mt-3 space-y-3">
                                    <p className="text-2xl font-bold text-gray-900">
                                        {exp.value}+
                                    </p>
                                    <div className="flex space-x-2">
                                        <button
                                            onClick={() => handleEdit(exp)}
                                            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md"
                                        >
                                            Edit
                                        </button>
                                        <button
                                            onClick={() => handleDelete(exp.id)}
                                            className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </AdminLayout>
    );
};

export default ExperienceStatus;