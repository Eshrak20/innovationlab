
const ProfileSection = ({ title, children, cols = 2 }) => {
    return (
        <div className="space-y-6">
        <h2 className="text-lg font-medium text-gray-900">{title}</h2>
        <div className={`grid grid-cols-1 md:grid-cols-${cols} gap-6`}>
            {children}
        </div>
    </div>
    );
};

export default ProfileSection;