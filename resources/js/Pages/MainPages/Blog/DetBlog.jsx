import MainLayout from "@/Layouts/MainLayout";
import { Link } from "@inertiajs/react";
import React from "react";

const DetBlog = ({ blog }) => {
    console.log(blog);
    return (
        <MainLayout>
            <section className="min-h-screen bg-gray-50">
                {/* Blog Banner */}
                <div className="relative h-96 w-full overflow-hidden">
                    {blog.image && (
                        <img
                            src={`/storage/${blog.image}`}
                            alt={blog.title}
                            className="w-full h-full object-cover"
                        />
                    )}
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                        <div className="text-center text-white max-w-4xl px-4">
                            <h1 className="text-4xl md:text-5xl font-bold mb-4">
                                {blog.title}
                            </h1>
                            <div className="flex justify-center items-center gap-4">
                                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                                    {blog.category}
                                </span>
                                <span className="text-white opacity-90">
                                    {blog.date}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Blog Content */}
                <div className="container mx-auto px-4 py-12 max-w-4xl">
                    <div className="bg-white rounded-xl shadow-lg p-8 md:p-10">
                        {/* Main Content */}
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            {blog.title}
                        </h1>
                        <div className="prose max-w-none">
                            {blog.description ? (
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: blog.description,
                                    }}
                                />
                            ) : (
                                <p className="text-gray-500 italic">
                                    No content available for this blog post.
                                </p>
                            )}
                        </div>
                        {/* Summary Section */}
                        <div className="mb-10 pb-8 border-b border-gray-200 mt-10">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">
                                Summary
                            </h2>
                            <p className="text-gray-600 leading-relaxed">
                                {blog.summary || "No summary available."}
                            </p>
                        </div>
                        {/* Author/Publisher Info */}
                        <div className="mt-12 pt-8 border-t border-gray-200">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
                                    {blog.author_image && (
                                        <img
                                            src={`/storage/${blog.author_image}`}
                                            alt={blog.published_by}
                                            className="w-full h-full object-cover"
                                        />
                                    )}
                                </div>

                                <div>
                                    <h4 className="font-bold text-gray-800">
                                        Published by {blog.published_by}
                                    </h4>
                                    <p className="text-sm text-gray-500">
                                        {blog.published_date}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Back to Blog Link */}
                        <div className="mt-12 text-center">
                            <Link
                                href="/blog"
                                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 mr-2"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                Back to all blog posts
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </MainLayout>
    );
};

export default DetBlog;
