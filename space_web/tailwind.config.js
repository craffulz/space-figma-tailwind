/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blueH: "#0B0E17", // Reemplaza con el valor hexadecimal del color
      },
      fontFamily: {
        Bellefair: ["Bellefair", "sans-serif"],
        BarlowRegular: ["Barlow-Regular", "sans-serif"],
        BarlowCondensed: ["Barlow-Condensed", "sans-serif"],
      },
      backgroundImage: {
        //backgrounds for home
        home: "url('./src/assets/home/background-home-desktop.jpg')",
        //backgrounds for destination
        destination:
          "url('./src/assets/destination/background-destination-desktop.jpg')",
        //backgrounds for crew
        crew: "url('./src/assets/crew/background-crew-desktop.jpg')",
        crew_tablet: "url('./src/assets/crew/background-crew-tablet.jpg')",
        crew_Mobile: "url('./src/assets/crew/background-crew-mobile.jpg')",
        //backgrounds for technology
        technology: "url('./src/assets/technology/background-technology-desktop.jpg')",
        technology_tablet: "url('./src/assets/technology/background-technology-tablet.jpg')",
        technology_mobile: "url('./src/assets/technology/background-technology-mobile.jpg')",
      },
    },
  },
  plugins: [],
};
