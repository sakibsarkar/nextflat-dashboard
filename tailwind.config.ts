import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      "xsm": "450px",

      'sm': '700px',
      // => @media (min-width: 700px) { ... }

      'md': '880px',
      // => @media (min-width: 880px) { ... }

      'lg': '1270px',
      // => @media (min-width: 1270px) { ... }

      'xl': '1470px',
      // => @media (min-width: 1470px) { ... }

      '2xl': '1920px',
      // => @media (min-width: 1536px) { ... }
    },

    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
