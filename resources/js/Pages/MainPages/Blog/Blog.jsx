import React, { useState } from "react";
import { Link } from "@inertiajs/inertia-react";
import MainLayout from "@/Layouts/MainLayout";

const Blog = ({ blogInfo }) => {
    const [filter, setFilter] = useState("all");
    const [likedBlogs, setLikedBlogs] = useState({});
    const [hoveredCard, setHoveredCard] = useState(null);

    const handleLike = (id, e) => {
        e.stopPropagation();
        setLikedBlogs((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    const filteredBlogs =
        filter === "all"
            ? blogInfo
            : blogInfo.filter(
                  (blog) => blog.category === filter || blog.type === filter
              );

    return (
        <>
            <MainLayout>
                <section className="py-28 bg-gray-50 min-h-screen">
                    <div className="container mx-auto px-4 max-w-7xl">
                        <h2 className="text-4xl font-bold text-center text-gray-800 mb-2">
                            Our Blog Posts
                        </h2>
                        <p className="text-lg text-gray-600 text-center mb-12">
                            Explore our latest technical and non-technical
                            articles
                        </p>

                        {/* Filter Buttons */}
                        <div className="flex flex-wrap justify-center gap-4 mb-10">
                            {["all", "technical", "nontechnical"].map(
                                (category) => (
                                    <button
                                        key={category}
                                        className={`px-5 py-2 rounded-full font-semibold capitalize transition-all duration-300 ${
                                            filter === category
                                                ? "bg-blue-600 text-white shadow-md"
                                                : "bg-gray-200 hover:bg-blue-100 hover:text-blue-800"
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
                                filteredBlogs.map((blog) => (
                                    <Link
                                        key={blog.id}
                                        // href={route('blog.show', blog.slug)}
                                        className="block h-full"
                                        onMouseEnter={() =>
                                            setHoveredCard(blog.id)
                                        }
                                        onMouseLeave={() =>
                                            setHoveredCard(null)
                                        }
                                    >
                                        <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                                            <div className="relative h-64 overflow-hidden">
                                                {blog.image && (
                                                    <img
                                                        src={`/storage/${blog.image}`}
                                                        alt={blog.title}
                                                        className={`w-full h-full object-cover transition-transform duration-500 ${
                                                            hoveredCard ===
                                                            blog.id
                                                                ? "scale-110"
                                                                : "scale-100"
                                                        }`}
                                                        loading="lazy"
                                                    />
                                                )}
                                                <span className="absolute bottom-3 left-3 bg-black bg-opacity-70 text-white px-3 py-1 rounded-full text-sm font-medium">
                                                    {blog.date}
                                                </span>
                                                <span className="absolute top-3 right-3 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase">
                                                    {blog.category}
                                                </span>
                                            </div>

                                            <div className="p-6 flex-grow">
                                                <h3 className="text-2xl font-bold text-gray-800 mb-3 hover:text-blue-600 transition-colors">
                                                    {blog.title}
                                                </h3>
                                                <p className="text-gray-600 mb-4 line-clamp-3">
                                                    {blog.summary ||
                                                        "No summary available."}
                                                </p>
                                            </div>

                                            <div className="px-6 pb-6 pt-2 border-t border-gray-100">
                                                <div className="flex justify-between items-center">
                                                    <button
                                                        className={`flex items-center gap-1 px-3 py-1 rounded-full transition-all ${
                                                            likedBlogs[blog.id]
                                                                ? "text-red-500 hover:bg-red-50"
                                                                : "text-gray-500 hover:bg-gray-100"
                                                        }`}
                                                        onClick={(e) =>
                                                            handleLike(
                                                                blog.id,
                                                                e
                                                            )
                                                        }
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 24 24"
                                                            width="20"
                                                            height="20"
                                                            fill={
                                                                likedBlogs[
                                                                    blog.id
                                                                ]
                                                                    ? "currentColor"
                                                                    : "none"
                                                            }
                                                            stroke="currentColor"
                                                            strokeWidth="2"
                                                            className="transition-transform hover:scale-110"
                                                        >
                                                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                                                        </svg>
                                                        <span className="text-sm">
                                                            {likedBlogs[blog.id]
                                                                ? 1
                                                                : 0}
                                                        </span>
                                                    </button>

                                                    <span className="text-blue-500 font-medium hover:text-blue-700 transition-colors text-sm flex items-center">
                                                        Read More
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            className="h-4 w-4 ml-1"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                            stroke="currentColor"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth={2}
                                                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                                                            />
                                                        </svg>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                ))
                            ) : (
                                <div className="text-center col-span-full text-gray-500 py-12">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-16 w-16 mx-auto text-gray-400 mb-4"
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
                                        className="mt-4 text-blue-500 hover:text-blue-700 font-medium"
                                    >
                                        View all blogs
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </section>
            </MainLayout>
        </>
    );
};

export default Blog;
