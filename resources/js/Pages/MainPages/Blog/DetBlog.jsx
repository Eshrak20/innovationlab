import MainLayout from "@/Layouts/MainLayout";
import { Link } from "@inertiajs/react";
import React from "react";
import "./DetBlog.css";

const DetBlog = ({ blog }) => {
    const blogUrl = window.location.href;

    // Helper to split description
    const splitIntoParagraphs = (htmlString) => {
        const tempDiv = document.createElement("div");
        tempDiv.innerHTML = htmlString;
        const text = tempDiv.textContent || tempDiv.innerText || "";
        const words = text.split(/\s+/);

        const paragraphs = [];
        for (let i = 0; i < words.length; i += 150) {
            const chunk = words.slice(i, i + 150).join(" ");
            paragraphs.push(chunk);
        }

        return paragraphs;
    };

    const copyLink = () => {
        navigator.clipboard.writeText(blogUrl);
        alert("Blog link copied to clipboard!");
    };

    return (
        <MainLayout>
            <section className="blog-detail-section">
                {/* Blog Header */}
                <div className="blog-header">
                    {blog.image && (
                        <img
                            src={`/storage/${blog.image}`}
                            alt={blog.title}
                            className="blog-header-img"
                        />
                    )}
                    <div className="blog-header-overlay">
                        <h1 className="blog-title">{blog.title}</h1>
                        <div className="blog-meta">
                            <span className="blog-category">{blog.category}</span>
                            <span className="blog-date">{blog.date}</span>
                        </div>
                    </div>
                </div>

                {/* Blog Content */}
                <div className="blog-container">
                    <div className="blog-content">
                        {splitIntoParagraphs(blog.description || "").map((para, idx) => (
                            <p key={idx}>{para}</p>
                        ))}
                    </div>

                    {/* Summary */}
                    <div className="blog-summary">
                        <h2>Summary</h2>
                        <p>{blog.summary || "No summary available."}</p>
                    </div>

                    {/* Share Section */}
                    <div className="blog-share">
                        <h3>Share this blog:</h3>
                        <div className="share-buttons">
                            <a
                                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(blogUrl)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Facebook
                            </a>
                            <a
                                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(blogUrl)}&text=${encodeURIComponent(blog.title)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Twitter
                            </a>
                            <a
                                href={`https://wa.me/?text=${encodeURIComponent(blog.title + " - " + blogUrl)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                WhatsApp
                            </a>
                            <button onClick={copyLink}>Copy Link</button>
                        </div>
                    </div>

                    {/* Author Info */}
                    <div className="blog-author">
                        <div className="author-avatar">
                            {blog.author_image && (
                                <img
                                    src={`/storage/${blog.author_image}`}
                                    alt={blog.published_by}
                                />
                            )}
                        </div>
                        <div className="author-info">
                            <strong>{blog.published_by}</strong>
                            <p>{blog.published_date}</p>
                        </div>
                    </div>

                    {/* Back Link */}
                    <div className="blog-back">
                        <Link href="/blog">&larr; Back to all blogs</Link>
                    </div>
                </div>
            </section>
        </MainLayout>
    );
};

export default DetBlog;
