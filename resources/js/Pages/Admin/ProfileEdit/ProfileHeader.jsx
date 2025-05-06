
const ProfileHeader = ({ title, description }) => {
    return (
        <div className="p-6 border-b border-gray-200">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-200">{title}</h1>
            <p className="mt-1 text-gray-600 dark:text-gray-300">{description}</p>
        </div>
    );
};

export default ProfileHeader;
