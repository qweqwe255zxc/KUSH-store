/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{js,ts,jsx,tsx,css}", "./index.html"],
    theme: {
        extend: {
            keyframes: {
                loader: {
                    "0%": { transform: "rotate(0deg)" },
                    "100%": { transform: "rotate(720deg)" },
                },
            },
            animation: {
                loader: "loader 2.5s cubic-bezier(.7,0,.3,1) infinite",
            },
        },
    },
    plugins: [],
};
