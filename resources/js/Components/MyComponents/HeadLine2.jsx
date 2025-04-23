import React from "react";

const HeadLine2 = ({ title, text }) => {
    return (
        <>
            <h2
                className={`text-4xl 2xl:text-6xl font-bold text-center ${`${text}`} my-10 md:my-20`}
            >
                {title}
            </h2>
        </>
    );
};

export default HeadLine2;
