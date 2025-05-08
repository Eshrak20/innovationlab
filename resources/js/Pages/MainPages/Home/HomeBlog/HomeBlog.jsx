import { Link } from "@inertiajs/react";
import { motion } from "framer-motion";
import "./HomeBlog.css";

const HomeBlog = ({ blog }) => {
    return (
        <section className="py-16 relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 -z-10 opacity-10">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-900 to-indigo-800 rounded-full filter blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 max-w-6xl">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-gradient text-4xl font-bold mb-4">
                        Recent Blog Posts
                    </h2>
                    <p className="text-xl text-gray-700 dark:text-gray-200">
                        Discover our latest articles and tutorials
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
                    {blog.slice(0,6).map((item) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="blog-card-container group"
                        >
                            <div className="blog-card">
                                <div className="relative h-60 overflow-hidden rounded-t-lg">
                                    <img
                                        src={`/storage/${item.image}`}
                                        alt={item.title}
                                        className="w-full h-full object-cover transition-transform duration-500"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                    <span className="absolute bottom-4 left-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                                        {new Date(item.date).toLocaleDateString()}
                                    </span>
                                </div>

                                <div className="p-6 bg-gray-900 rounded-b-lg border-t-0">
                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-400 mb-5">
                                        {item.summary?.length > 35
                                            ? `${item.summary
                                                  .substring(0, 135)
                                                  .trim()
                                                  .replace(/[,;:.!?]$/, "")}...`
                                            : item.summary || ""}
                                    </p>

                                    <Link 
                                        href={`/blog/${item.id}`}
                                        className="inline-flex items-center text-purple-400 font-medium hover:text-purple-300 transition-colors"
                                    >
                                        Read More
                                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <Link href="/blog">
                        <button className="glowing-button px-8 py-3 text-lg font-medium rounded-full">
                            View All Blog Posts
                            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 hover:opacity-100 transition-opacity duration-300 -z-10"></span>
                        </button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default HomeBlog;