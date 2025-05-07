import React from "react";
import { useForm } from "@inertiajs/react";

export default function AdminLogin() {
    const { data, setData, post, processing, errors } = useForm({
        email: "",
        password: "",
    });

    //! And this should be the original code

    // const submit = (e) => {
    //     e.preventDefault();
    //     post(route('login'),);
    // };

    //! This is using for Chipa Teknic , the page reloading system
    const submit = (e) => {
        e.preventDefault();
        post(route("login"), {
            onSuccess: () => {
                window.location.reload(); // Refresh the page after login
            },
        });
    };

    return (
        <div className="relative min-h-screen flex items-center justify-center">
            {/* Video Background */}
            <div className="absolute inset-0 overflow-hidden z-0">
                <video
                    autoPlay
                    loop
                    muted
                    className="w-full h-full object-cover"
                >
                    <source
                        src="reactAssets/videos/purplevideo.mp4"
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            </div>

            {/* Login Form */}
            <div className="relative z-10 w-full max-w-md px-6 py-8 bg-white bg-opacity-90 rounded-lg shadow-xl backdrop-blur-sm">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-3xl font-bold text-gray-800">
                        Admin Login
                    </h2>
                    <a
                        href="/"
                        className="text-gray-600 hover:text-gray-900 transition-colors"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M10 19l-7-7m0 0l7-7m-7 7h18"
                            />
                        </svg>
                    </a>
                </div>

                <form onSubmit={submit} className="space-y-6">
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            value={data.email}
                            onChange={(e) => setData("email", e.target.value)}
                            className={`w-full px-4 py-2 border rounded-lg text-black focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                                errors.email
                                    ? "border-red-500"
                                    : "border-gray-300"
                            }`}
                            placeholder="admin@example.com"
                        />
                        {errors.email && (
                            <p className="mt-1 text-sm text-red-600">
                                {errors.email}
                            </p>
                        )}
                    </div>

                    <div>
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            value={data.password}
                            onChange={(e) =>
                                setData("password", e.target.value)
                            }
                            className={`w-full px-4 py-2 border rounded-lg text-black focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                                errors.password
                                    ? "border-red-500"
                                    : "border-gray-300"
                            }`}
                            placeholder="••••••••"
                        />
                        {errors.password && (
                            <p className="mt-1 text-sm text-red-600">
                                {errors.password}
                            </p>
                        )}
                    </div>

                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            disabled={processing}
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        >
                            {processing ? "Logging in..." : "Login"}
                        </button>
                    </div>
                </form>

                <div className="mt-6 pt-6 border-t border-gray-200">
                    <div className="flex justify-between">
                        <a
                            href={route("dashboard")}
                            className="inline-flex items-center px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium rounded-lg transition-colors duration-300"
                        >
                            Dashboard
                        </a>
                        <a
                            href={route("register")}
                            className="inline-flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors duration-300"
                        >
                            Register
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
