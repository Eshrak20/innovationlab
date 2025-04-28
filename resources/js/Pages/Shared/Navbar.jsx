import { Link } from "@inertiajs/inertia-react"; // Inertia Link
import "./Navbar.css"; // Import external CSS file for custom styles
import { useState, useEffect } from "react";


const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const navOptions = (
        <>
            <li>
                <a
                    href="/"
                    className={`nav-item mt-2 ${
                        location.pathname === "/" ? "active" : ""
                    }`}
                >
                    Home
                </a>
            </li>
            <li className="relative group">
                <a
                    href="/about"
                    className={`nav-item mt-2 ${
                        location.pathname === "/about" ? "active" : ""
                    }`}
                >
                    About Us
                </a>
            </li>
            <li className="relative group">
                <a
                href="/blog"
                    className={`nav-item mt-2 ${
                        location.pathname === "/blog" ? "active" : ""
                    }`}
                >
                    Blogs
                </a>
            </li>
            <li>
                <a
                    href="/contact"
                    className={`nav-item mt-2 ${
                        location.pathname === "/contact" ? "active" : ""
                    }`}
                >
                    Contacts
                </a>
            </li>
        </>
    );

    return (
        <>
            <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
                <div className="w-full flex justify-between md:top-10 z-10 md:pb-2 bg-white bg-opacity-100 mt-3">
                    <div className="w-full px-5 pt-2 py-1 max-w-full lg:max-w-screen-xl 2xl:max-w-screen-2xl flex items-center text-center justify-between mx-auto">
                        {/* Mobile Menu (Hidden on Desktop) */}
                        <div className="md:hidden font-bold text-3xl dropdown">
                            <button
                                tabIndex={0}
                                className="mr-5 text-[#1D232A]"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-7 w-7"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16"
                                    />
                                </svg>
                            </button>
                            <ul
                                tabIndex={0}
                                className="menu w-44 p-2 menu-sm dropdown-content font-semibold bg-base-100 rounded-lg shadow-lg z-30 text-[#1D232A]"
                            >
                                {navOptions}
                            </ul>
                        </div>

                        {/* Logo Section */}
                        <div>
                            <Link href="/" className="md:ml-16 pb-3 md:pb-0">
                                <div
                                    className={`inline-block px-4 py-2 rounded-lg transition-all duration-300 ${
                                        isScrolled
                                            ? "bg-gradient-to-r from-cyan-500 to-blue-600 shadow-md"
                                            : "bg-black"
                                    }`}
                                >
                                    <h1 className="text-lg md:text-xl font-bold text-white">
                                        Innovation
                                        <span className="text-cyan-300">
                                            Labs
                                        </span>
                                        <span className="text-blue-300">
                                            360
                                        </span>
                                    </h1>
                                </div>
                            </Link>
                        </div>

                        {/* Centered Navigation */}
                        <div className="navi flex-grow flex justify-end">
                            <nav className="hidden md:flex flex-grow justify-end">
                                <ul className="flex space-x-6 text-lg justify-end font-semibold">
                                    {navOptions}
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
