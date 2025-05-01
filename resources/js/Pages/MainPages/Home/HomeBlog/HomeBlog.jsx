import { Link } from "@inertiajs/react";

const HomeBlog = ({ blog }) => {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 max-w-6xl">
                <h2 className="text-4xl font-bold text-center text-gray-800 mb-2">
                    Recent Blog Posts
                </h2>
                <p className="text-lg text-gray-600 text-center mb-12">
                    Discover our latest articles and tutorials
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {blog.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1"
                        >
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={`/storage/${item.image}`}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                    loading="lazy"
                                />
                                <span className="absolute bottom-3 left-3 bg-black bg-opacity-70 text-white px-3 py-1 rounded text-sm">
                                    {new Date(item.date).toDateString()}
                                </span>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 mb-4">
                                    {item.summary?.length > 35
                                        ? `${item.summary
                                              .substring(0, 135)
                                              .trim()
                                              .replace(/[,;:.!?]$/, "")}...`
                                        : item.summary || ""}
                                </p>

                                <div className="flex justify-between items-center">
                                    <a
                                        href={`/blog/${item.id}`} // Link to blog details page
                                        className="text-blue-500 font-medium hover:text-blue-700 transition-colors"
                                    >
                                        Read More →
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <Link href="/blog">
                    <div className="text-center">
                        <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 hover:-translate-y-1 shadow-md hover:shadow-lg">
                            View All Blog Posts
                        </button>
                    </div>
                </Link>
            </div>
        </section>
    );
};

export default HomeBlog;
