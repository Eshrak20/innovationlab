import React from 'react';

const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
};

const ReFormatDate = ({ date }) => {
    const formattedDate = formatDate(date);

    return (
        <div>
            {formattedDate}
        </div>
    );
};

export default ReFormatDate;
