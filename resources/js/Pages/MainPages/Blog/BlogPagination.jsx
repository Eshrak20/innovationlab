import React from "react";
import { Link } from "@inertiajs/react";

const BlogPagination = ({ links }) => {
    if (!links || links.length === 0) return null;

    return (
        <div className="flex justify-center -mt-28 mb-10 dark:bg-[#111827]  space-x-1">
            {links.map((link, index) => (
                <Link
                    key={index}
                    href={link.url ?? "#"}
                    dangerouslySetInnerHTML={{ __html: link.label }}
                    className={`
                        relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300
                        border border-transparent
                        ${
                            link.active
                                ? "glowing-button text-white"
                                : `bg-white dark:bg-gray-800 
                                   text-gray-700 dark:text-gray-300 
                                   hover:text-indigo-600 dark:hover:text-indigo-400
                                   border-gray-200 dark:border-gray-700
                                   hover:shadow-md hover:-translate-y-0.5`
                        }
                        ${!link.url ? "opacity-50 cursor-not-allowed pointer-events-none" : ""}
                    `}
                />
            ))}
        </div>
    );
};

export default BlogPagination;