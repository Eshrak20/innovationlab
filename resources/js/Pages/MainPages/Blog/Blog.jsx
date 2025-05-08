import React, { useEffect, useRef, useState } from "react";
import MainLayout from "@/Layouts/MainLayout";
import { Link } from "@inertiajs/react";
import DynamicBanner from "@/Components/MyComponents/DynamicBanner";
import videoSrc from "@/../../public/reactAssets/videos/purplevideo.mp4";
import BlogPagination from "./BlogPagination";

const Blog = ({ blogInfo }) => {
    const contentRef = useRef();
    useEffect(() => {
        if (contentRef.current) {
            contentRef.current.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    }, []);
    const [filter, setFilter] = useState("all");

    const filteredBlogs =
        filter === "all"
            ? blogInfo.data
            : blogInfo.data.filter(
                  (blog) => blog.category === filter || blog.type === filter
              );

    return (
        <MainLayout>
            <DynamicBanner
                videoSrc={videoSrc}
                title="Blog Section"
                breadcrumb="Home / About Us"
            />
             
            <section ref={contentRef} className="py-28 bg-gray-100 dark:bg-gray-900 min-h-screen">
                
                <div className="container mx-auto px-4 max-w-6xl">
                    <h2 className="text-4xl font-bold text-center mb-2 text-success">
                        Our Blog Posts
                    </h2>
                    <p className="text-lg text-gray-700 dark:text-gray-300 text-center mb-12">
                        Explore our latest technical and non-technical articles
                    </p>

                    {/* Filter Buttons */}
                    <div className="flex flex-wrap justify-center gap-4 mb-10">
                        {["all", "technical", "nontechnical"].map(
                            (category) => (
                                <button
                                    key={category}
                                    className={`px-5 py-2 rounded-full font-semibold capitalize transition-all glowing-button ${
                                        filter === category
                                            ? ""
                                            : "opacity-75 hover:opacity-100"
                                    }`}
                                    onClick={() => setFilter(category)}
                                >
                                    {category === "all"
                                        ? "All"
                                        : category.charAt(0).toUpperCase() +
                                          category.slice(1)}
                                </button>
                            )
                        )}
                    </div>

                    {/* Blog Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                        {filteredBlogs.length > 0 ? (
                            filteredBlogs.map((blog, index) => (
                                <Link
                                    key={blog.id}
                                    href={`/blog/${blog.slug}`}
                                    className="animate-fade-in-up"
                                    style={{
                                        animationDelay: `${index * 100}ms`,
                                    }}
                                >
                                    <div className="h-full relative flex flex-col bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 card-hover-glow">
                                        <div className="relative h-60 overflow-hidden image-container">
                                            {blog.image && (
                                                <img
                                                    src={`/storage/${blog.image}`}
                                                    alt={blog.title}
                                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                                    loading="lazy"
                                                />
                                            )}
                                            <span className="absolute bottom-3 left-3 bg-black bg-opacity-70 text-white px-3 py-1 rounded text-sm">
                                                {blog.date}
                                            </span>
                                            <span className="absolute top-3 right-3 bg-indigo-600 text-white px-3 py-1 rounded text-xs font-bold uppercase">
                                                {blog.category}
                                            </span>
                                        </div>
                                        <div className="p-6 flex-grow">
                                            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3 group-hover:text-indigo-400 transition-colors">
                                                {blog.title}
                                            </h3>
                                            <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                                                {blog.summary ||
                                                    "No summary available."}
                                            </p>
                                        </div>
                                        <div className="px-6 pb-6 pt-2">
                                            <button className="glowing-button px-4 py-2 rounded-full text-sm transition-all shadow-md">
                                                Read More →
                                            </button>
                                        </div>
                                    </div>
                                </Link>
                            ))
                        ) : (
                            <div className="text-center col-span-full text-gray-500 dark:text-gray-400 py-12">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-16 w-16 mx-auto mb-4 text-gray-400 dark:text-gray-500"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={1}
                                        d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                                <p className="text-xl">
                                    No blogs found in this category.
                                </p>
                                <button
                                    onClick={() => setFilter("all")}
                                    className="mt-4 text-indigo-500 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300 font-medium transition-colors"
                                >
                                    View all blogs
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </section>
            <BlogPagination links={blogInfo.links} />
        </MainLayout>
    );
};

export default Blog;
