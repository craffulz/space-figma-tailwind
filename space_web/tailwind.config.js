/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Bellefair: ["Bellefair", "sans-serif"],
        BarlowRegular: ["Barlow-Regular", "sans-serif"],
        BarlowCondensed: ["Barlow-Condensed", "sans-serif"],
      },
      backgroundImage: {
        home: "url('./src/assets/home/background-home-desktop.jpg')",
        destination:
          "url('./src/assets/destination/background-destination-desktop.jpg')",
      },
      spacing: {
        "-32": "-32px",
      },
    },
  },
  plugins: [],
};
