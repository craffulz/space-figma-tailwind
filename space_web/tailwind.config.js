/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out', 
      },

      

      colors: {
        blueH: "#0B0E17", 
      },
      fontFamily: {
        Bellefair: ["Bellefair", "sans-serif"],
        BarlowRegular: ["Barlow-Regular", "sans-serif"],
        BarlowCondensed: ["Barlow-Condensed", "sans-serif"],
      },
      backgroundImage: {
        //backgrounds for home
        home: "url('assets/home/background-home-desktop.jpg')",
        home_tablet: "url('assets/home/background-home-tablet.jpg')",
        home_mobile: "url('assets/home/background-home-mobile.jpg')",
        //backgrounds for destination
        destination:
          "url('assets/destination/background-destination-desktop.jpg')",
        destination_tablet:
          "url('assets/destination/background-destination-tablet.jpg')",
        destination_mobile:
          "url('assets/destination/background-destination-mobile.jpg')",
        //backgrounds for crew
        crew: "url('assets/crew/background-crew-desktop.jpg')",
        crew_tablet: "url('assets/crew/background-crew-tablet.jpg')",
        crew_Mobile: "url('assets/crew/background-crew-mobile.jpg')",
        //backgrounds for technology
        technology:
          "url('assets/technology/background-technology-desktop.jpg')",
        technology_tablet:
          "url('assets/technology/background-technology-tablet.jpg')",
        technology_mobile:
          "url('assets/technology/background-technology-mobile.jpg')",
      },
    },
  },
  plugins: [],
};
