import { useState, useEffect } from "react";
import "./Navbar.css"; // External CSS
import { Link, usePage } from "@inertiajs/react";

const Navbar = () => {
    const baseUrl = import.meta.env.VITE_APP_BASE_URL;
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isScrolled, setIsScrolled] = useState(false);

    const {
        url, // Current path (e.g., "/about")
    } = usePage();

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const screenWidth = window.innerWidth;

            setIsScrolled(
                screenWidth > 768 ? currentScrollY > 10 : currentScrollY > 30
            );
            setShowNavbar(
                !(
                    (currentScrollY > lastScrollY && currentScrollY > 1050) ||
                    (window.innerWidth <= 768 &&
                        currentScrollY > lastScrollY &&
                        currentScrollY > 550)
                )
            );

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    const navOptions = (
        <>
            <li>
                <a
                    href="/"
                    className={`nav-item mt-2 ${url === "/" ? "active" : ""}`}
                >
                    Home
                </a>
            </li>
            <li>
                <a
                    href="/about"
                    className={`nav-item mt-2 ${
                        url === "/about" ? "active" : ""
                    }`}
                >
                    About Us
                </a>
            </li>
            <li>
                <a
                    href="/blog"
                    className={`nav-item ${
                        url === "/blog" || url.startsWith("/blog/")
                            ? "active"
                            : ""
                    }`}
                >
                    Blogs
                </a>
            </li>
            <li>
                <a
                    href="/service"
                    className={`nav-item ${
                        url === "/service" || url.startsWith("/service/")
                            ? "active"
                            : ""
                    }`}
                >
                    Services
                </a>
            </li>
            <li>
                <a
                    href="/contact"
                    className={`nav-item mt-2 ${
                        url === "/contact" ? "active" : ""
                    }`}
                >
                    Contacts
                </a>
            </li>
        </>
    );

    return (
        <div
            className={`w-full flex justify-center fixed top-0 z-30 md:px-7 transition-all duration-300 ease-in-out dark:bg-gradient-to-r dark:from-[#4c494f00] dark:to-[#3e3e482c] md:backdrop-blur-md dark:backdrop-blur-md pb-2 ${
                isScrolled ? "bg-opacity-50 bg-gradient-to-r from-[#090909] to-[#bd63f1ab]" : "bg-opacity-70  "
            } ${showNavbar ? "translate-y-0 " : "-translate-y-full "}`}
        >
            <div className="w-full px-5 max-w-full lg:max-w-screen-xl 2xl:max-w-screen-2xl flex items-center justify-between mt-5 md:mt-2">
                <div className="md:hidden font-bold text-3xl dropdown">
                    <button tabIndex={0} className="mr-5 text-white">
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
                        className="menu w-44 p-2 menu-sm dropdown-content font-semibold bg-base-100 rounded-lg shadow-lg transition-transform duration-300 z-30"
                    >
                        {navOptions}
                    </ul>
                </div>
                <div>
                    {/* <Link href="/" className="md:ml-16 pb-3 md:pb-0">
                        <div
                            className={`inline-block px-4 py-2 rounded-lg transition-all duration-300 ${
                                isScrolled
                                    ? "bg-gradient-to-r from-[#a855f7] to-[#6366f1] shadow-md"
                                    : "bg-gradient-to-r from-[#a855f7] to-[#6366f1] shadow-md"
                            }`}
                        >
                            <h1 className="text-lg md:text-xl font-bold text-white">
                                Innovation
                                <span className="text-[#efebf1]">Labs</span>
                                <span className="text-[#ffffff]">360</span>
                            </h1>
                        </div>
                    </Link> */}

                    <Link href="/">
                        <img
                            src="/reactAssets/images/Logo18.png"
                            alt="Syntax Soft Systems Logo"
                            className="w-40 md:w-52  md:ml-16 -mt-1 rounded-md hover:scale-105  transition-transform duration-300 "
                        />
                    </Link>
                </div>

                <div className="navi">
                    <ul className="hidden md:flex text-xl font-semibold menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
