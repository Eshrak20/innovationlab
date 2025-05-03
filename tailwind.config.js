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
                success: "#1B42AE", // Your custom color
            },
            fontFamily: {
                sans: ['"Inter var"', ...defaultTheme.fontFamily.sans],
            },
        },
    },

    plugins: [
        forms,
        require("daisyui"),
        function ({ addUtilities }) {
            addUtilities({
                ".no-scrollbar": {
                    "scrollbar-width": "none",
                    "-ms-overflow-style": "none",
                    "&::-webkit-scrollbar": {
                        display: "none",
                    },
                },
            });
        },
    ],

    daisyui: {
        themes: ["light"], // Only load light theme
        darkTheme: "light", // Force light theme even in dark mode
        base: true,
        styled: true,
        utils: true,
        prefix: "",
        logs: true,
    },
};