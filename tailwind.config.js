import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        extend: {
            colors: {
                success: "#1B42AE", // Add your success color here
            },
        },
    },
    plugins: [require("daisyui")] 
    ,
    daisyui: {
        themes: ["dark"], // Forces dark theme
    },

    plugins: [
        forms,
        function ({ addUtilities }) {
            addUtilities({
                ".no-scrollbar": {
                    /* Firefox */
                    "scrollbar-width": "none",
                    /* IE and Edge */
                    "-ms-overflow-style": "none",
                    /* WebKit */
                    "&::-webkit-scrollbar": {
                        display: "none",
                    },
                },
            });
        },
    ],
};
