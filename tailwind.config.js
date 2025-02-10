/** @type {import('tailwindcss').Config} */

export default {
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "360px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1536px",
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        md: "2.5rem",
      },
      center: true,
    },
    extend: {
      fontFamily: {
        satoshi: ["Satoshi", "sans-serif"],
      },
      colors: {
        "brand-black": "#010101",
        "brand-blue": "#3E79EF",
        "brand-dark-blue": "#030B39",
        "brand-blue-darkest": "#1B3474",
        "brand-gray": "#4E5656",
        "brand-gray-dark": "#6C6C6C",
        "brand-gray-medium": "#B1B3B5",
        "brand-gray-light": "#F5F6F6",
        "brand-teal": "#00788A",
        "brand-yellow": "#EAB13A",
        "brand-green": "#15A766",
        "brand-neutral": "#BDC4D2",
      },

      fontSize: {
        oversize: ["6.25rem", "6.75rem"], // 100, 108,
        large: ["4.0625rem", "5rem"], // 65, 80,
        h1: ["3.5rem", "4rem"], // 56, 64,
        h2: ["3rem", "3.75rem"], // 48, 58,
        h3: ["2rem", "3rem"], // 40, 56,
        h4: ["1.5rem", "2.25rem"], // 28, 40,
        h5: ["1.125rem", "1.5rem"], // 18, 24,
        p1: ["1.6rem", "2.15rem"], // 26, 36,
        p2: ["1.3rem", "2rem"], // 24, 34,
        p3: ["1.375rem", "2.125rem"], // 22, 34,
        p4: ["1.15rem", "1.525rem"], // 18, 26,
        p5: ["1rem", "1.25rem"], // 16, 20,
      },

      boxShadow: {
        event: "0px 0px 20px 0px rgba(0, 0, 0, 0.07)",
        calendar: "0px 0px 55px 3px rgba(21, 47, 96, 0.07)",
        popup: "0px 4px 30px 3px rgba(21, 47, 96, 0.05)",
      },
    },
  },
  safelist: [
    {
      pattern:
        /(bg|text|border|hover:bg)-(brand-blue|brand-black|brand-dark-blue|brand-blue-darkest|brand-gray|brand-gray-dark|brand-gray-medium|brand-gray-light|brand-teal|brand-yellow|brand-green|brand-neutral)/,
    },
  ],
  plugins: [
    import("@tailwindcss/aspect-ratio"),
    import("tailwind-scrollbar"),
    import("tailwindcss-text-stroke"),
  ],
};
