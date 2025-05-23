import AdminLayout from "@/Layouts/AdminLayout";

const Dashboard = () => {
    return (
        <AdminLayout>
            <div className="text-gray-800 dark:text-gray-200">
                <h1 className="text-3xl font-bold mb-6">
                    Welcome to Admin Panel 👨‍💻
                </h1>
                <p className="text-lg">
                    Manage your site content from the sidebar 👇
                </p>

                {/* Example section */}
                <div className="mt-8 p-6 bg-white dark:bg-gray-800 rounded-xl shadow dark:shadow-gray-700">
                    <h2 className="text-xl font-semibold mb-2">
                        Quick Actions
                    </h2>
                    <ul className="list-disc ml-6 text-gray-700 dark:text-gray-300">
                        <li>Add new blog</li>
                        <li>Update experience status</li>
                        <li>Check messages</li>
                    </ul>
                </div>
            </div>
        </AdminLayout>
    );
};

export default Dashboard;
