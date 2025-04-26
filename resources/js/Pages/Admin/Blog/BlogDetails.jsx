import React from 'react';
import AdminLayout from '@/Layouts/AdminLayout';
import { Link } from '@inertiajs/react';

const BlogDetails = ({ blog }) => {
    return (
        <AdminLayout>
            <div className="p-6 bg-white rounded-lg shadow">
                <div className="flex justify-between items-start mb-6">
                    <div>
                        <h1 className="text-2xl font-bold">{blog.title}</h1>
                        <div className="flex items-center mt-2 space-x-4 text-sm text-gray-500">
                            <span>Published on: {new Date(blog.date).toLocaleDateString()}</span>
                            <span>By: {blog.published_by}</span>
                            <span className="capitalize">{blog.category}</span>
                            <span>{blog.type}</span>
                            <span>{blog.likes} likes</span>
                        </div>
                    </div>
                    <div className="flex space-x-2">
                        <Link
                            href={route('blogs.edit', blog.id)}
                            className="px-3 py-1 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 text-sm"
                        >
                            Edit
                        </Link>
                        <Link
                            href={route('blogs.index')}
                            className="px-3 py-1 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 text-sm"
                        >
                            Back
                        </Link>
                    </div>
                </div>

                {blog.image && (
                    <div className="mb-6">
                        <img 
                            src={blog.image} 
                            alt={blog.title} 
                            className="w-full h-64 object-cover rounded-lg"
                        />
                    </div>
                )}

                {blog.summary && (
                    <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                        <p className="text-gray-700 italic">{blog.summary}</p>
                    </div>
                )}

                <div className="prose max-w-none">
                    {blog.description.split('\n').map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                </div>
            </div>
        </AdminLayout>
    );
};

export default BlogDetails;