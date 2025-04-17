import { useForm } from "@inertiajs/inertia-react";
import React from "react";

const AdminRegister = () => {
    const { data, setData, post, processing, errors } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
        invite_code: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('register'));
    };
    return (
        <>
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <form
                    onSubmit={handleSubmit}
                    className="bg-white p-6 rounded shadow-md w-full max-w-md"
                >
                    <h2 className="text-2xl font-bold mb-4 text-center">
                        Admin Register
                    </h2>

                    <input
                        type="text"
                        placeholder="Name"
                        value={data.name}
                        onChange={(e) => setData("name", e.target.value)}
                        className="block w-full mb-3 p-2 border rounded"
                    />
                    {errors.name && (
                        <div className="text-red-500 text-sm mb-2">
                            {errors.name}
                        </div>
                    )}

                    <input
                        type="email"
                        placeholder="Email"
                        value={data.email}
                        onChange={(e) => setData("email", e.target.value)}
                        className="block w-full mb-3 p-2 border rounded"
                    />
                    {errors.email && (
                        <div className="text-red-500 text-sm mb-2">
                            {errors.email}
                        </div>
                    )}

                    <input
                        type="password"
                        placeholder="Password"
                        value={data.password}
                        onChange={(e) => setData("password", e.target.value)}
                        className="block w-full mb-3 p-2 border rounded"
                    />
                    {errors.password && (
                        <div className="text-red-500 text-sm mb-2">
                            {errors.password}
                        </div>
                    )}

                    <input
                        type="password"
                        placeholder="Confirm Password"
                        value={data.password_confirmation}
                        onChange={(e) =>
                            setData("password_confirmation", e.target.value)
                        }
                        className="block w-full mb-3 p-2 border rounded"
                    />

                    <input
                        type="text"
                        placeholder="Invite Code"
                        value={data.invite_code}
                        onChange={(e) => setData("invite_code", e.target.value)}
                        className="block w-full mb-3 p-2 border rounded"
                    />
                    {errors.invite_code && (
                        <div className="text-red-500 text-sm mb-2">
                            {errors.invite_code}
                        </div>
                    )}

                    <button
                        type="submit"
                        // disabled={processing}
                        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                    >
                        Register
                    </button>
                </form>
            </div>
        </>
    );
};

export default AdminRegister;
