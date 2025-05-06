import AdminSidebar from '@/Pages/Admin/Sidebar/Sidebar';
import React from 'react';

export default function AdminLayout({ children }) {
    return (
        <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">
            <AdminSidebar />
            <main className="ml-64 w-full p-8">
                {children}
            </main>
        </div>
    );
}
