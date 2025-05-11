import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
    plugins: [
        laravel({
            input: ["resources/css/app.css", "resources/js/app.jsx"],
            refresh: [
                {
                    paths: ["resources/views/**"],
                    config: { delay: 300 },
                },
            ],
        }),
        react({
            jsxImportSource: "react",
            babel: {
                plugins: [
                    [
                        "@babel/plugin-transform-react-jsx",
                        { runtime: "automatic" },
                    ],
                    ["@babel/plugin-proposal-decorators", { legacy: true }],
                ],
            },
        }),
    ],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./resources/js"),
            "~": path.resolve(__dirname, "./resources"),
        },
    },

    //! This is for server development
    // server: {
    //     host: true,
    //     port: 5173,
    //     strictPort: true,
    //     hmr: {
    //         host: "ilabs360.com", // Replace with your domain
    //         protocol: "wss",
    //     },
    //     cors: {
    //         origin: ["https://ilabs360.com"], // Replace with your domain
    //         credentials: true,
    //     },
    // },
    //! This is for local development
    server: {
        host: "0.0.0.0",
        port: 5173,
        strictPort: true,
        hmr: {
            host: "192.168.10.120",
        },
        cors: {
            origin: ["http://192.168.10.120:8000"],
            credentials: true,
        },
    },

    build: {
        chunkSizeWarningLimit: 1600,
        manifest: true,
        outDir: "public/build",
        rollupOptions: {
            input: "resources/js/app.jsx",
        },
    },
});
