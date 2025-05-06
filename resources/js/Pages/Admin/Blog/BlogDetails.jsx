import React from "react";
import AdminLayout from "@/Layouts/AdminLayout";
import { Link } from "@inertiajs/react";
import "./BlogDetails.css";

const BlogDetails = ({ blog }) => {
    // Function to split description into paragraphs with proper spacing
    const renderDescription = () => {
        if (!blog.description) return null;

        // Split by double newlines first (user's intended paragraphs)
        const paragraphs = blog.description.split("\n\n");

        return paragraphs.map((paragraph, index) => {
            // Further split long paragraphs (more than 200 words)
            const words = paragraph.split(" ");
            if (words.length > 200) {
                const chunks = [];
                for (let i = 0; i < words.length; i += 200) {
                    chunks.push(words.slice(i, i + 200).join(" "));
                }
                return chunks.map((chunk, chunkIndex) => (
                    <p
                        key={`${index}-${chunkIndex}`}
                        className="blog-paragraph"
                    >
                        {chunk}
                    </p>
                ));
            }
            return (
                <p key={index} className="blog-paragraph">
                    {paragraph}
                </p>
            );
        });
    };

    return (
        <AdminLayout>
            <div className="blog-details-container bg-white dark:bg-gray-900 p-6 rounded-lg shadow text-gray-800 dark:text-gray-100">
                {/* Blog Header */}
                <div className="blog-header flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                    <div>
                        <h1 className="blog-title text-3xl font-bold mb-2">
                            {blog.title}
                        </h1>
                        <div className="blog-meta text-sm space-x-4 text-gray-600 dark:text-gray-400">
                            <span className="blog-date">
                                {new Date(blog.date).toLocaleDateString(
                                    "en-US",
                                    {
                                        year: "numeric",
                                        month: "long",
                                        day: "numeric",
                                    }
                                )}
                            </span>
                            <span className="blog-author">
                                By {blog.published_by}
                            </span>
                            <span className="blog-category">
                                {blog.category}
                            </span>
                            <span className="blog-type">{blog.type}</span>
                            <span className="blog-likes">
                                {blog.likes} likes
                            </span>
                        </div>
                    </div>
                    <div className="blog-actions mt-4 md:mt-0 flex gap-3">
                        <Link
                            href={route("blogs.edit", blog.id)}
                            className="blog-edit-btn px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
                        >
                            Edit
                        </Link>
                        <Link
                            href={route("blogs.index")}
                            className="blog-back-btn px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-md hover:bg-gray-300 dark:hover:bg-gray-600"
                        >
                            Back
                        </Link>
                    </div>
                </div>

                {/* Featured Image */}
                {blog.image && (
                    <div className="blog-featured-image mb-6">
                        <img
                            src={`/storage/${blog.image}`}
                            alt={blog.title}
                            className="blog-image w-full rounded-md shadow-md"
                        />
                    </div>
                )}

                {/* Blog Summary */}
                {blog.summary && (
                    <div className="blog-summary mb-6 text-base text-gray-700 dark:text-gray-300">
                        <p>{blog.summary}</p>
                    </div>
                )}

                {/* Blog Content */}
                <div className="blog-content prose dark:prose-invert max-w-none mb-6">
                    {renderDescription()}
                </div>

                {/* Tags */}
                {blog.tags && blog.tags.length > 0 && (
                    <div className="blog-tags flex flex-wrap gap-2 mt-4">
                        {blog.tags.map((tag) => (
                            <span
                                key={tag}
                                className="blog-tag px-3 py-1 bg-teal-100 dark:bg-teal-800 text-teal-800 dark:text-teal-100 rounded-full text-sm"
                            >
                                #{tag}
                            </span>
                        ))}
                    </div>
                )}
            </div>
        </AdminLayout>
    );
};

export default BlogDetails;
