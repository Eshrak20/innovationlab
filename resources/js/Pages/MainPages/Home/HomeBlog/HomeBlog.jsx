import React, { useState } from 'react';

const HomeBlog = () => {
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: "Getting Started with React Hooks",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      excerpt: "Learn how to use React Hooks to simplify your functional components and manage state effectively.",
      likes: 124,
      date: "May 15, 2023",
      liked: false
    },
    {
      id: 2,
      title: "CSS Grid vs Flexbox",
      image: "https://images.unsplash.com/photo-1546146830-2cca9512c68e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      excerpt: "Understanding when to use CSS Grid and when to use Flexbox for your layouts.",
      likes: 89,
      date: "June 2, 2023",
      liked: false
    },
    {
      id: 3,
      title: "JavaScript ES2023 Features",
      image: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      excerpt: "Explore the newest JavaScript features coming in ES2023 and how to use them.",
      likes: 156,
      date: "June 10, 2023",
      liked: false
    },
    {
      id: 4,
      title: "Building Accessible Web Apps",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      excerpt: "Essential tips for creating web applications that everyone can use, regardless of ability.",
      likes: 72,
      date: "June 18, 2023",
      liked: false
    }
  ]);

  const handleLike = (id) => {
    setBlogs(blogs.map(blog => {
      if (blog.id === id) {
        return {
          ...blog,
          likes: blog.liked ? blog.likes - 1 : blog.likes + 1,
          liked: !blog.liked
        };
      }
      return blog;
    }));
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-2">Recent Blog Posts</h2>
        <p className="text-lg text-gray-600 text-center mb-12">Discover our latest articles and tutorials</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {blogs.map(blog => (
            <div 
              key={blog.id} 
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute bottom-3 left-3 bg-black bg-opacity-70 text-white px-3 py-1 rounded text-sm">
                  {blog.date}
                </span>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{blog.title}</h3>
                <p className="text-gray-600 mb-4">{blog.excerpt}</p>
                
                <div className="flex justify-between items-center">
                  <button 
                    className={`flex items-center gap-2 px-3 py-1 rounded-full transition-colors ${
                      blog.liked 
                        ? 'text-red-500 hover:bg-red-50' 
                        : 'text-gray-500 hover:bg-gray-100'
                    }`}
                    onClick={() => handleLike(blog.id)}
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 24 24" 
                      width="20" 
                      height="20"
                      fill={blog.liked ? "currentColor" : "none"}
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path 
                        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                      />
                    </svg>
                    <span>{blog.likes}</span>
                  </button>
                  
                  <a 
                    href="#" 
                    className="text-blue-500 font-medium hover:text-blue-700 transition-colors"
                  >
                    Read More →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 hover:-translate-y-1 shadow-md hover:shadow-lg">
            View All Blog Posts
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeBlog;