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
        <div className="relative min-h-screen flex items-center justify-center">
            {/* Video Background */}
            <div className="absolute inset-0 overflow-hidden z-0">
                <video 
                    autoPlay 
                    loop 
                    muted 
                    className="w-full h-full object-cover"
                >
                    <source src="reactAssets/videos/purplevideo.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            </div>

            {/* Registration Form */}
            <div className="relative z-10 w-full max-w-md px-8 py-10 bg-white bg-opacity-90 rounded-xl shadow-2xl backdrop-blur-sm">
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-800">Admin Registration</h2>
                    <a 
                        href='/'
                        className="text-gray-600 hover:text-gray-900 transition-colors"
                        title="Back to Home"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                    </a>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                            Full Name
                        </label>
                        <input
                            id="name"
                            type="text"
                            value={data.name}
                            onChange={(e) => setData("name", e.target.value)}
                            className={`w-full px-4 py-3 border rounded-lg text-black focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                                errors.name ? 'border-red-500' : 'border-gray-300'
                            }`}
                            placeholder="Your Name"
                        />
                        {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Email Address
                        </label>
                        <input
                            id="email"
                            type="email"
                            value={data.email}
                            onChange={(e) => setData("email", e.target.value)}
                            className={`w-full px-4 py-3 border rounded-lg text-black focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                                errors.email ? 'border-red-500' : 'border-gray-300'
                            }`}
                            placeholder="admin@example.com"
                        />
                        {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            value={data.password}
                            onChange={(e) => setData("password", e.target.value)}
                            className={`w-full px-4 py-3 border rounded-lg text-black focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                                errors.password ? 'border-red-500' : 'border-gray-300'
                            }`}
                            placeholder="••••••••"
                        />
                        {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password}</p>}
                    </div>

                    <div>
                        <label htmlFor="password_confirmation" className="block text-sm font-medium text-gray-700 mb-1">
                            Confirm Password
                        </label>
                        <input
                            id="password_confirmation"
                            type="password"
                            value={data.password_confirmation}
                            onChange={(e) => setData("password_confirmation", e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-black focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="••••••••"
                        />
                    </div>

                    <div>
                        <label htmlFor="invite_code" className="block text-sm font-medium text-gray-700 mb-1">
                            Invite Code
                        </label>
                        <input
                            id="invite_code"
                            type="text"
                            value={data.invite_code}
                            onChange={(e) => setData("invite_code", e.target.value)}
                            className={`w-full px-4 py-3 border rounded-lg text-black focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                                errors.invite_code ? 'border-red-500' : 'border-gray-300'
                            }`}
                            placeholder="Enter your invite code"
                        />
                        {errors.invite_code && <p className="mt-1 text-sm text-red-600">{errors.invite_code}</p>}
                    </div>

                    <button
                        type="submit"
                        disabled={processing}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                        {processing ? (
                            <span className="flex items-center justify-center">
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Processing...
                            </span>
                        ) : (
                            'Create Account'
                        )}
                    </button>
                </form>

                <div className="mt-6 pt-6 border-t border-gray-200 text-center">
                    <p className="text-gray-600">
                        Already have an account?{' '}
                        <a href={route('login')} className="text-blue-600 hover:text-blue-800 font-medium">
                            Sign in
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AdminRegister;