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
    server: {
        host: "0.0.0.0",
        port: 5173,
        strictPort: true,
        hmr: {
            host: "192.168.10.120",
        },
    },
    build: {
        chunkSizeWarningLimit: 1600,
    },
});
