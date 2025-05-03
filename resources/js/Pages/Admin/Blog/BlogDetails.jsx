import React from 'react';
import AdminLayout from '@/Layouts/AdminLayout';
import { Link } from '@inertiajs/react';
import './BlogDetails.css';

const BlogDetails = ({ blog }) => {
    // Function to split description into paragraphs with proper spacing
    const renderDescription = () => {
        if (!blog.description) return null;
        
        // Split by double newlines first (user's intended paragraphs)
        const paragraphs = blog.description.split('\n\n');
        
        return paragraphs.map((paragraph, index) => {
            // Further split long paragraphs (more than 200 words)
            const words = paragraph.split(' ');
            if (words.length > 200) {
                const chunks = [];
                for (let i = 0; i < words.length; i += 200) {
                    chunks.push(words.slice(i, i + 200).join(' '));
                }
                return chunks.map((chunk, chunkIndex) => (
                    <p key={`${index}-${chunkIndex}`} className="blog-paragraph">
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
            <div className="blog-details-container">
                {/* Blog Header */}
                <div className="blog-header">
                    <div>
                        <h1 className="blog-title">{blog.title}</h1>
                        <div className="blog-meta">
                            <span className="blog-date">
                                {new Date(blog.date).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })}
                            </span>
                            <span className="blog-author">By {blog.published_by}</span>
                            <span className="blog-category">{blog.category}</span>
                            <span className="blog-type">{blog.type}</span>
                            <span className="blog-likes">{blog.likes} likes</span>
                        </div>
                    </div>
                    <div className="blog-actions">
                        <Link
                            href={route('blogs.edit', blog.id)}
                            className="blog-edit-btn"
                        >
                            Edit
                        </Link>
                        <Link
                            href={route('blogs.index')}
                            className="blog-back-btn"
                        >
                            Back
                        </Link>
                    </div>
                </div>

                {/* Featured Image */}
                {blog.image && (
                    <div className="blog-featured-image">
                        <img 
                            src={`/storage/${blog.image}`} 
                            alt={blog.title} 
                            className="blog-image"
                        />
                    </div>
                )}

                {/* Blog Summary */}
                {blog.summary && (
                    <div className="blog-summary">
                        <p>{blog.summary}</p>
                    </div>
                )}

                {/* Blog Content */}
                <div className="blog-content">
                    {renderDescription()}
                </div>

                {/* Tags (if available) */}
                {blog.tags && blog.tags.length > 0 && (
                    <div className="blog-tags">
                        {blog.tags.map(tag => (
                            <span key={tag} className="blog-tag">{tag}</span>
                        ))}
                    </div>
                )}
            </div>
        </AdminLayout>
    );
};

export default BlogDetails;