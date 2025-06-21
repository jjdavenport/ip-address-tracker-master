/** @type {import('tailwindcss').Config} */
export default {
  content: {
    files: ["./src/**/*.{html,js,jsx}", "./index.html"],
  },
  theme: {
    extend: {
      fontFamily: {
        custom: ["rubik", "sans-serif"],
      },
      backgroundImage: {
        desktop: "url('../src/components/assets/pattern-bg-desktop.png')",
        mobile: "url('../src/components/assets/pattern-bg-mobile.png')",
      },
      colors: {
        veryDarkGray: "hsl(0, 0%, 17%)",
        darkGray: "hsl(0, 0%, 59%)",
      },
    },
  },
  plugins: [],
};
