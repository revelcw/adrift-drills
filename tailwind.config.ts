import type { Config } from "tailwindcss";

export default {
   content: ["./app/**/*.{js,jsx,ts,tsx}"],
   theme: {
      extend: {
        colors: {
          bg: '#1c1c1c',
          text: '#d6d6d6',
          secondary: {DEFAULT: "#4f4f4f", hover: '#2e2d2d'}
        }
      },
   },
   plugins: [],
} satisfies Config;