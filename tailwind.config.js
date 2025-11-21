/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#7e22ce', // Deep Purple (purple-700)
                    dark: '#581c87',    // purple-900
                },
                secondary: {
                    DEFAULT: '#000000', // Black
                    light: '#171717',   // neutral-900
                }
            },
            fontFamily: {
                sans: ['Space Mono', 'monospace'],
                serif: ['Space Mono', 'monospace'],
                mono: ['Space Mono', 'monospace'],
            }
        },
    },
    plugins: [],
}
