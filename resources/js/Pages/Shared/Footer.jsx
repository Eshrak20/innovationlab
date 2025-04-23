import {
    faFacebook,
    faLinkedin,
    faYoutube,
    faInstagram,
    faTwitter
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white">
            {/* Container */}
            <div className="max-w-full lg:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto md:px-8 lg:px-12 p-8">
                {/* Top Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-16">
                    {/* Head Office */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Head Office</h3>
                        <ul className="space-y-2">
                            <li className="flex items-start">
                                <svg className="w-5 h-5 mr-2 mt-0.5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span>House # 5, Road # 01<br />Mohammadpur R/A, Dhaka-1207</span>
                            </li>
                            <li className="flex items-center">
                                <svg className="w-5 h-5 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                +880-16-7098-8233
                            </li>
                            <li className="flex items-center">
                                <svg className="w-5 h-5 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                support@innovationlabs360.com
                            </li>
                        </ul>
                    </div>

                    {/* About Company */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Our Services</h3>
                        <p className="text-gray-300 mb-3">
                            Your one-stop solution for all digital needs - from stunning visuals to cutting-edge technology solutions that amplify your online presence.
                        </p>
                        <div className="flex space-x-4 mt-4">
                            <a href="#" className="text-blue-400 hover:text-blue-300">
                                <FontAwesomeIcon icon={faFacebook} size="lg" />
                            </a>
                            <a href="#" className="text-blue-400 hover:text-blue-300">
                                <FontAwesomeIcon icon={faLinkedin} size="lg" />
                            </a>
                            <a href="#" className="text-blue-400 hover:text-blue-300">
                                <FontAwesomeIcon icon={faTwitter} size="lg" />
                            </a>
                            <a href="#" className="text-blue-400 hover:text-blue-300">
                                <FontAwesomeIcon icon={faInstagram} size="lg" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            {[
                                { name: "Home", path: "/" },
                                { name: "About Us", path: "/about" },
                                { name: "Services", path: "/services" },
                                { name: "Projects", path: "/projects" },
                                { name: "Contact", path: "/contact" },
                                { name: "Privacy Policy", path: "/privacy" },
                                { name: "Terms of Service", path: "/terms" }
                            ].map((item, index) => (
                                <li key={index}>
                                    <a href={item.path} className="hover:text-blue-400 transition-colors flex items-center">
                                        <svg className="w-4 h-4 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Work Hours */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Work Hours</h3>
                        <p className="text-gray-300 mb-3">
                            We're available 24/7 to serve you. Let's discuss your project over a virtual coffee!
                        </p>
                        <div className="bg-gray-800 p-4 rounded-lg">
                            <p className="text-blue-400 font-medium">Need immediate assistance?</p>
                            <a href="tel:+8801670988233" className="text-white hover:text-blue-300 text-lg font-semibold">
                                +880 16 7098-8233
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-12 border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <div className="text-center md:text-left mb-4 md:mb-0">
                        <p className="text-gray-400">
                            © {new Date().getFullYear()} InnovationLabs360. All rights reserved.
                        </p>
                    </div>
                    
                    <div className="flex space-x-6">
                        <a href="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</a>
                        <a href="/terms" className="text-gray-400 hover:text-white">Terms of Service</a>
                        <a href="/contact" className="text-gray-400 hover:text-white">Contact Us</a>
                    </div>
                    
                    <div className="mt-4 md:mt-0 text-sm text-gray-500">
                        <p>Developed with ❤️ by <a href="/dashboard" className="text-blue-400 hover:underline" target="_blank">Our Web Team</a></p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;