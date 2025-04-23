import AdminLayout from "@/Layouts/AdminLayout";
import { Head } from "@inertiajs/react";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import { showSuccessToast, showErrorToast } from "@/toastConfig/toast";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";

const ContactInfo = ({ contactInfo: initialContactInfos }) => {
    const [contactInfos, setContactInfos] = useState(initialContactInfos);
    const [editing, setEditing] = useState(null);
    const [form, setForm] = useState({
        title: "",
        email: "",
        email2: "",
        email3: "",
        address: "",
        phone: "",
        phone2: "",
        phone3: "",
        mapRoad: "",
        mapDefault: "",
    });
    const [isUpdating, setIsUpdating] = useState(false);

    const handleEdit = (contact) => {
        setEditing(contact.id);
        setForm({
            title: contact.title || "",
            email: contact.email || "",
            email2: contact.email2 || "",
            email3: contact.email3 || "",
            address: contact.address || "",
            phone: contact.phone || "",
            phone2: contact.phone2 || "",
            phone3: contact.phone3 || "",
            mapRoad: contact.mapRoad || "",
            mapDefault: contact.mapDefault || "",
        });
    };

    const handleUpdate = async (id) => {
        if (!form.email || !form.phone) {
            showErrorToast("Please fill in required fields (Email, Phone)");
            return;
        }
        setIsUpdating(true);
        try {
            const { data } = await axios.patch(`contactInfo/${id}`, { ...form });

            setContactInfos((infos) =>
                infos.map((info) => (info.id === id ? { ...info, ...data.data } : info))
            );

            showSuccessToast("Contact info updated successfully");
            setEditing(null);
        } catch (error) {
            console.error("Update error:", error);
            const errorMessage = error.response?.data?.message || "Failed to update contact info";
            showErrorToast(errorMessage);
        } finally {
            setIsUpdating(false);
        }
    };

    const handleDelete = async (id) => {
        if (!confirm("Are you sure you want to delete this contact info?")) return;

        try {
            await axios.delete(`contactInfo/${id}`);
            setContactInfos((infos) => infos.filter((info) => info.id !== id));
            showSuccessToast("Contact info deleted successfully");
        } catch (error) {
            console.error("Delete error:", error);
            showErrorToast("Failed to delete contact info");
        }
    };

    return (
        <AdminLayout>
            <Head title="Contact Information" />
            <ToastContainer />
            <div className="max-w-7xl mx-auto p-6">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold text-gray-800">Contact Information</h1>
                </div>

                <div className="bg-white rounded-lg shadow overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Title
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Email
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Phone
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Address
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {contactInfos.map((info) => (
                                    <tr key={info.id}>
                                        {editing === info.id ? (
                                            <>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <input
                                                        type="text"
                                                        value={form.title}
                                                        onChange={(e) => setForm({ ...form, title: e.target.value })}
                                                        className="w-full px-2 py-1 border border-gray-300 rounded-md"
                                                    />
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <input
                                                        type="text"
                                                        value={form.email}
                                                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                                                        className="w-full px-2 py-1 border border-gray-300 rounded-md"
                                                    />
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <input
                                                        type="text"
                                                        value={form.phone}
                                                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                                                        className="w-full px-2 py-1 border border-gray-300 rounded-md"
                                                    />
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <input
                                                        type="text"
                                                        value={form.address}
                                                        onChange={(e) => setForm({ ...form, address: e.target.value })}
                                                        className="w-full px-2 py-1 border border-gray-300 rounded-md"
                                                    />
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                    <div className="flex justify-end space-x-2">
                                                        <button
                                                            onClick={() => handleUpdate(info.id)}
                                                            disabled={isUpdating}
                                                            className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-xs disabled:opacity-50"
                                                        >
                                                            {isUpdating ? "Saving..." : "Save"}
                                                        </button>
                                                        <button
                                                            onClick={() => setEditing(null)}
                                                            className="px-3 py-1 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-md text-xs"
                                                        >
                                                            Cancel
                                                        </button>
                                                    </div>
                                                </td>
                                            </>
                                        ) : (
                                            <>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                    {info.title}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                    <div>{info.email}</div>
                                                    {info.email2 && <div className="text-gray-400">{info.email2}</div>}
                                                    {info.email3 && <div className="text-gray-400">{info.email3}</div>}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                    <div>{info.phone}</div>
                                                    {info.phone2 && <div className="text-gray-400">{info.phone2}</div>}
                                                    {info.phone3 && <div className="text-gray-400">{info.phone3}</div>}
                                                </td>
                                                <td className="px-6 py-4 text-sm text-gray-500">
                                                    {info.address}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                    <div className="flex justify-end space-x-2">
                                                        <button
                                                            onClick={() => handleEdit(info)}
                                                            className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-xs"
                                                        >
                                                            Edit
                                                        </button>
                                                        <button
                                                            onClick={() => handleDelete(info.id)}
                                                            className="px-3 py-1 bg-red-600 hover:bg-red-700 text-white rounded-md text-xs"
                                                        >
                                                            Delete
                                                        </button>
                                                    </div>
                                                </td>
                                            </>
                                        )}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Expanded view for editing all fields */}
                    {editing !== null && (
                        <div className="p-6 border-t border-gray-200">
                            <h3 className="text-lg font-medium text-gray-900 mb-4">Edit Contact Details</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                                    <input
                                        type="text"
                                        value={form.title}
                                        onChange={(e) => setForm({ ...form, title: e.target.value })}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Primary Email*</label>
                                    <input
                                        type="text"
                                        value={form.email}
                                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Secondary Email</label>
                                    <input
                                        type="text"
                                        value={form.email2}
                                        onChange={(e) => setForm({ ...form, email2: e.target.value })}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Tertiary Email</label>
                                    <input
                                        type="text"
                                        value={form.email3}
                                        onChange={(e) => setForm({ ...form, email3: e.target.value })}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Primary Phone*</label>
                                    <input
                                        type="text"
                                        value={form.phone}
                                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Secondary Phone</label>
                                    <input
                                        type="text"
                                        value={form.phone2}
                                        onChange={(e) => setForm({ ...form, phone2: e.target.value })}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Tertiary Phone</label>
                                    <input
                                        type="text"
                                        value={form.phone3}
                                        onChange={(e) => setForm({ ...form, phone3: e.target.value })}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                    />
                                </div>
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                                    <input
                                        type="text"
                                        value={form.address}
                                        onChange={(e) => setForm({ ...form, address: e.target.value })}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                    />
                                </div>
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Map Road</label>
                                    <input
                                        type="text"
                                        value={form.mapRoad}
                                        onChange={(e) => setForm({ ...form, mapRoad: e.target.value })}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                    />
                                </div>
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Map Default</label>
                                    <input
                                        type="text"
                                        value={form.mapDefault}
                                        onChange={(e) => setForm({ ...form, mapDefault: e.target.value })}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                    />
                                </div>
                            </div>
                            <div className="mt-4 flex justify-end space-x-3">
                                <button
                                    onClick={() => setEditing(null)}
                                    className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-md text-sm"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={() => handleUpdate(editing)}
                                    disabled={isUpdating}
                                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm disabled:opacity-50"
                                >
                                    {isUpdating ? "Updating..." : "Update Contact"}
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </AdminLayout>
    );
};

export default ContactInfo;