const GradientIcon = ({ id, children }) => {
    const gradientId = `gradient-stroke-${id}`;
  
    return (
      <svg
        className="w-5 h-5 mr-2 mt-0.5"
        fill="none"
        stroke={`url(#${gradientId})`}
        viewBox="0 0 24 24"
      >
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#6366f1" />
          </linearGradient>
        </defs>
  
        {children}
      </svg>
    );
  };
  
  export default GradientIcon;
  