import React from "react";
import { Link, router, usePage } from "@inertiajs/react";

export default function AdminSidebar() {
    const { url } = usePage();

    const menu = [
        { name: "Profile", path: "/profile" },
        { name: "Upload New Blog", path: "/blogs" },
        { name: "Upload New Services", path: "/services" },
        { name: "Gallery", path: "/gallery" },
        { name: "Experience Status", path: "/experienceStatuses" },
        { name: "Missions", path: "/mission" },
        { name: "Core Team Data", path: "/managementData" },
        { name: "Contact Info", path: "/contactInfo" },
        { name: "Messages", path: "/forms" },
    ];

    function handleLogout() {
        router.post(
            "/logout",
            {},
            {
                onSuccess: () => {
                    window.location.reload(); // Refresh the page after logout
                },
            }
        );
    }

    return (
        <div className="w-64 h-screen bg-gray-900 text-white shadow-lg fixed top-0 left-0 flex flex-col">
            <div className="text-2xl font-bold p-4 border-b border-gray-700">
                Admin Panel
            </div>

            <div className="flex-1 overflow-y-auto">
                <ul className="space-y-1 p-4">
                    {menu.map((item, idx) => (
                        <li key={idx}>
                            <Link
                                href={item.path}
                                className={`block px-4 py-2 rounded hover:bg-blue-600 transition ${
                                    url.startsWith(item.path)
                                        ? "bg-blue-700"
                                        : ""
                                }`}
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="border-t border-gray-700 p-4">
                <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 rounded bg-red-600 hover:bg-red-700 transition"
                >
                    Logout
                </button>
            </div>
        </div>
    );
}
